import * as d3 from 'd3';
import { PlutoVisTableModel } from './plutovistable.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class PlutoVisTable {

    private _divContainer: HTMLElement;
    private _tooltipDiv: any;
    private _svgCanvas: any = null;
    private _svgGroup: any = null;
    private _margin = {top: 40, right: 10, bottom: 10, left: 10};

    private _width: number;
    private _height: number;

    private _xScale: any;
    private _yScale: any;
    private _cScale: any;

    private _xAxisElement: any;
    private _yAxisElement: any;

    private _yearsAvailable: string[];
    private _selection: any;
    private _highlightElem: string;

    private _data: any;
    private _dataLabels: any;
    private _needFiltering: boolean;
    private _attrSelected: string;
    private _boroughSelected: string;
    private _min: number;
    private _max: number;

    private _datasetList: PlutoVisTableModel[];

    private _tableSelectionCallback: any;
    private _yearSelectionCallback: any;
    private _updatediffTableLegendCallback: any;

    constructor (_htmlContainer: HTMLElement,
                    _yearAvailable: string[],
                    data: any,
                    tableSelectionCallBack: any,
                    yearSelectionCallback: any,
                    updateDiffTableLegendCallback: any) {
        this._tableSelectionCallback = tableSelectionCallBack;
        this._yearSelectionCallback = yearSelectionCallback;
        this._updatediffTableLegendCallback = updateDiffTableLegendCallback;
        this._boroughSelected = 'MN';
        this._min = undefined;
        this._max = undefined;
        this._divContainer = _htmlContainer;
        this._yearsAvailable = _yearAvailable;
        this._selection = this._yearsAvailable[0];
        this._yearSelectionCallback(this._selection);
        this._data = data;
        this._needFiltering = true;
        this._datasetList = [];
        this.dataPreprocessing();
        this.initCanvas();
        this.initAxes();
        this.render();
    }

    get min() {
        return this._min;
    }

    get max() {
        return this._max;
    }

    dataPreprocessing() {
        const namesYear = new Set<string>();
        const years = this._yearsAvailable.slice(0, this._yearsAvailable.length - 1);
        if (Object.keys(this._data).length <= 0) {
            this._dataLabels = Array.from(namesYear.values());
            return;
        }
        this._min = undefined;
        this._max = undefined;
        this._datasetList = [];

        for (const year of years) {
            const elemMap = {};
            const currDataByYear = this._data[year];

            const nextYearIndex = years.indexOf(year) + 1;
            const nextYear = this._yearsAvailable[nextYearIndex];
            const nextDataByYear = this._data[nextYear];


            // create Map Value with current Data
            for (const elem of currDataByYear) {
                // skip neighborhood that is not inside selected borough
                // if (this._needFiltering && elem.code.slice(0, 2) !== this._boroughSelected) {
                //     continue;
                // }

                let elemCode = elem.code;
                const elementKey = elem.name + ' - ' + elemCode;
                // is segmented
                const sepIndex = elemCode.indexOf('->');
                if (sepIndex >= 0) {
                    elemCode = elemCode.slice(0, sepIndex);
                }
                const attrSummary = elem.summaries[this._attrSelected];

                let val = 0;
                if (attrSummary !== undefined &&
                    Object.keys(attrSummary).length > 0) {
                        val = attrSummary.sum;
                        if (attrSummary.attrFound ||
                            val > 0) {
                                let dataInfo = elemMap[elemCode];
                                // Aggregation of elems that are segmented and has the same realCode
                                if (dataInfo === undefined) {
                                    dataInfo = new PlutoVisTableModel(year,
                                        elem.name,
                                        elemCode,
                                        elementKey,
                                        val,
                                        attrSummary.attrFound);
                                    elemMap[elemCode] = dataInfo;
                                    dataInfo.valueBefore = dataInfo.value;
                                } else {
                                    dataInfo.value = dataInfo.value + val;
                                    dataInfo.valueBefore = dataInfo.value;
                                }
                        }
                }
            }

            for (const elem of nextDataByYear) {
                // skip neighborhood that is not inside selected borough
                // if (this._needFiltering && elem.code.slice(0, 2) !== this._boroughSelected) {
                //     continue;
                // }

                let elemCode = elem.code;
                const elementKey = elem.name + ' - ' + elemCode;
                // is segmented
                const sepIndex = elemCode.indexOf('->');
                if (sepIndex >= 0) {
                    elemCode = elemCode.slice(0, sepIndex);
                }
                const attrSummary = elem.summaries[this._attrSelected];
                let val = 0;
                if (attrSummary !== undefined && Object.keys(attrSummary).length > 0) {
                    val = attrSummary.sum;
                    const dataInfo = elemMap[elemCode];
                    // Aggregation of elems that are segmented and has the same realCode
                    if (dataInfo !== undefined &&
                        dataInfo.prevFound) {
                        dataInfo.value = dataInfo.value - val;
                        dataInfo.valueAfter = dataInfo.valueAfter + val;
                    }
                }
            }
            const elemsCode = Object.keys(elemMap);
            for (const elemCode of elemsCode) {
                const elemTabelModel = elemMap[elemCode];
                namesYear.add(elemCode);
                this.fillDatasetStructure(elemTabelModel);
            }
        }

        const tempNameStructure = this.getSortableLabels();

        this.resetYAxissLabel (tempNameStructure, namesYear);
        const value = Math.max(Math.abs(this._min), Math.abs(this._max));
        this._min = -value;
        this._max = value;
        this._updatediffTableLegendCallback();
    }

    resetYAxissLabel (tempNameStructure: any, namesYear: any) {
        if (tempNameStructure.length > 0) {
            this._dataLabels = Array.from(tempNameStructure.map((elem) => {
                return elem[0];
            }));
        } else {
            if (namesYear !== undefined) {
                this._dataLabels = Array.from(namesYear.values());
            }
        }
    }

    getSortableLabels (): Array<any> {
        const tempNameStructure: Array<any> = [];
        for (const elemTabelModel of this._datasetList) {
            if (elemTabelModel.year === this._selection) {
                tempNameStructure.push([elemTabelModel.code, elemTabelModel.value]);
            }
        }

        tempNameStructure.sort( (a, b) => {
            if (a[1] === b[1]) {
                return 0;
            } else {
                if (a[1] < b[1]) {
                    return -1;
                } else {
                    return 1;
                }
            }
        });
        return tempNameStructure;
    }

    fillDatasetStructure(dataObject: PlutoVisTableModel) {
        if (this._yearsAvailable.indexOf(dataObject.year) === this._yearsAvailable.length - 1) {
            return;
        }
        const val = dataObject.value;

        if (this._min === undefined || this._max === undefined) {
            this._min = val;
            this._max = val;
        } else {
            if (val < this._min) {
                this._min = val;
            }
            if (val > this._max) {
                this._max = val;
            }
        }
        this._datasetList.push(dataObject);
    }

    initCanvas() {
        this._tooltipDiv = d3.select(this._divContainer)
                            .append('div')
                            .attr('class', 'tooltip')
                            .style('opacity', 0);
        // create the canvas element
        this._svgCanvas = d3.select(this._divContainer).append('svg');

        // creates the base chart group
        this._svgGroup = this._svgCanvas.append('g')
        .attr('class', 'svgGroup')
        .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

        // Initial size
        this._width = this._divContainer.clientWidth - this._margin.left - this._margin.right;
        this._height = this._divContainer.clientHeight - this._margin.top - this._margin.bottom;
    }

    initAxes() {
        // Build X scales and axis:
        this._xScale = d3.scalePoint()
        .range([ 0, this._width ]);

        this._xAxisElement = this._svgGroup
            .append('g')
            .attr('id', 'timeline-xAxis');
            // .attr('transform', `translate(${this._margin.left}, ${this._margin.top} )`);

        this._yScale = d3.scaleBand()
            .range([ this._height, 0 ])
            .padding(0.01);

        this._yAxisElement = this._svgCanvas.append('g')
            .attr('id', 'hide-label')
            .attr('transform', `translate(${this._margin.left + this._width}, ${this._margin.top} )`);

        this._cScale = d3.scaleSequential(d3.interpolateRdBu); // d3.scaleSequential(d3.interpolateBlues);

    }

    render() {
        if (!(this._divContainer &&
            this._svgCanvas &&
            this._datasetList.length > 0
            ) ) {
                return;
        }
        this.resizeSvg ();
        this.updateAxes ();
        this.updateTable ();
        const backupYear = this._yearsAvailable;
        this._yearsAvailable = [];
        this.updateSelector ();
        this._yearsAvailable = backupYear;
        this.updateSelector ();
    }

    resizeSvg() {
        if (!this._svgCanvas) {
        return;
        }

        // compute the canvas size
        const oldWidth = this._width;
        const oldHeight = this._height;

        if ( (  oldWidth + this._margin.left + this._margin.right) === this._divContainer.clientWidth &&
            ( oldHeight + this._margin.top + this._margin.bottom) === this._divContainer.clientHeight  ) {
        this._width = this._divContainer.clientWidth - this._margin.left - this._margin.right;
        this._height = this._divContainer.clientHeight - this._margin.top - this._margin.bottom;
        }

        // creates the svg canvas
        this._svgCanvas
        .attr('width', this._width + this._margin.left + this._margin.right)
        .attr('height', this._height + this._margin.top + this._margin.bottom);
    }

    updateAxes() {
        this._xScale.domain(this._yearsAvailable);
        this._yScale.domain(this._dataLabels);

        const value = Math.max(Math.abs(this._min), Math.abs(this._max));
        this._cScale.domain([-value, value]);

        this._xAxisElement.call( d3.axisTop(this._xScale) );
        this._yAxisElement.call( d3.axisRight(this._yScale) );

        this._svgGroup.selectAll('text')
            .style('text-anchor', 'start')
            .attr('dy', '-.4em')
            .attr('transform', 'rotate(-45)');

    }

    updateSelector() {
        const years = this._svgGroup
        .selectAll('.timeline-year')
        .data(this._yearsAvailable);

        years.exit().remove();

        years.enter()
            .append('circle')
            .merge(years)
            .attr('class', (d: any) => {
                return d === this._selection ? 'timeline-year timeline-year-selected' : 'timeline-year';
            })
            .attr('r', (d) => {
                return d === this._selection ? 10 : 6;
            })
            .attr('cy',  0)
            .attr('cx', (d) => this._xScale(d))
            .on('mouseover', function () {
                d3.select(this)
                .attr('r', 10)
                .attr('class', 'timeline-year timeline-year-selected')
                .style('cursor', 'pointer');
            })
            .on('mouseout', (() => {
                const sel = this._selection;
                return function () {
                d3.select(this)
                    .filter((d) => d !== sel)
                    .attr('r', 6)
                    .attr('class', 'timeline-year')
                    .style('cursor', 'default');
                };
            })())
            .on('click', (() => {
                const self = this;
                return function () {
                const selection = <string>(d3.select(this).datum());
                self.updateSelection(selection);
                };
            })());
    }

    updateTable() {
        const heatmap = this._svgGroup
                        .selectAll('rect')
                        .data(this._datasetList);

        heatmap.exit().remove();

        heatmap.enter()
                .append('rect')
                .merge(heatmap)
                .attr('x', (d) => {
                    return this._xScale(d.year);
                } )
                .attr('y', (d) => {
                    return this._yScale(d.code);
                })
                .attr('width', this.getCellWidth() )
                .attr('height', this.getCellHeight() )
                .attr('class', (d) => {
                    if (this._highlightElem !== undefined && this._highlightElem.indexOf(d.code) >= 0) {
                        return 'cellhighlighted';
                    } else {
                        return '';
                    }
                })
                .style('fill', (d) => {
                    return this._cScale(d.value);
                })
                .on('mouseover', (d) => {
                    if (d !== undefined) {
                        this._tooltipDiv.transition()
                            .duration(200)
                            .style('opacity', .9);
                        this._tooltipDiv.html('Name: ' + d.code + '<br/>' + 'Code: ' + d.name + '<br/>' + 'Value: ' + d.value + `<br/>${d.year}: ` + d.valueBefore + `<br/>${this._yearsAvailable[this._yearsAvailable.indexOf(d.year) + 1]}: ` + d.valueAfter)
                            .style('left', (d3.event.pageX) + 'px')
                            .style('top', (d3.event.pageY - 28) + 'px');
                    }
                    this._highlightElem = d.code;
                    this.onCellHover(d);
                })
                .on('mouseout', (d) => {
                    this._tooltipDiv
                        .style('opacity', 0);
                    this.onCellHover(undefined);
                });
    }

    updateSelection(selection: string) {
        this._selection = selection;
        this._yearSelectionCallback(selection);
        const tempNameStructure = this.getSortableLabels();
        this.resetYAxissLabel (tempNameStructure, undefined);
        this.render();
    }

    updateBoroughSelection (boroughSelected: string) {
        switch (boroughSelected) {
            case 'MANHATTAN':
                this._boroughSelected = 'MN';
                break;
            case 'BROOKLYN':
                this._boroughSelected = 'BK';
                break;
            case 'BRONX':
                this._boroughSelected = 'BX';
                break;
            case 'QUEENS':
                this._boroughSelected = 'QN';
                break;
            case 'STATEN ISLAND':
                this._boroughSelected = 'SI';
                break;
        }
        this.dataPreprocessing();
        this.render();
    }

    updateData(data: any, needFiltering: boolean, attrNameSelected: string) {
        this._data = data;
        this._attrSelected = attrNameSelected;
        this._needFiltering = needFiltering;
        this.dataPreprocessing();
        this._updatediffTableLegendCallback();
        this.render();
    }

    updateAttrSelected(needToBeFiltered: boolean, attrNameSelected: string) {
        this._needFiltering = needToBeFiltered;
        this._attrSelected = attrNameSelected;
        this.dataPreprocessing();
        this.render();
    }

    getCellWidth () {
        if (this._dataLabels.length === 0) {
            return 0;
        }
        const width = this._width / this._yearsAvailable.length;
        return width * 0.9;
    }

    getCellHeight() {
        if (this._dataLabels.length === 0) {
            return 0;
        }
        const height = (this._height / this._dataLabels.length);
        return height * 0.9;
    }

    onCellHover(cellSelected: PlutoVisTableModel) {
        if (cellSelected !== undefined) {
            const codeSelected = cellSelected.code;
            // dealing with neighborhood
            this._tableSelectionCallback(codeSelected);
        } else {
            this._tableSelectionCallback('');
        }
        this.render();
    }

    updateElemHighlighted (elemOnMapHover: string) {
        const lastHighlighted = this._highlightElem;
        if (lastHighlighted !== elemOnMapHover) {
            this._highlightElem = elemOnMapHover;
            this.render();
        }
    }
}
