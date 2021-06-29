#version 300 es

uniform mat4 matModelView;

out highp vec3 lightDir;
void main()
{
  vec2 texCoordFrag = vec2(gl_VertexID%2, gl_VertexID/2);
  gl_Position  = vec4(texCoordFrag*2.0-vec2(1,1), 0, 1);
  vec4 ldir = matModelView * vec4(1,1,1,0);
  lightDir = ldir.xyz;
}
