import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

import { Matrix } from 'src/app/charts/matrix';
import { Line } from 'src/app/charts/line';

@Component({
    selector: 'app-vis',
    templateUrl: './vis.component.html',
    styleUrls: ['./vis.component.css']
})
export class VisComponent implements OnInit {
    public colorControl = new FormControl('warn');
    public fontSizeControl = new FormControl(12);

    public tooltip = {
        show: false, top: 10,
        left: 10, info: {}
    };

    // matrix div
    @ViewChild('matrix', { static: true }) _matrixDiv: ElementRef;
    private _matrix: any;

    // line div
    @ViewChild('line', { static: true }) _lineDiv: ElementRef;
    private _line: any;

    constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) {
    }

    ngOnInit(): void {
        this.subscribeDataEvents();
        this.subscribeStateEvents();

        const matDefaults = {
            xLabel: this.state.activeGeometryParameters.year,
            sIcon: 'name'
        }
        const matCallbacks = {
            xLabel: this.yearLabelClicked.bind(this),

            yLabel: this.polyLabelClicked.bind(this),
            yHover: this.polyLabelHovered.bind(this),

            sIcon: this.sortIconClicked.bind(this),
            lIcon: this.lineIconClicked.bind(this),

            rHover: this.polyRectHovered.bind(this),
            svgOut: this.svgOut.bind(this)
        };

        this._matrix = new Matrix(this._matrixDiv.nativeElement, matCallbacks, matDefaults);

        let attr = `${this.state.activeSummaryParameters.attribute} (${this.state.activeSummaryParameters.category})`.toLowerCase();
        const lineDefaults = {
            yLabel: this.state.activeSummaryParameters.mode === 'change' ? `${attr} value` : `${attr} change`
        }
        const lineCallbacks = {
            lHover: this.lineLegendHovered.bind(this),
            svgOut: this.svgOut.bind(this)
        }
        this._line = new Line(this._lineDiv.nativeElement, lineCallbacks, lineDefaults);
    }

    // ---- Component subscriptions

    subscribeDataEvents() {
        this.events.data.updateVisMatrix.subscribe(() => {
            this.loadMatrix();
            this.loadLine();
        });
    }

    subscribeStateEvents() {
        this.events.state.pageParametersChanged.subscribe(() => {
            this.loadMatrix();
            this.loadLine();
        });

        this.events.state.sortParametersChanged.subscribe(() => {
            this.loadMatrix();
            this.loadLine();
        });

        this.events.state.lineCurvesChanged.subscribe(this.loadLine.bind(this));

        this.events.state.selectedPolygonChanged.subscribe(this.highlightPolyLabel.bind(this));
    }

    matrixSortFunction() {
        if (this.state.activeSortParameters.sortBy === 'name') {
            return (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        }

        if (!isNaN(+this.state.activeSortParameters.sortBy)) {
            return (a, b) => {
                const mode = this.state.activeSummaryParameters.mode;

                if (!a.isAlive || !a.isActive ) {
                    return -1;
                }

                if (!b.isAlive || !b.isActive ) {
                    return 1;
                }

                if (mode === 'value') {
                    if (!a.isValid) {
                        return -1;
                    }

                    if (!b.isValid) {
                        return 1;
                    }
                }

                if (mode === 'change') {
                    if (!a.changeValid) {
                        return -1;
                    }

                    if (!b.changeValid) {
                        return 1;
                    }
                }

                return a[mode] < b[mode] ? -1 : 1;
            };
        }
    }

    prepareMatrixData() {
        const data = this.data.summary;
        const mode = this.state.activeSummaryParameters.mode;

        const page = this.state.activePageParameters.currentPage;
        const size = this.state.activePageParameters.pageSize;

        const years = Object.keys(data).filter(d => !isNaN(+d));

        let sortYear = '';
        if (isNaN(+this.state.activeSortParameters.sortBy)) {
            sortYear = years[0];
        } else {
            sortYear = this.state.activeSortParameters.sortBy;
        }

        // original order
        const original = {};
        data[sortYear].forEach((d, i) => {
            original[d.name] = i;
        });

        // copies the year to be sorted
        let yearCopy = [...data[sortYear]];
        yearCopy.sort(this.matrixSortFunction().bind(this));

        // pagination
        yearCopy = yearCopy.slice(page * size, (page + 1) * size);

        // sort the other years
        const matData = [];
        for (let year of years) {
            const obj = {
                key: year,
                value: yearCopy.map(
                    d => {
                        const pos = original[d.name]
                        return data[year][pos];
                    }
                )
            }

            matData.push(obj);
        }

        // get the min and max values
        let minMax = [];
        if (mode === 'value') {
            minMax = [+data.min.toFixed(2), +data.max.toFixed(2)];
        } else {
            minMax = [+data.changeMin.toFixed(2), +data.changeMax.toFixed(2)];
        }
        matData['minMax'] = minMax;

        return matData;
    }

    loadMatrix() {
        const mode = this.state.activeSummaryParameters.mode;
        const line = this.state.activeLineChartCurves;
        const sort = this.state.activeSortParameters.sortBy;
        const click = !(this.state.activeLevel === 'neighborhood' && this.state.activeConfigParameters.navigation === 'skip blocks') &&
            !(this.state.activeLevel === 'block' && this.state.activeConfigParameters.navigation === 'complete');

        const data = this.prepareMatrixData();

        this._matrix.setData(data, mode, line, sort, click);
        this._matrix.render();
    }

    prepareLineData() {
        const data = this.data.summary;
        const years = Object.keys(data).filter(d => !isNaN(+d));
        const mode = this.state.activeSummaryParameters.mode === 'change' ? 'value' : 'change';
        const neighs = this.state.activeLineChartCurves;

        const lineData = { minMax: [], lines: [] };

        for (let name of neighs) {
            const neighData = { name, data: [] };

            for (let year of years) {
                const current = data[year].find(obj => obj.name === name);

                const value = current[mode];
                const valid = current.isAlive && current.isActive && current.isValid;

                neighData.data.push({ year, value, valid });
            }

            lineData.lines.push(neighData);
        }

        // get the min and max values
        let minMax = [];
        if (mode === 'value') {
            minMax = [+data.min.toFixed(2), +data.max.toFixed(2)];
        } else {
            minMax = [+data.changeMin.toFixed(2), +data.changeMax.toFixed(2)];
        }

        lineData['minMax'] = minMax;
        return { lineData, years };
    }

    loadLine() {
        const { lineData, years } = this.prepareLineData();
        let attr = `${this.state.activeSummaryParameters.attribute} (${this.state.activeSummaryParameters.category})`.toLowerCase();
        let yLabel = this.state.activeSummaryParameters.mode === 'change' ? `${attr} value` : `${attr} change`;

        this._line.setYLabel(yLabel);
        this._line.setData(lineData, years, yLabel);
        this._line.render();
    }

    // ---- Component menu events
    yearStepSelectChanged(event) {
        const yearStep = { yearStep: event.value }
        this.events.vis.yearStepSelectChanged.emit(yearStep);
    }

    attributeSelectChanged(event) {
        const attribute = {
            attribute: event.value,
            category: this.data.meta.attributes[event.value].categories[0],
            metric: this.data.meta.attributes[event.value].metrics[0],
        };
        this.events.vis.attributeSelectChanged.emit(attribute);
    }

    categorySelectChanged(event) {
        const metric = { category: event.value };
        this.events.vis.categorySelectChanged.emit(metric);
    }

    getCategories() {
        if (this.data.meta.attributes[this.state.activeSummaryParameters.attribute]) {
            return this.data.meta.attributes[this.state.activeSummaryParameters.attribute].categories;
        }
        return [];
    }

    metricSelectChanged(event) {
        const metric = { metric: event.value };
        this.events.vis.metricSelectChanged.emit(metric);
    }

    getMetrics() {
        if (this.data.meta.attributes[this.state.activeSummaryParameters.attribute]) {
            return this.data.meta.attributes[this.state.activeSummaryParameters.attribute].metrics;
        }
        return [];
    }

    modeSelectChanged(event) {
        const mode = { mode: event.value };
        this.events.vis.modeSelectChanged.emit(mode);
    }

    sortSelectChanged(event) {
        const sort = { sortBy: event.value };
        this.events.vis.sortBySelectChanged.emit(sort);
    }
    // ---- Component matrix events

    yearLabelClicked(value) {
        const year = { year: value };
        this.events.vis.yearLabelClicked.emit(year);
    }

    polyLabelHovered(value) {
        const poly = { name: value, origin: 'vis' };
        this.events.vis.polygonLabelHovered.emit(poly);
    }

    polyLabelClicked(value) {
        // cleans the line chart
        this.events.vis.lineIconClicked.emit([]);

        if (this.state.activeLevel === 'borough') {
            const neighborhood = { neighborhood: value };
            this.events.vis.polygonLabelClicked.emit(neighborhood);
        }
        else if (this.state.activeLevel === 'neighborhood') {
            const block = { block: value };
            this.events.vis.polygonLabelClicked.emit(block);
        }
        else if (this.state.activeLevel === 'block') {
            const lot = { lot: value };
            this.events.vis.polygonLabelClicked.emit(lot);
        }
    }

    highlightPolyLabel(origin: string) {
        if (origin === 'map') {
            this._matrix.setHighlight(this.state.selectedPolygon);
            this._matrix.render();
        }
    }

    navButtonClicked(level) {
        // cleans the line chart
        this.events.vis.lineIconClicked.emit([]);

        const levels = this.data.meta.levels;

        let updates = {};
        if (level === 'borough') {
            updates = levels
                .filter(str => str !== 'borough')
                .reduce((prev, key) => ({ ...prev, [key]: undefined }), {})
        }
        else if (level === 'neighborhood') {
            updates = levels
                .filter(str => str !== 'borough' && str !== 'neighborhood')
                .reduce((prev, key) => ({ ...prev, [key]: undefined }), {})
        }
        else if (level === 'block') {
            updates = levels
                .filter(str => str !== 'borough' && str !== 'neighborhood' && str !== 'block')
                .reduce((prev, key) => ({ ...prev, [key]: undefined }), {})
        }

        // emits the event
        this.events.vis.navButtonClicked.emit(updates);
    }

    activeFilters() {
        this.state.filterActive = !this.state.filterActive;
    }

    getFilterIconColor() {
        return this.state.filterActive ? 'warn' : (Object.keys(this.state.activeFilterParameters).length === 0 ? 'primary' : 'accent');
    }

    navPageChanged(direction: string) {
        let current = this.state.activePageParameters.currentPage;
        let total = this.state.activePageParameters.totalPages - 1;

        if (direction === 'left' && current > 0) {
            current -= 1;
        }
        else if (direction === 'right' && current < total) {
            current += 1;
        }
        else if (direction === 'first') {
            current = 0;
        }
        else if (direction === 'last') {
            current = total;
        }
        else if (!isNaN(+direction)){

            let val = +direction - 1;
            
            if (val < 0) { val = 0; }
            if (val > total) { val = total; }

            current = val;
        }

        const page = { currentPage: current }
        this.events.vis.navPageChanged.emit(page)
    }

    sortIconClicked(value) {
        const sort = { sortBy: value };
        this.events.vis.sortIconClicked.emit(sort);
    }

    lineIconClicked(value) {
        const state = value;
        this.events.vis.lineIconClicked.emit(state);
    }

    lineLegendHovered(value) {
        this.tooltip = {
            show: true,
            left: value.mouse[0],
            top: value.mouse[1],
            info: { line: value.line }
        }
    }

    polyRectHovered(value) {
        const mode = this.state.activeSummaryParameters.mode;

        this.tooltip = {
            show: true,
            left: value.mouse[0],
            top: value.mouse[1],
            info: { year: value.year, mode, data: value.data }
        };
    }

    svgOut() {
        this.tooltip.show = false;
        this.tooltip.info = {};
    }
}