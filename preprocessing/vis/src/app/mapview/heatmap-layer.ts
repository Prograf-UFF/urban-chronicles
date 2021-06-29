/// <reference types="@types/webgl2" />

import { Layer } from './layer';
import { DataLoader } from './data-loader';
import { DataApi } from './data-api';
import { ColorMapType } from './constants';
import { ColorMap } from './colormap';

import { percentile } from 'stats-lite';

export class HeatmapLayer extends Layer {
  // number of coordinates per vertex
  protected static COORDS = 2;
  // number of shaders
  protected static N_SHADER = 1;

  // primitive Ids
  protected _features: any = {};

  // OpenGL data buffer
  protected _glPositionBuffer: WebGLBuffer = null;
  protected _glTexCoordsBuffer: WebGLBuffer = null;
  protected _glIndexBuffer: WebGLBuffer = null;

  protected _glColorMapTex: WebGLTexture = null;
  protected _glFunctionTex: WebGLTexture = null;

  // function texture resolution
  protected _functionResX = 0;
  protected _functionResY = 0;

  // shader attribute id
  protected _positionId = -1;
  protected _texCoordsId = -1;

  // transformation uniforms
  protected _uModelViewMatrixId: WebGLUniformLocation = -1;
  protected _uProjectionMatrixId: WebGLUniformLocation = -1;
  protected _uWorldOriginId: WebGLUniformLocation = -1;

  // color map uniform
  protected _uColorMapId: WebGLUniformLocation = -1;
  protected _uFunctionId: WebGLUniformLocation = -1;

  /**
   * The Vector Layer constructor
   * @param {string} id the layer id
   */
  constructor(id: string) {
    super(id);
    this._visible = false;
  }

  /**
   * Shader load signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  async loadShaders(glContext: WebGL2RenderingContext) {
    // load the shaders
    for (let id = 0; id < HeatmapLayer.N_SHADER; id++) {
      // shaders url
      const vertUrl = `assets/shaders/heatmap(${id}).vert`;
      const fragUrl = `assets/shaders/heatmap(${id}).frag`;

      // Vertex shader program
      const vsShader = await DataLoader.getTextData(vertUrl);
      // Fragment shader program
      const fsShader = await DataLoader.getTextData(fragUrl);

      // load all shaders
      this.initShaderProgram(vsShader, fsShader, glContext);
    }

    // vertex data on the shader
    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
    this._texCoordsId = glContext.getAttribLocation(this._shaderProgram[0], 'vertTexCoords');

    // transformation uniforms on the shader
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');

    // colorMap texture
    this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');
    this._uFunctionId = glContext.getUniformLocation(this._shaderProgram[0], 'uFunction');

    // load message
    console.log(`#${HeatmapLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
  }

  /**
   * Data update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFeatures(glContext: WebGL2RenderingContext, data: any = null) {
    if (data === null) {
      // gets the feature of index id
      data = await DataApi.getLayerFeature(this._layerId);
    }

    // new feature found
    this._features = {'position': [], 'texCoords': [], 'scalar': [], 'index': []};

    // grid corners
    const corners = data.coordinates;
    // quad geometry
    const position = [
      corners[0][0], corners[0][1],
      corners[1][0], corners[0][1],
      corners[1][0], corners[1][1],
      corners[0][0], corners[1][1],
    ];
    // build the indices
    const indices = [0, 1, 3, 1, 2, 3];
    // texture coordinates
    const texCoords = [
      0, 0, 0, 1,
      1, 1, 1, 0,
    ];

    // resolution
    this._functionResX = data.resX;
    this._functionResY = data.resY;

    // add to the feature
    this._features['position'] = position;
    this._features['texCoords'] = texCoords;

    // scalar function
    const scalar = data.grid;
    const noNull = scalar.filter(d => d > 0);

    const min = percentile(noNull, 0.15);
    const max = percentile(noNull, 0.95);

    // add to the feature
    this._features['scalar'] = scalar.map(val => {
      return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
    });

    this._features['index'] = indices;

    // creates the buffer
    this.createBuffers(glContext);
    // creates the scalar data vbo
    this.createFunctionTexture(glContext);
    // creates the color map
    this.createColorMapTexture(glContext, ColorMapType.SEQUENTIAL_RED_MAP, false);
  }

  /**
   * Function update signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  async updateFunction(glContext: WebGL2RenderingContext, data: any) {
    // resolution
    this._functionResX = data.resX;
    this._functionResY = data.resY;

    // scalar function
    const scalar = data.grid;
    const noNull = scalar.filter(d => d > 0);

    const min = percentile(noNull, 0.15);
    const max = percentile(noNull, 0.95);

    // add to the feature
    this._features['scalar'] = scalar.map(val => {
      return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
    });

    // creates the scalar data vbo
    this.createFunctionTexture(glContext);
  }

  /**
   * Changes the color map
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} cMap Color Map
   */
  updateColorMap(glContext: WebGL2RenderingContext, cMap: ColorMapType) {
    // creates the color map
    this.createColorMapTexture(glContext, cMap, false);
  }

  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  render(glContext: WebGL2RenderingContext) {
    // invalid layers
    if (
      this._shaderProgram.length === 0 ||
      this._shaderProgram[0] === null ||
      this._glPositionBuffer === null ||
      this._glTexCoordsBuffer === null ||
      this._glIndexBuffer === null ||
      this._glColorMapTex === null ||
      this._glFunctionTex === null ||
      this._positionId < 0 ||
      this._texCoordsId < 0
    ) {
      return;
    }

    // sends the uniforms
    this.setUniforms(glContext);

    // bending
    glContext.enable(glContext.BLEND);
    glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer);
    glContext.vertexAttribPointer(this._texCoordsId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._texCoordsId);

