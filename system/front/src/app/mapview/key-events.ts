import { MapView } from './mapview';

export class KeyEvents {
  // div to attach the events
  private _map: MapView;
  // callbacks
  private _callbacks: any;

  /**
   * Mouse events constructor
   * @param map the map to bind the events
   */
  constructor(map, callbacks = null) {
    this._map = map;
    this._callbacks = callbacks;
  }

  bindEvents() {
    // sets the key listeners
    window.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  /**
  * Handles key down event
  */
  keyDown(event: KeyboardEvent) {
    // key value
    const key = +event.key;
    const layers = this._map.layerManager.layers;

    // number key
    // if (!isNaN(key) && key < layers.length) {
    //   // makes in visible
    //   const isVisible = layers[key].visible;
    //   layers[key].visible = !isVisible;

    //   // render
    //   this._map.render();
    // }

    // change camera mode
    if (event.key === 'd') {
      this._map.toggleCameraMode();
    }
  }
}
