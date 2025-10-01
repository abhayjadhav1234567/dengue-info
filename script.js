// Smooth scrolling nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3D Rotating Globe with dengue hotspots
function initGlobe() {
  const globe = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

  // Plot dengue cases
  globe
    .pointsData(dengueData)
    .pointLat(d => d.lat)
    .pointLng(d => d.lon)
    .pointAltitude(d => d.cases / 2000000) // bubble height
    .pointColor(() => 'red')
    .pointRadius(d => Math.sqrt(d.cases) / 200); // bubble size

  // Auto rotate
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.8;
}

// Init after load
window.addEventListener("load", initGlobe);
