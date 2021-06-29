#version 300 es

in highp float vPolyId;
in highp float vPolyHighlight;
uniform highp float uHighlightId;

out highp vec4 fragColor;

void main() {

  if (abs(vPolyHighlight) >= 1.0) {
    fragColor = vec4(0.0, 1.0, 0.0, 1.0);
  } else {
    // undefined scalar function
    if (abs(vPolyId - uHighlightId) < 1e-5){
      fragColor = vec4(0.0, 1.0, 0.0, 1.0);
    } else {
      fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  }
}