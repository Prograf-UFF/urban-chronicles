#version 300 es

const mediump float M_PI = 3.1415926535897932384626433832795;

in highp vec3 vPos;
in highp float depth;
in highp float outBuildingID;

layout (location = 0) out highp vec4 gNormal;
layout (location = 1) out highp vec4 gPosition;
layout (location = 2) out highp vec4 gID;

void main() {
  highp vec3 fdx = dFdx(vPos);
  highp vec3 fdy = dFdy(vPos);
  highp vec3 n = normalize(cross(fdx, fdy));
  gNormal = vec4(n,depth);
  gPosition = vec4(vPos, 1.0);
  gID = vec4(outBuildingID, 0.0, 0.0, 1.0);
}