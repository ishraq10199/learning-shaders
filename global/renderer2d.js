import * as THREE from "./three.module.min.js";

var container;
var camera, scene, renderer, clock;
var uniforms;

const loadShaders = async (id) => {
  try {
    const fragment = await fetch(`/data/${id}/shader.frag`).then((res) =>
      res.text()
    );
    const fallbackVertex = async () =>
      fetch(`/data/fallback/shader.vert`).then((res) => res.text());
    const vertex = await fetch(`/data/${id}/shader.vert`).then((res) =>
      res.status === 404 ? fallbackVertex() : res.text()
    );
    return { fragment, vertex };
  } catch (err) {
    console.error("Loading shader data with id:", id, "had errors");
    throw err;
  }
};

function init(containerId = "container", fragment, vertex) {
  container = document.getElementById(containerId);
  container.innerHTML = "";

  camera = new THREE.Camera();
  camera.position.z = 1;

  scene = new THREE.Scene();
  clock = new THREE.Clock();

  var geometry = new THREE.PlaneBufferGeometry(2, 2);

  uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() },
  };

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
  });

  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  onWindowResize();
  window.addEventListener("resize", onWindowResize, false);

  document.onmousemove = function (e) {
    uniforms.u_mouse.value.x = e.pageX;
    uniforms.u_mouse.value.y = e.pageY;
  };
}

function onWindowResize(event) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  uniforms.u_time.value += clock.getDelta();
  renderer.render(scene, camera);
}
const load = async (id, containerId) =>
  loadShaders(id, containerId).then(({ fragment, vertex }) => {
    init(containerId, fragment, vertex);
    animate();
  });

export { load };
