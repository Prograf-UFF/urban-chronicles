#version 300 es

in highp float vScalar;
in highp float vPolyId;
in highp float vPolyHighlight;

uniform sampler2D uColorMap;

layout (location = 0) out highp vec4 gScalar;
layout (location = 1) out highp vec4 gPolyId;
layout (location = 2) out highp vec4 gPolyHigh;

void main() {
  // gets the color
  gScalar = texture(uColorMap, vec2(vScalar, 0.5));
  // undefined scalar function
  if (vScalar == -1.0) {
    gScalar.a = 0.0;
  }

  gPolyId = vec4(vPolyId, 0.0, 0.0, 1.0);
  gPolyHigh = vec4(vPolyHighlight, 0.0, 0.0, 1.0);
}