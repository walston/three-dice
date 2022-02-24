import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

scene.add(cube);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

setInterval(function () {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}, 8)