    // Tell WebGL which indices to use to index the vertices
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);

    // Tell WebGL we want to affect texture unit 0
    glContext.activeTexture(glContext.TEXTURE0);
    // Bind the texture to texture unit 0
    glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex);

    // Tell WebGL we want to affect texture unit 1
    glContext.activeTexture(glContext.TEXTURE1);
    // Bind the texture to texture unit 1
    glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);

    // binds the shader program
    glContext.useProgram(this._shaderProgram[0]);

    // draw the geometry
    glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);

    // disable blend
    glContext.disable(glContext.BLEND);
  }

  /**
   * Send uniforms to the shader
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected setUniforms(glContext: WebGL2RenderingContext) {
    if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
      return;
    }
    // selects the shader
    glContext.useProgram(this._shaderProgram[0]);

    // send matrices
    glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
    glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
    // send world origin
    const worldOrigin = this._camera.getWorldOrigin();
    glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);

    // functions texture
    glContext.uniform1i(this._uFunctionId, 0);
    // color map
    glContext.uniform1i(this._uColorMapId, 1);
  }

  /**
   * Layer VBO creation signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected createBuffers(glContext: WebGL2RenderingContext) {
    // Create a buffer for the positions.
    this._glPositionBuffer = glContext.createBuffer();
    // Select the positionBuffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW
    );

    // Create a buffer for the positions.
    this._glTexCoordsBuffer = glContext.createBuffer();
    // Select the positionBuffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['texCoords']), glContext.STATIC_DRAW
    );

    // Create a buffer for the indices.
    this._glIndexBuffer = glContext.createBuffer();
    // Select the index buffer as the one to apply buffer
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
  }

  /**
   * Scalar data vbo creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected createFunctionTexture(glContext: WebGL2RenderingContext) {
    // gl color map texture
    if (this._glFunctionTex === null) {
      this._glFunctionTex = glContext.createTexture();
    }
    // send the color map
    glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex);
    glContext.texImage2D(
      glContext.TEXTURE_2D, 0, glContext.R16F, this._functionResX, this._functionResY, 0,
      glContext.RED, glContext.FLOAT, new Float32Array(this._features['scalar'])
    );
    // texture resize
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);
    // Prevents s-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
    // Prevents t-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
  }

    /**
   * Color map texture creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} color Selected color map
   * @param {boolean} get the reverse color map
   */
  protected createColorMapTexture(glContext: WebGL2RenderingContext, color: ColorMapType, reverse: boolean = false) {
    // gets the color map
    const cmap = ColorMap.getColorMap(color, reverse);
    // gl color map texture
    if (this._glColorMapTex === null) {
      this._glColorMapTex = glContext.createTexture();
    }

    // send the color map
    glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
    glContext.texImage2D(
      glContext.TEXTURE_2D, 0, glContext.RGBA, cmap.length / 4, 1, 0,
      glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(cmap)
    );
    // texture resize
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);
    // Prevents s-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
    // Prevents t-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
  }
}
