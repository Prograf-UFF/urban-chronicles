/**
 * Layer types definition
 */
export class LayerTypes {
  public static PHYSICAL_LAYER = 'physical';
  public static BUILDING_LAYER = 'building';
  public static POLYGON_LAYER = 'polygon';
  public static HEATMAP_LAYER = 'heatmap';
  public static POINT_LAYER = 'point';
  public static LINE_LAYER = 'line';
}

/**
 * Colormap types definition
 */
export class ColorMapType {
  public static SEQUENTIAL_RED_MAP = 'sequential_red';
  public static SEQUENTIAL_BLUE_MAP = 'sequential_blue';
  public static DIVERGING_RED_BLUE_MAP = 'diverging_blue_red';
  public static DIVERGING_RED_YEL_BLUE_MAP = 'diverging_red_yellow_blue';
  public static DIVERGING_GREEN_BROWN_MAP = 'diverging_green_brown';
  public static QUALITATIVE_MAP = 'qualitative';
}

/**
 * Mapview interaction status
 */
export class MapViewStatus {
  public static IDLE = 0;
  public static DRAG = 1;
}

/**
 * Camera status
 */
export class CameraStatus {
  public static Camera2D = 0;
  public static Camera3D = 1;
}
