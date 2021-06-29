export abstract class DataLoader {
  /**
   * Loads a json file
   * @param {string} url json file url
   * @returns {Promise<any>} The load json promise
   */
  static async getJsonData(url: string): Promise<any> {
    // Return a new promise.
    const response = await fetch(url);
    const json = await response.json();

    return json;
  }

  /**
   * Loads a text file
   * @param {string} url text file url
   * @returns {Promise<string>} The load text promise
   */
  static async getTextData(url: string): Promise<string> {
    // Return a new promise.
    const response = await fetch(url);
    const txt = await response.text();

    return txt;
  }
}
