#version 300 es

void main()
{
  vec2 texCoordFrag = vec2(gl_VertexID%2, gl_VertexID/2);
  gl_Position  = vec4(texCoordFrag*2.0-vec2(1,1), 0, 1);
}
