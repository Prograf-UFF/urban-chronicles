#version 300 es

in highp vec3 vColor;
out highp vec4 fragColor;

void main() {
  fragColor = vec4(vColor, 1.0);
}