import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UrbaneAPIService {

    private _customLayers: string[] = ['Neighborhood', 'Tax Lot'];

    constructor () {}

    async fetchYearsAvailable() {
        const url = `${environment.server}/yearAvailable`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchBlocksAvailable(neighborhoodSelected: string) {
        const url = `${environment.server}/blocksAvailable?neighCode=${neighborhoodSelected}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    loadCustomLayersOptions (): string[] {
        return this._customLayers;
    }

    async fetchNeighborLayer() {
        const url = `${environment.server}/neighLayer`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchNumericsAttributeNames() {
        const url = `${environment.server}/numericalAttributes`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchAttributesAvailable() {
        const url = `${environment.server}/attrAvailable`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchSubCategoriesAvailable(yearSelected: string, category: string) {
        const url = `${environment.server}/attrSubcategories?year=${yearSelected}&attrName=${category}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchNeighborhoodLotLayer(yearSelected: string, boroughCode: string, neighborhood: string) {
        const url = `${environment.server}/lotLayer?year=${yearSelected}&borough=${boroughCode}&neighborhood=${neighborhood}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchLotNeighbors (yearSelected: string, neighborhood: string, lotCode: string) {
        const url = `${environment.server}/lotNeighbors?year=${yearSelected}&neighborhood=${neighborhood}&lotcode=${lotCode}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchBlockGraph(yearSelected: string, boroughSelected: string, neighborhoodSelected: string, blockCodeSelected: string) {
        let url = `${environment.server}/blockGraph?year=${yearSelected}`;
        url += `&boroughcode=${boroughSelected}`;
        url += `&neighborhood=${neighborhoodSelected}`;
        url += `&blockcode=${blockCodeSelected}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async fetchLayerContent(yearSelected: string, neighborhoodSelected: string, blockCodeSelected: string , lotCodeSelected: string) {
        let url = `${environment.server}/getLayerInfo`;
        const yearAvailable     = yearSelected !== undefined && yearSelected.length > 0;
        if (yearAvailable) {
            url += `?year=${yearSelected}`;
        }
        const neighAvailable    = neighborhoodSelected !== undefined && neighborhoodSelected.length > 0;
        const blockAvailable    = blockCodeSelected !== undefined && blockCodeSelected.length > 0;
        const lotCodeAvailable  = lotCodeSelected !== undefined && lotCodeSelected.length > 0;
        
        if (neighAvailable) {
            if (yearAvailable) {
                url += `&neighCode=${neighborhoodSelected}`;
            } else {
                url += `?neighCode=${neighborhoodSelected}`;
            }
                if (blockAvailable) {
                    url += `&blockCode=${blockCodeSelected}`;
                    if (lotCodeAvailable) {
                        url += `&lotCode=${lotCodeSelected}`;
                    }
                }
        }
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    async filterLayerContent(yearSelected: string,
                            attrNameSelected: string,
                            minValue: number, 
                            maxValue: number,
                            neighborhoodCode: string,
                            blockCode: string) {
        
        let url = `${environment.server}/doLayerFilter`;

        if (yearSelected === undefined ) {
            console.log("Year selected is undefined.");
            return undefined;
        }
        
        url += `?year=${yearSelected}`;
        url += `&attrCode=${attrNameSelected}`;
        url += `&min=${minValue}`;
        url += `&max=${maxValue}`;

        if (neighborhoodCode !== undefined) {
            url += `&neighCode=${neighborhoodCode}`;
        }

        if (blockCode !== undefined) {
            url += `&blockCode=${blockCode}`;
        }

        const response = await fetch(url);
        const json = await response.json();
        return json;

    }
}