(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vis/vis.component */ "./src/app/components/vis/vis.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/legend/legend.component */ "./src/app/components/legend/legend.component.ts");








class AppComponent {
    constructor(events) {
        this.events = events;
        this.title = 'Pluto Vis';
    }
    ngOnInit() {
        this.events.root.initialized.emit();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-legend");
    } }, directives: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_3__["VisComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_6__["LegendComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vis/vis.component */ "./src/app/components/vis/vis.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/legend/legend.component */ "./src/app/components/legend/legend.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/config/config.component */ "./src/app/components/config/config.component.ts");
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layers/layers.component */ "./src/app/components/layers/layers.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__["VisComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
        _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
        _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
        _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__["LayersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                    _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__["VisComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                    _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"],
                    _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
                    _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
                    _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
                    _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__["LayersComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/charts/bar.ts":
/*!*******************************!*\
  !*** ./src/app/charts/bar.ts ***!
  \*******************************/
/*! exports provided: Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

class Bar {
    constructor(chartDiv, callbacks, key) {
        // chart data
        this._data = null;
        // Chart div
        this._chartDiv = null;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 10, right: 15, bottom: 75, left: 70 };
        // scales and axis
        this._xScale = null;
        this._yScale = null;
        // ----
        this._xAxis = null;
        this._yAxis = null;
        // brush object
        this._brush = d3__WEBPACK_IMPORTED_MODULE_0__["brushX"]();
        this._brushedBins = [];
        // callbacks
        this._callbacks = null;
        this._key = null;
        // label
        this.labelFormat = (label) => {
            let parts = label.split('-');
            if (isNaN(+parts[0])) {
                return label.split(',').join('-');
            }
            parts = parts.map(el => d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.2s')(el));
            return parts.join('-');
        };
        this._chartDiv = chartDiv;
        this._callbacks = callbacks;
        this._key = key;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
        this.initBrush();
    }
    setData(data, brush) {
        this._data = data;
        this._brushedBins = brush;
    }
    render() {
        this.updateScales();
        this.updateAxes();
        this.updateBars();
        this.initBrush();
    }
    resize() {
        this._svgCanvas.remove();
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.render();
    }
    initSvgAndGroups() {
        // dimensions using margins convention
        this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
        this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
        // creates the new canvas element
        this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv)
            .append('svg')
            .attr('width', this._chartDiv.clientWidth)
            .attr('height', this._chartDiv.clientHeight);
        // creates the group
        this._svgGroup = this._svgCanvas
            .append('g')
            .attr('class', 'svgGroup')
            .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
        // axis groups
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + (this._height) + ')');
        this._svgGroup
            .append('g')
            .attr('class', 'brush');
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--y');
        // text label for the x axis
        this._svgGroup
            .append("text")
            .attr('class', 'xaxis-label')
            .attr("transform", `translate(${this._width / 2}, ${this._height + this._margin.top + 45})`)
            .style("text-anchor", "middle")
            .text("attribute bins");
        // text label for the y axis
        this._svgGroup
            .append("text")
            .attr('class', 'yaxis-label')
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - this._margin.left + 10)
            .attr("x", 0 - this._height / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(`frequency`);
    }
    initScalesAndAxes() {
        this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.1);
        this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale).tickFormat(this.labelFormat);
        this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([this._height, 0]);
        this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale).ticks(10, "~s");
    }
    initWindowEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    updateScales() {
        const bins = this._data.map(obj => `${obj.bin}`);
        const extent = d3__WEBPACK_IMPORTED_MODULE_0__["extent"](this._data.map(obj => obj.count));
        // sets the domains
        this._xScale.domain(bins);
        this._yScale.domain(extent);
    }
    updateAxes() {
        const bins = this._data.map(obj => `${obj.bin}`);
        this._xAxis.scale(this._xScale);
        this._svgGroup.select('.axis--x').call(this._xAxis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('font-size', () => {
            if (bins.length > 20) {
                return '8px';
            }
            return '10px';
        })
            .attr('dx', '-.8em')
            .attr('dy', () => bins.length > 20 ? '-.8em' : '.15em')
            .attr('transform', () => {
            if (bins.length > 20) {
                return 'rotate(-90)';
            }
            return 'rotate(-25)';
        });
        this._yAxis.scale(this._yScale);
        this._svgGroup.select('.axis--y').call(this._yAxis);
    }
    updateBars() {
        const barsGroup = this._svgGroup
            .selectAll(".line-group")
            .data([this._data])
            .join("g");
        barsGroup
            .attr('class', 'line-group');
        const rects = barsGroup
            .selectAll("rect")
            .data(d => d)
            .join("rect");
        rects
            .attr('class', 'bar')
            .attr("x", d => this._xScale(`${d.bin}`))
            .attr("y", d => this._yScale(d.count))
            .attr("width", this._xScale.bandwidth())
            .attr("height", d => this._height - this._yScale(d.count))
            .attr("fill", "#673ab7");
    }
    initBrush() {
        this._brush
            .on("start brush end", this.barChartOnBrush.bind(this))
            .extent([[0, 0], [this._width, this._height]]);
        this._svgGroup.select('.brush').call(this._brush);
        if (this._brushedBins.length) {
            const first = this._brushedBins[0];
            const final = this._brushedBins[this._brushedBins.length - 1];
            const range = [this._xScale(first) - this._xScale.paddingInner(), this._xScale(final) + this._xScale.bandwidth()];
            this._svgGroup.select(".brush").call(this._brush.move, range);
        }
    }
    barChartOnBrush() {
        const selection = d3__WEBPACK_IMPORTED_MODULE_0__["event"].selection;
        const rects = this._svgGroup
            .selectAll(".line-group")
            .selectAll(".bar");
        if (selection) {
            const range = this._xScale.domain().map(this._xScale);
            const i0 = d3__WEBPACK_IMPORTED_MODULE_0__["bisectRight"](range, selection[0]);
            const i1 = d3__WEBPACK_IMPORTED_MODULE_0__["bisectRight"](range, selection[1]);
            this._brushedBins = this._xScale.domain().slice(i0, i1);
        }
        else {
            this._brushedBins = [];
        }
        rects.attr("fill", d => this._brushedBins.includes(d.bin) ? "#f44336" : "#673ab7");
        const event = { value: this._brushedBins };
        this._callbacks.brush(this._key, event);
    }
}


/***/ }),

/***/ "./src/app/charts/cmap.ts":
/*!********************************!*\
  !*** ./src/app/charts/cmap.ts ***!
  \********************************/
/*! exports provided: Cmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmap", function() { return Cmap; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

class Cmap {
    constructor(chartDiv) {
        // chart data
        this._data = {};
        // Chart div
        this._chartDiv = null;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 0, right: 20, bottom: 30, left: 16 };
        // scales and axis
        this._xScale = null;
        this._cScale = null;
        this._xAxis = null;
        // number of colors
        this.N_COLORS = 40;
        // Is Alive : the lot existis in the selected year
        // Is Active: the lot fits the filter condition 
        // Is Valid : the selected attribute is a valid value in the lot
        this.ALIVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#8f8f8f');
        this.ACTVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#afafaf');
        this.VALID_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#cfcfcf');
        this.ALIVE_LABEL = 'A';
        this.ACTVE_LABEL = 'F';
        this.VALID_LABEL = 'V';
        // format
        this.tickFormat = (val) => {
            if (isNaN(val)) {
                return val;
            }
            else {
                return d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.2s')(val);
            }
        };
        this._chartDiv = chartDiv;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
    }
    initWindowEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    setData(minMax) {
        let zero = 0;
        if (minMax[0] < 0 && minMax[1] > 0) {
            zero = 0;
        }
        else if (minMax[0] >= 0 && minMax[1] > 0) {
            zero = minMax[0];
        }
        else if (minMax[0] < 0 && minMax[1] <= 0) {
            zero = minMax[1];
        }
        if (minMax[0] !== minMax[1]) {
            let frac = Math.ceil(this.N_COLORS * (zero - minMax[0]) / (minMax[1] - minMax[0]));
            if (frac < 5) {
                frac = 5;
            }
            if (frac > this.N_COLORS - 5) {
                frac = this.N_COLORS - 5;
            }
            this._data.values = [];
            for (let id = 0; id < frac; id++) {
                const val = minMax[0] + id * (zero - minMax[0]) / (frac - 1);
                this._data.values.push(val.toFixed(3));
            }
            for (let id = 0; id < this.N_COLORS - frac; id++) {
                const val = zero + id * (minMax[1] - zero) / (this.N_COLORS - frac - 1);
                this._data.values.push(val.toFixed(3));
            }
            this._data.minMax = minMax.map(el => el.toFixed(3));
            this._data.zero = zero.toFixed(3);
        }
        else {
            this._data.minMax = minMax;
            this._data.zero = minMax[0];
            this._data.values = [this._data.zero];
        }
        this._data.values.unshift(this.ALIVE_LABEL, this.ACTVE_LABEL, this.VALID_LABEL);
    }
    render() {
        this.updateScales();
        this.updateAxes();
        this.updateRectangles();
    }
    resize() {
        this._svgCanvas.remove();
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.render();
    }
    initSvgAndGroups() {
        // dimensions using margins convention
        this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
        this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
        // creates the new canvas element
        this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv)
            .append('svg')
            .attr('width', this._chartDiv.clientWidth)
            .attr('height', this._chartDiv.clientHeight);
        // creates the group
        this._svgGroup = this._svgCanvas
            .append('g')
            .attr('class', 'svgGroup')
            .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
        // axis groups
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + (this._height) + ')');
    }
    initScalesAndAxes() {
        this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.0);
        this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
        this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]);
    }
    updateScales() {
        this._xScale.domain(this._data.values);
        this._cScale.domain([
            this._data.minMax[0], this._data.zero, this._data.minMax[1]
        ]);
    }
    updateAxes() {
        this._xAxis.scale(this._xScale).tickValues([
            this.ALIVE_LABEL,
            this.ACTVE_LABEL,
            this.VALID_LABEL,
            this._data.minMax[0],
            this._data.zero,
            this._data.minMax[1]
        ]);
        this._svgGroup.select('.axis--x').call(this._xAxis.tickFormat(this.tickFormat))
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dy', '.5em')
            .attr('dx', '-.25em')
            .attr('transform', 'rotate(-35)');
        this._svgGroup.select('.axis--x').select(".domain").remove();
    }
    updateRectangles() {
        const cmap = this._svgGroup
            .selectAll(".cmap-group")
            .data([this._data.values])
            .join("g");
        cmap.attr("class", "cmap-group");
        const rects = cmap
            .selectAll("rect")
            .data(d => d)
            .join("rect");
        rects
            .attr("x", d => this._xScale(d))
            .attr("y", 0)
            .attr("width", this._xScale.bandwidth())
            .attr("height", this._height)
            .attr("fill", d => {
            if (d === this.ALIVE_LABEL) {
                return this.ALIVE_COLOR;
            }
            else if (d === this.VALID_LABEL) {
                return this.VALID_COLOR;
            }
            else if (d === this.ACTVE_LABEL) {
                return this.ACTVE_COLOR;
            }
            else {
                return this._cScale(d);
            }
        })
            .attr("stroke", "none");
    }
}


/***/ }),

/***/ "./src/app/charts/line.ts":
/*!********************************!*\
  !*** ./src/app/charts/line.ts ***!
  \********************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

class Line {
    constructor(chartDiv, callbacks, defaults) {
        // chart data
        this._data = null;
        // Chart div
        this._chartDiv = null;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 40, right: 35, bottom: 60, left: 125 };
        // scales and axis
        this._xScale = null;
        this._yScale = null;
        this._cScale = null;
        this._yLabel = '';
        // ----
        this._xAxis = null;
        this._yAxis = null;
        // callbacks
        this._callbacks = null;
        // d3's line generator
        this._line = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d) => this._xScale(d.year))
            .y((d) => this._yScale(d.value))
            .curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"])
            .defined(function (d) { return d.valid; });
        this._chartDiv = chartDiv;
        this._callbacks = callbacks;
        this._yLabel = defaults.yLabel;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
    }
    setData(data, years) {
        this._data = data;
        this._data.years = years;
    }
    setYLabel(label) {
        this._yLabel = label;
    }
    render() {
        this.updateScales();
        this.updateAxes();
        this.updateLines();
        this.updateLegend();
    }
    resize() {
        this._svgCanvas.remove();
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.render();
    }
    initSvgAndGroups() {
        // dimensions using margins convention
        this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
        this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
        // creates the new canvas element
        this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv)
            .append('svg')
            .attr('width', this._chartDiv.clientWidth)
            .attr('height', this._chartDiv.clientHeight);
        // creates the group
        this._svgGroup = this._svgCanvas
            .append('g')
            .attr('class', 'svgGroup')
            .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
        this._svgGroup
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(0, 0)');
        // axis groups
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + (this._height) + ')');
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--y');
        // text label for the x axis
        this._svgGroup
            .append("text")
            .attr('class', 'xaxis-label')
            .attr("transform", `translate(${this._width / 2}, ${this._height + this._margin.top + 15})`)
            .style("text-anchor", "middle")
            .text(() => {
            const parts = this._yLabel.split(' ');
            if (parts[parts.length - 1] === 'change') {
                return `${parts[0]} ${parts[1]} value matrix`;
            }
            if (parts[parts.length - 1] === 'value') {
                return `${parts[0]} ${parts[1]} change matrix`;
            }
        });
        // text label for the y axis
        this._svgGroup
            .append("text")
            .attr('class', 'yaxis-label')
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - this._margin.left / 2)
            .attr("x", 0 - (this._height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(`${this._yLabel}`);
    }
    initScalesAndAxes() {
        this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scalePoint"]().range([0, this._width]).padding(0.2);
        this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
        this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([this._height, 0]);
        this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale);
        this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_0__["schemeCategory10"]);
    }
    initWindowEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    updateScales() {
        const years = this._data.years;
        let range = [Number.MAX_VALUE, Number.MIN_VALUE];
        this._data.lines.forEach(line => {
            const vals = line.data.map(el => el.value);
            const min = Math.min(...vals);
            const max = Math.max(...vals);
            range[0] = Math.min(range[0], min);
            range[1] = Math.max(range[1], max);
        });
        if (this._data.lines.length === 0) {
            range = this._data.minMax;
        }
        // sets the domains
        this._xScale.domain(years);
        this._yScale.domain(range);
        const names = this._data.lines.map(obj => obj.name);
        this._cScale.domain(names);
    }
    updateAxes() {
        this._xAxis.scale(this._xScale);
        this._svgGroup.select('.axis--x').call(this._xAxis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-25)');
        this._yAxis.scale(this._yScale);
        this._svgGroup.select('.axis--y').call(this._yAxis.tickFormat(d3__WEBPACK_IMPORTED_MODULE_0__["format"](".2s")));
        this._svgGroup.select('.yaxis-label').text(`${this._yLabel}`);
        this._svgGroup.select('.xaxis-label').text(() => {
            const parts = this._yLabel.split(' ');
            if (parts[parts.length - 1] === 'change') {
                return `${parts[0]} ${parts[1]} value matrix`;
            }
            if (parts[parts.length - 1] === 'value') {
                return `${parts[0]} ${parts[1]} change matrix`;
            }
        });
    }
    updateLines() {
        const lines = this._svgGroup.selectAll('.curve')
            .data(this._data.lines)
            .join('path');
        lines
            .attr("class", "curve")
            .attr("d", d => this._line(d.data))
            .attr("stroke", d => this._cScale(d.name));
    }
    updateLegend() {
        const elements = this._svgGroup.select('.legend')
            .selectAll('.legend-element')
            .data(this._data.lines)
            .join('g')
            .attr('transform', (d, i) => `translate(${this._width / 4 + i * (3 * this._width / 4) / this._data.lines.length}, ${-this._margin.top / 2})`);
        elements
            .attr('class', 'legend-element')
            .attr('width', 3 * this._width / 4 / this._data.lines.length);
        const circles = elements
            .selectAll('circle')
            .data(d => [d.name])
            .join('circle');
        circles
            .attr('r', 6)
            .attr('fill', d => this._cScale(d));
        const labels = elements
            .selectAll('text')
            .data(d => [d.name])
            .join('text');
        let width = (this._width / 4) / this._data.lines.length;
        let lSize = 20;
        labels
            .attr('class', 'legend-text')
            .attr('text-anchor', 'start')
            .attr('x', 15)
            .attr('y', 5)
            .text(d => {
            const content = d.length > lSize ? d.slice(0, lSize) + '...' : d;
            return content;
        })
            .text(function (d) {
            const content = d.length > lSize ? d.slice(0, lSize) + '...' : d;
            const size = this.getComputedTextLength();
            return size < width ? content : content.slice(0, lSize * width / size) + '...';
        })
            .on('mouseover', d => {
            const mouse = [d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageX + 10, d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageY + 10];
            this._callbacks.lHover({ line: d, mouse });
        })
            .on('mouseout', this._callbacks.svgOut);
    }
}


/***/ }),

