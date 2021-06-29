/// <reference types="@types/webgl2" />

import { Layer } from './layer';
import { DataLoader } from './data-loader';
import { DataApi } from './data-api';
import { ColorMapType } from './constants';
import { ColorMap } from './colormap';

export class PolygonLayer extends Layer {
  // number of coordinates per vertex
  protected static COORDS = 2;
  // number of shaders
  protected static N_SHADER = 3;

  // primitive Ids
  protected _features: any = {};

  // data buffers
  protected _glPositionBuffer: WebGLBuffer = null;
  protected _glIndexBuffer: WebGLBuffer = null;
  protected _glPolygonIdBuffer: WebGLBuffer = null;
  protected _glHighlightBuffer: WebGLBuffer = null;
  protected _glScalarBuffer: WebGLBuffer = null;

  // shader attribute id
  protected _positionId = -1;
  protected _polygonId = -1;
  protected _highlightId = -1;
  protected _scalarId = -1;

  // transformation uniforms
  protected _uModelViewMatrixId: WebGLUniformLocation = -1;
  protected _uProjectionMatrixId: WebGLUniformLocation = -1;
  protected _uWorldOriginId: WebGLUniformLocation = -1;
  protected _uScalarTextureId: WebGLUniformLocation = -1;

  // highlighted building ID id
  protected _highlight = -1;
  protected _elemSelectedName = '';
  protected _hoverPolyVertIndex = -1;
  protected _uHighlightId: WebGLUniformLocation = -1;

  // FBO for picking
  protected _fboWidth = -1;
  protected _fboHeight = -1;
  protected _fbo: WebGLFramebuffer = null;
  protected _readFbo: WebGLFramebuffer = null;

  // first pass textures
  protected _scalarTexture: WebGLTexture = null;
  protected _polygonIdTexture: WebGLTexture = null;
  protected _highlightIdTexture: WebGLTexture = null;

  // color map
  protected _uColorMapId: WebGLUniformLocation = -1;
  protected _colorMapTexture: WebGLTexture = null;

  protected _fireCallBack: boolean;
  protected _doHoverCallback: boolean;

  protected _filterData: any;

  /**
   * The Vector Layer constructor
   * @param {string} id the layer id
   */
  constructor(id: string) {
    super(id);
    this._fireCallBack = false;
    this._doHoverCallback = false;
  }

