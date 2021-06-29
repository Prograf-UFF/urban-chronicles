import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UrbaneDbService } from '../services/urbane-db.service';
import { UrbaneStateService } from '../services/urbane-state.service';
import { UrbaneEventsService } from '../services/urbane-events.service';
import { UrbaneAPIService } from '../services/urbane-api.service';
import { ColorMapLegend } from '../../colormap-legend/colormap-legend';
import { ColorMap } from 'src/app/mapview/colormap';

import * as d3 from 'd3';

@Component({
    selector: 'app-urbane-legend',
    templateUrl: './urbane-legend.component.html',
    styleUrls: ['./urbane-legend.component.css']
})
export class LegendComponent implements OnInit {
    @ViewChild('layerColorMap', {static: true}) _layerColorMapDiv: ElementRef;
    @ViewChild('diffTableColorMap', {static: true}) _diffTableColorMapDiv: ElementRef;

    private _layerColorMap: ColorMapLegend = undefined;
    private _diffTableColorMap: ColorMapLegend = undefined;

    constructor(
        private _db: UrbaneDbService,
        private _state: UrbaneStateService,
        private _events: UrbaneEventsService,
        private _api: UrbaneAPIService
    ) {
    }

    ngOnInit() {
        this.initComponents();
        this.initEvents();
    }

    convertColorToD3Format(colorArray: any) {
        const tempArr: any[] = ColorMap.sequentialRed();
        const temp = [];
        for (let i = 0; i < tempArr.length; i += 4) {
            const a = d3.rgb(tempArr[i + 0], tempArr[i + 1], tempArr[i + 2], tempArr[i + 3] / 255);
            temp.push(a);
        }
        // return d3.interpolateBuGn;
        return temp;
    }

    initComponents() {
        if (this._layerColorMapDiv !== undefined) {
            this._layerColorMap = new ColorMapLegend(this._layerColorMapDiv.nativeElement,
                this.convertColorToD3Format(ColorMap.sequentialRed),
                'Layer ColorMap',
                true);
        }

        if (this._diffTableColorMapDiv !== undefined) {
            this._diffTableColorMap = new ColorMapLegend(this._layerColorMapDiv.nativeElement,
                d3.interpolateRdBu,
                'DiffTable ColorMap',
                false);
        }
    }

    initEvents() {
        this._events.diffTableIntervalChanged.subscribe(this.onDiffTableIntervalChanged.bind(this));
        this._events.layerIntervalChanged.subscribe(this.onLayerIntervalChanged.bind(this));
    }

    onDiffTableIntervalChanged() {
        this._diffTableColorMap.updateIntervals(this._state.minTable, this._state.maxTable);
    }

    onLayerIntervalChanged() {
        this._layerColorMap.updateIntervals(this._state.minLayer, this._state.maxLayer);
    }

}