/***/ "./src/app/charts/matrix.ts":
/*!**********************************!*\
  !*** ./src/app/charts/matrix.ts ***!
  \**********************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

class Matrix {
    constructor(chartDiv, callbacks, defaults) {
        // chart data
        this._data = null;
        // Chart div
        this._chartDiv = null;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 10, right: 35, bottom: 40, left: 125 };
        // scales and axis
        this._xScale = null;
        this._yScale = null;
        this._cScale = null;
        this._lScale = null;
        // ----
        this._xAxis = null;
        this._yAxis = null;
        // labels on y axis
        this.Y_LABEL_SIZE = 22;
        // Is Alive : the lot existis in the selected year
        // Is Active: the lot fits the filter condition 
        // Is Valid : the selected attribute is a valid value in the lot
        this.ALIVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#8f8f8f');
        this.ACTVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#afafaf');
        this.VALID_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#cfcfcf');
        this.MODE = null;
        // callback enabled
        this._yCallbackEnabled = true;
        // selected labels
        this._xLabelSelected = null;
        this._yLabelSelected = null;
        this._sortIconSelected = null;
        this._lineIconSelected = [];
        // callbacks
        this._callbacks = null;
        this._chartDiv = chartDiv;
        this._callbacks = callbacks;
        this._xLabelSelected = defaults.xLabel;
        this._yLabelSelected = null;
        this._sortIconSelected = defaults.sIcon;
        this._lineIconSelected = defaults.lIcon;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
    }
    setData(data, mode, line, sort, click) {
        this.MODE = mode;
        this._data = data;
        this._lineIconSelected = line;
        this._sortIconSelected = sort;
        this._yCallbackEnabled = click;
    }
    setHighlight(label) {
        this._yLabelSelected = label;
    }
    render() {
        this.updateScales();
        this.updateAxes();
        this.updateRectangles();
        this.updateSortIcons();
        this.updateLineIcons();
        this.highlightSortIcon();
        this.highlightLineIcon();
        this.highlightXLabel();
        this.highlightYLabel();
    }
    resize() {
        this._svgCanvas.remove();
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.render();
    }
    initSvgAndGroups() {
        // dimensions using margins convention
        this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
        this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
        // creates the new canvas element
        this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv)
            .append('svg')
            .attr('width', this._chartDiv.clientWidth)
            .attr('height', this._chartDiv.clientHeight)
            .on('mouseout', this._callbacks.svgOut);
        // creates the group
        this._svgGroup = this._svgCanvas
            .append('g')
            .attr('class', 'svgGroup')
            .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
        // axis groups
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + (this._height) + ')');
        this._svgGroup
            .append('g')
            .attr('class', 'axis axis--y');
        // icons groups
        this._svgGroup
            .append('g')
            .attr('class', 'sort-icons-group');
        this._svgGroup
            .append('g')
            .attr('class', 'line-icons-group');
    }
    initScalesAndAxes() {
        this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.075);
        this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
        this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([this._height, 0]).paddingInner(0.075).paddingOuter(0.25).align(1.0);
        this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale);
        this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]);
        this._lScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_0__["schemeCategory10"]);
    }
    initWindowEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    updateScales() {
        const keys = this._data.map(obj => obj.key);
        if (keys.length < 1) {
            return;
        }
        const polys = this._data[0].value.map(obj => obj.name);
        if (polys.length < 1) {
            return;
        }
        // sets the domains
        this._xScale.domain(keys);
        this._yScale.domain(polys);
        let zero = 0;
        if (this._data.minMax[0] < 0 && this._data.minMax[1] > 0) {
            zero = 0;
        }
        else if (this._data.minMax[0] >= 0 && this._data.minMax[1] > 0) {
            zero = this._data.minMax[0];
        }
        else if (this._data.minMax[0] < 0 && this._data.minMax[1] <= 0) {
            zero = this._data.minMax[1];
        }
        this._cScale.domain([
            this._data.minMax[0], zero, this._data.minMax[1]
        ]);
        this._lScale.domain(this._lineIconSelected);
    }
    updateAxes() {
        this._xAxis.scale(this._xScale);
        this._svgGroup.select('.axis--x').call(this._xAxis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .style('pointer-events', 'auto')
            .style('cursor', 'pointer')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-25)')
            .on('click', d => {
            this._xLabelSelected = d;
            this._callbacks.xLabel(d);
            this.highlightXLabel();
        });
        this._yAxis.scale(this._yScale);
        const texts = this._svgGroup.select('.axis--y').call(this._yAxis)
            .selectAll('text')
            .text(d => {
            if (d.length > this.Y_LABEL_SIZE) {
                return `${d.substring(0, this.Y_LABEL_SIZE - 3)}...`;
            }
            return d;
        })
            .style('pointer-events', 'auto')
            .style('cursor', 'not-allowed')
            .on('mouseover', d => {
            let current = this._data[0].value.filter(obj => obj.name === d);
            current = current.length > 0 ? current[0].name : '';
            this._yLabelSelected = current;
            this._callbacks.yHover(current);
            this.highlightYLabel();
        });
        if (this._yCallbackEnabled) {
            texts
                .style('cursor', 'pointer')
                .on('click', d => this._callbacks.yLabel(d));
        }
    }
    updateRectangles() {
        const polys = this._svgGroup
            .selectAll(".line-group")
            .data(this._data)
            .join("g");
        polys
            .attr('class', 'line-group')
            .attr('transform', d => `translate(${this._xScale(d.key)}, 0)`);
        const rects = polys
            .selectAll("rect")
            .data(d => d.value)
            .join("rect");
        rects
            .attr("y", d => this._yScale(d.name))
            .attr("width", this._xScale.bandwidth())
            .attr("height", this._yScale.bandwidth())
            .attr("fill", d => {
            if (this.MODE === 'value') {
                if (!d.isAlive) {
                    return this.ALIVE_COLOR;
                }
                else if (!d.isActive) {
                    return this.ACTVE_COLOR;
                }
                else if (!d.isValid) {
                    return this.VALID_COLOR;
                }
                else {
                    return this._cScale(d[this.MODE]);
                }
            }
            else if (this.MODE === 'change') {
                if (!d.isAlive) {
                    return this.ALIVE_COLOR;
                }
                else if (!d.isActive) {
                    return this.ACTVE_COLOR;
                }
                else if (!d.changeValid) {
                    return this.VALID_COLOR;
                }
                else {
                    return this._cScale(d[this.MODE]);
                }
            }
        })
            .on('mouseover', (d, i, nodes) => {
            const year = nodes[i].parentNode.__data__.key;
            const mouse = [d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageX + 10, d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageY + 10];
            this._callbacks.rHover({ year, data: d, mouse });
        });
    }
    updateSortIcons() {
        const icons = this._svgGroup.select('.sort-icons-group')
            .selectAll("path")
            .data(this._data)
            .join("path");
        icons
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["symbol"]().type(d3__WEBPACK_IMPORTED_MODULE_0__["symbolTriangle"]).size(100))
            .style('pointer-events', 'auto')
            .style('cursor', 'pointer')
            .attr('transform', d => {
            return `rotate(180) translate(${-this._xScale(d.key) - 0.5 * this._xScale.bandwidth()}, ${0})`;
        })
            .on('click', d => {
            this._sortIconSelected = this._sortIconSelected === d.key ? 'name' : d.key;
            this._callbacks.sIcon(this._sortIconSelected);
            this.highlightSortIcon();
        });
    }
    updateLineIcons() {
        const icons = this._svgGroup.select('.line-icons-group')
            .selectAll("path")
            .data(this._data[0].value)
            .join("path");
        icons
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["symbol"]().type(d3__WEBPACK_IMPORTED_MODULE_0__["symbolCircle"]).size(100))
            .style('pointer-events', 'auto')
            .style('cursor', 'pointer')
            .attr('transform', d => {
            return `translate(${this._width + 0.5 * this._margin.right}, ${this._yScale(d.name) + 0.5 * this._yScale.bandwidth()})`;
        })
            .on('click', this.updateLineIconsClick.bind(this));
    }
    highlightYLabel() {
        this._svgGroup.select('.axis--y').call(this._yAxis)
            .selectAll('text')
            .text(d => {
            if (d.length > this.Y_LABEL_SIZE) {
                return `${d.substring(0, this.Y_LABEL_SIZE - 3)}...`;
            }
            return d;
        })
            .attr('fill', d => {
            let current = this._data[0].value.filter(obj => obj.name === this._yLabelSelected);
            current = current.length > 0 ? current[0].name : '';
            return current === d ? 'limegreen' : 'currentColor';
        })
            .attr('font-weight', d => {
            let current = this._data[0].value.filter(obj => obj.name === this._yLabelSelected);
            current = current.length > 0 ? current[0].name : '';
            return current === d ? 'bold' : 'normal';
        });
    }
    highlightXLabel() {
        this._svgGroup.select('.axis--x').call(this._xAxis)
            .selectAll('text')
            .attr('fill', d => d === this._xLabelSelected ? '#f44336' : 'currentColor')
            .attr('font-weight', d => d === this._xLabelSelected ? 'bold' : 'normal');
    }
    highlightSortIcon() {
        this._svgGroup.select('.sort-icons-group')
            .selectAll('path')
            .attr('fill', d => {
            return +this._sortIconSelected && d.key === this._sortIconSelected ? '#f44336' : '#bfbfbf';
        });
    }
    highlightLineIcon() {
        this._svgGroup.select('.line-icons-group')
            .selectAll('path')
            .attr('fill', d => {
            return this._lineIconSelected.includes(d.name) ? this._lScale(d.name) : '#bfbfbf';
        });
    }
    updateLineIconsClick(d) {
        const id = this._lineIconSelected.indexOf(d.name);
        if (id < 0) {
            this._lineIconSelected.push(d.name);
        }
        else {
            this._lineIconSelected.splice(id, 1);
        }
        this._lScale.domain(this._lineIconSelected);
        this._callbacks.lIcon(this._lineIconSelected);
        this.highlightLineIcon();
    }
}


/***/ }),

/***/ "./src/app/components/config/config.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/config/config.component.ts ***!
  \*******************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function ConfigComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boro_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boro_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boro_r49.toUpperCase(), " ");
} }
function ConfigComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poly_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", poly_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poly_r50.toUpperCase(), " ");
} }
function ConfigComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nav_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r51.toUpperCase(), " ");
} }
function ConfigComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mode_r52.toUpperCase(), " ");
} }
class ConfigComponent {
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
    }
    ngOnInit() { }
    boroughSelectChanged(event) {
        // cleans the line chart
        this.events.vis.lineIconClicked.emit([]);
        // cleans the levels
        const levels = this.data.meta.levels;
        let updates = levels
            .filter(str => str !== 'borough')
            .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
        const previous = this.state.activeGeometryParameters;
        this.state.activeGeometryParameters = Object.assign(previous, updates);
        // cleans the filters
        this.state.activeFilterParameters = {};
        this.data.filters = {};
        // changed value
        const borough = { borough: event.value };
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
            .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
        const previous = this.state.activeGeometryParameters;
        this.state.activeGeometryParameters = Object.assign(previous, updates);
        // cleans the filters
        this.state.activeFilterParameters = {};
        this.data.filters = {};
        // changed value
        const polygon = { polygon: event.value };
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
            .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
        const previous = this.state.activeGeometryParameters;
        this.state.activeGeometryParameters = Object.assign(previous, updates);
        // cleans the filters
        this.state.activeFilterParameters = {};
        this.data.filters = {};
        // changed value
        const navigation = { navigation: event.value };
        // emits the event
        this.events.config.navigationSelectChanged.emit(navigation);
    }
    mapModeSelectChanged(event) {
        // changed value
        const mode = { mode: event.value };
        // emits the event
        this.events.config.modeSelectChanged.emit(mode);
    }
}
ConfigComponent.ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"])); };
ConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigComponent, selectors: [["app-config"]], decls: 22, vars: 18, consts: [[1, "widget", "top", "submenu"], [1, "options"], [3, "color"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Borough");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_5_listener($event) { return ctx.boroughSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfigComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Polygons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.polygonsSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfigComponent_mat_option_11_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_15_listener($event) { return ctx.navigationSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConfigComponent_mat_option_16_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Map mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_20_listener($event) { return ctx.mapModeSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConfigComponent_mat_option_21_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.configActive ? 100 : 0)("z-index", ctx.state.configActive ? 2 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.fontSizeControl.value, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeConfigParameters.borough);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.boroughs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeConfigParameters.polygon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.polygons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeConfigParameters.navigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.navigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeConfigParameters.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.modes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".widget[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 140px;\n\n  padding: 10px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n}\n\n.submenu[_ngcontent-%COMP%] {\n  right: 90px;\n}\n\n.toogle-button[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 8px;\n}\n\n.item[_ngcontent-%COMP%] {\n  float:left;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 12px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 130px !important;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7O0VBRVosYUFBYTs7RUFFYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogMTQwcHg7XG5cbiAgcGFkZGluZzogMTBweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcbn1cblxuLnN1Ym1lbnUge1xuICByaWdodDogOTBweDtcbn1cblxuLnRvb2dsZS1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLml0ZW0ge1xuICBmbG9hdDpsZWZ0O1xufVxuLmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50OyAgXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-config',
                templateUrl: './config.component.html',
                styleUrls: ['./config.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_charts_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/charts/bar */ "./src/app/charts/bar.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















const _c0 = ["filter"];
function FilterComponent_div_2_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", attr_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r35.toUpperCase(), " ");
} }
function FilterComponent_div_2_mat_form_field_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r37.toUpperCase(), " ");
} }
function FilterComponent_div_2_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterComponent_div_2_mat_form_field_10_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const hist_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.categorySelectChanged(hist_r31.key, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_div_2_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hist_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r33.colorControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r33.state.activeFilterParameters[hist_r31.key].category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.getCategory(hist_r31.key));
} }
function FilterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterComponent_div_2_Template_mat_select_selectionChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const hist_r31 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.attributeSelectChanged(hist_r31.key, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_div_2_mat_option_9_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_div_2_mat_form_field_10_Template, 5, 3, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_2_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const hist_r31 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.delFilter(hist_r31.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hist_r31 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hist_r31.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx_r29.fontSizeControl.value, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r29.colorControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r29.state.activeFilterParameters[hist_r31.key].attribute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.getAttributes());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.state.activeFilterParameters[hist_r31.key].attribute !== "LANDUSE" && ctx_r29.state.activeFilterParameters[hist_r31.key].attribute !== "SPDIST1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
} }
class FilterComponent {
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
        this.filterExp = '';
        this._filters = {};
    }
    ngOnInit() {
        this.subscribeDataEvents();
    }
    ngAfterViewInit() {
        this._filtersDivs.changes.subscribe(this.renderFilters.bind(this));
    }
    subscribeDataEvents() {
        this.events.data.updateFilters.subscribe(this.renderFilters.bind(this));
    }
    renderFilters(keepBrush) {
        const keys = Object.keys(this.data.filters);
        this._filtersDivs.forEach((el, divId) => {
            const key = keys[divId];
            if (!key) {
                return;
            }
            const div = el.nativeElement;
            const cbs = {
                brush: this.brushChanged.bind(this)
            };
            const hist = new src_app_charts_bar__WEBPACK_IMPORTED_MODULE_2__["Bar"](div, cbs, key);
            this._filters[key] = hist;
            const range = keepBrush ? this.state.activeFilterParameters[key].range || [] : [];
            const id = this.data.filters[key].findIndex((obj) => {
                return obj.bin === 'empty';
            });
            if (id >= 0) {
                this.data.filters[key].splice(id, 1);
            }
            const data = this.data.filters[key].filter((obj) => {
                return obj.count > 0;
            });
            // runs
            this._filters[key].setData(data, range);
            this._filters[key].render();
        });
    }
    // ---- Toolbar events
    addFilter() {
        const state = {
            key: this.state.currentFilterId,
            params: {
                borough: this.state.activeConfigParameters.borough,
                attribute: 'AREA',
                category: 'RES'
            }
        };
        this.addFilterExp(state.key);
        this.events.filters.updated.emit(state);
    }
    addFilterExp(key) {
        if (this.filterExp === '') {
            this.filterExp = `${key}`;
        }
        else {
            this.filterExp += ` and ${key}`;
        }
    }
    updateSummary() {
        this.state.activeConfigParameters.filterExp = this.filterExp;
        this.events.filters.updateSummary.emit();
    }
    // ---- Filter events
    delFilter(key) {
        const state = {
            key: key,
            params: null
        };
        this.delFilterExp(key);
        this.events.filters.updated.emit(state);
    }
    delFilterExp(key) {
        let parts = this.filterExp.split(' ');
        let id = parts.indexOf(key);
        if (id === 0) {
            parts.splice(id, 2);
        }
        else {
            parts.splice(id - 1, 2);
        }
        this.filterExp = parts.join(' ');
    }
    attributeSelectChanged(key, event) {
        const state = {
            key,
            params: {
                attribute: event.value,
                category: this.data.meta.attributes[event.value].categories[0]
            }
        };
        this.events.filters.updated.emit(state);
    }
    getAttributes() {
        const filtered = Object.keys(this.data.meta.attributes).filter(key => {
            const obj = this.data.meta.attributes[key];
            return obj.histogramAlloed;
        });
        return filtered;
    }
    categorySelectChanged(key, event) {
        const state = {
            key,
            params: { category: event.value }
        };
        this.events.filters.updated.emit(state);
    }
    getCategory(key) {
        const attr = this.state.activeFilterParameters[key].attribute;
        if (this.state.activeFilterParameters[key].attribute) {
            return this.data.meta.attributes[attr].categories;
        }
        return [];
    }
    // ----- Bar chart events
    brushChanged(key, event) {
        const state = {
            key,
            params: { range: event.value }
        };
        this.events.filters.brushed.emit(state);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._filtersDivs = _t);
    } }, decls: 16, vars: 10, consts: [[1, "widget", "top", "left"], [1, "filtersContainer"], ["class", "filter", 4, "ngFor", "ngForOf"], [1, "addToolbar", "mat-toolbar-bottom"], ["mat-icon-button", "", 3, "click"], [3, "color"], [2, "font-size", "12px !important", "margin-right", "10px"], ["matInput", "", 2, "width", "25% !important", 3, "ngModel", "ngModelChange"], ["currentFilterExp", ""], [1, "spacer"], [1, "filter"], [1, "centered", "mat-toolbar-top"], [2, "margin-right", "20px"], [1, "options"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "color", 4, "ngIf"], [1, "bar-chart"], ["filter", ""], [3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterComponent_div_2_Template, 17, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_5_listener($event) { return ctx.addFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Boolean expression:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.filterExp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_13_listener($event) { return ctx.updateSummary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "play_circle_filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.matrixActive && ctx.state.filterActive ? 100 : 0)("z-index", ctx.state.matrixActive && ctx.state.filterActive ? 2 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.data.filters));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterExp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]], styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 600px;\n  height: 800px;\n  max-height: calc(100% - 20px);\n\n  left: 815px;\n  padding: 2px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n\n\n.addToolbar[_ngcontent-%COMP%] {\n  \n  position:absolute;\n  height: 50px;\n  width: calc(100% - 4px);\n\n  padding-top: 5px;\n  padding-bottom: 5px;\n  \n\n  bottom: 0px;\n}\n\n.filtersContainer[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n\n.filtersContainer[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.filter[_ngcontent-%COMP%] {\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 585px;\n  height: 365px;\n\n  padding: 2px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  margin: 5px;\n}\n\n.bar-chart[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0px;\n\n  width: 100%;\n  height: calc(100% - 65px);\n}\n\n.options[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 167px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 130px !important;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixXQUFXO0VBQ1gsWUFBWTs7RUFFWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7RUFDM0MseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLGdCQUFnQjtFQUNoQixtQkFBbUI7OztFQUduQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osYUFBYTs7RUFFYixZQUFZOztFQUVaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcblxuICBsZWZ0OiA4MTVweDtcbiAgcGFkZGluZzogMnB4O1xuXG4gIC8qIG1lbnUgc3R5bGUgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTApO1xuXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIG1hdHJpeCBuYXZpZ2F0aW9uICovXG4uYWRkVG9vbGJhciB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XG5cbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgXG5cbiAgYm90dG9tOiAwcHg7XG59XG5cbi5maWx0ZXJzQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmZpbHRlcnNDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbHRlciB7XG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgd2lkdGg6IDU4NXB4O1xuICBoZWlnaHQ6IDM2NXB4O1xuXG4gIHBhZGRpbmc6IDJweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcblxuICBtYXJnaW46IDVweDtcbn1cblxuLmJhci1jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xufVxuXG4ub3B0aW9ucyAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogMTY3cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7ICBcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }]; }, { _filtersDivs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['filter']
        }] }); })();


