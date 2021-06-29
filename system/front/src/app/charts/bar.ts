import * as d3 from 'd3';
import { min } from 'd3';

export class Bar {
  // chart data
  protected _data: any = null;

  // Chart div
  protected _chartDiv: HTMLElement = null;
  // Svg element
  protected _svgCanvas: any = null;
  // Group element
  protected _svgGroup: any = null;

  // margin object
  protected _margin = { top: 10, right: 15, bottom: 75, left: 70 };

  // svg width
  protected _width: number;
  // charts height
  protected _height: number;

  // scales and axis
  protected _xScale: any = null;
  protected _yScale: any = null;
  // ----
  protected _xAxis: any = null;
  protected _yAxis: any = null;

  // brush object
  protected _brush = d3.brushX();
  protected _brushedBins = [];

  // callbacks
  protected _callbacks = null;
  protected _key = null;

  // label
  protected labelFormat = (label) => {
    let parts = label.split('-');

    if (isNaN(+parts[0])) {
      return label.split(',').join('-');
    }

    parts = parts.map(el => d3.format('.2s')(el));
    return parts.join('-');
  }

  constructor(chartDiv: HTMLElement, callbacks: any, key: string) {
    this._chartDiv = chartDiv;
    this._callbacks = callbacks;
    this._key = key;

    this.initSvgAndGroups();
    this.initScalesAndAxes();
    this.initWindowEvents();
    this.initBrush();
  }

  setData(data: any, brush: any) {
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
    this._svgCanvas = d3.select(this._chartDiv)
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
      .attr('class', 'brush')

    this._svgGroup
      .append('g')
      .attr('class', 'axis axis--y');

    // text label for the x axis
    this._svgGroup
      .append("text")
      .attr('class', 'xaxis-label')
      .attr("transform", `translate(${
        this._width / 2
        }, ${
        this._height + this._margin.top + 45
        })`)
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
    this._xScale = d3.scaleBand().range([0, this._width]).padding(0.1);
    this._xAxis = d3.axisBottom(this._xScale).tickFormat(this.labelFormat);

    this._yScale = d3.scaleLinear().range([this._height, 0]);
    this._yAxis = d3.axisLeft(this._yScale).ticks(10, "~s");
  }

  initWindowEvents() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  updateScales() {
    const bins = this._data.map(obj => `${obj.bin}`);
    const extent = d3.extent(this._data.map(obj => obj.count));

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
          return '8px'
        }
        return '10px';
      })
      .attr('dx', '-.8em')
      .attr('dy', () => bins.length > 20 ? '-.8em' : '.15em')
      .attr('transform', () => {
        if (bins.length > 20) {
          return 'rotate(-90)'
        }
        return 'rotate(-25)'
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
    const selection = d3.event.selection;

    const rects = this._svgGroup
      .selectAll(".line-group")
      .selectAll(".bar")

    if (selection) {
      const range = this._xScale.domain().map(this._xScale);

      const i0 = d3.bisectRight(range, selection[0]);
      const i1 = d3.bisectRight(range, selection[1]);

      this._brushedBins = this._xScale.domain().slice(i0, i1);
    } else {
      this._brushedBins = [];
    }

    rects.attr("fill", d => this._brushedBins.includes(d.bin) ? "#f44336" : "#673ab7");

    const event = { value: this._brushedBins };
    this._callbacks.brush(this._key, event);
  }
}