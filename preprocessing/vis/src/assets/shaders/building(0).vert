#version 300 es

const float PI = 3.1415926535897932384626433832795;
const float pi_180 = 0.017453292519943295769236907684886127134428718885417254560;
const float pi_4   = 12.56637061435917295385057353311801153678867759750042328389;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec2 uWorldOrigin;
uniform float uGroundRes;
uniform vec3 uEye;

in vec3 vertPos;
in float buildingId;

out highp float outBuildingID;
out highp vec3 vPos;
out highp float depth;
// out mediump vec4 lightDir;

vec2 latLngToPixel(float latitude, float longitude){
  float sinLatitude = sin(latitude * pi_180);
  float pixelY = 256.0-((0.5 - log((1.0 + sinLatitude) / (1.0 - sinLatitude)) / (pi_4)) * 256.0);
  float pixelX = ((longitude + 180.0) / 360.0) * 256.0;

  return vec2(pixelX,pixelY);
}

void main() {

  vec2 movedPos = latLngToPixel(vertPos.x, vertPos.y) - latLngToPixel(uWorldOrigin.x, uWorldOrigin.y);
  vec3 worldPos = vec3(movedPos, vertPos.z);

  vec4 viewPos = uModelViewMatrix * vec4(worldPos, 1.0);
  gl_Position =  uProjectionMatrix * viewPos;
  vPos = viewPos.xyz / viewPos.w;
  depth = length(vec3(movedPos, vertPos.z / uGroundRes) - uEye) * uGroundRes;
  outBuildingID = buildingId;
  // lightDir = normalize(uModelViewMatrix * vec4(1,1,1,0));
} 