/***/ }),

/***/ "./src/app/components/layers/layers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layers/layers.component.ts ***!
  \*******************************************************/
/*! exports provided: LayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersComponent", function() { return LayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function () { return { "label": true }; };
class LayersComponent {
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
    }
    ngOnInit() { }
    layerSelected(layer) {
        const state = {
            layersActive: false,
            activeLayer: this.state.activeLayer === layer ? '' : layer
        };
        this.events.layers.activeLayerChanged.emit(state);
    }
}
LayersComponent.ɵfac = function LayersComponent_Factory(t) { return new (t || LayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
LayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayersComponent, selectors: [["app-layers"]], decls: 6, vars: 7, consts: [[1, "widget", "submenu"], ["mat-button", "", 1, "item", 3, "click"], [3, "color"], [3, "ngClass"]], template: function LayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_Template_button_click_1_listener($event) { return ctx.layerSelected("pops"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "POPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.layersActive ? 100 : 0)("z-index", ctx.state.layersActive ? 2 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.activeLayer === "pops" ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".widget[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n}\n\n.submenu[_ngcontent-%COMP%] {\n  right: 13px;\n  top: 255px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-top: -12px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5ZXJzL2xheWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldCB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG59XG5cbi5zdWJtZW51IHtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMjU1cHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layers',
                templateUrl: './layers.component.html',
                styleUrls: ['./layers.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/legend/legend.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/legend/legend.component.ts ***!
  \*******************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/charts/cmap */ "./src/app/charts/cmap.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");










const _c0 = ["matcolormap"];
const _c1 = ["mapcolormap"];
function LegendComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, ctx_r23.state.activeGeometryParameters.neighborhood, 0, 22), "", ctx_r23.state.activeGeometryParameters.neighborhood.length >= 22 ? "..." : "", "");
} }
function LegendComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.state.activeGeometryParameters.block);
} }
function LegendComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.state.activeSummaryParameters.category.toUpperCase());
} }
function LegendComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.state.activeSummaryParameters.category.toUpperCase());
} }
class LegendComponent {
    constructor(data, events, state) {
        this.data = data;
        this.events = events;
        this.state = state;
    }
    ngOnInit() {
        this.subscribeDataEvents();
        this._matColorMap = new src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__["Cmap"](this._matColorMatDiv.nativeElement);
        this._mapColorMap = new src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__["Cmap"](this._mapColorMapDiv.nativeElement);
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
        }
        else {
            minMax = [+this.data.summary.changeMin.toFixed(2), +this.data.summary.changeMax.toFixed(2)];
        }
        if (visElement === 'mat') {
            this._matColorMap.setData(minMax);
            this._matColorMap.render();
        }
        else {
            this._mapColorMap.setData(minMax);
            this._mapColorMap.render();
        }
    }
    changeCMap() {
        this.state.activeConfigParameters.cmapPercentiles = !this.state.activeConfigParameters.cmapPercentiles;
        this.events.state.configCMapChanged.emit();
    }
}
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
LegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegendComponent, selectors: [["app-legend"]], viewQuery: function LegendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matColorMatDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._mapColorMapDiv = _t.first);
    } }, decls: 62, vars: 17, consts: [[1, "widget", "bottom", "right"], [1, "levels"], [1, "mat-toolbar-top"], [1, "centered"], [1, "levels-p"], ["class", "centered", 4, "ngIf"], [1, "spacer"], [1, "check", 3, "color", "change"], [1, "cmap"], [2, "display", "flex", "padding-left", "16px"], [1, "bottom", 2, "height", "70px"], ["matcolormap", ""], ["mapcolormap", ""]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LegendComponent_div_11_Template, 6, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LegendComponent_div_12_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LegendComponent_Template_mat_checkbox_change_14_listener($event) { return ctx.changeCMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Percentile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LegendComponent_div_26_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, LegendComponent_div_49_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 10, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.legendActive ? 100 : 0)("z-index", ctx.state.legendActive ? 2 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeGeometryParameters.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeConfigParameters.borough);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeGeometryParameters.neighborhood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeGeometryParameters.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeSummaryParameters.attribute.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeSummaryParameters.category !== "NONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeSummaryParameters.metric.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeSummaryParameters.mode.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeSummaryParameters.attribute.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeSummaryParameters.category !== "NONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeSummaryParameters.metric.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeConfigParameters.mode.toUpperCase());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 500px;\n  height: 250px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.levels[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 60px !important;\n}\n\n.levels-p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.cmap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc((100% - 90px) / 2) ;\n  margin-bottom: 12px;\n}\n\n.check[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixhQUFhOztFQUViLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsK0RBQXVEOztFQUF2RCx1REFBdUQ7RUFDdkQ7OzZDQUUyQztJQUN6Qyx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldCB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246YWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG5cbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubGV2ZWxzIG1hdC10b29sYmFye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZXZlbHMtcCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC0gOTBweCkgLyAyKSA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jaGVjayB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-legend',
                templateUrl: './legend.component.html',
                styleUrls: ['./legend.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }]; }, { _matColorMatDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matcolormap', { static: true }]
        }], _mapColorMapDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapcolormap', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_mapview_mapview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mapview/mapview */ "./src/app/mapview/mapview.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");

// angular imports

// mapview imports






