import * as d3 from 'd3';

export class Matrix {
    // chart data
    protected _data: any = null;

    // Chart div
    protected _chartDiv: HTMLElement = null;
    // Svg element
    protected _svgCanvas: any = null;
    // Group element
    protected _svgGroup: any = null;

    // margin object
    protected _margin = { top: 10, right: 35, bottom: 40, left: 125 };

    // svg width
    protected _width: number;
    // charts height
    protected _height: number;

    // scales and axis
    protected _xScale: any = null;
    protected _yScale: any = null;
    protected _cScale: any = null;
    protected _lScale: any = null;
    // ----
    protected _xAxis: any = null;
    protected _yAxis: any = null;

    // labels on y axis
    protected Y_LABEL_SIZE = 22;

    // Is Alive : the lot existis in the selected year
    // Is Active: the lot fits the filter condition 
    // Is Valid : the selected attribute is a valid value in the lot
    protected ALIVE_COLOR = d3.color('#8f8f8f');
    protected ACTVE_COLOR = d3.color('#afafaf');
    protected VALID_COLOR = d3.color('#cfcfcf');

    protected MODE = null;

    // callback enabled
    protected _yCallbackEnabled = true;

    // selected labels
    protected _xLabelSelected = null;
    protected _yLabelSelected = null;

    protected _sortIconSelected = null;
    protected _lineIconSelected = [];


    // callbacks
    protected _callbacks = null;

    constructor(chartDiv: HTMLElement, callbacks: any, defaults: any) {
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

    setData(data: any, mode: string, line: any, sort: string, click: boolean) {
        this.MODE = mode;
        this._data = data;
        this._lineIconSelected = line;
        this._sortIconSelected = sort;
        this._yCallbackEnabled = click;
    }

    setHighlight(label: string) {
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
        this._svgCanvas = d3.select(this._chartDiv)
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
            .attr('class', 'sort-icons-group')

        this._svgGroup
            .append('g')
            .attr('class', 'line-icons-group')
    }

    initScalesAndAxes() {
        this._xScale = d3.scaleBand().range([0, this._width]).padding(0.075);
        this._xAxis = d3.axisBottom(this._xScale);

        this._yScale = d3.scaleBand().range([this._height, 0]).paddingInner(0.075).paddingOuter(0.25).align(1.0);
        this._yAxis = d3.axisLeft(this._yScale);

        this._cScale = d3.scaleDiverging(d3.interpolateRdBu);
        this._lScale = d3.scaleOrdinal(d3.schemeCategory10);
    }

    initWindowEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    updateScales() {
        const keys = this._data.map(obj => obj.key);
        if (keys.length < 1) { return; }

        const polys = this._data[0].value.map(obj => obj.name);
        if (polys.length < 1) { return; }

        // sets the domains
        this._xScale.domain(keys);
        this._yScale.domain(polys);

        let zero = 0;
        if (this._data.minMax[0] < 0 && this._data.minMax[1] > 0) {
            zero = 0
        } else if (this._data.minMax[0] >= 0 && this._data.minMax[1] > 0) {
            zero = this._data.minMax[0];
        } else if (this._data.minMax[0] < 0 && this._data.minMax[1] <= 0) {
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
            })

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
                const mouse = [d3.event.pageX + 10, d3.event.pageY + 10];
                this._callbacks.rHover({ year, data: d, mouse });
            });
    }

    updateSortIcons() {
        const icons = this._svgGroup.select('.sort-icons-group')
            .selectAll("path")
            .data(this._data)
            .join("path");

        icons
            .attr("d", d3.symbol().type(d3.symbolTriangle).size(100))
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
            .attr("d", d3.symbol().type(d3.symbolCircle).size(100))
            .style('pointer-events', 'auto')
            .style('cursor', 'pointer')
            .attr('transform', d => {
                return `translate(${this._width + 0.5 * this._margin.right
                    }, ${this._yScale(d.name) + 0.5 * this._yScale.bandwidth()
                    })`;
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

                return current === d ? 'bold' : 'normal'
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

    updateLineIconsClick(d: any) {
        const id = this._lineIconSelected.indexOf(d.name);

        if (id < 0) {
            this._lineIconSelected.push(d.name);
        } else {
            this._lineIconSelected.splice(id, 1);
        }

        this._lScale.domain(this._lineIconSelected);

        this._callbacks.lIcon(this._lineIconSelected);
        this.highlightLineIcon();
    }
}
