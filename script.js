const countries = [
  { name: "Ireland", iso3: "IRL", flag: "🇮🇪", gdp: 545.6, population: 5.3, gdpPerCapita: 102900, freedomScore: 82.0, worldRank: 3, propertyRights: 92.4, businessFreedom: 86.1, tradeFreedom: 79.8, financialFreedom: 70 },
  { name: "Finland", iso3: "FIN", flag: "🇫🇮", gdp: 300.2, population: 5.6, gdpPerCapita: 53600, freedomScore: 78.3, worldRank: 12, propertyRights: 100, businessFreedom: 86.8, tradeFreedom: 79.8, financialFreedom: 80 },
  { name: "United States", iso3: "USA", flag: "🇺🇸", gdp: 27360.9, population: 334.9, gdpPerCapita: 81700, freedomScore: 70.1, worldRank: 25, propertyRights: 88.0, businessFreedom: 83.8, tradeFreedom: 75.2, financialFreedom: 70 },
  { name: "China", iso3: "CHN", flag: "🇨🇳", gdp: 17794.8, population: 1410.7, gdpPerCapita: 12614, freedomScore: 48.5, worldRank: 151, propertyRights: 43.2, businessFreedom: 59.3, tradeFreedom: 73.6, financialFreedom: 20 },
  { name: "Nigeria", iso3: "NGA", flag: "🇳🇬", gdp: 362.8, population: 223.8, gdpPerCapita: 1621, freedomScore: 53.1, worldRank: 126, propertyRights: 30.9, businessFreedom: 56.4, tradeFreedom: 63.6, financialFreedom: 40 },
  { name: "Bangladesh", iso3: "BGD", flag: "🇧🇩", gdp: 437.4, population: 172.9, gdpPerCapita: 2530, freedomScore: 52.9, worldRank: 128, propertyRights: 36.8, businessFreedom: 54.3, tradeFreedom: 63.0, financialFreedom: 30 },
  { name: "Brazil", iso3: "BRA", flag: "🇧🇷", gdp: 2173.7, population: 216.4, gdpPerCapita: 10045, freedomScore: 53.2, worldRank: 124, propertyRights: 49.8, businessFreedom: 57.4, tradeFreedom: 67.8, financialFreedom: 50 },
  { name: "India", iso3: "IND", flag: "🇮🇳", gdp: 3549.9, population: 1428.6, gdpPerCapita: 2485, freedomScore: 52.9, worldRank: 127, propertyRights: 49.6, businessFreedom: 58.0, tradeFreedom: 68.4, financialFreedom: 40 }
];

const chartLayout = {
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  margin: { t: 54, r: 12, b: 12, l: 12 },
  font: {
    family: "Inter, Arial, sans-serif",
    color: "#f4f7fb"
  },
  title: {
    font: {
      color: "#f4f7fb",
      size: 18
    }
  },
  geo: {
    projection: {
      type: "orthographic",
      rotation: {
        lon: -20,
        lat: 12,
        roll: 0
      },
      scale: 0.86
    },
    bgcolor: "rgba(0,0,0,0)",
    showframe: false,

    showland: true,
    landcolor: "rgba(235, 244, 255, 0.92)",

    showocean: true,
    oceancolor: "rgba(7, 17, 31, 0.55)",

    showlakes: true,
    lakecolor: "rgba(113, 224, 255, 0.16)",

    showcoastlines: true,
    coastlinecolor: "rgba(255,255,255,0.7)",
    coastlinewidth: 1.2,

    showcountries: true,
    countrycolor: "rgba(15, 35, 58, 0.65)",
    countrywidth: 0.8,

    lonaxis: {
      showgrid: true,
      gridcolor: "rgba(255,255,255,0.12)",
      gridwidth: 0.7
    },
    lataxis: {
      showgrid: true,
      gridcolor: "rgba(255,255,255,0.12)",
      gridwidth: 0.7
    }
  }
};
function renderTopCountries() {
  const container = document.querySelector("#topCountries");
  countries.slice(0, 3).forEach((country, index) => {
    container.insertAdjacentHTML("beforeend", `
      <article class="country-card">
        <span class="flag" aria-hidden="true">${country.flag}</span>
        <div><strong>#${index + 1} ${country.name}</strong><br><small>World rank ${country.worldRank}</small></div>
        <span class="score">${country.freedomScore}</span>
      </article>
    `);
  });
}

function renderGeoCharts() {
  Plotly.newPlot("gdpPerCapitaMap", [{
    type: "choropleth", locations: countries.map(c => c.iso3), z: countries.map(c => c.gdpPerCapita), text: countries.map(c => `${c.name}: $${c.gdpPerCapita.toLocaleString()}`), colorscale: "Viridis", colorbar: { title: "GDP per capita" }
  }], { ...chartLayout, title: "GDP per capita (current US$ approximation)" }, { responsive: true, displayModeBar: false });

  Plotly.newPlot("gdpPopulationBubble", [{
    type: "scattergeo", mode: "markers+text", locations: countries.map(c => c.iso3), text: countries.map(c => c.name), hovertext: countries.map(c => `${c.name}<br>GDP: $${c.gdp.toLocaleString()}B<br>Population: ${c.population.toLocaleString()}M`),
    marker: { size: countries.map(c => Math.sqrt(c.gdp) * 2.2), color: countries.map(c => c.population), colorscale: "Portland", opacity: 0.78, line: { color: "white", width: 1 }, colorbar: { title: "Population (M)" } }
  }], { ...chartLayout, title: "GDP bubble size and population color" }, { responsive: true, displayModeBar: false });

  Plotly.newPlot("freedomMap", [{
    type: "choropleth", locations: countries.map(c => c.iso3), z: countries.map(c => c.freedomScore), text: countries.map(c => `${c.name}: ${c.freedomScore}`), colorscale: "YlGnBu", zmin: 40, zmax: 90, colorbar: { title: "Score" }
  }], { ...chartLayout, title: "2025 Index of Economic Freedom overall scores" }, { responsive: true, displayModeBar: false });
}

function renderComponentCharts() {
  const grid = document.querySelector("#componentCharts");
  countries.forEach((country, index) => {
    const id = `component-${index}`;
    grid.insertAdjacentHTML("beforeend", `<article class="component-card"><div id="${id}" class="chart"></div></article>`);
    Plotly.newPlot(id, [{
      type: "bar", orientation: "h", x: [country.propertyRights, country.businessFreedom, country.tradeFreedom, country.financialFreedom],
      y: ["Property rights", "Business freedom", "Trade freedom", "Financial freedom"], marker: { color: ["#2563eb", "#0891b2", "#16a34a", "#f59e0b"] }
    }], { title: `${country.flag} ${country.name}`, margin: { t: 46, r: 20, b: 32, l: 118 }, xaxis: { range: [0, 100] }, paper_bgcolor: "rgba(255,255,255,0)", plot_bgcolor: "rgba(255,255,255,0)", font: { family: "Inter, Arial, sans-serif", color: "#122033" } }, { responsive: true, displayModeBar: false });
  });
}

function setupAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".fade-in, .reveal").forEach(el => observer.observe(el));
  requestAnimationFrame(() => document.querySelectorAll(".fade-in").forEach(el => el.classList.add("is-visible")));

  const topButton = document.querySelector(".to-top");
  window.addEventListener("scroll", () => topButton.classList.toggle("show", window.scrollY > 700));
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

window.addEventListener("DOMContentLoaded", () => {
  renderTopCountries();
  renderGeoCharts();
  renderComponentCharts();
  setupAnimations();
});
