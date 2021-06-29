import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrbaneStateService {
  // available vis modules
  private _vis: string[] = ['Diff Table'];

  // available polygons and data
  private _poly: string[] = [];
  private _data: string[] = [];
  private _customPoly: string[] = [];

  // active polygon and data
  private _activeVis: string;
  private _activePoly: string;
  private _activeData: string;
  private _activeCustomPoly: string;
  private _showColorMap: boolean;

  // ColorMap intervals
  // Diff table intervals
  private _minTable: number;
  private _maxTable: number;
  // Layer Intervals
  private _minLayer: number;
  private _maxLayer: number;

  // activate neighborName
  private _neighborhoodSelected: string;
  private _yearSelected: string;
  private _boroughSelected: string;
  private _lotCodeSelected: string;
  private _blockSelected: string;
  private _years: string[];
  private _blockList: string[];
  private _boroughsAvailable: string[];

  private _blockGraphData: any;
  private _nextBlockGraphData: any;
  private _numericalAttributes: string[];
  private _attributeAvailable: string[];
  private _layerInfoData: any;
  private _filteredData: any;
  private _attributeNameSelected: string;
  private _isAttributeSelectedNum: boolean;

  private _layerLevelSelected: LayerLevelSelected;

  // data columns
  private _col: string[];
  private _stCol: string[];

  // active data columns
  private _activeCol: string;
  private _activeStCol: string;

  // fetched polys
  private _fetchedPoly: string[] = [];

  // space constraint
  private _space: number[] = [
    40.49613399, -74.25559136,
    40.91553278, -73.70000906
  ];

  // time constraint
  private _time: string[] = [
    '2014-01-01 00:01', '2014-02-01 00:00'
  ];
  // urbane-db accuracy
  private _accuracy = 20.0;
  // urbane-db radius
  private _radius = 200;

  // constructor
  constructor() {
    this._boroughSelected = 'MANHATTAN';
    this._blockList = ['', 'Elem1', 'Elme2'];
    this._attributeNameSelected = '';
    this._attributeAvailable = [];
    this._boroughsAvailable = ['MANHATTAN', 'BROOKLYN', 'BRONX', 'QUEENS', 'STATEN ISLAND'];
    this._layerLevelSelected = LayerLevelSelected.none;
    this._showColorMap = false;
    this._filteredData = {};
  }

  get minTable() {
    return this._minTable;
  }

  set minTable(minVal: number) {
    this._minTable = minVal;
  }

  get maxTable() {
    return this._maxTable;
  }

  set maxTable(maxVal: number) {
    this._maxTable = maxVal;
  }

  get minLayer() {
    return this._minLayer;
  }

  set minLayer(minVal: number) {
    this._minLayer = minVal;
  }

  get maxLayer() {
    return this._maxLayer;
  }

  set maxLayer(maxVal: number) {
    this._maxLayer = maxVal;
  }

  get showColorMap() {
    return this._showColorMap;
  }

  set showColorMap (showColorMap: boolean) {
    this._showColorMap = showColorMap;
  }

  get layerLevelSelected(): LayerLevelSelected {
    return this._layerLevelSelected;
  }

  set layerLevelSelected(layerLevelSelected: LayerLevelSelected) {
    this._layerLevelSelected = layerLevelSelected;
  }

  get boroughsAvailable(): string[] {
    return this._boroughsAvailable;
  }

  set boroughsAvailable(boroughsAvailable: string[]) {
    this._boroughsAvailable = boroughsAvailable;
  }

  get isAttributeSelectedNum(): boolean {
    return this._isAttributeSelectedNum;
  }

  set isAttributeSelectedNum(isNUmeric: boolean) {
    this._isAttributeSelectedNum = isNUmeric;
  }

  get attributeAvailable(): string[] {
    return this._attributeAvailable;
  }

  set attributeAvailable(attrAvailables: string[]) {
    this._attributeAvailable = attrAvailables;
  }

  get attributeNameSelected() {
    return this._attributeNameSelected;
  }

  set attributeNameSelected(attrName: string) {
    this._attributeNameSelected = attrName;
  }

  get layerInfoData(): any {
    return this._layerInfoData;
  }

  set layerInfoData(layerInfoData: any) {
    this._layerInfoData = layerInfoData;
  }

  get filteredData(): any {
    return this._filteredData;
  }

  set filteredData(filteredData: any) {
    this._filteredData = filteredData;
  }

  get blockList(): string[] {
    return this._blockList;
  }

  set blockList(blockList: string[]) {
    this._blockList = blockList;
  }

  get numericalAttributes(): string[] {
    return this._numericalAttributes;
  }

  set numericalAttributes(numericalAttributes: string[]) {
    this._numericalAttributes = numericalAttributes;
  }

  get years(): string[] {
    return this._years;
  }

  set years(_years: string[]) {
    this._years = _years;
  }

  get blockGraphData(): any {
    return this._blockGraphData;
  }

  set blockGraphData(blockGraphData: any) {
    this._blockGraphData = blockGraphData;
  }

  get nextBlockGraphData(): any {
    return this._nextBlockGraphData;
  }

  set nextBlockGraphData(blockGraphData: any) {
    this._nextBlockGraphData = blockGraphData;
  }

  get blockCodeSelected(): string {
    return this._blockSelected;
  }

  set blockCodeSelected(blockSelected: string) {
    this._blockSelected = blockSelected;
  }

  get lotCodeSelected(): string {
    return this._lotCodeSelected;
  }

  set lotCodeSelected(nLotCodeSelected: string) {
    this._lotCodeSelected = nLotCodeSelected;
  }

  get boroughSelected(): string {
    return this._boroughSelected;
  }

  set boroughSelected(nBoroughSelected: string) {
    this._boroughSelected = nBoroughSelected;
  }

  get yearSelected(): string {
    return this._yearSelected;
  }

  set yearSelected(nYearSelected: string) {
    this._yearSelected = nYearSelected;
  }

  // get neighborhoodSelected
  get neighborhoodSelected(): string {
    return this._neighborhoodSelected;
  }

  //set neighborhoodSelected
  set neighborhoodSelected( newNeighborhood: string ) {
    this._neighborhoodSelected = newNeighborhood;
  }

  // get the vis list
  get vis(): string[] {
    return this._vis;
  }
  // set the vis list
  set vis(vis: string[]) {
    this._vis = vis;
  }

  // ------

  get activeCustomPoly(): string {
    return this._activeCustomPoly;
  }

  set activeCustomPoly(customPolyActivated: string) {
    this._activeCustomPoly = customPolyActivated;
  }

  // Get CustomPolyLayers
  get customPolyLayers(): string[] {
    return this._customPoly;
  }

  set customPolyLayers(customLayers: string[]) {
    this._customPoly = customLayers;
  }

  // get the polygon list
  get poly(): string[] {
    return this._poly;
  }
  // set the polygon list
  set poly(poly: string[]) {
    this._poly = poly;
  }

  // ------

  // get the data list
  get data(): string[] {
    return this._data;
  }
  // set the data list
  set data(data: string[]) {
    this._data = data;
  }

  // ------

  // get the active vis
  get activeVis(): string {
    return this._activeVis;
  }
  // set the active vis
  set activeVis(vis: string) {
    this._activeVis = vis;
  }

  // ------

  // get the active polygon
  get activePoly(): string {
    return this._activePoly;
  }
  // set the active polygon
  set activePoly(poly: string) {
    this._activePoly = poly;
  }

  // ------

  // get the active dataset
  get activeData(): string {
    return this._activeData;
  }
  // set the active dataset
  set activeData(data: string) {
    this._activeData = data;
  }

  // ------

  // get the dataset spatial-temporal columns
  get stCol(): string[] {
    return this._stCol;
  }
  // set the dataset spatial-temporal columns
  set stCol(data: string[]) {
    this._stCol = data;
  }

  // ------

  // get the current dataset columns
  get col(): string[] {
    return this._col;
  }
  // set the current dataset columns
  set col(data: string[]) {
    this._col = data;
  }

  // ------

  // get active spatial-temporal columns
  get activeStCol(): string {
    return this._activeStCol;
  }
  // set the active spatial-temporal columns
  set activeStCol(data: string) {
    this._activeStCol = data;
  }

  // ------

  // get the active dataset columns
  get activeCol(): string {
    return this._activeCol;
  }
  // set the active dataset columns
  set activeCol(data: string) {
    this._activeCol = data;
  }

  // ------

  // get the already fetched polygon list
  get fetchedPoly(): string[] {
    return this._fetchedPoly;
  }

  // ------

  // get the space constraint
  get space(): number[] {
    return this._space;
  }
  // set the space constraint
  set space(space: number[]) {
    this._space = space;
  }

  // ------

  // get the time constraint
  get time(): string[] {
    return this._time;
  }
  // set the time constraint
  set time(time: string[]) {
    this._time = time;
  }

  // ------

  // get the urbane-db accuracy
  get accuracy(): number {
    return this._accuracy;
  }
  // set the urbane-db accuracy
  set accuracy(accuracy: number) {
    this._accuracy = accuracy;
  }

  // ------

  // get the urbane-db radius
  get radius(): number {
    return this._radius;
  }
  // set the urbane-db radius
  set radius(radius: number) {
    this._radius = radius;
  }}

export enum LayerLevelSelected {
  none = 'Not Selected',
  neighborhood = 'Neighborhhod Selected',
  block = 'Block Selected',
  lot = 'Lot Selected'
}