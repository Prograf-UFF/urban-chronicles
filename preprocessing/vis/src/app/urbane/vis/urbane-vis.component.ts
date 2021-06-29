import {
  Component, OnInit, ElementRef, ViewChild, ViewEncapsulation
} from '@angular/core';

// services
import { UrbaneDbService } from '../services/urbane-db.service';
import { UrbaneStateService, LayerLevelSelected } from '../services/urbane-state.service';
import { UrbaneEventsService } from '../services/urbane-events.service';

// parallel coordinates
import { TableVis } from '../../table/table';
import { ParallelCoords } from '../../parallel/parallel';
import { UrbaneAPIService } from '../services/urbane-api.service';

import { Network, DataSet } from 'vis';
import { YearSelector } from '../../yearselector/yearselector';
import { HeatMapTable } from '../../heatmaptable/heatmaptable';
import * as d3 from 'd3';
import { DSVRowString } from 'd3';

import { HeatMapModel } from '../../heatmaptable/heatmap.model';
import { isObject } from 'util';
import { PlutoVisTable } from 'src/app/plutoVisTable/plutovistable';

@Component({
  selector: 'app-urbane-vis',
  templateUrl: './urbane-vis.component.html',
  styleUrls: ['./urbane-vis.component.css',
              '../../parallel/parallel.css',
              '../../yearselector/yearselector.css',
              '../../plutoVisTable/plutovistable.css'],
  encapsulation: ViewEncapsulation.None
})
export class UrbaneVisComponent implements OnInit {
  @ViewChild('parallel', {static: true})            _parallelDiv: ElementRef;

  @ViewChild('minValueSlider', {static: true})      _minValueSlider: ElementRef;
  @ViewChild('maxValueSlider', {static: true})      _maxValueSlider: ElementRef;

  @ViewChild('yearSlider', {static: true})          _yearSliderDiv: ElementRef;
  @ViewChild('flowstratesTable', {static: true})   _plutoVisTableDiv: ElementRef;

  // parallel coordinates instance
  protected _parallel: ParallelCoords;

  protected _blockGraphCurrent: Network;
  protected _blockGraphNext: Network;
  protected _heatmapTableCurrent: HeatMapTable;
  protected _heatmapTableNext: HeatMapTable;

  protected _yearSlider: YearSelector;
  protected _plutoVisTable: PlutoVisTable;
  protected _layerInfoByYear;

  protected _values: string[] = ['', 'sa', 'ds', 'fd', 'gf'];

  protected _selectedCategory: string;
  protected _selectedValue: string;
  protected _numericsOperation: string;

  // table vis instance
  protected _tableVis: TableVis;

  protected _minValue: number;
  protected _maxValue: number;
  protected _sliderStep: number;
  protected _sliderMinValue: number;
  protected _sliderMaxValue: number;

  constructor(private _db: UrbaneDbService,
              private _state: UrbaneStateService,
              private _events: UrbaneEventsService,
              private _api: UrbaneAPIService) {
                this._numericsOperation = '';
                this._selectedCategory = '';
                this._selectedValue = '';
                this._layerInfoByYear = {};
                this._minValue = 0;
                this._maxValue = 0;
  }

  get sliderStep() {
    return this._sliderStep;
  }

  set sliderStep(step) {
    this._sliderStep = step;
  }

  get sliderMinValue() {
    return this._sliderMinValue;
  }

  set sliderMinValue(minValue) {
    this._sliderMinValue = minValue;
  }

  get sliderMaxValue() {
    return this._sliderMaxValue;
  }

  set sliderMaxValue(maxValue) {
    this._sliderMaxValue = maxValue;
  }

  get minValueSelected() {
    return this._minValue;
  }

  set minValueSelected(value: number) {
    this._minValue = value;
  }

  get maxValueSelected() {
    return this._maxValue;
  }

  set maxValueSelected(value: number) {
    this._maxValue = value;
  }

