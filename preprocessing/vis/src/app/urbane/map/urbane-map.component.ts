// angular imports
import {
  Component, OnInit, ViewChild, ElementRef
} from '@angular/core';

// mapview imports
import { MapView } from '../../mapview/mapview';
import { PolygonLayer } from 'src/app/mapview/polygon-layer';
import { HeatmapLayer } from 'src/app/mapview/heatmap-layer';

// services
import { UrbaneDbService } from '../services/urbane-db.service';
import { UrbaneStateService, LayerLevelSelected } from '../services/urbane-state.service';
import { UrbaneEventsService } from '../services/urbane-events.service';
import { UrbaneAPIService } from '../services/urbane-api.service';
import { LayerTypes } from '../../mapview/constants';

@Component({
  selector: 'app-urbane-map',
  templateUrl: './urbane-map.component.html',
  styleUrls: ['./urbane-map.component.css']
})
export class UrbaneMapComponent implements OnInit {
  @ViewChild('mapView', {static: true}) _mapDiv: ElementRef;
  // map view instance
  protected _mapView: MapView = null;

  // constructor
  constructor(private _db: UrbaneDbService,
              private _state: UrbaneStateService,
              private _events: UrbaneEventsService,
              private _api: UrbaneAPIService) { }

  // initialization
  ngOnInit() {
    // creates the mapview
    this._mapView = new MapView(this._mapDiv.nativeElement);
    this._mapView.render();

    // subscribe the polygon layer events
    this.layersEvents();
  }

  // polygon layer events
  layersEvents() {
    this._events.highlightLayerElem.subscribe(this.onHighlightLayerElem.bind(this));

    this._events.updateLayerColors.subscribe(this.updateCurrentLayerColors.bind(this));

    // fetch CustomLayer function
    this._events.fetchCustomLayer.subscribe(this.fetchCustomLayer.bind(this));

    // update layer selected
    this._events.lotSelected.subscribe(this.updateLotSelected.bind(this));

    this._events.updateBlockData.subscribe(this.updateBlockData.bind(this));

    // fetch polygon
    this._events.fetchPoly.subscribe(async () => {
      await this.fetchPoly();
      await this.fetchPolyFunction();
    });
    // fetch polygon function
    this._events.fetchPolyFunction.subscribe(this.fetchPolyFunction.bind(this));

    // fetch heatmap
    this._events.fetchHeat.subscribe(this.fetchHeat.bind(this));
    // fetch heatmap function
    this._events.fetchHeatFunction.subscribe(this.fetchHeatFunction.bind(this));

    // show selected layer
    this._events.showLayer.subscribe(this.showLayer.bind(this));
    // hide all layers
    this._events.hideLayers.subscribe(this.hideLayers.bind(this));

    // filterLayer
    this._events.doLayerFiltering.subscribe(this.onLayerFiltering.bind(this));
  }

  onLayerFiltering() {
    const codesAllowed = Object.keys(this._state.filteredData);
    if (codesAllowed.length === 0) {
      console.log("No data found.");
      this._mapView.filterLayer(undefined);
      return;
    }
    this._mapView.filterLayer(this._state.filteredData);
  }

  onHighlightLayerElem(elementName: string) {
    this._mapView.updateHighlightLayerElem(elementName);
  }

  normalizeData() {
    const result = {};
    let min = 0,
        max = 0;
    if (this._state.layerInfoData !== undefined) {
      let firstTime = true;

      this._state.layerInfoData.forEach( elem => {
        const summaries = elem.summaries;
        const attrSummary = summaries[this._state.attributeNameSelected];
        if (this._state.isAttributeSelectedNum) {
          let nVal = 0;
          if (attrSummary.hasOwnProperty('sum')) {
            nVal = attrSummary.sum;
          }
          if (firstTime) {
            min = nVal;
            max = nVal;
            firstTime = false;
          } else {
            if (nVal > max) {
              max = nVal;
            }
            if (nVal < min) {
              min = nVal;
            }
          }
        }
      });
      this._state.layerInfoData.forEach( elem => {
        const code = elem.code;
        const summaries = elem.summaries;
        const attrSummary = summaries[this._state.attributeNameSelected];
        let scalar = 0;
        if (this._state.isAttributeSelectedNum) {
          let nVal = 0;
          if (attrSummary.hasOwnProperty('sum')) {
            nVal = attrSummary.sum;
          }
          const length = (max - min === 0) ? 1 : max - min;
          scalar = Math.abs(nVal - min) / length;
        }
        const obj = {'code': code, 'scalar': scalar};
        result[code] = obj;
      });
    }
    this._state.minLayer = min;
    this._state.maxLayer = max;
    this._events.layerIntervalChanged.emit();
    return result;
  }

