function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/vis/vis.component */
    "./src/app/components/vis/vis.component.ts");
    /* harmony import */


    var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/filter/filter.component */
    "./src/app/components/filter/filter.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/legend/legend.component */
    "./src/app/components/legend/legend.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(events) {
        _classCallCheck(this, AppComponent);

        this.events = events;
        this.title = 'Pluto Vis';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.events.root.initialized.emit();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-legend");
        }
      },
      directives: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_3__["VisComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_6__["LegendComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/vis/vis.component */
    "./src/app/components/vis/vis.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/legend/legend.component */
    "./src/app/components/legend/legend.component.ts");
    /* harmony import */


    var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/filter/filter.component */
    "./src/app/components/filter/filter.component.ts");
    /* harmony import */


    var _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/config/config.component */
    "./src/app/components/config/config.component.ts");
    /* harmony import */


    var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/tooltip/tooltip.component */
    "./src/app/components/tooltip/tooltip.component.ts");
    /* harmony import */


    var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/layers/layers.component */
    "./src/app/components/layers/layers.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__["VisComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"], _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__["LayersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _components_vis_vis_component__WEBPACK_IMPORTED_MODULE_6__["VisComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_8__["LegendComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"], _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_12__["LayersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/bar.ts":
  /*!*******************************!*\
    !*** ./src/app/charts/bar.ts ***!
    \*******************************/

  /*! exports provided: Bar */

  /***/
  function srcAppChartsBarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bar", function () {
      return Bar;
    });
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var Bar =
    /*#__PURE__*/
    function () {
      function Bar(chartDiv, callbacks, key) {
        _classCallCheck(this, Bar);

        // chart data
        this._data = null; // Chart div

        this._chartDiv = null; // Svg element

        this._svgCanvas = null; // Group element

        this._svgGroup = null; // margin object

        this._margin = {
          top: 10,
          right: 15,
          bottom: 75,
          left: 70
        }; // scales and axis

        this._xScale = null;
        this._yScale = null; // ----

        this._xAxis = null;
        this._yAxis = null; // brush object

        this._brush = d3__WEBPACK_IMPORTED_MODULE_0__["brushX"]();
        this._brushedBins = []; // callbacks

        this._callbacks = null;
        this._key = null; // label

        this.labelFormat = function (label) {
          var parts = label.split('-');

          if (isNaN(+parts[0])) {
            return label.split(',').join('-');
          }

          parts = parts.map(function (el) {
            return d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.2s')(el);
          });
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

      _createClass(Bar, [{
        key: "setData",
        value: function setData(data, brush) {
          this._data = data;
          this._brushedBins = brush;
        }
      }, {
        key: "render",
        value: function render() {
          this.updateScales();
          this.updateAxes();
          this.updateBars();
          this.initBrush();
        }
      }, {
        key: "resize",
        value: function resize() {
          this._svgCanvas.remove();

          this.initSvgAndGroups();
          this.initScalesAndAxes();
          this.render();
        }
      }, {
        key: "initSvgAndGroups",
        value: function initSvgAndGroups() {
          // dimensions using margins convention
          this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
          this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom; // creates the new canvas element

          this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv).append('svg').attr('width', this._chartDiv.clientWidth).attr('height', this._chartDiv.clientHeight); // creates the group

          this._svgGroup = this._svgCanvas.append('g').attr('class', 'svgGroup').attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')'); // axis groups

          this._svgGroup.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this._height + ')');

          this._svgGroup.append('g').attr('class', 'brush');

          this._svgGroup.append('g').attr('class', 'axis axis--y'); // text label for the x axis


          this._svgGroup.append("text").attr('class', 'xaxis-label').attr("transform", "translate(".concat(this._width / 2, ", ").concat(this._height + this._margin.top + 45, ")")).style("text-anchor", "middle").text("attribute bins"); // text label for the y axis


          this._svgGroup.append("text").attr('class', 'yaxis-label').attr("transform", "rotate(-90)").attr("y", 0 - this._margin.left + 10).attr("x", 0 - this._height / 2).attr("dy", "1em").style("text-anchor", "middle").text("frequency");
        }
      }, {
        key: "initScalesAndAxes",
        value: function initScalesAndAxes() {
          this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.1);
          this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale).tickFormat(this.labelFormat);
          this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([this._height, 0]);
          this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale).ticks(10, "~s");
        }
      }, {
        key: "initWindowEvents",
        value: function initWindowEvents() {
          window.addEventListener('resize', this.resize.bind(this));
        }
      }, {
        key: "updateScales",
        value: function updateScales() {
          var bins = this._data.map(function (obj) {
            return "".concat(obj.bin);
          });

          var extent = d3__WEBPACK_IMPORTED_MODULE_0__["extent"](this._data.map(function (obj) {
            return obj.count;
          })); // sets the domains

          this._xScale.domain(bins);

          this._yScale.domain(extent);
        }
      }, {
        key: "updateAxes",
        value: function updateAxes() {
          var bins = this._data.map(function (obj) {
            return "".concat(obj.bin);
          });

          this._xAxis.scale(this._xScale);

          this._svgGroup.select('.axis--x').call(this._xAxis).selectAll('text').style('text-anchor', 'end').attr('font-size', function () {
            if (bins.length > 20) {
              return '8px';
            }

            return '10px';
          }).attr('dx', '-.8em').attr('dy', function () {
            return bins.length > 20 ? '-.8em' : '.15em';
          }).attr('transform', function () {
            if (bins.length > 20) {
              return 'rotate(-90)';
            }

            return 'rotate(-25)';
          });

          this._yAxis.scale(this._yScale);

          this._svgGroup.select('.axis--y').call(this._yAxis);
        }
      }, {
        key: "updateBars",
        value: function updateBars() {
          var _this = this;

          var barsGroup = this._svgGroup.selectAll(".line-group").data([this._data]).join("g");

          barsGroup.attr('class', 'line-group');
          var rects = barsGroup.selectAll("rect").data(function (d) {
            return d;
          }).join("rect");
          rects.attr('class', 'bar').attr("x", function (d) {
            return _this._xScale("".concat(d.bin));
          }).attr("y", function (d) {
            return _this._yScale(d.count);
          }).attr("width", this._xScale.bandwidth()).attr("height", function (d) {
            return _this._height - _this._yScale(d.count);
          }).attr("fill", "#673ab7");
        }
      }, {
        key: "initBrush",
        value: function initBrush() {
          this._brush.on("start brush end", this.barChartOnBrush.bind(this)).extent([[0, 0], [this._width, this._height]]);

          this._svgGroup.select('.brush').call(this._brush);

          if (this._brushedBins.length) {
            var first = this._brushedBins[0];
            var final = this._brushedBins[this._brushedBins.length - 1];
            var range = [this._xScale(first) - this._xScale.paddingInner(), this._xScale(final) + this._xScale.bandwidth()];

            this._svgGroup.select(".brush").call(this._brush.move, range);
          }
        }
      }, {
        key: "barChartOnBrush",
        value: function barChartOnBrush() {
          var _this2 = this;

          var selection = d3__WEBPACK_IMPORTED_MODULE_0__["event"].selection;

          var rects = this._svgGroup.selectAll(".line-group").selectAll(".bar");

          if (selection) {
            var range = this._xScale.domain().map(this._xScale);

            var i0 = d3__WEBPACK_IMPORTED_MODULE_0__["bisectRight"](range, selection[0]);
            var i1 = d3__WEBPACK_IMPORTED_MODULE_0__["bisectRight"](range, selection[1]);
            this._brushedBins = this._xScale.domain().slice(i0, i1);
          } else {
            this._brushedBins = [];
          }

          rects.attr("fill", function (d) {
            return _this2._brushedBins.includes(d.bin) ? "#f44336" : "#673ab7";
          });
          var event = {
            value: this._brushedBins
          };

          this._callbacks.brush(this._key, event);
        }
      }]);

      return Bar;
    }();
    /***/

  },

  /***/
  "./src/app/charts/cmap.ts":
  /*!********************************!*\
    !*** ./src/app/charts/cmap.ts ***!
    \********************************/

  /*! exports provided: Cmap */

  /***/
  function srcAppChartsCmapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cmap", function () {
      return Cmap;
    });
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var Cmap =
    /*#__PURE__*/
    function () {
      function Cmap(chartDiv) {
        _classCallCheck(this, Cmap);

        // chart data
        this._data = {}; // Chart div

        this._chartDiv = null; // Svg element

        this._svgCanvas = null; // Group element

        this._svgGroup = null; // margin object

        this._margin = {
          top: 0,
          right: 20,
          bottom: 30,
          left: 16
        }; // scales and axis

        this._xScale = null;
        this._cScale = null;
        this._xAxis = null; // number of colors

        this.N_COLORS = 40; // Is Alive : the lot existis in the selected year
        // Is Active: the lot fits the filter condition 
        // Is Valid : the selected attribute is a valid value in the lot

        this.ALIVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#8f8f8f');
        this.ACTVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#afafaf');
        this.VALID_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#cfcfcf');
        this.ALIVE_LABEL = 'A';
        this.ACTVE_LABEL = 'F';
        this.VALID_LABEL = 'V'; // format

        this.tickFormat = function (val) {
          if (isNaN(val)) {
            return val;
          } else {
            return d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.2s')(val);
          }
        };

        this._chartDiv = chartDiv;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
      }

      _createClass(Cmap, [{
        key: "initWindowEvents",
        value: function initWindowEvents() {
          window.addEventListener('resize', this.resize.bind(this));
        }
      }, {
        key: "setData",
        value: function setData(minMax) {
          var zero = 0;

          if (minMax[0] < 0 && minMax[1] > 0) {
            zero = 0;
          } else if (minMax[0] >= 0 && minMax[1] > 0) {
            zero = minMax[0];
          } else if (minMax[0] < 0 && minMax[1] <= 0) {
            zero = minMax[1];
          }

          if (minMax[0] !== minMax[1]) {
            var frac = Math.ceil(this.N_COLORS * (zero - minMax[0]) / (minMax[1] - minMax[0]));

            if (frac < 5) {
              frac = 5;
            }

            if (frac > this.N_COLORS - 5) {
              frac = this.N_COLORS - 5;
            }

            this._data.values = [];

            for (var id = 0; id < frac; id++) {
              var val = minMax[0] + id * (zero - minMax[0]) / (frac - 1);

              this._data.values.push(val.toFixed(3));
            }

            for (var _id = 0; _id < this.N_COLORS - frac; _id++) {
              var _val = zero + _id * (minMax[1] - zero) / (this.N_COLORS - frac - 1);

              this._data.values.push(_val.toFixed(3));
            }

            this._data.minMax = minMax.map(function (el) {
              return el.toFixed(3);
            });
            this._data.zero = zero.toFixed(3);
          } else {
            this._data.minMax = minMax;
            this._data.zero = minMax[0];
            this._data.values = [this._data.zero];
          }

          this._data.values.unshift(this.ALIVE_LABEL, this.ACTVE_LABEL, this.VALID_LABEL);
        }
      }, {
        key: "render",
        value: function render() {
          this.updateScales();
          this.updateAxes();
          this.updateRectangles();
        }
      }, {
        key: "resize",
        value: function resize() {
          this._svgCanvas.remove();

          this.initSvgAndGroups();
          this.initScalesAndAxes();
          this.render();
        }
      }, {
        key: "initSvgAndGroups",
        value: function initSvgAndGroups() {
          // dimensions using margins convention
          this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
          this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom; // creates the new canvas element

          this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv).append('svg').attr('width', this._chartDiv.clientWidth).attr('height', this._chartDiv.clientHeight); // creates the group

          this._svgGroup = this._svgCanvas.append('g').attr('class', 'svgGroup').attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')'); // axis groups

          this._svgGroup.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this._height + ')');
        }
      }, {
        key: "initScalesAndAxes",
        value: function initScalesAndAxes() {
          this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.0);
          this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
          this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]);
        }
      }, {
        key: "updateScales",
        value: function updateScales() {
          this._xScale.domain(this._data.values);

          this._cScale.domain([this._data.minMax[0], this._data.zero, this._data.minMax[1]]);
        }
      }, {
        key: "updateAxes",
        value: function updateAxes() {
          this._xAxis.scale(this._xScale).tickValues([this.ALIVE_LABEL, this.ACTVE_LABEL, this.VALID_LABEL, this._data.minMax[0], this._data.zero, this._data.minMax[1]]);

          this._svgGroup.select('.axis--x').call(this._xAxis.tickFormat(this.tickFormat)).selectAll('text').style('text-anchor', 'end').attr('dy', '.5em').attr('dx', '-.25em').attr('transform', 'rotate(-35)');

          this._svgGroup.select('.axis--x').select(".domain").remove();
        }
      }, {
        key: "updateRectangles",
        value: function updateRectangles() {
          var _this3 = this;

          var cmap = this._svgGroup.selectAll(".cmap-group").data([this._data.values]).join("g");

          cmap.attr("class", "cmap-group");
          var rects = cmap.selectAll("rect").data(function (d) {
            return d;
          }).join("rect");
          rects.attr("x", function (d) {
            return _this3._xScale(d);
          }).attr("y", 0).attr("width", this._xScale.bandwidth()).attr("height", this._height).attr("fill", function (d) {
            if (d === _this3.ALIVE_LABEL) {
              return _this3.ALIVE_COLOR;
            } else if (d === _this3.VALID_LABEL) {
              return _this3.VALID_COLOR;
            } else if (d === _this3.ACTVE_LABEL) {
              return _this3.ACTVE_COLOR;
            } else {
              return _this3._cScale(d);
            }
          }).attr("stroke", "none");
        }
      }]);

      return Cmap;
    }();
    /***/

  },

  /***/
  "./src/app/charts/line.ts":
  /*!********************************!*\
    !*** ./src/app/charts/line.ts ***!
    \********************************/

  /*! exports provided: Line */

  /***/
  function srcAppChartsLineTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Line", function () {
      return Line;
    });
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var Line =
    /*#__PURE__*/
    function () {
      function Line(chartDiv, callbacks, defaults) {
        var _this4 = this;

        _classCallCheck(this, Line);

        // chart data
        this._data = null; // Chart div

        this._chartDiv = null; // Svg element

        this._svgCanvas = null; // Group element

        this._svgGroup = null; // margin object

        this._margin = {
          top: 40,
          right: 35,
          bottom: 60,
          left: 125
        }; // scales and axis

        this._xScale = null;
        this._yScale = null;
        this._cScale = null;
        this._yLabel = ''; // ----

        this._xAxis = null;
        this._yAxis = null; // callbacks

        this._callbacks = null; // d3's line generator

        this._line = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (d) {
          return _this4._xScale(d.year);
        }).y(function (d) {
          return _this4._yScale(d.value);
        }).curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]).defined(function (d) {
          return d.valid;
        });
        this._chartDiv = chartDiv;
        this._callbacks = callbacks;
        this._yLabel = defaults.yLabel;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        this.initWindowEvents();
      }

      _createClass(Line, [{
        key: "setData",
        value: function setData(data, years) {
          this._data = data;
          this._data.years = years;
        }
      }, {
        key: "setYLabel",
        value: function setYLabel(label) {
          this._yLabel = label;
        }
      }, {
        key: "render",
        value: function render() {
          this.updateScales();
          this.updateAxes();
          this.updateLines();
          this.updateLegend();
        }
      }, {
        key: "resize",
        value: function resize() {
          this._svgCanvas.remove();

          this.initSvgAndGroups();
          this.initScalesAndAxes();
          this.render();
        }
      }, {
        key: "initSvgAndGroups",
        value: function initSvgAndGroups() {
          var _this5 = this;

          // dimensions using margins convention
          this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
          this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom; // creates the new canvas element

          this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv).append('svg').attr('width', this._chartDiv.clientWidth).attr('height', this._chartDiv.clientHeight); // creates the group

          this._svgGroup = this._svgCanvas.append('g').attr('class', 'svgGroup').attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

          this._svgGroup.append('g').attr('class', 'legend').attr('transform', 'translate(0, 0)'); // axis groups


          this._svgGroup.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this._height + ')');

          this._svgGroup.append('g').attr('class', 'axis axis--y'); // text label for the x axis


          this._svgGroup.append("text").attr('class', 'xaxis-label').attr("transform", "translate(".concat(this._width / 2, ", ").concat(this._height + this._margin.top + 15, ")")).style("text-anchor", "middle").text(function () {
            var parts = _this5._yLabel.split(' ');

            if (parts[parts.length - 1] === 'change') {
              return "".concat(parts[0], " ").concat(parts[1], " value matrix");
            }

            if (parts[parts.length - 1] === 'value') {
              return "".concat(parts[0], " ").concat(parts[1], " change matrix");
            }
          }); // text label for the y axis


          this._svgGroup.append("text").attr('class', 'yaxis-label').attr("transform", "rotate(-90)").attr("y", 0 - this._margin.left / 2).attr("x", 0 - this._height / 2).attr("dy", "1em").style("text-anchor", "middle").text("".concat(this._yLabel));
        }
      }, {
        key: "initScalesAndAxes",
        value: function initScalesAndAxes() {
          this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scalePoint"]().range([0, this._width]).padding(0.2);
          this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
          this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([this._height, 0]);
          this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale);
          this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_0__["schemeCategory10"]);
        }
      }, {
        key: "initWindowEvents",
        value: function initWindowEvents() {
          window.addEventListener('resize', this.resize.bind(this));
        }
      }, {
        key: "updateScales",
        value: function updateScales() {
          var years = this._data.years;
          var range = [Number.MAX_VALUE, Number.MIN_VALUE];

          this._data.lines.forEach(function (line) {
            var vals = line.data.map(function (el) {
              return el.value;
            });
            var min = Math.min.apply(Math, _toConsumableArray(vals));
            var max = Math.max.apply(Math, _toConsumableArray(vals));
            range[0] = Math.min(range[0], min);
            range[1] = Math.max(range[1], max);
          });

          if (this._data.lines.length === 0) {
            range = this._data.minMax;
          } // sets the domains


          this._xScale.domain(years);

          this._yScale.domain(range);

          var names = this._data.lines.map(function (obj) {
            return obj.name;
          });

          this._cScale.domain(names);
        }
      }, {
        key: "updateAxes",
        value: function updateAxes() {
          var _this6 = this;

          this._xAxis.scale(this._xScale);

          this._svgGroup.select('.axis--x').call(this._xAxis).selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-25)');

          this._yAxis.scale(this._yScale);

          this._svgGroup.select('.axis--y').call(this._yAxis.tickFormat(d3__WEBPACK_IMPORTED_MODULE_0__["format"](".2s")));

          this._svgGroup.select('.yaxis-label').text("".concat(this._yLabel));

          this._svgGroup.select('.xaxis-label').text(function () {
            var parts = _this6._yLabel.split(' ');

            if (parts[parts.length - 1] === 'change') {
              return "".concat(parts[0], " ").concat(parts[1], " value matrix");
            }

            if (parts[parts.length - 1] === 'value') {
              return "".concat(parts[0], " ").concat(parts[1], " change matrix");
            }
          });
        }
      }, {
        key: "updateLines",
        value: function updateLines() {
          var _this7 = this;

          var lines = this._svgGroup.selectAll('.curve').data(this._data.lines).join('path');

          lines.attr("class", "curve").attr("d", function (d) {
            return _this7._line(d.data);
          }).attr("stroke", function (d) {
            return _this7._cScale(d.name);
          });
        }
      }, {
        key: "updateLegend",
        value: function updateLegend() {
          var _this8 = this;

          var elements = this._svgGroup.select('.legend').selectAll('.legend-element').data(this._data.lines).join('g').attr('transform', function (d, i) {
            return "translate(".concat(_this8._width / 4 + i * (3 * _this8._width / 4) / _this8._data.lines.length, ", ").concat(-_this8._margin.top / 2, ")");
          });

          elements.attr('class', 'legend-element').attr('width', 3 * this._width / 4 / this._data.lines.length);
          var circles = elements.selectAll('circle').data(function (d) {
            return [d.name];
          }).join('circle');
          circles.attr('r', 6).attr('fill', function (d) {
            return _this8._cScale(d);
          });
          var labels = elements.selectAll('text').data(function (d) {
            return [d.name];
          }).join('text');
          var width = this._width / 4 / this._data.lines.length;
          var lSize = 20;
          labels.attr('class', 'legend-text').attr('text-anchor', 'start').attr('x', 15).attr('y', 5).text(function (d) {
            var content = d.length > lSize ? d.slice(0, lSize) + '...' : d;
            return content;
          }).text(function (d) {
            var content = d.length > lSize ? d.slice(0, lSize) + '...' : d;
            var size = this.getComputedTextLength();
            return size < width ? content : content.slice(0, lSize * width / size) + '...';
          }).on('mouseover', function (d) {
            var mouse = [d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageX + 10, d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageY + 10];

            _this8._callbacks.lHover({
              line: d,
              mouse: mouse
            });
          }).on('mouseout', this._callbacks.svgOut);
        }
      }]);

      return Line;
    }();
    /***/

  },

  /***/
  "./src/app/charts/matrix.ts":
  /*!**********************************!*\
    !*** ./src/app/charts/matrix.ts ***!
    \**********************************/

  /*! exports provided: Matrix */

  /***/
  function srcAppChartsMatrixTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Matrix", function () {
      return Matrix;
    });
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var Matrix =
    /*#__PURE__*/
    function () {
      function Matrix(chartDiv, callbacks, defaults) {
        _classCallCheck(this, Matrix);

        // chart data
        this._data = null; // Chart div

        this._chartDiv = null; // Svg element

        this._svgCanvas = null; // Group element

        this._svgGroup = null; // margin object

        this._margin = {
          top: 10,
          right: 35,
          bottom: 40,
          left: 125
        }; // scales and axis

        this._xScale = null;
        this._yScale = null;
        this._cScale = null;
        this._lScale = null; // ----

        this._xAxis = null;
        this._yAxis = null; // labels on y axis

        this.Y_LABEL_SIZE = 22; // Is Alive : the lot existis in the selected year
        // Is Active: the lot fits the filter condition 
        // Is Valid : the selected attribute is a valid value in the lot

        this.ALIVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#8f8f8f');
        this.ACTVE_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#afafaf');
        this.VALID_COLOR = d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#cfcfcf');
        this.MODE = null; // callback enabled

        this._yCallbackEnabled = true; // selected labels

        this._xLabelSelected = null;
        this._yLabelSelected = null;
        this._sortIconSelected = null;
        this._lineIconSelected = []; // callbacks

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

      _createClass(Matrix, [{
        key: "setData",
        value: function setData(data, mode, line, sort, click) {
          this.MODE = mode;
          this._data = data;
          this._lineIconSelected = line;
          this._sortIconSelected = sort;
          this._yCallbackEnabled = click;
        }
      }, {
        key: "setHighlight",
        value: function setHighlight(label) {
          this._yLabelSelected = label;
        }
      }, {
        key: "render",
        value: function render() {
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
      }, {
        key: "resize",
        value: function resize() {
          this._svgCanvas.remove();

          this.initSvgAndGroups();
          this.initScalesAndAxes();
          this.render();
        }
      }, {
        key: "initSvgAndGroups",
        value: function initSvgAndGroups() {
          // dimensions using margins convention
          this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
          this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom; // creates the new canvas element

          this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv).append('svg').attr('width', this._chartDiv.clientWidth).attr('height', this._chartDiv.clientHeight).on('mouseout', this._callbacks.svgOut); // creates the group

          this._svgGroup = this._svgCanvas.append('g').attr('class', 'svgGroup').attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')'); // axis groups

          this._svgGroup.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this._height + ')');

          this._svgGroup.append('g').attr('class', 'axis axis--y'); // icons groups


          this._svgGroup.append('g').attr('class', 'sort-icons-group');

          this._svgGroup.append('g').attr('class', 'line-icons-group');
        }
      }, {
        key: "initScalesAndAxes",
        value: function initScalesAndAxes() {
          this._xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).padding(0.075);
          this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._xScale);
          this._yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([this._height, 0]).paddingInner(0.075).paddingOuter(0.25).align(1.0);
          this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._yScale);
          this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]);
          this._lScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_0__["schemeCategory10"]);
        }
      }, {
        key: "initWindowEvents",
        value: function initWindowEvents() {
          window.addEventListener('resize', this.resize.bind(this));
        }
      }, {
        key: "updateScales",
        value: function updateScales() {
          var keys = this._data.map(function (obj) {
            return obj.key;
          });

          if (keys.length < 1) {
            return;
          }

          var polys = this._data[0].value.map(function (obj) {
            return obj.name;
          });

          if (polys.length < 1) {
            return;
          } // sets the domains


          this._xScale.domain(keys);

          this._yScale.domain(polys);

          var zero = 0;

          if (this._data.minMax[0] < 0 && this._data.minMax[1] > 0) {
            zero = 0;
          } else if (this._data.minMax[0] >= 0 && this._data.minMax[1] > 0) {
            zero = this._data.minMax[0];
          } else if (this._data.minMax[0] < 0 && this._data.minMax[1] <= 0) {
            zero = this._data.minMax[1];
          }

          this._cScale.domain([this._data.minMax[0], zero, this._data.minMax[1]]);

          this._lScale.domain(this._lineIconSelected);
        }
      }, {
        key: "updateAxes",
        value: function updateAxes() {
          var _this9 = this;

          this._xAxis.scale(this._xScale);

          this._svgGroup.select('.axis--x').call(this._xAxis).selectAll('text').style('text-anchor', 'end').style('pointer-events', 'auto').style('cursor', 'pointer').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-25)').on('click', function (d) {
            _this9._xLabelSelected = d;

            _this9._callbacks.xLabel(d);

            _this9.highlightXLabel();
          });

          this._yAxis.scale(this._yScale);

          var texts = this._svgGroup.select('.axis--y').call(this._yAxis).selectAll('text').text(function (d) {
            if (d.length > _this9.Y_LABEL_SIZE) {
              return "".concat(d.substring(0, _this9.Y_LABEL_SIZE - 3), "...");
            }

            return d;
          }).style('pointer-events', 'auto').style('cursor', 'not-allowed').on('mouseover', function (d) {
            var current = _this9._data[0].value.filter(function (obj) {
              return obj.name === d;
            });

            current = current.length > 0 ? current[0].name : '';
            _this9._yLabelSelected = current;

            _this9._callbacks.yHover(current);

            _this9.highlightYLabel();
          });

          if (this._yCallbackEnabled) {
            texts.style('cursor', 'pointer').on('click', function (d) {
              return _this9._callbacks.yLabel(d);
            });
          }
        }
      }, {
        key: "updateRectangles",
        value: function updateRectangles() {
          var _this10 = this;

          var polys = this._svgGroup.selectAll(".line-group").data(this._data).join("g");

          polys.attr('class', 'line-group').attr('transform', function (d) {
            return "translate(".concat(_this10._xScale(d.key), ", 0)");
          });
          var rects = polys.selectAll("rect").data(function (d) {
            return d.value;
          }).join("rect");
          rects.attr("y", function (d) {
            return _this10._yScale(d.name);
          }).attr("width", this._xScale.bandwidth()).attr("height", this._yScale.bandwidth()).attr("fill", function (d) {
            if (_this10.MODE === 'value') {
              if (!d.isAlive) {
                return _this10.ALIVE_COLOR;
              } else if (!d.isActive) {
                return _this10.ACTVE_COLOR;
              } else if (!d.isValid) {
                return _this10.VALID_COLOR;
              } else {
                return _this10._cScale(d[_this10.MODE]);
              }
            } else if (_this10.MODE === 'change') {
              if (!d.isAlive) {
                return _this10.ALIVE_COLOR;
              } else if (!d.isActive) {
                return _this10.ACTVE_COLOR;
              } else if (!d.changeValid) {
                return _this10.VALID_COLOR;
              } else {
                return _this10._cScale(d[_this10.MODE]);
              }
            }
          }).on('mouseover', function (d, i, nodes) {
            var year = nodes[i].parentNode.__data__.key;
            var mouse = [d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageX + 10, d3__WEBPACK_IMPORTED_MODULE_0__["event"].pageY + 10];

            _this10._callbacks.rHover({
              year: year,
              data: d,
              mouse: mouse
            });
          });
        }
      }, {
        key: "updateSortIcons",
        value: function updateSortIcons() {
          var _this11 = this;

          var icons = this._svgGroup.select('.sort-icons-group').selectAll("path").data(this._data).join("path");

          icons.attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["symbol"]().type(d3__WEBPACK_IMPORTED_MODULE_0__["symbolTriangle"]).size(100)).style('pointer-events', 'auto').style('cursor', 'pointer').attr('transform', function (d) {
            return "rotate(180) translate(".concat(-_this11._xScale(d.key) - 0.5 * _this11._xScale.bandwidth(), ", ", 0, ")");
          }).on('click', function (d) {
            _this11._sortIconSelected = _this11._sortIconSelected === d.key ? 'name' : d.key;

            _this11._callbacks.sIcon(_this11._sortIconSelected);

            _this11.highlightSortIcon();
          });
        }
      }, {
        key: "updateLineIcons",
        value: function updateLineIcons() {
          var _this12 = this;

          var icons = this._svgGroup.select('.line-icons-group').selectAll("path").data(this._data[0].value).join("path");

          icons.attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["symbol"]().type(d3__WEBPACK_IMPORTED_MODULE_0__["symbolCircle"]).size(100)).style('pointer-events', 'auto').style('cursor', 'pointer').attr('transform', function (d) {
            return "translate(".concat(_this12._width + 0.5 * _this12._margin.right, ", ").concat(_this12._yScale(d.name) + 0.5 * _this12._yScale.bandwidth(), ")");
          }).on('click', this.updateLineIconsClick.bind(this));
        }
      }, {
        key: "highlightYLabel",
        value: function highlightYLabel() {
          var _this13 = this;

          this._svgGroup.select('.axis--y').call(this._yAxis).selectAll('text').text(function (d) {
            if (d.length > _this13.Y_LABEL_SIZE) {
              return "".concat(d.substring(0, _this13.Y_LABEL_SIZE - 3), "...");
            }

            return d;
          }).attr('fill', function (d) {
            var current = _this13._data[0].value.filter(function (obj) {
              return obj.name === _this13._yLabelSelected;
            });

            current = current.length > 0 ? current[0].name : '';
            return current === d ? 'limegreen' : 'currentColor';
          }).attr('font-weight', function (d) {
            var current = _this13._data[0].value.filter(function (obj) {
              return obj.name === _this13._yLabelSelected;
            });

            current = current.length > 0 ? current[0].name : '';
            return current === d ? 'bold' : 'normal';
          });
        }
      }, {
        key: "highlightXLabel",
        value: function highlightXLabel() {
          var _this14 = this;

          this._svgGroup.select('.axis--x').call(this._xAxis).selectAll('text').attr('fill', function (d) {
            return d === _this14._xLabelSelected ? '#f44336' : 'currentColor';
          }).attr('font-weight', function (d) {
            return d === _this14._xLabelSelected ? 'bold' : 'normal';
          });
        }
      }, {
        key: "highlightSortIcon",
        value: function highlightSortIcon() {
          var _this15 = this;

          this._svgGroup.select('.sort-icons-group').selectAll('path').attr('fill', function (d) {
            return +_this15._sortIconSelected && d.key === _this15._sortIconSelected ? '#f44336' : '#bfbfbf';
          });
        }
      }, {
        key: "highlightLineIcon",
        value: function highlightLineIcon() {
          var _this16 = this;

          this._svgGroup.select('.line-icons-group').selectAll('path').attr('fill', function (d) {
            return _this16._lineIconSelected.includes(d.name) ? _this16._lScale(d.name) : '#bfbfbf';
          });
        }
      }, {
        key: "updateLineIconsClick",
        value: function updateLineIconsClick(d) {
          var id = this._lineIconSelected.indexOf(d.name);

          if (id < 0) {
            this._lineIconSelected.push(d.name);
          } else {
            this._lineIconSelected.splice(id, 1);
          }

          this._lScale.domain(this._lineIconSelected);

          this._callbacks.lIcon(this._lineIconSelected);

          this.highlightLineIcon();
        }
      }]);

      return Matrix;
    }();
    /***/

  },

  /***/
  "./src/app/components/config/config.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/config/config.component.ts ***!
    \*******************************************************/

  /*! exports provided: ConfigComponent */

  /***/
  function srcAppComponentsConfigConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigComponent", function () {
      return ConfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ConfigComponent_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var boro_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boro_r49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boro_r49.toUpperCase(), " ");
      }
    }

    function ConfigComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var poly_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", poly_r50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poly_r50.toUpperCase(), " ");
      }
    }

    function ConfigComponent_mat_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nav_r51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r51.toUpperCase(), " ");
      }
    }

    function ConfigComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mode_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mode_r52.toUpperCase(), " ");
      }
    }

    var ConfigComponent =
    /*#__PURE__*/
    function () {
      function ConfigComponent(api, data, events, state) {
        _classCallCheck(this, ConfigComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
      }

      _createClass(ConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "boroughSelectChanged",
        value: function boroughSelectChanged(event) {
          // cleans the line chart
          this.events.vis.lineIconClicked.emit([]); // cleans the levels

          var levels = this.data.meta.levels;
          var updates = levels.filter(function (str) {
            return str !== 'borough';
          }).reduce(function (prev, key) {
            return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
          }, {});
          var previous = this.state.activeGeometryParameters;
          this.state.activeGeometryParameters = Object.assign(previous, updates); // cleans the filters

          this.state.activeFilterParameters = {};
          this.data.filters = {}; // changed value

          var borough = {
            borough: event.value
          }; // emits the event

          this.events.config.boroughSelectChanged.emit(borough);
        }
      }, {
        key: "polygonsSelectChanged",
        value: function polygonsSelectChanged(event) {
          // cleans the line chart
          this.events.vis.lineIconClicked.emit([]); // cleans the levels

          var levels = this.data.meta.levels;
          var updates = levels.filter(function (str) {
            return str !== 'borough';
          }).reduce(function (prev, key) {
            return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
          }, {});
          var previous = this.state.activeGeometryParameters;
          this.state.activeGeometryParameters = Object.assign(previous, updates); // cleans the filters

          this.state.activeFilterParameters = {};
          this.data.filters = {}; // changed value

          var polygon = {
            polygon: event.value
          }; // emits the event

          this.events.config.polygonSelectChanged.emit(polygon);
        }
      }, {
        key: "navigationSelectChanged",
        value: function navigationSelectChanged(event) {
          // cleans the line chart
          this.events.vis.lineIconClicked.emit([]); // cleans the levels

          var levels = this.data.meta.levels;
          var updates = levels.filter(function (str) {
            return str !== 'borough';
          }).reduce(function (prev, key) {
            return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
          }, {});
          var previous = this.state.activeGeometryParameters;
          this.state.activeGeometryParameters = Object.assign(previous, updates); // cleans the filters

          this.state.activeFilterParameters = {};
          this.data.filters = {}; // changed value

          var navigation = {
            navigation: event.value
          }; // emits the event

          this.events.config.navigationSelectChanged.emit(navigation);
        }
      }, {
        key: "mapModeSelectChanged",
        value: function mapModeSelectChanged(event) {
          // changed value
          var mode = {
            mode: event.value
          }; // emits the event

          this.events.config.modeSelectChanged.emit(mode);
        }
      }]);

      return ConfigComponent;
    }();

    ConfigComponent.ɵfac = function ConfigComponent_Factory(t) {
      return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]));
    };

    ConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigComponent,
      selectors: [["app-config"]],
      decls: 22,
      vars: 18,
      consts: [[1, "widget", "top", "submenu"], [1, "options"], [3, "color"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function ConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Borough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_5_listener($event) {
            return ctx.boroughSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfigComponent_mat_option_6_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Polygons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.polygonsSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfigComponent_mat_option_11_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_15_listener($event) {
            return ctx.navigationSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConfigComponent_mat_option_16_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Map mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigComponent_Template_mat_select_selectionChange_20_listener($event) {
            return ctx.mapModeSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConfigComponent_mat_option_21_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: [".widget[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 140px;\n\n  padding: 10px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n}\n\n.submenu[_ngcontent-%COMP%] {\n  right: 90px;\n}\n\n.toogle-button[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 8px;\n}\n\n.item[_ngcontent-%COMP%] {\n  float:left;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 12px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 130px !important;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7O0VBRVosYUFBYTs7RUFFYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogMTQwcHg7XG5cbiAgcGFkZGluZzogMTBweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcbn1cblxuLnN1Ym1lbnUge1xuICByaWdodDogOTBweDtcbn1cblxuLnRvb2dsZS1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLml0ZW0ge1xuICBmbG9hdDpsZWZ0O1xufVxuLmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50OyAgXG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-config',
          templateUrl: './config.component.html',
          styleUrls: ['./config.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/filter/filter.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/filter/filter.component.ts ***!
    \*******************************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppComponentsFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_charts_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/charts/bar */
    "./src/app/charts/bar.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["filter"];

    function FilterComponent_div_2_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attr_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", attr_r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r35.toUpperCase(), " ");
      }
    }

    function FilterComponent_div_2_mat_form_field_10_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r37.toUpperCase(), " ");
      }
    }

    function FilterComponent_div_2_mat_form_field_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterComponent_div_2_mat_form_field_10_Template_mat_select_selectionChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var hist_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.categorySelectChanged(hist_r31.key, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_div_2_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hist_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r33.colorControl.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r33.state.activeFilterParameters[hist_r31.key].category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.getCategory(hist_r31.key));
      }
    }

    function FilterComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterComponent_div_2_Template_mat_select_selectionChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var hist_r31 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.attributeSelectChanged(hist_r31.key, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_div_2_mat_option_9_Template, 2, 2, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_div_2_mat_form_field_10_Template, 5, 3, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_2_Template_button_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var hist_r31 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.delFilter(hist_r31.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hist_r31 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var FilterComponent =
    /*#__PURE__*/
    function () {
      function FilterComponent(api, data, events, state) {
        _classCallCheck(this, FilterComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
        this.filterExp = '';
        this._filters = {};
      }

      _createClass(FilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeDataEvents();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._filtersDivs.changes.subscribe(this.renderFilters.bind(this));
        }
      }, {
        key: "subscribeDataEvents",
        value: function subscribeDataEvents() {
          this.events.data.updateFilters.subscribe(this.renderFilters.bind(this));
        }
      }, {
        key: "renderFilters",
        value: function renderFilters(keepBrush) {
          var _this17 = this;

          var keys = Object.keys(this.data.filters);

          this._filtersDivs.forEach(function (el, divId) {
            var key = keys[divId];

            if (!key) {
              return;
            }

            var div = el.nativeElement;
            var cbs = {
              brush: _this17.brushChanged.bind(_this17)
            };
            var hist = new src_app_charts_bar__WEBPACK_IMPORTED_MODULE_2__["Bar"](div, cbs, key);
            _this17._filters[key] = hist;
            var range = keepBrush ? _this17.state.activeFilterParameters[key].range || [] : [];

            var id = _this17.data.filters[key].findIndex(function (obj) {
              return obj.bin === 'empty';
            });

            if (id >= 0) {
              _this17.data.filters[key].splice(id, 1);
            }

            var data = _this17.data.filters[key].filter(function (obj) {
              return obj.count > 0;
            }); // runs


            _this17._filters[key].setData(data, range);

            _this17._filters[key].render();
          });
        } // ---- Toolbar events

      }, {
        key: "addFilter",
        value: function addFilter() {
          var state = {
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
      }, {
        key: "addFilterExp",
        value: function addFilterExp(key) {
          if (this.filterExp === '') {
            this.filterExp = "".concat(key);
          } else {
            this.filterExp += " and ".concat(key);
          }
        }
      }, {
        key: "updateSummary",
        value: function updateSummary() {
          this.state.activeConfigParameters.filterExp = this.filterExp;
          this.events.filters.updateSummary.emit();
        } // ---- Filter events

      }, {
        key: "delFilter",
        value: function delFilter(key) {
          var state = {
            key: key,
            params: null
          };
          this.delFilterExp(key);
          this.events.filters.updated.emit(state);
        }
      }, {
        key: "delFilterExp",
        value: function delFilterExp(key) {
          var parts = this.filterExp.split(' ');
          var id = parts.indexOf(key);

          if (id === 0) {
            parts.splice(id, 2);
          } else {
            parts.splice(id - 1, 2);
          }

          this.filterExp = parts.join(' ');
        }
      }, {
        key: "attributeSelectChanged",
        value: function attributeSelectChanged(key, event) {
          var state = {
            key: key,
            params: {
              attribute: event.value,
              category: this.data.meta.attributes[event.value].categories[0]
            }
          };
          this.events.filters.updated.emit(state);
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          var _this18 = this;

          var filtered = Object.keys(this.data.meta.attributes).filter(function (key) {
            var obj = _this18.data.meta.attributes[key];
            return obj.histogramAlloed;
          });
          return filtered;
        }
      }, {
        key: "categorySelectChanged",
        value: function categorySelectChanged(key, event) {
          var state = {
            key: key,
            params: {
              category: event.value
            }
          };
          this.events.filters.updated.emit(state);
        }
      }, {
        key: "getCategory",
        value: function getCategory(key) {
          var attr = this.state.activeFilterParameters[key].attribute;

          if (this.state.activeFilterParameters[key].attribute) {
            return this.data.meta.attributes[attr].categories;
          }

          return [];
        } // ----- Bar chart events

      }, {
        key: "brushChanged",
        value: function brushChanged(key, event) {
          var state = {
            key: key,
            params: {
              range: event.value
            }
          };
          this.events.filters.brushed.emit(state);
        }
      }]);

      return FilterComponent;
    }();

    FilterComponent.ɵfac = function FilterComponent_Factory(t) {
      return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]));
    };

    FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterComponent,
      selectors: [["app-filter"]],
      viewQuery: function FilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._filtersDivs = _t);
        }
      },
      decls: 16,
      vars: 10,
      consts: [[1, "widget", "top", "left"], [1, "filtersContainer"], ["class", "filter", 4, "ngFor", "ngForOf"], [1, "addToolbar", "mat-toolbar-bottom"], ["mat-icon-button", "", 3, "click"], [3, "color"], [2, "font-size", "12px !important", "margin-right", "10px"], ["matInput", "", 2, "width", "25% !important", 3, "ngModel", "ngModelChange"], ["currentFilterExp", ""], [1, "spacer"], [1, "filter"], [1, "centered", "mat-toolbar-top"], [2, "margin-right", "20px"], [1, "options"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "color", 4, "ngIf"], [1, "bar-chart"], ["filter", ""], [3, "value"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterComponent_div_2_Template, 17, 8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_5_listener($event) {
            return ctx.addFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Boolean expression:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.filterExp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_13_listener($event) {
            return ctx.updateSummary();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "play_circle_filled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.matrixActive && ctx.state.filterActive ? 100 : 0)("z-index", ctx.state.matrixActive && ctx.state.filterActive ? 2 : 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.data.filters));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]],
      styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 600px;\n  height: 800px;\n  max-height: calc(100% - 20px);\n\n  left: 815px;\n  padding: 2px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n\n\n.addToolbar[_ngcontent-%COMP%] {\n  \n  position:absolute;\n  height: 50px;\n  width: calc(100% - 4px);\n\n  padding-top: 5px;\n  padding-bottom: 5px;\n  \n\n  bottom: 0px;\n}\n\n.filtersContainer[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n\n.filtersContainer[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.filter[_ngcontent-%COMP%] {\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 585px;\n  height: 365px;\n\n  padding: 2px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  margin: 5px;\n}\n\n.bar-chart[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0px;\n\n  width: 100%;\n  height: calc(100% - 65px);\n}\n\n.options[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 167px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 130px !important;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixXQUFXO0VBQ1gsWUFBWTs7RUFFWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7RUFDM0MseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLGdCQUFnQjtFQUNoQixtQkFBbUI7OztFQUduQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osYUFBYTs7RUFFYixZQUFZOztFQUVaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcblxuICBsZWZ0OiA4MTVweDtcbiAgcGFkZGluZzogMnB4O1xuXG4gIC8qIG1lbnUgc3R5bGUgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTApO1xuXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIG1hdHJpeCBuYXZpZ2F0aW9uICovXG4uYWRkVG9vbGJhciB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XG5cbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgXG5cbiAgYm90dG9tOiAwcHg7XG59XG5cbi5maWx0ZXJzQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmZpbHRlcnNDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbHRlciB7XG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgd2lkdGg6IDU4NXB4O1xuICBoZWlnaHQ6IDM2NXB4O1xuXG4gIHBhZGRpbmc6IDJweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcblxuICBtYXJnaW46IDVweDtcbn1cblxuLmJhci1jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xufVxuXG4ub3B0aW9ucyAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogMTY3cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7ICBcbn1cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filter',
          templateUrl: './filter.component.html',
          styleUrls: ['./filter.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
        }];
      }, {
        _filtersDivs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['filter']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/layers/layers.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/layers/layers.component.ts ***!
    \*******************************************************/

  /*! exports provided: LayersComponent */

  /***/
  function srcAppComponentsLayersLayersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayersComponent", function () {
      return LayersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        "label": true
      };
    };

    var LayersComponent =
    /*#__PURE__*/
    function () {
      function LayersComponent(api, data, events, state) {
        _classCallCheck(this, LayersComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
      }

      _createClass(LayersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "layerSelected",
        value: function layerSelected(layer) {
          var state = {
            layersActive: false,
            activeLayer: this.state.activeLayer === layer ? '' : layer
          };
          this.events.layers.activeLayerChanged.emit(state);
        }
      }]);

      return LayersComponent;
    }();

    LayersComponent.ɵfac = function LayersComponent_Factory(t) {
      return new (t || LayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]));
    };

    LayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayersComponent,
      selectors: [["app-layers"]],
      decls: 6,
      vars: 7,
      consts: [[1, "widget", "submenu"], ["mat-button", "", 1, "item", 3, "click"], [3, "color"], [3, "ngClass"]],
      template: function LayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_Template_button_click_1_listener($event) {
            return ctx.layerSelected("pops");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "POPs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.state.layersActive ? 100 : 0)("z-index", ctx.state.layersActive ? 2 : 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.state.activeLayer === "pops" ? "warn" : "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
      styles: [".widget[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n}\n\n.submenu[_ngcontent-%COMP%] {\n  right: 13px;\n  top: 255px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-top: -12px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5ZXJzL2xheWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldCB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC8qIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG59XG5cbi5zdWJtZW51IHtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMjU1cHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layers',
          templateUrl: './layers.component.html',
          styleUrls: ['./layers.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/legend/legend.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/legend/legend.component.ts ***!
    \*******************************************************/

  /*! exports provided: LegendComponent */

  /***/
  function srcAppComponentsLegendLegendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegendComponent", function () {
      return LegendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/charts/cmap */
    "./src/app/charts/cmap.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var _c0 = ["matcolormap"];
    var _c1 = ["mapcolormap"];

    function LegendComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, ctx_r23.state.activeGeometryParameters.neighborhood, 0, 22), "", ctx_r23.state.activeGeometryParameters.neighborhood.length >= 22 ? "..." : "", "");
      }
    }

    function LegendComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.state.activeGeometryParameters.block);
      }
    }

    function LegendComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.state.activeSummaryParameters.category.toUpperCase());
      }
    }

    function LegendComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.state.activeSummaryParameters.category.toUpperCase());
      }
    }

    var LegendComponent =
    /*#__PURE__*/
    function () {
      function LegendComponent(data, events, state) {
        _classCallCheck(this, LegendComponent);

        this.data = data;
        this.events = events;
        this.state = state;
      }

      _createClass(LegendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeDataEvents();
          this._matColorMap = new src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__["Cmap"](this._matColorMatDiv.nativeElement);
          this._mapColorMap = new src_app_charts_cmap__WEBPACK_IMPORTED_MODULE_1__["Cmap"](this._mapColorMapDiv.nativeElement);
        }
      }, {
        key: "subscribeDataEvents",
        value: function subscribeDataEvents() {
          this.events.data.updateVisMatrix.subscribe(this.loadCmap.bind(this, 'mat'));
          this.events.data.updateMapGeometryAndFunction.subscribe(this.loadCmap.bind(this, 'map'));
          this.events.data.updateMapFunction.subscribe(this.loadCmap.bind(this, 'map'));
        }
      }, {
        key: "loadCmap",
        value: function loadCmap(visElement) {
          var mode = visElement === 'mat' ? this.state.activeSummaryParameters.mode : this.state.activeConfigParameters.mode; // get the min and max values

          var minMax = [];

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
      }, {
        key: "changeCMap",
        value: function changeCMap() {
          this.state.activeConfigParameters.cmapPercentiles = !this.state.activeConfigParameters.cmapPercentiles;
          this.events.state.configCMapChanged.emit();
        }
      }]);

      return LegendComponent;
    }();

    LegendComponent.ɵfac = function LegendComponent_Factory(t) {
      return new (t || LegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]));
    };

    LegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LegendComponent,
      selectors: [["app-legend"]],
      viewQuery: function LegendComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matColorMatDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._mapColorMapDiv = _t.first);
        }
      },
      decls: 62,
      vars: 17,
      consts: [[1, "widget", "bottom", "right"], [1, "levels"], [1, "mat-toolbar-top"], [1, "centered"], [1, "levels-p"], ["class", "centered", 4, "ngIf"], [1, "spacer"], [1, "check", 3, "color", "change"], [1, "cmap"], [2, "display", "flex", "padding-left", "16px"], [1, "bottom", 2, "height", "70px"], ["matcolormap", ""], ["mapcolormap", ""]],
      template: function LegendComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LegendComponent_Template_mat_checkbox_change_14_listener($event) {
            return ctx.changeCMap();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]],
      styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 500px;\n  height: 250px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.levels[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 60px !important;\n}\n\n.levels-p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.cmap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc((100% - 90px) / 2) ;\n  margin-bottom: 12px;\n}\n\n.check[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixhQUFhOztFQUViLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsK0RBQXVEOztFQUF2RCx1REFBdUQ7RUFDdkQ7OzZDQUUyQztJQUN6Qyx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldCB7XG4gIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgcG9zaXRpb246YWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG5cbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubGV2ZWxzIG1hdC10b29sYmFye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZXZlbHMtcCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC0gOTBweCkgLyAyKSA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jaGVjayB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-legend',
          templateUrl: './legend.component.html',
          styleUrls: ['./legend.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
        }];
      }, {
        _matColorMatDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['matcolormap', {
            static: true
          }]
        }],
        _mapColorMapDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mapcolormap', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/map/map.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/map/map.component.ts ***!
    \*************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_mapview_mapview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/mapview/mapview */
    "./src/app/mapview/mapview.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts"); // angular imports
    // mapview imports


    var _c0 = ["mapView"];

    var MapComponent =
    /*#__PURE__*/
    function () {
      // map component constructor
      function MapComponent(api, data, events, state) {
        _classCallCheck(this, MapComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state; // map view instance

        this._mapView = null;
      } // initialization hook


      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var callbacks;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // map callbacks
                    callbacks = {
                      mouse: {
                        mouseDown: this.highlightPoly.bind(this)
                      },
                      key: {}
                    }; // cretes the map

                    this._mapView = new src_app_mapview_mapview__WEBPACK_IMPORTED_MODULE_2__["MapView"](this._mapDiv.nativeElement, callbacks);
                    _context.next = 4;
                    return this._mapView.initLayers('index.json');

                  case 4:
                    // subscribe events
                    this.subscribeDataEvents();
                    this.subscribeStateEvents(); // sinalizes that mapview is ready

                    this.events.map.initialized.emit();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // events handled by mapview

      }, {
        key: "subscribeStateEvents",
        value: function subscribeStateEvents() {
          this.events.state.selectedPolygonChanged.subscribe(this.updateHighlightedPolygon.bind(this));
          this.events.state.activeLayerChanged.subscribe(this.loadPopsLayer.bind(this));
        } // events handled by mapview

      }, {
        key: "subscribeDataEvents",
        value: function subscribeDataEvents() {
          this.events.data.updateMapGeometryAndFunction.subscribe(this.loadLayerGeometryAndFunction.bind(this));
          this.events.data.updateMapFunction.subscribe(this.loadLayerScalarField.bind(this));
        }
      }, {
        key: "loadLayerGeometryAndFunction",
        value: function loadLayerGeometryAndFunction() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadLayerGeometry();

                  case 2:
                    _context2.next = 4;
                    return this.loadLayerScalarField();

                  case 4:
                    _context2.next = 6;
                    return this.loadPopsLayer();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadPopsLayer",
        value: function loadPopsLayer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var config;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // removes the previous loaded layer    
                    this._mapView.delLayer('pops'); // layer config


                    config = {
                      selectable: false,
                      visible: this.state.activeLayer === 'pops'
                    }; // loads the payer

                    _context3.next = 4;
                    return this._mapView.addLayer('point', 'pops', this.data.layers['pops'], config);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // loads the polygon layer

      }, {
        key: "loadLayerGeometry",
        value: function loadLayerGeometry() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var config;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // removes the previous loaded layer    
                    this._mapView.delLayer('pluto'); // layer config


                    config = {
                      selectable: true
                    }; // loads the payer

                    _context4.next = 4;
                    return this._mapView.addLayer('polygon', 'pluto', this.data.geometry, config);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // loads the scalar function

      }, {
        key: "loadLayerScalarField",
        value: function loadLayerScalarField() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var mode, year, feats, values, func, _loop, nId, fMin, fMax, _ref, _ref2;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    mode = this.state.activeConfigParameters.mode;
                    year = this.state.activeGeometryParameters.year;

                    if (year) {
                      _context5.next = 4;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 4:
                    feats = this.data.geometry.features;
                    values = this.data.summary[year].filter(function (obj) {
                      return obj.isAlive;
                    });
                    values.sort(function (a, b) {
                      return a.name < b.name ? 1 : -1;
                    });
                    func = [];

                    _loop = function _loop(nId) {
                      var count = feats[nId].geometry.length;
                      var name = feats[nId].properties.name;
                      var pos = values.findIndex(function (obj) {
                        return obj.name === name;
                      });
                      var value = null;

                      if (pos >= 0) {
                        var current = values[pos];
                        4;

                        if (!current.isAlive) {
                          value = 'notAlive';
                        } else if (!current.isActive) {
                          value = 'notActive';
                        } else if (mode === 'value' && !current.isValid) {
                          value = 'notValid';
                        } else if (mode === 'change' && !current.changeValid) {
                          value = 'notChange';
                        } else {
                          value = current[mode];
                        }
                      }

                      func.push.apply(func, _toConsumableArray(Array(count).fill(value)));
                    };

                    for (nId = 0; nId < feats.length; nId++) {
                      _loop(nId);
                    }

                    fMin = null, fMax = null;

                    if (mode === 'value') {
                      _ref = [this.data.summary.min, this.data.summary.max];
                      fMin = _ref[0];
                      fMax = _ref[1];
                    } else {
                      _ref2 = [this.data.summary.changeMin, this.data.summary.changeMax];
                      fMin = _ref2[0];
                      fMax = _ref2[1];
                    }

                    _context5.next = 14;
                    return this._mapView.updateLayerFunction('pluto', {
                      func: func,
                      fMin: fMin,
                      fMax: fMax
                    });

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "highlightPoly",
        value: function highlightPoly(polygon) {
          var name = "";
          var id = +polygon[0];

          if (id >= 0) {
            name = this.data.geometry.features[id].properties.name;
          }

          this.events.map.polyPicked.emit({
            name: name,
            origin: 'map'
          });
        }
      }, {
        key: "updateHighlightedPolygon",
        value: function updateHighlightedPolygon(origin) {
          var _this19 = this;

          if (origin === 'vis') {
            var id = this.data.geometry.features.findIndex(function (obj) {
              return obj.properties.name === _this19.state.selectedPolygon;
            });

            this._mapView.pick('pluto', id);
          }
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._mapDiv = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [[1, "full-screen"], ["mapView", ""]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        }
      },
      styles: [".full-screen[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
        }];
      }, {
        _mapDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mapView', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _config_config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../config/config.component */
    "./src/app/components/config/config.component.ts");
    /* harmony import */


    var _layers_layers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../layers/layers.component */
    "./src/app/components/layers/layers.component.ts"); // angular imports


    var _c0 = function _c0() {
      return {
        "label": true
      };
    };

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(api, data, events, state) {
        _classCallCheck(this, MenuComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.configActive = false;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buttonClicked",
        value: function buttonClicked(widget) {
          if (widget === 'config') {
            this.state.configActive = !this.state.configActive;
          } else if (widget === 'layers') {
            this.state.layersActive = !this.state.layersActive;
          } else if (widget === 'matrix') {
            this.state.matrixActive = !this.state.matrixActive;
          }
        }
      }, {
        key: "toggleLegend",
        value: function toggleLegend() {
          this.state.legendActive = !this.state.legendActive;
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 23,
      vars: 12,
      consts: [[1, "menu", "top", "right"], ["mat-button", "", 1, "item", 3, "click"], [3, "color"], [3, "ngClass"], ["mat-button", "", 1, "toogle-button", 3, "click"], [1, "item", 3, "color"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener($event) {
            return ctx.buttonClicked("config");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Config");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener($event) {
            return ctx.buttonClicked("matrix");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Matrix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_11_listener($event) {
            return ctx.buttonClicked("layers");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "layers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Layers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_16_listener($event) {
            return ctx.toggleLegend();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _config_config_component__WEBPACK_IMPORTED_MODULE_8__["ConfigComponent"], _layers_layers_component__WEBPACK_IMPORTED_MODULE_9__["LayersComponent"]],
      styles: [".menu[_ngcontent-%COMP%] {\n    \n    position: absolute;\n  \n    \n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n      \n    \n    border: 1px solid #bfbfbf;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.85);    \n  }\n\n  .label[_ngcontent-%COMP%] {\n    margin-top: -12px;\n    font-size: 12px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIC8qIG1lbnUgcG9zaXRpb24gc2NoZW1lKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgIC8qIGxheW91dCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIFxuICAgIC8qIG1lbnUgc3R5bGUgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpOyAgICBcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tooltip/tooltip.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/tooltip/tooltip.component.ts ***!
    \*********************************************************/

  /*! exports provided: TooltipComponent */

  /***/
  function srcAppComponentsTooltipTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TooltipComponent_mat_toolbar_1_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.info.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r53.info.data ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 3, ctx_r53.info.data.name, 0, 22) : "", "", ctx_r53.info.data ? ctx_r53.info.data.name.length >= 22 ? "..." : "" : "", " ");
      }
    }

    function TooltipComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.tooltipContent());
      }
    }

    function TooltipComponent_mat_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.info.line);
      }
    }

    var TooltipComponent =
    /*#__PURE__*/
    function () {
      function TooltipComponent() {
        _classCallCheck(this, TooltipComponent);
      }

      _createClass(TooltipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tooltipContent",
        value: function tooltipContent() {
          if (!this.info.data) return '';

          if (!this.info.data.isAlive) {
            return 'Lot Not Alive';
          } else if (!this.info.data.isActive) {
            return 'Inactive Lot';
          } else if (this.info.mode === 'value' && !this.info.data.isValid) {
            return 'Invalid Value';
          } else if (this.info.mode === 'change' && !this.info.data.changeValid) {
            return 'Invalid Change';
          } else {
            return this.info.data[this.info.mode].toLocaleString(undefined, {
              minimumFractionDigits: 2
            });
          }
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)();
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["app-tooltip"]],
      inputs: {
        isActive: "isActive",
        top: "top",
        left: "left",
        info: "info"
      },
      decls: 4,
      vars: 13,
      consts: [["class", "mat-toolbar-top header", 4, "ngIf"], ["style", "width: 100%; height: calc(100% - 30px);", 4, "ngIf"], ["class", "mat-toolbar-top header centered", 4, "ngIf"], [1, "mat-toolbar-top", "header"], [1, "centered"], [1, "levels-p"], [2, "width", "100%", "height", "calc(100% - 30px)"], [1, "mat-toolbar-top", "header", "centered"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipComponent_mat_toolbar_1_Template, 10, 7, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TooltipComponent_div_2_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TooltipComponent_mat_toolbar_3_Template, 4, 1, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.line === undefined ? "widgetMat" : "widgetLine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.isActive ? 100 : 0)("z-index", ctx.isActive ? 5 : 0 - 1)("left", ctx.left, "px")("top", ctx.top, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.line);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
      styles: [".widgetMat[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 235px;\n  height: 90px;\n\n  padding: 1px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.widgetLine[_ngcontent-%COMP%] {\n  \n  position: absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 215px;\n  height: 30px;\n\n  padding: 1px;\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjs7RUFFdEIsWUFBWTtFQUNaLFlBQVk7O0VBRVosWUFBWTs7RUFFWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7RUFDM0MseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osWUFBWTs7RUFFWixZQUFZOztFQUVaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsK0RBQXVEOztFQUF2RCx1REFBdUQ7RUFDdkQ7OzZDQUUyQztFQUMzQyx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0TWF0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogbGF5b3V0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICB3aWR0aDogMjM1cHg7XG4gIGhlaWdodDogOTBweDtcblxuICBwYWRkaW5nOiAxcHg7XG5cbiAgLyogbWVudSBzdHlsZSAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG5cbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLndpZGdldExpbmUge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAvKiBsYXlvdXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuXG4gIHBhZGRpbmc6IDFweDtcblxuICAvKiBtZW51IHN0eWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKTtcblxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tooltip',
          templateUrl: './tooltip.component.html',
          styleUrls: ['./tooltip.component.css']
        }]
      }], function () {
        return [];
      }, {
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        top: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        left: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/vis/vis.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/vis/vis.component.ts ***!
    \*************************************************/

  /*! exports provided: VisComponent */

  /***/
  function srcAppComponentsVisVisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisComponent", function () {
      return VisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_charts_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/charts/matrix */
    "./src/app/charts/matrix.ts");
    /* harmony import */


    var src_app_charts_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/charts/line */
    "./src/app/charts/line.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../tooltip/tooltip.component */
    "./src/app/components/tooltip/tooltip.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["matrix"];
    var _c1 = ["line"];

    function VisComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", step_r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r12, " ");
      }
    }

    function VisComponent_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attr_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", attr_r13.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r13.key.toUpperCase(), " ");
      }
    }

    function VisComponent_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r14)("disabled", cat_r14 === "NONE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r14.toUpperCase(), " ");
      }
    }

    function VisComponent_mat_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var met_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", met_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", met_r15.toUpperCase(), " ");
      }
    }

    function VisComponent_mat_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mode_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", mode_r16 === "change" ? "VALUE" : "CHANGE", " & ", mode_r16.toUpperCase(), " ");
      }
    }

    function VisComponent_mat_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sort_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sort_r17)("disabled", sort_r17 === "year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r17.toUpperCase(), " ");
      }
    }

    function VisComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_div_45_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.navButtonClicked("neighborhood");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.state.activeLevel === "neighborhood");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, ctx_r9.state.activeGeometryParameters.neighborhood, 0, 22), "", ctx_r9.state.activeGeometryParameters.neighborhood.length >= 22 ? "..." : "", "");
      }
    }

    function VisComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_div_46_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.navButtonClicked("block");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.state.activeLevel === "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.state.activeGeometryParameters.block);
      }
    }

    var VisComponent =
    /*#__PURE__*/
    function () {
      function VisComponent(api, data, events, state) {
        _classCallCheck(this, VisComponent);

        this.api = api;
        this.data = data;
        this.events = events;
        this.state = state;
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('warn');
        this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](12);
        this.tooltip = {
          show: false,
          top: 10,
          left: 10,
          info: {}
        };
      }

      _createClass(VisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeDataEvents();
          this.subscribeStateEvents();
          var matDefaults = {
            xLabel: this.state.activeGeometryParameters.year,
            sIcon: 'name'
          };
          var matCallbacks = {
            xLabel: this.yearLabelClicked.bind(this),
            yLabel: this.polyLabelClicked.bind(this),
            yHover: this.polyLabelHovered.bind(this),
            sIcon: this.sortIconClicked.bind(this),
            lIcon: this.lineIconClicked.bind(this),
            rHover: this.polyRectHovered.bind(this),
            svgOut: this.svgOut.bind(this)
          };
          this._matrix = new src_app_charts_matrix__WEBPACK_IMPORTED_MODULE_2__["Matrix"](this._matrixDiv.nativeElement, matCallbacks, matDefaults);
          var attr = "".concat(this.state.activeSummaryParameters.attribute, " (").concat(this.state.activeSummaryParameters.category, ")").toLowerCase();
          var lineDefaults = {
            yLabel: this.state.activeSummaryParameters.mode === 'change' ? "".concat(attr, " value") : "".concat(attr, " change")
          };
          var lineCallbacks = {
            lHover: this.lineLegendHovered.bind(this),
            svgOut: this.svgOut.bind(this)
          };
          this._line = new src_app_charts_line__WEBPACK_IMPORTED_MODULE_3__["Line"](this._lineDiv.nativeElement, lineCallbacks, lineDefaults);
        } // ---- Component subscriptions

      }, {
        key: "subscribeDataEvents",
        value: function subscribeDataEvents() {
          var _this20 = this;

          this.events.data.updateVisMatrix.subscribe(function () {
            _this20.loadMatrix();

            _this20.loadLine();
          });
        }
      }, {
        key: "subscribeStateEvents",
        value: function subscribeStateEvents() {
          var _this21 = this;

          this.events.state.pageParametersChanged.subscribe(function () {
            _this21.loadMatrix();

            _this21.loadLine();
          });
          this.events.state.sortParametersChanged.subscribe(function () {
            _this21.loadMatrix();

            _this21.loadLine();
          });
          this.events.state.lineCurvesChanged.subscribe(this.loadLine.bind(this));
          this.events.state.selectedPolygonChanged.subscribe(this.highlightPolyLabel.bind(this));
        }
      }, {
        key: "matrixSortFunction",
        value: function matrixSortFunction() {
          var _this22 = this;

          if (this.state.activeSortParameters.sortBy === 'name') {
            return function (a, b) {
              return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            };
          }

          if (!isNaN(+this.state.activeSortParameters.sortBy)) {
            return function (a, b) {
              var mode = _this22.state.activeSummaryParameters.mode;

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
      }, {
        key: "prepareMatrixData",
        value: function prepareMatrixData() {
          var data = this.data.summary;
          var mode = this.state.activeSummaryParameters.mode;
          var page = this.state.activePageParameters.currentPage;
          var size = this.state.activePageParameters.pageSize;
          var years = Object.keys(data).filter(function (d) {
            return !isNaN(+d);
          });
          var sortYear = '';

          if (isNaN(+this.state.activeSortParameters.sortBy)) {
            sortYear = years[0];
          } else {
            sortYear = this.state.activeSortParameters.sortBy;
          } // original order


          var original = {};
          data[sortYear].forEach(function (d, i) {
            original[d.name] = i;
          }); // copies the year to be sorted

          var yearCopy = _toConsumableArray(data[sortYear]);

          yearCopy.sort(this.matrixSortFunction().bind(this)); // pagination

          yearCopy = yearCopy.slice(page * size, (page + 1) * size); // sort the other years

          var matData = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop2 = function _loop2() {
              var year = _step.value;
              var obj = {
                key: year,
                value: yearCopy.map(function (d) {
                  var pos = original[d.name];
                  return data[year][pos];
                })
              };
              matData.push(obj);
            };

            for (var _iterator = years[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop2();
            } // get the min and max values

          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var minMax = [];

          if (mode === 'value') {
            minMax = [+data.min.toFixed(2), +data.max.toFixed(2)];
          } else {
            minMax = [+data.changeMin.toFixed(2), +data.changeMax.toFixed(2)];
          }

          matData['minMax'] = minMax;
          return matData;
        }
      }, {
        key: "loadMatrix",
        value: function loadMatrix() {
          var mode = this.state.activeSummaryParameters.mode;
          var line = this.state.activeLineChartCurves;
          var sort = this.state.activeSortParameters.sortBy;
          var click = !(this.state.activeLevel === 'neighborhood' && this.state.activeConfigParameters.navigation === 'skip blocks') && !(this.state.activeLevel === 'block' && this.state.activeConfigParameters.navigation === 'complete');
          var data = this.prepareMatrixData();

          this._matrix.setData(data, mode, line, sort, click);

          this._matrix.render();
        }
      }, {
        key: "prepareLineData",
        value: function prepareLineData() {
          var data = this.data.summary;
          var years = Object.keys(data).filter(function (d) {
            return !isNaN(+d);
          });
          var mode = this.state.activeSummaryParameters.mode === 'change' ? 'value' : 'change';
          var neighs = this.state.activeLineChartCurves;
          var lineData = {
            minMax: [],
            lines: []
          };
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop3 = function _loop3() {
              var name = _step2.value;
              var neighData = {
                name: name,
                data: []
              };
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = years[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var year = _step3.value;
                  var current = data[year].find(function (obj) {
                    return obj.name === name;
                  });
                  var value = current[mode];
                  var valid = current.isAlive && current.isActive && current.isValid;
                  neighData.data.push({
                    year: year,
                    value: value,
                    valid: valid
                  });
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              lineData.lines.push(neighData);
            };

            for (var _iterator2 = neighs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop3();
            } // get the min and max values

          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var minMax = [];

          if (mode === 'value') {
            minMax = [+data.min.toFixed(2), +data.max.toFixed(2)];
          } else {
            minMax = [+data.changeMin.toFixed(2), +data.changeMax.toFixed(2)];
          }

          lineData['minMax'] = minMax;
          return {
            lineData: lineData,
            years: years
          };
        }
      }, {
        key: "loadLine",
        value: function loadLine() {
          var _this$prepareLineData = this.prepareLineData(),
              lineData = _this$prepareLineData.lineData,
              years = _this$prepareLineData.years;

          var attr = "".concat(this.state.activeSummaryParameters.attribute, " (").concat(this.state.activeSummaryParameters.category, ")").toLowerCase();
          var yLabel = this.state.activeSummaryParameters.mode === 'change' ? "".concat(attr, " value") : "".concat(attr, " change");

          this._line.setYLabel(yLabel);

          this._line.setData(lineData, years, yLabel);

          this._line.render();
        } // ---- Component menu events

      }, {
        key: "yearStepSelectChanged",
        value: function yearStepSelectChanged(event) {
          var yearStep = {
            yearStep: event.value
          };
          this.events.vis.yearStepSelectChanged.emit(yearStep);
        }
      }, {
        key: "attributeSelectChanged",
        value: function attributeSelectChanged(event) {
          var attribute = {
            attribute: event.value,
            category: this.data.meta.attributes[event.value].categories[0],
            metric: this.data.meta.attributes[event.value].metrics[0]
          };
          this.events.vis.attributeSelectChanged.emit(attribute);
        }
      }, {
        key: "categorySelectChanged",
        value: function categorySelectChanged(event) {
          var metric = {
            category: event.value
          };
          this.events.vis.categorySelectChanged.emit(metric);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          if (this.data.meta.attributes[this.state.activeSummaryParameters.attribute]) {
            return this.data.meta.attributes[this.state.activeSummaryParameters.attribute].categories;
          }

          return [];
        }
      }, {
        key: "metricSelectChanged",
        value: function metricSelectChanged(event) {
          var metric = {
            metric: event.value
          };
          this.events.vis.metricSelectChanged.emit(metric);
        }
      }, {
        key: "getMetrics",
        value: function getMetrics() {
          if (this.data.meta.attributes[this.state.activeSummaryParameters.attribute]) {
            return this.data.meta.attributes[this.state.activeSummaryParameters.attribute].metrics;
          }

          return [];
        }
      }, {
        key: "modeSelectChanged",
        value: function modeSelectChanged(event) {
          var mode = {
            mode: event.value
          };
          this.events.vis.modeSelectChanged.emit(mode);
        }
      }, {
        key: "sortSelectChanged",
        value: function sortSelectChanged(event) {
          var sort = {
            sortBy: event.value
          };
          this.events.vis.sortBySelectChanged.emit(sort);
        } // ---- Component matrix events

      }, {
        key: "yearLabelClicked",
        value: function yearLabelClicked(value) {
          var year = {
            year: value
          };
          this.events.vis.yearLabelClicked.emit(year);
        }
      }, {
        key: "polyLabelHovered",
        value: function polyLabelHovered(value) {
          var poly = {
            name: value,
            origin: 'vis'
          };
          this.events.vis.polygonLabelHovered.emit(poly);
        }
      }, {
        key: "polyLabelClicked",
        value: function polyLabelClicked(value) {
          // cleans the line chart
          this.events.vis.lineIconClicked.emit([]);

          if (this.state.activeLevel === 'borough') {
            var neighborhood = {
              neighborhood: value
            };
            this.events.vis.polygonLabelClicked.emit(neighborhood);
          } else if (this.state.activeLevel === 'neighborhood') {
            var block = {
              block: value
            };
            this.events.vis.polygonLabelClicked.emit(block);
          } else if (this.state.activeLevel === 'block') {
            var lot = {
              lot: value
            };
            this.events.vis.polygonLabelClicked.emit(lot);
          }
        }
      }, {
        key: "highlightPolyLabel",
        value: function highlightPolyLabel(origin) {
          if (origin === 'map') {
            this._matrix.setHighlight(this.state.selectedPolygon);

            this._matrix.render();
          }
        }
      }, {
        key: "navButtonClicked",
        value: function navButtonClicked(level) {
          // cleans the line chart
          this.events.vis.lineIconClicked.emit([]);
          var levels = this.data.meta.levels;
          var updates = {};

          if (level === 'borough') {
            updates = levels.filter(function (str) {
              return str !== 'borough';
            }).reduce(function (prev, key) {
              return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
            }, {});
          } else if (level === 'neighborhood') {
            updates = levels.filter(function (str) {
              return str !== 'borough' && str !== 'neighborhood';
            }).reduce(function (prev, key) {
              return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
            }, {});
          } else if (level === 'block') {
            updates = levels.filter(function (str) {
              return str !== 'borough' && str !== 'neighborhood' && str !== 'block';
            }).reduce(function (prev, key) {
              return Object.assign(Object.assign({}, prev), _defineProperty({}, key, undefined));
            }, {});
          } // emits the event


          this.events.vis.navButtonClicked.emit(updates);
        }
      }, {
        key: "activeFilters",
        value: function activeFilters() {
          this.state.filterActive = !this.state.filterActive;
        }
      }, {
        key: "getFilterIconColor",
        value: function getFilterIconColor() {
          return this.state.filterActive ? 'warn' : Object.keys(this.state.activeFilterParameters).length === 0 ? 'primary' : 'accent';
        }
      }, {
        key: "navPageChanged",
        value: function navPageChanged(direction) {
          var current = this.state.activePageParameters.currentPage;
          var total = this.state.activePageParameters.totalPages - 1;

          if (direction === 'left' && current > 0) {
            current -= 1;
          } else if (direction === 'right' && current < total) {
            current += 1;
          } else if (direction === 'first') {
            current = 0;
          } else if (direction === 'last') {
            current = total;
          } else if (!isNaN(+direction)) {
            var val = +direction - 1;

            if (val < 0) {
              val = 0;
            }

            if (val > total) {
              val = total;
            }

            current = val;
          }

          var page = {
            currentPage: current
          };
          this.events.vis.navPageChanged.emit(page);
        }
      }, {
        key: "sortIconClicked",
        value: function sortIconClicked(value) {
          var sort = {
            sortBy: value
          };
          this.events.vis.sortIconClicked.emit(sort);
        }
      }, {
        key: "lineIconClicked",
        value: function lineIconClicked(value) {
          var state = value;
          this.events.vis.lineIconClicked.emit(state);
        }
      }, {
        key: "lineLegendHovered",
        value: function lineLegendHovered(value) {
          this.tooltip = {
            show: true,
            left: value.mouse[0],
            top: value.mouse[1],
            info: {
              line: value.line
            }
          };
        }
      }, {
        key: "polyRectHovered",
        value: function polyRectHovered(value) {
          var mode = this.state.activeSummaryParameters.mode;
          this.tooltip = {
            show: true,
            left: value.mouse[0],
            top: value.mouse[1],
            info: {
              year: value.year,
              mode: mode,
              data: value.data
            }
          };
        }
      }, {
        key: "svgOut",
        value: function svgOut() {
          this.tooltip.show = false;
          this.tooltip.info = {};
        }
      }]);

      return VisComponent;
    }();

    VisComponent.ɵfac = function VisComponent_Factory(t) {
      return new (t || VisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"]));
    };

    VisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisComponent,
      selectors: [["app-vis"]],
      viewQuery: function VisComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matrixDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lineDiv = _t.first);
        }
      },
      decls: 68,
      vars: 41,
      consts: [[1, "widget", "top", "left"], [1, "centered", "mat-toolbar-top"], [1, "options"], ["id", "year", 3, "color"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "color"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "line"], ["line", ""], [1, "matrix"], ["matrix", ""], [1, "navigation", "mat-toolbar-bottom"], ["mat-button", "", 1, "item", 3, "click"], ["mat-button", "", 3, "disabled", "click"], ["class", "centered", 4, "ngIf"], [1, "navigation-spacer"], [1, "centered"], [1, "navigation-label"], ["matInput", "", 1, "current", 3, "value", "change"], ["currentPage", ""], ["mat-icon-button", "", "aria-label", "Left", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Right", 3, "disabled", "click"], [3, "isActive", "top", "left", "info"], [3, "value"], [3, "value", "disabled"]],
      template: function VisComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year Step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_6_listener($event) {
            return ctx.yearStepSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisComponent_mat_option_7_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Attributes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_11_listener($event) {
            return ctx.attributeSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VisComponent_mat_option_12_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_17_listener($event) {
            return ctx.categorySelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VisComponent_mat_option_18_Template, 2, 3, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_22_listener($event) {
            return ctx.metricSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VisComponent_mat_option_23_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_27_listener($event) {
            return ctx.modeSelectChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, VisComponent_mat_option_28_Template, 2, 3, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sort Matrix by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VisComponent_Template_mat_select_selectionChange_32_listener($event) {
            return ctx.sortSelectChanged($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_40_listener($event) {
            return ctx.activeFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "view_agenda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_43_listener($event) {
            return ctx.navButtonClicked("borough");
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VisComponent_Template_input_change_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            return ctx.navPageChanged(_r11.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_55_listener($event) {
            return ctx.navPageChanged("first");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "first_page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_58_listener($event) {
            return ctx.navPageChanged("left");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_61_listener($event) {
            return ctx.navPageChanged("right");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisComponent_Template_button_click_64_listener($event) {
            return ctx.navPageChanged("last");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "last_page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-tooltip", 23);
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__["TooltipComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]],
      styles: [".widget[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  \n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  \n  width: 800px;\n  height: 1065px;\n  max-height: calc(100% - 22px);\n\n  \n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.90);\n\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 4px 0 rgba(0, 0, 0, 0.12);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n\n\nform[_ngcontent-%COMP%] {\n  width: 92%;\n  padding-top: 5px;\n}\n\n.options[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 120px !important;  \n}\n\n#year[_ngcontent-%COMP%] {\n    width: 60px !important;  \n  }\n\n  .mat-input-element{\n    margin-top: 1px !important; \n    width: 20px !important;\n    font-size: 12px !important;\n}\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  \n  position:absolute;\n  height: 45px;\n\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.navigation-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navigation-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 5px;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%] {\n  height: 35px;\n  font-size: 12px;\n}\n\n\n\n.line[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  width: 100%;\n  height: calc((100% - 110px) * 0.375);\n\n  top: 64px\n}\n\n\n\n.matrix[_ngcontent-%COMP%] {\n  \n  position:absolute;\n\n  width: 100%;\n  height: calc((100% - 110px) * 0.625);\n\n  bottom: 45px\n}\n\n  .domain,   .tick line {\n  fill: none;\n  stroke: #afafaf;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n  .sort-icon {\n  fill: #afafaf !important;\n  shape-rendering: crispEdges !important;\n}\n\n  .curve {\n    fill: none;\n    stroke-width: 2;\n}\n\n  .xaxis-label,   .yaxis-label {\n  font-size: 14px;\n}\n\n  .legend-text {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXMvdmlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixjQUFjO0VBQ2QsNkJBQTZCOztFQUU3QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7O0VBRTNDLCtEQUF1RDs7RUFBdkQsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7SUFDekMseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBO0lBQ0ksc0JBQXNCO0VBQ3hCOztBQUdGO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTs7RUFFWixnQkFBZ0I7RUFDaEIsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0NBQW9DOztFQUVwQztBQUNGOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsb0NBQW9DOztFQUVwQztBQUNGOztBQUVBOztFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXMvdmlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0IHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICAvKiBsYXlvdXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiAxMDY1cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHgpO1xuXG4gIC8qIG1lbnUgc3R5bGUgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTApO1xuXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogTWVudSAqL1xuZm9ybSB7XG4gIHdpZHRoOiA5MiU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ub3B0aW9ucyAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50OyAgXG59XG5cblxuI3llYXIge1xuICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7ICBcbiAgfVxuICBcblxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudHtcbiAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDsgXG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbiAgXG4vKiBtYXRyaXggbmF2aWdhdGlvbiAqL1xuLm5hdmlnYXRpb24ge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG5cbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICBib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubmF2aWdhdGlvbi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm5hdmlnYXRpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIExpbmUgY2hhcnQgKi9cbi5saW5lIHtcbiAgLyogbWVudSBwb3NpdGlvbiBzY2hlbWUqL1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC0gMTEwcHgpICogMC4zNzUpO1xuXG4gIHRvcDogNjRweFxufVxuXG4vKiBNYXRyaXggKi9cbi5tYXRyaXgge1xuICAvKiBtZW51IHBvc2l0aW9uIHNjaGVtZSovXG4gIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoKDEwMCUgLSAxMTBweCkgKiAwLjYyNSk7XG5cbiAgYm90dG9tOiA0NXB4XG59XG5cbjo6bmctZGVlcCAuZG9tYWluLFxuOjpuZy1kZWVwIC50aWNrIGxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNhZmFmYWY7XG4gIHN0cm9rZS13aWR0aDogMS41cHg7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbn1cblxuOjpuZy1kZWVwIC5zb3J0LWljb24ge1xuICBmaWxsOiAjYWZhZmFmICFpbXBvcnRhbnQ7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmN1cnZlIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMjtcbn1cblxuOjpuZy1kZWVwIC54YXhpcy1sYWJlbCwgOjpuZy1kZWVwIC55YXhpcy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuOjpuZy1kZWVwIC5sZWdlbmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vis',
          templateUrl: './vis.component.html',
          styleUrls: ['./vis.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"]
        }];
      }, {
        _matrixDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['matrix', {
            static: true
          }]
        }],
        _lineDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['line', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mapview/building-layer.ts":
  /*!*******************************************!*\
    !*** ./src/app/mapview/building-layer.ts ***!
    \*******************************************/

  /*! exports provided: BuildingLayer */

  /***/
  function srcAppMapviewBuildingLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingLayer", function () {
      return BuildingLayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layer */
    "./src/app/mapview/layer.ts");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var gl_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! gl-matrix */
    "./node_modules/gl-matrix/esm/index.js"); /// <reference types="@types/webgl2" />


    var BuildingLayer =
    /*#__PURE__*/
    function (_layer__WEBPACK_IMPOR) {
      _inherits(BuildingLayer, _layer__WEBPACK_IMPOR);

      /**
       * The Vector Layer constructor
       * @param {string} id the layer id
       */
      function BuildingLayer(id) {
        var _this23;

        _classCallCheck(this, BuildingLayer);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(BuildingLayer).call(this, id)); // primitive Ids

        _this23._features = {}; // OpenGL data buffer

        _this23._glPositionBuffer = null;
        _this23._glIndexBuffer = null;
        _this23._glBuildingIdBuffer = null; // shader attribute id

        _this23._positionId = -1;
        _this23._buildingIdId = -1; // uniforms

        _this23._uModelViewMatrixId = -1;
        _this23._uProjectionMatrixId = -1;
        _this23._uWorldOrigin = -1;
        _this23._uGroundRes = -1;
        _this23._uEye = -1; // highlighted building ID id

        _this23._highlight = -1; // FBO for edge detection

        _this23._fboWidth = -1;
        _this23._fboHeight = -1;
        _this23._fbo = null;
        _this23._readfbo = null;
        _this23._normalTexture = null;
        _this23._depthTexture = null;
        _this23._positionTexture = null;
        _this23._idTexture = null;
        return _this23;
      }
      /**
       * Shader load signature
       * @param {WebGL2RenderingContext} glContext WebGL context
       */


      _createClass(BuildingLayer, [{
        key: "loadShaders",
        value: function loadShaders(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var id, vertUrl, fragUrl, vsShader, fsShader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    id = 0;

                  case 1:
                    if (!(id < BuildingLayer.N_SHADER)) {
                      _context6.next = 14;
                      break;
                    }

                    // shaders url
                    vertUrl = "assets/shaders/building(".concat(id, ").vert");
                    fragUrl = "assets/shaders/building(".concat(id, ").frag"); // Vertex shader program

                    _context6.next = 6;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_3__["DataLoader"].getTextData(vertUrl);

                  case 6:
                    vsShader = _context6.sent;
                    _context6.next = 9;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_3__["DataLoader"].getTextData(fragUrl);

                  case 9:
                    fsShader = _context6.sent;
                    // load all shaders
                    this.initShaderProgram(vsShader, fsShader, glContext);

                  case 11:
                    id++;
                    _context6.next = 1;
                    break;

                  case 14:
                    // uniforms definition
                    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
                    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
                    this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
                    this._uGroundRes = glContext.getUniformLocation(this._shaderProgram[0], 'uGroundRes');
                    this._uEye = glContext.getUniformLocation(this._shaderProgram[0], 'uEye');
                    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
                    this._buildingIdId = glContext.getAttribLocation(this._shaderProgram[0], 'buildingId'); // load message

                    console.log("#".concat(BuildingLayer.N_SHADER, " shaders successfully loaded for layer ").concat(this._layerId, "."));

                  case 22:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /**
         * Data update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, feature;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _data_api__WEBPACK_IMPORTED_MODULE_2__["DataApi"].getLayerFeature(this._layerId);

                  case 2:
                    data = _context7.sent;
                    // new feature found
                    this._features = {
                      'position': [],
                      'ids': [],
                      'index': []
                    }; // iterates over the geometries

                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    _context7.prev = 7;

                    for (_iterator4 = data.features[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      feature = _step4.value;
                      this._features['position'] = feature.geometry.coordinates;
                      this._features['ids'] = feature.geometry.ids;
                      this._features['index'] = feature.geometry.indices;
                    } // creates the buffer


                    _context7.next = 15;
                    break;

                  case 11:
                    _context7.prev = 11;
                    _context7.t0 = _context7["catch"](7);
                    _didIteratorError4 = true;
                    _iteratorError4 = _context7.t0;

                  case 15:
                    _context7.prev = 15;
                    _context7.prev = 16;

                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      _iterator4.return();
                    }

                  case 18:
                    _context7.prev = 18;

                    if (!_didIteratorError4) {
                      _context7.next = 21;
                      break;
                    }

                    throw _iteratorError4;

                  case 21:
                    return _context7.finish(18);

                  case 22:
                    return _context7.finish(15);

                  case 23:
                    this.createBuffers(glContext); // SSAO noise

                    this.generateNoise(glContext);

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[7, 11, 15, 23], [16,, 18, 22]]);
          }));
        }
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {number} x Mouse x position
         * @param {number} y Mouse y position
         */

      }, {
        key: "pick",
        value: function pick(glContext, x, y) {
          glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);
          var result = new Float32Array(4);
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

      }, {
        key: "render",
        value: function render(glContext) {
          // invalid layers
          if (this._shaderProgram.length === 0 || this._shaderProgram[0] === null || this._shaderProgram[1] === null || this._glPositionBuffer === null || this._glIndexBuffer === null || this._positionId < 0) {
            return;
          } // FBO setup


          this.setupFBO(glContext); // enables the depth test

          glContext.enable(glContext.DEPTH_TEST);
          glContext.depthFunc(glContext.LESS); // Picking

          glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
          this.renderBuildings(glContext);
          glContext.bindFramebuffer(glContext.FRAMEBUFFER, null); // SSAO render

          this.renderSSAO(glContext); // disables the depth buffer

          glContext.disable(glContext.DEPTH_TEST);
        }
        /**
         * Render the buildings for picking
         * @param glContext
         */

      }, {
        key: "renderBuildings",
        value: function renderBuildings(glContext) {
          // binds the shader program
          glContext.useProgram(this._shaderProgram[0]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]); // send eye and ground resolution

          var eye = this._camera.getEye();

          var gres = this._camera.getGroundResolution();

          glContext.uniform1f(this._uGroundRes, gres);
          glContext.uniform3f(this._uEye, eye[0], eye[1], eye[2]); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, BuildingLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the buildings id buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer);
          glContext.vertexAttribPointer(this._buildingIdId, 1, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._buildingIdId);
          glContext.clearColor(0.0, 0.0, 0.0, 1.0); // tslint:disable-next-line:no-bitwise

          glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT); // Tell WebGL which indices to use to index the vertices

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // draw the geometry

          glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
        }
        /**
         * Render the buildings using SSAO
         * @param glContext
         */

      }, {
        key: "renderSSAO",
        value: function renderSSAO(glContext) {
          glContext.enable(glContext.BLEND);
          glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          glContext.useProgram(this._shaderProgram[1]);
          var normalLocation = glContext.getUniformLocation(this._shaderProgram[1], 'normalTex');
          var positionLocation = glContext.getUniformLocation(this._shaderProgram[1], 'positionTex');
          var IDLocation = glContext.getUniformLocation(this._shaderProgram[1], 'IDTex');
          var depthLocation = glContext.getUniformLocation(this._shaderProgram[1], 'depthTex');
          var matModelView = glContext.getUniformLocation(this._shaderProgram[1], 'matModelView');
          var uProjectionMatrix = glContext.getUniformLocation(this._shaderProgram[1], 'uProjectionMatrix');
          var highlightId = glContext.getUniformLocation(this._shaderProgram[1], 'highlightId');
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

      }, {
        key: "setupFBO",
        value: function setupFBO(glContext) {
          if (this._fbo == null || this._readfbo == null) {
            // creates the buffers
            this._fbo = glContext.createFramebuffer();
            this._readfbo = glContext.createFramebuffer();
            this._depthTexture = glContext.createTexture();
            this._normalTexture = glContext.createTexture();
            this._positionTexture = glContext.createTexture();
            this._idTexture = glContext.createTexture(); // check the availability of float buffers

            var ext = glContext.getExtension('EXT_color_buffer_float');

            if (!ext) {
              console.error('float buffer extension not supported!!!');
            }
          } // gets the viewport


          var viewPort = this._camera.getViewportResolution();

          if (this._fboWidth !== viewPort[0] || this._fboHeight !== viewPort[1]) {
            // update FBO size
            this._fboWidth = viewPort[0];
            this._fboHeight = viewPort[1]; // normal texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._normalTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // position texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._positionTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // building ID texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._idTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // depth texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._depthTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.DEPTH_COMPONENT32F, this._fboWidth, this._fboHeight, 0, glContext.DEPTH_COMPONENT, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // fbo setup

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.DEPTH_ATTACHMENT, glContext.TEXTURE_2D, this._depthTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._normalTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._positionTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT2, glContext.TEXTURE_2D, this._idTexture, 0);
            glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1, glContext.COLOR_ATTACHMENT2]); // readfbo setup

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readfbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._idTexture, 0); // unbind fbos

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
          }
        }
        /**
         * Layer VBO creation signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createBuffers",
        value: function createBuffers(glContext) {
          // Create a buffer for the positions.
          this._glPositionBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW); // Create a buffer for the indices.

          this._glIndexBuffer = glContext.createBuffer(); // Select the index buffer as the one to apply buffer

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // send data to gpu

          glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW); // Create a buffer for the positions.

          this._glBuildingIdBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glBuildingIdBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['ids']), glContext.STATIC_DRAW);
        }
      }, {
        key: "generateNoise",
        value: function generateNoise(glContext) {
          glContext.useProgram(this._shaderProgram[1]);
          var uNoiseLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uNoise');
          var uSamplesLocation = glContext.getUniformLocation(this._shaderProgram[1], 'uSamples');
          var samples = [];
          var nSamples = 64;

          for (var i = 0; i < nSamples; i++) {
            var sample = gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].fromValues(Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, Math.random());
            gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].normalize(sample, sample); // weight samples towards center point

            var scale = i / nSamples;
            var s2 = scale * scale;
            gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].scale(sample, sample, 0.1 + 0.9 * s2);
            samples.push(sample[0]);
            samples.push(sample[1]);
            samples.push(sample[2]);
          }

          glContext.uniform3fv(uSamplesLocation, samples, 0, nSamples * 3);
          var noise = [];
          var noiseSize = 256;

          for (var _i = 0; _i < noiseSize; _i++) {
            var n = gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec3"].fromValues(Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, 0.0);
            noise.push(n[0]);
            noise.push(n[1]);
            noise.push(n[2]);
          }

          glContext.uniform3fv(uNoiseLocation, noise, 0, noiseSize * 3);
        }
      }]);

      return BuildingLayer;
    }(_layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]); // number of coordinates per vertex


    BuildingLayer.COORDS = 3; // number of shaders

    BuildingLayer.N_SHADER = 2;
    /***/
  },

  /***/
  "./src/app/mapview/camera.ts":
  /*!***********************************!*\
    !*** ./src/app/mapview/camera.ts ***!
    \***********************************/

  /*! exports provided: Camera */

  /***/
  function srcAppMapviewCameraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var _geoutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./geoutils */
    "./src/app/mapview/geoutils.ts");
    /* harmony import */


    var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gl-matrix */
    "./node_modules/gl-matrix/esm/index.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");
    /**
     * 3D Camera representation
     */


    var Camera =
    /*#__PURE__*/
    function () {
      /**
       * The Camera constructor
       */
      function Camera(wx, wy, wz) {
        _classCallCheck(this, Camera);

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
        this.groundRes = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].groundResolution(wx, wy, 0); // z-values start from here are in meters

        this.wNear = 10 / this.groundRes;
        this.wFar = 1e9 / this.groundRes; // const projectedCenter = GeoUtils.latLng2Coord(wx, wy);

        this.wOrigin = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec2"].fromValues(wx, wy);
        var projectedCenter = [0, 0];
        this.wLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(projectedCenter[0], projectedCenter[1], 0);
        this.wEye = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(projectedCenter[0], projectedCenter[1], 10000); // TODO: calculate the camera height instead of hardcoding

        this.zScaling(1 / this.groundRes); // meter is not longer used in the remaining code

        this.wUp = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 1, 0); //

        this.status = _constants__WEBPACK_IMPORTED_MODULE_2__["CameraStatus"].Camera3D;
      }

      _createClass(Camera, [{
        key: "getCameraStatus",
        value: function getCameraStatus() {
          return this.status;
        }
      }, {
        key: "setCameraStatus",
        value: function setCameraStatus(status) {
          this.status = status;

          if (this.status === _constants__WEBPACK_IMPORTED_MODULE_2__["CameraStatus"].Camera2D) {
            // set parameters
            this.wLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(this.wEye[0], this.wEye[1], 0); // meter is not longer used in the remaining code

            this.wUp = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 1, 0);
            this.wEyeDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, -1);
            this.wEyeLength = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].length(this.wEyeDir);
          }
        }
      }, {
        key: "getProjectionMatrix",
        value: function getProjectionMatrix() {
          return this.mProjectionMatrix;
        }
      }, {
        key: "getViewMatrix",
        value: function getViewMatrix() {
          return this.mViewMatrix;
        }
      }, {
        key: "getModelViewMatrix",
        value: function getModelViewMatrix() {
          var modelViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].mul(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create(), this.mViewMatrix, this.mModelMatrix); // modelView matrix

          return modelViewMatrix;
        }
      }, {
        key: "getWorldOrigin",
        value: function getWorldOrigin() {
          return this.wOrigin;
        }
      }, {
        key: "getEye",
        value: function getEye() {
          return this.wEye;
        }
      }, {
        key: "getGroundResolution",
        value: function getGroundResolution() {
          return this.groundRes;
        }
      }, {
        key: "setViewportResolution",
        value: function setViewportResolution(x, y) {
          this.viewportWidth = x;
          this.viewportHeight = y;
        }
      }, {
        key: "getViewportResolution",
        value: function getViewportResolution() {
          return [this.viewportWidth, this.viewportHeight];
        }
      }, {
        key: "updateEyeDirAndLen",
        value: function updateEyeDirAndLen() {
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].sub(this.wEyeDir, this.wLookAt, this.wEye);
          this.wEyeLength = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].length(this.wEyeDir);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wEyeDir, this.wEyeDir);
        }
      }, {
        key: "zScaling",
        value: function zScaling(scale) {
          this.wEye[2] = this.wEye[2] * scale;
          this.wLookAt[2] = this.wLookAt[2] * scale;
          this.updateEyeDirAndLen();
        }
      }, {
        key: "zoom",
        value: function zoom(delta, x, y) {
          delta = delta < 0 ? 0.003 : -0.003;
          var dir = this.screenCoordToWorldDir(x, y);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wEye, this.wEye, dir, delta); // this.wEye += dir * delta;

          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
        }
      }, {
        key: "translate",
        value: function translate(dx, dy) {
          var scale = this.wEye[2];
          var X = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(X, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(X, this.wEyeDir, this.wUp)); // D = X * dx * scale + this.wUp * dy * scale;

          var D = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), X, dx * scale), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, dy * scale));
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(this.wEye, this.wEye, D);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
        }
      }, {
        key: "yaw",
        value: function yaw(delta) {
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].rotateZ(this.wEyeDir, this.wEyeDir, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, 0), delta);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].rotateZ(this.wUp, this.wUp, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(0, 0, 0), delta);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
        }
      }, {
        key: "pitch",
        value: function pitch(delta) {
          delta = -delta; // this.wEyeDir = this.wUp * sin(delta) + this.wEyeDir * cos(delta);

          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(this.wEyeDir, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, Math.sin(delta)), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, Math.cos(delta)));
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wEyeDir, this.wEyeDir);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;

          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(this.wUp, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, this.wUp), this.wEyeDir);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(this.wUp, this.wUp);
        }
      }, {
        key: "update",
        value: function update() {
          this.mModelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].fromScaling(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].create(), gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].fromValues(1, 1, 1 / this.groundRes)); // model matrix

          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].lookAt(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp); // view matrix

          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat4"].perspective(this.mProjectionMatrix, this.fovy, 1, this.wNear, this.wFar); // TODO: get the aspect ratio from canvas
        }
      }, {
        key: "screenCoordToWorldDir",
        value: function screenCoordToWorldDir(x, y) {
          var wRight = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(wRight, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].cross(wRight, this.wEyeDir, this.wUp));
          var upOffset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wUp, Math.tan(this.fovy / 2) * (y - 0.5) * 2);
          var rightOffset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), wRight, Math.tan(this.fovy / 2) * (x - 0.5) * 2);
          var offset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), upOffset, rightOffset);
          var dir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEyeDir, offset);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].normalize(dir, dir);
          return dir;
        }
      }, {
        key: "screenCoordToLatLng",
        value: function screenCoordToLatLng(x, y) {
          var dir = this.screenCoordToWorldDir(x, y);
          var t = -this.wEye[2] / dir[2];

          if (t > 0) {
            var intersectPoint = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scaleAndAdd(gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create(), this.wEye, dir, t);

            var originCoord = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].latLng2Coord(this.wOrigin[0], this.wOrigin[1]);

            var latLng = _geoutils__WEBPACK_IMPORTED_MODULE_0__["GeoUtils"].coord2LatLng(intersectPoint[0] + originCoord[0], intersectPoint[1] + originCoord[1]);

            console.log(latLng);
            return latLng;
          }

          return null;
        }
      }]);

      return Camera;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/colormap.ts":
  /*!*************************************!*\
    !*** ./src/app/mapview/colormap.ts ***!
    \*************************************/

  /*! exports provided: ColorMap */

  /***/
  function srcAppMapviewColormapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorMap", function () {
      return ColorMap;
    });
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");

    var ColorMap =
    /*#__PURE__*/
    function () {
      function ColorMap() {
        _classCallCheck(this, ColorMap);
      }

      _createClass(ColorMap, null, [{
        key: "sequentialRed",

        /**
          * Color brewer sequential red
          */
        value: function sequentialRed() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 515;
          var cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateReds"]).domain([-1, 0, 1]);
          var colors = [];

          for (var id = 0; id < size; id++) {
            var val = -1 + id * 2 / (size - 1);
            var color = cscale(val).match(/\d+/g).map(function (d) {
              return +d;
            });
            colors.push.apply(colors, _toConsumableArray(color));
            colors.push(255);
          }

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
        /**
         * Color brewer sequential blue
         */

      }, {
        key: "sequentialBlue",
        value: function sequentialBlue() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 515;
          var cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateBlues"]).domain([-1, 0, 1]);
          var colors = [];

          for (var id = 0; id < size; id++) {
            var val = -1 + id * 2 / (size - 1);
            var color = cscale(val).match(/\d+/g).map(function (d) {
              return +d;
            });
            colors.push.apply(colors, _toConsumableArray(color));
            colors.push(255);
          }

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
        /**
         * Color brewer diverging blue and red
         */

      }, {
        key: "divergingRedYelBlue",
        value: function divergingRedYelBlue() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 515;
          var cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdYlBu"]).domain([-1, 0, 1]);
          var colors = [];

          for (var id = 0; id < size; id++) {
            var val = -1 + id * 2 / (size - 1);
            var color = cscale(val).match(/\d+/g).map(function (d) {
              return +d;
            });
            colors.push.apply(colors, _toConsumableArray(color));
            colors.push(255);
          }

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
        /**
         * Color brewer diverging blue and red
         */

      }, {
        key: "divergingRedBlue",
        value: function divergingRedBlue() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 515;
          var cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]).domain([-1, 0, 1]);
          var colors = [];

          for (var id = 0; id < size; id++) {
            var val = -1 + id * 2 / (size - 1);
            var color = cscale(val).match(/\d+/g).map(function (d) {
              return +d;
            });
            colors.push.apply(colors, _toConsumableArray(color));
            colors.push(255);
          }

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
        /**
         * Color brewer diverging blue and red
         */

      }, {
        key: "divergingGreenBrown",
        value: function divergingGreenBrown() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 515;
          var cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleDiverging"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateGnBu"]).domain([-1, 0, 1]);
          var colors = [];

          for (var id = 0; id < size; id++) {
            var val = -1 + id * 2 / (size - 1);
            var color = cscale(val).match(/\d+/g).map(function (d) {
              return +d;
            });
            colors.push.apply(colors, _toConsumableArray(color));
            colors.push(255);
          }

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
        /**
         * Color brewer qualitative colors
         */

      }, {
        key: "qualitative",
        value: function qualitative() {
          var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          // TODO: FIX
          var colors = [166, 206, 227, 255, 178, 223, 138, 255, 251, 154, 153, 255, 253, 191, 111, 255, 202, 178, 214, 255, 31, 120, 180, 255, 51, 160, 44, 255, 227, 26, 28, 255, 255, 127, 0, 255];

          if (reverse) {
            return colors.reverse();
          } else {
            return colors;
          }
        }
      }, {
        key: "getColorMap",
        value: function getColorMap(color) {
          var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
      }, {
        key: "computeScalarValue",
        value: function computeScalarValue(val, min, max) {
          var neutral = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var sValue = null;

          if (min < neutral && max < neutral || min > neutral && max > neutral) {
            neutral = (min + max) * 0.5;
          }

          if (val < neutral) {
            sValue = (val - min) / (neutral - min) * 0.5;
          } else {
            sValue = 0.5 + (val - neutral) / (max - neutral) * 0.5;
          }

          if (val === neutral && neutral === min && min === max) {
            return 0.5;
          }

          return sValue;
        }
      }]);

      return ColorMap;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/constants.ts":
  /*!**************************************!*\
    !*** ./src/app/mapview/constants.ts ***!
    \**************************************/

  /*! exports provided: LayerTypes, ColorMapType, MapViewStatus, CameraStatus */

  /***/
  function srcAppMapviewConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerTypes", function () {
      return LayerTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorMapType", function () {
      return ColorMapType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapViewStatus", function () {
      return MapViewStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraStatus", function () {
      return CameraStatus;
    });
    /**
     * Layer types definition
     */


    var LayerTypes = function LayerTypes() {
      _classCallCheck(this, LayerTypes);
    };

    LayerTypes.PHYSICAL_LAYER = 'physical';
    LayerTypes.BUILDING_LAYER = 'building';
    LayerTypes.POLYGON_LAYER = 'polygon';
    LayerTypes.HEATMAP_LAYER = 'heatmap';
    LayerTypes.POINT_LAYER = 'point';
    LayerTypes.LINE_LAYER = 'line';
    /**
     * Colormap types definition
     */

    var ColorMapType = function ColorMapType() {
      _classCallCheck(this, ColorMapType);
    };

    ColorMapType.SEQUENTIAL_RED_MAP = 'sequential_red';
    ColorMapType.SEQUENTIAL_BLUE_MAP = 'sequential_blue';
    ColorMapType.DIVERGING_RED_BLUE_MAP = 'diverging_blue_red';
    ColorMapType.DIVERGING_RED_YEL_BLUE_MAP = 'diverging_red_yellow_blue';
    ColorMapType.DIVERGING_GREEN_BROWN_MAP = 'diverging_green_brown';
    ColorMapType.QUALITATIVE_MAP = 'qualitative';
    /**
     * Mapview interaction status
     */

    var MapViewStatus = function MapViewStatus() {
      _classCallCheck(this, MapViewStatus);
    };

    MapViewStatus.IDLE = 0;
    MapViewStatus.DRAG = 1;
    /**
     * Camera status
     */

    var CameraStatus = function CameraStatus() {
      _classCallCheck(this, CameraStatus);
    };

    CameraStatus.Camera2D = 0;
    CameraStatus.Camera3D = 1;
    /***/
  },

  /***/
  "./src/app/mapview/data-api.ts":
  /*!*************************************!*\
    !*** ./src/app/mapview/data-api.ts ***!
    \*************************************/

  /*! exports provided: DataApi */

  /***/
  function srcAppMapviewDataApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataApi", function () {
      return DataApi;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var DataApi =
    /*#__PURE__*/
    function () {
      function DataApi() {
        _classCallCheck(this, DataApi);
      }

      _createClass(DataApi, null, [{
        key: "getMapIndex",

        /**
         * Load all layers
         * @returns {Promise<any>} The load index promise
         */
        value: function getMapIndex(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var url, datasets;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/assets/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder, "/").concat(index);
                    console.log(url);
                    _context8.next = 4;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);

                  case 4:
                    datasets = _context8.sent;
                    return _context8.abrupt("return", datasets);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
        /**
         * Load the camera
         * @returns {Promise<any>} The load camera promise
         */

      }, {
        key: "getCameraParameters",
        value: function getCameraParameters(camera) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var url, params;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/assets/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder, "/").concat(camera);
                    console.log(url);
                    _context9.next = 4;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);

                  case 4:
                    params = _context9.sent;
                    return _context9.abrupt("return", params);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
        /**
         * Gets the layer data
         * @param {Promise<any>} layerId the layer data
         */

      }, {
        key: "getLayerFeature",
        value: function getLayerFeature(layerId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var url, feature;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/assets/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder, "/").concat(layerId, ".json");
                    console.log(url);
                    _context10.next = 4;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);

                  case 4:
                    feature = _context10.sent;
                    return _context10.abrupt("return", feature);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
        /**
         * Gets the layer function
         * @param {Promise<any>} layerId the layer data
         */

      }, {
        key: "getLayerFunction",
        value: function getLayerFunction(layerId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var url, feature;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    // TODO
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/assets/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].folder, "/").concat(layerId, ".json");
                    console.log(url);
                    _context11.next = 4;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_1__["DataLoader"].getJsonData(url);

                  case 4:
                    feature = _context11.sent;
                    return _context11.abrupt("return", feature);

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));
        }
      }]);

      return DataApi;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/data-loader.ts":
  /*!****************************************!*\
    !*** ./src/app/mapview/data-loader.ts ***!
    \****************************************/

  /*! exports provided: DataLoader */

  /***/
  function srcAppMapviewDataLoaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLoader", function () {
      return DataLoader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DataLoader =
    /*#__PURE__*/
    function () {
      function DataLoader() {
        _classCallCheck(this, DataLoader);
      }

      _createClass(DataLoader, null, [{
        key: "getJsonData",

        /**
         * Loads a json file
         * @param {string} url json file url
         * @returns {Promise<any>} The load json promise
         */
        value: function getJsonData(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var response, json;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return fetch(url);

                  case 2:
                    response = _context12.sent;
                    _context12.next = 5;
                    return response.json();

                  case 5:
                    json = _context12.sent;
                    return _context12.abrupt("return", json);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
        /**
         * Loads a text file
         * @param {string} url text file url
         * @returns {Promise<string>} The load text promise
         */

      }, {
        key: "getTextData",
        value: function getTextData(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var response, txt;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return fetch(url);

                  case 2:
                    response = _context13.sent;
                    _context13.next = 5;
                    return response.text();

                  case 5:
                    txt = _context13.sent;
                    return _context13.abrupt("return", txt);

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }]);

      return DataLoader;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/geoutils.ts":
  /*!*************************************!*\
    !*** ./src/app/mapview/geoutils.ts ***!
    \*************************************/

  /*! exports provided: GeoUtils */

  /***/
  function srcAppMapviewGeoutilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoUtils", function () {
      return GeoUtils;
    });

    var GeoUtils =
    /*#__PURE__*/
    function () {
      function GeoUtils() {
        _classCallCheck(this, GeoUtils);
      }

      _createClass(GeoUtils, null, [{
        key: "latLng2Coord",

        /**
         * Converts from lat, lng to world coordinates
         * @param {number} latitude the latitude of the point
         * @param {number} longitude the longitude of the point
         * @returns {number[]} the point in world coordinates
         */
        value: function latLng2Coord(latitude, longitude) {
          var pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
          var pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
          var sinLatitude = Math.sin(latitude * pi_180);
          var pixelY = 256.0 - (0.5 - Math.log((1.0 + sinLatitude) / (1.0 - sinLatitude)) / pi_4) * 256.0;
          var pixelX = (longitude + 180.0) / 360.0 * 256.0;
          return [pixelX, pixelY];
        }
        /**
         * Converts from world coordinates to lat, lng
         * @param {number} x the x coordinate of the point
         * @param {number} y the y coordinate of the point
         * @returns {number[]} the point in lat, lng
         */

      }, {
        key: "coord2LatLng",
        value: function coord2LatLng(x, y) {
          var pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
          var pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
          var longitude = x / 256.0 * 360.0 - 180.0;
          var latitude = (256.0 - y) / 256.0;
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

      }, {
        key: "groundResolution",
        value: function groundResolution(lat, lng, zoom) {
          return Math.cos(lat * Math.PI / 180) * 6378137 * 2 * Math.PI / Math.pow(2, 8 + zoom);
        }
      }]);

      return GeoUtils;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/heatmap-layer.ts":
  /*!******************************************!*\
    !*** ./src/app/mapview/heatmap-layer.ts ***!
    \******************************************/

  /*! exports provided: HeatmapLayer */

  /***/
  function srcAppMapviewHeatmapLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function () {
      return HeatmapLayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layer */
    "./src/app/mapview/layer.ts");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");
    /* harmony import */


    var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./colormap */
    "./src/app/mapview/colormap.ts");
    /* harmony import */


    var stats_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! stats-lite */
    "./node_modules/stats-lite/stats.js");
    /* harmony import */


    var stats_lite__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(stats_lite__WEBPACK_IMPORTED_MODULE_6__); /// <reference types="@types/webgl2" />


    var HeatmapLayer =
    /*#__PURE__*/
    function (_layer__WEBPACK_IMPOR2) {
      _inherits(HeatmapLayer, _layer__WEBPACK_IMPOR2);

      /**
       * The Vector Layer constructor
       * @param {string} id the layer id
       */
      function HeatmapLayer(id) {
        var _this24;

        _classCallCheck(this, HeatmapLayer);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(HeatmapLayer).call(this, id)); // primitive Ids

        _this24._features = {}; // OpenGL data buffer

        _this24._glPositionBuffer = null;
        _this24._glTexCoordsBuffer = null;
        _this24._glIndexBuffer = null;
        _this24._glColorMapTex = null;
        _this24._glFunctionTex = null; // function texture resolution

        _this24._functionResX = 0;
        _this24._functionResY = 0; // shader attribute id

        _this24._positionId = -1;
        _this24._texCoordsId = -1; // transformation uniforms

        _this24._uModelViewMatrixId = -1;
        _this24._uProjectionMatrixId = -1;
        _this24._uWorldOriginId = -1; // color map uniform

        _this24._uColorMapId = -1;
        _this24._uFunctionId = -1;
        _this24._visible = false;
        return _this24;
      }
      /**
       * Shader load signature
       * @param {WebGL2RenderingContext} glContext WebGL context
       */


      _createClass(HeatmapLayer, [{
        key: "loadShaders",
        value: function loadShaders(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var id, vertUrl, fragUrl, vsShader, fsShader;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    id = 0;

                  case 1:
                    if (!(id < HeatmapLayer.N_SHADER)) {
                      _context14.next = 14;
                      break;
                    }

                    // shaders url
                    vertUrl = "assets/shaders/heatmap(".concat(id, ").vert");
                    fragUrl = "assets/shaders/heatmap(".concat(id, ").frag"); // Vertex shader program

                    _context14.next = 6;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);

                  case 6:
                    vsShader = _context14.sent;
                    _context14.next = 9;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);

                  case 9:
                    fsShader = _context14.sent;
                    // load all shaders
                    this.initShaderProgram(vsShader, fsShader, glContext);

                  case 11:
                    id++;
                    _context14.next = 1;
                    break;

                  case 14:
                    // vertex data on the shader
                    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
                    this._texCoordsId = glContext.getAttribLocation(this._shaderProgram[0], 'vertTexCoords'); // transformation uniforms on the shader

                    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
                    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
                    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin'); // colorMap texture

                    this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap');
                    this._uFunctionId = glContext.getUniformLocation(this._shaderProgram[0], 'uFunction'); // load message

                    console.log("#".concat(HeatmapLayer.N_SHADER, " shaders successfully loaded for layer ").concat(this._layerId, "."));

                  case 22:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
        /**
         * Data update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var corners, position, indices, texCoords, scalar, noNull, min, max;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (!(data === null)) {
                      _context15.next = 4;
                      break;
                    }

                    _context15.next = 3;
                    return _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);

                  case 3:
                    data = _context15.sent;

                  case 4:
                    // new feature found
                    this._features = {
                      'position': [],
                      'texCoords': [],
                      'scalar': [],
                      'index': []
                    }; // grid corners

                    corners = data.coordinates; // quad geometry

                    position = [corners[0][0], corners[0][1], corners[1][0], corners[0][1], corners[1][0], corners[1][1], corners[0][0], corners[1][1]]; // build the indices

                    indices = [0, 1, 3, 1, 2, 3]; // texture coordinates

                    texCoords = [0, 0, 0, 1, 1, 1, 1, 0]; // resolution

                    this._functionResX = data.resX;
                    this._functionResY = data.resY; // add to the feature

                    this._features['position'] = position;
                    this._features['texCoords'] = texCoords; // scalar function

                    scalar = data.grid;
                    noNull = scalar.filter(function (d) {
                      return d > 0;
                    });
                    min = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.15);
                    max = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.95); // add to the feature

                    this._features['scalar'] = scalar.map(function (val) {
                      return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
                    });
                    this._features['index'] = indices; // creates the buffer

                    this.createBuffers(glContext); // creates the scalar data vbo

                    this.createFunctionTexture(glContext); // creates the color map

                    this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].SEQUENTIAL_RED_MAP, false);

                  case 22:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
        /**
         * Function update signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "updateFunction",
        value: function updateFunction(glContext, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var scalar, noNull, min, max;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    // resolution
                    this._functionResX = data.resX;
                    this._functionResY = data.resY; // scalar function

                    scalar = data.grid;
                    noNull = scalar.filter(function (d) {
                      return d > 0;
                    });
                    min = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.15);
                    max = Object(stats_lite__WEBPACK_IMPORTED_MODULE_6__["percentile"])(noNull, 0.95); // add to the feature

                    this._features['scalar'] = scalar.map(function (val) {
                      return val ? Math.max(0, Math.min((val - min) / (max - min), 1)) : -1;
                    }); // creates the scalar data vbo

                    this.createFunctionTexture(glContext);

                  case 8:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
        /**
         * Changes the color map
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {ColorMapType} cMap Color Map
         */

      }, {
        key: "updateColorMap",
        value: function updateColorMap(glContext, cMap) {
          // creates the color map
          this.createColorMapTexture(glContext, cMap, false);
        }
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "render",
        value: function render(glContext) {
          // invalid layers
          if (this._shaderProgram.length === 0 || this._shaderProgram[0] === null || this._glPositionBuffer === null || this._glTexCoordsBuffer === null || this._glIndexBuffer === null || this._glColorMapTex === null || this._glFunctionTex === null || this._positionId < 0 || this._texCoordsId < 0) {
            return;
          } // sends the uniforms


          this.setUniforms(glContext); // bending

          glContext.enable(glContext.BLEND);
          glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer);
          glContext.vertexAttribPointer(this._texCoordsId, HeatmapLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._texCoordsId); // Tell WebGL which indices to use to index the vertices

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // Tell WebGL we want to affect texture unit 0

          glContext.activeTexture(glContext.TEXTURE0); // Bind the texture to texture unit 0

          glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex); // Tell WebGL we want to affect texture unit 1

          glContext.activeTexture(glContext.TEXTURE1); // Bind the texture to texture unit 1

          glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex); // binds the shader program

          glContext.useProgram(this._shaderProgram[0]); // draw the geometry

          glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0); // disable blend

          glContext.disable(glContext.BLEND);
        }
        /**
         * Send uniforms to the shader
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "setUniforms",
        value: function setUniforms(glContext) {
          if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
          } // selects the shader


          glContext.useProgram(this._shaderProgram[0]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]); // functions texture

          glContext.uniform1i(this._uFunctionId, 0); // color map

          glContext.uniform1i(this._uColorMapId, 1);
        }
        /**
         * Layer VBO creation signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createBuffers",
        value: function createBuffers(glContext) {
          // Create a buffer for the positions.
          this._glPositionBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW); // Create a buffer for the positions.

          this._glTexCoordsBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glTexCoordsBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['texCoords']), glContext.STATIC_DRAW); // Create a buffer for the indices.

          this._glIndexBuffer = glContext.createBuffer(); // Select the index buffer as the one to apply buffer

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // send data to gpu

          glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
        }
        /**
         * Scalar data vbo creation
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createFunctionTexture",
        value: function createFunctionTexture(glContext) {
          // gl color map texture
          if (this._glFunctionTex === null) {
            this._glFunctionTex = glContext.createTexture();
          } // send the color map


          glContext.bindTexture(glContext.TEXTURE_2D, this._glFunctionTex);
          glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.R16F, this._functionResX, this._functionResY, 0, glContext.RED, glContext.FLOAT, new Float32Array(this._features['scalar'])); // texture resize

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR); // Prevents s-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE); // Prevents t-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        }
        /**
        * Color map texture creation
        * @param {WebGL2RenderingContext} glContext WebGL context
        * @param {ColorMapType} color Selected color map
        * @param {boolean} get the reverse color map
        */

      }, {
        key: "createColorMapTexture",
        value: function createColorMapTexture(glContext, color) {
          var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          // gets the color map
          var cmap = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse); // gl color map texture


          if (this._glColorMapTex === null) {
            this._glColorMapTex = glContext.createTexture();
          } // send the color map


          glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
          glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, cmap.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(cmap)); // texture resize

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR); // Prevents s-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE); // Prevents t-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        }
      }]);

      return HeatmapLayer;
    }(_layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]); // number of coordinates per vertex


    HeatmapLayer.COORDS = 2; // number of shaders

    HeatmapLayer.N_SHADER = 1;
    /***/
  },

  /***/
  "./src/app/mapview/key-events.ts":
  /*!***************************************!*\
    !*** ./src/app/mapview/key-events.ts ***!
    \***************************************/

  /*! exports provided: KeyEvents */

  /***/
  function srcAppMapviewKeyEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyEvents", function () {
      return KeyEvents;
    });

    var KeyEvents =
    /*#__PURE__*/
    function () {
      /**
       * Mouse events constructor
       * @param map the map to bind the events
       */
      function KeyEvents(map) {
        var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, KeyEvents);

        this._map = map;
        this._callbacks = callbacks;
      }

      _createClass(KeyEvents, [{
        key: "bindEvents",
        value: function bindEvents() {
          // sets the key listeners
          window.addEventListener('keydown', this.keyDown.bind(this), false);
        }
        /**
        * Handles key down event
        */

      }, {
        key: "keyDown",
        value: function keyDown(event) {
          // key value
          var key = +event.key;
          var layers = this._map.layerManager.layers; // number key
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
      }]);

      return KeyEvents;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/layer-manager.ts":
  /*!******************************************!*\
    !*** ./src/app/mapview/layer-manager.ts ***!
    \******************************************/

  /*! exports provided: LayerManager */

  /***/
  function srcAppMapviewLayerManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
      return LayerManager;
    });
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");
    /* harmony import */


    var _building_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./building-layer */
    "./src/app/mapview/building-layer.ts");
    /* harmony import */


    var _physical_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./physical-layer */
    "./src/app/mapview/physical-layer.ts");
    /* harmony import */


    var _polygon_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./polygon-layer */
    "./src/app/mapview/polygon-layer.ts");
    /* harmony import */


    var _heatmap_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./heatmap-layer */
    "./src/app/mapview/heatmap-layer.ts");
    /* harmony import */


    var _point_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./point-layer */
    "./src/app/mapview/point-layer.ts"); // data loader
    // layer types


    var LayerManager =
    /*#__PURE__*/
    function () {
      /**
       * Layer manager constructor
       * @param {string} indexUrl Layers index file
       */
      function LayerManager(indexUrl) {
        _classCallCheck(this, LayerManager);

        // Loaded layers
        this._layers = [];
        this._index = indexUrl;
      }
      /**
       * Layers vector accessor
       * @returns {Layer[]} The array of layers
       */


      _createClass(LayerManager, [{
        key: "loadIndex",

        /*
         * Load all layers
         * @returns {Promise<any>} The load index promise
         */
        value: function loadIndex() {
          return _data_loader__WEBPACK_IMPORTED_MODULE_0__["DataLoader"].getJsonData(this._index).then(function (layers) {
            return layers;
          });
        }
        /**
        * Creates a layer from the server
        * @param {string} layerType layer type
        * @param {string} layerId layer identifier
        * @returns {Promise<Layer>} The load layer promise
        */

      }, {
        key: "createLayer",
        value: function createLayer(layerType, layerId) {
          // loaded layer
          var layer = null; // loads based on type

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
              console.error("File ".concat(layerId, ".json has an unknown layer type: {layerType}."));
              break;
          } // adds the the list of layers


          this._layers.push(layer); // returns the layer


          return layer;
        }
      }, {
        key: "getLayer",
        value: function getLayer(layerId) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this._layers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var layer = _step5.value;

              if (layerId === layer.layerId) {
                return layer;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return null;
        }
      }, {
        key: "layers",
        get: function get() {
          return this._layers;
        }
      }]);

      return LayerManager;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/layer.ts":
  /*!**********************************!*\
    !*** ./src/app/mapview/layer.ts ***!
    \**********************************/

  /*! exports provided: Layer */

  /***/
  function srcAppMapviewLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layer", function () {
      return Layer;
    }); /// <reference types="@types/webgl2" />


    var Layer =
    /*#__PURE__*/
    function () {
      /**
       * Layer constructor
       * @param {string} id The Mapview layer Identifier
       */
      function Layer(id) {
        _classCallCheck(this, Layer);

        // layer's shader
        this._shaderProgram = [];
        this._layerId = id;
        this._visible = true;
        this._selectable = false;
      }
      /**
       * Accessor for the layer id
       */


      _createClass(Layer, [{
        key: "loadShaders",

        /**
         * Shader load signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */
        value: function loadShaders(glContext) {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Data update signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param data layer data
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Function update signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param data layer function
         */

      }, {
        key: "updateFunction",
        value: function updateFunction(glContext, data) {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Function update signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param data layer function
         */

      }, {
        key: "cleanFunction",
        value: function cleanFunction(glContext) {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Changes the color map
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {ColorMapType} cMap Color Map
         */

      }, {
        key: "updateColorMap",
        value: function updateColorMap(glContext, cMap) {}
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "render",
        value: function render(glContext) {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Layer picking function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "pick",
        value: function pick(glContext, x, y) {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Layer picking function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "pickId",
        value: function pickId() {
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Layer picking function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "setPickId",
        value: function setPickId() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          throw new Error('Each layer has to implement it!');
        }
        /**
         * Inits the layer's shader program
         * @param {string} vsSource Vertex shader source
         * @param {string} fsSource Fragment shader source
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "initShaderProgram",
        value: function initShaderProgram(vsSource, fsSource, glContext) {
          // load the shaders
          var vertexShader = this.buildShader(glContext.VERTEX_SHADER, vsSource, glContext);
          var fragmentShader = this.buildShader(glContext.FRAGMENT_SHADER, fsSource, glContext); // Create the shader program

          var shader = glContext.createProgram();
          glContext.attachShader(shader, vertexShader);
          glContext.attachShader(shader, fragmentShader);
          glContext.linkProgram(shader); // If creating the shader program failed, alert

          if (!glContext.getProgramParameter(shader, glContext.LINK_STATUS)) {
            throw new Error('Unable to initialize the shader program: ' + glContext.getProgramInfoLog(shader));
          } // stores the shader


          this._shaderProgram.push(shader);
        }
        /**
         * Builds the layer shader
         * @param {string} type The shader type
         * @param {string} source The shader source string
         * @param {WebGL2RenderingContext} glContext The WebGL context
         * @returns {WebGLShader} The shader object
         */

      }, {
        key: "buildShader",
        value: function buildShader(type, source, glContext) {
          // creates the shader
          var shader = glContext.createShader(type); // Send the source to the shader object

          glContext.shaderSource(shader, source); // Compile the shader program

          glContext.compileShader(shader); // See if it compiled successfully

          if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ');
            console.error(source);
            console.error(glContext.getShaderInfoLog(shader));
            glContext.deleteShader(shader);
            throw new Error('Unable to load the shader');
          }

          return shader;
        }
      }, {
        key: "layerId",
        get: function get() {
          return this._layerId;
        }
        /**
         * Returns if the layers is visible
         */

      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        }
        /**
         * Sets the visibility
         */
        ,
        set: function set(visible) {
          this._visible = visible;
        }
        /**
         * Returns if the layers is selectable
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable;
        }
        /**
         * Sets the selection
         */
        ,
        set: function set(selectable) {
          this._selectable = selectable;
        }
        /**
         * Sends the camera to the layer
         */

      }, {
        key: "camera",
        set: function set(camera) {
          this._camera = camera;
        }
      }]);

      return Layer;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/mapview.ts":
  /*!************************************!*\
    !*** ./src/app/mapview/mapview.ts ***!
    \************************************/

  /*! exports provided: MapView */

  /***/
  function srcAppMapviewMapviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapView", function () {
      return MapView;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts");
    /* harmony import */


    var _layer_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layer-manager */
    "./src/app/mapview/layer-manager.ts");
    /* harmony import */


    var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./camera */
    "./src/app/mapview/camera.ts");
    /* harmony import */


    var _key_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./key-events */
    "./src/app/mapview/key-events.ts");
    /* harmony import */


    var _mouse_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mouse-events */
    "./src/app/mapview/mouse-events.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts"); /// <reference types="@types/webgl2" />


    var MapView =
    /*#__PURE__*/
    function () {
      /**
       * MapView constructor
       * @param {HTMLElement} mapDiv The html element to hold the map.
       */
      function MapView(mapDiv) {
        var _this25 = this;

        var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, MapView);

        // Map div
        this._mapDiv = null; // Html canvas

        this._canvas = null; // WebGL context

        this._glContext = null; // Layer manager object

        this._layerManager = null; // stores the map div

        this._mapDiv = mapDiv; // creates the new canvas element

        this._canvas = document.createElement('canvas'); // gets the webgl context

        this._glContext = this._canvas.getContext('webgl2'); // appends the canvas

        this._mapDiv.appendChild(this._canvas); // callbacks


        this._callbacks = callbacks; // inits the camera

        this.initCamera('camera.json').then(function () {
          // resizes the canvas
          _this25.resize();
        }); // inits the mouse events

        this.initMouseEvents(); // inits the mouse events

        this.initKeyboardEvents(); // bind events

        this.initWindowEvents();
      }
      /**
       * gets the canvas element
       */


      _createClass(MapView, [{
        key: "toggleCameraMode",

        /**
         * Toggle Camera Mode
         */
        value: function toggleCameraMode() {
          var currentCameraStatus = this._camera.getCameraStatus();

          if (currentCameraStatus === _constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera2D) {
            this._camera.setCameraStatus(_constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera3D);
          } else {
            this._camera.setCameraStatus(_constants__WEBPACK_IMPORTED_MODULE_6__["CameraStatus"].Camera2D);
          }

          this.render();
        }
      }, {
        key: "initCamera",
        value: function initCamera(camera) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var params;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return _data_api__WEBPACK_IMPORTED_MODULE_1__["DataApi"].getMapIndex(camera);

                  case 2:
                    params = _context17.sent;
                    // sets the camera
                    this._camera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"](params.coordinates[0][0], params.coordinates[0][1], params.properties.zoom); // renders the scene

                    this.render();

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
        /**
         * Map layers initialization
         */

      }, {
        key: "initLayers",
        value: function initLayers(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var data, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, element, layer;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    // creates the manager
                    this._layerManager = new _layer_manager__WEBPACK_IMPORTED_MODULE_2__["LayerManager"](index); // load the index file and its layers

                    _context18.next = 3;
                    return _data_api__WEBPACK_IMPORTED_MODULE_1__["DataApi"].getMapIndex(index);

                  case 3:
                    data = _context18.sent;
                    // loop over the index file
                    _iteratorNormalCompletion6 = true;
                    _didIteratorError6 = false;
                    _iteratorError6 = undefined;
                    _context18.prev = 7;
                    _iterator6 = data[Symbol.iterator]();

                  case 9:
                    if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                      _context18.next = 24;
                      break;
                    }

                    element = _step6.value;

                    if (!('skip' in element && element['skip'])) {
                      _context18.next = 13;
                      break;
                    }

                    return _context18.abrupt("continue", 21);

                  case 13:
                    // loads the layers data
                    layer = this._layerManager.createLayer(element['type'], element['id']); // layer configuration

                    this.layerConfig(layer, element); // loads the shaders

                    _context18.next = 17;
                    return layer.loadShaders(this._glContext);

                  case 17:
                    _context18.next = 19;
                    return layer.updateFeatures(this._glContext);

                  case 19:
                    this.render();

                    if (element['type'] === 'building') {
                      this._buildingLayer = layer;
                    }

                  case 21:
                    _iteratorNormalCompletion6 = true;
                    _context18.next = 9;
                    break;

                  case 24:
                    _context18.next = 30;
                    break;

                  case 26:
                    _context18.prev = 26;
                    _context18.t0 = _context18["catch"](7);
                    _didIteratorError6 = true;
                    _iteratorError6 = _context18.t0;

                  case 30:
                    _context18.prev = 30;
                    _context18.prev = 31;

                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }

                  case 33:
                    _context18.prev = 33;

                    if (!_didIteratorError6) {
                      _context18.next = 36;
                      break;
                    }

                    throw _iteratorError6;

                  case 36:
                    return _context18.finish(33);

                  case 37:
                    return _context18.finish(30);

                  case 38:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this, [[7, 26, 30, 38], [31,, 33, 37]]);
          }));
        }
        /**
         * Map layers configuration
         */

      }, {
        key: "layerConfig",
        value: function layerConfig(layer, config) {
          // color map
          if (config['color'] !== undefined) {
            layer.updateColorMap(this._glContext, config['color']);
          } else {
            layer.updateColorMap(this._glContext, _constants__WEBPACK_IMPORTED_MODULE_6__["ColorMapType"].SEQUENTIAL_RED_MAP);
          } // selectable


          if (config['selectable'] !== undefined) {
            layer.selectable = config['selectable'];
          } else {
            layer.selectable = false;
          } // visibility


          if (config['visible'] !== undefined) {
            layer.visible = config['visible'];
          } else {
            layer.visible = true;
          }
        }
        /**
         * Add layer geometry and function function
         */

      }, {
        key: "addLayer",
        value: function addLayer(layerType, layerId, data) {
          var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
            visible: true,
            selectable: false
          };
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var layer;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    // loads the layers data
                    layer = this._layerManager.createLayer(layerType, layerId); // loads the shaders

                    _context19.next = 3;
                    return layer.loadShaders(this._glContext);

                  case 3:
                    _context19.next = 5;
                    return layer.updateFeatures(this._glContext, data);

                  case 5:
                    // make visible
                    layer.visible = config.visible;
                    layer.selectable = config.selectable; // render

                    this.render();

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
        /**
         * Delete layer function
         */

      }, {
        key: "delLayer",
        value: function delLayer(layerId) {
          var pos = -1;

          for (var lId = 0; lId < this._layerManager.layers.length; lId++) {
            // gets the layer
            var layer = this._layerManager.layers[lId]; // check for the layer

            if (layer.layerId !== layerId) {
              continue;
            } // id found


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

      }, {
        key: "updateLayerFunction",
        value: function updateLayerFunction(layerId, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            var layer, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, lay;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    // searches the layer
                    layer = null;
                    _iteratorNormalCompletion7 = true;
                    _didIteratorError7 = false;
                    _iteratorError7 = undefined;
                    _context20.prev = 4;
                    _iterator7 = this._layerManager.layers[Symbol.iterator]();

                  case 6:
                    if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                      _context20.next = 14;
                      break;
                    }

                    lay = _step7.value;

                    if (!(lay.layerId === layerId)) {
                      _context20.next = 11;
                      break;
                    }

                    layer = lay;
                    return _context20.abrupt("break", 14);

                  case 11:
                    _iteratorNormalCompletion7 = true;
                    _context20.next = 6;
                    break;

                  case 14:
                    _context20.next = 20;
                    break;

                  case 16:
                    _context20.prev = 16;
                    _context20.t0 = _context20["catch"](4);
                    _didIteratorError7 = true;
                    _iteratorError7 = _context20.t0;

                  case 20:
                    _context20.prev = 20;
                    _context20.prev = 21;

                    if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                      _iterator7.return();
                    }

                  case 23:
                    _context20.prev = 23;

                    if (!_didIteratorError7) {
                      _context20.next = 26;
                      break;
                    }

                    throw _iteratorError7;

                  case 26:
                    return _context20.finish(23);

                  case 27:
                    return _context20.finish(20);

                  case 28:
                    if (!(layer === null)) {
                      _context20.next = 30;
                      break;
                    }

                    return _context20.abrupt("return");

                  case 30:
                    _context20.next = 32;
                    return layer.updateFunction(this._glContext, data);

                  case 32:
                    // make it visible
                    layer.visible = true; // render

                    this.render();

                  case 34:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this, [[4, 16, 20, 28], [21,, 23, 27]]);
          }));
        }
        /**
         * cleans the layer function
         */

      }, {
        key: "cleanLayerFunction",
        value: function cleanLayerFunction(layerId) {
          // searches the layer
          var layer = null;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this._layerManager.layers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var lay = _step8.value;

              if (lay.layerId === layerId) {
                layer = lay;
                break;
              }
            } // not found

          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          if (layer === null) {
            return;
          } // update the function


          layer.cleanFunction(this._glContext); // make it visible

          layer.visible = true; // render

          this.render();
        }
        /**
         * Inits the mouse events
         */

      }, {
        key: "initMouseEvents",
        value: function initMouseEvents() {
          // creates the mouse events manager
          this._mouse = new _mouse_events__WEBPACK_IMPORTED_MODULE_5__["MouseEvents"](this, this._callbacks); // binds the mouse events

          this._mouse.bindEvents();
        }
        /**
         * Inits the mouse events
         */

      }, {
        key: "initKeyboardEvents",
        value: function initKeyboardEvents() {
          // creates the mouse events manager
          this._keyboard = new _key_events__WEBPACK_IMPORTED_MODULE_4__["KeyEvents"](this, this._callbacks); // binds the mouse events

          this._keyboard.bindEvents();
        }
        /**
         * inits the window events
         */

      }, {
        key: "initWindowEvents",
        value: function initWindowEvents() {
          var _this26 = this;

          // resize listener
          window.addEventListener('resize', function () {
            // resizes the canvas
            _this26.resize();

            _this26.render();
          });
        }
      }, {
        key: "pick",
        value: function pick(layerId, elementId) {
          var layer = this._layerManager.getLayer(layerId);

          if (layer) {
            layer.setPickId(elementId);
            this.render();
          }
        }
        /**
         * Renders the map
         */

      }, {
        key: "render",
        value: function render() {
          if (!this._camera) {
            return;
          } // sky


          this._glContext.clearColor(0.7451, 0.8235, 0.8431, 1.0); // tslint:disable-next-line:no-bitwise


          this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT); // updates the camera


          this._camera.update(); // render the layers


          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = this._layerManager.layers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var layer = _step9.value;

              // skips based on visibility
              if (!layer.visible) {
                continue;
              } // sends the camera


              layer.camera = this.camera; // render

              layer.render(this._glContext);
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }
        }
        /**
         * Resizes the html canvas
         */

      }, {
        key: "resize",
        value: function resize() {
          var targetWidth = this._mapDiv.clientWidth;
          var targetHeight = this._mapDiv.clientHeight;
          var value = Math.max(targetWidth, targetHeight);

          this._glContext.viewport(0, 0, value, value); //


          this._canvas.width = targetWidth;
          this._canvas.height = targetHeight; // stores in the camera

          this._camera.setViewportResolution(targetWidth, targetHeight);
        }
      }, {
        key: "canvas",
        get: function get() {
          return this._canvas;
        }
        /**
         * gets the map div
         */

      }, {
        key: "div",
        get: function get() {
          return this._mapDiv;
        }
        /**
         * gets the map div
         */

      }, {
        key: "glContext",
        get: function get() {
          return this._glContext;
        }
        /**
         * gets the camera object
         */

      }, {
        key: "camera",
        get: function get() {
          return this._camera;
        }
        /**
         * gets the layers
         */

      }, {
        key: "layerManager",
        get: function get() {
          return this._layerManager;
        }
      }]);

      return MapView;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/mouse-events.ts":
  /*!*****************************************!*\
    !*** ./src/app/mapview/mouse-events.ts ***!
    \*****************************************/

  /*! exports provided: MouseEvents */

  /***/
  function srcAppMapviewMouseEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MouseEvents", function () {
      return MouseEvents;
    });
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");

    var MouseEvents =
    /*#__PURE__*/
    function () {
      /**
       * Mouse events constructor
       * @param map the map to bind the events
       */
      function MouseEvents(map) {
        var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, MouseEvents);

        this._map = map;
        this._callbacks = callbacks; // default values

        this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].IDLE;
        this._lastPoint = [0, 0];
      }

      _createClass(MouseEvents, [{
        key: "bindEvents",
        value: function bindEvents() {
          // sets the mouse listeners
          this._map.canvas.addEventListener('wheel', this.mouseWheel.bind(this), false);

          this._map.canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);

          document.addEventListener('mousemove', this.mouseMove.bind(this), false);
          document.addEventListener('mouseup', this.mouseUp.bind(this), false);
        }
        /**
         * Handles mouse down event
         */

      }, {
        key: "mouseDown",
        value: function mouseDown(event) {
          this._lastPoint = [event.x, event.y];

          if (event.ctrlKey) {
            var x = event.x;
            var y = this._map.canvas.height - event.y;
            var picks = [];
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = this._map.layerManager.layers[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var layer = _step10.value;

                if (!layer.selectable) {
                  continue;
                }

                layer.pick(this._map.glContext, x, y);
                picks.push(layer.pickId());

                this._callbacks.mouse.mouseDown(picks);
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }
          } else {
            this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].DRAG;
          }

          this._map.render();
        }
        /**
           * Handles mouse down event
           */

      }, {
        key: "mouseMove",
        value: function mouseMove(event) {
          // changes the values
          if (this._status === _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].DRAG) {
            var dx = -event.x + this._lastPoint[0];
            var dy = event.y - this._lastPoint[1];

            if (event.buttons === 1 && event.shiftKey && this._map.camera.getCameraStatus() === _constants__WEBPACK_IMPORTED_MODULE_0__["CameraStatus"].Camera3D) {
              // left button
              this._map.camera.yaw(dx / this._map.canvas.clientWidth);

              this._map.camera.pitch(dy / this._map.canvas.clientHeight);
            } else {
              this._map.camera.translate(dx / this._map.canvas.clientWidth, dy / this._map.canvas.clientHeight);
            }

            this._lastPoint = [event.x, event.y];

            this._map.render();
          }
        }
        /**
         * Handles mouse down event
         */

      }, {
        key: "mouseUp",
        value: function mouseUp(event) {
          // changes the values
          this._status = _constants__WEBPACK_IMPORTED_MODULE_0__["MapViewStatus"].IDLE;

          this._map.render();
        }
        /**
         * Handles mouse down event
         */

      }, {
        key: "mouseWheel",
        value: function mouseWheel(event) {
          // changes the values
          var maxAxisLength = Math.max(this._map.canvas.width, this._map.canvas.height);
          var x = event.x / maxAxisLength;
          var y = (this._map.canvas.height - event.y) / maxAxisLength;

          this._map.camera.zoom(event.deltaY, x, y);

          this._map.render();
        }
        /**
         * Handles mouse down event
         */

      }, {
        key: "mouseOver",
        value: function mouseOver(event) {
          console.log('called', event.ctrlKey);
        }
      }]);

      return MouseEvents;
    }();
    /***/

  },

  /***/
  "./src/app/mapview/physical-layer.ts":
  /*!*******************************************!*\
    !*** ./src/app/mapview/physical-layer.ts ***!
    \*******************************************/

  /*! exports provided: PhysicalLayer */

  /***/
  function srcAppMapviewPhysicalLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhysicalLayer", function () {
      return PhysicalLayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layer */
    "./src/app/mapview/layer.ts");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts"); /// <reference types="@types/webgl2" />


    var PhysicalLayer =
    /*#__PURE__*/
    function (_layer__WEBPACK_IMPOR3) {
      _inherits(PhysicalLayer, _layer__WEBPACK_IMPOR3);

      /**
       * The Vector Layer constructor
       * @param {string} id the layer id
       */
      function PhysicalLayer(id) {
        var _this27;

        _classCallCheck(this, PhysicalLayer);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(PhysicalLayer).call(this, id)); // primitive Ids

        _this27._features = {}; // OpenGL data buffer

        _this27._glPositionBuffer = null;
        _this27._glColorBuffer = null;
        _this27._glIndexBuffer = null; // data buffer

        _this27._positionBuffer = [];
        _this27._colorBuffer = [];
        _this27._indexBuffer = []; // shader attribute id

        _this27._positionId = -1;
        _this27._colorId = -1; // uniforms

        _this27._uModelViewMatrixId = -1;
        _this27._uProjectionMatrixId = -1;
        _this27._uWorldOrigin = -1;
        return _this27;
      }
      /**
       * Shader load signature
       * @param {WebGL2RenderingContext} glContext WebGL context
       */


      _createClass(PhysicalLayer, [{
        key: "loadShaders",
        value: function loadShaders(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var id, vertUrl, fragUrl, vsShader, fsShader;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    id = 0;

                  case 1:
                    if (!(id < PhysicalLayer.N_SHADER)) {
                      _context21.next = 14;
                      break;
                    }

                    // shaders url
                    vertUrl = "assets/shaders/physical(".concat(id, ").vert");
                    fragUrl = "assets/shaders/physical(".concat(id, ").frag"); // Vertex shader program

                    _context21.next = 6;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);

                  case 6:
                    vsShader = _context21.sent;
                    _context21.next = 9;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);

                  case 9:
                    fsShader = _context21.sent;
                    // load all shaders
                    this.initShaderProgram(vsShader, fsShader, glContext);

                  case 11:
                    id++;
                    _context21.next = 1;
                    break;

                  case 14:
                    // uniforms definition
                    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
                    this._colorId = glContext.getAttribLocation(this._shaderProgram[0], 'vertRgb');
                    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
                    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
                    this._uWorldOrigin = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin'); // load message

                    console.log("Shaders successfully loaded for layer ".concat(this._layerId, "."));

                  case 20:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
        /**
         * Data update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var _this28 = this;

            var nverts, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _loop4, _iterator11, _step11;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);

                  case 2:
                    data = _context22.sent;
                    // new feature found
                    this._features = {
                      'position': [],
                      'color': [],
                      'index': [],
                      'function': [],
                      'size': []
                    }; // loaded number of vertices

                    nverts = 0; // iterates over the geometries

                    _iteratorNormalCompletion11 = true;
                    _didIteratorError11 = false;
                    _iteratorError11 = undefined;
                    _context22.prev = 8;

                    _loop4 = function _loop4() {
                      var feature = _step11.value;
                      // gets the feature color
                      var hex = feature.properties.color.slice(2, 8);
                      var rgb = [0, 2, 4].map(function (start) {
                        return parseInt(hex.slice(start, start + 2), 16) / 255;
                      }); // get the coordinates

                      var position = feature.geometry.coordinates; // get the colors

                      var colors = [];

                      for (var id = 0; id < position.length / PhysicalLayer.COORDS; id++) {
                        colors.push.apply(colors, _toConsumableArray(rgb));
                      } // build the indices


                      var indices = feature.geometry.indices;

                      for (var _id2 = 0; _id2 < indices.length; _id2++) {
                        indices[_id2] += nverts;
                      } // add to the feature


                      _this28._features['position'].push.apply(_this28._features['position'], position);

                      _this28._features['color'].push.apply(_this28._features['color'], colors);

                      _this28._features['index'].push.apply(_this28._features['index'], indices); // loaded vertices


                      nverts += position.length / PhysicalLayer.COORDS;
                    };

                    for (_iterator11 = data.features[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      _loop4();
                    } // formats the buffer


                    _context22.next = 17;
                    break;

                  case 13:
                    _context22.prev = 13;
                    _context22.t0 = _context22["catch"](8);
                    _didIteratorError11 = true;
                    _iteratorError11 = _context22.t0;

                  case 17:
                    _context22.prev = 17;
                    _context22.prev = 18;

                    if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                      _iterator11.return();
                    }

                  case 20:
                    _context22.prev = 20;

                    if (!_didIteratorError11) {
                      _context22.next = 23;
                      break;
                    }

                    throw _iteratorError11;

                  case 23:
                    return _context22.finish(20);

                  case 24:
                    return _context22.finish(17);

                  case 25:
                    this._positionBuffer = this._features['position']; // formats the buffer

                    this._colorBuffer = this._features['color']; // formats the buffer

                    this._indexBuffer = this._features['index']; // creates the buffer

                    this.createBuffers(glContext);

                  case 29:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[8, 13, 17, 25], [18,, 20, 24]]);
          }));
        }
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "render",
        value: function render(glContext) {
          // invalid layers
          if (this._shaderProgram.length === 0 || this._shaderProgram[0] === null || this._glPositionBuffer === null || this._glColorBuffer === null || this._glIndexBuffer === null || this._positionId < 0 || this._colorId < 0) {
            return;
          } // sends the uniforms


          this.setUniforms(glContext); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, PhysicalLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer);
          glContext.vertexAttribPointer(this._colorId, 3, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._colorId); // Tell WebGL which indices to use to index the vertices

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // binds the shader program

          glContext.useProgram(this._shaderProgram[0]); // draw the geometry

          glContext.drawElements(glContext.TRIANGLES, this._indexBuffer.length, glContext.UNSIGNED_INT, 0);
        }
        /**
         * Send uniforms to the shader
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "setUniforms",
        value: function setUniforms(glContext) {
          if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
          }

          glContext.useProgram(this._shaderProgram[0]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOrigin, worldOrigin[0], worldOrigin[1]);
        }
        /**
         * Layer VBO creation signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createBuffers",
        value: function createBuffers(glContext) {
          // Create a buffer for the positions.
          this._glPositionBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._positionBuffer), glContext.STATIC_DRAW); // Create a buffer for the colors.

          this._glColorBuffer = glContext.createBuffer(); // Select the color buffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glColorBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._colorBuffer), glContext.STATIC_DRAW); // Create a buffer for the indices.

          this._glIndexBuffer = glContext.createBuffer(); // Select the index buffer as the one to apply buffer

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // send data to gpu

          glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._indexBuffer), glContext.STATIC_DRAW);
        }
      }]);

      return PhysicalLayer;
    }(_layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]); // number of coordinates per vertex


    PhysicalLayer.COORDS = 2; // number of shaders

    PhysicalLayer.N_SHADER = 1;
    /***/
  },

  /***/
  "./src/app/mapview/point-layer.ts":
  /*!****************************************!*\
    !*** ./src/app/mapview/point-layer.ts ***!
    \****************************************/

  /*! exports provided: PointLayer */

  /***/
  function srcAppMapviewPointLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointLayer", function () {
      return PointLayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layer */
    "./src/app/mapview/layer.ts");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");
    /* harmony import */


    var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./colormap */
    "./src/app/mapview/colormap.ts"); /// <reference types="@types/webgl2" />


    var PointLayer =
    /*#__PURE__*/
    function (_layer__WEBPACK_IMPOR4) {
      _inherits(PointLayer, _layer__WEBPACK_IMPOR4);

      /**
       * The Vector Layer constructor
       * @param {string} id the layer id
       */
      function PointLayer(id) {
        var _this29;

        _classCallCheck(this, PointLayer);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(PointLayer).call(this, id)); // primitive Ids

        _this29._features = {}; // OpenGL data buffer

        _this29._glPositionBuffer = null;
        _this29._glScalarBuffer = null;
        _this29._glColorMapTex = null; // shader attribute id

        _this29._positionId = -1;
        _this29._scalarId = -1; // transformation uniforms

        _this29._uModelViewMatrixId = -1;
        _this29._uProjectionMatrixId = -1;
        _this29._uWorldOriginId = -1; // color map uniform

        _this29._uColorMapId = -1;
        _this29._visible = false;
        return _this29;
      }
      /**
       * Shader load signature
       * @param {WebGL2RenderingContext} glContext WebGL context
       */


      _createClass(PointLayer, [{
        key: "loadShaders",
        value: function loadShaders(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            var id, vertUrl, fragUrl, vsShader, fsShader;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    id = 0;

                  case 1:
                    if (!(id < PointLayer.N_SHADER)) {
                      _context23.next = 14;
                      break;
                    }

                    // shaders url
                    vertUrl = "assets/shaders/point(".concat(id, ").vert");
                    fragUrl = "assets/shaders/point(".concat(id, ").frag"); // Vertex shader program

                    _context23.next = 6;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);

                  case 6:
                    vsShader = _context23.sent;
                    _context23.next = 9;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);

                  case 9:
                    fsShader = _context23.sent;
                    // load all shaders
                    this.initShaderProgram(vsShader, fsShader, glContext);

                  case 11:
                    id++;
                    _context23.next = 1;
                    break;

                  case 14:
                    // vertex data on the shader
                    this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
                    this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar'); // transformation uniforms on the shader

                    this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
                    this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
                    this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin'); // colorMap texture

                    this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap'); // load message

                    console.log("Shaders successfully loaded for layer ".concat(this._layerId, "."));

                  case 21:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
        /**
         * Data update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, feature, position, scalar, id, val;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    if (!(data === null)) {
                      _context24.next = 4;
                      break;
                    }

                    _context24.next = 3;
                    return _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);

                  case 3:
                    data = _context24.sent;

                  case 4:
                    // new feature found
                    this._features = {
                      'position': [],
                      'scalar': []
                    }; // iterates over the geometries

                    _iteratorNormalCompletion12 = true;
                    _didIteratorError12 = false;
                    _iteratorError12 = undefined;
                    _context24.prev = 8;

                    for (_iterator12 = data.features[Symbol.iterator](); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                      feature = _step12.value;
                      // feature data
                      position = feature.geometry.coordinates;
                      scalar = [];

                      for (id = 0; id < position.length / PointLayer.COORDS; id++) {
                        val = feature.properties && feature.properties.scalar ? feature.properties.scalar : -1;
                        scalar.push(val);
                      } // add to the feature


                      this._features['position'].push.apply(this._features['position'], position);

                      this._features['scalar'].push.apply(this._features['scalar'], scalar);
                    } // creates the buffer


                    _context24.next = 16;
                    break;

                  case 12:
                    _context24.prev = 12;
                    _context24.t0 = _context24["catch"](8);
                    _didIteratorError12 = true;
                    _iteratorError12 = _context24.t0;

                  case 16:
                    _context24.prev = 16;
                    _context24.prev = 17;

                    if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                      _iterator12.return();
                    }

                  case 19:
                    _context24.prev = 19;

                    if (!_didIteratorError12) {
                      _context24.next = 22;
                      break;
                    }

                    throw _iteratorError12;

                  case 22:
                    return _context24.finish(19);

                  case 23:
                    return _context24.finish(16);

                  case 24:
                    this.createBuffers(glContext); // creates the scalar data vbo

                    this.createScalarBuffer(glContext); // creates the color map

                    this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].DIVERGING_RED_BLUE_MAP, false);

                  case 27:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this, [[8, 12, 16, 24], [17,, 19, 23]]);
          }));
        }
        /**
         * Function update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFunction",
        value: function updateFunction(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var data;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFunction(this._layerId);

                  case 2:
                    data = _context25.sent;
                    // new feature found
                    this._features = {
                      'scalar': []
                    }; // formats the buffer

                    this._features['scalar'] = data.properties.scalar; // creates the scalar data vbo

                    this.createScalarBuffer(glContext);

                  case 6:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
        /**
         * Changes the color map
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {ColorMapType} cMap Color Map
         */

      }, {
        key: "updateColorMap",
        value: function updateColorMap(glContext, cMap) {
          // creates the color map
          this.createColorMapTexture(glContext, cMap, false);
        }
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "render",
        value: function render(glContext) {
          // invalid layers
          if (this._shaderProgram.length === 0 || this._shaderProgram[0] === null || this._glPositionBuffer === null || this._glScalarBuffer === null || this._positionId < 0 || this._scalarId < 0) {
            return;
          } // sends the uniforms


          this.setUniforms(glContext); // bending

          glContext.enable(glContext.BLEND);
          glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, PointLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
          glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._scalarId); // Tell WebGL we want to affect texture unit 0

          glContext.activeTexture(glContext.TEXTURE0); // Bind the texture to texture unit 0

          glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex); // binds the shader program

          glContext.useProgram(this._shaderProgram[0]); // draw the geometry

          glContext.drawArrays(glContext.POINTS, 0, this._features['position'].length / PointLayer.COORDS); // disable blend

          glContext.disable(glContext.BLEND);
        }
        /**
         * Send uniforms to the shader
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "setUniforms",
        value: function setUniforms(glContext) {
          if (!this._shaderProgram.length || this._shaderProgram[0] === null) {
            return;
          }

          glContext.useProgram(this._shaderProgram[0]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]); // send the color map

          glContext.uniform1i(this._uColorMapId, 0);
        }
        /**
         * Layer VBO creation signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createBuffers",
        value: function createBuffers(glContext) {
          // Create a buffer for the positions.
          this._glPositionBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW);
        }
        /**
         * Scalar data vbo creation
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createScalarBuffer",
        value: function createScalarBuffer(glContext) {
          // Create a buffer for the colors.
          if (this._glScalarBuffer === null) {
            this._glScalarBuffer = glContext.createBuffer();
          } // Select the color buffer as the one to apply buffer


          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['scalar']), glContext.STATIC_DRAW);
        }
        /**
        * Color map texture creation
        * @param {WebGL2RenderingContext} glContext WebGL context
        * @param {ColorMapType} color Selected color map
        * @param {boolean} get the reverse color map
        */

      }, {
        key: "createColorMapTexture",
        value: function createColorMapTexture(glContext, color) {
          var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          // gets the color map
          var cmap = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse); // gl color map texture


          if (this._glColorMapTex === null) {
            this._glColorMapTex = glContext.createTexture();
          } // send the color map


          glContext.bindTexture(glContext.TEXTURE_2D, this._glColorMapTex);
          glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, cmap.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(cmap)); // glContext.NEAREST is also allowed, instead of glContext.LINEAR, as neither mipmap.

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR); // Prevents s-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE); // Prevents t-coordinate wrapping (repeating).

          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        }
      }]);

      return PointLayer;
    }(_layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]); // number of coordinates per vertex


    PointLayer.COORDS = 2; // number of shaders

    PointLayer.N_SHADER = 1;
    /***/
  },

  /***/
  "./src/app/mapview/polygon-layer.ts":
  /*!******************************************!*\
    !*** ./src/app/mapview/polygon-layer.ts ***!
    \******************************************/

  /*! exports provided: PolygonLayer */

  /***/
  function srcAppMapviewPolygonLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonLayer", function () {
      return PolygonLayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layer */
    "./src/app/mapview/layer.ts");
    /* harmony import */


    var _data_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-loader */
    "./src/app/mapview/data-loader.ts");
    /* harmony import */


    var _data_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-api */
    "./src/app/mapview/data-api.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/mapview/constants.ts");
    /* harmony import */


    var _colormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./colormap */
    "./src/app/mapview/colormap.ts"); /// <reference types="@types/webgl2" />


    var PolygonLayer =
    /*#__PURE__*/
    function (_layer__WEBPACK_IMPOR5) {
      _inherits(PolygonLayer, _layer__WEBPACK_IMPOR5);

      /**
       * The Vector Layer constructor
       * @param {string} id the layer id
       */
      function PolygonLayer(id) {
        var _this30;

        _classCallCheck(this, PolygonLayer);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(PolygonLayer).call(this, id)); // primitive Ids

        _this30._features = {}; // data buffers

        _this30._glPositionBuffer = null;
        _this30._glIndexBuffer = null;
        _this30._glPolygonIdBuffer = null;
        _this30._glScalarBuffer = null; // shader attribute id

        _this30._positionId = -1;
        _this30._polygonId = -1;
        _this30._scalarId = -1; // transformation uniforms

        _this30._uModelViewMatrixId = -1;
        _this30._uProjectionMatrixId = -1;
        _this30._uWorldOriginId = -1;
        _this30._uScalarTextureId = -1; // highlighted building ID id

        _this30._highlight = -1;
        _this30._uHighlightId = -1; // FBO for picking

        _this30._fboWidth = -1;
        _this30._fboHeight = -1;
        _this30._fbo = null;
        _this30._readFbo = null; // first pass textures

        _this30._scalarTexture = null;
        _this30._polygonIdTexture = null; // color map

        _this30._uColorMapId = -1;
        _this30._colorMapTexture = null;
        return _this30;
      }
      /**
       * Shader load signature
       * @param {WebGL2RenderingContext} glContext WebGL context
       */


      _createClass(PolygonLayer, [{
        key: "loadShaders",
        value: function loadShaders(glContext) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            var id, vertUrl, fragUrl, vsShader, fsShader;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    id = 0;

                  case 1:
                    if (!(id < PolygonLayer.N_SHADER)) {
                      _context26.next = 14;
                      break;
                    }

                    // shaders url
                    vertUrl = "assets/shaders/polygon(".concat(id, ").vert");
                    fragUrl = "assets/shaders/polygon(".concat(id, ").frag"); // Vertex shader program

                    _context26.next = 6;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(vertUrl);

                  case 6:
                    vsShader = _context26.sent;
                    _context26.next = 9;
                    return _data_loader__WEBPACK_IMPORTED_MODULE_2__["DataLoader"].getTextData(fragUrl);

                  case 9:
                    fsShader = _context26.sent;
                    // load all shaders
                    this.initShaderProgram(vsShader, fsShader, glContext);

                  case 11:
                    id++;
                    _context26.next = 1;
                    break;

                  case 14:
                    // load message
                    console.log("#".concat(PolygonLayer.N_SHADER, " shaders successfully loaded for layer ").concat(this._layerId, "."));

                  case 15:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
        /**
         * Data update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(glContext) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var nverts, nfeatures, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, feature, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, part, position, ids, scalar, id, val, index, _id3;

            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    if (!(data === null)) {
                      _context27.next = 4;
                      break;
                    }

                    _context27.next = 3;
                    return _data_api__WEBPACK_IMPORTED_MODULE_3__["DataApi"].getLayerFeature(this._layerId);

                  case 3:
                    data = _context27.sent;

                  case 4:
                    // feature definition found
                    this._features = {
                      'position': [],
                      'scalar': [],
                      'polygonId': [],
                      'index': [],
                      'offset': []
                    }; // loaded number of vertices

                    nverts = 0; // number of loaded features

                    nfeatures = 0; // iterates over the geometries

                    _iteratorNormalCompletion13 = true;
                    _didIteratorError13 = false;
                    _iteratorError13 = undefined;
                    _context27.prev = 10;
                    _iterator13 = data.features[Symbol.iterator]();

                  case 12:
                    if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                      _context27.next = 37;
                      break;
                    }

                    feature = _step13.value;
                    // renders multi polygons
                    _iteratorNormalCompletion14 = true;
                    _didIteratorError14 = false;
                    _iteratorError14 = undefined;
                    _context27.prev = 17;

                    for (_iterator14 = feature.geometry[Symbol.iterator](); !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                      part = _step14.value;
                      // get the coordinates
                      position = part.coordinates; // get the colors

                      ids = [];
                      scalar = [];

                      for (id = 0; id < position.length / PolygonLayer.COORDS; id++) {
                        val = feature.properties && feature.properties.scalar ? feature.properties.scalar : -1;
                        scalar.push(val);
                        ids.push(nfeatures / data.features.length);
                      } // build the indices


                      index = part.indices;

                      for (_id3 = 0; _id3 < index.length; _id3++) {
                        index[_id3] += nverts;
                      } // loaded vertices


                      nverts += position.length / PolygonLayer.COORDS; // add to the feature

                      this._features['position'].push.apply(this._features['position'], position);

                      this._features['scalar'].push.apply(this._features['scalar'], scalar);

                      this._features['polygonId'].push.apply(this._features['polygonId'], ids);

                      this._features['index'].push.apply(this._features['index'], index);

                      this._features['offset'].push(position.length / PolygonLayer.COORDS);
                    }

                    _context27.next = 25;
                    break;

                  case 21:
                    _context27.prev = 21;
                    _context27.t0 = _context27["catch"](17);
                    _didIteratorError14 = true;
                    _iteratorError14 = _context27.t0;

                  case 25:
                    _context27.prev = 25;
                    _context27.prev = 26;

                    if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                      _iterator14.return();
                    }

                  case 28:
                    _context27.prev = 28;

                    if (!_didIteratorError14) {
                      _context27.next = 31;
                      break;
                    }

                    throw _iteratorError14;

                  case 31:
                    return _context27.finish(28);

                  case 32:
                    return _context27.finish(25);

                  case 33:
                    nfeatures += 1;

                  case 34:
                    _iteratorNormalCompletion13 = true;
                    _context27.next = 12;
                    break;

                  case 37:
                    _context27.next = 43;
                    break;

                  case 39:
                    _context27.prev = 39;
                    _context27.t1 = _context27["catch"](10);
                    _didIteratorError13 = true;
                    _iteratorError13 = _context27.t1;

                  case 43:
                    _context27.prev = 43;
                    _context27.prev = 44;

                    if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                      _iterator13.return();
                    }

                  case 46:
                    _context27.prev = 46;

                    if (!_didIteratorError13) {
                      _context27.next = 49;
                      break;
                    }

                    throw _iteratorError13;

                  case 49:
                    return _context27.finish(46);

                  case 50:
                    return _context27.finish(43);

                  case 51:
                    // creates the buffer
                    this.createBuffers(glContext); // creates the scalar data vbo

                    this.createScalarBuffer(glContext); // creates the color map

                    this.createColorMapTexture(glContext, _constants__WEBPACK_IMPORTED_MODULE_4__["ColorMapType"].DIVERGING_RED_BLUE_MAP, false);

                  case 54:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this, [[10, 39, 43, 51], [17, 21, 25, 33], [26,, 28, 32], [44,, 46, 50]]);
          }));
        }
        /**
         * Function update signature
         * @returns {Promise<any>} The load data promise
         */

      }, {
        key: "updateFunction",
        value: function updateFunction(glContext, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            var scalar, zero, fId, nVerts, sValue, vals;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    // scalar function
                    scalar = data.func; // invalid data layout

                    if (!(scalar.length !== this._features['offset'].length)) {
                      _context28.next = 3;
                      break;
                    }

                    return _context28.abrupt("return");

                  case 3:
                    // new feature found
                    this._features['scalar'] = [];
                    zero = 0;

                    if (data.fMin < 0 && data.fMax > 0) {
                      zero = 0;
                    } else if (data.fMin >= 0 && data.fMax > 0) {
                      zero = data.fMin;
                    } else if (data.fMin < 0 && data.fMax <= 0) {
                      zero = data.fMax;
                    } // fill the function array


                    for (fId = 0; fId < scalar.length; fId++) {
                      // get the values
                      nVerts = this._features['offset'][fId];
                      sValue = null;

                      if (scalar[fId] === 'notAlive') {
                        sValue = -1;
                      } else if (scalar[fId] === 'notActive') {
                        sValue = -2;
                      } else if (scalar[fId] === 'notValid') {
                        sValue = -3;
                      } else if (scalar[fId] === 'notChange') {
                        sValue = -3;
                      } else {
                        sValue = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].computeScalarValue(scalar[fId], data.fMin, data.fMax, zero);
                      } // fill the feature array


                      vals = new Array(nVerts).fill(sValue); // push to the function

                      this._features['scalar'].push.apply(this._features['scalar'], vals);
                    } // creates the scalar data vbo


                    this.createScalarBuffer(glContext);

                  case 8:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
        /**
         * Function update signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param data layer function
         */

      }, {
        key: "cleanFunction",
        value: function cleanFunction(glContext) {
          for (var id = 0; id < this._features['scalar'].length; id++) {
            this._features['scalar'][id] = -1;
          } // creates the scalar data vbo


          this.createScalarBuffer(glContext);
        }
        /**
         * Changes the color map
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {ColorMapType} cMap Color Map
         */

      }, {
        key: "updateColorMap",
        value: function updateColorMap(glContext, cMap) {
          // creates the color map
          this.createColorMapTexture(glContext, cMap, false);
        }
        /**
         * Layer render function signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         * @param {number} x Mouse x position
         * @param {number} y Mouse y position
         */

      }, {
        key: "pick",
        value: function pick(glContext, x, y) {
          glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);
          var result = new Float32Array(4);
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

      }, {
        key: "pickId",
        value: function pickId() {
          if (this._highlight === -1) {
            return this._highlight;
          }

          if (!this._features['polygonId']) {
            return this._highlight;
          }

          var previous = -1;
          var polyId = -1;

          for (var pId = 0; pId < this._features['polygonId'].length; pId++) {
            var current = this._features['polygonId'][pId];

            if (previous === current) {
              continue;
            } else {
              polyId += 1;
              previous = current;

              if (Math.abs(current - this._highlight) < 1e-5) {
                return polyId;
              }
            }
          }

          return polyId;
        }
      }, {
        key: "setPickId",
        value: function setPickId(id) {
          var previous = -1;
          var polyId = -1;

          if (!this._features['polygonId']) {
            this._highlight = -1;
            return;
          }

          for (var pId = 0; pId < this._features['polygonId'].length; pId++) {
            var current = this._features['polygonId'][pId];

            if (previous === current) {
              continue;
            } else {
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

      }, {
        key: "render",
        value: function render(glContext) {
          // invalid layers
          if (this._shaderProgram.length !== PolygonLayer.N_SHADER || this._glPositionBuffer === null || this._glPolygonIdBuffer === null || this._glScalarBuffer === null || this._glIndexBuffer === null) {
            return;
          } // FBO setup


          this.setupFBO(glContext); // Picking

          glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
          this.renderToTexture(glContext);
          glContext.bindFramebuffer(glContext.FRAMEBUFFER, null); // render

          this.renderTexture(glContext); // render selected polygon

          this.renderSelection(glContext);
        }
      }, {
        key: "renderSelection",
        value: function renderSelection(glContext) {
          var _this31 = this;

          // uniforms and attrib locations
          this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uModelViewMatrix');
          this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[2], 'uProjectionMatrix');
          this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[2], 'uWorldOrigin');
          this._positionId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPos');
          this._polygonId = glContext.getAttribLocation(this._shaderProgram[2], 'vertPolyId');
          this._uHighlightId = glContext.getUniformLocation(this._shaderProgram[2], 'uHighlightId'); // binds the shader program

          glContext.useProgram(this._shaderProgram[2]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]); // render unselected

          glContext.uniform1f(this._uHighlightId, this._highlight); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the polygon id buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
          glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._polygonId);
          var first = 0;
          var high = [];

          this._features['offset'].forEach(function (vertsCount) {
            // skips selected
            if (Math.abs(_this31._features['polygonId'][first] - _this31._highlight) < 1e-5) {
              var curr = {
                first: first,
                vertsCount: vertsCount
              };
              high.push(curr);
            } else {
              glContext.drawArrays(glContext.LINE_STRIP, first, vertsCount);
            }

            first += vertsCount;
          });

          high.forEach(function (cHigh) {
            glContext.drawArrays(glContext.LINE_STRIP, cHigh.first, cHigh.vertsCount);
          });
        }
        /**
         * Send uniforms to the shader
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "renderTexture",
        value: function renderTexture(glContext) {
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

      }, {
        key: "renderToTexture",
        value: function renderToTexture(glContext) {
          // tuniforms and attrib locations
          this._uModelViewMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uModelViewMatrix');
          this._uProjectionMatrixId = glContext.getUniformLocation(this._shaderProgram[0], 'uProjectionMatrix');
          this._uWorldOriginId = glContext.getUniformLocation(this._shaderProgram[0], 'uWorldOrigin');
          this._positionId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPos');
          this._polygonId = glContext.getAttribLocation(this._shaderProgram[0], 'vertPolyId');
          this._scalarId = glContext.getAttribLocation(this._shaderProgram[0], 'vertScalar');
          this._uColorMapId = glContext.getUniformLocation(this._shaderProgram[0], 'uColorMap'); // binds the shader program

          glContext.useProgram(this._shaderProgram[0]); // send matrices

          glContext.uniformMatrix4fv(this._uModelViewMatrixId, false, this._camera.getModelViewMatrix());
          glContext.uniformMatrix4fv(this._uProjectionMatrixId, false, this._camera.getProjectionMatrix()); // send world origin

          var worldOrigin = this._camera.getWorldOrigin();

          glContext.uniform2f(this._uWorldOriginId, worldOrigin[0], worldOrigin[1]); // send the color map

          glContext.uniform1i(this._uColorMapId, 0); // binds the position buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer);
          glContext.vertexAttribPointer(this._positionId, PolygonLayer.COORDS, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._positionId); // binds the polygon id buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer);
          glContext.vertexAttribPointer(this._polygonId, 1, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._polygonId); // binds the scalar buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer);
          glContext.vertexAttribPointer(this._scalarId, 1, glContext.FLOAT, false, 0, 0);
          glContext.enableVertexAttribArray(this._scalarId); // Tell WebGL we want to affect texture unit 0

          glContext.activeTexture(glContext.TEXTURE0);
          glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);
          glContext.clearColor(0.0, 0.0, 0.0, 0.0); // tslint:disable-next-line:no-bitwise

          glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT); // Tell WebGL which indices to use to index the vertices

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // draw the geometry

          glContext.drawElements(glContext.TRIANGLES, this._features['index'].length, glContext.UNSIGNED_INT, 0);
        }
        /**
         * setup FBO used for edge detection
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "setupFBO",
        value: function setupFBO(glContext) {
          if (this._fbo == null || this._readFbo == null) {
            // creates the buffers
            this._fbo = glContext.createFramebuffer();
            this._readFbo = glContext.createFramebuffer();
            this._polygonIdTexture = glContext.createTexture();
            this._scalarTexture = glContext.createTexture(); // check the availability of float buffers

            var ext = glContext.getExtension('EXT_color_buffer_float');

            if (!ext) {
              console.error('float buffer extension not supported!!!');
            }
          } // gets the viewport


          var viewPort = this._camera.getViewportResolution();

          if (this._fboWidth !== viewPort[0] || this._fboHeight !== viewPort[1]) {
            // update FBO size
            this._fboWidth = viewPort[0];
            this._fboHeight = viewPort[1]; // building ID texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._polygonIdTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // building ID texture

            glContext.bindTexture(glContext.TEXTURE_2D, this._scalarTexture);
            glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA32F, this._fboWidth, this._fboHeight, 0, glContext.RGBA, glContext.FLOAT, null);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
            glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE); // fbo setup

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._fbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._scalarTexture, 0);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT1, glContext.TEXTURE_2D, this._polygonIdTexture, 0);
            glContext.drawBuffers([glContext.COLOR_ATTACHMENT0, glContext.COLOR_ATTACHMENT1]); // readfbo setup

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, this._readFbo);
            glContext.framebufferTexture2D(glContext.FRAMEBUFFER, glContext.COLOR_ATTACHMENT0, glContext.TEXTURE_2D, this._polygonIdTexture, 0); // unbind fbos

            glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
          }
        }
        /**
         * Layer VBO creation signature
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createBuffers",
        value: function createBuffers(glContext) {
          // Create a buffer for the positions.
          this._glPositionBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPositionBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['position']), glContext.STATIC_DRAW); // Create a buffer for the positions.

          this._glPolygonIdBuffer = glContext.createBuffer(); // Select the positionBuffer as the one to apply buffer

          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glPolygonIdBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['polygonId']), glContext.STATIC_DRAW); // Create a buffer for the indices.

          this._glIndexBuffer = glContext.createBuffer(); // Select the index buffer as the one to apply buffer

          glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer); // send data to gpu

          glContext.bufferData(glContext.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._features['index']), glContext.STATIC_DRAW);
        }
        /**
         * Scalar data vbo creation
         * @param {WebGL2RenderingContext} glContext WebGL context
         */

      }, {
        key: "createScalarBuffer",
        value: function createScalarBuffer(glContext) {
          // Create a buffer for the colors.
          if (this._glScalarBuffer === null) {
            this._glScalarBuffer = glContext.createBuffer();
          } // Select the color buffer as the one to apply buffer


          glContext.bindBuffer(glContext.ARRAY_BUFFER, this._glScalarBuffer); // send data to gpu

          glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(this._features['scalar']), glContext.STATIC_DRAW);
        }
        /**
        * Color map texture creation
        * @param {WebGL2RenderingContext} glContext WebGL context
        * @param {ColorMapType} color Selected color map
        * @param {boolean} get the reverse color map
        */

      }, {
        key: "createColorMapTexture",
        value: function createColorMapTexture(glContext, color) {
          var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          // gets the color map
          var colors = _colormap__WEBPACK_IMPORTED_MODULE_5__["ColorMap"].getColorMap(color, reverse); // gl color map texture


          if (this._colorMapTexture === null) {
            this._colorMapTexture = glContext.createTexture();
          } // send the color map


          glContext.bindTexture(glContext.TEXTURE_2D, this._colorMapTexture);
          glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGBA, colors.length / 4, 1, 0, glContext.RGBA, glContext.UNSIGNED_BYTE, new Uint8Array(colors));
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.NEAREST);
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
          glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        }
      }]);

      return PolygonLayer;
    }(_layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]); // number of coordinates per vertex


    PolygonLayer.COORDS = 2; // number of shaders

    PolygonLayer.N_SHADER = 3;
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // moved this to independent file keeping the app.module cleaner


    var materialModules = [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [materialModules, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]],
        exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: materialModules,
          exports: materialModules
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService() {
        _classCallCheck(this, ApiService);
      }

      _createClass(ApiService, [{
        key: "loadModes",
        value: function loadModes() {
          return ['value', 'change'];
        }
      }, {
        key: "loadLevels",
        value: function loadLevels() {
          return ['borough', 'neighborhood', 'block', 'lot'];
        }
      }, {
        key: "loadSortBy",
        value: function loadSortBy() {
          return ['name', 'year'];
        }
      }, {
        key: "loadYearStep",
        value: function loadYearStep() {
          return ['0', '1', '2', '3', '4', '5'];
        }
      }, {
        key: "loadPolygons",
        value: function loadPolygons() {
          return ['neighborhoods', 'community districs'];
        }
      }, {
        key: "loadNavigation",
        value: function loadNavigation() {
          return ['complete', 'skip blocks'];
        }
      }, {
        key: "loadBoroughs",
        value: function loadBoroughs() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var url, response;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/meta.boroughs");
                    console.log(url); // Return a new promise.

                    _context29.next = 4;
                    return fetch(url);

                  case 4:
                    response = _context29.sent;
                    _context29.next = 7;
                    return response.json();

                  case 7:
                    return _context29.abrupt("return", _context29.sent);

                  case 8:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29);
          }));
        }
      }, {
        key: "loadYears",
        value: function loadYears() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var url, response;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/meta.years");
                    console.log(url); // Return a new promise.

                    _context30.next = 4;
                    return fetch(url);

                  case 4:
                    response = _context30.sent;
                    _context30.next = 7;
                    return response.json();

                  case 7:
                    return _context30.abrupt("return", _context30.sent);

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30);
          }));
        }
      }, {
        key: "loadAttributes",
        value: function loadAttributes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            var url, response, obj, arr;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/meta.nattributes");
                    console.log(url); // Return a new promise.

                    _context31.next = 4;
                    return fetch(url);

                  case 4:
                    response = _context31.sent;
                    obj = {};
                    _context31.next = 8;
                    return response.json();

                  case 8:
                    arr = _context31.sent;
                    arr.forEach(function (elm) {
                      obj[elm.attribute] = elm;

                      if (elm.categories.length <= 1) {
                        elm.categories = ['NONE'];
                      }
                    });
                    return _context31.abrupt("return", obj);

                  case 11:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));
        }
      }, {
        key: "loadMetrics",
        value: function loadMetrics() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var url, response;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/meta.metrics");
                    console.log(url); // Return a new promise.

                    _context32.next = 4;
                    return fetch(url);

                  case 4:
                    response = _context32.sent;
                    _context32.next = 7;
                    return response.json();

                  case 7:
                    return _context32.abrupt("return", _context32.sent);

                  case 8:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32);
          }));
        }
      }, {
        key: "loadPopsGeometry",
        value: function loadPopsGeometry(borough) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/popslayer");
                    console.log(url); // post parameters

                    params = {
                      borough: borough
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context33.next = 7;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 7:
                    response = _context33.sent;
                    _context33.next = 10;
                    return response.json();

                  case 10:
                    return _context33.abrupt("return", _context33.sent);

                  case 11:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33);
          }));
        }
      }, {
        key: "loadGeometry",
        value: function loadGeometry(level, state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee34() {
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    if (!(level === 'borough')) {
                      _context34.next = 4;
                      break;
                    }

                    _context34.next = 3;
                    return this.loadNeighborhoodsGeometry(state.borough, state.polygon);

                  case 3:
                    return _context34.abrupt("return", _context34.sent);

                  case 4:
                    if (!(level === 'neighborhood')) {
                      _context34.next = 14;
                      break;
                    }

                    if (!(state.navigation === 'complete')) {
                      _context34.next = 11;
                      break;
                    }

                    _context34.next = 8;
                    return this.loadBlocksGeometry(state.borough, state.polygon, state.neighborhood, state.year);

                  case 8:
                    return _context34.abrupt("return", _context34.sent);

                  case 11:
                    _context34.next = 13;
                    return this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, '', state.year);

                  case 13:
                    return _context34.abrupt("return", _context34.sent);

                  case 14:
                    if (!(level === 'block')) {
                      _context34.next = 18;
                      break;
                    }

                    _context34.next = 17;
                    return this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, state.block, state.year);

                  case 17:
                    return _context34.abrupt("return", _context34.sent);

                  case 18:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "loadNeighborhoodsGeometry",
        value: function loadNeighborhoodsGeometry(borough, polygon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee35() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/geometries.neighborhoods");
                    console.log(url); // post parameters

                    params = {
                      borough: borough,
                      polygon: polygon
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context35.next = 7;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 7:
                    response = _context35.sent;
                    _context35.next = 10;
                    return response.json();

                  case 10:
                    return _context35.abrupt("return", _context35.sent);

                  case 11:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35);
          }));
        }
      }, {
        key: "loadBlocksGeometry",
        value: function loadBlocksGeometry(borough, polygon, neighborhood, year) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/geometries.blocks");
                    console.log(url); // post parameters

                    params = {
                      borough: borough,
                      polygon: polygon,
                      neighborhood: neighborhood,
                      year: year
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context36.next = 7;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 7:
                    response = _context36.sent;
                    _context36.next = 10;
                    return response.json();

                  case 10:
                    return _context36.abrupt("return", _context36.sent);

                  case 11:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36);
          }));
        }
      }, {
        key: "loadLotsGeometry",
        value: function loadLotsGeometry(borough, polygon, neighborhood, block, year) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee37() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/geometries.lots");
                    console.log(url); // post parameters

                    params = {
                      borough: borough,
                      polygon: polygon,
                      neighborhood: neighborhood,
                      block: block,
                      year: year
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context37.next = 7;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 7:
                    response = _context37.sent;
                    _context37.next = 10;
                    return response.json();

                  case 10:
                    return _context37.abrupt("return", _context37.sent);

                  case 11:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37);
          }));
        }
      }, {
        key: "loadSummary",
        value: function loadSummary(level, state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee38() {
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    if (!(level === 'borough')) {
                      _context38.next = 4;
                      break;
                    }

                    _context38.next = 3;
                    return this.loadNeighborhoodsSummary(state.borough, state.polygon, state.attribute, state.category, state.metric);

                  case 3:
                    return _context38.abrupt("return", _context38.sent);

                  case 4:
                    if (!(level === 'neighborhood')) {
                      _context38.next = 14;
                      break;
                    }

                    if (!(state.navigation === 'complete')) {
                      _context38.next = 11;
                      break;
                    }

                    _context38.next = 8;
                    return this.loadBlocksSummary(state.borough, state.polygon, state.neighborhood, state.attribute, state.category, state.metric);

                  case 8:
                    return _context38.abrupt("return", _context38.sent);

                  case 11:
                    _context38.next = 13;
                    return this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, '', state.attribute, state.category, state.metric);

                  case 13:
                    return _context38.abrupt("return", _context38.sent);

                  case 14:
                    if (!(level === 'block')) {
                      _context38.next = 18;
                      break;
                    }

                    _context38.next = 17;
                    return this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, state.block, state.attribute, state.category, state.metric);

                  case 17:
                    return _context38.abrupt("return", _context38.sent);

                  case 18:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "loadNeighborhoodsSummary",
        value: function loadNeighborhoodsSummary(borough, polygon, attribute, category, metric) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee39() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/summaries.neighborhoods");
                    console.log(url); // post parameters

                    category = category === 'NONE' ? attribute === 'POPS' ? 'Y' : '' : category;
                    params = {
                      borough: borough,
                      polygon: polygon,
                      attribute: attribute,
                      category: category,
                      metric: metric
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context39.next = 8;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 8:
                    response = _context39.sent;
                    _context39.next = 11;
                    return response.json();

                  case 11:
                    return _context39.abrupt("return", _context39.sent);

                  case 12:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39);
          }));
        }
      }, {
        key: "loadBlocksSummary",
        value: function loadBlocksSummary(borough, polygon, neighborhood, attribute, category, metric) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee40() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/summaries.blocks");
                    console.log(url); // post parameters

                    category = category === 'NONE' ? attribute === 'POPS' ? 'Y' : '' : category;
                    params = {
                      borough: borough,
                      neighborhood: neighborhood,
                      polygon: polygon,
                      attribute: attribute,
                      category: category,
                      metric: metric
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context40.next = 8;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 8:
                    response = _context40.sent;
                    _context40.next = 11;
                    return response.json();

                  case 11:
                    return _context40.abrupt("return", _context40.sent);

                  case 12:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40);
          }));
        }
      }, {
        key: "loadLotsSummary",
        value: function loadLotsSummary(borough, polygon, neighborhood, block, attribute, category, metric) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee41() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/summaries.lots");
                    console.log(url); // post parameters

                    category = category === 'NONE' ? attribute === 'POPS' ? 'Y' : '' : category;
                    params = {
                      borough: borough,
                      neighborhood: neighborhood,
                      polygon: polygon,
                      block: block,
                      attribute: attribute,
                      category: category,
                      metric: metric
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context41.next = 8;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 8:
                    response = _context41.sent;
                    _context41.next = 11;
                    return response.json();

                  case 11:
                    return _context41.abrupt("return", _context41.sent);

                  case 12:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41);
          }));
        }
      }, {
        key: "loadFilter",
        value: function loadFilter(borough, polygon, attribute, category) {
          var bins = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee42() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/histogram");
                    console.log(url); // post parameters

                    category = category === 'NONE' ? attribute === 'POPS' ? 'Y' : '' : category;
                    params = {
                      borough: borough,
                      polygon: polygon,
                      attribute: attribute,
                      category: category,
                      bins: bins
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context42.next = 8;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 8:
                    response = _context42.sent;
                    _context42.next = 11;
                    return response.json();

                  case 11:
                    return _context42.abrupt("return", _context42.sent);

                  case 12:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(borough, polygon, limits, filterExp) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee43() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend, "/plutovis/filter");
                    console.log(url);
                    limits.forEach(function (el) {
                      if (el.attribute === 'LANDUSE' || el.attribute === 'SPDIST1') {
                        delete el.category;
                      }
                    }); // post parameters

                    params = {
                      borough: borough,
                      polygon: polygon,
                      limits: limits,
                      filterExp: filterExp
                    };
                    console.log("post data: ".concat(JSON.stringify(params))); // post header

                    headers = {
                      'Content-Type': 'application/json'
                    }; // Return a new promise.

                    _context43.next = 8;
                    return fetch(url, {
                      method: 'POST',
                      headers: headers,
                      body: JSON.stringify(params)
                    });

                  case 8:
                    response = _context43.sent;
                    _context43.next = 11;
                    return response.text();

                  case 11:
                    return _context43.abrupt("return", _context43.sent);

                  case 12:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)();
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var stats_percentile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! stats-percentile */
    "./node_modules/stats-percentile/index.js");
    /* harmony import */


    var stats_percentile__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(stats_percentile__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/services/state.service.ts");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(api, events, state) {
        _classCallCheck(this, DataService);

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
          yearStep: []
        };
        this.subscribeRootEvents();
        this.subscribeMapEvents();
        this.subscribeStateEvents();
        this.subscribeFilterEvents();
      } // --- Root app events subscriptions


      _createClass(DataService, [{
        key: "subscribeRootEvents",
        value: function subscribeRootEvents() {
          this.events.root.initialized.subscribe(this.initializeMeta.bind(this));
        }
      }, {
        key: "initializeMeta",
        value: function initializeMeta() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee44() {
            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    this.meta.modes = this.api.loadModes();
                    _context44.next = 3;
                    return this.api.loadYears();

                  case 3:
                    this.meta.years = _context44.sent;
                    _context44.next = 6;
                    return this.api.loadAttributes();

                  case 6:
                    this.meta.attributes = _context44.sent;
                    _context44.next = 9;
                    return this.api.loadBoroughs();

                  case 9:
                    this.meta.boroughs = _context44.sent;
                    _context44.next = 12;
                    return this.api.loadPolygons();

                  case 12:
                    this.meta.polygons = _context44.sent;
                    _context44.next = 15;
                    return this.api.loadNavigation();

                  case 15:
                    this.meta.navigation = _context44.sent;
                    this.meta.levels = this.api.loadLevels();
                    this.meta.sortBy = this.api.loadSortBy();
                    this.meta.yearStep = this.api.loadYearStep();

                  case 19:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        } // --- Map events subscriptions

      }, {
        key: "subscribeMapEvents",
        value: function subscribeMapEvents() {
          this.events.map.initialized.subscribe(this.loadSummaryThenGeometryAndFunction.bind(this));
        } // --- State events subscriptions

      }, {
        key: "subscribeStateEvents",
        value: function subscribeStateEvents() {
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
      }, {
        key: "loadSummaryThenGeometryAndFunction",
        value: function loadSummaryThenGeometryAndFunction(isYear) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee45() {
            var length;
            return regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return this.applyFilter();

                  case 2:
                    _context45.next = 4;
                    return this.loadSummary();

                  case 4:
                    _context45.next = 6;
                    return this.loadGeometry();

                  case 6:
                    _context45.next = 8;
                    return this.loadPopsGeometry();

                  case 8:
                    // elements per year
                    length = this.summary[this.state.activeGeometryParameters.year].length; // emits the event

                    if (!isYear) {
                      this.events.data.initializePagination.emit(length);
                      this.events.data.updateVisMatrix.emit();
                    }

                    this.events.data.updateMapGeometryAndFunction.emit();

                  case 11:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }, {
        key: "loadSummaryThenFunction",
        value: function loadSummaryThenFunction() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee46() {
            var length;
            return regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    _context46.next = 2;
                    return this.applyFilter();

                  case 2:
                    _context46.next = 4;
                    return this.loadSummary();

                  case 4:
                    // elements per year
                    length = this.summary[this.state.activeGeometryParameters.year].length; // emits the event

                    this.events.data.initializePagination.emit(length);
                    this.events.data.updateVisMatrix.emit();
                    this.events.data.updateMapFunction.emit();

                  case 8:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "loadFunction",
        value: function loadFunction() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee47() {
            return regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    this.events.data.updateMapFunction.emit();

                  case 1:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "loadPopsGeometry",
        value: function loadPopsGeometry() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee48() {
            var borough;
            return regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    // get borough
                    borough = this.state.activeConfigParameters.borough; // gets the geometry

                    _context48.next = 3;
                    return this.api.loadPopsGeometry(borough);

                  case 3:
                    this.layers['pops'] = _context48.sent;

                  case 4:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "loadGeometry",
        value: function loadGeometry() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee49() {
            var borough, parents, parameters, state, level;
            return regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    // get borough
                    borough = this.state.activeConfigParameters; // get parents list

                    parents = this.state.activeGeometryParameters; // get current parameters

                    parameters = this.state.activeSummaryParameters; // current state

                    state = {};
                    Object.assign(state, borough);
                    Object.assign(state, parents);
                    Object.assign(state, parameters); // current level

                    level = this.state.activeLevel; // gets the geometry

                    _context49.next = 10;
                    return this.api.loadGeometry(level, state);

                  case 10:
                    this.geometry = _context49.sent;
                    this.geometry.features.sort(function (a, b) {
                      return a.properties.name < b.properties.name ? 1 : -1;
                    });

                  case 12:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "loadSummary",
        value: function loadSummary() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee50() {
            var borough, parents, parameters, state, level, step;
            return regeneratorRuntime.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    // get borough
                    borough = this.state.activeConfigParameters; // get parents list

                    parents = this.state.activeGeometryParameters; // get current parameters

                    parameters = this.state.activeSummaryParameters; // current state

                    state = {};
                    Object.assign(state, borough);
                    Object.assign(state, parents);
                    Object.assign(state, parameters); // current level

                    level = this.state.activeLevel; // gets the summary

                    _context50.next = 10;
                    return this.api.loadSummary(level, state);

                  case 10:
                    this.summary = _context50.sent;
                    // year steps
                    step = +this.state.activeSummaryParameters.yearStep;
                    this.filterYears(step); // adds the difference field

                    this.computeDifferences();
                    console.log(this.summary);

                  case 15:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, this);
          }));
        }
      }, {
        key: "filterYears",
        value: function filterYears(step) {
          if (!step) {
            return;
          }

          var years = Object.keys(this.summary).filter(function (d) {
            return d !== 'min' && d !== 'max';
          }).filter(function (d) {
            return d.split('.')[1] === '1';
          });
          years.push('2008.1');
          years.sort();
          var subYears = [];

          for (var yId = years.length - 1; yId >= 0; yId -= step) {
            subYears.push(years[yId]);
          }

          subYears.reverse();
          var stepSummary = {};

          for (var _yId = 0; _yId < subYears.length; _yId++) {
            if (subYears[_yId] === '2008.1') {
              stepSummary[subYears[_yId]] = this.summary['2007.1'];
            } else {
              stepSummary[subYears[_yId]] = this.summary[subYears[_yId]];
            }
          }

          stepSummary['min'] = this.summary['min'];
          stepSummary['max'] = this.summary['max'];
          this.summary = stepSummary;
        }
      }, {
        key: "computeDifferences",
        value: function computeDifferences() {
          this.summary.changeMin = Infinity;
          this.summary.changeMax = -Infinity;
          var vals = [];
          var cngs = []; // Is Alive : the lot existis in the selected year
          // Is Valid : the selected attribute is a valid value in the lot
          // Is Active: the lot fits the filter condition 

          var years = Object.keys(this.summary).filter(function (key) {
            return !isNaN(+key);
          });

          for (var yId = 0; yId < years.length; yId++) {
            var year = years[yId];

            for (var nId = 0; nId < this.summary[year].length; nId++) {
              if (yId === 0) {
                this.summary[year][nId].change = 0;
                this.summary[year][nId].changeValid = false;
              } else {
                var prev = years[yId - 1]; // all data is ok

                if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[year][nId].isValid && this.summary[prev][nId].isValid) {
                  this.summary[year][nId].change = this.summary[year][nId].value - this.summary[prev][nId].value;
                  this.summary[year][nId].changeValid = true;
                } // current not alive, previous alive and valid
                else if (!this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[prev][nId].isValid) {
                    this.summary[year][nId].change = -this.summary[prev][nId].value;
                    this.summary[year][nId].changeValid = true;
                  } // current alive and valid, previous not alive
                  else if (this.summary[year][nId].isAlive && !this.summary[prev][nId].isAlive && this.summary[year][nId].isValid) {
                      this.summary[year][nId].change = this.summary[year][nId].value;
                      this.summary[year][nId].changeValid = true;
                    } // current alive and not valid, previous alive and valid
                    else if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && !this.summary[year][nId].isValid && this.summary[prev][nId].isValid) {
                        this.summary[year][nId].change = -this.summary[prev][nId].value;
                        this.summary[year][nId].changeValid = true;
                      } // current alive and valid, previous alive and not valid
                      else if (this.summary[year][nId].isAlive && this.summary[prev][nId].isAlive && this.summary[year][nId].isValid && !this.summary[prev][nId].isValid) {
                          this.summary[year][nId].change = this.summary[year][nId].value;
                          this.summary[year][nId].changeValid = true;
                        } else {
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
          } else {
            this.summary.min = d3__WEBPACK_IMPORTED_MODULE_2__["min"](vals);
            this.summary.max = d3__WEBPACK_IMPORTED_MODULE_2__["max"](vals);
            this.summary.changeMin = d3__WEBPACK_IMPORTED_MODULE_2__["min"](cngs);
            this.summary.changeMax = d3__WEBPACK_IMPORTED_MODULE_2__["max"](cngs);
          }
        }
      }, {
        key: "subscribeFilterEvents",
        value: function subscribeFilterEvents() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee51() {
            return regeneratorRuntime.wrap(function _callee51$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    this.events.filters.updateSummary.subscribe(this.loadSummaryThenFunction.bind(this));

                  case 1:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee51, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee52() {
            var _this32 = this;

            var borough, polygon, filterExp, filters;
            return regeneratorRuntime.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    borough = this.state.activeConfigParameters.borough;
                    polygon = this.state.activeConfigParameters.polygon;
                    filterExp = this.state.activeConfigParameters.filterExp;
                    filters = Object.keys(this.state.activeFilterParameters).map(function (key) {
                      var obj = _this32.state.activeFilterParameters[key];

                      if (!obj.range || obj.range.length === 0) {
                        return null;
                      }

                      var min = +obj.range[0].split('-')[0];
                      min = isNaN(min) ? obj.range[0] : min;
                      var max = +obj.range[obj.range.length - 1].split('-')[1];
                      max = isNaN(max) ? obj.range[obj.range.length - 1] : max;
                      return {
                        key: key,
                        attribute: obj.attribute,
                        category: obj.category,
                        min: min,
                        max: max
                      };
                    });
                    _context52.next = 6;
                    return this.api.applyFilter(borough, polygon, filters.filter(function (obj) {
                      return obj !== null;
                    }), filterExp);

                  case 6:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "loadFilter",
        value: function loadFilter(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee53() {
            var isAlive, borough, polygon, params, filter;
            return regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    isAlive = Object.keys(this.state.activeFilterParameters).includes("".concat(key));

                    if (isAlive) {
                      _context53.next = 5;
                      break;
                    }

                    delete this.filters[key];
                    _context53.next = 12;
                    break;

                  case 5:
                    borough = this.state.activeConfigParameters.borough;
                    polygon = this.state.activeConfigParameters.borough;
                    params = this.state.activeFilterParameters[key];
                    _context53.next = 10;
                    return this.api.loadFilter(borough, polygon, params.attribute, params.category);

                  case 10:
                    filter = _context53.sent;
                    this.filters[key] = filter;

                  case 12:
                    this.events.data.updateFilters.emit();

                  case 13:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "loadAllFilters",
        value: function loadAllFilters() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee54() {
            var keys, _i2, _keys, key, borough, polygon, params, filter;

            return regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    keys = Object.keys(this.state.activeFilterParameters);
                    _i2 = 0, _keys = keys;

                  case 2:
                    if (!(_i2 < _keys.length)) {
                      _context54.next = 14;
                      break;
                    }

                    key = _keys[_i2];
                    borough = this.state.activeConfigParameters.borough;
                    polygon = this.state.activeConfigParameters.borough;
                    params = this.state.activeFilterParameters[key];
                    _context54.next = 9;
                    return this.api.loadFilter(borough, polygon, params.attribute, params.category);

                  case 9:
                    filter = _context54.sent;
                    this.filters[key] = filter;

                  case 11:
                    _i2++;
                    _context54.next = 2;
                    break;

                  case 14:
                    this.events.data.updateFilters.emit();

                  case 15:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/events.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/events.service.ts ***!
    \********************************************/

  /*! exports provided: EventsService */

  /***/
  function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsService", function () {
      return EventsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventsService = function EventsService() {
      _classCallCheck(this, EventsService);

      // Events fired by the root-app
      this.root = {
        initialized: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
      };
      this.config = {
        boroughSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        polygonSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        navigationSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        modeSelectChanged: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
      }; // Events fired by mapview

      this.menu = {
        buttonClicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
      }; // Events fired by mapview

      this.map = {
        initialized: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        polyPicked: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
      }; // Events fired by the vis window

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
      }; // Events fired by the data service

      this.data = {
        updateFilters: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        updateVisMatrix: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        updateMapFunction: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        updateMapGeometryAndFunction: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](),
        initializePagination: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()
      }; // events fired by the state service

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
    };

    EventsService.ɵfac = function EventsService_Factory(t) {
      return new (t || EventsService)();
    };

    EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventsService,
      factory: EventsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/state.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/state.service.ts ***!
    \*******************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./events.service */
    "./src/app/services/events.service.ts");

    var StateService =
    /*#__PURE__*/
    function () {
      function StateService(events) {
        _classCallCheck(this, StateService);

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
          sortBy: 'name'
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

      _createClass(StateService, [{
        key: "subscribeMapEvents",
        // ---- Map events subscriptions
        value: function subscribeMapEvents() {
          this.events.map.polyPicked.subscribe(this.updateSelectedPolygon.bind(this));
        }
      }, {
        key: "updateSelectedPolygon",
        value: function updateSelectedPolygon(state) {
          this.selectedPolygon = state.name;
          this.events.state.selectedPolygonChanged.emit(state.origin);
        } // ---- Config events subscription

      }, {
        key: "subscribeConfigEvents",
        value: function subscribeConfigEvents() {
          this.events.config.boroughSelectChanged.subscribe(this.updateActiveConfigBorough.bind(this));
          this.events.config.polygonSelectChanged.subscribe(this.updateActiveConfigPolygon.bind(this));
          this.events.config.navigationSelectChanged.subscribe(this.updateActiveConfigNavigation.bind(this));
          this.events.config.modeSelectChanged.subscribe(this.updateActiveConfigMode.bind(this));
        } // ---- Vis events subscriptions

      }, {
        key: "subscribeVisEvents",
        value: function subscribeVisEvents() {
          // changes on these parameters must trigger an update on the layer geometry / function and on the summary matrix
          this.events.vis.polygonLabelClicked.subscribe(this.updateActiveGeometryParameters.bind(this));
          this.events.vis.polygonLabelHovered.subscribe(this.updateSelectedPolygon.bind(this));
          this.events.vis.yearLabelClicked.subscribe(this.updateActiveGeometryParameters.bind(this));
          this.events.vis.navButtonClicked.subscribe(this.updateActiveGeometryParameters.bind(this)); // chages on these parameters must trigger an update on the layer function and on the summary matrix

          this.events.vis.yearStepSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
          this.events.vis.attributeSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
          this.events.vis.categorySelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
          this.events.vis.metricSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this));
          this.events.vis.modeSelectChanged.subscribe(this.updateActiveSummaryParameters.bind(this)); // changes that don't require data reload

          this.events.vis.sortBySelectChanged.subscribe(this.updateActiveSortParameters.bind(this)); // changes on these parameters must trigger an summary matrix update

          this.events.vis.navPageChanged.subscribe(this.updateActivePageParameters.bind(this));
          this.events.vis.sortIconClicked.subscribe(this.updateActiveSortParameters.bind(this));
          this.events.vis.lineIconClicked.subscribe(this.updateActiveLineChartCurves.bind(this));
        }
      }, {
        key: "updateActiveConfigMode",
        value: function updateActiveConfigMode(state) {
          var previous = this.activeConfigParameters;
          this.activeConfigParameters = Object.assign(previous, state); // emits the changes

          this.events.state.configModeChanged.emit();
        }
      }, {
        key: "updateActiveConfigBorough",
        value: function updateActiveConfigBorough(state) {
          var previous = this.activeConfigParameters;
          this.activeConfigParameters = Object.assign(previous, state); // emits the changes

          this.events.state.configBoroughChanged.emit();
        }
      }, {
        key: "updateActiveConfigPolygon",
        value: function updateActiveConfigPolygon(state) {
          var previous = this.activeConfigParameters;
          this.activeConfigParameters = Object.assign(previous, state); // emits the changes

          this.events.state.configPolygonChanged.emit();
        }
      }, {
        key: "updateActiveConfigNavigation",
        value: function updateActiveConfigNavigation(state) {
          var previous = this.activeConfigParameters;
          this.activeConfigParameters = Object.assign(previous, state); // emits the changes

          this.events.state.configNavigationChanged.emit();
        }
      }, {
        key: "updateActiveGeometryParameters",
        value: function updateActiveGeometryParameters(state) {
          var previous = this.activeGeometryParameters;
          this.activeGeometryParameters = Object.assign(previous, state); // emits the changes

          this.events.state.geometryParametersChanged.emit(Object.keys(state).includes('year'));
        }
      }, {
        key: "updateActiveSummaryParameters",
        value: function updateActiveSummaryParameters(state) {
          var previous = this.activeSummaryParameters;
          this.activeSummaryParameters = Object.assign(previous, state); // emits the changes

          this.events.state.summaryParametersChanged.emit();
        }
      }, {
        key: "updateActivePageParameters",
        value: function updateActivePageParameters(state) {
          var previous = this.activePageParameters;
          this.activePageParameters = Object.assign(previous, state); // emits the changes

          this.events.state.pageParametersChanged.emit();
        }
      }, {
        key: "updateActiveSortParameters",
        value: function updateActiveSortParameters(state) {
          var previous = this.activeSortParameters;
          this.activeSortParameters = Object.assign(previous, state); // emits the changes

          this.events.state.sortParametersChanged.emit();
        }
      }, {
        key: "updateActiveLineChartCurves",
        value: function updateActiveLineChartCurves(state) {
          this.activeLineChartCurves = state; // emits the changes

          this.events.state.lineCurvesChanged.emit();
        }
      }, {
        key: "subscribeFilterEvents",
        value: function subscribeFilterEvents() {
          this.events.filters.updated.subscribe(this.updateFilterParameters.bind(this));
          this.events.filters.brushed.subscribe(this.updateFilterBrush.bind(this));
        }
      }, {
        key: "updateFilterParameters",
        value: function updateFilterParameters(state) {
          var key = state.key;

          if (state.params === null) {
            delete this.activeFilterParameters[key];
          } else {
            var previous = this.activeFilterParameters[key] || {};
            this.activeFilterParameters[key] = Object.assign(previous, state.params);
          }

          this.events.state.filterParametersChanged.emit(key);
        }
      }, {
        key: "updateFilterBrush",
        value: function updateFilterBrush(state) {
          var key = state.key;
          var previous = this.activeFilterParameters[key] || {};
          this.activeFilterParameters[key] = Object.assign(previous, state.params);
        }
      }, {
        key: "subscribeDataEvents",
        value: function subscribeDataEvents() {
          this.events.data.initializePagination.subscribe(this.initializePagination.bind(this));
        }
      }, {
        key: "initializePagination",
        value: function initializePagination(length) {
          var den = 1;

          while (length / den > this.activePageParameters.PAGINATION_SIZE) {
            den += 1;
          }

          this.activePageParameters.currentPage = 0;
          this.activePageParameters.totalPages = den;
          this.activePageParameters.pageSize = Math.ceil(length / den);
        }
      }, {
        key: "subscribeLayersEvents",
        value: function subscribeLayersEvents() {
          this.events.layers.activeLayerChanged.subscribe(this.changeActiveLayer.bind(this));
        }
      }, {
        key: "changeActiveLayer",
        value: function changeActiveLayer(state) {
          this.layersActive = state.layersActive;
          this.activeLayer = state.activeLayer;
          this.events.state.activeLayerChanged.emit();
        }
      }, {
        key: "activeLevel",
        get: function get() {
          if (this.activeConfigParameters.borough && this.activeGeometryParameters.neighborhood && (this.activeGeometryParameters.block || this.activeConfigParameters.navigation === 'skip blocks') && this.activeGeometryParameters.lot && this.activeGeometryParameters.year) {
            return 'lot';
          }

          if (this.activeConfigParameters.borough && this.activeGeometryParameters.neighborhood && this.activeGeometryParameters.block && this.activeConfigParameters.navigation === 'complete' && this.activeGeometryParameters.year) {
            return 'block';
          }

          if (this.activeConfigParameters.borough && this.activeGeometryParameters.neighborhood && this.activeGeometryParameters.year) {
            return 'neighborhood';
          }

          if (this.activeConfigParameters.borough) {
            return 'borough';
          }

          return 'invalid';
        }
      }, {
        key: "currentFilterId",
        get: function get() {
          return this.CURRENT_FILTER_ID++;
        }
      }]);

      return StateService;
    }();

    StateService.ɵfac = function StateService_Factory(t) {
      return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]));
    };

    StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StateService,
      factory: StateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/joaorulff/Workspace/plutovis/PlutoVis/front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map