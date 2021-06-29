// angular imports
import {
  Component, OnInit, ViewChild, ElementRef
} from '@angular/core';

// mapview imports
import { MapView } from '../../mapview/mapview';

@Component({
  selector: 'app-standalone-map',
  templateUrl: './standalone-map.component.html',
  styleUrls: ['./standalone-map.component.css']
})
export class StandaloneMapComponent implements OnInit {
  @ViewChild('mapView', {static: true}) _mapDiv: ElementRef;
  // map view instance
  protected _mapView: MapView = null;

  // constructor
  constructor() { }

  // initialization
  ngOnInit() {
    this._mapView = new MapView(this._mapDiv.nativeElement);
    this._mapView.render();
  }
}
