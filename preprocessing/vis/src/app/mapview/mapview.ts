/// <reference types="@types/webgl2" />
import { DataApi } from './data-api';
import { LayerManager } from './layer-manager';
import { Camera } from './camera';
import { KeyEvents } from './key-events';
import { MouseEvents } from './mouse-events';
import { CameraStatus, ColorMapType } from './constants';
import { BuildingLayer } from './building-layer';
import { Layer } from './layer';
import { PolygonLayer } from './polygon-layer';

export class MapView {
  
  // Map div
  protected _mapDiv: HTMLElement = null;
  // Html canvas
  protected _canvas: HTMLCanvasElement = null;
  // WebGL context
  public _glContext: WebGL2RenderingContext = null;

  // Layer manager object
  protected _layerManager: LayerManager = null;

  // interaction variables
  private _camera: Camera;
  // mouse events
  private _mouse: MouseEvents;
  // keyboard events
  private _keyboard: KeyEvents;

  public _buildingLayer: BuildingLayer;

  /**
   * MapView constructor
   * @param {HTMLElement} mapDiv The html element to hold the map.
   */
  constructor(mapDiv: HTMLElement) {
    // stores the map div
    this._mapDiv = mapDiv;
    // creates the new canvas element
    this._canvas = document.createElement('canvas');
    // gets the webgl context
    this._glContext = this._canvas.getContext('webgl2');
    // appends the canvas
    this._mapDiv.appendChild(this._canvas);

    // inits the camera
    this.initCamera('camera.json').then(() => {
      // resizes the canvas
      this.resize();
    });
    // inits the layers
    this.initLayers('index.json');

    // inits the mouse events
    this.initMouseEvents();
    // inits the mouse events
    this.initKeyboardEvents();
    // bind events
    this.initWindowEvents();
  }

  /**
   * gets the canvas element
   */
  get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  /**
   * gets the map div
   */
  get div(): HTMLElement {
    return this._mapDiv;
  }

  /**
   * gets the map div
   */
  get glContext(): WebGL2RenderingContext {
    return this._glContext;
  }

  /**
   * gets the camera object
   */
  get camera(): Camera {
    return this._camera;
  }

  /**
   * gets the layers
   */
  get layerManager(): LayerManager {
    return this._layerManager;
  }

  /**
   * Toggle Camera Mode
   */
  toggleCameraMode() {
    const currentCameraStatus: CameraStatus = this._camera.getCameraStatus();
    if (currentCameraStatus === CameraStatus.Camera2D) {
      this._camera.setCameraStatus(CameraStatus.Camera3D);
    } else {
      this._camera.setCameraStatus(CameraStatus.Camera2D);
    }

    this.render();
  }

  async initCamera(camera: string) {
    // load the index file and its layers
    const params = await DataApi.getMapIndex(camera);
    // sets the camera
    this._camera = new Camera(params.coordinates[0][0], params.coordinates[0][1], params.properties.zoom);
    // renders the scene
    this.render();
  }

  /**
   * Map layers initialization
   */
  async initLayers(index: string) {
    // creates the manager
    this._layerManager = new LayerManager(index);

    // load the index file and its layers
    const data = await DataApi.getMapIndex(index);

    // loop over the index file
    for (const element of data) {
      // skips the layer
      if ('skip' in element && element['skip']) {
        continue;
      }

      // loads the layers data
      const layer = this._layerManager.createLayer(
        element['type'], element['id']
      );
      // layer configuration
      this.layerConfig(layer, element);

      // loads the shaders
      await layer.loadShaders(this._glContext);

      // update the features
      await layer.updateFeatures(this._glContext);
      this.render();

      if (element['type'] === 'building') {
        this._buildingLayer = layer;
      }
    }
  }

  /**
   * Map layers configuration
   */
  layerConfig(layer: Layer, config: any) {
    // color map
    if (config['color'] !== undefined) {
      layer.updateColorMap(this._glContext, config['color']);
    } else {
      layer.updateColorMap(this._glContext, ColorMapType.SEQUENTIAL_RED_MAP);
    }

    // selectable
    if (config['selectable'] !== undefined) {
      layer.selectable = config['selectable'];
    } else {
      layer.selectable = false;
    }

    // visibility
    if (config['visible'] !== undefined) {
      layer.visible = config['visible'];
    } else {
      layer.visible = true;
    }
  }