  updateCurrentLayerColors () {
    if (this._state.layerInfoData === undefined ||
      Object.keys(this._state.layerInfoData).length === 0) {
        console.log('there is a problem here!');
        return;
    }
    const dataNormalized = this.normalizeData();

    this._mapView.updateDataSelected(dataNormalized);
  }

  async updateBlockData() {
    this._state.nextBlockGraphData = undefined;
  }

  async updateLotSelected(senderInfo: {lotCode: string, layerId: string}) {
    if (this._state.blockCodeSelected === undefined) {
      const blockCode = senderInfo.lotCode.slice(1, 6);
      this._state.blockCodeSelected = blockCode;
    }
  }

  hoverCallback (elemHoveredName: string) {
    this._events.highlightElemOnHover.emit(elemHoveredName);
  }


  /**
   * This function query API to get properly Layer information
   */
  async fetchCustomLayer() {
    // if dont have neighborhood Selected, it can not
    if (this._state.activeCustomPoly.toUpperCase() === 'NEIGHBORHOOD') {
      // Create neighbrohood layer
      const layerKey = 'neighbors_1';
      if (!this._mapView.hasLayer(layerKey)) {
        const data = await this._api.fetchNeighborLayer();
        const layerData = data['data'];
        await this._mapView.addCustomLayer(LayerTypes.POLYGON_LAYER,
          layerKey,
          layerData,
          this.neighborsCallbackFunction.bind(this),
          this.hoverCallback.bind(this));
      }
    } else if (this._state.activeCustomPoly.toUpperCase() === 'TAX LOT') {
      if (this._state.neighborhoodSelected !== undefined) {
        // Create layer key [year-borough-neighborhood]
        const layerKey = `Lots-${this._state.yearSelected}-${this._state.boroughSelected}-${this._state.neighborhoodSelected}`;
        // Verify whether this layers already exists
        if (!this._mapView.hasLayer(layerKey)) {
          console.log (`Need to fetch Neighborhood lots From ${this._state.neighborhoodSelected}`);
          // If not, Call server to get this information
          const data = await this._api.fetchNeighborhoodLotLayer( this._state.yearSelected,
                                                                  this._state.boroughSelected,
                                                                  this._state.neighborhoodSelected);
          // get data information
          const layerData = data['data'];
          // add custom layer to it
          await this._mapView.addCustomLayer(LayerTypes.POLYGON_LAYER,
            layerKey,
            layerData,
            this.neighborsLotCallbackFunction.bind(this),
            this.hoverCallback.bind(this));
        }
      }
    }
    const dataNormalized = this.normalizeData();
    this._mapView.updateDataSelected(dataNormalized);
  }

  neighborsCallbackFunction (neighborSelected: string, senderLayerId: string) {
    if (neighborSelected.length !== 0) {
      if (this._state.layerLevelSelected === LayerLevelSelected.neighborhood) {
        if ( (this._state.neighborhoodSelected === undefined ||
          this._state.neighborhoodSelected !== neighborSelected) ) {
          this._state.layerLevelSelected = LayerLevelSelected.block;
          this._state.activeCustomPoly = 'Tax Lot';
          // Hide all layers
          this._events.hideLayers.emit();
          // update neighborSelectedCode
          this._state.neighborhoodSelected = neighborSelected;
          // emit event to load properly layer
          this._events.fetchCustomLayer.emit();
          // update layerInfo
          this._events.updateLayerContent.emit();
        } else {
          this.emptyInputs();
        }
      }
    } else {
      this.emptyInputs();
    }
  }

  emptyInputs() {
    const oldNeighborhoodSelected = this._state.neighborhoodSelected;
    this._state.neighborhoodSelected = undefined;
    this._state.blockCodeSelected = undefined;
    this._state.lotCodeSelected = undefined;
    if (oldNeighborhoodSelected !== undefined) {
      this._state.layerLevelSelected = LayerLevelSelected.neighborhood;
      this._events.updateLayerContent.emit();
    }
  }

