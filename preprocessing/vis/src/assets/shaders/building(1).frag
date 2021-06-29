#version 300 es

precision highp sampler2D;

uniform sampler2D normalTex;
uniform sampler2D positionTex;
uniform sampler2D IDTex;
uniform sampler2D depthTex;

uniform highp float highlightId;

uniform highp mat4 uProjectionMatrix;
uniform highp mat4 matModelView;

uniform highp vec3 uSamples[64];
uniform highp vec3 uNoise[256];

in highp vec3 lightDir;
out highp vec4 fragColor;

highp float angle(vec4 n1, vec4 n2) {
  if(n2.a != 0.0) {
    return dot(n1.xyz,n2.xyz);
  } else {
    return 0.0;
  }
}

highp vec3 ssao(ivec2 p) {
  // screen-space ambient occlusion
  // https://learnopengl.com/Advanced-Lighting/SSAO
  highp vec3 vPos = texelFetch(positionTex, p, 0).xyz;
  highp vec3 normal = normalize(texelFetch(normalTex, p, 0).xyz);
  highp vec3 random = normalize(uNoise[(p.x % 16) + 16 * (p.y % 16)]);

  highp vec3 tangent = normalize(random - normal * dot(random, normal));
  highp vec3 bitangent = cross(normal, tangent);
  highp mat3 TBN = mat3(tangent, bitangent, normal);

  highp float occlusion = 0.0;
  highp float aspect = float(textureSize(positionTex, 0).x) / float(textureSize(positionTex, 0).y);

  const int kernel_size = 64; // if you see a flickering effect, turn this down!
  const highp float radius = 0.001; // 0.001 is adjustable parameter, maybe we can make it uniform variable
  const highp float bias = radius / 20.0;
  for (int i = 0; i < kernel_size; i++) {
    highp vec3 s = TBN * uSamples[i];
    s = vPos + s * radius;

    highp vec4 offset = vec4(s, 1.0);
    offset = uProjectionMatrix * offset;
    offset.xyz = ((offset.xyz / offset.w) + 1.0) / 2.0;
    if (aspect > 1.0) offset.y *= aspect;
    else offset.x /= aspect;

    highp float sampleDepth = texture(positionTex, offset.xy).z;
    highp float rangeCheck = smoothstep(0.0, 1.0, radius / abs(vPos.z - sampleDepth));
    occlusion += (sampleDepth >= s.z + bias ? 1.0 : 0.0) * rangeCheck;        
  }

  occlusion = 1.0 - (occlusion / float(kernel_size));
  return vec3(occlusion);
}

void main() {
  ivec2 coords = ivec2(gl_FragCoord.xy);
  highp vec4 normal = texelFetch(normalTex,coords,0);
  highp float depth = normal.a;
  
  bool edge = false;
  highp vec4 edgeColor = vec4(1,1,1,1);

  if(normal.a == 0.0) {
    fragColor = vec4(0,0,0,0);
    gl_FragDepth = 1.0;
  } else {
    gl_FragDepth = texelFetch(depthTex,coords,0).x;
    // check if this fragment is an edge
    highp vec4 n1 = texelFetch(normalTex,ivec2(coords.x + 1,coords.y),0);
    highp vec4 n2 = texelFetch(normalTex,ivec2(coords.x - 1,coords.y),0);
    highp vec4 n3 = texelFetch(normalTex,ivec2(coords.x,coords.y + 1),0);
    highp vec4 n4 = texelFetch(normalTex,ivec2(coords.x,coords.y - 1),0);
    const highp float angleTh = 0.9;

    highp float a1 = angle(normal,n1);
    highp float a2 = angle(normal,n2);
    highp float a3 = angle(normal,n3);
    highp float a4 = angle(normal,n4);

    highp float d1 = n1.a;
    highp float d2 = n2.a;
    highp float d3 = n3.a;
    highp float d4 = n4.a;

    if(a1 < angleTh || a2 < angleTh || a3 < angleTh || a4 < angleTh) {
      edge = true;
    }
    if(edge) {
      edgeColor = vec4(0.9,0.9,0.9,1);
    } else {
      highp float diff = 0.0;
      if(d1 != 0.0) {
        diff = max(diff,abs(depth - d1));
      }
      if(d2 != 0.0) {
        diff = max(diff,abs(depth - d2));
      }
      if(d3 != 0.0) {
        diff = max(diff,abs(depth - d3));
      }
      if(d4 != 0.0) {
        diff = max(diff,abs(depth - d4));
      }
      if(diff > 1.0) {
        edgeColor = vec4(0.98,0.98,0.98,1);
      }
    }

    mediump vec3 color = vec3(0.85, 0.83, 0.84);
    if (abs(highlightId - texelFetch(IDTex,coords,0).x)<0.5)
    {
      color = vec3(1.0, 0.0, 0.0);
    }
    mediump vec3 ambient = 0.92 * color * ssao(coords);
    mediump float diff = 1.0 - clamp(dot(normal.xyz, -lightDir.xyz),0.0,1.0);
    mediump vec3 diffuse = diff * color;
    mediump vec3 shade = mix(ambient,diffuse,0.15);
    // TODO blend edge color with shading
    highp float alpha = 0.3;
    fragColor = vec4(edgeColor.rgb * alpha + shade * (1.0 - alpha),1);
    // fragColor = vec4(edgeColor.rgb,1);
  }
}