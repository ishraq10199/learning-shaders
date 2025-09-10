#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
    float flicker_rate = 8.0;
    float val1 = abs(sin(u_time * flicker_rate));
    float val2 = abs(cos(u_time * flicker_rate));
    float val3 = abs(2.0 * sin(u_time) * flicker_rate);
    gl_FragColor = vec4(val1 / val2, val2 / val3, val3 / val1, 1.0);
}