  /**
   * Shader load signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  async loadShaders(glContext: WebGL2RenderingContext) {
    // load the shaders
    for (let id = 0; id < PolygonLayer.N_SHADER; id++) {
      // shaders url
      const vertUrl = `assets/shaders/polygon(${id}).vert`;
      const fragUrl = `assets/shaders/polygon(${id}).frag`;

      // Vertex shader program
      const vsShader = await DataLoader.getTextData(vertUrl);
      // Fragment shader program
      const fsShader = await DataLoader.getTextData(fragUrl);

      // load all shaders
      this.initShaderProgram(vsShader, fsShader, glContext);
    }
    // load message
    console.log(`#${PolygonLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
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
    this._features = {'position': [], 'scalar': [], 'polygonId': [], 'index': [], 'offset': [], 'name': [], 'highlight': []};

    // loaded number of vertices
    let nverts = 0;
    // number of loaded features
    let nfeatures = 0;

    // iterates over the geometries
    for (const feature of data.features) {
      // get the coordinates
      const position = feature.geometry.coordinates;

      // get the colors
      const ids = [];
      const scalar = [];
      const highlight = [];
      for (let id = 0; id < position.length / PolygonLayer.COORDS; id++) {
        const val = feature.properties && feature.properties.scalar ? feature.properties.scalar : -1;
        scalar.push(val);
        ids.push(nfeatures / data.features.length);
        highlight.push(0.0);
      }

      let name = '';
      if (feature.properties && feature.properties.name) {
        name = feature.properties.name;
      }

      // build the indices
      const index = feature.geometry.indices;
      for (let id = 0; id < index.length; id++) {
        index[id] += nverts;
      }

      // loaded vertices
      nverts += position.length / PolygonLayer.COORDS;
      nfeatures += 1;

      // add to the feature
      this._features['position'].push.apply(this._features['position'], position);
      this._features['scalar'].push.apply(this._features['scalar'], scalar);
      this._features['polygonId'].push.apply(this._features['polygonId'], ids);
      this._features['highlight'].push.apply(this._features['highlight'], highlight);
      this._features['index'].push.apply(this._features['index'], index);
      this._features['offset'].push(position.length / PolygonLayer.COORDS);
      this._features['name'].push(name);
    }

    // creates the buffer
    this.createBuffers(glContext);
    // creates the scalar data vbo
    this.createScalarBuffer(glContext);
  }

  updateScalar(dataNormalized: {}, glContext: WebGL2RenderingContext) {
    if (this._features['name'] === undefined ) {
      return;
    }

    const nScalar = [];
    const numElem = this._features['name'].length;
    for (let i = 0; i < numElem; i++) {
      const elemName = this._features['name'][i];
      let elemScalar = 0;
      if (dataNormalized.hasOwnProperty(elemName)) {
        elemScalar = dataNormalized[elemName].scalar;
      } else {
        const blockCode = elemName.slice(1, 6);
        if (dataNormalized[blockCode] !== undefined ) {
          elemScalar = dataNormalized[blockCode].scalar;
        }
      }
      const offset = this._features['offset'][i];
      for (let j = 0; j < offset; j ++) {
        nScalar.push(elemScalar);
      }
    }
    this._features['scalar'] = [];
    this._features['scalar'].push.apply(this._features['scalar'], nScalar);
    this.createScalarBuffer(glContext);
  }

  haveToSelect(currPolyName: string, elemSelectedName: string) {
    let isEqual = false;
    // deal block or lot level
    if (currPolyName.length >= 10) {
      // block
      if (elemSelectedName.length === 5) {
        isEqual = (currPolyName.slice(1, 6) === elemSelectedName);
      } else {
        const nameSliced = currPolyName.slice(0, currPolyName.indexOf('->'));
        isEqual = nameSliced === elemSelectedName;
      }
    // neighborhood level
    } else {
      const nameSliced = currPolyName.slice(0, 4);
      isEqual = nameSliced === elemSelectedName;
    }
    return isEqual;
  }

  canPrint(hoverPolyName: string) {
    if(this._filterData === undefined) {
      return true;
    }

    const filteredKeys = Object.keys(this._filterData);
    let onNeighborhoodLevel = false;
    let onBlockLevel = false;
    let onLotLevel = false;
    if (filteredKeys.length > 0) {
      const codeExample = filteredKeys[0];
      if (codeExample.length > 10) {
        onLotLevel = true;
      } 
      else if (codeExample.length == 5) {
        onBlockLevel = true;
      }
      else {
        onNeighborhoodLevel = true;
      }
    }

    let searchName;

    if (onNeighborhoodLevel || onLotLevel) {
      searchName = hoverPolyName;
    }
    else if (onBlockLevel) {
      searchName = hoverPolyName.slice(1, 6);
    }

    const canPrint = this._filterData[searchName];
    if (canPrint === undefined) {
      return false;
    } 
    else {
      return true;
    }
  }

  onLayerFiltering(filterData, glContext: WebGL2RenderingContext) {
    this._filterData = filterData;
    this.createBuffers(glContext);
    this.render(glContext);
  }

  updateElemSelected(elemSelectedName: string, glContext: WebGL2RenderingContext) {
    let firstIndex = 0;
    let polyIndex = 0;
    if (this._features['offset'] === undefined) {
      return;
    }
    for (const vertsCount of this._features['offset']) {
      // skips selected
      const currPolyName = this._features['name'][polyIndex];
      const isEqual = this.haveToSelect(currPolyName, elemSelectedName);

      const lastIndex = firstIndex + vertsCount;
      for (let currVertexIndex = firstIndex; currVertexIndex <= lastIndex; currVertexIndex++) {
        if (isEqual) {
          this._features['highlight'][currVertexIndex] = 1.1;
        } else {
          this._features['highlight'][currVertexIndex] = 0.0;
        }
      }
      polyIndex += 1;
      firstIndex += vertsCount;
    }
    this._elemSelectedName = elemSelectedName;
    // creates the buffer
    this.createBuffers(glContext);
    this.render(glContext);
  }

  /**
   * Function update signature
   * @returns {Promise<any>} The load data promise
   */
  async updateFunction(glContext: WebGL2RenderingContext, data: any) {
    // scalar function
    const scalar = data.func;

    // invalid data layout
    if (scalar.length !== this._features['offset'].length) {
      return;
    }

    // new feature found
    this._features['scalar'] = [];

    // fill the function array
    for (let fId = 0; fId < scalar.length; fId++) {
      // get the values
      const sValue = (scalar[fId] - data.fMin) / (data.fMax - data.fMin);
      const nVerts = this._features['offset'][fId];

      // fill the feature array
      const vals = new Array(nVerts).fill(sValue);
      // push to the function
      this._features['scalar'].push.apply(this._features['scalar'], vals);
    }

    // creates the scalar data vbo
    this.createScalarBuffer(glContext);
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

  findSelectedPolygon(glContext: WebGL2RenderingContext, x: number, y: number) {
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);

    const result = new Float32Array(4);
    glContext.readPixels(x, y, 1, 1, glContext.RGBA, glContext.FLOAT, result);

    return result;

  }

