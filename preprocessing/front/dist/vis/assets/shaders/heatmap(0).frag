#version 300 es

in highp vec2 vTexCoords;
out highp vec4 fragColor;

uniform sampler2D uFunction;
uniform sampler2D uColorMap;

void main() {
  highp float func = texture(uFunction, vTexCoords).r;
  highp vec3 color = texture(uColorMap, vec2(func, 0.5)).rgb;

  if (func < 0.0) {
    func = 0.0;
  }

  fragColor = vec4(color, func);
}