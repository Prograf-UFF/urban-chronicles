/// <reference types="@types/webgl2" />

import { Camera } from './camera';
import { ColorMapType } from './constants';

export class Layer {
  
  // is visible
  protected _visible: boolean;
  // is selectable
  protected _selectable: boolean;

  protected _hoveable: boolean;

  protected _customLayer: boolean;

  // layer id
  protected _layerId: string;
  // layer's shader
  protected _shaderProgram: WebGLShader[] = [];
  // layer's camera
  protected _camera: Camera;

  // callback when layer item is selected
  protected _callbackSelectionFunction: any;
  protected _callbackHoverFunction: any;
  /**
   * Layer constructor
   * @param {string} id The Mapview layer Identifier
   */
  constructor(id: string) {
    this._layerId = id;
    this._visible = true;
    this._selectable = false;
    this._customLayer = false;
  }

  get customLayer(): boolean {
    return this._customLayer;
  }

  set customLayer(customLayer: boolean) {
    this._customLayer = customLayer;
  }

  // set layerCallback function
  set layerSelectionCallBack(_callback: any) {
    this._callbackSelectionFunction = _callback;
  }

  // set layerCallback function
  set layerHoverCallback(_callback: any) {
    this._callbackHoverFunction = _callback;
  }

  /**
   * Accessor for the layer id
   */
  get layerId() {
    return this._layerId;
  }

  get hoveable() {
    return this._hoveable;
  }

  set hoveable(hoveable: boolean) {
    this._hoveable = hoveable;
  }

  /**
   * Returns if the layers is visible
   */
  get visible(): boolean {
    return this._visible;
  }

  /**
   * Sets the visibility
   */
  set visible(visible: boolean) {
    this._visible = visible;
  }

  /**
   * Returns if the layers is selectable
   */
  get selectable(): boolean {
    return this._selectable;
  }

  /**
   * Sets the selection
   */
  set selectable(selectable: boolean) {
    this._selectable = selectable;
  }

  /**
   * Sends the camera to the layer
   */
  set camera(camera: Camera) {
    this._camera = camera;
  }

  /**
   * Shader load signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  loadShaders(glContext: WebGL2RenderingContext) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Data update signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param data layer data
   */
  updateFeatures(glContext: WebGL2RenderingContext, data: any = null) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Function update signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param data layer function
   */
  updateFunction(glContext: WebGL2RenderingContext, data: any) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Changes the color map
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} cMap Color Map
   */
  updateColorMap(glContext: WebGL2RenderingContext, cMap: ColorMapType) {}


  /**
   * Layer render function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  render(glContext: WebGL2RenderingContext) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Layer picking function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  pick(glContext: WebGL2RenderingContext,  x: number, y: number) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Layer picking function signature
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  hover(glContext: WebGL2RenderingContext,  x: number, y: number) {
    throw new Error('Each layer has to implement it!');
  }

  updateScalar(dataNormalized: {}, glContext: WebGL2RenderingContext) {
    throw new Error('Each layer has to implement it!!');
  }

  updateElemSelected(elemSelectedName, glContext: WebGL2RenderingContext) {
    throw new Error('Each layer has to implement it!');
  }

  /**
   * Inits the layer's shader program
   * @param {string} vsSource Vertex shader source
   * @param {string} fsSource Fragment shader source
   * @param {WebGL2RenderingContext} glContext WebGL context
   */
  protected initShaderProgram(vsSource: string, fsSource: string, glContext: WebGL2RenderingContext) {
    // load the shaders
    const vertexShader = this.buildShader(glContext.VERTEX_SHADER, vsSource, glContext);
    const fragmentShader = this.buildShader(glContext.FRAGMENT_SHADER, fsSource, glContext);

    // Create the shader program
    const shader = glContext.createProgram();
    glContext.attachShader(shader, vertexShader);
    glContext.attachShader(shader, fragmentShader);
    glContext.linkProgram(shader);

    // If creating the shader program failed, alert
    if (!glContext.getProgramParameter(shader, glContext.LINK_STATUS)) {
      throw new Error('Unable to initialize the shader program: ' + glContext.getProgramInfoLog(shader));
    }

    // stores the shader
    this._shaderProgram.push(shader);
  }

  /**
   * Builds the layer shader
   * @param {string} type The shader type
   * @param {string} source The shader source string
   * @param {WebGL2RenderingContext} glContext The WebGL context
   * @returns {WebGLShader} The shader object
   */
  protected buildShader(type, source, glContext): WebGLShader {
    // creates the shader
    const shader = glContext.createShader(type);

    // Send the source to the shader object
    glContext.shaderSource(shader, source);
    // Compile the shader program
    glContext.compileShader(shader);

    // See if it compiled successfully
    if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
      console.error('An error occurred compiling the shaders: ');
      console.error(source);
      console.error(glContext.getShaderInfoLog(shader));

      glContext.deleteShader(shader);
      throw new Error('Unable to load the shader');
    }

    return shader;
  }
}
