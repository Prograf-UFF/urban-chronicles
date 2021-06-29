import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  
  loadModes() {
    return ['value', 'change'];
  }

  loadLevels() {
    return ['borough', 'neighborhood', 'block', 'lot'];
  }

  loadSortBy() {
    return ['name', 'year'];
  }

  loadYearStep() {
    return ['0', '1', '2', '3', '4', '5'];
  }

  loadPolygons() {
    return ['neighborhoods', 'community districs'];
  }

  loadNavigation() {
    return ['complete', 'skip blocks'];
  }

  async loadBoroughs() {
    const url = `${environment.backend}/plutovis/meta.boroughs`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return await response.json();
  }

  async loadYears() {
    const url = `${environment.backend}/plutovis/meta.years`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return  await response.json();
  }

  async loadAttributes() {
    const url = `${environment.backend}/plutovis/meta.nattributes`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
  
    const obj = {};
    const arr = await response.json();

    arr.forEach(elm => {
      obj[elm.attribute] = elm;
      if (elm.categories.length <= 1) {
        elm.categories = ['NONE'];
      }
    });

    return obj;
  }

  async loadMetrics() {
    const url = `${environment.backend}/plutovis/meta.metrics`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return await response.json();
  }

  async loadPopsGeometry(borough: string) {
    const url = `${environment.backend}/plutovis/popslayer`;
    console.log(url);

    // post parameters
    const params = { borough };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }

  async loadGeometry(level: string, state: any) {
    if (level === 'borough') {
      return await this.loadNeighborhoodsGeometry(state.borough, state.polygon);
    }
    
    if (level === 'neighborhood') {
      if (state.navigation === 'complete') {
        return await this.loadBlocksGeometry(state.borough, state.polygon, state.neighborhood, state.year);
      } else {
        return await this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, '', state.year);
      }
    }

    if (level === 'block') {
      return await this.loadLotsGeometry(state.borough, state.polygon, state.neighborhood, state.block, state.year);
    }
  }

  private async loadNeighborhoodsGeometry(borough: string, polygon: string) {
    const url = `${environment.backend}/plutovis/geometries.neighborhoods`;
    console.log(url);

    // post parameters
    const params = { borough, polygon };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }

  private async loadBlocksGeometry(borough: string, polygon: string, neighborhood: string, year: number) {
    const url = `${environment.backend}/plutovis/geometries.blocks`;
    console.log(url);

    // post parameters
    const params = { borough, polygon, neighborhood, year };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }

  private async loadLotsGeometry(borough: string, polygon: string, neighborhood: string, block: string, year: number) {
    const url = `${environment.backend}/plutovis/geometries.lots`;
    console.log(url);

    // post parameters
    const params = { borough, polygon, neighborhood, block, year };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }


  async loadSummary(level: string, state: any) {
    if (level === 'borough') {
      return await this.loadNeighborhoodsSummary(state.borough, state.polygon, state.attribute, state.category, state.metric);
    }
    
    if (level === 'neighborhood') {
      if (state.navigation === 'complete') {
        return await this.loadBlocksSummary(state.borough, state.polygon, state.neighborhood, state.attribute, state.category, state.metric);
      } else {
        return await this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, '', state.attribute, state.category, state.metric);
      }
    }

    if (level === 'block') {
      return await this.loadLotsSummary(state.borough, state.polygon, state.neighborhood, state.block, state.attribute, state.category, state.metric);
    }
  }

  private async loadNeighborhoodsSummary(borough: string, polygon: string, attribute: string, category: string, metric: string) {
    const url = `${environment.backend}/plutovis/summaries.neighborhoods`;
    console.log(url);

    // post parameters
    category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
    let params = { borough, polygon, attribute, category, metric };

    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }

  private async loadBlocksSummary(borough: string, polygon: string, neighborhood: string, attribute: string, category: string, metric: string) {
    const url = `${environment.backend}/plutovis/summaries.blocks`;
    console.log(url);

    // post parameters
    category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
    let params = { borough, neighborhood, polygon, attribute, category, metric };

    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }

  private async loadLotsSummary(borough: string, polygon: string, neighborhood: string, block: string, attribute: string, category: string, metric: string) {
    const url = `${environment.backend}/plutovis/summaries.lots`;
    console.log(url);

    // post parameters
    category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
    let params = { borough, neighborhood, polygon, block, attribute, category, metric };
    
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }


  async loadFilter(borough: string, polygon: string, attribute: string, category: string, bins: number = 20) {    
    const url = `${environment.backend}/plutovis/histogram`;
    console.log(url);

    // post parameters
    category = category === 'NONE' ? (attribute === 'POPS' ? 'Y' : '') : category;
    const params = { borough, polygon, attribute, category, bins };

    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.json();
  }

  async applyFilter(borough: string, polygon: string, limits: any, filterExp: string) {
    const url = `${environment.backend}/plutovis/filter`;
    console.log(url);

    limits.forEach(el => {
      if (el.attribute === 'LANDUSE' || el.attribute === 'SPDIST1') {
        delete el.category;
      }
    })

    // post parameters
    const params = { borough, polygon, limits, filterExp };
    console.log(`post data: ${JSON.stringify(params)}`);
    
    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });
    return await response.text();
  }
}
