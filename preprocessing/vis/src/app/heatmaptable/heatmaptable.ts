import * as d3 from 'd3';
import { HeatMapModel } from './heatmap.model';

export class HeatMapTable {

  private _tableDiv: HTMLElement;
  private _margin = {top: 10, right: 10, bottom: 100, left: 100};

  private _svgCanvas: any = null;
  private _svgGroup: any = null;

  private _width: number;
  private _height: number;

  private _xScale: any;
  private _yScale: any;

  private _xAxisElement: any;
  private _yAxisElement: any;

  // color scale
  private _myColor: any = null;

  private _xDataset: string[];
  private _yDataset: string[];
  private _connections: Array<HeatMapModel>;

  constructor (htmlElement: HTMLElement,
                xDataSet: string[],
                yDataset: string[],
                connections: Array<HeatMapModel>) {
    this._tableDiv = htmlElement;
    this._xDataset = xDataSet;
    this._yDataset = yDataset;
    this._connections = connections;
    // Might have properly format [elemX, elemY, (0|1)]

    this.initCanvas();

    this.initAxes();

    // render
    this.render();
  }

  initCanvas() {
    // create the canvas element
    this._svgCanvas = d3.select(this._tableDiv).append('svg');

    // creates the base chart group
    this._svgGroup = this._svgCanvas.append('g')
    .attr('class', 'svgGroup')
    .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

    // Initial size
    this._width = this._tableDiv.clientWidth - this._margin.left - this._margin.right;
    this._height = this._tableDiv.clientHeight - this._margin.top - this._margin.bottom;
  }

  initAxes () {
    // Build X scales and axis:
    this._xScale = d3.scaleBand()
    .range([ 0, this._width ])
    .domain(this._xDataset)
    .padding(0.01);

    this._xAxisElement = this._svgCanvas
        .append('g')
        .attr('transform', `translate(${this._margin.left}, ${this._margin.top + this._height} )`)
        .call( d3.axisBottom(this._xScale) );

    this._yScale = d3.scaleBand()
        .range([ this._height, 0 ])
        .domain(this._yDataset)
        .padding(0.01);

    this._yAxisElement = this._svgCanvas.append('g')
        .attr('transform', `translate(${this._margin.left}, ${this._margin.top} )`)
        .call(d3.axisLeft(this._yScale));

    // Build color scale
    this._myColor = d3.scaleLinear<string>()
                      .range(['white', '#69b3a2'])
                      .domain([0, 100]);
  }

  render() {
    if (!this._tableDiv ||
        !this._svgCanvas) {
      return;
    }

    this.resizeSvg ();

    this.updateAxes ();

    this.updateTable ();
  }

  resizeSvg() {

    if (!this._svgCanvas) {
      return;
    }

    // compute the canvas size
    const oldWidth = this._width;
    const oldHeight = this._height;

    if ( (  oldWidth + this._margin.left + this._margin.right) === this._tableDiv.clientWidth &&
          ( oldHeight + this._margin.top + this._margin.bottom) === this._tableDiv.clientHeight  ) {
      this._width = this._tableDiv.clientWidth - this._margin.left - this._margin.right;
      this._height = this._tableDiv.clientHeight - this._margin.top - this._margin.bottom;
    }

    // creates the svg canvas
    this._svgCanvas
      .attr('width', this._width + this._margin.left + this._margin.right)
      .attr('height', this._height + this._margin.top + this._margin.bottom);
  }

  updateAxes () {
    this._xScale.domain(this._xDataset);
    this._yScale.domain(this._yDataset);

    this._xAxisElement.call( d3.axisBottom(this._xScale) )
                      .selectAll('text')
                      .style('text-anchor', 'start')
                      .attr('dx', '.8em')
                      .attr('dy', '-.15em')
                      .attr('transform', 'rotate(90)');
    this._yAxisElement.call( d3.axisLeft(this._yScale) );

    // TODO: Modificar os valores dos eixos
    const canvasWidth = this._width;
    const canvasHeight = this._height;

    // text label for the x axis
    const xAxis = d3.axisTop(this._xScale)
      .tickSizeInner(10)
      .tickSizeOuter(0);

    this._svgGroup.select('#timeline-xAxis').call(xAxis);
  }

  updateTable () {

    const heatmap = this._svgGroup
                        .selectAll('rect')
                        .data(this._connections, function(d) { return d.group + ':' + d.variable; } );

    heatmap.exit().remove();

    heatmap.enter()
            .append('rect')
            .merge(heatmap)
            .attr('x', (d: any) => { this._xScale(d.group); } )
            .attr('y', (d: any) => { this._yScale(d.variable); } )
            .attr('width', this._xScale.bandwidth() )
            .attr('height', this._yScale.bandwidth() )
            .style('fill', (d: any) => {this._myColor(d.value); } );

  }

  updateDataset(xDataset: string[], yDataset: string[], connections: Array<HeatMapModel>) {
    this._xDataset = xDataset.sort();
    this._yDataset = yDataset.sort();
    this._connections = connections;
    this._myColor.domain([0, 1]);
    this.render();
  }

}
