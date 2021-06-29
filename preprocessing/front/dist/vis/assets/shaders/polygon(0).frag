#version 300 es

in highp float vScalar;
in highp float vPolyId;

uniform sampler2D uColorMap;

layout (location = 0) out highp vec4 gScalar;
layout (location = 1) out highp vec4 gPolyId;

void main() {
  // gets the color
  gScalar = texture(uColorMap, vec2(vScalar, 0.5));
  // undefined scalar function
  if (abs(-1.0 - vScalar) < 1e-5) {
    gScalar = vec4(0.56078431372, 0.56078431372, 0.56078431372, 1.0);
  }
  if (abs(-2.0 - vScalar) < 1e-5) {
    gScalar = vec4(0.68627450980, 0.68627450980, 0.68627450980, 1.0);
  }
  if (abs(-3.0 - vScalar) < 1e-5) {
    gScalar = vec4(0.81176470588, 0.81176470588, 0.81176470588, 1.0);
  }

  gPolyId = vec4(vPolyId, 0.0, 0.0, 1.0);
}