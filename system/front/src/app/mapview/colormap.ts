import * as d3 from 'd3';
import { ColorMapType } from './constants';

export abstract class ColorMap {
 /**
   * Color brewer sequential red
   */
  public static sequentialRed(reverse: boolean = false, size = 515): number [] {
    const cscale = d3.scaleDiverging(d3.interpolateReds).domain([-1, 0, 1]);

    const colors = [];

    for (let id = 0 ; id < size; id++) {
        const val  = -1 + id * 2 / (size - 1);
        const color = cscale(val).match(/\d+/g).map(d => +d);
        
        colors.push(...color);
        colors.push(255)
    }

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer sequential blue
   */
  public static sequentialBlue(reverse: boolean = false, size = 515): number [] {
    const cscale = d3.scaleDiverging(d3.interpolateBlues).domain([-1, 0, 1]);

    const colors = [];

    for (let id = 0 ; id < size; id++) {
        const val  = -1 + id * 2 / (size - 1);
        const color = cscale(val).match(/\d+/g).map(d => +d);
        
        colors.push(...color);
        colors.push(255)
    }


    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer diverging blue and red
   */
  public static divergingRedYelBlue(reverse: boolean = false, size = 515): number [] {
    const cscale = d3.scaleDiverging(d3.interpolateRdYlBu).domain([-1, 0, 1]);

    const colors = [];

    for (let id = 0 ; id < size; id++) {
        const val  = -1 + id * 2 / (size - 1);
        const color = cscale(val).match(/\d+/g).map(d => +d);
        
        colors.push(...color);
        colors.push(255)
    }

    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }


  /**
   * Color brewer diverging blue and red
   */
  public static divergingRedBlue(reverse: boolean = false, size = 515): number [] {
    const cscale = d3.scaleDiverging(d3.interpolateRdBu).domain([-1, 0, 1]);

    const colors = [];

    for (let id = 0 ; id < size; id++) {
        const val  = -1 + id * 2 / (size - 1);
        const color = cscale(val).match(/\d+/g).map(d => +d);
        
        colors.push(...color);
        colors.push(255)
    }


    if (reverse) {
      return colors.reverse();
    } else {
      return colors;
    }
  }

  /**
   * Color brewer diverging blue and red
   */
  public static divergingGreenBrown(reverse: boolean = false, size = 515): number [] {
    const cscale = d3.scaleDiverging(d3.interpolateGnBu).domain([-1, 0, 1]);

    const colors = [];

    for (let id = 0 ; id < size; id++) {
        const val  = -1 + id * 2 / (size - 1);
        const color = cscale(val).match(/\d+/g).map(d => +d);
        
        colors.push(...color);
        colors.push(255)
    }

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
    // TODO: FIX

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

      case ColorMapType.DIVERGING_RED_BLUE_MAP:
      return ColorMap.divergingRedBlue(reverse);

      case ColorMapType.DIVERGING_RED_YEL_BLUE_MAP:
      return ColorMap.divergingRedYelBlue(reverse);

      case ColorMapType.DIVERGING_GREEN_BROWN_MAP:
      return ColorMap.divergingGreenBrown(reverse);

      case ColorMapType.QUALITATIVE_MAP:
      return ColorMap.qualitative(reverse);

      default:
      return ColorMap.sequentialRed(reverse);
    }
  }

  static computeScalarValue(val, min, max, neutral = 0) {
    let sValue = null; 

    if ((min < neutral && max < neutral) || (min > neutral && max > neutral)) {
      neutral = (min + max) * 0.5;
    }    

    if (val < neutral) {
      sValue = (val - min) / (neutral - min) * 0.5; 
    } else {
      sValue = 0.5 + (val - neutral) / (max - neutral) * 0.5;
    }

    if (val === neutral && neutral === min && min === max) {
      return 0.5;
    }

    return sValue;
  }

}
