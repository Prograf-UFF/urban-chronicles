#version 300 es

in highp float vScalar;
out highp vec4 fragColor;

uniform sampler2D uColorMap;

void main() {
  mediump float dist  = length(gl_PointCoord.xy - vec2(.5, .5));
  dist = dist > 0.5 ? 0.0 : 1.0;

  // gets the color
  mediump vec3 gScalar = texture(uColorMap, vec2(vScalar, 0.5)).rgb;
  // undefined scalar function
  if (abs(-1.0 - vScalar) < 0.000001) {
    gScalar = vec3(0.45);
  }

  fragColor = vec4(gScalar, dist);
}