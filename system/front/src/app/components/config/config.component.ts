import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public colorControl = new FormControl('warn');
  public fontSizeControl = new FormControl(12);

  constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) { }

  ngOnInit(): void {}

  boroughSelectChanged(event) {
    // cleans the line chart
    this.events.vis.lineIconClicked.emit([]);
    // cleans the levels
    const levels = this.data.meta.levels;
    let updates = levels
        .filter(str => str !== 'borough')
        .reduce((prev, key) => ({...prev, [key]: undefined}), {})

    const previous = this.state.activeGeometryParameters;
    this.state.activeGeometryParameters = Object.assign(previous, updates);

    // cleans the filters
    this.state.activeFilterParameters = {};
    this.data.filters = {};

    // changed value
    const borough = {borough: event.value};
    // emits the event
    this.events.config.boroughSelectChanged.emit(borough);
  }

  polygonsSelectChanged(event) {
    // cleans the line chart
    this.events.vis.lineIconClicked.emit([]);

    // cleans the levels
    const levels = this.data.meta.levels;
    let updates = levels
        .filter(str => str !== 'borough')
        .reduce((prev, key) => ({...prev, [key]: undefined}), {})

    const previous = this.state.activeGeometryParameters;
    this.state.activeGeometryParameters = Object.assign(previous, updates);

    // cleans the filters
    this.state.activeFilterParameters = {};
    this.data.filters = {};

    // changed value
    const polygon = {polygon: event.value};
    // emits the event
    this.events.config.polygonSelectChanged.emit(polygon);
  }

  navigationSelectChanged(event) {
    // cleans the line chart
    this.events.vis.lineIconClicked.emit([]);

    // cleans the levels
    const levels = this.data.meta.levels;
    let updates = levels
        .filter(str => str !== 'borough')
        .reduce((prev, key) => ({...prev, [key]: undefined}), {})

    const previous = this.state.activeGeometryParameters;
    this.state.activeGeometryParameters = Object.assign(previous, updates);

    // cleans the filters
    this.state.activeFilterParameters = {};
    this.data.filters = {};

    // changed value
    const navigation = {navigation: event.value};
    // emits the event
    this.events.config.navigationSelectChanged.emit(navigation);

  }

  mapModeSelectChanged(event) {
    // changed value
    const mode = {mode: event.value};

    // emits the event
    this.events.config.modeSelectChanged.emit(mode);
  }
}
