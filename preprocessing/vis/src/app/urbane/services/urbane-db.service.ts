import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrbaneDbService {

  constructor() { }

  async loadPolygonList(): Promise<string[]> {
    const url = `${environment.backend}/urbane/meta.polygons`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return ['Grid'].concat(json.polylayers);
  }

  async loadDatasetList(): Promise<string[]> {
    const url = `${environment.backend}/urbane/meta.data`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return json.datalayers;
  }

  async loadDatasetColumns(name: string) {
    const url = `${environment.backend}/urbane/meta.columns("${name}")`;
    console.log(url);

    // invalid dataset selection
    if (!name) {
      return {
        stCol: ['default'],
        col: ['default']
      };
    }

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return {
      stCol: json.columns[name].stcols,
      col: ['count'].concat(json.columns[name].othercols)
    };
  }

  async loadPolygonLayer(name: string) {
    const url = `${environment.backend}/urbane/data.tripoly("${name}")`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return json;
  }

  async loadPolygonJoin(poly: string, dSet: string, stCol: string, col: string, time: string[]) {
    let url = `${environment.backend}/urbane/vis.sjoin("${dSet}")`;

    // current polygon
    url += `.where("poly",${poly})`;
    // stcol definition
    url += `.where("stgroup","${stCol}")`;
    // attribute definition
    url += `.where("attribute","${col}")`;
    // aggregation type
    if (col !== 'count') {
      url += `.where("type","avg")`;
    }

    // parse the string
    const start = new Date(time[0] + ' UTC');
    const end = new Date(time[1] + ' UTC');
    // time constraint
    url += `.where("time",${start.valueOf() / 1000},${end.valueOf() / 1000})`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return json;
  }

  async loadHeatMapLayer(dSet: string, stCol: string, col: string, space: number[], time: string[]) {
    // url string
    let url = `${environment.backend}/urbane/vis.heatmap("${dSet}")`;

    // stcol definition
    url += `.where("stgroup","${stCol}")`;
    // attribute definition
    url += `.where("attribute","${col}")`;
    // aggregation type
    if (col !== 'count') {
      url += `.where("type","avg")`;
    }
    // space constraint
    url += `.where("space",${space[0]},${space[1]},${space[2]},${space[3]})`;

    // parse the string
    const start = new Date(time[0] + ' UTC');
    const end = new Date(time[1] + ' UTC');
    // time constraint
    url += `.where("time",${start.valueOf() / 1000},${end.valueOf() / 1000})`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return json;
  }
}
