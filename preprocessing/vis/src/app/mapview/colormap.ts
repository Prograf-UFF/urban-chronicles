import { ColorMapType } from './constants';

export abstract class ColorMap {
  /**
   * Color brewer sequential red
   */
  public static sequentialRed(reverse: boolean = false): number [] {
    const colors = [
      255, 245, 235, 255,
      254, 230, 206, 255,
      253, 208, 162, 255,
      253, 174, 107, 255,
      253, 141,  60, 255,
      241, 105,  19, 255,
      217,  72,   1, 255,
      166,  54,   3, 255,
      127,  39,   4, 255
    ];

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer sequential blue
   */
  public static sequentialBlue(reverse: boolean = false): number [] {
    const colors = [
      247, 251, 255, 255,
      222, 235, 247, 255,
      198, 219, 239, 255,
      158, 202, 225, 255,
      107, 174, 214, 255,
       66, 146, 198, 255,
       33, 113, 181, 255,
        8,  81, 156, 255,
        8,  48, 107, 255,
    ];

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer diverging blue and red
   */
  public static divergingBlueRed(reverse: boolean = false): number [] {
    const colors = [
      178,  24,  43, 255,
      214,  96,  77, 255,
      244, 165, 130, 255,
      253, 219, 199, 255,
      247, 247, 247, 255,
      209, 229, 240, 255,
      146, 197, 222, 255,
       67, 147, 195, 255,
       33, 102, 172, 255
    ];

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer diverging blue and red
   */
  public static divergingGreenBrown(reverse: boolean = false): number [] {
    const colors =  [
      140,  81,  10, 255,
      191, 129,  45, 255,
      223, 194, 125, 255,
      246, 232, 195, 255,
      245, 245, 245, 255,
      199, 234, 229, 255,
      128, 205, 193, 255,
       53, 151, 143, 255,
        1, 102,  94, 255
    ];

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer qualitative colors
   */
  public static qualitative(reverse: boolean = false): number [] {
    const colors = [
      166, 206, 227, 255,
      178, 223, 138, 255,
      251, 154, 153, 255,
      253, 191, 111, 255,
      202, 178, 214, 255,
       31, 120, 180, 255,
       51, 160,  44, 255,
      227,  26,  28, 255,
      255, 127,   0, 255,
    ];

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  public static getColorMap(color: ColorMapType, reverse: boolean = false): number[] {
    switch (color) {
      case ColorMapType.SEQUENTIAL_RED_MAP:
      return ColorMap.sequentialRed(reverse);

      case ColorMapType.SEQUENTIAL_BLUE_MAP:
      return ColorMap.sequentialBlue(reverse);

      case ColorMapType.DIVERGING_BLUE_RED_MAP:
      return ColorMap.sequentialRed(reverse);

      case ColorMapType.DIVERGING_GREEN_BROWN_MAP:
      return ColorMap.sequentialBlue(reverse);

      case ColorMapType.QUALITATIVE_MAP:
      return ColorMap.qualitative(reverse);

      default:
      return ColorMap.sequentialRed(reverse);
    }
  }
}