const _c0 = ["mapView"];
class MapComponent {
    // map component constructor
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        // map view instance
        this._mapView = null;
    }
    // initialization hook
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // map callbacks
            const callbacks = {
                mouse: { mouseDown: this.highlightPoly.bind(this), },
                key: {}
            };
            // cretes the map
            this._mapView = new src_app_mapview_mapview__WEBPACK_IMPORTED_MODULE_2__["MapView"](this._mapDiv.nativeElement, callbacks);
            yield this._mapView.initLayers('index.json');
            // subscribe events
            this.subscribeDataEvents();
            this.subscribeStateEvents();
            // sinalizes that mapview is ready
            this.events.map.initialized.emit();
        });
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
    loadLayerGeometryAndFunction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadLayerGeometry();
            yield this.loadLayerScalarField();
            // open the POPs layer
            yield this.loadPopsLayer();
        });
    }
    loadPopsLayer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // removes the previous loaded layer    
            this._mapView.delLayer('pops');
            // layer config
            const config = { selectable: false, visible: this.state.activeLayer === 'pops' };
            // loads the payer
            yield this._mapView.addLayer('point', 'pops', this.data.layers['pops'], config);
        });
    }
    // loads the polygon layer
    loadLayerGeometry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // removes the previous loaded layer    
            this._mapView.delLayer('pluto');
            // layer config
            const config = { selectable: true };
            // loads the payer
            yield this._mapView.addLayer('polygon', 'pluto', this.data.geometry, config);
        });
    }
    // loads the scalar function
    loadLayerScalarField() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mode = this.state.activeConfigParameters.mode;
            const year = this.state.activeGeometryParameters.year;
            if (!year) {
                return;
            }
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
                    4;
                    if (!current.isAlive) {
                        value = 'notAlive';
                    }
                    else if (!current.isActive) {
                        value = 'notActive';
                    }
                    else if (mode === 'value' && !current.isValid) {
                        value = 'notValid';
                    }
                    else if (mode === 'change' && !current.changeValid) {
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
            yield this._mapView.updateLayerFunction('pluto', { func, fMin, fMax });
        });
    }
    highlightPoly(polygon) {
        let name = "";
        const id = +polygon[0];
        if (id >= 0) {
            name = this.data.geometry.features[id].properties.name;
        }
        this.events.map.polyPicked.emit({ name, origin: 'map' });
    }
    updateHighlightedPolygon(origin) {
        if (origin === 'vis') {
            const id = this.data.geometry.features.findIndex(obj => obj.properties.name === this.state.selectedPolygon);
            this._mapView.pick('pluto', id);
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._mapDiv = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "full-screen"], ["mapView", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: [".full-screen[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }]; }, { _mapDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mapView', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/config.component */ "./src/app/components/config/config.component.ts");
/* harmony import */ var _layers_layers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layers/layers.component */ "./src/app/components/layers/layers.component.ts");
// angular imports











const _c0 = function () { return { "label": true }; };
class MenuComponent {
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.configActive = false;
    }
    ngOnInit() { }
    buttonClicked(widget) {
        if (widget === 'config') {
            this.state.configActive = !this.state.configActive;
        }
        else if (widget === 'layers') {
            this.state.layersActive = !this.state.layersActive;
        }
        else if (widget === 'matrix') {
            this.state.matrixActive = !this.state.matrixActive;
        }
    }
    toggleLegend() {
        this.state.legendActive = !this.state.legendActive;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 23, vars: 12, consts: [[1, "menu", "top", "right"], ["mat-button", "", 1, "item", 3, "click"], [3, "color"], [3, "ngClass"], ["mat-button", "", 1, "toogle-button", 3, "click"], [1, "item", 3, "color"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener($event) { return ctx.buttonClicked("config"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener($event) { return ctx.buttonClicked("matrix"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_11_listener($event) { return ctx.buttonClicked("layers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "layers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Layers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_16_listener($event) { return ctx.toggleLegend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-layers");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.configActive ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.matrixActive ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.layersActive ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.legendActive ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _config_config_component__WEBPACK_IMPORTED_MODULE_8__["ConfigComponent"], _layers_layers_component__WEBPACK_IMPORTED_MODULE_9__["LayersComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n    \n    position: absolute;\n  \n    \n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n      \n    \n    border: 1px solid #bfbfbf;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.85);    \n  }\n\n  .label[_ngcontent-%COMP%] {\n    margin-top: -12px;\n    font-size: 12px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgIC8qIGxheW91dCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIFxuICAgIC8qIG1lbnUgc3R5bGUgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpOyAgICBcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function TooltipComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.info.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r53.info.data ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 3, ctx_r53.info.data.name, 0, 22) : "", "", ctx_r53.info.data ? ctx_r53.info.data.name.length >= 22 ? "..." : "" : "", " ");
} }
function TooltipComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.tooltipContent());
} }
function TooltipComponent_mat_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.info.line);
} }
class TooltipComponent {
    constructor() {
    }
    ngOnInit() { }
    tooltipContent() {
        if (!this.info.data)
            return '';
        if (!this.info.data.isAlive) {
            return 'Lot Not Alive';
        }
        else if (!this.info.data.isActive) {
            return 'Inactive Lot';
        }
        else if (this.info.mode === 'value' && !this.info.data.isValid) {
            return 'Invalid Value';
        }
        else if (this.info.mode === 'change' && !this.info.data.changeValid) {
            return 'Invalid Change';
        }
        else {
            return this.info.data[this.info.mode].toLocaleString(undefined, { minimumFractionDigits: 2 });
        }
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["app-tooltip"]], inputs: { isActive: "isActive", top: "top", left: "left", info: "info" }, decls: 4, vars: 13, consts: [["class", "mat-toolbar-top header", 4, "ngIf"], ["style", "width: 100%; height: calc(100% - 30px);", 4, "ngIf"], ["class", "mat-toolbar-top header centered", 4, "ngIf"], [1, "mat-toolbar-top", "header"], [1, "centered"], [1, "levels-p"], [2, "width", "100%", "height", "calc(100% - 30px)"], [1, "mat-toolbar-top", "header", "centered"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipComponent_mat_toolbar_1_Template, 10, 7, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TooltipComponent_div_2_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TooltipComponent_mat_toolbar_3_Template, 4, 1, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.line === undefined ? "widgetMat" : "widgetLine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.isActive ? 100 : 0)("z-index", ctx.isActive ? 5 : 0 - 1)("left", ctx.left, "px")("top", ctx.top, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: [".widgetMat[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 235px;\n  height: 90px;\n\n  padding: 1px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.widgetLine[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 215px;\n  height: 30px;\n\n  padding: 1px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjs7RUFFdEIsWUFBWTtFQUNaLFlBQVk7O0VBRVosWUFBWTs7RUFFWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7RUFDM0MseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osWUFBWTs7RUFFWixZQUFZOztFQUVaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsK0RBQXVEOztFQUF2RCx1REFBdUQ7RUFDdkQ7OzZDQUUyQztFQUMzQyx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0TWF0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogMjM1cHg7XG4gIGhlaWdodDogOTBweDtcblxuICBwYWRkaW5nOiAxcHg7XG5cbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLndpZGdldExpbmUge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAvKiBsYXlvdXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuXG4gIHBhZGRpbmc6IDFweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcblxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.css']
            }]
    }], function () { return []; }, { isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/vis/vis.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/vis/vis.component.ts ***!
  \*************************************************/
/*! exports provided: VisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisComponent", function() { return VisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_charts_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/charts/matrix */ "./src/app/charts/matrix.ts");
/* harmony import */ var src_app_charts_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/charts/line */ "./src/app/charts/line.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");




















const _c0 = ["matrix"];
const _c1 = ["line"];
function VisComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", step_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r12, " ");
} }
function VisComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", attr_r13.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r13.key.toUpperCase(), " ");
} }
function VisComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r14)("disabled", cat_r14 === "NONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r14.toUpperCase(), " ");
} }
function VisComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const met_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", met_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", met_r15.toUpperCase(), " ");
} }
function VisComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", mode_r16 === "change" ? "VALUE" : "CHANGE", " & ", mode_r16.toUpperCase(), " ");
} }
function VisComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sort_r17)("disabled", sort_r17 === "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r17.toUpperCase(), " ");
} }
function VisComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_div_45_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.navButtonClicked("neighborhood"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.state.activeLevel === "neighborhood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, ctx_r9.state.activeGeometryParameters.neighborhood, 0, 22), "", ctx_r9.state.activeGeometryParameters.neighborhood.length >= 22 ? "..." : "", "");
} }
function VisComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_div_46_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.navButtonClicked("block"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.state.activeLevel === "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.state.activeGeometryParameters.block);
} }
class VisComponent {
    constructor(api, data, events, state) {
        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
        this.tooltip = {
            show: false, top: 10,
            left: 10, info: {}
        };
    }
    ngOnInit() {
        this.subscribeDataEvents();
        this.subscribeStateEvents();
        const matDefaults = {
            xLabel: this.state.activeGeometryParameters.year,
            sIcon: 'name'
        };
        const matCallbacks = {
            xLabel: this.yearLabelClicked.bind(this),
            yLabel: this.polyLabelClicked.bind(this),
            yHover: this.polyLabelHovered.bind(this),
            sIcon: this.sortIconClicked.bind(this),
            lIcon: this.lineIconClicked.bind(this),
            rHover: this.polyRectHovered.bind(this),
            svgOut: this.svgOut.bind(this)
        };
        this._matrix = new src_app_charts_matrix__WEBPACK_IMPORTED_MODULE_2__["Matrix"](this._matrixDiv.nativeElement, matCallbacks, matDefaults);
        let attr = `${this.state.activeSummaryParameters.attribute} (${this.state.activeSummaryParameters.category})`.toLowerCase();
        const lineDefaults = {
            yLabel: this.state.activeSummaryParameters.mode === 'change' ? `${attr} value` : `${attr} change`
        };
        const lineCallbacks = {
            lHover: this.lineLegendHovered.bind(this),
            svgOut: this.svgOut.bind(this)
        };
        this._line = new src_app_charts_line__WEBPACK_IMPORTED_MODULE_3__["Line"](this._lineDiv.nativeElement, lineCallbacks, lineDefaults);
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
                if (!a.isAlive || !a.isActive) {
                    return -1;
                }
                if (!b.isAlive || !b.isActive) {
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
        }
        else {
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
                value: yearCopy.map(d => {
                    const pos = original[d.name];
                    return data[year][pos];
                })
            };
            matData.push(obj);
        }
        // get the min and max values
        let minMax = [];
        if (mode === 'value') {
            minMax = [+data.min.toFixed(2), +data.max.toFixed(2)];
        }
        else {
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
        }
        else {
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
        const yearStep = { yearStep: event.value };
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
    highlightPolyLabel(origin) {
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
                .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
        }
        else if (level === 'neighborhood') {
            updates = levels
                .filter(str => str !== 'borough' && str !== 'neighborhood')
                .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
        }
        else if (level === 'block') {
            updates = levels
                .filter(str => str !== 'borough' && str !== 'neighborhood' && str !== 'block')
                .reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: undefined })), {});
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
    navPageChanged(direction) {
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
        else if (!isNaN(+direction)) {
            let val = +direction - 1;
            if (val < 0) {
                val = 0;
            }
            if (val > total) {
                val = total;
            }
            current = val;
        }
        const page = { currentPage: current };
        this.events.vis.navPageChanged.emit(page);
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
        };
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
VisComponent.ɵfac = function VisComponent_Factory(t) { return new (t || VisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"])); };
VisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisComponent, selectors: [["app-vis"]], viewQuery: function VisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matrixDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lineDiv = _t.first);
    } }, decls: 68, vars: 41, consts: [[1, "widget", "top", "left"], [1, "centered", "mat-toolbar-top"], [1, "options"], ["id", "year", 3, "color"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "color"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "line"], ["line", ""], [1, "matrix"], ["matrix", ""], [1, "navigation", "mat-toolbar-bottom"], ["mat-button", "", 1, "item", 3, "click"], ["mat-button", "", 3, "disabled", "click"], ["class", "centered", 4, "ngIf"], [1, "navigation-spacer"], [1, "centered"], [1, "navigation-label"], ["matInput", "", 1, "current", 3, "value", "change"], ["currentPage", ""], ["mat-icon-button", "", "aria-label", "Left", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Right", 3, "disabled", "click"], [3, "isActive", "top", "left", "info"], [3, "value"], [3, "value", "disabled"]], template: function VisComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_6_listener($event) { return ctx.yearStepSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_11_listener($event) { return ctx.attributeSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VisComponent_mat_option_12_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_17_listener($event) { return ctx.categorySelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VisComponent_mat_option_18_Template, 2, 3, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_22_listener($event) { return ctx.metricSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VisComponent_mat_option_23_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_27_listener($event) { return ctx.modeSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, VisComponent_mat_option_28_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sort Matrix by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_32_listener($event) { return ctx.sortSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VisComponent_mat_option_33_Template, 2, 3, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-toolbar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_40_listener($event) { return ctx.activeFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "view_agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_43_listener($event) { return ctx.navButtonClicked("borough"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VisComponent_div_45_Template, 6, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, VisComponent_div_46_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VisComponent_Template_input_change_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.navPageChanged(_r11.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_55_listener($event) { return ctx.navPageChanged("first"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "first_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_58_listener($event) { return ctx.navPageChanged("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_61_listener($event) { return ctx.navPageChanged("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_64_listener($event) { return ctx.navPageChanged("last"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "last_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-tooltip", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.matrixActive ? 100 : 0)("z-index", ctx.state.matrixActive ? 2 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.fontSizeControl.value, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "" + ctx.state.activeSummaryParameters.yearStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.yearStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeSummaryParameters.attribute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 39, ctx.data.meta.attributes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeSummaryParameters.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeSummaryParameters.metric);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMetrics());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeSummaryParameters.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.modes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activeSortParameters.sortBy - 0 ? "year" : ctx.state.activeSortParameters.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.meta.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.getFilterIconColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.state.activeLevel === "borough");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.activeConfigParameters.borough);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeGeometryParameters.neighborhood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.activeGeometryParameters.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.state.activePageParameters.currentPage + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" /", ctx.state.activePageParameters.totalPages, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.state.activePageParameters.currentPage === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.state.activePageParameters.currentPage === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.state.activePageParameters.currentPage === ctx.state.activePageParameters.totalPages - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.state.activePageParameters.currentPage === ctx.state.activePageParameters.totalPages - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.tooltip.show)("top", ctx.tooltip.top)("left", ctx.tooltip.left)("info", ctx.tooltip.info);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__["TooltipComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 800px;\n  height: 1065px;\n  max-height: calc(100% - 22px);\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n\n\nform[_ngcontent-%COMP%] {\n  width: 92%;\n  padding-top: 5px;\n}\n\n.options[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 120px !important;  \n}\n\n#year[_ngcontent-%COMP%] {\n    width: 60px !important;  \n  }\n\n  .mat-input-element{\n    margin-top: 1px !important; \n    width: 20px !important;\n    font-size: 12px !important;\n}\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  \n  position:absolute;\n  height: 45px;\n\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.navigation-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navigation-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 5px;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%] {\n  height: 35px;\n  font-size: 12px;\n}\n\n\n\n.line[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  width: 100%;\n  height: calc((100% - 110px) * 0.375);\n\n  top: 64px\n}\n\n\n\n.matrix[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  width: 100%;\n  height: calc((100% - 110px) * 0.625);\n\n  bottom: 45px\n}\n\n  .domain,   .tick line {\n  fill: none;\n  stroke: #afafaf;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n  .sort-icon {\n  fill: #afafaf !important;\n  shape-rendering: crispEdges !important;\n}\n\n  .curve {\n    fill: none;\n    stroke-width: 2;\n}\n\n  .xaxis-label,   .yaxis-label {\n  font-size: 14px;\n}\n\n  .legend-text {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXMvdmlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixjQUFjO0VBQ2QsNkJBQTZCOztFQUU3QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7SUFDekMseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBO0lBQ0ksc0JBQXNCO0VBQ3hCOztBQUdGO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTs7RUFFWixnQkFBZ0I7RUFDaEIsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0NBQW9DOztFQUVwQztBQUNGOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0NBQW9DOztFQUVwQztBQUNGOztBQUVBOztFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXMvdmlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICAvKiBsYXlvdXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiAxMDY1cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHgpO1xuXG4gIC8qIG1lbnUgc3R5bGUgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTApO1xuXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogTWVudSAqL1xuZm9ybSB7XG4gIHdpZHRoOiA5MiU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ub3B0aW9ucyAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50OyAgXG59XG5cblxuI3llYXIge1xuICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7ICBcbiAgfVxuICBcblxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudHtcbiAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDsgXG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbiAgXG4vKiBtYXRyaXggbmF2aWdhdGlvbiAqL1xuLm5hdmlnYXRpb24ge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG5cbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICBib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmF2aWdhdGlvbi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm5hdmlnYXRpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIExpbmUgY2hhcnQgKi9cbi5saW5lIHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC0gMTEwcHgpICogMC4zNzUpO1xuXG4gIHRvcDogNjRweFxufVxuXG4vKiBNYXRyaXggKi9cbi5tYXRyaXgge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoKDEwMCUgLSAxMTBweCkgKiAwLjYyNSk7XG5cbiAgYm90dG9tOiA0NXB4XG59XG5cbjo6bmctZGVlcCAuZG9tYWluLFxuOjpuZy1kZWVwIC50aWNrIGxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNhZmFmYWY7XG4gIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbn1cblxuOjpuZy1kZWVwIC5zb3J0LWljb24ge1xuICBmaWxsOiAjYWZhZmFmICFpbXBvcnRhbnQ7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmN1cnZlIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMjtcbn1cblxuOjpuZy1kZWVwIC54YXhpcy1sYWJlbCwgOjpuZy1kZWVwIC55YXhpcy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuOjpuZy1kZWVwIC5sZWdlbmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vis',
                templateUrl: './vis.component.html',
                styleUrls: ['./vis.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }, { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"] }]; }, { _matrixDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matrix', { static: true }]
        }], _lineDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['line', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/mapview/building-layer.ts":
/*!*******************************************!*\
  !*** ./src/app/mapview/building-layer.ts ***!
  \*******************************************/
/*! exports provided: BuildingLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingLayer", function() { return BuildingLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/mapview/layer.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/// <reference types="@types/webgl2" />





class BuildingLayer extends _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
    /**
     * The Vector Layer constructor
     * @param {string} id the layer id
     */
    constructor(id) {
        super(id);
        // primitive Ids
        this._features = {};
        // OpenGL data buffer
        this._glPositionBuffer = null;
        this._glIndexBuffer = null;
        this._glBuildingIdBuffer = null;
        // shader attribute id
        this._positionId = -1;
        this._buildingIdId = -1;
        // uniforms
        this._uModelViewMatrixId = -1;
        this._uProjectionMatrixId = -1;
        this._uWorldOrigin = -1;
        this._uGroundRes = -1;
        this._uEye = -1;
        // highlighted building ID id
        this._highlight = -1;
        // FBO for edge detection
        this._fboWidth = -1;
        this._fboHeight = -1;
        this._fbo = null;
        this._readfbo = null;
        this._normalTexture = null;
        this._depthTexture = null;
        this._positionTexture = null;
        this._idTexture = null;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the required shaders
            for (let id = 0; id < BuildingLayer.N_SHADER; id++) {
                // shaders url
                const vertUrl = `assets/shaders/building(${id}).vert`;
                const fragUrl = `assets/shaders/building(${id}).frag`;
                // Vertex shader program
                const vsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_3__["DataLoader"].getTextData(vertUrl);
                // Fragment shader program
                const fsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_3__["DataLoader"].getTextData(fragUrl);
                // load all shaders
                this.initShaderProgram(vsShader, fsShader, glContext);
            }
            // uniforms definition
            this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
            this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
            this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
            this._uGroundRes = glContext.getUniformLocation(this._shaderProgram[0], 'uGroundRes');
            this._uEye = glContext.getUniformLocation(this._shaderProgram[0], 'uEye');
            this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
            this._buildingIdId = glContext.getAttribLocation(this._shaderProgram[0], 'buildingId');
            // load message
            console.log(`#${BuildingLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
        });
    }
    /**
     * Data update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFeatures(glContext, data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // gets the feature of index id
            data = yield _data_api__WEBPACK_IMPORTED_MODULE_2__["DataApi"].getLayerFeature(this._layerId);
            // new feature found
            this._features = { 'position': [], 'ids': [], 'index': [] };
            // iterates over the geometries
            for (const feature of data.features) {
                this._features['position'] = feature.geometry.coordinates;
                this._features['ids'] = feature.geometry.ids;
                this._features['index'] = feature.geometry.indices;
            }
            // creates the buffer
            this.createBuffers(glContext);
            // SSAO noise
            this.generateNoise(glContext);
        });
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {number} x Mouse x position
     * @param {number} y Mouse y position
     */
    pick(glContext, x, y) {
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);
        const result = new Float32Array(4);
        glContext.readPixels(x, y, 1, 1, glContext.RGBA, glContext.FLOAT, result);
        if (result[0] > 0) {
            this._highlight = result[0];
        }
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        // invalid layers
        if (this._shaderProgram.length === 0 ||
            this._shaderProgram[0] === null ||
            this._shaderProgram[1] === null ||
            this._glPositionBuffer === null ||
            this._glIndexBuffer === null ||
            this._positionId < 0) {
            return;
        }
        // FBO setup
        this.setupFBO(glContext);
        // enables the depth test
        glContext.enable(glContext.DEPTH_TEST);
        glContext.depthFunc(glContext.LESS);
        // Picking
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
        this.renderBuildings(glContext);
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
        // SSAO render
        this.renderSSAO(glContext);
        // disables the depth buffer
        glContext.disable(glContext.DEPTH_TEST);
    }
    /**
     * Render the buildings for picking
     * @param glContext
     */
    renderBuildings(glContext) {
        // binds the shader program
        glContext.useProgram(this._shaderProgram[0]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]);
        // send eye and ground resolution
        const eye = this._camera.getEye();
        const gres = this._camera.getGroundResolution();
        glContext.uniform1f(this._uGroundRes, gres);
        glContext.uniform3f(this._uEye, eye[0], eye[1], eye[2]);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, BuildingLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the buildings id buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer);
        glContext.vertexAttribPointer(this._buildingIdId, 1, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._buildingIdId);
        glContext.clearColor(0.0, 0.0, 0.0, 1.0);
        // tslint:disable-next-line:no-bitwise
        glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
        // Tell WebGL which indices to use to index the vertices
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // draw the geometry
        glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
    }
    /**
     * Render the buildings using SSAO
     * @param glContext
     */
    renderSSAO(glContext) {
        glContext.enable(glContext.BLEND);
        glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
        glContext.useProgram(this._shaderProgram[1]);
        const normalLocation = glContext.getUniformLocation(this._shaderProgram[1], 'normalTex');
        const positionLocation = glContext.getUniformLocation(this._shaderProgram[1], 'positionTex');
        const IDLocation = glContext.getUniformLocation(this._shaderProgram[1], 'IDTex');
        const depthLocation = glContext.getUniformLocation(this._shaderProgram[1], 'depthTex');
        const matModelView = glContext.getUniformLocation(this._shaderProgram[1], 'matModelView');
        const uProjectionMatrix = glContext.getUniformLocation(this._shaderProgram[1], 'uProjectionMatrix');
        const highlightId = glContext.getUniformLocation(this._shaderProgram[1], 'highlightId');
        glContext.uniformMatrix4fv(matModelView, false, this._camera.getViewMatrix());
        glContext.uniformMatrix4fv(uProjectionMatrix, false, this._camera.getProjectionMatrix());
        glContext.uniform1f(highlightId, this._highlight);
        glContext.activeTexture(glContext.TEXTURE0);
        glContext.bindTexture(glContext.TEXTURE_2D, this._normalTexture);
        glContext.uniform1i(normalLocation, 0);
        glContext.activeTexture(glContext.TEXTURE1);
        glContext.bindTexture(glContext.TEXTURE_2D, this._positionTexture);
        glContext.uniform1i(positionLocation, 1);
        glContext.activeTexture(glContext.TEXTURE2);
        glContext.bindTexture(glContext.TEXTURE_2D, this._idTexture);
        glContext.uniform1i(IDLocation, 2);
        glContext.activeTexture(glContext.TEXTURE3);
        glContext.bindTexture(glContext.TEXTURE_2D, this._depthTexture);
        glContext.uniform1i(depthLocation, 3);
        glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4);
        glContext.disable(glContext.BLEND);
    }
    /**
     * setup FBO used for edge detection
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setupFBO(glContext) {
        if (this._fbo == null || this._readfbo == null) {
            // creates the buffers
            this._fbo = glContext.createFramebuffer();
            this._readfbo = glContext.createFramebuffer();
            this._depthTexture = glContext.createTexture();
            this._normalTexture = glContext.createTexture();
            this._positionTexture = glContext.createTexture();
            this._idTexture = glContext.createTexture();
            // check the availability of float buffers
            const ext = glContext.getExtension('EXT_color_buffer_float');
            if (!ext) {
                console.error('float buffer extension not supported!!!');
            }
        }
        // gets the viewport
        const viewPort = this._camera.getViewportResolution();
        if (this._fboWidth !== viewPort[0] || this._fboHeight !== viewPort[1]) {
            // update FBO size
            this._fboWidth = viewPort[0];
            this._fboHeight = viewPort[1];
            // normal texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._normalTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // position texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._positionTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // building ID texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._idTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // depth texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._depthTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.DEPTH_COMPONENT32F, this._fboWidth, this._fboHeight, 0, glContext.DEPTH_COMPONENT, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // fbo setup
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.DEPTH_ATTACHMENT, glContext.TEXTURE_2D, this._depthTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._normalTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._positionTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT2, glContext.TEXTURE_2D, this._idTexture, 0);
            glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1, glContext.COLOR_ATTACHMENT2]);
            // readfbo setup
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._idTexture, 0);
            // unbind fbos
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
        }
    }
    /**
     * Layer VBO creation signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createBuffers(glContext) {
        // Create a buffer for the positions.
        this._glPositionBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW);
        // Create a buffer for the indices.
        this._glIndexBuffer = glContext.createBuffer();
        // Select the index buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
        // Create a buffer for the positions.
        this._glBuildingIdBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['ids']), glContext.STATIC_DRAW);
    }
    generateNoise(glContext) {
        glContext.useProgram(this._shaderProgram[1]);
        const uNoiseLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uNoise');
        const uSamplesLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uSamples');
        const samples = [];
        const nSamples = 64;
        for (let i = 0; i < nSamples; i++) {
            const sample = gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].fromValues(Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, Math.random());
            gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].normalize(sample, sample);
            // weight samples towards center point
            const scale = i / nSamples;
            const s2 = scale * scale;
            gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].scale(sample, sample, 0.1 + 0.9 * s2);
            samples.push(sample[0]);
            samples.push(sample[1]);
            samples.push(sample[2]);
        }
        glContext.uniform3fv(uSamplesLocation, samples, 0, nSamples * 3);
        const noise = [];
        const noiseSize = 256;
        for (let i = 0; i < noiseSize; i++) {
            const n = gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].fromValues(Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, 0.0);
            noise.push(n[0]);
            noise.push(n[1]);
            noise.push(n[2]);
        }
        glContext.uniform3fv(uNoiseLocation, noise, 0, noiseSize * 3);
    }
}
// number of coordinates per vertex
BuildingLayer.COORDS = 3;
// number of shaders
BuildingLayer.N_SHADER = 2;


/***/ }),

/***/ "./src/app/mapview/camera.ts":
/*!***********************************!*\
  !*** ./src/app/mapview/camera.ts ***!
  \***********************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _geoutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoutils */ "./src/app/mapview/geoutils.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");



/**
 * 3D Camera representation
 */
class Camera {
    /**
     * The Camera constructor
     */
    constructor(wx, wy, wz) {
        // View parameters
        this.wOrigin = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec2"].create();
        this.wEye = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        this.wEyeDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        this.wLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        this.wUp = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        this.fovy = 45 * Math.PI / 180.0;
        this.mProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create();
        this.mViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create();
        this.mModelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create();
        this.groundRes = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].groundResolution(wx, wy, 0);
        // z-values start from here are in meters
        this.wNear = 10 / this.groundRes;
        this.wFar = 1e9 / this.groundRes;
        // const projectedCenter = GeoUtils.latLng2Coord(wx, wy);
        this.wOrigin = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec2"].fromValues(wx, wy);
        const projectedCenter = [0, 0];
        this.wLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(projectedCenter[0], projectedCenter[1], 0);
        this.wEye = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(projectedCenter[0], projectedCenter[1], 10000); // TODO: calculate the camera height instead of hardcoding
        this.zScaling(1 / this.groundRes);
        // meter is not longer used in the remaining code
        this.wUp = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 1, 0);
        //
        this.status = _constants__WEBPACK_IMPORTED_MODULE_2__["CameraStatus"].Camera3D;
    }
    getCameraStatus() {
        return this.status;
    }
    setCameraStatus(status) {
        this.status = status;
        if (this.status === _constants__WEBPACK_IMPORTED_MODULE_2__["CameraStatus"].Camera2D) {
            // set parameters
            this.wLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(this.wEye[0], this.wEye[1], 0);
            // meter is not longer used in the remaining code
            this.wUp = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 1, 0);
            this.wEyeDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, -1);
            this.wEyeLength = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].length(this.wEyeDir);
        }
    }
    getProjectionMatrix() {
        return this.mProjectionMatrix;
    }
    getViewMatrix() {
        return this.mViewMatrix;
    }
    getModelViewMatrix() {
        const modelViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].mul(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create(), this.mViewMatrix, this.mModelMatrix); // modelView matrix
        return modelViewMatrix;
    }
    getWorldOrigin() {
        return this.wOrigin;
    }
    getEye() {
        return this.wEye;
    }
    getGroundResolution() {
        return this.groundRes;
    }
    setViewportResolution(x, y) {
        this.viewportWidth = x;
        this.viewportHeight = y;
    }
    getViewportResolution() {
        return [
            this.viewportWidth,
            this.viewportHeight
        ];
    }
    updateEyeDirAndLen() {
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].sub(this.wEyeDir, this.wLookAt, this.wEye);
        this.wEyeLength = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].length(this.wEyeDir);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wEyeDir, this.wEyeDir);
    }
    zScaling(scale) {
        this.wEye[2] = this.wEye[2] * scale;
        this.wLookAt[2] = this.wLookAt[2] * scale;
        this.updateEyeDirAndLen();
    }
    zoom(delta, x, y) {
        delta = delta < 0 ? 0.003 : -0.003;
        const dir = this.screenCoordToWorldDir(x, y);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wEye, this.wEye, dir, delta); // this.wEye += dir * delta;
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
    }
    translate(dx, dy) {
        const scale = this.wEye[2];
        const X = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(X, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(X, this.wEyeDir, this.wUp));
        // D = X * dx * scale + this.wUp * dy * scale;
        const D = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), X, dx * scale), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, dy * scale));
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(this.wEye, this.wEye, D);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
    }
    yaw(delta) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].rotateZ(this.wEyeDir, this.wEyeDir, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, 0), delta);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].rotateZ(this.wUp, this.wUp, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, 0), delta);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
    }
    pitch(delta) {
        delta = -delta;
        // this.wEyeDir = this.wUp * sin(delta) + this.wEyeDir * cos(delta);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(this.wEyeDir, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, Math.sin(delta)), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, Math.cos(delta)));
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wEyeDir, this.wEyeDir);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(this.wUp, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, this.wUp), this.wEyeDir);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wUp, this.wUp);
    }
    update() {
        this.mModelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].fromScaling(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create(), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(1, 1, 1 / this.groundRes)); // model matrix
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].lookAt(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp); // view matrix
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].perspective(this.mProjectionMatrix, this.fovy, 1, this.wNear, this.wFar); // TODO: get the aspect ratio from canvas
    }
    screenCoordToWorldDir(x, y) {
        const wRight = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(wRight, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(wRight, this.wEyeDir, this.wUp));
        const upOffset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, Math.tan(this.fovy / 2) * (y - 0.5) * 2);
        const rightOffset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), wRight, Math.tan(this.fovy / 2) * (x - 0.5) * 2);
        const offset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), upOffset, rightOffset);
        const dir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, offset);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(dir, dir);
        return dir;
    }
    screenCoordToLatLng(x, y) {
        const dir = this.screenCoordToWorldDir(x, y);
        const t = -this.wEye[2] / dir[2];
        if (t > 0) {
            const intersectPoint = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEye, dir, t);
            const originCoord = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].latLng2Coord(this.wOrigin[0], this.wOrigin[1]);
            const latLng = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].coord2LatLng(intersectPoint[0] + originCoord[0], intersectPoint[1] + originCoord[1]);
            console.log(latLng);
            return latLng;
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/mapview/colormap.ts":
/*!*************************************!*\
  !*** ./src/app/mapview/colormap.ts ***!
  \*************************************/
/*! exports provided: ColorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMap", function() { return ColorMap; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");


class ColorMap {
    /**
      * Color brewer sequential red
      */
    static sequentialRed(reverse = false, size = 515) {
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateReds"]).domain([-1, 0, 1]);
        const colors = [];
        for (let id = 0; id < size; id++) {
            const val = -1 + id * 2 / (size - 1);
            const color = cscale(val).match(/\d+/g).map(d => +d);
            colors.push(...color);
            colors.push(255);
        }
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    /**
     * Color brewer sequential blue
     */
    static sequentialBlue(reverse = false, size = 515) {
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateBlues"]).domain([-1, 0, 1]);
        const colors = [];
        for (let id = 0; id < size; id++) {
            const val = -1 + id * 2 / (size - 1);
            const color = cscale(val).match(/\d+/g).map(d => +d);
            colors.push(...color);
            colors.push(255);
        }
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    /**
     * Color brewer diverging blue and red
     */
    static divergingRedYelBlue(reverse = false, size = 515) {
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdYlBu"]).domain([-1, 0, 1]);
        const colors = [];
        for (let id = 0; id < size; id++) {
            const val = -1 + id * 2 / (size - 1);
            const color = cscale(val).match(/\d+/g).map(d => +d);
            colors.push(...color);
            colors.push(255);
        }
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    /**
     * Color brewer diverging blue and red
     */
    static divergingRedBlue(reverse = false, size = 515) {
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]).domain([-1, 0, 1]);
        const colors = [];
        for (let id = 0; id < size; id++) {
            const val = -1 + id * 2 / (size - 1);
            const color = cscale(val).match(/\d+/g).map(d => +d);
            colors.push(...color);
            colors.push(255);
        }
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    /**
     * Color brewer diverging blue and red
     */
    static divergingGreenBrown(reverse = false, size = 515) {
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateGnBu"]).domain([-1, 0, 1]);
        const colors = [];
        for (let id = 0; id < size; id++) {
            const val = -1 + id * 2 / (size - 1);
            const color = cscale(val).match(/\d+/g).map(d => +d);
            colors.push(...color);
            colors.push(255);
        }
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    /**
     * Color brewer qualitative colors
     */
    static qualitative(reverse = false) {
        // TODO: FIX
        const colors = [
            166, 206, 227, 255,
            178, 223, 138, 255,
            251, 154, 153, 255,
            253, 191, 111, 255,
            202, 178, 214, 255,
            31, 120, 180, 255,
            51, 160, 44, 255,
            227, 26, 28, 255,
            255, 127, 0, 255,
        ];
        if (reverse) {
            return colors.reverse();
        }
        else {
            return colors;
        }
    }
    static getColorMap(color, reverse = false) {
        switch (color) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].SEQUENTIAL_RED_MAP:
                return ColorMap.sequentialRed(reverse);
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].SEQUENTIAL_BLUE_MAP:
                return ColorMap.sequentialBlue(reverse);
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].DIVERGING_RED_BLUE_MAP:
                return ColorMap.divergingRedBlue(reverse);
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].DIVERGING_RED_YEL_BLUE_MAP:
                return ColorMap.divergingRedYelBlue(reverse);
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].DIVERGING_GREEN_BROWN_MAP:
                return ColorMap.divergingGreenBrown(reverse);
            case _constants__WEBPACK_IMPORTED_MODULE_1__["ColorMapType"].QUALITATIVE_MAP:
                return ColorMap.qualitative(reverse);
            default:
                return ColorMap.sequentialRed(reverse);
        }
    }
    static computeScalarValue(val, min, max, neutral = 0) {
        let sValue = null;
        if ((min < neutral && max < neutral) || (min > neutral && max > neutral)) {
            neutral = (min + max) * 0.5;
        }
        if (val < neutral) {
            sValue = (val - min) / (neutral - min) * 0.5;
        }
        else {
            sValue = 0.5 + (val - neutral) / (max - neutral) * 0.5;
        }
        if (val === neutral && neutral === min && min === max) {
            return 0.5;
        }
        return sValue;
    }
}


/***/ }),

/***/ "./src/app/mapview/constants.ts":
/*!**************************************!*\
  !*** ./src/app/mapview/constants.ts ***!
  \**************************************/
/*! exports provided: LayerTypes, ColorMapType, MapViewStatus, CameraStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerTypes", function() { return LayerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMapType", function() { return ColorMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewStatus", function() { return MapViewStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraStatus", function() { return CameraStatus; });
/**
 * Layer types definition
 */
class LayerTypes {
}
LayerTypes.PHYSICAL_LAYER = 'physical';
LayerTypes.BUILDING_LAYER = 'building';
LayerTypes.POLYGON_LAYER = 'polygon';
LayerTypes.HEATMAP_LAYER = 'heatmap';
LayerTypes.POINT_LAYER = 'point';
LayerTypes.LINE_LAYER = 'line';
/**
 * Colormap types definition
 */
class ColorMapType {
}
ColorMapType.SEQUENTIAL_RED_MAP = 'sequential_red';
ColorMapType.SEQUENTIAL_BLUE_MAP = 'sequential_blue';
ColorMapType.DIVERGING_RED_BLUE_MAP = 'diverging_blue_red';
ColorMapType.DIVERGING_RED_YEL_BLUE_MAP = 'diverging_red_yellow_blue';
ColorMapType.DIVERGING_GREEN_BROWN_MAP = 'diverging_green_brown';
ColorMapType.QUALITATIVE_MAP = 'qualitative';
/**
 * Mapview interaction status
 */
class MapViewStatus {
}
MapViewStatus.IDLE = 0;
MapViewStatus.DRAG = 1;
/**
 * Camera status
 */
class CameraStatus {
}
CameraStatus.Camera2D = 0;
CameraStatus.Camera3D = 1;


/***/ }),

/***/ "./src/app/mapview/data-api.ts":
/*!*************************************!*\
  !*** ./src/app/mapview/data-api.ts ***!
  \*************************************/
/*! exports provided: DataApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApi", function() { return DataApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



class DataApi {
    /**
     * Load all layers
     * @returns {Promise<any>} The load index promise
     */
    static getMapIndex(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/assets/${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder}/${index}`;
            console.log(url);
            const datasets = yield _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);
            return datasets;
        });
    }
    /**
     * Load the camera
     * @returns {Promise<any>} The load camera promise
     */
    static getCameraParameters(camera) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/assets/${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder}/${camera}`;
            console.log(url);
            const params = yield _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);
            return params;
        });
    }
    /**
     * Gets the layer data
     * @param {Promise<any>} layerId the layer data
     */
    static getLayerFeature(layerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/assets/${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder}/${layerId}.json`;
            console.log(url);
            const feature = yield _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);
            return feature;
        });
    }
    /**
     * Gets the layer function
     * @param {Promise<any>} layerId the layer data
     */
    static getLayerFunction(layerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/assets/${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder}/${layerId}.json`;
            console.log(url);
            const feature = yield _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);
            return feature;
        });
    }
}


/***/ }),

/***/ "./src/app/mapview/data-loader.ts":
/*!****************************************!*\
  !*** ./src/app/mapview/data-loader.ts ***!
  \****************************************/
/*! exports provided: DataLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoader", function() { return DataLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DataLoader {
    /**
     * Loads a json file
     * @param {string} url json file url
     * @returns {Promise<any>} The load json promise
     */
    static getJsonData(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Return a new promise.
            const response = yield fetch(url);
            const json = yield response.json();
            return json;
        });
    }
    /**
     * Loads a text file
     * @param {string} url text file url
     * @returns {Promise<string>} The load text promise
     */
    static getTextData(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Return a new promise.
            const response = yield fetch(url);
            const txt = yield response.text();
            return txt;
        });
    }
}


/***/ }),

/***/ "./src/app/mapview/geoutils.ts":
/*!*************************************!*\
  !*** ./src/app/mapview/geoutils.ts ***!
  \*************************************/
/*! exports provided: GeoUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoUtils", function() { return GeoUtils; });
class GeoUtils {
    /**
     * Converts from lat, lng to world coordinates
     * @param {number} latitude the latitude of the point
     * @param {number} longitude the longitude of the point
     * @returns {number[]} the point in world coordinates
     */
    static latLng2Coord(latitude, longitude) {
        const pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
        const pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
        const sinLatitude = Math.sin(latitude * pi_180);
        const pixelY = 256.0 - ((0.5 - Math.log((1.0 + sinLatitude) / (1.0 - sinLatitude)) / (pi_4)) * 256.0);
        const pixelX = ((longitude + 180.0) / 360.0) * 256.0;
        return [pixelX, pixelY];
    }
    /**
     * Converts from world coordinates to lat, lng
     * @param {number} x the x coordinate of the point
     * @param {number} y the y coordinate of the point
     * @returns {number[]} the point in lat, lng
     */
    static coord2LatLng(x, y) {
        const pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
        const pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
        const longitude = ((x / 256.0) * 360.0) - 180.0;
        let latitude = (256.0 - y) / 256.0;
        latitude = Math.exp((0.5 - latitude) * pi_4);
        latitude = (latitude - 1.0) / (1.0 + latitude);
        latitude = Math.asin(latitude) / pi_180;
        return [latitude, longitude];
    }
    /**
     * Computes the ground resolution
     * @param {number} lat the latitude value
     * @param {number} lng the longitude value
     * @param {number} zoom the zoom leevl
     */
    static groundResolution(lat, lng, zoom) {
        return Math.cos(lat * Math.PI / 180) * 6378137 * 2 * Math.PI / Math.pow(2, 8 + zoom);
    }
}


/***/ }),

/***/ "./src/app/mapview/heatmap-layer.ts":
/*!******************************************!*\
  !*** ./src/app/mapview/heatmap-layer.ts ***!
  \******************************************/
/*! exports provided: HeatmapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/mapview/layer.ts");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");
/* harmony import */ var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colormap */ "./src/app/mapview/colormap.ts");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stats-lite */ "./node_modules/stats-lite/stats.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stats_lite__WEBPACK_IMPORTED_MODULE_6__);
/// <reference types="@types/webgl2" />







class HeatmapLayer extends _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
    /**
     * The Vector Layer constructor
     * @param {string} id the layer id
     */
    constructor(id) {
        super(id);
        // primitive Ids
        this._features = {};
        // OpenGL data buffer
        this._glPositionBuffer = null;
        this._glTexCoordsBuffer = null;
        this._glIndexBuffer = null;
        this._glColorMapTex = null;
        this._glFunctionTex = null;
        // function texture resolution
        this._functionResX = 0;
        this._functionResY = 0;
        // shader attribute id
        this._positionId = -1;
        this._texCoordsId = -1;
        // transformation uniforms
        this._uModelViewMatrixId = -1;
        this._uProjectionMatrixId = -1;
        this._uWorldOriginId = -1;
        // color map uniform
        this._uColorMapId = -1;
        this._uFunctionId = -1;
        this._visible = false;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the shaders
            for (let id = 0; id < HeatmapLayer.N_SHADER; id++) {
                // shaders url
                const vertUrl = `assets/shaders/heatmap(${id}).vert`;
                const fragUrl = `assets/shaders/heatmap(${id}).frag`;
                // Vertex shader program
                const vsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);
                // Fragment shader program
                const fsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);
                // load all shaders
                this.initShaderProgram(vsShader, fsShader, glContext);
            }
            // vertex data on the shader
            this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
            this._texCoordsId = glContext.getAttribLocation(this._shaderProgram[0], 'vertTexCoords');
            // transformation uniforms on the shader
            this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
            this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
            this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
            // colorMap texture
            this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');
            this._uFunctionId = glContext.getUniformLocation(this._shaderProgram[0], 'uFunction');
            // load message
            console.log(`#${HeatmapLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
        });
    }
    /**
     * Data update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFeatures(glContext, data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data === null) {
                // gets the feature of index id
                data = yield _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);
            }
            // new feature found
            this._features = { 'position': [], 'texCoords': [], 'scalar': [], 'index': [] };
            // grid corners
            const corners = data.coordinates;
            // quad geometry
            const position = [
                corners[0][0], corners[0][1],
                corners[1][0], corners[0][1],
                corners[1][0], corners[1][1],
                corners[0][0], corners[1][1],
            ];
            // build the indices
            const indices = [0, 1, 3, 1, 2, 3];
            // texture coordinates
            const texCoords = [
                0, 0, 0, 1,
                1, 1, 1, 0,
            ];
            // resolution
            this._functionResX = data.resX;
            this._functionResY = data.resY;
            // add to the feature
            this._features['position'] = position;
            this._features['texCoords'] = texCoords;
            // scalar function
            const scalar = data.grid;
            const noNull = scalar.filter(d => d > 0);
            const min = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.15);
            const max = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.95);
            // add to the feature
            this._features['scalar'] = scalar.map(val => {
                return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
            });
            this._features['index'] = indices;
            // creates the buffer
            this.createBuffers(glContext);
            // creates the scalar data vbo
            this.createFunctionTexture(glContext);
            // creates the color map
            this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].SEQUENTIAL_RED_MAP, false);
        });
    }
    /**
     * Function update signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    updateFunction(glContext, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // resolution
            this._functionResX = data.resX;
            this._functionResY = data.resY;
            // scalar function
            const scalar = data.grid;
            const noNull = scalar.filter(d => d > 0);
            const min = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.15);
            const max = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.95);
            // add to the feature
            this._features['scalar'] = scalar.map(val => {
                return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
            });
            // creates the scalar data vbo
            this.createFunctionTexture(glContext);
        });
    }
    /**
     * Changes the color map
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {ColorMapType} cMap Color Map
     */
    updateColorMap(glContext, cMap) {
        // creates the color map
        this.createColorMapTexture(glContext, cMap, false);
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        // invalid layers
        if (this._shaderProgram.length === 0 ||
            this._shaderProgram[0] === null ||
            this._glPositionBuffer === null ||
            this._glTexCoordsBuffer === null ||
            this._glIndexBuffer === null ||
            this._glColorMapTex === null ||
            this._glFunctionTex === null ||
            this._positionId < 0 ||
            this._texCoordsId < 0) {
            return;
        }
        // sends the uniforms
        this.setUniforms(glContext);
        // bending
        glContext.enable(glContext.BLEND);
        glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer);
        glContext.vertexAttribPointer(this._texCoordsId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._texCoordsId);
        // Tell WebGL which indices to use to index the vertices
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // Tell WebGL we want to affect texture unit 0
        glContext.activeTexture(glContext.TEXTURE0);
        // Bind the texture to texture unit 0
        glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex);
        // Tell WebGL we want to affect texture unit 1
        glContext.activeTexture(glContext.TEXTURE1);
        // Bind the texture to texture unit 1
        glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
        // binds the shader program
        glContext.useProgram(this._shaderProgram[0]);
        // draw the geometry
        glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
        // disable blend
        glContext.disable(glContext.BLEND);
    }
    /**
     * Send uniforms to the shader
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setUniforms(glContext) {
        if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
        }
        // selects the shader
        glContext.useProgram(this._shaderProgram[0]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);
        // functions texture
        glContext.uniform1i(this._uFunctionId, 0);
        // color map
        glContext.uniform1i(this._uColorMapId, 1);
    }
    /**
     * Layer VBO creation signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createBuffers(glContext) {
        // Create a buffer for the positions.
        this._glPositionBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW);
        // Create a buffer for the positions.
        this._glTexCoordsBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['texCoords']), glContext.STATIC_DRAW);
        // Create a buffer for the indices.
        this._glIndexBuffer = glContext.createBuffer();
        // Select the index buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
    }
    /**
     * Scalar data vbo creation
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createFunctionTexture(glContext) {
        // gl color map texture
        if (this._glFunctionTex === null) {
            this._glFunctionTex = glContext.createTexture();
        }
        // send the color map
        glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex);
        glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.R16F, this._functionResX, this._functionResY, 0, glContext.RED, glContext.FLOAT, new Float32Array(this._features['scalar']));
        // texture resize
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);
        // Prevents s-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        // Prevents t-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
    }
    /**
   * Color map texture creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} color Selected color map
   * @param {boolean} get the reverse color map
   */
    createColorMapTexture(glContext, color, reverse = false) {
        // gets the color map
        const cmap = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse);
        // gl color map texture
        if (this._glColorMapTex === null) {
            this._glColorMapTex = glContext.createTexture();
        }
        // send the color map
        glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
        glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, cmap.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(cmap));
        // texture resize
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);
        // Prevents s-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        // Prevents t-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
    }
}
// number of coordinates per vertex
HeatmapLayer.COORDS = 2;
// number of shaders
HeatmapLayer.N_SHADER = 1;


