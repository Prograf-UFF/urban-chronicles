import * as d3 from 'd3';

export class Line {
  // chart data
  protected _data: any = null;

  // Chart div
  protected _chartDiv: HTMLElement = null;
  // Svg element
  protected _svgCanvas: any = null;
  // Group element
  protected _svgGroup: any = null;

  // margin object
  protected _margin = { top: 40, right: 35, bottom: 60, left: 125 };

  // svg width
  protected _width: number;
  // charts height
  protected _height: number;

  // scales and axis
  protected _xScale: any = null;
  protected _yScale: any = null;
  protected _cScale: any = null;

  protected _yLabel: string = '';

  // ----
  protected _xAxis: any = null;
  protected _yAxis: any = null;

  // callbacks
  protected _callbacks = null;

  // d3's line generator
  protected _line = d3.line()
    .x((d: any) => this._xScale(d.year))
    .y((d: any) => this._yScale(d.value))
    .curve(d3.curveLinear)
    .defined(function (d: any) { return d.valid; })

  constructor(chartDiv: HTMLElement, callbacks: any, defaults: any) {
    this._chartDiv = chartDiv;
    this._callbacks = callbacks;
    this._yLabel = defaults.yLabel;

    this.initSvgAndGroups();
    this.initScalesAndAxes();
    this.initWindowEvents();
  }

  setData(data: any, years: any) {
    this._data = data;
    this._data.years = years;
  }

  setYLabel(label: string) {
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
    this._svgCanvas = d3.select(this._chartDiv)
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
      .attr("transform", `translate(${
        this._width / 2
        }, ${
        this._height + this._margin.top + 15
        })`)
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
    this._xScale = d3.scalePoint().range([0, this._width]).padding(0.2);
    this._xAxis = d3.axisBottom(this._xScale);

    this._yScale = d3.scaleLinear().range([this._height, 0]);
    this._yAxis = d3.axisLeft(this._yScale);

    this._cScale = d3.scaleOrdinal(d3.schemeCategory10);
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
    this._svgGroup.select('.axis--y').call(this._yAxis.tickFormat(d3.format(".2s")));

    this._svgGroup.select('.yaxis-label').text(`${this._yLabel}`)
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
      .attr('width', 3 * this._width / 4 / this._data.lines.length)


    const circles = elements
      .selectAll('circle')
      .data(d => [d.name])
      .join('circle');

    circles
      .attr('r', 6)
      .attr('fill', d => this._cScale(d))

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
        const mouse = [d3.event.pageX+10, d3.event.pageY+10];
        this._callbacks.lHover({line: d, mouse});
      })
      .on('mouseout', this._callbacks.svgOut);
  }
}