  findPolygonName (polygonFirstVertex: number) {
    let polygonName = '';
    let firstVertIndex = 0;
    let polygonInputPosition = 0;
    if (this._features['offset'] === undefined) {
      return;
    }

    this._features['offset'].forEach((vertsCount) => {
      const firstVertex = this._features['polygonId'][firstVertIndex];
      if (Math.abs(firstVertex - this._hoverPolyVertIndex) < 1e-5) {
        polygonName = this._features['name'][polygonInputPosition];
        return polygonName;
      }
      firstVertIndex += vertsCount;
      polygonInputPosition += 1;
    });
    return polygonName;
  }

  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {number} x Mouse x position
   * @param {number} y Mouse y position
   */
  pick(glContext: WebGL2RenderingContext, x: number, y: number) {
    const result = this.findSelectedPolygon(glContext, x, y);

    if (result[0] > 0) {
      this._highlight = result[0] === this._highlight ? -1 : result[0];
    }

    const polyName = this.findPolygonName(result[0]);
    this._callbackSelectionFunction(polyName);
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
    this.render(glContext);
  }

  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {number} x Mouse x position
   * @param {number} y Mouse y position
   */
  hover(glContext: WebGL2RenderingContext, x: number, y: number) {
    const result = this.findSelectedPolygon(glContext, x, y);

    if (result[0] > 0) {
      this._hoverPolyVertIndex = result[0]; // === this._hoverPolyVertIndex ? -1 : result[0];
    }
    const polyName = this.findPolygonName(result[0]);
    this._callbackHoverFunction(polyName);
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
    this._doHoverCallback = true;
    if (polyName !== undefined &&
        polyName.length > 0 &&
        polyName.indexOf('->') >= 0) {
      this.updateElemSelected( polyName.split('->')[0] , glContext);
    } else {
      this.updateElemSelected( '' , glContext);
    }
    // this.render(glContext);
  }

  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  render(glContext: WebGL2RenderingContext) {
    // invalid layers
    if (
      this._shaderProgram.length !== PolygonLayer.N_SHADER ||
      this._glPositionBuffer === null ||
      this._glPolygonIdBuffer === null ||
      this._glHighlightBuffer === null ||
      this._glScalarBuffer === null ||
      this._glIndexBuffer === null
    ) {
      return;
    }
    // FBO setup
    this.setupFBO(glContext);

    // Picking
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
    this.renderToTexture(glContext);
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);

    // render
    this.renderTexture(glContext);

