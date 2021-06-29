import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrbaneEventsService {
  // polygon layers events
  private _fetchPoly          = new EventEmitter<void>();
  private _fetchPolyFunction  = new EventEmitter<void>();
  private _highlightLayerElem = new EventEmitter<string>();

  private _layerIntervalsChanged      = new EventEmitter<void>();
  private _diffTableIntervalsChanged  = new EventEmitter<void>();

  // Custom Layer events
  private _fetchCustomLayer         = new EventEmitter<void>();
  private _fetchCustomLayerFuction  = new EventEmitter<void>(); // It is not used yet.
  private _updateLayerContent       = new EventEmitter<void>();
  // private _loadLayerInfo = new EventEmitter<void>();

  // heatmap events
  private _fetchHeat          = new EventEmitter<void>();
  private _fetchHeatFunction  = new EventEmitter<void>();

  // hide / show layers
  private _showLayer  = new EventEmitter<void>();
  private _hideLayers = new EventEmitter<void>();

  private _lotSelected        = new EventEmitter<{lotCode: string, layerId: string}>();
  private _blockDataChanged   = new EventEmitter<void>();
  private _updateBlockData    = new EventEmitter<void>();
  private _updateLayerColors  = new EventEmitter<void>();
  private _doLayerFiltering   = new EventEmitter<void>();

  private _highlightElemOnHover = new EventEmitter<string>();

  // constructor
  constructor() {}

  get doLayerFiltering(): EventEmitter<void> {
    return this._doLayerFiltering;
  }

  get layerIntervalChanged(): EventEmitter<void> {
    return this._layerIntervalsChanged;
  }

  get diffTableIntervalChanged(): EventEmitter<void> {
    return this._diffTableIntervalsChanged;
  }

  get highlightElemOnHover(): EventEmitter<string> {
    return this._highlightElemOnHover;
  }

  get highlightLayerElem(): EventEmitter<string> {
    return this._highlightLayerElem;
  }

  get updateLayerContent(): EventEmitter<void> {
    return this._updateLayerContent;
  }

  get updateLayerColors(): EventEmitter<void> {
    return this._updateLayerColors;
  }

  // get loadLayerInfo(): EventEmitter<void> {
  //   return this._loadLayerInfo;
  // }

  get updateBlockData(): EventEmitter<void> {
    return this._updateBlockData;
  }

  get blockDataChanged(): EventEmitter<void> {
    return this._blockDataChanged;
  }

  get lotSelected(): EventEmitter<{lotCode: string, layerId: string}> {
    return this._lotSelected;
  }

  // fetch CustomLayer event
  get fetchCustomLayer(): EventEmitter<void> {
    return this._fetchCustomLayer;
  }
  // fetch CustomLayer function event
  get fetchCustomLayerFunction(): EventEmitter<void> {
    return this._fetchCustomLayerFuction;
  }

  // fetch polygon event
  get fetchPoly(): EventEmitter<void> {
    return this._fetchPoly;
  }

  // fetch polygon function event
  get fetchPolyFunction(): EventEmitter<void> {
    return this._fetchPolyFunction;
  }

  // fetch heatmap event
  get fetchHeat(): EventEmitter<void> {
    return this._fetchHeat;
  }

  // fetch heatmap function event
  get fetchHeatFunction(): EventEmitter<void> {
    return this._fetchHeatFunction;
  }

  // hide all layers
  get hideLayers(): EventEmitter<void> {
    return this._hideLayers;
  }

  // hide all layers
  get showLayer(): EventEmitter<void> {
    return this._showLayer;
  }
}
