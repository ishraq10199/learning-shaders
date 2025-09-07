const fragment = `

uniform float u_time;

void main() {
    float flicker_rate = 8.0;
    float val = abs(sin(u_time * flicker_rate));
    gl_FragColor = vec4(val, 0.0, val, 1.0);
}

`;

export default fragment;
