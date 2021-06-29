import { Component, OnInit } from '@angular/core';

// services
import { UrbaneDbService } from '../services/urbane-db.service';
import { UrbaneStateService, LayerLevelSelected } from '../services/urbane-state.service';
import { UrbaneEventsService } from '../services/urbane-events.service';
import { UrbaneAPIService } from '../services/urbane-api.service';

@Component({
  selector: 'app-urbane-menu',
  templateUrl: './urbane-menu.component.html',
  styleUrls: ['./urbane-menu.component.css']
})
export class UrbaneMenuComponent implements OnInit {
  // sub-menu visibility flags
  public showVisMenu  = false;
  public showPolyMenu = false;
  public showDataMenu = false;
  public showQueryMenu = false;
  public showSettingsMenu = false;

  // constructor
  constructor(  private _db: UrbaneDbService,
                private _state: UrbaneStateService,
                private _events: UrbaneEventsService,
                private _api: UrbaneAPIService  ) {
  }

  // initialization hook
  async ngOnInit() {
    this.loadCustomLayersOption();
    // await this.updatePolygonMenu();
    // await this.updateDatasetMenu();
    // await this.updateDatasetColsMenu();
  }

  // urbane database api object
  get db(): UrbaneDbService {
    return this._db;
  }

  // urbane state object
  get state(): UrbaneStateService {
    return this._state;
  }

  get api(): UrbaneAPIService {
    return this._api;
  }

  // load custom layers from pluto data
  loadCustomLayersOption() {
    this._state.customPolyLayers = this._api.loadCustomLayersOptions();
  }

  // list of available polygon layers
  async updatePolygonMenu() {
    this._state.poly = await this._db.loadPolygonList();
  }

  // list of available datasets
  async updateDatasetMenu() {
    this._state.data = await this._db.loadDatasetList();
  }

  // list of st-cols and cols
  async updateDatasetColsMenu() {
    // get the current dataset
    if (!this._state.activeData && this._state.data.length) {
      this._state.activeData = this._state.data[0];
    }

    // load the columns
    const cols = await this._db.loadDatasetColumns(this._state.activeData);

    // column lists
    this._state.col = cols.col;
    this._state.stCol = cols.stCol;

    // active columns
    this._state.activeCol = this._state.col[0];
    this._state.activeStCol = this._state.stCol[0];
  }

  // loads the vis widget
  async loadVis(name: string) {
    // Already selected
    if (this._state.activeVis === name) {
      // no selection
      this._state.activeVis = undefined;
      // nothing else to do
      return;
    }

    this._state.activeVis = name;
  }

  async loadCustomLayer(itemSelected: string) {
    if (this._state.neighborhoodSelected === undefined && itemSelected.toUpperCase() === 'TAX LOT') {
      return;
    }

    // makes previous invisible
    this._events.hideLayers.emit();

    // already selected
    if (this._state.activeCustomPoly === itemSelected) {
      this._state.activeCustomPoly = undefined;
      // nothing else to do
      return;
    }

    // set activated mode
    this._state.activeCustomPoly = itemSelected;

    this._events.fetchCustomLayer.emit();
    console.log('Item', itemSelected);
    if (this._state.layerInfoData === undefined ||
        (itemSelected.toUpperCase() === 'NEIGHBORHOOD' &&
        this._state.layerLevelSelected !== LayerLevelSelected.neighborhood)) {
      this._state.layerLevelSelected = LayerLevelSelected.neighborhood;
      this._events.updateLayerContent.emit();
    }
  }

  // loads the layer with id name
  async loadLayer(name: string) {
    // makes previous invisible
    this._events.hideLayers.emit();

    // Already selected
    if (this._state.activePoly === name) {
      // no selection
      this._state.activePoly = undefined;
      // nothing else to do
      return;
    }

    // sets the active polygon
    this._state.activePoly = name;

    // loads function data
    if (this._state.fetchedPoly.includes(this._state.activePoly)) {
      // loads poly layer or heatmap function
      if (this._state.activePoly === 'Grid') {
        this._events.fetchHeatFunction.emit();
      } else {
        this._events.fetchPolyFunction.emit();
      }
      // nothing else to do
      return;
    }

    // fetches the polygon
    this._state.fetchedPoly.push(this._state.activePoly);

    // loads poly layer or heatmap
    if (this._state.activePoly === 'Grid') {
      this._events.fetchHeat.emit();
    } else {
      this._events.fetchPoly.emit();
    }
  }

  // load dataset layer
  async loadDataset(name: string, newCols = false) {
    // Already selected
    if (this._state.activeData === name && !newCols) {
      // no selection
      this._state.activeData = undefined;
      // nothing else to do
      return;
    }

    // no layer selected
    if (!this._state.activePoly) {
      return;
    }

    // sets the active data
    this._state.activeData = name;

    // update if active data is different
    if (!newCols) {
      // update the columns
      await this.updateDatasetColsMenu();
    }

    // loads poly layer or heatmap
    if (this._state.activePoly === 'Grid') {
      this._events.fetchHeatFunction.emit();
    } else {
      this._events.fetchPolyFunction.emit();
    }
  }

  // show or hide the submenu
  showSubMenu(clicked: string) {
    this.showVisMenu  = clicked === 'vis'  && !this.showVisMenu;
    this.showPolyMenu = clicked === 'poly' && !this.showPolyMenu;
    this.showDataMenu = clicked === 'data' && !this.showDataMenu;
    this.showQueryMenu = clicked === 'query' && !this.showQueryMenu;
    this.showSettingsMenu = clicked === 'settings' && !this.showSettingsMenu;
  }
}
