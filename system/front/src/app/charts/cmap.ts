import * as d3 from 'd3';

export class Cmap {
  // chart data
  protected _data: any = {};

  // Chart div
  protected _chartDiv: HTMLElement = null;
  // Svg element
  protected _svgCanvas: any = null;
  // Group element
  protected _svgGroup: any = null;

  // margin object
  protected _margin = { top: 0, right: 20, bottom: 30, left: 16 };

  // svg width
  protected _width: number;
  // charts height
  protected _height: number;

  // scales and axis
  protected _xScale: any = null;
  protected _cScale: any = null;
  protected _xAxis: any = null;

  // number of colors
  protected N_COLORS = 40;

  // Is Alive : the lot existis in the selected year
  // Is Active: the lot fits the filter condition 
  // Is Valid : the selected attribute is a valid value in the lot
  protected ALIVE_COLOR = d3.color('#8f8f8f');
  protected ACTVE_COLOR = d3.color('#afafaf');
  protected VALID_COLOR = d3.color('#cfcfcf');

  protected ALIVE_LABEL = 'A';
  protected ACTVE_LABEL = 'F';
  protected VALID_LABEL = 'V';

  // format
  protected tickFormat = (val) => {
    if ( isNaN(val) ) {
        return val;
    }
    else {
        return d3.format('.2s')(val);
    }
  }


  constructor(chartDiv: HTMLElement) {
    this._chartDiv = chartDiv;

    this.initSvgAndGroups();
    this.initScalesAndAxes();
    this.initWindowEvents();
  }

  initWindowEvents() {
    window.addEventListener('resize', this.resize.bind(this));
  }


  setData(minMax: any) {

    let zero = 0;

    if (minMax[0] < 0 && minMax[1] > 0) {
      zero = 0
    } else if (minMax[0] >= 0 && minMax[1] > 0) {
      zero = minMax[0];
    } else if (minMax[0] < 0 && minMax[1] <= 0) {
      zero = minMax[1];
    }
    
    if (minMax[0] !== minMax[1]) {
      let frac = Math.ceil( this.N_COLORS * (zero - minMax[0]) / (minMax[1] - minMax[0]) );
      
      if (frac < 5) {
        frac = 5;
      }
      if (frac > this.N_COLORS - 5) {
        frac = this.N_COLORS - 5; 
      }

      this._data.values = [];
      
      for (let id = 0; id < frac; id ++) {
        const val = minMax[0] + id * (zero - minMax[0]) / (frac - 1);
        this._data.values.push(val.toFixed(3)) 
      }
  
      for (let id = 0; id < this.N_COLORS - frac; id ++) {
        const val = zero + id * (minMax[1] - zero) / (this.N_COLORS - frac - 1);
        this._data.values.push(val.toFixed(3)) 
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
  }

  initScalesAndAxes() {
    this._xScale = d3.scaleBand().range([0, this._width]).padding(0.0);
    this._xAxis = d3.axisBottom(this._xScale);
    this._cScale = d3.scaleDiverging(d3.interpolateRdBu);
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
      .attr("x", d =>this._xScale(d))
      .attr("y", 0)
      .attr("width", this._xScale.bandwidth())
      .attr("height", this._height)
      .attr("fill", d => {
        if(d === this.ALIVE_LABEL) {
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