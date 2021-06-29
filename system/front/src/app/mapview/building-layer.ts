/// <reference types="@types/webgl2" />

import { Layer } from './layer';

import { DataApi } from './data-api';
import { DataLoader } from './data-loader';

import { vec3 } from 'gl-matrix';

export class BuildingLayer extends Layer {
  // number of coordinates per vertex
  protected static COORDS = 3;
  // number of shaders
  protected static N_SHADER = 2;

  // primitive Ids
  protected _features: any = {};

  // OpenGL data buffer
  protected _glPositionBuffer: WebGLBuffer = null;
  protected _glIndexBuffer: WebGLBuffer = null;
  protected _glBuildingIdBuffer: WebGLBuffer = null;

  // shader attribute id
  protected _positionId = -1;
  protected _buildingIdId = -1;

  // uniforms
  protected _uModelViewMatrixId: WebGLUniformLocation = -1;
  protected _uProjectionMatrixId: WebGLUniformLocation = -1;
  protected _uWorldOrigin: WebGLUniformLocation = -1;
  protected _uGroundRes: WebGLUniformLocation = -1;
  protected _uEye: WebGLUniformLocation = -1;

  // highlighted building ID id
  protected _highlight = -1;

  // FBO for edge detection
  protected _fboWidth = -1;
  protected _fboHeight = -1;
  protected _fbo: WebGLFramebuffer = null;
  protected _readfbo: WebGLFramebuffer = null;
  protected _normalTexture: WebGLTexture = null;
  protected _depthTexture: WebGLTexture = null;
  protected _positionTexture: WebGLTexture = null;
  protected _idTexture: WebGLTexture = null;

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
    // load the required shaders
    for (let id = 0; id < BuildingLayer.N_SHADER; id++) {
      // shaders url
      const vertUrl = `assets/shaders/building(${id}).vert`;
      const fragUrl = `assets/shaders/building(${id}).frag`;

      // Vertex shader program
      const vsShader = await DataLoader.getTextData(vertUrl);
      // Fragment shader program
      const fsShader = await DataLoader.getTextData(fragUrl);

      // load all shaders
      this.initShaderProgram(vsShader, fsShader, glContext);
    }

    // uniforms definition
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
    this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
    this._uGroundRes = glContext.getUniformLocation(this._shaderProgram[0], 'uGroundRes');
    this._uEye = glContext.getUniformLocation(this._shaderProgram[0], 'uEye');

    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
    this._buildingIdId = glContext.getAttribLocation(this._shaderProgram[0], 'buildingId');

