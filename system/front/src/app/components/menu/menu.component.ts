// angular imports
import { Component, OnInit } from '@angular/core';

// service imports
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public configActive = false;

  constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) { }

  ngOnInit(): void {}

  buttonClicked(widget: string) {
    if (widget === 'config') {
      this.state.configActive = !this.state.configActive;
    } else if (widget === 'layers') {
      this.state.layersActive = !this.state.layersActive;
    } else if (widget === 'matrix'){
      this.state.matrixActive = !this.state.matrixActive;
    }
  }

  toggleLegend() {
    this.state.legendActive = !this.state.legendActive;
  }
 
}
