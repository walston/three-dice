import {
  BoxGeometry,
  Light,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
const geometry = new BoxGeometry();
const material = new MeshPhongMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
const light = new Light();

scene.add(cube);
scene.add(light);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 15;
light.position.z = 18;

document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

setInterval(function () {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}, 8);
