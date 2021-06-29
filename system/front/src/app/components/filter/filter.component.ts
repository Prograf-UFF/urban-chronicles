import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { EventsService } from 'src/app/services/events.service';
import { StateService } from 'src/app/services/state.service';

import { Bar } from 'src/app/charts/bar';
import { empty } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {
  public colorControl = new FormControl('warn');
  public fontSizeControl = new FormControl(12);
  public filterExp = '';

  @ViewChildren('filter') _filtersDivs: QueryList<ElementRef>;
  private _filters: any = {};

  constructor(public api: ApiService, public data: DataService, public events: EventsService, public state: StateService) {}

  ngOnInit(): void {
    this.subscribeDataEvents();
  }

  ngAfterViewInit(): void {
    this._filtersDivs.changes.subscribe(this.renderFilters.bind(this));
  }

  subscribeDataEvents() {
    this.events.data.updateFilters.subscribe(this.renderFilters.bind(this));
  }

  renderFilters(keepBrush: boolean) {
    const keys = Object.keys(this.data.filters);

    this._filtersDivs.forEach((el, divId) => {
      const key = keys[divId];
      if (!key) { return; }

      const div = el.nativeElement;
      const cbs = {
        brush: this.brushChanged.bind(this)
      };

      const hist = new Bar(div, cbs, key);
      this._filters[key] = hist;

      const range = keepBrush ? this.state.activeFilterParameters[key].range || [] : [];

      const id = this.data.filters[key].findIndex((obj) => {
        return obj.bin === 'empty';
      });
      if (id>=0) {
        this.data.filters[key].splice(id, 1);
      }

      const data = this.data.filters[key].filter((obj) => {
        return obj.count > 0;
      })

      // runs
      this._filters[key].setData(data, range);
      this._filters[key].render();
    });
  }

  // ---- Toolbar events

  addFilter() {
    const state = {
      key: this.state.currentFilterId,
      params: {
        borough: this.state.activeConfigParameters.borough,
        attribute: 'AREA',
        category: 'RES'
      }
    };

    this.addFilterExp(state.key);
    this.events.filters.updated.emit(state);
  }

  addFilterExp(key) {
    if (this.filterExp === '') {
        this.filterExp = `${key}`;
    } 
    else {
        this.filterExp += ` and ${key}`;
    }
  }

  updateSummary() {
    this.state.activeConfigParameters.filterExp = this.filterExp;
    this.events.filters.updateSummary.emit();
  }

  // ---- Filter events
 
  delFilter(key: string) {
    const state = {
      key: key,
      params: null
    };

    this.delFilterExp(key);
    this.events.filters.updated.emit(state);
  }

  delFilterExp(key) {
    let parts = this.filterExp.split(' ');
    
    let id = parts.indexOf(key);
    if (id === 0) {
        parts.splice(id, 2);
    }
    else {
        parts.splice(id-1, 2);
    }

    this.filterExp = parts.join(' ')
  }


  attributeSelectChanged(key, event) {
    const state = {
      key,
      params: { 
        attribute: event.value,
        category: this.data.meta.attributes[event.value].categories[0]
      }
    }
    this.events.filters.updated.emit(state);
  }

  getAttributes() {
    const filtered = Object.keys(this.data.meta.attributes).filter(key => {
      const obj = this.data.meta.attributes[key];
      return obj.histogramAlloed;
    });

    return filtered;
  }

  categorySelectChanged(key, event) {
    const state = {
      key,
      params: { category: event.value }
    }
    this.events.filters.updated.emit(state);
  }

  getCategory(key) {
    const attr = this.state.activeFilterParameters[key].attribute;

    if (this.state.activeFilterParameters[key].attribute) {
      return this.data.meta.attributes[attr].categories;
    }
    return [];
  }

  // ----- Bar chart events

  brushChanged(key, event) {
    const state = {
      key,
      params: { range: event.value }
    }
    this.events.filters.brushed.emit(state);
  }
}
