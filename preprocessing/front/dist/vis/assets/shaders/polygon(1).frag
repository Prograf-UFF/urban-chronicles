#version 300 es

precision highp sampler2D;

uniform sampler2D uScalarTex;
out highp vec4 fragColor;

void main() {
  ivec2 coords = ivec2(gl_FragCoord.xy);
  fragColor = texelFetch(uScalarTex, coords, 0);
}