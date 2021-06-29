import { Injectable } from '@angular/core';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  matrixActive = null;
  filterActive = null;
  configActive = false;
  legendActive = true;

  layersActive = false;
  activeLayer = '';

  activeConfigParameters: any = {
    borough: 'Manhattan',
    polygon: 'neighborhoods',
    navigation: 'complete',
    mode: 'change',
    filterExp: '',
    cmapPercentiles: false
  };

  activeGeometryParameters: any = { 
    neighborhood: undefined,
    block: undefined,
    lot: undefined,
    year: '2017.1'
  };

  activeSummaryParameters: any = {
    attribute: 'LOTSALIVE',
    category: 'NONE',
    metric: 'COUNT',
    mode: 'change',
    yearStep: 0
  };

  activePageParameters: any = {
    currentPage: null,
    totalPages: null,
    pageSize: null,
    PAGINATION_SIZE: 35
  }

  activeSortParameters: any = {
    sortBy: 'name',
  }

  activeLineChartCurves = [];

  activeFilterParameters: any = {}

  CURRENT_FILTER_ID = 0;

  selectedPolygon = '';

  constructor(public events: EventsService) {
    this.subscribeDataEvents();
    this.subscribeLayersEvents();

    this.subscribeConfigEvents();

    this.subscribeMapEvents();
    this.subscribeVisEvents();
    this.subscribeFilterEvents();
  }

  get activeLevel() {
    if (
      this.activeConfigParameters.borough &&
      this.activeGeometryParameters.neighborhood &&
      (this.activeGeometryParameters.block || this.activeConfigParameters.navigation === 'skip blocks') &&
      this.activeGeometryParameters.lot &&
      this.activeGeometryParameters.year
    ) { return 'lot' }

    if (
      this.activeConfigParameters.borough &&
      this.activeGeometryParameters.neighborhood &&
      (this.activeGeometryParameters.block && this.activeConfigParameters.navigation === 'complete') &&
      this.activeGeometryParameters.year
    ) { return 'block' }

    if (
      this.activeConfigParameters.borough &&
      this.activeGeometryParameters.neighborhood &&
      this.activeGeometryParameters.year
    ) { return 'neighborhood' }

    if (
      this.activeConfigParameters.borough
    ) { return 'borough' }

    return 'invalid';
  }

  get currentFilterId() {
    return this.CURRENT_FILTER_ID++;
  }

  // ---- Map events subscriptions

  subscribeMapEvents() {
    this.events.map.polyPicked.subscribe(this.updateSelectedPolygon.bind(this));
  }

  updateSelectedPolygon(state) {
    this.selectedPolygon = state.name;
    this.events.state.selectedPolygonChanged.emit(state.origin);
  }

  // ---- Config events subscription

  subscribeConfigEvents() {
    this.events.config.boroughSelectChanged.subscribe(this.updateActiveConfigBorough.bind(this));
    this.events.config.polygonSelectChanged.subscribe(this.updateActiveConfigPolygon.bind(this));
    this.events.config.navigationSelectChanged.subscribe(this.updateActiveConfigNavigation.bind(this));
    this.events.config.modeSelectChanged.subscribe(this.updateActiveConfigMode.bind(this));
  }

  // ---- Vis events subscriptions

  subscribeVisEvents() {
    // changes on these parameters must trigger an update on the layer geometry / function and on the summary matrix
    this.events.vis.polygonLabelClicked.subscribe(this.updateActiveGeometryParameters.bind(this));
    this.events.vis.polygonLabelHovered.subscribe(this.updateSelectedPolygon.bind(this));
    this.events.vis.yearLabelClicked.subscribe(this.updateActiveGeometryParameters.bind(this));
    this.events.vis.navButtonClicked.subscribe(this.updateActiveGeometryParameters.bind(this));

    // chages on these parameters must trigger an update on the layer function and on the summary matrix
    this.events.vis.yearStepSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
    this.events.vis.attributeSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
    this.events.vis.categorySelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
    this.events.vis.metricSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
    this.events.vis.modeSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));

    // changes that don't require data reload
    this.events.vis.sortBySelectChanged.subscribe(this.updateActiveSortParameters.bind(this));

    // changes on these parameters must trigger an summary matrix update
    this.events.vis.navPageChanged.subscribe(this.updateActivePageParameters.bind(this));
    this.events.vis.sortIconClicked.subscribe(this.updateActiveSortParameters.bind(this));
    this.events.vis.lineIconClicked.subscribe(this.updateActiveLineChartCurves.bind(this));
  }

  updateActiveConfigMode(state) {
    const previous = this.activeConfigParameters;
    this.activeConfigParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.configModeChanged.emit();
  }

  updateActiveConfigBorough(state) {
    const previous = this.activeConfigParameters;
    this.activeConfigParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.configBoroughChanged.emit();
  }

  updateActiveConfigPolygon(state) {
    const previous = this.activeConfigParameters;
    this.activeConfigParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.configPolygonChanged.emit();
  }

  updateActiveConfigNavigation(state) {
    const previous = this.activeConfigParameters;
    this.activeConfigParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.configNavigationChanged.emit();
  }

  updateActiveGeometryParameters(state) {
    const previous = this.activeGeometryParameters;
    this.activeGeometryParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.geometryParametersChanged.emit(Object.keys(state).includes('year'));
  }

  updateActiveSummaryParameters(state) {
    const previous = this.activeSummaryParameters;
    this.activeSummaryParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.summaryParametersChanged.emit();
  }

  updateActivePageParameters(state) {
    const previous = this.activePageParameters;
    this.activePageParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.pageParametersChanged.emit();
  }

  updateActiveSortParameters(state) {
    const previous = this.activeSortParameters;
    this.activeSortParameters = Object.assign(previous, state);

    // emits the changes
    this.events.state.sortParametersChanged.emit();
  }

  updateActiveLineChartCurves(state) {
    this.activeLineChartCurves = state;

    // emits the changes
    this.events.state.lineCurvesChanged.emit();
  }


  subscribeFilterEvents() {
    this.events.filters.updated.subscribe(this.updateFilterParameters.bind(this));
    this.events.filters.brushed.subscribe(this.updateFilterBrush.bind(this));
  }

  updateFilterParameters(state) {
    const { key } = state;
       
    if (state.params === null) {
      delete this.activeFilterParameters[key];
    } else {
      const previous = this.activeFilterParameters[key] || {} ;
      this.activeFilterParameters[key] = Object.assign(previous, state.params);
    }

    this.events.state.filterParametersChanged.emit(key);
  }

  updateFilterBrush(state) {
    const { key } = state;

    const previous = this.activeFilterParameters[key] || {} ;
    this.activeFilterParameters[key] = Object.assign(previous, state.params);
  }

  subscribeDataEvents() {
    this.events.data.initializePagination.subscribe(this.initializePagination.bind(this))
  }

  initializePagination(length: number) {
    let den = 1;
    while ((length / den) > this.activePageParameters.PAGINATION_SIZE) {
      den += 1;
    }

    this.activePageParameters.currentPage = 0;
    this.activePageParameters.totalPages = den;
    this.activePageParameters.pageSize = Math.ceil(length / den);
  }

  subscribeLayersEvents() {
    this.events.layers.activeLayerChanged.subscribe(this.changeActiveLayer.bind(this));
  }

  changeActiveLayer(state) {
    this.layersActive = state.layersActive;
    this.activeLayer = state.activeLayer;

    this.events.state.activeLayerChanged.emit();
  }

}
