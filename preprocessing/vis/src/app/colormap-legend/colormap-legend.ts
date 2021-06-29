import * as d3 from 'd3';

export class ColorMapLegend {

    private _margin = {top: 10, right: 10, bottom: 10, left: 10};

    private _divElem: HTMLElement;
    private _title: string;
    private _colorMap: any;
    private _mainSvg: any;
    private _svgGroup: any;

    private _width: number;
    private _height: number;

    private _resolution: number;

    private _xScale: any;
    private _cScale: any;

    private _minLabel: any;
    private _maxLabel: any;
    private _minValue: number;
    private _maxValue: number;

    private _data: number[] = [];
    private _needUpdateTable = false;

    private _useOrdinalColors: boolean;

    constructor (divElem: HTMLElement, colorMap: any, title: string, useOrdinalColors: boolean) {
        this._divElem = divElem;
        this._colorMap = colorMap;
        this._title = title;
        this._minValue = -1;
        this._maxValue = -1;
        this._resolution = 32;
        this._useOrdinalColors = useOrdinalColors;

        this.initComponents();
        this.render();
    }

    get colorMap() {
        return this._colorMap;
    }

    get title(): string {
        return this._title;
    }

    initComponents() {
        this.initCanvas();
        this.initAxes();
        this.initLabels();

        for (let i = 0; i < this._resolution - 1; i += 1) {
            this._data.push(i);
        }
    }

    initCanvas() {
        this._mainSvg = d3.select(this._divElem)
            .append('svg');

        this._svgGroup = this._mainSvg.append('g')
            .attr('class', 'svgGroup')
            .attr('transform', `translate( ${this._margin.left}, ${this._margin.top} )`);

        this._width = this._divElem.clientWidth - this._margin.left - this._margin.right;
        this._height = this._divElem.clientHeight - this._margin.top - this._margin.bottom;
    }

    initAxes() {
        if (this._useOrdinalColors) {
            this._cScale = d3.scaleOrdinal(this._colorMap);
            this._resolution = this._colorMap.length;
        } else {
            this._cScale = d3.scaleSequential(this._colorMap);
        }
        this._cScale.domain([0, this._resolution]);

        this._xScale = d3.scaleLinear()
            .range([ 0, this._width ])
            .domain([0, this._resolution]);
    }

    initLabels() {
        this._minLabel = this._mainSvg
            .append('text')
            .attr('class', 'legend-interval')
            .attr('transform', `translate(${this._margin.left / 2}, ${this._margin.top})`)
            .text(this._minValue);

        this._mainSvg
            .append('text')
            .attr('class', 'legend-interval')
            .attr('transform', `translate(${this._margin.left + (this._width / 2) - this._title.length * 3}, ${this._margin.top})`)
            .text(this._title);

        this._maxLabel = this._mainSvg
            .append('text')
            .attr('class', 'legend-interval')
            .attr('x', `${this._margin.right + this._width - (this._margin.left / 2)}`)
            .attr('y', `${this._margin.top}`)
            .text(this._maxValue);
    }

    render() {
        this.resizeSvg();
        if (this._needUpdateTable) {
            const bkpArray = this._data;
            this._data = [];
            this.updatePalette();
            this._data = bkpArray;
            this.updatePalette();
            this._needUpdateTable = false;
        }
    }

    resizeSvg() {
        if (!this._mainSvg) {
            return;
        }

        // compute the canvas size
        const oldWidth = this._width;
        const oldHeight = this._height;

        if ( (  oldWidth + this._margin.left + this._margin.right) === this._divElem.clientWidth &&
            ( oldHeight + this._margin.top + this._margin.bottom) === this._divElem.clientHeight  ) {
            this._width = this._divElem.clientWidth - this._margin.left - this._margin.right;
            this._height = this._divElem.clientHeight - this._margin.top - this._margin.bottom;
            this._needUpdateTable = true;
        }

        // creates the svg canvas
        this._mainSvg
        .attr('width', this._width + this._margin.left + this._margin.right)
        .attr('height', this._height + this._margin.top + this._margin.bottom);
    }

    updatePalette() {
        const palette = this._svgGroup
            .selectAll('rect')
            .data(this._data);
        palette.exit().remove();

        const paletteWidth = this.getPaletteWidth();

        palette.enter()
            .append('rect')
            .merge(palette)
            .attr('x', (d: number) => { return paletteWidth * d; })
            .attr('y', 1)
            .attr('fill', (d: number) => { return this._cScale(d); })
            .attr('width', paletteWidth)
            .attr('height', this.getPaletteHeight());
    }

    getPaletteWidth() {
        if (this._data.length === 0) {
            return 0;
        }
        return this._width / this._data.length;
    }

    getPaletteHeight() {
        return this._height;
    }

    updateIntervals(min: number, max: number) {
        this._minLabel.text(min);
        this._maxLabel.text(max);
        const a = '' + this._maxLabel;
        const maxLabelWidth = a.length * 2;
        this._maxLabel.attr('x', `${this._margin.right + this._width - (this._margin.left / 2) - maxLabelWidth}`);
        this.render();
    }

}
