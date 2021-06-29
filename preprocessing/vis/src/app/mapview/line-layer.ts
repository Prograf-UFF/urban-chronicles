/// <reference types="@types/webgl2" />

import { Layer } from './layer';
import { DataLoader } from './data-loader';
import { DataApi } from './data-api';
import { ColorMapType } from './constants';
import { ColorMap } from './colormap';

export class LineLayer extends Layer {
  // number of coordinates per vertex
  protected static COORDS = 2;
  // number of shaders
  protected static N_SHADER = 1;
  // line width
  protected static LINE_WIDTH = 2;

  // primitive Ids
  protected _features: any = {};

  // OpenGL data buffer
  protected _glPositionBuffer: WebGLBuffer = null;
  protected _glScalarBuffer: WebGLBuffer = null;
  protected _glColorMapTex: WebGLTexture = null;

  // shader attribute id
  protected _positionId = -1;
  protected _scalarId = -1;

  // transformation uniforms
  protected _uModelViewMatrixId: WebGLUniformLocation = -1;
  protected _uProjectionMatrixId: WebGLUniformLocation = -1;
  protected _uWorldOriginId: WebGLUniformLocation = -1;


  // color map uniform
  protected _uColorMapId: WebGLUniformLocation = -1;

  /**
   * The Vector Layer constructor
   * @param {string} id the layer id
   */
  constructor(id: string) {
    super(id);
  }

  /**
   * Shader load signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  async loadShaders(glContext: WebGL2RenderingContext) {
    // load the shaders
    for (let id = 0; id < LineLayer.N_SHADER; id++) {
      // shaders url
      const vertUrl = `assets/shaders/mapview/line(${id}).vert`;
      const fragUrl = `assets/shaders/mapview/line(${id}).frag`;

      // Vertex shader program
      const vsShader = await DataLoader.getTextData(vertUrl);
      // Fragment shader program
      const fsShader = await DataLoader.getTextData(fragUrl);

      // load all shaders
      this.initShaderProgram(vsShader, fsShader, glContext);
    }

    // vertex data on the shader
    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
    this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar');

    // transformation uniforms on the shader
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');

    // colorMap texture
    this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');

    // load message
    console.log(`Shaders successfully loaded for layer ${this._layerId}.`);
  }

  /**
   * Data update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFeatures(glContext: WebGL2RenderingContext, data: any = null) {
    // gets the feature of index id
    if (data === null) {
      data = await DataApi.getLayerFeature(this._layerId);
    }
    // feature definition found
    this._features = {'position': [], 'scalar': []};

    // iterate over geometry
    for (const feature of data.features) {
      // get the coordinates
      const position = feature.geometry;
      const scalar = new Array(position.length / LineLayer.COORDS).fill(0.0);

      // add to the feature
      this._features['position'] = this._features['position'].concat(position);
      this._features['scalar'] = this._features['scalar'].concat(scalar);
    }

    // creates the buffer
    this.createBuffers(glContext);
    // creates the scalar data vbo
    this.createScalarBuffer(glContext);
    // creates the color map
    this.createColorMapTexture(glContext, ColorMapType.SEQUENTIAL_RED_MAP, false);
  }

  /**
   * Function update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFunction(glContext: WebGL2RenderingContext, data: any) {
    // scalar function
    const features = data.features;

    // new feature found
    this._features['scalar'] = [];

    // fill the function array
    for (const feature of features) {
      // get the function values
      const scalar = feature.scalar;
      const normalized = scalar.map((val) => {
        return (val - feature.sMin) / (feature.sMax - feature.sMin);
      });
      this._features['scalar'] = this._features['scalar'].concat(normalized);
    }

    // creates the scalar data vbo
    this.createScalarBuffer(glContext);
    // creates the color map
    this.createColorMapTexture(glContext, ColorMapType.SEQUENTIAL_RED_MAP, false);
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
      this._glScalarBuffer === null ||
      this._positionId < 0 ||
      this._scalarId < 0
    ) {
      return;
    }

    // sends the uniforms
    this.setUniforms(glContext);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, LineLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the scalar buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
    glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._scalarId);

    // Tell WebGL we want to affect texture unit 0
    glContext.activeTexture(glContext.TEXTURE0);
    // Bind the texture to texture unit 0
    glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);

    // binds the shader program
    glContext.useProgram(this._shaderProgram[0]);
    glContext.lineWidth(LineLayer.LINE_WIDTH);

    // draw the geometry
    glContext.drawArrays(glContext.LINES, 0, this._features['position'].length / LineLayer.COORDS);
  }

  /**
   * Send uniforms to the shader
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected setUniforms(glContext: WebGL2RenderingContext) {
    if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
      return;
    }
    glContext.useProgram(this._shaderProgram[0]);
    // send matrices
    glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
    glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
    // send world origin
    const worldOrigin = this._camera.getWorldOrigin();
    glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);

    // send the color map
    glContext.uniform1i(this._uColorMapId, 0);
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
  }

  /**
   * Scalar data vbo creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected createScalarBuffer(glContext: WebGL2RenderingContext) {
    // Create a buffer for the colors.
    if (this._glScalarBuffer === null) {
      this._glScalarBuffer = glContext.createBuffer();
    }
    // Select the color buffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['scalar']), glContext.STATIC_DRAW
    );
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

    // glContext.NEAREST is also allowed, instead of glContext.LINEAR, as neither mipmap.
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);

    // Prevents s-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
    // Prevents t-coordinate wrapping (repeating).
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
  }
}