    // render selected polygon
    this.renderSelection(glContext);
  }

  protected renderSelection(glContext: WebGL2RenderingContext) {
    // uniforms and attrib locations
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uProjectionMatrix');
    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[2], 'uWorldOrigin');
    this._positionId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPos');
    this._polygonId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPolyId');
    this._highlightId = glContext.getAttribLocation(this._shaderProgram[2], 'vertHighlight');
    this._uHighlightId = glContext.getUniformLocation(this._shaderProgram[2], 'uHighlightId');

    // binds the shader program
    glContext.useProgram(this._shaderProgram[2]);

    // send matrices
    glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
    glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());

    // send world origin
    const worldOrigin = this._camera.getWorldOrigin();
    glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);

    // render unselected
    glContext.uniform1f(this._uHighlightId, this._highlight);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the polygon id buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
    glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._polygonId);

    // bind the highlight id buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glHighlightBuffer);
    glContext.vertexAttribPointer(this._highlightId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._highlightId);

    // First vertex of polygon
    let firstVertIndex = 0;
    let highFirstVert = -1, highVertsCount = -1;
    let polygonInputPosition = 0, highInputPosition = -1;
    let hoverPolyName = '';
    const polyToHighlight = [];

    // this._features['offset'].forEach((vertsCount) => {
    for (const vertsCount of this._features['offset']) {

      hoverPolyName = this._features['name'][polygonInputPosition];

      const canPrint = this.canPrint(hoverPolyName);
      if (canPrint)  {
        const firstVertex = this._features['polygonId'][firstVertIndex];
        // if (Math.abs(firstVertex - this._hoverPolyVertIndex) < 1e-5) {
        // }
        const isEqual = this.haveToSelect(hoverPolyName, this._elemSelectedName);
  
        // skips selected
        if (Math.abs(firstVertex - this._highlight) < 1e-5) {
          highFirstVert = firstVertIndex;
          highVertsCount = vertsCount;
          highInputPosition = polygonInputPosition;
        } else {
          if (isEqual) {
            polyToHighlight.push([firstVertIndex, vertsCount]);
          } else {
            glContext.drawArrays(glContext.LINE_STRIP, firstVertIndex, vertsCount);
          }
        }
      }

      firstVertIndex += vertsCount;
      polygonInputPosition += 1;
    }
    // });

    if (highFirstVert >= 0 && highVertsCount >= 0) {
      glContext.drawArrays(glContext.LINE_STRIP, highFirstVert, highVertsCount);
    }

    polyToHighlight.forEach(elem => {
      glContext.drawArrays(glContext.LINE_STRIP, elem[0], elem[1]);
    });
  }

  /**
   * Send uniforms to the shader
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected renderTexture(glContext: WebGL2RenderingContext) {
    // polygons texture
    this._uScalarTextureId = glContext.getUniformLocation(this._shaderProgram[1], 'uScalarTex');

    glContext.enable(glContext.BLEND);
    glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);

    glContext.useProgram(this._shaderProgram[1]);

    glContext.activeTexture(glContext.TEXTURE0);
    glContext.bindTexture(glContext.TEXTURE_2D, this._scalarTexture);
    glContext.uniform1i(this._uScalarTextureId, 0);

    glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4);
    glContext.disable(glContext.BLEND);
  }

  /**
   * Send uniforms to the shader
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected renderToTexture(glContext: WebGL2RenderingContext) {
    // tuniforms and attrib locations
    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
    this._polygonId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPolyId');
    this._highlightId = glContext.getAttribLocation(this._shaderProgram[0], 'vertHighlight');
    this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar');
    this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');

    // binds the shader program
    glContext.useProgram(this._shaderProgram[0]);

    // send matrices
    glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
    glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());

    // send world origin
    const worldOrigin = this._camera.getWorldOrigin();
    glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);

    // send the color map
    glContext.uniform1i(this._uColorMapId, 0);

    // binds the position buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
    glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._positionId);

    // binds the polygon id buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
    glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._polygonId);

    // binds the highlight id buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glHighlightBuffer);
    glContext.vertexAttribPointer(this._highlightId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._highlightId);

    // binds the scalar buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
    glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
    glContext.enableVertexAttribArray(this._scalarId);

    // Tell WebGL we want to affect texture unit 0
    glContext.activeTexture(glContext.TEXTURE0);
    glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);

    glContext.clearColor(0.0, 0.0, 0.0, 0.0);
    // tslint:disable-next-line:no-bitwise
    glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);

    // Tell WebGL which indices to use to index the vertices
    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
    // draw the geometry
    glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
  }

  /**
   * setup FBO used for edge detection
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected setupFBO(glContext: WebGL2RenderingContext) {
    if (this._fbo == null || this._readFbo == null) {
      // creates the buffers
      this._fbo = glContext.createFramebuffer();
      this._readFbo = glContext.createFramebuffer();
      this._polygonIdTexture = glContext.createTexture();
      this._highlightIdTexture = glContext.createTexture();
      this._scalarTexture = glContext.createTexture();

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

      // building ID texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._polygonIdTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // building ID texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._scalarTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // building ID texture
      glContext.bindTexture(glContext.TEXTURE_2D, this._highlightIdTexture);
      glContext.texImage2D(
        glContext.TEXTURE_2D, 0, glContext.RGBA32F,
        this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null
      );
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);

      // fbo setup
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._scalarTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._polygonIdTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._highlightIdTexture, 0);
      glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1]);

      // readfbo setup
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._polygonIdTexture, 0);
      glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._highlightIdTexture, 0);
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

    // Create a buffer for the positions.
    this._glPolygonIdBuffer = glContext.createBuffer();
    // Select the positionBuffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['polygonId']), glContext.STATIC_DRAW
    );

    // Create a buffer for the positions.
    this._glHighlightBuffer = glContext.createBuffer();
    // Select the highlightbuffer as the one to apply buffer
    glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glHighlightBuffer);
    // send data to gpu
    glContext.bufferData(
      glContext.ARRAY_BUFFER, new Float32Array(this._features['highlight']), glContext.STATIC_DRAW
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
    const colors = ColorMap.getColorMap(color, reverse);
    // gl color map texture
    if (this._colorMapTexture === null) {
      this._colorMapTexture = glContext.createTexture();
    }

    // send the color map
    glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);
    glContext.texImage2D(
      glContext.TEXTURE_2D, 0, glContext.RGBA, colors.length / 4, 1, 0,
      glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(colors)
    );
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
  }
}
