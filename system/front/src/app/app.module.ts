import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { VisComponent } from './components/vis/vis.component';
import { MenuComponent } from './components/menu/menu.component';
import { LegendComponent } from './components/legend/legend.component';
import { FilterComponent } from './components/filter/filter.component';
import { ConfigComponent } from './components/config/config.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LayersComponent } from './components/layers/layers.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VisComponent,
    MenuComponent,
    LegendComponent,
    FilterComponent,
    ConfigComponent,
    TooltipComponent,
    LayersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