  set selectedCategory(category: string) {
    this._selectedCategory = category;
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set numericsOperation(op: string) {
    this._numericsOperation = op;
  }

  get numericsOperation(): string {
    return this._numericsOperation;
  }

  set selectedValue(nValue: string) {
    this._selectedValue = nValue;
  }

  get selectedValue(): string {
    return this._selectedValue;
  }

  get values(): string[] {
    return this._values;
  }

  set values(_nValues: string[]) {
    this._values = _nValues;
  }

  updateParams() {
    console.log(this.selectedCategory + ' - ' + this.selectedValue);
  }

  updateVis(visType: string) {
    switch (visType) {
      case 'Info':
        console.log('Change to Information');
        break;
      case 'Graph':
        console.log('Change to Graph Visualization');
        break;
      case 'Table':
        console.log('Change to Table Visualization');
        break;
    }
  }

  loadEvents() {
    this._events.updateLayerContent.subscribe(this.onLevelSelectedChanged.bind(this));
    this._events.highlightElemOnHover.subscribe(this.onMapHover.bind(this));
  }

  ngOnInit() {
    this.loadEvents();
    this.initData ();

    if (this._parallelDiv) {
      this._parallel = new ParallelCoords(this._parallelDiv.nativeElement);
    }
  }

  async initData() {
    if (this._state.years === undefined) {
      const yearAvailable = await this._api.fetchYearsAvailable();
      this._state.years = yearAvailable['data'];
    }
    // await this.updateLayerInfo();
    if (this._yearSliderDiv) {
      this._yearSlider = new YearSelector(this._yearSliderDiv.nativeElement, this._state.years, this.updateYearSelected.bind(this));
    }
    if (this._plutoVisTableDiv) {
      this._plutoVisTable = new PlutoVisTable(this._plutoVisTableDiv.nativeElement,
        this._state.years,
        {},
        this.onTableCellSelected.bind(this),
        this.updateYearSelected.bind(this),
        this.updateDiffTableLegend.bind(this));
    }
    let data = await this._api.fetchAttributesAvailable();
    this._state.attributeAvailable = data['data'];

    data = await this._api.fetchNumericsAttributeNames();
    this._state.numericalAttributes = data['data'];
  }

  onTableCellSelected(cellSelected: string) {
    this._events.highlightLayerElem.emit(cellSelected);
  }

  async updateYearSelected(newYearSelected: string) {
    if (newYearSelected !== this._state.yearSelected) {
      this._state.yearSelected = newYearSelected;
      if (this._state.activeCustomPoly !== undefined ) {
        this._events.hideLayers.emit();
        this._events.fetchCustomLayer.emit();
        this._events.updateBlockData.emit();
        this._state.layerInfoData = this._layerInfoByYear[newYearSelected];
        this._events.updateLayerColors.emit();
        this.updateSliderIntervals();
      }
    }
  }

  async updateSubCategorySelected () {
    this.updateSliderIntervals();
    this._state.isAttributeSelectedNum = this.checkIfIsNumerics();
    this._events.updateLayerColors.emit();
    if (this._plutoVisTable !== undefined) {
      const needFiltering = this._state.layerLevelSelected === LayerLevelSelected.neighborhood;
      this._plutoVisTable.updateAttrSelected(needFiltering, this._state.attributeNameSelected);
    }
  }

  checkIfIsNumerics() {
    if (this._state.attributeNameSelected) {
      const isNumericAttribute = this._state.numericalAttributes.indexOf(this._state.attributeNameSelected) >= 0;
      return isNumericAttribute;
    }
    return false;
  }

  onBlockSelectionChanged() {
    if (this._state.blockCodeSelected.length > 0) {
      this._state.layerLevelSelected = LayerLevelSelected.lot;
      this._events.updateLayerContent.emit();
      this._events.blockDataChanged.emit();
    } else {
      this._state.layerLevelSelected = LayerLevelSelected.block;
      this._events.updateLayerContent.emit();
      this._state.blockCodeSelected = undefined;
    }
  }

  onBoroughSelected() {
    console.log(this._state.boroughSelected);
  }

  isOnNoneLevel() {
    return this._state.layerLevelSelected === LayerLevelSelected.none;
  }

  onLevelSelectedChanged() {
    if (this._state.layerLevelSelected === LayerLevelSelected.neighborhood) {
      this._state.blockList = [];
    } else {
      this.updateBlockList();
    }
    this.updateLayerInfo();
  }

  async updateBlockList() {
    const data = await this._api.fetchBlocksAvailable(this._state.neighborhoodSelected);
    const blockList = data['data'];
    this._state.blockList = blockList;
  }

  async updateLayerInfo() {
    const oldNeighborhoodSelected = this._state.neighborhoodSelected;
    const data = await this._api.fetchLayerContent(undefined,
      this._state.neighborhoodSelected,
      this._state.blockCodeSelected,
      this._state.lotCodeSelected);

    const infoData = data['data'];
    this._layerInfoByYear = infoData;
    // for (const year of this._state.years) {
    //   const infoData = data['data'];
    // }
    if (oldNeighborhoodSelected !== this._state.neighborhoodSelected) {
      return;
    }
    this._state.layerInfoData = this._layerInfoByYear[this._state.yearSelected];
    this.updateSliderIntervals();
    if (this._state.attributeNameSelected !== undefined &&
      this._state.attributeNameSelected.length > 0) {
        this._events.updateLayerColors.emit();
    }
    if (this._plutoVisTable !== undefined) {
      const needFiltering = this._state.layerLevelSelected === LayerLevelSelected.neighborhood;
      this._plutoVisTable.updateData(this._layerInfoByYear,
                                      needFiltering,
                                      this._state.attributeNameSelected);
      this._state.minTable = this._plutoVisTable.min;
      this._state.maxTable = this._plutoVisTable.max;
      this._events.diffTableIntervalChanged.emit();
    }
  }

  updateDiffTableLegend() {
    this._state.minTable = this._plutoVisTable.min;
    this._state.maxTable = this._plutoVisTable.max;
    this._events.diffTableIntervalChanged.emit();
    
  }

  onMapHover (elemHoveredName: string) {
    if (this._plutoVisTable !== undefined) {
      this._plutoVisTable.updateElemHighlighted(elemHoveredName);
    }
  }

  async updateSliderIntervals() {
    // If there is no attributeName Selected, we can not calculate min and max
    if (this._state.attributeNameSelected === undefined || 
        this._state.attributeNameSelected.length === 0) {
      return;
    }

    const currentDataToProcess = this._state.layerInfoData;
    
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (const data of currentDataToProcess) {
      const summaries = data['summaries'];
      const attrSummary = summaries[this._state.attributeNameSelected];
      const sum = attrSummary['sum'];

      if (sum < min) {
        min = sum;
      }

      if (sum > max) {
        max = sum;
      }
    }

    this.sliderStep = Math.abs(min-max)/100;
    this.sliderMinValue = min;
    this.sliderMaxValue = max;
    this.minValueSelected = min;
    this.maxValueSelected = max;
  }

  onMinValueChanged() {
    if (this.minValueSelected > this.maxValueSelected) {
      this.minValueSelected = this.maxValueSelected - 1;
    }
    this.updateVisibleInformation();
  }

  onMaxValueChanged() {
    if (this.maxValueSelected < this.minValueSelected) {
      this.maxValueSelected = this.minValueSelected + 1;
    }
    this.updateVisibleInformation();
  }

  async updateVisibleInformation() {
    const data = await this._api.filterLayerContent(this._state.yearSelected,
                                                    this._state.attributeNameSelected,
                                                    this.minValueSelected,
                                                    this.maxValueSelected,
                                                    this._state.neighborhoodSelected,
                                                    this._state.blockCodeSelected);
    const filteredData = data['data'];
    this._state.filteredData = filteredData;
    this._events.doLayerFiltering.emit();
  }

}
