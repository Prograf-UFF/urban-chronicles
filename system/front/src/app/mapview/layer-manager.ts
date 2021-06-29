// data loader
import { DataLoader } from './data-loader';

// layers base classes
import { Layer } from './layer';
import { LayerTypes } from './constants';
// layer types
import { BuildingLayer } from './building-layer';
import { PhysicalLayer } from './physical-layer';
import { PolygonLayer } from './polygon-layer';
import { HeatmapLayer } from './heatmap-layer';
import { PointLayer } from './point-layer';

export class LayerManager {
  // index file
  protected _index: string;
  // Loaded layers
  protected _layers: Layer[] = [];

  /**
   * Layer manager constructor
   * @param {string} indexUrl Layers index file
   */
  constructor(indexUrl: string) {
    this._index = indexUrl;
  }

  /**
   * Layers vector accessor
   * @returns {Layer[]} The array of layers
   */
  get layers(): Layer[] {
    return this._layers;
  }

  /*
   * Load all layers
   * @returns {Promise<any>} The load index promise
   */
  loadIndex(): Promise<any> {
    return DataLoader.getJsonData(this._index).then( (layers) => {
      return layers;
    });
  }

   /**
   * Creates a layer from the server
   * @param {string} layerType layer type
   * @param {string} layerId layer identifier
   * @returns {Promise<Layer>} The load layer promise
   */
  createLayer(layerType: string, layerId: string) {
    // loaded layer
    let layer = null;

    // loads based on type
    switch (layerType) {
      case LayerTypes.PHYSICAL_LAYER:
        layer = new PhysicalLayer(layerId);
      break;
      case LayerTypes.BUILDING_LAYER:
        layer = new BuildingLayer(layerId);
      break;
      case LayerTypes.POLYGON_LAYER:
        layer = new PolygonLayer(layerId);
      break;
      case LayerTypes.HEATMAP_LAYER:
        layer = new HeatmapLayer(layerId);
      break;
      case LayerTypes.POINT_LAYER:
        layer = new PointLayer(layerId);
      break;
      default:
        console.error(`File ${layerId}.json has an unknown layer type: {layerType}.`);
      break;
    }

    // adds the the list of layers
    this._layers.push(layer);

    // returns the layer
    return layer;
  }

  getLayer(layerId: string) {
    for(const layer of this._layers) {
      if (layerId === layer.layerId) {
        return layer;
      }
    }

    return null;
  }
}
