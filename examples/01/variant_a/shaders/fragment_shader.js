const fragment = `


uniform float u_time;

void main() {
    float val = abs(sin(u_time));
    gl_FragColor = vec4(val, 0.0, val, 1.0);
}

`;

export default fragment;
