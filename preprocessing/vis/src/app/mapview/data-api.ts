import { DataLoader } from './data-loader';
import { environment } from '../../environments/environment';

export abstract class DataApi {
  /**
   * Load all layers
   * @returns {Promise<any>} The load index promise
   */
  static async getMapIndex(index): Promise<any> {
    const url = `${environment.backend}/assets/${environment.folder}/${index}`;
    console.log(url);

    const datasets = await DataLoader.getJsonData(url);
    return datasets;
  }

  /**
   * Load the camera
   * @returns {Promise<any>} The load camera promise
   */
  static async getCameraParameters(camera): Promise<any> {
    const url = `${environment.backend}/assets/${environment.folder}/${camera}`;
    console.log(url);

    const params = await DataLoader.getJsonData(url);
    return params;
  }

  /**
   * Gets the layer data
   * @param {Promise<any>} layerId the layer data
   */
  static async getLayerFeature(layerId: string): Promise<any> {
    const url = `${environment.backend}/assets/${environment.folder}/${layerId}.json`;
    console.log(url);

    const feature = await DataLoader.getJsonData(url);
    return feature;
  }

  /**
   * Gets the layer function
   * @param {Promise<any>} layerId the layer data
   */
  static async getLayerFunction(layerId: string): Promise<any> {
    const url = `${environment.backend}/assets/${environment.folder}/${layerId}.json`;
    console.log(url);

    const feature = await DataLoader.getJsonData(url);
    return feature;
  }
}