/***/ }),

/***/ "./src/app/mapview/key-events.ts":
/*!***************************************!*\
  !*** ./src/app/mapview/key-events.ts ***!
  \***************************************/
/*! exports provided: KeyEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyEvents", function() { return KeyEvents; });
class KeyEvents {
    /**
     * Mouse events constructor
     * @param map the map to bind the events
     */
    constructor(map, callbacks = null) {
        this._map = map;
        this._callbacks = callbacks;
    }
    bindEvents() {
        // sets the key listeners
        window.addEventListener('keydown', this.keyDown.bind(this), false);
    }
    /**
    * Handles key down event
    */
    keyDown(event) {
        // key value
        const key = +event.key;
        const layers = this._map.layerManager.layers;
        // number key
        // if (!isNaN(key) && key < layers.length) {
        //   // makes in visible
        //   const isVisible = layers[key].visible;
        //   layers[key].visible = !isVisible;
        //   // render
        //   this._map.render();
        // }
        // change camera mode
        if (event.key === 'd') {
            this._map.toggleCameraMode();
        }
    }
}


/***/ }),

/***/ "./src/app/mapview/layer-manager.ts":
/*!******************************************!*\
  !*** ./src/app/mapview/layer-manager.ts ***!
  \******************************************/
/*! exports provided: LayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");
/* harmony import */ var _building_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-layer */ "./src/app/mapview/building-layer.ts");
/* harmony import */ var _physical_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physical-layer */ "./src/app/mapview/physical-layer.ts");
/* harmony import */ var _polygon_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polygon-layer */ "./src/app/mapview/polygon-layer.ts");
/* harmony import */ var _heatmap_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heatmap-layer */ "./src/app/mapview/heatmap-layer.ts");
/* harmony import */ var _point_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point-layer */ "./src/app/mapview/point-layer.ts");
// data loader


