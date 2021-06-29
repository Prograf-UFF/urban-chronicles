import { MapView } from './mapview';
import { MapViewStatus, CameraStatus } from './constants';

export class MouseEvents {
  // div to attach the events
  private _map: MapView;
  // callbacks
  private _callbacks: any;

  // mouse movement control.
  private _status: MapViewStatus;
  private _lastPoint: number[];

  /**
   * Mouse events constructor
   * @param map the map to bind the events
   */
  constructor(map, callbacks = null) {
    this._map = map;
    this._callbacks = callbacks;

    // default values
    this._status = MapViewStatus.IDLE;
    this._lastPoint = [0, 0];
  }

  bindEvents() {
    // sets the mouse listeners
    this._map.canvas.addEventListener('wheel', this.mouseWheel.bind(this), false);
    this._map.canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
    document.addEventListener('mousemove', this.mouseMove.bind(this), false);
    document.addEventListener('mouseup', this.mouseUp.bind(this), false);
  }

  /**
   * Handles mouse down event
   */
  mouseDown(event: MouseEvent) {
    this._lastPoint = [event.x, event.y];

    if (event.ctrlKey) {
      const x = event.x;
      const y = (this._map.canvas.height - event.y);

      const picks = [];
      for (const layer of this._map.layerManager.layers) {
        if (!layer.selectable) { continue; }
        
        layer.pick(this._map.glContext, x, y);
        picks.push(layer.pickId());

        this._callbacks.mouse.mouseDown(picks);
      }
    } else {
      this._status = MapViewStatus.DRAG;
    }

    this._map.render();
  }

  /**
     * Handles mouse down event
     */
  mouseMove(event: MouseEvent) {
    // changes the values
    if (this._status === MapViewStatus.DRAG) {
      const dx = (-event.x + this._lastPoint[0]);
      const dy = event.y - this._lastPoint[1];

      if (event.buttons === 1 && event.shiftKey && this._map.camera.getCameraStatus() === CameraStatus.Camera3D) { // left button
        this._map.camera.yaw(dx / this._map.canvas.clientWidth);
        this._map.camera.pitch(dy / this._map.canvas.clientHeight);
      } else {
        this._map.camera.translate(dx / this._map.canvas.clientWidth, dy / this._map.canvas.clientHeight);
      }

      this._lastPoint = [event.x, event.y];
      this._map.render();
    }
  }

  /**
   * Handles mouse down event
   */
  mouseUp(event: MouseEvent) {
    // changes the values
    this._status = MapViewStatus.IDLE;
    this._map.render();
  }

  /**
   * Handles mouse down event
   */
  mouseWheel(event: WheelEvent) {
    // changes the values
    const maxAxisLength = Math.max(this._map.canvas.width, this._map.canvas.height);
    const x = event.x / maxAxisLength;
    const y = (this._map.canvas.height - event.y) / maxAxisLength;
    this._map.camera.zoom(event.deltaY, x, y);
    this._map.render();
  }

  /**
   * Handles mouse down event
   */
  mouseOver(event: MouseEvent) {
    console.log('called', event.ctrlKey);

  }

}
