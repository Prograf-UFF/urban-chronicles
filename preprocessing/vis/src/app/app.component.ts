import { Component } from '@angular/core';
import { UrbaneDbService } from './urbane/services/urbane-db.service';
import { UrbaneStateService } from './urbane/services/urbane-state.service';
import { UrbaneEventsService } from './urbane/services/urbane-events.service';
import { UrbaneAPIService } from './urbane/services/urbane-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'urbane-web';
  // public app = 'standalone';
  public app = 'urbane';

  constructor ( ) { }
}
