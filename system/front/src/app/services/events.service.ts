import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // Events fired by the root-app
  public root = {
    initialized: new EventEmitter<void>(),
  }

  public config = {
    boroughSelectChanged: new EventEmitter<any>(),
    polygonSelectChanged: new EventEmitter<any>(),
    navigationSelectChanged: new EventEmitter<any>(),
    modeSelectChanged: new EventEmitter<any>()
  }

  // Events fired by mapview
  public menu = {
    buttonClicked: new EventEmitter<string>(),
  }
  
  // Events fired by mapview
  public map = {
    initialized: new EventEmitter<void>(),
    polyPicked: new EventEmitter<any>(),
  }

  // Events fired by the vis window
  public vis = {
    yearStepSelectChanged: new EventEmitter<any>(),
    attributeSelectChanged: new EventEmitter<any>(),
    metricSelectChanged: new EventEmitter<any>(),
    categorySelectChanged: new EventEmitter<any>(),
    modeSelectChanged: new EventEmitter<any>(),
    sortBySelectChanged: new EventEmitter<any>(),
    
    yearLabelClicked: new EventEmitter<any>(),
    polygonLabelClicked: new EventEmitter<any>(),
    polygonLabelHovered: new EventEmitter<any>(),

    navButtonClicked: new EventEmitter<any>(),
    navPageChanged: new EventEmitter<any>(),

    sortIconClicked: new EventEmitter<any>(), 
    lineIconClicked: new EventEmitter<any>()
  }

  public filters = {
    updated: new EventEmitter<any>(),
    brushed: new EventEmitter<any>(),
    updateSummary: new EventEmitter<void>()
  }

  // Events fired by the data service
  public data = {
    updateFilters: new EventEmitter<void>(),

    updateVisMatrix: new EventEmitter<void>(),

    updateMapFunction: new EventEmitter<void>(),
    updateMapGeometryAndFunction: new EventEmitter<void>(),
  
    initializePagination: new EventEmitter<number>()
  }

  // events fired by the state service
  public state = {
    configBoroughChanged: new EventEmitter<void>(),
    configPolygonChanged: new EventEmitter<void>(),
    configNavigationChanged: new EventEmitter<void>(),
    configModeChanged: new EventEmitter<void>(),
    configCMapChanged: new EventEmitter<void>(),

    geometryParametersChanged: new EventEmitter<boolean>(),
    summaryParametersChanged: new EventEmitter<void>(), 

    selectedPolygonChanged: new EventEmitter<string>(),
    activeLayerChanged: new EventEmitter<string>(),

    pageParametersChanged: new EventEmitter<void>(),
    sortParametersChanged: new EventEmitter<void>(),
    lineCurvesChanged: new EventEmitter<void>(),

    filterParametersChanged: new EventEmitter<string>()
  }

  public layers = {
    activeLayerChanged: new EventEmitter<any>()
  }

  constructor() { }
}