  neighborsLotCallbackFunction (lotCodeSelected: string, senderLayerId: string) {
    // Sanity check
    if (this._state.activeCustomPoly) {
      if ( this._state.activeCustomPoly.toUpperCase() === 'TAX LOT') {
        // check if lotCode from lot selected is empty, whether it is assign undefined to lotSelected State
        console.log('Estamos aqui: ', lotCodeSelected);
        if (lotCodeSelected.length !== 0) {
          // only
          if ((this._state.lotCodeSelected === undefined ||
              this._state.lotCodeSelected !== lotCodeSelected)) {
                this._state.lotCodeSelected = lotCodeSelected;
                this._state.layerLevelSelected = LayerLevelSelected.lot;
                this._events.lotSelected.emit({lotCode: lotCodeSelected, layerId: senderLayerId});
                this._events.updateLayerContent.emit();
            } else {
              const prevLotCode = this._state.lotCodeSelected;
              this._state.lotCodeSelected = undefined;
              if (prevLotCode !== undefined) {
                this._state.layerLevelSelected = LayerLevelSelected.block;
                this._events.updateLayerContent.emit();
              }
            }
        } else {
          this._state.lotCodeSelected = undefined;
          this._state.layerLevelSelected = LayerLevelSelected.block;
          this._events.updateLayerContent.emit();
        }
      }
    }
  }

  async fetchPoly() {
    // gets the active polygon
    const name = this._state.activePoly;
    if (!name) { return; }

    // gets the polygon geometry
    const geom = await this._db.loadPolygonLayer(name);

    // formats the data
    // TODO: Make data format the same when loading from file
    const data = {features: []};
    for (const coords of geom.polygons[name]) {
      const feat = {};
      const ids = Array.from(Array(coords.length / 2).keys());

      feat['geometry'] = {coordinates: coords, indices: ids};
      data.features.push(feat);
    }

    // adds the layer
    await this._mapView.addLayer('polygon', name, data);
  }

  async fetchPolyFunction() {
    // gets the active polygon
    const poly = this._state.activePoly;
    if (!poly) { return; }
    // the active data
    const dSet = this._state.activeData;
    if (!dSet) { return; }

    // current spatio-temporal group
    const stCol = this._state.activeStCol;
    // current attribute col
    const col = this._state.activeCol;
    // time range
    const time = this._state.time;

    // gets the polygon geometry
    const data = await this._db.loadPolygonJoin(poly, dSet, stCol, col, time);

    // formats the data
    // TODO: Make data format the same when loading from file
    const join = {};
    join['func'] = data['vis'][dSet].sjoin;
    join['fMin'] = data['vis'][dSet].min;
    join['fMax'] = data['vis'][dSet].max;

    // adds the layer
    await this._mapView.updateLayerFunction(poly, join);
  }

  async fetchHeat() {
    // gets the active dataset
    const name = this._state.activeData;
    if (!name) { return; }

    // current spatio-temporal group
    const stCol = this._state.activeStCol;
    // current attribute col
    const col = this._state.activeCol;
    // space region
    const space = this._state.space;
    // time range
    const time = this._state.time;

    // get the heatmap data
    const data = await this._db.loadHeatMapLayer(name, stCol, col, space, time);

    // result
    // TODO: Make data format the same when loading from file
    const feat = {};
    feat['coordinates'] = [data['vis'][name].lb, data['vis'][name].rt];
    feat['resX'] = data['vis'][name].resx;
    feat['resY'] = data['vis'][name].resy;
    feat['grid'] = data['vis'][name].heatmap;
    feat['gMin'] = data['vis'][name].min;
    feat['gMax'] = data['vis'][name].max;

    await this._mapView.addLayer('heatmap', 'Grid', feat);
  }

  async fetchHeatFunction() {
    // gets the active dataset
    const name = this._state.activeData;
    if (!name) { return; }

    // current spatio-temporal group
    const stCol = this._state.activeStCol;
    // current attribute col
    const col = this._state.activeCol;
    // space region
    const space = this._state.space;
    // time range
    const time = this._state.time;

    // get the heatmap data
    const data = await this._db.loadHeatMapLayer(name, stCol, col, space, time);

    // result
    // TODO: Make data format the same when loading from file
    const feat = {};
    feat['coordinates'] = [data['vis'][name].lb, data['vis'][name].rt];
    feat['resX'] = data['vis'][name].resx;
    feat['resY'] = data['vis'][name].resy;
    feat['grid'] = data['vis'][name].heatmap;
    feat['gMin'] = data['vis'][name].min;
    feat['gMax'] = data['vis'][name].max;

    await this._mapView.updateLayerFunction('Grid', feat);
  }

  showLayer() {
    // currently selected layer
    const target = this._state.activePoly;
    if (!target) { return; }

    // get all layers
    const layers = this._mapView.layerManager.layers;
    // finds the selected layer
    for (const layer of layers) {
      if (layer.layerId === target) {
        layer.visible = true;
        break;
      }
    }

    this._mapView.render();
  }

  hideLayers() {
    // get all layers
    const layers = this._mapView.layerManager.layers;
    // finds the selected layer
    for (const layer of layers) {
      if (layer instanceof PolygonLayer || layer instanceof HeatmapLayer) {
        layer.visible = false;
      }
    }

    this._mapView.render();
  }
}
