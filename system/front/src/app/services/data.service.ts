import percentile from 'stats-percentile';
import * as d3 from 'd3';

import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { EventsService } from './events.service';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public geometry = null;
    public summary = null;
    public filters = {};
    public layers = {};

    public meta = {
        modes: [],
        years: [],
        attributes: {},
        boroughs: [],
        polygons: [],
        levels: [],
        navigation: [],
        sortBy: [],
        yearStep: [],
    };

    constructor(public api: ApiService, public events: EventsService, public state: StateService) {
        this.subscribeRootEvents();
        this.subscribeMapEvents();
        this.subscribeStateEvents();
        this.subscribeFilterEvents();
    }

    // --- Root app events subscriptions

    subscribeRootEvents() {
        this.events.root.initialized.subscribe(this.initializeMeta.bind(this));
    }

    async initializeMeta() {
        this.meta.modes = this.api.loadModes();
        this.meta.years = await this.api.loadYears();
        this.meta.attributes = await this.api.loadAttributes();
        this.meta.boroughs = await this.api.loadBoroughs();
        this.meta.polygons = await this.api.loadPolygons();
        this.meta.navigation = await this.api.loadNavigation();
        this.meta.levels = this.api.loadLevels();
        this.meta.sortBy = this.api.loadSortBy();
        this.meta.yearStep = this.api.loadYearStep();
    }

    // --- Map events subscriptions

    subscribeMapEvents() {
        this.events.map.initialized.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
    }

    // --- State events subscriptions

    subscribeStateEvents() {
        this.events.state.configBoroughChanged.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
        this.events.state.configBoroughChanged.subscribe(this.loadAllFilters.bind(this));

        this.events.state.configPolygonChanged.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
        this.events.state.configPolygonChanged.subscribe(this.loadAllFilters.bind(this));

        this.events.state.configNavigationChanged.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
        this.events.state.configNavigationChanged.subscribe(this.loadAllFilters.bind(this));

        this.events.state.configModeChanged.subscribe(this.loadFunction.bind(this));
        this.events.state.configCMapChanged.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));

        this.events.state.filterParametersChanged.subscribe(this.loadFilter.bind(this));

        this.events.state.geometryParametersChanged.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
        this.events.state.summaryParametersChanged.subscribe(this.loadSummaryThenFunction.bind(this));
    }

    async loadSummaryThenGeometryAndFunction(isYear: boolean) {
        await this.applyFilter();
        await this.loadSummary();
        await this.loadGeometry();
        // POPs layer
        await this.loadPopsGeometry();

        // elements per year
        const length = this.summary[this.state.activeGeometryParameters.year].length;

        // emits the event
        if (!isYear) {
            this.events.data.initializePagination.emit(length);
            this.events.data.updateVisMatrix.emit();
        }
        this.events.data.updateMapGeometryAndFunction.emit();
    }

    async loadSummaryThenFunction() {
        await this.applyFilter();
        await this.loadSummary();

        // elements per year
        const length = this.summary[this.state.activeGeometryParameters.year].length;

        // emits the event
        this.events.data.initializePagination.emit(length);
        this.events.data.updateVisMatrix.emit();
        this.events.data.updateMapFunction.emit();
    }

    async loadFunction() {
        this.events.data.updateMapFunction.emit();
    }

    async loadPopsGeometry() {
        // get borough
        const borough = this.state.activeConfigParameters.borough;

        // gets the geometry
        this.layers['pops'] = await this.api.loadPopsGeometry(borough);
    }

    async loadGeometry() {
        // get borough
        const borough = this.state.activeConfigParameters;
        // get parents list
        const parents = this.state.activeGeometryParameters;
        // get current parameters
        const parameters = this.state.activeSummaryParameters;

        // current state
        let state = {};
        Object.assign(state, borough);
        Object.assign(state, parents);
        Object.assign(state, parameters);

        // current level
        const level = this.state.activeLevel;

        // gets the geometry
        this.geometry = await this.api.loadGeometry(level, state);
        this.geometry.features.sort((a, b) => a.properties.name < b.properties.name ? 1 : -1);
    }

    async loadSummary() {
        // get borough
        const borough = this.state.activeConfigParameters;
        // get parents list
        const parents = this.state.activeGeometryParameters;
        // get current parameters
        const parameters = this.state.activeSummaryParameters;

        // current state
        let state = {};
        Object.assign(state, borough);
        Object.assign(state, parents);
        Object.assign(state, parameters);
        // current level
        const level = this.state.activeLevel;

        // gets the summary
        this.summary = await this.api.loadSummary(level, state);

        // year steps
        const step = +this.state.activeSummaryParameters.yearStep;
        this.filterYears(step);

        // adds the difference field
        this.computeDifferences();

        console.log(this.summary);
    }


    filterYears(step: number) {
        if (!step) { return; }
        
        const years = Object.keys(this.summary).filter(d => d !== 'min' && d !== 'max').filter(d => d.split('.')[1] === '1');
        years.push('2008.1');
        years.sort();

        const subYears = [];
        for (let yId = years.length - 1; yId >= 0; yId -= step) {
            subYears.push(years[yId]);
        }
        subYears.reverse();

        const stepSummary = {};
        for (let yId = 0; yId < subYears.length; yId++) {
            if (subYears[yId] === '2008.1') {
                stepSummary[subYears[yId]] = this.summary['2007.1'];
            }
            else {
                stepSummary[subYears[yId]] = this.summary[subYears[yId]];
            }
        }
        stepSummary['min'] = this.summary['min'];
        stepSummary['max'] = this.summary['max']; 

        this.summary = stepSummary;
    }

    computeDifferences() {
        this.summary.changeMin = Infinity;
        this.summary.changeMax = -Infinity;

        const vals = [];
        const cngs = []; 

        // Is Alive : the lot existis in the selected year
        // Is Valid : the selected attribute is a valid value in the lot
        // Is Active: the lot fits the filter condition 

        const years = Object.keys(this.summary).filter(key => !isNaN(+key));

        for (let yId = 0; yId < years.length; yId++) {
            const year = years[yId];

            for (let nId = 0; nId < this.summary[year].length; nId++) {
                if (yId === 0) {
                    this.summary[year][nId].change = 0;
                    this.summary[year][nId].changeValid = false;
                }
                else {
                    const prev = years[yId - 1];

                    // all data is ok
                    if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[year][nId].isValid && this.summary[prev][nId].isValid) {
                        this.summary[year][nId].change = this.summary[year][nId].value - this.summary[prev][nId].value;
                        this.summary[year][nId].changeValid = true;
                    }
                    // current not alive, previous alive and valid
                    else if (!this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[prev][nId].isValid) {
                        this.summary[year][nId].change = -this.summary[prev][nId].value;
                        this.summary[year][nId].changeValid = true;
                    }
                    // current alive and valid, previous not alive
                    else if (this.summary[year][nId].isAlive && !this.summary[prev][nId].isAlive && this.summary[year][nId].isValid) {
                        this.summary[year][nId].change = this.summary[year][nId].value;
                        this.summary[year][nId].changeValid = true;
                    }
                    // current alive and not valid, previous alive and valid
                    else if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && !this.summary[year][nId].isValid && this.summary[prev][nId].isValid) {
                        this.summary[year][nId].change = -this.summary[prev][nId].value;
                        this.summary[year][nId].changeValid = true;
                    }
                    // current alive and valid, previous alive and not valid
                    else if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[year][nId].isValid && !this.summary[prev][nId].isValid) {
                        this.summary[year][nId].change = this.summary[year][nId].value;
                        this.summary[year][nId].changeValid = true;
                    }
                    else {
                        this.summary[year][nId].change = 0;
                        this.summary[year][nId].changeValid = false;
                    }
                }

                vals.push(this.summary[year][nId].value);
                cngs.push(this.summary[year][nId].change);
            }
        }

        if (this.state.activeConfigParameters.cmapPercentiles) {
            this.summary.min  = percentile(vals,  2);
            this.summary.max  = percentile(vals, 98);
            this.summary.changeMin = percentile(cngs, 2);
            this.summary.changeMax = percentile(cngs,98);    
        }
        else {
            this.summary.min  = d3.min(vals);
            this.summary.max  = d3.max(vals);
            this.summary.changeMin = d3.min(cngs);
            this.summary.changeMax = d3.max(cngs);
        }
    }

    async subscribeFilterEvents() {
        this.events.filters.updateSummary.subscribe(this.loadSummaryThenFunction.bind(this));
    }

    async applyFilter() {
        const borough   = this.state.activeConfigParameters.borough;
        const polygon   = this.state.activeConfigParameters.polygon;
        const filterExp = this.state.activeConfigParameters.filterExp;
        const filters = Object.keys(this.state.activeFilterParameters).map(key => {
            const obj = this.state.activeFilterParameters[key];

            if (!obj.range || obj.range.length === 0) {
                return null;
            }

            let min = +obj.range[0].split('-')[0];
            min = isNaN(min) ? obj.range[0] : min;

            let max = +obj.range[obj.range.length - 1].split('-')[1];
            max = isNaN(max) ? obj.range[obj.range.length - 1] : max;

            return {
                key: key,
                attribute: obj.attribute,
                category: obj.category,
                min,
                max
            }
        })

        await this.api.applyFilter(borough, polygon, filters.filter(obj => obj !== null), filterExp);
    }

    async loadFilter(key: string) {
        const isAlive = Object.keys(this.state.activeFilterParameters).includes(`${key}`);

        if (!isAlive) {
            delete this.filters[key];
        }
        else {
            const borough = this.state.activeConfigParameters.borough;
            const polygon = this.state.activeConfigParameters.borough;
            const params = this.state.activeFilterParameters[key];

            const filter = await this.api.loadFilter(borough, polygon, params.attribute, params.category);
            this.filters[key] = filter;
        }

        this.events.data.updateFilters.emit();
    }

    async loadAllFilters() {
        const keys = Object.keys(this.state.activeFilterParameters);

        for (let key of keys) {
            const borough = this.state.activeConfigParameters.borough;
            const polygon = this.state.activeConfigParameters.borough;
            const params = this.state.activeFilterParameters[key];

            const filter = await this.api.loadFilter(borough, polygon, params.attribute, params.category)
            this.filters[key] = filter;
        }

        this.events.data.updateFilters.emit();
    }
}
