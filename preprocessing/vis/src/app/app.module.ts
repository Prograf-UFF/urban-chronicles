// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';

// standalone app
import { StandaloneComponent } from './standalone/standalone.component';
import { StandaloneMapComponent } from './standalone/map/standalone-map.component';

// urbane components
import { UrbaneMapComponent } from './urbane/map/urbane-map.component';
import { UrbaneMenuComponent } from './urbane/menu/urbane-menu.component';
import { UrbaneComponent } from './urbane/urbane.component';
import { UrbaneVisComponent } from './urbane/vis/urbane-vis.component';
import { LegendComponent } from './urbane/legend/urbane-legend.component';

// Main app include
import { AppComponent } from './app.component';

// touch devices
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    // standalone map
    StandaloneMapComponent,
    StandaloneComponent,
    // Urbane
    UrbaneMapComponent,
    UrbaneMenuComponent,
    UrbaneComponent,
    UrbaneVisComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