// layer types





class LayerManager {
    /**
     * Layer manager constructor
     * @param {string} indexUrl Layers index file
     */
    constructor(indexUrl) {
        // Loaded layers
        this._layers = [];
        this._index = indexUrl;
    }
    /**
     * Layers vector accessor
     * @returns {Layer[]} The array of layers
     */
    get layers() {
        return this._layers;
    }
    /*
     * Load all layers
     * @returns {Promise<any>} The load index promise
     */
    loadIndex() {
        return _data_loader__WEBPACK_IMPORTED_MODULE_0__["DataLoader"].getJsonData(this._index).then((layers) => {
            return layers;
        });
    }
    /**
    * Creates a layer from the server
    * @param {string} layerType layer type
    * @param {string} layerId layer identifier
    * @returns {Promise<Layer>} The load layer promise
    */
    createLayer(layerType, layerId) {
        // loaded layer
        let layer = null;
        // loads based on type
        switch (layerType) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["LayerTypes"].PHYSICAL_LAYER:
                layer = new _physical_layer__WEBPACK_IMPORTED_MODULE_3__["PhysicalLayer"](layerId);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["LayerTypes"].BUILDING_LAYER:
                layer = new _building_layer__WEBPACK_IMPORTED_MODULE_2__["BuildingLayer"](layerId);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["LayerTypes"].POLYGON_LAYER:
                layer = new _polygon_layer__WEBPACK_IMPORTED_MODULE_4__["PolygonLayer"](layerId);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["LayerTypes"].HEATMAP_LAYER:
                layer = new _heatmap_layer__WEBPACK_IMPORTED_MODULE_5__["HeatmapLayer"](layerId);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["LayerTypes"].POINT_LAYER:
                layer = new _point_layer__WEBPACK_IMPORTED_MODULE_6__["PointLayer"](layerId);
                break;
            default:
                console.error(`File ${layerId}.json has an unknown layer type: {layerType}.`);
                break;
        }
        // adds the the list of layers
        this._layers.push(layer);
        // returns the layer
        return layer;
    }
    getLayer(layerId) {
        for (const layer of this._layers) {
            if (layerId === layer.layerId) {
                return layer;
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/mapview/layer.ts":
/*!**********************************!*\
  !*** ./src/app/mapview/layer.ts ***!
  \**********************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/// <reference types="@types/webgl2" />
class Layer {
    /**
     * Layer constructor
     * @param {string} id The Mapview layer Identifier
     */
    constructor(id) {
        // layer's shader
        this._shaderProgram = [];
        this._layerId = id;
        this._visible = true;
        this._selectable = false;
    }
    /**
     * Accessor for the layer id
     */
    get layerId() {
        return this._layerId;
    }
    /**
     * Returns if the layers is visible
     */
    get visible() {
        return this._visible;
    }
    /**
     * Sets the visibility
     */
    set visible(visible) {
        this._visible = visible;
    }
    /**
     * Returns if the layers is selectable
     */
    get selectable() {
        return this._selectable;
    }
    /**
     * Sets the selection
     */
    set selectable(selectable) {
        this._selectable = selectable;
    }
    /**
     * Sends the camera to the layer
     */
    set camera(camera) {
        this._camera = camera;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Data update signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param data layer data
     */
    updateFeatures(glContext, data = null) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Function update signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param data layer function
     */
    updateFunction(glContext, data) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Function update signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param data layer function
     */
    cleanFunction(glContext) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Changes the color map
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {ColorMapType} cMap Color Map
     */
    updateColorMap(glContext, cMap) { }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Layer picking function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    pick(glContext, x, y) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Layer picking function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    pickId() {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Layer picking function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setPickId(id = null) {
        throw new Error('Each layer has to implement it!');
    }
    /**
     * Inits the layer's shader program
     * @param {string} vsSource Vertex shader source
     * @param {string} fsSource Fragment shader source
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    initShaderProgram(vsSource, fsSource, glContext) {
        // load the shaders
        const vertexShader = this.buildShader(glContext.VERTEX_SHADER, vsSource, glContext);
        const fragmentShader = this.buildShader(glContext.FRAGMENT_SHADER, fsSource, glContext);
        // Create the shader program
        const shader = glContext.createProgram();
        glContext.attachShader(shader, vertexShader);
        glContext.attachShader(shader, fragmentShader);
        glContext.linkProgram(shader);
        // If creating the shader program failed, alert
        if (!glContext.getProgramParameter(shader, glContext.LINK_STATUS)) {
            throw new Error('Unable to initialize the shader program: ' + glContext.getProgramInfoLog(shader));
        }
        // stores the shader
        this._shaderProgram.push(shader);
    }
    /**
     * Builds the layer shader
     * @param {string} type The shader type
     * @param {string} source The shader source string
     * @param {WebGL2RenderingContext} glContext The WebGL context
     * @returns {WebGLShader} The shader object
     */
    buildShader(type, source, glContext) {
        // creates the shader
        const shader = glContext.createShader(type);
        // Send the source to the shader object
        glContext.shaderSource(shader, source);
        // Compile the shader program
        glContext.compileShader(shader);
        // See if it compiled successfully
        if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ');
            console.error(source);
            console.error(glContext.getShaderInfoLog(shader));
            glContext.deleteShader(shader);
            throw new Error('Unable to load the shader');
        }
        return shader;
    }
}


/***/ }),

/***/ "./src/app/mapview/mapview.ts":
/*!************************************!*\
  !*** ./src/app/mapview/mapview.ts ***!
  \************************************/
/*! exports provided: MapView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapView", function() { return MapView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/* harmony import */ var _layer_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layer-manager */ "./src/app/mapview/layer-manager.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera */ "./src/app/mapview/camera.ts");
/* harmony import */ var _key_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-events */ "./src/app/mapview/key-events.ts");
/* harmony import */ var _mouse_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mouse-events */ "./src/app/mapview/mouse-events.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");

/// <reference types="@types/webgl2" />






class MapView {
    /**
     * MapView constructor
     * @param {HTMLElement} mapDiv The html element to hold the map.
     */
    constructor(mapDiv, callbacks = null) {
        // Map div
        this._mapDiv = null;
        // Html canvas
        this._canvas = null;
        // WebGL context
        this._glContext = null;
        // Layer manager object
        this._layerManager = null;
        // stores the map div
        this._mapDiv = mapDiv;
        // creates the new canvas element
        this._canvas = document.createElement('canvas');
        // gets the webgl context
        this._glContext = this._canvas.getContext('webgl2');
        // appends the canvas
        this._mapDiv.appendChild(this._canvas);
        // callbacks
        this._callbacks = callbacks;
        // inits the camera
        this.initCamera('camera.json').then(() => {
            // resizes the canvas
            this.resize();
        });
        // inits the mouse events
        this.initMouseEvents();
        // inits the mouse events
        this.initKeyboardEvents();
        // bind events
        this.initWindowEvents();
    }
    /**
     * gets the canvas element
     */
    get canvas() {
        return this._canvas;
    }
    /**
     * gets the map div
     */
    get div() {
        return this._mapDiv;
    }
    /**
     * gets the map div
     */
    get glContext() {
        return this._glContext;
    }
    /**
     * gets the camera object
     */
    get camera() {
        return this._camera;
    }
    /**
     * gets the layers
     */
    get layerManager() {
        return this._layerManager;
    }
    /**
     * Toggle Camera Mode
     */
    toggleCameraMode() {
        const currentCameraStatus = this._camera.getCameraStatus();
        if (currentCameraStatus === _constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera2D) {
            this._camera.setCameraStatus(_constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera3D);
        }
        else {
            this._camera.setCameraStatus(_constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera2D);
        }
        this.render();
    }
    initCamera(camera) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the index file and its layers
            const params = yield _data_api__WEBPACK_IMPORTED_MODULE_1__["DataApi"].getMapIndex(camera);
            // sets the camera
            this._camera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"](params.coordinates[0][0], params.coordinates[0][1], params.properties.zoom);
            // renders the scene
            this.render();
        });
    }
    /**
     * Map layers initialization
     */
    initLayers(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // creates the manager
            this._layerManager = new _layer_manager__WEBPACK_IMPORTED_MODULE_2__["LayerManager"](index);
            // load the index file and its layers
            const data = yield _data_api__WEBPACK_IMPORTED_MODULE_1__["DataApi"].getMapIndex(index);
            // loop over the index file
            for (const element of data) {
                // skips the layer
                if ('skip' in element && element['skip']) {
                    continue;
                }
                // loads the layers data
                const layer = this._layerManager.createLayer(element['type'], element['id']);
                // layer configuration
                this.layerConfig(layer, element);
                // loads the shaders
                yield layer.loadShaders(this._glContext);
                // update the features
                yield layer.updateFeatures(this._glContext);
                this.render();
                if (element['type'] === 'building') {
                    this._buildingLayer = layer;
                }
            }
        });
    }
    /**
     * Map layers configuration
     */
    layerConfig(layer, config) {
        // color map
        if (config['color'] !== undefined) {
            layer.updateColorMap(this._glContext, config['color']);
        }
        else {
            layer.updateColorMap(this._glContext, _constants__WEBPACK_IMPORTED_MODULE_6__["ColorMapType"].SEQUENTIAL_RED_MAP);
        }
        // selectable
        if (config['selectable'] !== undefined) {
            layer.selectable = config['selectable'];
        }
        else {
            layer.selectable = false;
        }
        // visibility
        if (config['visible'] !== undefined) {
            layer.visible = config['visible'];
        }
        else {
            layer.visible = true;
        }
    }
    /**
     * Add layer geometry and function function
     */
    addLayer(layerType, layerId, data, config = { visible: true, selectable: false }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // loads the layers data
            const layer = this._layerManager.createLayer(layerType, layerId);
            // loads the shaders
            yield layer.loadShaders(this._glContext);
            // update the features
            yield layer.updateFeatures(this._glContext, data);
            // make visible
            layer.visible = config.visible;
            layer.selectable = config.selectable;
            // render
            this.render();
        });
    }
    /**
     * Delete layer function
     */
    delLayer(layerId) {
        let pos = -1;
        for (let lId = 0; lId < this._layerManager.layers.length; lId++) {
            // gets the layer
            const layer = this._layerManager.layers[lId];
            // check for the layer
            if (layer.layerId !== layerId) {
                continue;
            }
            // id found
            pos = lId;
            break;
        }
        if (pos > -1) {
            // removes the layer
            this._layerManager.layers.splice(pos, 1);
        }
    }
    /**
     * update layer function function
     */
    updateLayerFunction(layerId, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // searches the layer
            let layer = null;
            for (const lay of this._layerManager.layers) {
                if (lay.layerId === layerId) {
                    layer = lay;
                    break;
                }
            }
            // not found
            if (layer === null) {
                return;
            }
            // update the function
            yield layer.updateFunction(this._glContext, data);
            // make it visible
            layer.visible = true;
            // render
            this.render();
        });
    }
    /**
     * cleans the layer function
     */
    cleanLayerFunction(layerId) {
        // searches the layer
        let layer = null;
        for (const lay of this._layerManager.layers) {
            if (lay.layerId === layerId) {
                layer = lay;
                break;
            }
        }
        // not found
        if (layer === null) {
            return;
        }
        // update the function
        layer.cleanFunction(this._glContext);
        // make it visible
        layer.visible = true;
        // render
        this.render();
    }
    /**
     * Inits the mouse events
     */
    initMouseEvents() {
        // creates the mouse events manager
        this._mouse = new _mouse_events__WEBPACK_IMPORTED_MODULE_5__["MouseEvents"](this, this._callbacks);
        // binds the mouse events
        this._mouse.bindEvents();
    }
    /**
     * Inits the mouse events
     */
    initKeyboardEvents() {
        // creates the mouse events manager
        this._keyboard = new _key_events__WEBPACK_IMPORTED_MODULE_4__["KeyEvents"](this, this._callbacks);
        // binds the mouse events
        this._keyboard.bindEvents();
    }
    /**
     * inits the window events
     */
    initWindowEvents() {
        // resize listener
        window.addEventListener('resize', () => {
            // resizes the canvas
            this.resize();
            this.render();
        });
    }
    pick(layerId, elementId) {
        const layer = this._layerManager.getLayer(layerId);
        if (layer) {
            layer.setPickId(elementId);
            this.render();
        }
    }
    /**
     * Renders the map
     */
    render() {
        if (!this._camera) {
            return;
        }
        // sky
        this._glContext.clearColor(0.7451, 0.8235, 0.8431, 1.0);
        // tslint:disable-next-line:no-bitwise
        this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT);
        // updates the camera
        this._camera.update();
        // render the layers
        for (const layer of this._layerManager.layers) {
            // skips based on visibility
            if (!layer.visible) {
                continue;
            }
            // sends the camera
            layer.camera = this.camera;
            // render
            layer.render(this._glContext);
        }
    }
    /**
     * Resizes the html canvas
     */
    resize() {
        const targetWidth = this._mapDiv.clientWidth;
        const targetHeight = this._mapDiv.clientHeight;
        const value = Math.max(targetWidth, targetHeight);
        this._glContext.viewport(0, 0, value, value);
        //
        this._canvas.width = targetWidth;
        this._canvas.height = targetHeight;
        // stores in the camera
        this._camera.setViewportResolution(targetWidth, targetHeight);
    }
}


/***/ }),

/***/ "./src/app/mapview/mouse-events.ts":
/*!*****************************************!*\
  !*** ./src/app/mapview/mouse-events.ts ***!
  \*****************************************/
/*! exports provided: MouseEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvents", function() { return MouseEvents; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");

class MouseEvents {
    /**
     * Mouse events constructor
     * @param map the map to bind the events
     */
    constructor(map, callbacks = null) {
        this._map = map;
        this._callbacks = callbacks;
        // default values
        this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].IDLE;
        this._lastPoint = [0, 0];
    }
    bindEvents() {
        // sets the mouse listeners
        this._map.canvas.addEventListener('wheel', this.mouseWheel.bind(this), false);
        this._map.canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
        document.addEventListener('mousemove', this.mouseMove.bind(this), false);
        document.addEventListener('mouseup', this.mouseUp.bind(this), false);
    }
    /**
     * Handles mouse down event
     */
    mouseDown(event) {
        this._lastPoint = [event.x, event.y];
        if (event.ctrlKey) {
            const x = event.x;
            const y = (this._map.canvas.height - event.y);
            const picks = [];
            for (const layer of this._map.layerManager.layers) {
                if (!layer.selectable) {
                    continue;
                }
                layer.pick(this._map.glContext, x, y);
                picks.push(layer.pickId());
                this._callbacks.mouse.mouseDown(picks);
            }
        }
        else {
            this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].DRAG;
        }
        this._map.render();
    }
    /**
       * Handles mouse down event
       */
    mouseMove(event) {
        // changes the values
        if (this._status === _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].DRAG) {
            const dx = (-event.x + this._lastPoint[0]);
            const dy = event.y - this._lastPoint[1];
            if (event.buttons === 1 && event.shiftKey && this._map.camera.getCameraStatus() === _constants__WEBPACK_IMPORTED_MODULE_0__["CameraStatus"].Camera3D) { // left button
                this._map.camera.yaw(dx / this._map.canvas.clientWidth);
                this._map.camera.pitch(dy / this._map.canvas.clientHeight);
            }
            else {
                this._map.camera.translate(dx / this._map.canvas.clientWidth, dy / this._map.canvas.clientHeight);
            }
            this._lastPoint = [event.x, event.y];
            this._map.render();
        }
    }
    /**
     * Handles mouse down event
     */
    mouseUp(event) {
        // changes the values
        this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].IDLE;
        this._map.render();
    }
    /**
     * Handles mouse down event
     */
    mouseWheel(event) {
        // changes the values
        const maxAxisLength = Math.max(this._map.canvas.width, this._map.canvas.height);
        const x = event.x / maxAxisLength;
        const y = (this._map.canvas.height - event.y) / maxAxisLength;
        this._map.camera.zoom(event.deltaY, x, y);
        this._map.render();
    }
    /**
     * Handles mouse down event
     */
    mouseOver(event) {
        console.log('called', event.ctrlKey);
    }
}


/***/ }),

/***/ "./src/app/mapview/physical-layer.ts":
/*!*******************************************!*\
  !*** ./src/app/mapview/physical-layer.ts ***!
  \*******************************************/
