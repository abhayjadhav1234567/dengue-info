// Basic Three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 300);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Create a sphere to represent the virus
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshPhongMaterial({ color: 0xe63946, shininess: 100 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

camera.position.z = 5;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Responsive resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / 300;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, 300);
});
