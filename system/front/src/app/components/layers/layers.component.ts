import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})
export class LayersComponent implements OnInit {

  constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) { }

  ngOnInit(): void {}

  layerSelected(layer: string) {

    const state = {
      layersActive: false,
      activeLayer: this.state.activeLayer === layer ? '' : layer
    }

    this.events.layers.activeLayerChanged.emit(state);
  }

}
