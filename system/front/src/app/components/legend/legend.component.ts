import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

import { Cmap } from 'src/app/charts/cmap';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  // matrix div
  @ViewChild('matcolormap', {static: true}) _matColorMatDiv: ElementRef;
  private _matColorMap: any;
  // map div
  @ViewChild('mapcolormap', {static: true}) _mapColorMapDiv: ElementRef;
  private _mapColorMap: any;

  constructor(public data: DataService, public events: EventsService,  public state: StateService) { }

  ngOnInit(): void {
    this.subscribeDataEvents();
    this._matColorMap = new Cmap(this._matColorMatDiv.nativeElement);
    this._mapColorMap = new Cmap(this._mapColorMapDiv.nativeElement);
  }

  subscribeDataEvents() {
    this.events.data.updateVisMatrix.subscribe(this.loadCmap.bind(this, 'mat'));

    this.events.data.updateMapGeometryAndFunction.subscribe(this.loadCmap.bind(this, 'map'));
    this.events.data.updateMapFunction.subscribe(this.loadCmap.bind(this, 'map'));
  }

  loadCmap(visElement) {
    const mode = visElement === 'mat' ? this.state.activeSummaryParameters.mode : this.state.activeConfigParameters.mode;
    
    // get the min and max values
    let minMax = [];
    if (mode === 'value') {
      minMax = [+this.data.summary.min.toFixed(2), +this.data.summary.max.toFixed(2)];
    } else {
      minMax = [+this.data.summary.changeMin.toFixed(2), +this.data.summary.changeMax.toFixed(2)];
    }

    if (visElement === 'mat') {
      this._matColorMap.setData(minMax);
      this._matColorMap.render(); 
    } else {
      this._mapColorMap.setData(minMax);
      this._mapColorMap.render();
    }
  }

  changeCMap() {
      this.state.activeConfigParameters.cmapPercentiles = !this.state.activeConfigParameters.cmapPercentiles;
      this.events.state.configCMapChanged.emit();
    }
}
