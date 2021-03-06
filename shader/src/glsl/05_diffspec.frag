
//Chi-Wen Cheng, cc59884
uniform vec4 LMa; // Light-Material ambient
uniform vec4 LMd; // Light-Material diffuse
uniform vec4 LMs; // Light-Material specular
uniform float shininess;

uniform sampler2D normalMap;
uniform sampler2D decal;
uniform sampler2D heightField;
uniform samplerCube envmap;

uniform mat3 objectToWorld;

varying vec2 normalMapTexCoord;
varying vec3 lightDirection;
varying vec3 eyeDirection;
varying vec3 halfAngle;
varying vec3 c0, c1, c2;

void main()
{
	float diffuse_term = max(0.0,normalize(lightDirection).z);
	float spec_term = max(dot(vec3(0.0,0.0,1.0),normalize(halfAngle)),0.0);
	gl_FragColor = LMa + LMd * diffuse_term + LMs * pow(spec_term,shininess);
}