/*! exports provided: PhysicalLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalLayer", function() { return PhysicalLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/mapview/layer.ts");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/// <reference types="@types/webgl2" />




class PhysicalLayer extends _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
    /**
     * The Vector Layer constructor
     * @param {string} id the layer id
     */
    constructor(id) {
        super(id);
        // primitive Ids
        this._features = {};
        // OpenGL data buffer
        this._glPositionBuffer = null;
        this._glColorBuffer = null;
        this._glIndexBuffer = null;
        // data buffer
        this._positionBuffer = [];
        this._colorBuffer = [];
        this._indexBuffer = [];
        // shader attribute id
        this._positionId = -1;
        this._colorId = -1;
        // uniforms
        this._uModelViewMatrixId = -1;
        this._uProjectionMatrixId = -1;
        this._uWorldOrigin = -1;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the shaders
            for (let id = 0; id < PhysicalLayer.N_SHADER; id++) {
                // shaders url
                const vertUrl = `assets/shaders/physical(${id}).vert`;
                const fragUrl = `assets/shaders/physical(${id}).frag`;
                // Vertex shader program
                const vsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);
                // Fragment shader program
                const fsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);
                // load all shaders
                this.initShaderProgram(vsShader, fsShader, glContext);
            }
            // uniforms definition
            this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
            this._colorId = glContext.getAttribLocation(this._shaderProgram[0], 'vertRgb');
            this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
            this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
            this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
            // load message
            console.log(`Shaders successfully loaded for layer ${this._layerId}.`);
        });
    }
    /**
     * Data update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFeatures(glContext, data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // gets the feature of index id
            data = yield _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);
            // new feature found
            this._features = {
                'position': [], 'color': [], 'index': [], 'function': [], 'size': []
            };
            // loaded number of vertices
            let nverts = 0;
            // iterates over the geometries
            for (const feature of data.features) {
                // gets the feature color
                const hex = feature.properties.color.slice(2, 8);
                const rgb = [0, 2, 4].map((start) => {
                    return parseInt(hex.slice(start, start + 2), 16) / 255;
                });
                // get the coordinates
                const position = feature.geometry.coordinates;
                // get the colors
                const colors = [];
                for (let id = 0; id < position.length / PhysicalLayer.COORDS; id++) {
                    colors.push(...rgb);
                }
                // build the indices
                const indices = feature.geometry.indices;
                for (let id = 0; id < indices.length; id++) {
                    indices[id] += nverts;
                }
                // add to the feature
                this._features['position'].push.apply(this._features['position'], position);
                this._features['color'].push.apply(this._features['color'], colors);
                this._features['index'].push.apply(this._features['index'], indices);
                // loaded vertices
                nverts += position.length / PhysicalLayer.COORDS;
            }
            // formats the buffer
            this._positionBuffer = this._features['position'];
            // formats the buffer
            this._colorBuffer = this._features['color'];
            // formats the buffer
            this._indexBuffer = this._features['index'];
            // creates the buffer
            this.createBuffers(glContext);
        });
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        // invalid layers
        if (this._shaderProgram.length === 0 ||
            this._shaderProgram[0] === null ||
            this._glPositionBuffer === null ||
            this._glColorBuffer === null ||
            this._glIndexBuffer === null ||
            this._positionId < 0 ||
            this._colorId < 0) {
            return;
        }
        // sends the uniforms
        this.setUniforms(glContext);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, PhysicalLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer);
        glContext.vertexAttribPointer(this._colorId, 3, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._colorId);
        // Tell WebGL which indices to use to index the vertices
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // binds the shader program
        glContext.useProgram(this._shaderProgram[0]);
        // draw the geometry
        glContext.drawElements(glContext.TRIANGLES, this._indexBuffer.length, glContext.UNSIGNED_INT, 0);
    }
    /**
     * Send uniforms to the shader
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setUniforms(glContext) {
        if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
        }
        glContext.useProgram(this._shaderProgram[0]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]);
    }
    /**
     * Layer VBO creation signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createBuffers(glContext) {
        // Create a buffer for the positions.
        this._glPositionBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._positionBuffer), glContext.STATIC_DRAW);
        // Create a buffer for the colors.
        this._glColorBuffer = glContext.createBuffer();
        // Select the color buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._colorBuffer), glContext.STATIC_DRAW);
        // Create a buffer for the indices.
        this._glIndexBuffer = glContext.createBuffer();
        // Select the index buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._indexBuffer), glContext.STATIC_DRAW);
    }
}
// number of coordinates per vertex
PhysicalLayer.COORDS = 2;
// number of shaders
PhysicalLayer.N_SHADER = 1;


/***/ }),

/***/ "./src/app/mapview/point-layer.ts":
/*!****************************************!*\
  !*** ./src/app/mapview/point-layer.ts ***!
  \****************************************/
/*! exports provided: PointLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointLayer", function() { return PointLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/mapview/layer.ts");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");
/* harmony import */ var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colormap */ "./src/app/mapview/colormap.ts");
/// <reference types="@types/webgl2" />






class PointLayer extends _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
    /**
     * The Vector Layer constructor
     * @param {string} id the layer id
     */
    constructor(id) {
        super(id);
        // primitive Ids
        this._features = {};
        // OpenGL data buffer
        this._glPositionBuffer = null;
        this._glScalarBuffer = null;
        this._glColorMapTex = null;
        // shader attribute id
        this._positionId = -1;
        this._scalarId = -1;
        // transformation uniforms
        this._uModelViewMatrixId = -1;
        this._uProjectionMatrixId = -1;
        this._uWorldOriginId = -1;
        // color map uniform
        this._uColorMapId = -1;
        this._visible = false;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the shaders
            for (let id = 0; id < PointLayer.N_SHADER; id++) {
                // shaders url
                const vertUrl = `assets/shaders/point(${id}).vert`;
                const fragUrl = `assets/shaders/point(${id}).frag`;
                // Vertex shader program
                const vsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);
                // Fragment shader program
                const fsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);
                // load all shaders
                this.initShaderProgram(vsShader, fsShader, glContext);
            }
            // vertex data on the shader
            this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
            this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar');
            // transformation uniforms on the shader
            this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
            this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
            this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
            // colorMap texture
            this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');
            // load message
            console.log(`Shaders successfully loaded for layer ${this._layerId}.`);
        });
    }
    /**
     * Data update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFeatures(glContext, data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // gets the feature of index id
            if (data === null) {
                data = yield _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);
            }
            // new feature found
            this._features = { 'position': [], 'scalar': [] };
            // iterates over the geometries
            for (const feature of data.features) {
                // feature data
                const position = feature.geometry.coordinates;
                const scalar = [];
                for (let id = 0; id < position.length / PointLayer.COORDS; id++) {
                    const val = feature.properties && feature.properties.scalar ? feature.properties.scalar : -1;
                    scalar.push(val);
                }
                // add to the feature
                this._features['position'].push.apply(this._features['position'], position);
                this._features['scalar'].push.apply(this._features['scalar'], scalar);
            }
            // creates the buffer
            this.createBuffers(glContext);
            // creates the scalar data vbo
            this.createScalarBuffer(glContext);
            // creates the color map
            this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].DIVERGING_RED_BLUE_MAP, false);
        });
    }
    /**
     * Function update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFunction(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // gets the feature of index id
            const data = yield _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFunction(this._layerId);
            // new feature found
            this._features = { 'scalar': [] };
            // formats the buffer
            this._features['scalar'] = data.properties.scalar;
            // creates the scalar data vbo
            this.createScalarBuffer(glContext);
        });
    }
    /**
     * Changes the color map
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {ColorMapType} cMap Color Map
     */
    updateColorMap(glContext, cMap) {
        // creates the color map
        this.createColorMapTexture(glContext, cMap, false);
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        // invalid layers
        if (this._shaderProgram.length === 0 ||
            this._shaderProgram[0] === null ||
            this._glPositionBuffer === null ||
            this._glScalarBuffer === null ||
            this._positionId < 0 ||
            this._scalarId < 0) {
            return;
        }
        // sends the uniforms
        this.setUniforms(glContext);
        // bending
        glContext.enable(glContext.BLEND);
        glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, PointLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
        glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._scalarId);
        // Tell WebGL we want to affect texture unit 0
        glContext.activeTexture(glContext.TEXTURE0);
        // Bind the texture to texture unit 0
        glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
        // binds the shader program
        glContext.useProgram(this._shaderProgram[0]);
        // draw the geometry
        glContext.drawArrays(glContext.POINTS, 0, this._features['position'].length / PointLayer.COORDS);
        // disable blend
        glContext.disable(glContext.BLEND);
    }
    /**
     * Send uniforms to the shader
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setUniforms(glContext) {
        if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
        }
        glContext.useProgram(this._shaderProgram[0]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);
        // send the color map
        glContext.uniform1i(this._uColorMapId, 0);
    }
    /**
     * Layer VBO creation signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createBuffers(glContext) {
        // Create a buffer for the positions.
        this._glPositionBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW);
    }
    /**
     * Scalar data vbo creation
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createScalarBuffer(glContext) {
        // Create a buffer for the colors.
        if (this._glScalarBuffer === null) {
            this._glScalarBuffer = glContext.createBuffer();
        }
        // Select the color buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['scalar']), glContext.STATIC_DRAW);
    }
    /**
   * Color map texture creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} color Selected color map
   * @param {boolean} get the reverse color map
   */
    createColorMapTexture(glContext, color, reverse = false) {
        // gets the color map
        const cmap = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse);
        // gl color map texture
        if (this._glColorMapTex === null) {
            this._glColorMapTex = glContext.createTexture();
        }
        // send the color map
        glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
        glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, cmap.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(cmap));
        // glContext.NEAREST is also allowed, instead of glContext.LINEAR, as neither mipmap.
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
        // Prevents s-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        // Prevents t-coordinate wrapping (repeating).
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
    }
}
// number of coordinates per vertex
PointLayer.COORDS = 2;
// number of shaders
PointLayer.N_SHADER = 1;


/***/ }),

/***/ "./src/app/mapview/polygon-layer.ts":
/*!******************************************!*\
  !*** ./src/app/mapview/polygon-layer.ts ***!
  \******************************************/
/*! exports provided: PolygonLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonLayer", function() { return PolygonLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/mapview/layer.ts");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-loader */ "./src/app/mapview/data-loader.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-api */ "./src/app/mapview/data-api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/mapview/constants.ts");
/* harmony import */ var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colormap */ "./src/app/mapview/colormap.ts");
/// <reference types="@types/webgl2" />






class PolygonLayer extends _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
    /**
     * The Vector Layer constructor
     * @param {string} id the layer id
     */
    constructor(id) {
        super(id);
        // primitive Ids
        this._features = {};
        // data buffers
        this._glPositionBuffer = null;
        this._glIndexBuffer = null;
        this._glPolygonIdBuffer = null;
        this._glScalarBuffer = null;
        // shader attribute id
        this._positionId = -1;
        this._polygonId = -1;
        this._scalarId = -1;
        // transformation uniforms
        this._uModelViewMatrixId = -1;
        this._uProjectionMatrixId = -1;
        this._uWorldOriginId = -1;
        this._uScalarTextureId = -1;
        // highlighted building ID id
        this._highlight = -1;
        this._uHighlightId = -1;
        // FBO for picking
        this._fboWidth = -1;
        this._fboHeight = -1;
        this._fbo = null;
        this._readFbo = null;
        // first pass textures
        this._scalarTexture = null;
        this._polygonIdTexture = null;
        // color map
        this._uColorMapId = -1;
        this._colorMapTexture = null;
    }
    /**
     * Shader load signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    loadShaders(glContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // load the shaders
            for (let id = 0; id < PolygonLayer.N_SHADER; id++) {
                // shaders url
                const vertUrl = `assets/shaders/polygon(${id}).vert`;
                const fragUrl = `assets/shaders/polygon(${id}).frag`;
                // Vertex shader program
                const vsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);
                // Fragment shader program
                const fsShader = yield _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);
                // load all shaders
                this.initShaderProgram(vsShader, fsShader, glContext);
            }
            // load message
            console.log(`#${PolygonLayer.N_SHADER} shaders successfully loaded for layer ${this._layerId}.`);
        });
    }
    /**
     * Data update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFeatures(glContext, data = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // gets the feature of index id
            if (data === null) {
                data = yield _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);
            }
            // feature definition found
            this._features = { 'position': [], 'scalar': [], 'polygonId': [], 'index': [], 'offset': [] };
            // loaded number of vertices
            let nverts = 0;
            // number of loaded features
            let nfeatures = 0;
            // iterates over the geometries
            for (const feature of data.features) {
                // renders multi polygons
                for (const part of feature.geometry) {
                    // get the coordinates
                    const position = part.coordinates;
                    // get the colors
                    const ids = [];
                    const scalar = [];
                    for (let id = 0; id < position.length / PolygonLayer.COORDS; id++) {
                        const val = feature.properties && feature.properties.scalar ? feature.properties.scalar : -1;
                        scalar.push(val);
                        ids.push(nfeatures / data.features.length);
                    }
                    // build the indices
                    const index = part.indices;
                    for (let id = 0; id < index.length; id++) {
                        index[id] += nverts;
                    }
                    // loaded vertices
                    nverts += position.length / PolygonLayer.COORDS;
                    // add to the feature
                    this._features['position'].push.apply(this._features['position'], position);
                    this._features['scalar'].push.apply(this._features['scalar'], scalar);
                    this._features['polygonId'].push.apply(this._features['polygonId'], ids);
                    this._features['index'].push.apply(this._features['index'], index);
                    this._features['offset'].push(position.length / PolygonLayer.COORDS);
                }
                nfeatures += 1;
            }
            // creates the buffer
            this.createBuffers(glContext);
            // creates the scalar data vbo
            this.createScalarBuffer(glContext);
            // creates the color map
            this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].DIVERGING_RED_BLUE_MAP, false);
        });
    }
    /**
     * Function update signature
     * @returns {Promise<any>} The load data promise
     */
    updateFunction(glContext, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // scalar function
            const scalar = data.func;
            // invalid data layout
            if (scalar.length !== this._features['offset'].length) {
                return;
            }
            // new feature found
            this._features['scalar'] = [];
            let zero = 0;
            if (data.fMin < 0 && data.fMax > 0) {
                zero = 0;
            }
            else if (data.fMin >= 0 && data.fMax > 0) {
                zero = data.fMin;
            }
            else if (data.fMin < 0 && data.fMax <= 0) {
                zero = data.fMax;
            }
            // fill the function array
            for (let fId = 0; fId < scalar.length; fId++) {
                // get the values
                const nVerts = this._features['offset'][fId];
                let sValue = null;
                if (scalar[fId] === 'notAlive') {
                    sValue = -1;
                }
                else if (scalar[fId] === 'notActive') {
                    sValue = -2;
                }
                else if (scalar[fId] === 'notValid') {
                    sValue = -3;
                }
                else if (scalar[fId] === 'notChange') {
                    sValue = -3;
                }
                else {
                    sValue = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].computeScalarValue(scalar[fId], data.fMin, data.fMax, zero);
                }
                // fill the feature array
                const vals = new Array(nVerts).fill(sValue);
                // push to the function
                this._features['scalar'].push.apply(this._features['scalar'], vals);
            }
            // creates the scalar data vbo
            this.createScalarBuffer(glContext);
        });
    }
    /**
     * Function update signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param data layer function
     */
    cleanFunction(glContext) {
        for (let id = 0; id < this._features['scalar'].length; id++) {
            this._features['scalar'][id] = -1;
        }
        // creates the scalar data vbo
        this.createScalarBuffer(glContext);
    }
    /**
     * Changes the color map
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {ColorMapType} cMap Color Map
     */
    updateColorMap(glContext, cMap) {
        // creates the color map
        this.createColorMapTexture(glContext, cMap, false);
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     * @param {number} x Mouse x position
     * @param {number} y Mouse y position
     */
    pick(glContext, x, y) {
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);
        const result = new Float32Array(4);
        glContext.readPixels(x, y, 1, 1, glContext.RGBA, glContext.FLOAT, result);
        if (result[0] >= 0) {
            this._highlight = result[0] === this._highlight ? -1 : result[0];
        }
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
        this.render(glContext);
    }
    /**
     * Layer picking function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    pickId() {
        if (this._highlight === -1) {
            return this._highlight;
        }
        if (!this._features['polygonId']) {
            return this._highlight;
        }
        let previous = -1;
        let polyId = -1;
        for (let pId = 0; pId < this._features['polygonId'].length; pId++) {
            const current = this._features['polygonId'][pId];
            if (previous === current) {
                continue;
            }
            else {
                polyId += 1;
                previous = current;
                if (Math.abs(current - this._highlight) < 1e-5) {
                    return polyId;
                }
            }
        }
        return polyId;
    }
    setPickId(id) {
        let previous = -1;
        let polyId = -1;
        if (!this._features['polygonId']) {
            this._highlight = -1;
            return;
        }
        for (let pId = 0; pId < this._features['polygonId'].length; pId++) {
            const current = this._features['polygonId'][pId];
            if (previous === current) {
                continue;
            }
            else {
                polyId += 1;
                previous = current;
                if (polyId === id) {
                    this._highlight = current;
                    return;
                }
            }
        }
    }
    /**
     * Layer render function signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    render(glContext) {
        // invalid layers
        if (this._shaderProgram.length !== PolygonLayer.N_SHADER ||
            this._glPositionBuffer === null ||
            this._glPolygonIdBuffer === null ||
            this._glScalarBuffer === null ||
            this._glIndexBuffer === null) {
            return;
        }
        // FBO setup
        this.setupFBO(glContext);
        // Picking
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
        this.renderToTexture(glContext);
        glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
        // render
        this.renderTexture(glContext);
        // render selected polygon
        this.renderSelection(glContext);
    }
    renderSelection(glContext) {
        // uniforms and attrib locations
        this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uModelViewMatrix');
        this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uProjectionMatrix');
        this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[2], 'uWorldOrigin');
        this._positionId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPos');
        this._polygonId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPolyId');
        this._uHighlightId = glContext.getUniformLocation(this._shaderProgram[2], 'uHighlightId');
        // binds the shader program
        glContext.useProgram(this._shaderProgram[2]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);
        // render unselected
        glContext.uniform1f(this._uHighlightId, this._highlight);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the polygon id buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
        glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._polygonId);
        let first = 0;
        const high = [];
        this._features['offset'].forEach(vertsCount => {
            // skips selected
            if (Math.abs(this._features['polygonId'][first] - this._highlight) < 1e-5) {
                const curr = { first, vertsCount };
                high.push(curr);
            }
            else {
                glContext.drawArrays(glContext.LINE_STRIP, first, vertsCount);
            }
            first += vertsCount;
        });
        high.forEach(cHigh => {
            glContext.drawArrays(glContext.LINE_STRIP, cHigh.first, cHigh.vertsCount);
        });
    }
    /**
     * Send uniforms to the shader
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    renderTexture(glContext) {
        // polygons texture
        this._uScalarTextureId = glContext.getUniformLocation(this._shaderProgram[1], 'uScalarTex');
        glContext.enable(glContext.BLEND);
        glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
        glContext.useProgram(this._shaderProgram[1]);
        glContext.activeTexture(glContext.TEXTURE0);
        glContext.bindTexture(glContext.TEXTURE_2D, this._scalarTexture);
        glContext.uniform1i(this._uScalarTextureId, 0);
        glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4);
        glContext.disable(glContext.BLEND);
    }
    /**
     * Send uniforms to the shader
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    renderToTexture(glContext) {
        // tuniforms and attrib locations
        this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
        this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
        this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
        this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
        this._polygonId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPolyId');
        this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar');
        this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');
        // binds the shader program
        glContext.useProgram(this._shaderProgram[0]);
        // send matrices
        glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
        glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix());
        // send world origin
        const worldOrigin = this._camera.getWorldOrigin();
        glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]);
        // send the color map
        glContext.uniform1i(this._uColorMapId, 0);
        // binds the position buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._positionId);
        // binds the polygon id buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
        glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._polygonId);
        // binds the scalar buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
        glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
        glContext.enableVertexAttribArray(this._scalarId);
        // Tell WebGL we want to affect texture unit 0
        glContext.activeTexture(glContext.TEXTURE0);
        glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);
        glContext.clearColor(0.0, 0.0, 0.0, 0.0);
        // tslint:disable-next-line:no-bitwise
        glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
        // Tell WebGL which indices to use to index the vertices
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // draw the geometry
        glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
    }
    /**
     * setup FBO used for edge detection
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    setupFBO(glContext) {
        if (this._fbo == null || this._readFbo == null) {
            // creates the buffers
            this._fbo = glContext.createFramebuffer();
            this._readFbo = glContext.createFramebuffer();
            this._polygonIdTexture = glContext.createTexture();
            this._scalarTexture = glContext.createTexture();
            // check the availability of float buffers
            const ext = glContext.getExtension('EXT_color_buffer_float');
            if (!ext) {
                console.error('float buffer extension not supported!!!');
            }
        }
        // gets the viewport
        const viewPort = this._camera.getViewportResolution();
        if (this._fboWidth !== viewPort[0] || this._fboHeight !== viewPort[1]) {
            // update FBO size
            this._fboWidth = viewPort[0];
            this._fboHeight = viewPort[1];
            // building ID texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._polygonIdTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // building ID texture
            glContext.bindTexture(glContext.TEXTURE_2D, this._scalarTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
            // fbo setup
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._scalarTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._polygonIdTexture, 0);
            glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1]);
            // readfbo setup
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._polygonIdTexture, 0);
            // unbind fbos
            glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
        }
    }
    /**
     * Layer VBO creation signature
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createBuffers(glContext) {
        // Create a buffer for the positions.
        this._glPositionBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW);
        // Create a buffer for the positions.
        this._glPolygonIdBuffer = glContext.createBuffer();
        // Select the positionBuffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['polygonId']), glContext.STATIC_DRAW);
        // Create a buffer for the indices.
        this._glIndexBuffer = glContext.createBuffer();
        // Select the index buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
    }
    /**
     * Scalar data vbo creation
     * @param {WebGL2RenderingContext} glContext WebGL context
     */
    createScalarBuffer(glContext) {
        // Create a buffer for the colors.
        if (this._glScalarBuffer === null) {
            this._glScalarBuffer = glContext.createBuffer();
        }
        // Select the color buffer as the one to apply buffer
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
        // send data to gpu
        glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['scalar']), glContext.STATIC_DRAW);
    }
    /**
   * Color map texture creation
   * @param {WebGL2RenderingContext} glContext WebGL context
   * @param {ColorMapType} color Selected color map
   * @param {boolean} get the reverse color map
   */
    createColorMapTexture(glContext, color, reverse = false) {
        // gets the color map
        const colors = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse);
        // gl color map texture
        if (this._colorMapTexture === null) {
            this._colorMapTexture = glContext.createTexture();
        }
        // send the color map
        glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);
        glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, colors.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(colors));
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
    }
}
// number of coordinates per vertex
PolygonLayer.COORDS = 2;
// number of shaders
PolygonLayer.N_SHADER = 3;


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// moved this to independent file keeping the app.module cleaner




























