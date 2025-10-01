// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden style
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 1s ease-out";
});

// 3D Dengue Data Chart using Plotly
function render3DChart() {
  const data = [{
    type: 'scatter3d',
    mode: 'markers+text',
    text: dengueData.map(d => `${d.country}<br>Cases: ${d.cases.toLocaleString()}`),
    textposition: 'top center',
    x: dengueData.map(d => d.lon),   // Longitude
    y: dengueData.map(d => d.lat),   // Latitude
    z: dengueData.map(d => d.cases), // Cases
    marker: {
      size: 10,
      color: dengueData.map(d => d.cases),
      colorscale: 'Reds',
      opacity: 0.8
    }
  }];

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    scene: {
      xaxis: { title: 'Longitude' },
      yaxis: { title: 'Latitude' },
      zaxis: { title: 'Cases' }
    }
  };

  Plotly.newPlot('chart3d', data, layout);
}

// Render chart on load
render3DChart();
