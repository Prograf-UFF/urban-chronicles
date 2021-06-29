#version 300 es

in highp float vPolyId;
uniform highp float uHighlightId;

out highp vec4 fragColor;

void main() {

  // undefined scalar function
  if (abs(vPolyId - uHighlightId) < 1e-5){
    fragColor = vec4(0.0, 1.0, 0.0, 1.0);
  } else {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}