import * as d3 from 'd3';

export class YearSelector {
  // Chart div
  protected _chartDiv: HTMLElement = null;
  // Svg canvas
  protected _svgCanvas: any = null;
  // Svg group
  protected _svgGroup: any = null;

  // dataset to be visualized
  protected _years: string[];
  // [
  //   '2002', '2003', '2004', '2005', '2006', '2007',
  //   '2009', '2009.2', '2010', '2010.2', '2011', '2011.2',
  //   '2012', '2012.2', '2013', '2013.2', '2014', '2014.2',
  //   '2015', '2016', '2016.2', '2017', '2017.2'
  // ];

  // margin object
  protected _margin = { top: 20, right: 20, bottom: 20, left: 20 };
  // svg size
  protected _width: number;
  protected _height: number;

  // x axis scale
  protected _xAxisLabel = 'Base Year';
  protected _xScale: any = null;

  // selected year
  protected _selection = '';
  protected _callback = null;

  /**
   * Parallel coordinates constructor
   * @param {HTMLElement} chartDiv The html element to hold the chart
   */
  constructor(chartDiv: HTMLElement, _years: string[], callback: any) {
    // set years
    this._years = _years;

    this._selection = this._years[0];

    callback(this._selection);

    // stores the chart div
    this._chartDiv = chartDiv;

    // creates the new canvas element
    this._svgCanvas = d3.select(chartDiv).append('svg');

    // creates the base chart group
    this._svgGroup = this._svgCanvas.append('g')
      .attr('class', 'svgGroup')
      .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

    // Initial size
    this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
    this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;

    // X scale config
    this._xScale = d3.scalePoint()
      .domain(this._years)
      .rangeRound([0, this._width]);

    this._svgGroup.append('g')
      .attr('id', 'timeline-xAxis')
      .attr('transform', 'translate(0,' + (this._height) + ')');

    // X scale label
    this._svgGroup.append('text').attr('id', 'timeline-labelXAxis');

    // selection callback
    this._callback = callback;

    // render
    this.render();
  }

  /**
   * Sets the x axis label
   * @param xLabel is the string to be displayed at the x axis.
   */
  setXAxisLabel(xLabel: string) {
    this._xAxisLabel = xLabel;
  }

  /**
   * Renders the charts
   * @param {any} Dataset to be rendered
   */
  render() {
    if (
      !this._chartDiv ||
      !this._svgCanvas
    ) {
      return;
    }

    // resizes the canvas
    this.resizeSvg();

    // update axes
    this.updateAxes();

    // update bars
    this.updateBars();
  }

  /**
   * Resizes the svg canvas
   */
  resizeSvg() {
    if (!this._svgCanvas) {
      return;
    }
    // compute the canvas size
    const oldWidth = this._width;
    const oldHeight = this._height;
    if ( (  oldWidth + this._margin.left + this._margin.right) === this._chartDiv.clientWidth &&
          ( oldHeight + this._margin.top + this._margin.bottom) === this._chartDiv.clientHeight  ) {
      this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
      this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
    }
    // creates the svg canvas
    this._svgCanvas
      .attr('width', this._width + this._margin.left + this._margin.right)
      .attr('height', this._height + this._margin.top + this._margin.bottom);
  }

  /**
   * Build a scale for each axis
   */
  updateAxes() {
    const canvasWidth = this._width;
    const canvasHeight = this._height;

    // text label for the x axis
    const xAxis = d3.axisTop(this._xScale)
      .tickSizeInner(10)
      .tickSizeOuter(0);

    this._svgGroup.select('#timeline-xAxis').call(xAxis);
    // this._svgGroup.select('#' + 'timeline-labelXAxis')
    //   .attr('x', (canvasWidth / 2.0))
    //   .attr('y', (canvasHeight + 25))
    //   .style('text-anchor', 'middle')
    //   .text(this._xAxisLabel);

    this._svgGroup.selectAll('text')
      .style('text-anchor', 'start')
      .attr('dy', '-.4em')
      .attr('transform', 'rotate(-30)');
  }

  /**
   * Build a scale for each axis
   */
  updateBars() {
    // add the bars
    const years = this._svgGroup
      .selectAll('.timeline-year')
      .data(this._years);

    years.exit().remove();

    years.enter()
      .append('circle')
      .merge(years)
      .attr('class', (d) => {
        return d === this._selection ? 'timeline-year timeline-year-selected' : 'timeline-year';
      })
      .attr('r', (d) => {
        return d === this._selection ? 10 : 6;
      })
      .attr('cy',  this._height)
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

  updateSelection(selection: string) {
    this._selection = selection;
    this._callback(selection);

    this.render();
  }
}