import * as d3 from 'd3';
import { SelectionModel } from '@angular/cdk/collections';

export class ParallelCoords {
  // Chart div
  protected _chartDiv: HTMLElement = null;
  // Svg canvas
  protected _svgCanvas: any = null;
  // Svg group
  protected _svgGroup: any = null;
  // Axis groups
  protected _axisGroups: any = null;

  // dataset to be visualized
  protected _data = [{
    name: 'Lower Manhattan',
    crime: 0.1,
    noise: 0.5,
    taxi: 0.1
  },
  {
    name: 'Soho',
    crime: 0.8,
    noise: 0.2,
    taxi: 0.7
  },
  {
    name: 'West Village',
    crime: 0.5,
    noise: 0.4,
    taxi: 0.1
  },
  ];
  // brushed data
  protected _brushed = [];

  // margin object
  protected _margin = { top: 30, right: 40, bottom: 10, left: 40 };
  // svg size
  protected _width: number;
  protected _height: number;

  // x axis scale
  protected _x: any = null;
  // y axis scale
  protected _y: any = null;

  // lines
  protected _lines: any = null;

  /**
   * Parallel coordinates constructor
   * @param {HTMLElement} chartDiv The html element to hold the chart
   */
  constructor(chartDiv: HTMLElement) {
    // stores the chart div
    this._chartDiv = chartDiv;
    // creates the new canvas element
    this._svgCanvas = d3.select(chartDiv).append('svg');
    // creates the base chart group
    this._svgGroup = this._svgCanvas.append('g')
      .attr('class', 'svgGroup')
      .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

    // render
    this.render();
  }

  /**
   * Renders the charts
   * @param {any} Dataset to be rendered
   */
  render(data: any = null) {
    if (
      !this._chartDiv ||
      !this._svgCanvas
    ) {
      return;
    }

    // resizes the canvas
    this.resizeSvg();

    // build the scales
    this.buildScales();

    // build the lines
    this.buildLines();

    // build the axes
    this.buildAxes();

    // build brush
    this.buildBrush();
  }

  /**
   * Updates the chart data
   */
  updateData(data: any) {
    this._data = data;
    this.render();
  }

  /**
   * Resizes the svg canvas
   */
  resizeSvg() {
    if (!this._svgCanvas) {
      return;
    }
    // compute the canvas size
    this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
    this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;

    // creates the svg canvas
    d3.select('svg')
      .attr('width', this._width + this._margin.left + this._margin.right)
      .attr('height', this._height + this._margin.top + this._margin.bottom);
  }

  /**
   * Build a scale for each axis
   */
  buildScales() {
    // x scale range
    this._x = d3.scalePoint().range([0, this._width]);

    // x scale domain
    const domain = Object.keys(this._data[0]).filter(e => e !== 'name');
    this._x.domain(domain);

    // y scales
    this._y = {};
    domain.forEach(e => {
      this._y[e] = d3.scaleLinear()
        .domain(d3.extent(this._data, d => +d[e]))
        .range([this._height, 0]);
    });
  }

  /**
   * Build the lines
   */
  buildLines() {
    // get the x scale domain
    const domain = this._x.domain();

    const path = d => {
      const points: any = domain.map(p => [this._x(p), this._y[p](d[p])]);
      return d3.line()(points);
    };

    // add lines
    this._lines = this._svgGroup.append('g')
      .attr('class', 'linesGroup')
      .selectAll('path')
      .data(this._data)
      .enter().append('path')
      .attr('class', 'selected')
      .attr('d', path);
  }

  /**
   * Build the axes
   */
  buildAxes() {
    // get the x scale domain
    const domain = this._x.domain();

    this._axisGroups = this._svgGroup.selectAll('.dimension')
      .data(domain)
      .enter().append('g')
      .attr('class', 'dimension')
      .attr('transform', d => 'translate(' + this._x(d) + ')');

    // axis object
    const axis = d3.axisLeft(this._x);

    // Add an axis and title.
    const self = this;
    this._axisGroups.append('g')
      .attr('class', 'axis')
      .each(function (d) { d3.select(this).call(axis.scale(self._y[d])); });

    this._axisGroups.append('text')
      .style('text-anchor', 'middle')
      .attr('y', -9)
      .text(function (d) { return d; });
  }

  /**
   * Build the brush event
   */
  buildBrush() {
    // Add and store a brush for each axis.
    const self = this;
    this._axisGroups.append('g')
      .attr('class', 'brush')
      .each(function (d) {
        d3.select(this).call(
          self._y[d].brush = d3.brushY()
            .extent([[-10, 0], [10, self._height]])
            .on('brush end', self.updateBrush.bind(self)));
      })
      .selectAll('.selection')
      .attr('x', -8)
      .attr('width', 16);
  }

  /**
   * brush function
   */
  updateBrush() {
    // self context
    const self = this;
    // clear the brushed
    self._brushed = [];

    // active brushes
    const actives = [];
    this._svgGroup.selectAll('.brush')
      .filter(function(d) {
        self._y[d].brushSelectionValue = d3.brushSelection(this);
        return self._y[d].brushSelectionValue !== null;
      })
      .each(function(d) {
        const brushSelection: any = d3.brushSelection(this);
        actives.push({
          dimension: d,
          extent: brushSelection.map(self._y[d].invert).sort()
        });
      });

    // change the style
    this._lines.attr('class', function (d) {
      // test the constraints
      const check = actives.every(function (p, i) {
        return actives[i].extent[0] <= d[p.dimension] && d[p.dimension] <= actives[i].extent[1];
      });
      // if inside the constraints, store
      if (check) { self._brushed.push(d); }
      // changes the class
      return check ? 'selected' : 'unselected';
    });
  }
}
