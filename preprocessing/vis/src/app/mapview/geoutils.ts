
export abstract class GeoUtils {
  /**
   * Converts from lat, lng to world coordinates
   * @param {number} latitude the latitude of the point
   * @param {number} longitude the longitude of the point
   * @returns {number[]} the point in world coordinates
   */
  public static latLng2Coord(latitude: number, longitude: number) {
    const pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
    const pi_180 = 0.017453292519943295769236907684886127134428718885417254560;

    const sinLatitude = Math.sin(latitude * pi_180);
    const pixelY = 256.0 - ((0.5 - Math.log((1.0 + sinLatitude) / (1.0 - sinLatitude)) / (pi_4)) * 256.0);
    const pixelX = ((longitude + 180.0) / 360.0) * 256.0;
    return [pixelX, pixelY];
  }

  /**
   * Converts from world coordinates to lat, lng
   * @param {number} x the x coordinate of the point
   * @param {number} y the y coordinate of the point
   * @returns {number[]} the point in lat, lng
   */
  public static coord2LatLng(x: number, y: number) {
    const pi_4 = 12.56637061435917295385057353311801153678867759750042328389;
    const pi_180 = 0.017453292519943295769236907684886127134428718885417254560;

    const longitude = ((x / 256.0) * 360.0) - 180.0;
    let latitude = (256.0 - y) / 256.0;
    latitude = Math.exp((0.5 - latitude) * pi_4);
    latitude = (latitude - 1.0) / (1.0 + latitude);
    latitude = Math.asin(latitude) / pi_180;
    return [latitude, longitude];
  }

  /**
   * Computes the ground resolution
   * @param {number} lat the latitude value
   * @param {number} lng the longitude value
   * @param {number} zoom the zoom leevl
   */
  public static groundResolution(lat, lng, zoom) {
    return Math.cos(lat * Math.PI / 180) * 6378137 * 2 * Math.PI / Math.pow(2, 8 + zoom);
  }
}