const materialModules = [
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [materialModules,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]], exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: materialModules,
                exports: materialModules
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




class ApiService {
    constructor() {
    }
    loadModes() {
        return ['value', 'change'];
    }
    loadLevels() {
        return ['borough', 'neighborhood', 'block', 'lot'];
    }
    loadSortBy() {
        return ['name', 'year'];
    }
    loadYearStep() {
        return ['0', '1', '2', '3', '4', '5'];
    }
    loadPolygons() {
        return ['neighborhoods', 'community districs'];
    }
    loadNavigation() {
        return ['complete', 'skip blocks'];
    }
    loadBoroughs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/meta.boroughs`;
            console.log(url);
            // Return a new promise.
            const response = yield fetch(url);
            return yield response.json();
        });
    }
    loadYears() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/meta.years`;
            console.log(url);
            // Return a new promise.
            const response = yield fetch(url);
            return yield response.json();
        });
    }
    loadAttributes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/meta.nattributes`;
            console.log(url);
            // Return a new promise.
            const response = yield fetch(url);
            const obj = {};
            const arr = yield response.json();
            arr.forEach(elm => {
                obj[elm.attribute] = elm;
                if (elm.categories.length <= 1) {
                    elm.categories = ['NONE'];
                }
            });
            return obj;
        });
    }
    loadMetrics() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/meta.metrics`;
            console.log(url);
            // Return a new promise.
            const response = yield fetch(url);
            return yield response.json();
        });
    }
    loadPopsGeometry(borough) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/popslayer`;
            console.log(url);
            // post parameters
            const params = { borough };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadGeometry(level, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (level === 'borough') {
                return yield this.loadNeighborhoodsGeometry(state.borough, state.polygon);
            }
            if (level === 'neighborhood') {
                if (state.navigation === 'complete') {
                    return yield this.loadBlocksGeometry(state.borough, state.polygon, state.neighborhood, state.year);
                }
                else {
                    return yield this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, '', state.year);
                }
            }
            if (level === 'block') {
                return yield this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, state.block, state.year);
            }
        });
    }
    loadNeighborhoodsGeometry(borough, polygon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/geometries.neighborhoods`;
            console.log(url);
            // post parameters
            const params = { borough, polygon };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadBlocksGeometry(borough, polygon, neighborhood, year) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/geometries.blocks`;
            console.log(url);
            // post parameters
            const params = { borough, polygon, neighborhood, year };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadLotsGeometry(borough, polygon, neighborhood, block, year) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/geometries.lots`;
            console.log(url);
            // post parameters
            const params = { borough, polygon, neighborhood, block, year };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadSummary(level, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (level === 'borough') {
                return yield this.loadNeighborhoodsSummary(state.borough, state.polygon, state.attribute, state.category, state.metric);
            }
            if (level === 'neighborhood') {
                if (state.navigation === 'complete') {
                    return yield this.loadBlocksSummary(state.borough, state.polygon, state.neighborhood, state.attribute, state.category, state.metric);
                }
                else {
                    return yield this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, '', state.attribute, state.category, state.metric);
                }
            }
            if (level === 'block') {
                return yield this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, state.block, state.attribute, state.category, state.metric);
            }
        });
    }
    loadNeighborhoodsSummary(borough, polygon, attribute, category, metric) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/summaries.neighborhoods`;
            console.log(url);
            // post parameters
            category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
            let params = { borough, polygon, attribute, category, metric };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadBlocksSummary(borough, polygon, neighborhood, attribute, category, metric) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/summaries.blocks`;
            console.log(url);
            // post parameters
            category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
            let params = { borough, neighborhood, polygon, attribute, category, metric };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadLotsSummary(borough, polygon, neighborhood, block, attribute, category, metric) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/summaries.lots`;
            console.log(url);
            // post parameters
            category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
            let params = { borough, neighborhood, polygon, block, attribute, category, metric };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    loadFilter(borough, polygon, attribute, category, bins = 20) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/histogram`;
            console.log(url);
            // post parameters
            category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
            const params = { borough, polygon, attribute, category, bins };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.json();
        });
    }
    applyFilter(borough, polygon, limits, filterExp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend}/plutovis/filter`;
            console.log(url);
            limits.forEach(el => {
                if (el.attribute === 'LANDUSE' || el.attribute === 'SPDIST1') {
                    delete el.category;
                }
            });
            // post parameters
            const params = { borough, polygon, limits, filterExp };
            console.log(`post data: ${JSON.stringify(params)}`);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(params),
            });
            return yield response.text();
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var stats_percentile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats-percentile */ "./node_modules/stats-percentile/index.js");
/* harmony import */ var stats_percentile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_percentile__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state.service */ "./src/app/services/state.service.ts");








class DataService {
    constructor(api, events, state) {
        this.api = api;
        this.events = events;
        this.state = state;
        this.geometry = null;
        this.summary = null;
        this.filters = {};
        this.layers = {};
        this.meta = {
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
        this.subscribeRootEvents();
        this.subscribeMapEvents();
        this.subscribeStateEvents();
        this.subscribeFilterEvents();
    }
    // --- Root app events subscriptions
    subscribeRootEvents() {
        this.events.root.initialized.subscribe(this.initializeMeta.bind(this));
    }
    initializeMeta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.meta.modes = this.api.loadModes();
            this.meta.years = yield this.api.loadYears();
            this.meta.attributes = yield this.api.loadAttributes();
            this.meta.boroughs = yield this.api.loadBoroughs();
            this.meta.polygons = yield this.api.loadPolygons();
            this.meta.navigation = yield this.api.loadNavigation();
            this.meta.levels = this.api.loadLevels();
            this.meta.sortBy = this.api.loadSortBy();
            this.meta.yearStep = this.api.loadYearStep();
        });
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
    loadSummaryThenGeometryAndFunction(isYear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.applyFilter();
            yield this.loadSummary();
            yield this.loadGeometry();
            // POPs layer
            yield this.loadPopsGeometry();
            // elements per year
            const length = this.summary[this.state.activeGeometryParameters.year].length;
            // emits the event
            if (!isYear) {
                this.events.data.initializePagination.emit(length);
                this.events.data.updateVisMatrix.emit();
            }
            this.events.data.updateMapGeometryAndFunction.emit();
        });
    }
    loadSummaryThenFunction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.applyFilter();
            yield this.loadSummary();
            // elements per year
            const length = this.summary[this.state.activeGeometryParameters.year].length;
            // emits the event
            this.events.data.initializePagination.emit(length);
            this.events.data.updateVisMatrix.emit();
            this.events.data.updateMapFunction.emit();
        });
    }
    loadFunction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events.data.updateMapFunction.emit();
        });
    }
    loadPopsGeometry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get borough
            const borough = this.state.activeConfigParameters.borough;
            // gets the geometry
            this.layers['pops'] = yield this.api.loadPopsGeometry(borough);
        });
    }
    loadGeometry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            this.geometry = yield this.api.loadGeometry(level, state);
            this.geometry.features.sort((a, b) => a.properties.name < b.properties.name ? 1 : -1);
        });
    }
    loadSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            this.summary = yield this.api.loadSummary(level, state);
            // year steps
            const step = +this.state.activeSummaryParameters.yearStep;
            this.filterYears(step);
            // adds the difference field
            this.computeDifferences();
            console.log(this.summary);
        });
    }
    filterYears(step) {
        if (!step) {
            return;
        }
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
            this.summary.min = stats_percentile__WEBPACK_IMPORTED_MODULE_1___default()(vals, 2);
            this.summary.max = stats_percentile__WEBPACK_IMPORTED_MODULE_1___default()(vals, 98);
            this.summary.changeMin = stats_percentile__WEBPACK_IMPORTED_MODULE_1___default()(cngs, 2);
            this.summary.changeMax = stats_percentile__WEBPACK_IMPORTED_MODULE_1___default()(cngs, 98);
        }
        else {
            this.summary.min = d3__WEBPACK_IMPORTED_MODULE_2__["min"](vals);
            this.summary.max = d3__WEBPACK_IMPORTED_MODULE_2__["max"](vals);
            this.summary.changeMin = d3__WEBPACK_IMPORTED_MODULE_2__["min"](cngs);
            this.summary.changeMax = d3__WEBPACK_IMPORTED_MODULE_2__["max"](cngs);
        }
    }
    subscribeFilterEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events.filters.updateSummary.subscribe(this.loadSummaryThenFunction.bind(this));
        });
    }
    applyFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const borough = this.state.activeConfigParameters.borough;
            const polygon = this.state.activeConfigParameters.polygon;
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
                };
            });
            yield this.api.applyFilter(borough, polygon, filters.filter(obj => obj !== null), filterExp);
        });
    }
    loadFilter(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isAlive = Object.keys(this.state.activeFilterParameters).includes(`${key}`);
            if (!isAlive) {
                delete this.filters[key];
            }
            else {
                const borough = this.state.activeConfigParameters.borough;
                const polygon = this.state.activeConfigParameters.borough;
                const params = this.state.activeFilterParameters[key];
                const filter = yield this.api.loadFilter(borough, polygon, params.attribute, params.category);
                this.filters[key] = filter;
            }
            this.events.data.updateFilters.emit();
        });
    }
    loadAllFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const keys = Object.keys(this.state.activeFilterParameters);
            for (let key of keys) {
                const borough = this.state.activeConfigParameters.borough;
                const polygon = this.state.activeConfigParameters.borough;
                const params = this.state.activeFilterParameters[key];
                const filter = yield this.api.loadFilter(borough, polygon, params.attribute, params.category);
                this.filters[key] = filter;
            }
            this.events.data.updateFilters.emit();
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventsService {
    constructor() {
        // Events fired by the root-app
        this.root = {
            initialized: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        };
        this.config = {
            boroughSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            polygonSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            navigationSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            modeSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
        // Events fired by mapview
        this.menu = {
            buttonClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        };
        // Events fired by mapview
        this.map = {
            initialized: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            polyPicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        };
        // Events fired by the vis window
        this.vis = {
            yearStepSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            attributeSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            metricSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            categorySelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            modeSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            sortBySelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            yearLabelClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            polygonLabelClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            polygonLabelHovered: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            navButtonClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            navPageChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            sortIconClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            lineIconClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
        this.filters = {
            updated: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            brushed: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            updateSummary: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
        // Events fired by the data service
        this.data = {
            updateFilters: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            updateVisMatrix: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            updateMapFunction: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            updateMapGeometryAndFunction: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            initializePagination: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
        // events fired by the state service
        this.state = {
            configBoroughChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            configPolygonChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            configNavigationChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            configModeChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            configCMapChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            geometryParametersChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            summaryParametersChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            selectedPolygonChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            activeLayerChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            pageParametersChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            sortParametersChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            lineCurvesChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
            filterParametersChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
        this.layers = {
            activeLayerChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
        };
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/services/events.service.ts");



class StateService {
    constructor(events) {
        this.events = events;
        this.matrixActive = null;
        this.filterActive = null;
        this.configActive = false;
        this.legendActive = true;
        this.layersActive = false;
        this.activeLayer = '';
        this.activeConfigParameters = {
            borough: 'Manhattan',
            polygon: 'neighborhoods',
            navigation: 'complete',
            mode: 'change',
            filterExp: '',
            cmapPercentiles: false
        };
        this.activeGeometryParameters = {
            neighborhood: undefined,
            block: undefined,
            lot: undefined,
            year: '2017.1'
        };
        this.activeSummaryParameters = {
            attribute: 'LOTSALIVE',
            category: 'NONE',
            metric: 'COUNT',
            mode: 'change',
            yearStep: 0
        };
        this.activePageParameters = {
            currentPage: null,
            totalPages: null,
            pageSize: null,
            PAGINATION_SIZE: 35
        };
        this.activeSortParameters = {
            sortBy: 'name',
        };
        this.activeLineChartCurves = [];
        this.activeFilterParameters = {};
        this.CURRENT_FILTER_ID = 0;
        this.selectedPolygon = '';
        this.subscribeDataEvents();
        this.subscribeLayersEvents();
        this.subscribeConfigEvents();
        this.subscribeMapEvents();
        this.subscribeVisEvents();
        this.subscribeFilterEvents();
    }
    get activeLevel() {
        if (this.activeConfigParameters.borough &&
            this.activeGeometryParameters.neighborhood &&
            (this.activeGeometryParameters.block || this.activeConfigParameters.navigation === 'skip blocks') &&
            this.activeGeometryParameters.lot &&
            this.activeGeometryParameters.year) {
            return 'lot';
        }
        if (this.activeConfigParameters.borough &&
            this.activeGeometryParameters.neighborhood &&
            (this.activeGeometryParameters.block && this.activeConfigParameters.navigation === 'complete') &&
            this.activeGeometryParameters.year) {
            return 'block';
        }
        if (this.activeConfigParameters.borough &&
            this.activeGeometryParameters.neighborhood &&
            this.activeGeometryParameters.year) {
            return 'neighborhood';
        }
        if (this.activeConfigParameters.borough) {
            return 'borough';
        }
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
        }
        else {
            const previous = this.activeFilterParameters[key] || {};
            this.activeFilterParameters[key] = Object.assign(previous, state.params);
        }
        this.events.state.filterParametersChanged.emit(key);
    }
    updateFilterBrush(state) {
        const { key } = state;
        const previous = this.activeFilterParameters[key] || {};
        this.activeFilterParameters[key] = Object.assign(previous, state.params);
    }
    subscribeDataEvents() {
        this.events.data.initializePagination.subscribe(this.initializePagination.bind(this));
    }
    initializePagination(length) {
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
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backend: 'http://localhost:4200',
    folder: 'nyc'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joaorulff/Workspace/plutovis/PlutoVis/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map