    // load message
    console.log(`#${BuildingLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
  }

  /**
   * Data update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFeatures(glContext: WebGL2RenderingContext, data: any = null) {
    // gets the feature of index id
    data = await DataApi.getLayerFeature(this._layerId);

    // new feature found
    this._features = { 'position': [], 'ids': [], 'index': [] };

    // iterates over the geometries
    for (const feature of data.features) {
      this._features['position'] = feature.geometry.coordinates;
      this._features['ids'] = feature.geometry.ids;
      this._features['index'] = feature.geometry.indices;
    }

    // creates the buffer
    this.createBuffers(glContext);
    // SSAO noise
    this.generateNoise(glContext);
  }

  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {number} x Mouse x position
   * @param {number} y Mouse y position
   */
  pick(glContext: WebGL2RenderingContext, x: number, y: number) {
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);

    const result = new Float32Array(4);
    glContext.readPixels(x, y, 1, 1, glContext.RGBA, glContext.FLOAT, result);

    if (result[0] > 0) {
      this._highlight = result[0];
    }

    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
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
      this._shaderProgram[1] === null ||
      this._glPositionBuffer === null ||
      this._glIndexBuffer === null ||
      this._positionId < 0
    ) {
      return;
    }
    // FBO setup
    this.setupFBO(glContext);

    // enables the depth test
    glContext.enable(glContext.DEPTH_TEST);
    glContext.depthFunc(glContext.LESS);

    // Picking
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
    this.renderBuildings(glContext);
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);

    // SSAO render
    this.renderSSAO(glContext);
    // disables the depth buffer
    glContext.disable(glContext.DEPTH_TEST);
  }

  /**
   * Render the buildings for picking
   * @param glContext
   */
  protected renderBuildings(glContext: WebGL2RenderingContext) {
    // binds the shader program
    glContext.useProgram(this._shaderProgram[0]);

    // send matrices
    glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
    glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());

    // send world origin
    const worldOrigin = this._camera.getWorldOrigin();
    glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]);

    // send eye and ground resolution
    const eye = this._camera.getEye();
    const gres = this._camera.getGroundResolution();
    glContext.uniform1f(this._uGroundRes, gres);
    glContext.uniform3f(this._uEye, eye[0], eye[1], eye[2]);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, BuildingLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the buildings id buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer);
    glContext.vertexAttribPointer(this._buildingIdId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._buildingIdId);

    glContext.clearColor(0.0, 0.0, 0.0, 1.0);
    // tslint:disable-next-line:no-bitwise
    glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);

    // Tell WebGL which indices to use to index the vertices
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // draw the geometry
    glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
  }


  /**
   * Render the buildings using SSAO
   * @param glContext
   */
  protected renderSSAO(glContext: WebGL2RenderingContext) {
    glContext.enable(glContext.BLEND);
    glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);

    glContext.useProgram(this._shaderProgram[1]);

    const normalLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'normalTex');
    const positionLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'positionTex');
    const IDLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'IDTex');
    const depthLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'depthTex');
    const matModelView: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'matModelView');
    const uProjectionMatrix: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uProjectionMatrix');
    const highlightId: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'highlightId');

    glContext.uniformMatrix4fv(matModelView, false, this._camera.getViewMatrix());
    glContext.uniformMatrix4fv(uProjectionMatrix, false, this._camera.getProjectionMatrix());
    glContext.uniform1f(highlightId, this._highlight);

    glContext.activeTexture(glContext.TEXTURE0);
    glContext.bindTexture(glContext.TEXTURE_2D, this._normalTexture);
    glContext.uniform1i(normalLocation, 0);

    glContext.activeTexture(glContext.TEXTURE1);
    glContext.bindTexture(glContext.TEXTURE_2D, this._positionTexture);
    glContext.uniform1i(positionLocation, 1);

    glContext.activeTexture(glContext.TEXTURE2);
    glContext.bindTexture(glContext.TEXTURE_2D, this._idTexture);
    glContext.uniform1i(IDLocation, 2);

    glContext.activeTexture(glContext.TEXTURE3);
    glContext.bindTexture(glContext.TEXTURE_2D, this._depthTexture);
    glContext.uniform1i(depthLocation, 3);

    glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4);
    glContext.disable(glContext.BLEND);
  }

  /**
   * setup FBO used for edge detection
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected setupFBO(glContext: WebGL2RenderingContext) {
    if (this._fbo == null || this._readfbo == null) {
      // creates the buffers
      this._fbo = glContext.createFramebuffer();
      this._readfbo = glContext.createFramebuffer();
      this._depthTexture = glContext.createTexture();
      this._normalTexture = glContext.createTexture();
      this._positionTexture = glContext.createTexture();
      this._idTexture = glContext.createTexture();

      // check the availability of float buffers
      const ext = glContext.getExtension('EXT_color_buffer_float');
      if (!ext) {
        console.error('float buffer extension not supported!!!');
      }
    }

    // gets the viewport
    const viewPort = this._camera.getViewportResolution();
    if (this._fboWidth !== viewPort[0] || this._fboHeight !== viewPort[1]) {
      // update FBO size
      this._fboWidth = viewPort[0];
      this._fboHeight = viewPort[1];

      // normal texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._normalTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // position texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._positionTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // building ID texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._idTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // depth texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._depthTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.DEPTH_COMPONENT32F,
        this._fboWidth, this._fboHeight, 0, glContext.DEPTH_COMPONENT, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // fbo setup
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.DEPTH_ATTACHMENT, glContext.TEXTURE_2D, this._depthTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._normalTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._positionTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT2, glContext.TEXTURE_2D, this._idTexture, 0);
      glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1, glContext.COLOR_ATTACHMENT2]);

      // readfbo setup
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._idTexture, 0);

      // unbind fbos
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
    }
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

    // Create a buffer for the indices.
    this._glIndexBuffer = glContext.createBuffer();
    // Select the index buffer as the one to apply buffer
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW
    );

    // Create a buffer for the positions.
    this._glBuildingIdBuffer = glContext.createBuffer();
    // Select the positionBuffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['ids']), glContext.STATIC_DRAW
    );
  }

  protected generateNoise(glContext: WebGL2RenderingContext) {
    glContext.useProgram(this._shaderProgram[1]);

    const uNoiseLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uNoise');
    const uSamplesLocation: WebGLUniformLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uSamples');

    const samples = [];
    const nSamples = 64;
    for (let i = 0; i < nSamples; i++) {
      const sample = vec3.fromValues(
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        Math.random()
      );
      vec3.normalize(sample, sample);
      // weight samples towards center point
      const scale = i / nSamples;
      const s2 = scale * scale;
      vec3.scale(sample, sample, 0.1 + 0.9 * s2);
      samples.push(sample[0]);
      samples.push(sample[1]);
      samples.push(sample[2]);
    }
    glContext.uniform3fv(uSamplesLocation, samples, 0, nSamples * 3);

    const noise = [];
    const noiseSize = 256;
    for (let i = 0; i < noiseSize; i++) {
      const n = vec3.fromValues(
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        0.0
      );
      noise.push(n[0]);
      noise.push(n[1]);
      noise.push(n[2]);
    }
    glContext.uniform3fv(uNoiseLocation, noise, 0, noiseSize * 3);
  }
}
