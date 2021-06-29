/// <reference types="@types/webgl2" />

import { Layer } from './layer';
import { DataLoader } from './data-loader';
import { DataApi } from './data-api';

export class PhysicalLayer extends Layer {
  // number of coordinates per vertex
  protected static COORDS = 2;
  // number of shaders
  protected static N_SHADER = 1;

  // primitive Ids
  protected _features: any = {};

  // OpenGL data buffer
  protected _glPositionBuffer: WebGLBuffer = null;
  protected _glColorBuffer: WebGLBuffer = null;
  protected _glIndexBuffer: WebGLBuffer = null;

  // data buffer
  protected _positionBuffer: number[] = [];
  protected _colorBuffer: number[] = [];
  protected _indexBuffer: number[] = [];

  // shader attribute id
  protected _positionId = -1;
  protected _colorId = -1;

  // uniforms
  protected _uModelViewMatrixId: WebGLUniformLocation = -1;
  protected _uProjectionMatrixId: WebGLUniformLocation = -1;
  protected _uWorldOrigin: WebGLUniformLocation = -1;

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
    for (let id = 0; id < PhysicalLayer.N_SHADER; id++) {
      // shaders url
      const vertUrl = `assets/shaders/physical(${id}).vert`;
      const fragUrl = `assets/shaders/physical(${id}).frag`;

      // Vertex shader program
      const vsShader = await DataLoader.getTextData(vertUrl);
      // Fragment shader program
      const fsShader = await DataLoader.getTextData(fragUrl);

      // load all shaders
      this.initShaderProgram(vsShader, fsShader, glContext);
    }

    // uniforms definition
    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
    this._colorId = glContext.getAttribLocation(this._shaderProgram[0], 'vertRgb');
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
    this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');

    // load message
    console.log(`Shaders successfully loaded for layer ${this._layerId}.`);
  }

  /**
   * Data update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFeatures(glContext: WebGL2RenderingContext, data: any = null) {
    // gets the feature of index id
    data = await DataApi.getLayerFeature(this._layerId);

    // new feature found
    this._features = {
      'position': [], 'color': [], 'index': [], 'function': [], 'size': []
    };

    // loaded number of vertices
    let nverts = 0;

    // iterates over the geometries
    for (const feature of data.features) {
      // gets the feature color
      const hex = feature.properties.color.slice(2, 8);
      const rgb = [0, 2, 4].map((start) => {
        return parseInt(hex.slice(start, start + 2), 16) / 255;
      });

      // get the coordinates
      const position = feature.geometry.coordinates;
      // get the colors
      const colors = [];
      for (let id = 0; id < position.length / PhysicalLayer.COORDS; id++) {
        colors.push(...rgb);
      }

      // build the indices
      const indices = feature.geometry.indices;
      for (let id = 0; id < indices.length; id++) {
        indices[id] += nverts;
      }

      // add to the feature
      this._features['position'].push.apply(this._features['position'], position);
      this._features['color'].push.apply(this._features['color'], colors);
      this._features['index'].push.apply(this._features['index'], indices);

      // loaded vertices
      nverts += position.length / PhysicalLayer.COORDS;
    }
    // formats the buffer
    this._positionBuffer = this._features['position'];
    // formats the buffer
    this._colorBuffer = this._features['color'];
    // formats the buffer
    this._indexBuffer = this._features['index'];

    // creates the buffer
    this.createBuffers(glContext);
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
      this._glColorBuffer === null ||
      this._glIndexBuffer === null ||
      this._positionId < 0 ||
      this._colorId < 0
    ) {
      return;
    }

    // sends the uniforms
    this.setUniforms(glContext);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, PhysicalLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer);
    glContext.vertexAttribPointer(this._colorId, 3, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._colorId);

    // Tell WebGL which indices to use to index the vertices
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // binds the shader program
    glContext.useProgram(this._shaderProgram[0]);
    // draw the geometry
    glContext.drawElements(glContext.TRIANGLES, this._indexBuffer.length, glContext.UNSIGNED_INT, 0);
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
    glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]);
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
      glContext.ARRAY_BUFFER, new Float32Array(this._positionBuffer), glContext.STATIC_DRAW
    );

    // Create a buffer for the colors.
    this._glColorBuffer = glContext.createBuffer();
    // Select the color buffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._colorBuffer), glContext.STATIC_DRAW
    );

    // Create a buffer for the indices.
    this._glIndexBuffer = glContext.createBuffer();
    // Select the index buffer as the one to apply buffer
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._indexBuffer), glContext.STATIC_DRAW);
  }
}