  hasLayer (layerId: string) {
    // if layer id already exist, only set visible to true
    for (const _layer of this._layerManager.layers) {
      if (_layer.layerId === layerId) {
        _layer.visible = true;
        this.render();
        return true;
      }
    }
    return false;
  }

  async addCustomLayer (layerType: string, layerId: string, data: any, _selectionCallback: any, _hoverCallback: any) {

    // loads the layers data
    const layer = this._layerManager.createLayer(
      layerType, layerId
    );
    layer.updateColorMap(this._glContext, ColorMapType.SEQUENTIAL_RED_MAP);
    layer.visible = true;
    layer.selectable = true;
    layer.customLayer = true;
    layer.hoveable = true;
    layer.layerSelectionCallBack = _selectionCallback;
    layer.layerHoverCallback = _hoverCallback;
    // loads the shaders
    await layer.loadShaders(this._glContext);
    // update the features
    await layer.updateFeatures(this._glContext, data);
    // render
    this.render();
  }

  updateDataSelected(dataNormalized: {}) {
    this._layerManager.layers.forEach(layer => {
      if (layer.visible &&
          layer.customLayer) {
            layer.updateScalar(dataNormalized, this.glContext);
          }
    });
    this.render();
  }

  filterLayer(filteredData) {
    this._layerManager.layers.forEach(layer => {
      if (layer.visible &&
          layer.customLayer) {
            const polyLayer = <PolygonLayer> layer;
            polyLayer.onLayerFiltering(filteredData, this.glContext);
          }
    });
    this.render();
  }

  updateHighlightLayerElem(elementName: string) {
    this._layerManager.layers.forEach(layer => {
      if (layer.visible &&
          layer.customLayer) {
            layer.updateElemSelected(elementName, this.glContext);
          }
    });
    this.render();
  }

  /**
   * Add layer geometry and function function
   */
  async addLayer(layerType: string, layerId: string, data: any) {
    // loads the layers data
    const layer = this._layerManager.createLayer(
      layerType, layerId
    );

    // loads the shaders
    await layer.loadShaders(this._glContext);
    // update the features
    await layer.updateFeatures(this._glContext, data);

    // make visible
    layer.visible = true;

    // render
    this.render();
  }

  /**
   * update layer function function
   */
  async updateLayerFunction(layerId: string, data: any) {
    // searches the layer
    let layer = null;
    for (const lay of this._layerManager.layers) {
      if (lay.layerId === layerId) {
        layer = lay;
        break;
      }
    }

    // not found
    if (layer === null) { return; }
    // update the function
    await layer.updateFunction(this._glContext, data);

    // make it visible
    layer.visible = true;

    // render
    this.render();
  }

  /**
   * Inits the mouse events
   */
  initMouseEvents() {
    // creates the mouse events manager
    this._mouse = new MouseEvents(this);
    // binds the mouse events
    this._mouse.bindEvents();
  }

  /**
   * Inits the mouse events
   */
  initKeyboardEvents() {
    // creates the mouse events manager
    this._keyboard = new KeyEvents(this);
    // binds the mouse events
    this._keyboard.bindEvents();
  }

  /**
   * inits the window events
   */
  initWindowEvents() {
    // resize listener
    window.addEventListener('resize', () => {
      // resizes the canvas
      this.resize();
      this.render();
    });
  }

  /**
   * Renders the map
   */
  render() {
    if (!this._camera) {
      return;
    }
    // sky
    this._glContext.clearColor(0.7451, 0.8235, 0.8431, 1.0);
    // tslint:disable-next-line:no-bitwise
    this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT);

    // updates the camera
    this._camera.update();

    // render the layers
    for (const layer of this._layerManager.layers) {
      // skips based on visibility
      if (!layer.visible) { continue; }

      // sends the camera
      layer.camera = this.camera;
      // render
      layer.render(this._glContext);
    }
  }

  /**
   * Resizes the html canvas
   */
  resize() {
    const targetWidth = this._mapDiv.clientWidth;
    const targetHeight = this._mapDiv.clientHeight;

    const value = Math.max(targetWidth, targetHeight);
    this._glContext.viewport(0, 0, value, value);
    //
    this._canvas.width = targetWidth;
    this._canvas.height = targetHeight;

    // stores in the camera
    this._camera.setViewportResolution(targetWidth, targetHeight);
  }
}
