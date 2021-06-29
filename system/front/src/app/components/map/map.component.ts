// angular imports
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// mapview imports
import { MapView } from 'src/app/mapview/mapview';

// services
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // map div
  @ViewChild('mapView', {static: true}) _mapDiv: ElementRef;
  // map view instance
  protected _mapView: MapView = null;

  // map component constructor
  constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) { }

  // initialization hook
  async ngOnInit() {
    // map callbacks
    const callbacks = {
      mouse: { mouseDown: this.highlightPoly.bind(this), },
      key: {}
    };

    // cretes the map
    this._mapView =  new MapView(this._mapDiv.nativeElement, callbacks);
    await this._mapView.initLayers('index.json')

    // subscribe events
    this.subscribeDataEvents();
    this.subscribeStateEvents();

    // sinalizes that mapview is ready
    this.events.map.initialized.emit();
  }

  // events handled by mapview
  subscribeStateEvents() {
    this.events.state.selectedPolygonChanged.subscribe(this.updateHighlightedPolygon.bind(this));
    this.events.state.activeLayerChanged.subscribe(this.loadPopsLayer.bind(this));
  }


  // events handled by mapview
  subscribeDataEvents() {
    this.events.data.updateMapGeometryAndFunction.subscribe(this.loadLayerGeometryAndFunction.bind(this));
    this.events.data.updateMapFunction.subscribe(this.loadLayerScalarField.bind(this));
  }

  async loadLayerGeometryAndFunction() {
    await this.loadLayerGeometry();
    await this.loadLayerScalarField();
    // open the POPs layer
    await this.loadPopsLayer();
  }

  async loadPopsLayer() {
    // removes the previous loaded layer    
    this._mapView.delLayer('pops');

    // layer config
    const config = {selectable: false, visible: this.state.activeLayer === 'pops'};
    
    // loads the payer
    await this._mapView.addLayer('point', 'pops', this.data.layers['pops'], config);
  }

  // loads the polygon layer
  async loadLayerGeometry() {
    // removes the previous loaded layer    
    this._mapView.delLayer('pluto');

    // layer config
    const config = {selectable: true};

    // loads the payer
    await this._mapView.addLayer('polygon', 'pluto', this.data.geometry, config);
  }

  // loads the scalar function
  async loadLayerScalarField() {
    const mode = this.state.activeConfigParameters.mode;
    const year = this.state.activeGeometryParameters.year;
    if (!year) { return; }

    const feats = this.data.geometry.features;
        
    const values = this.data.summary[year].filter(obj => obj.isAlive);
    values.sort((a, b) => a.name < b.name ? 1 : -1);

    const func = [];
    for (let nId = 0; nId < feats.length; nId++) {
      const count = feats[nId].geometry.length;
      const name = feats[nId].properties.name;

      const pos = values.findIndex(obj => {
        return obj.name === name;
      });

      let value = null;
      if (pos >= 0) {
        const current = values[pos];
4
        if ( !current.isAlive ) {
            value = 'notAlive';
        }
        else if ( !current.isActive ) {
            value = 'notActive';
        }
        else if ( mode === 'value' && !current.isValid) {
            value = 'notValid';
        }
        else if ( mode === 'change' && !current.changeValid) {
            value = 'notChange';
        }
        else {
            value = current[mode];
        }
      }
      func.push(...Array(count).fill(value));
    } 

    let fMin = null, fMax = null;
    if (mode === 'value') {
      [fMin, fMax] = [this.data.summary.min, this.data.summary.max];
    } 
    else {
      [fMin, fMax] = [this.data.summary.changeMin, this.data.summary.changeMax];
    }  

    await this._mapView.updateLayerFunction('pluto', {func, fMin, fMax});
  }

  highlightPoly(polygon: string) {
    let name = "";
    const id = +polygon[0];

    if (id >= 0) {
      name = this.data.geometry.features[id].properties.name;
    }

    this.events.map.polyPicked.emit({name, origin: 'map'});
  }

  updateHighlightedPolygon(origin: string) {
    if (origin === 'vis') {
      const id = this.data.geometry.features.findIndex(obj => obj.properties.name === this.state.selectedPolygon);
      this._mapView.pick('pluto', id);
    }
  }

}
