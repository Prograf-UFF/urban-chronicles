import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Pluto Vis';

  constructor(public events: EventsService) { }

  ngOnInit() {
    this.events.root.initialized.emit();
  }
}
