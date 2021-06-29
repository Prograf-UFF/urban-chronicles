#version 300 es

const float PI = 3.1415926535897932384626433832795;
const float pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
const float pi_4   = 12.56637061435917295385057353311801153678867759750042328389;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uWorldOrigin;

in vec2 vertPos;
in float vertPolyId;
in float vertHighlight;

out highp float vPolyId;
out highp float vPolyHighlight;

vec2 latLngToPixel(float latitude, float longitude){
  float sinLatitude = sin(latitude * pi_180);
  float pixelY = 256.0-((0.5 - log((1.0 + sinLatitude) / (1.0 - sinLatitude)) / (pi_4)) * 256.0);
  float pixelX = ((longitude + 180.0) / 360.0) * 256.0;

  return vec2(pixelX,pixelY);
}

void main() {
  vec2 movedPos = latLngToPixel(vertPos.x, vertPos.y) - latLngToPixel(uWorldOrigin.x, uWorldOrigin.y);
  gl_Position =  uProjectionMatrix * uModelViewMatrix * vec4(movedPos, 0.0, 1.0);
  // polygon Id
  vPolyId = vertPolyId;
  vPolyHighlight = vertHighlight;
} 