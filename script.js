const countries = [
  { name: "Bangladesh", iso3: "BGD", flag: "🇧🇩", lat: 23.7, lon: 90.4, gdp: 437.4, population: 172.9, gdpPerCapita: 2530, freedomScore: 52.9, worldRank: 128, propertyRights: 36.8, businessFreedom: 54.3, tradeFreedom: 63.0, financialFreedom: 30 },
  { name: "Cameroon", iso3: "CMR", flag: "🇨🇲", lat: 7.4, lon: 12.4, gdp: 49.3, population: 28.6, gdpPerCapita: 1724, freedomScore: 51.1, worldRank: 142, propertyRights: 35.6, businessFreedom: 52.8, tradeFreedom: 54.8, financialFreedom: 50 },
  { name: "Finland", iso3: "FIN", flag: "🇫🇮", lat: 61.9, lon: 25.7, gdp: 300.2, population: 5.6, gdpPerCapita: 53600, freedomScore: 78.3, worldRank: 12, propertyRights: 100, businessFreedom: 86.8, tradeFreedom: 79.8, financialFreedom: 80 },
  { name: "Cuba", iso3: "CUB", flag: "🇨🇺", lat: 21.5, lon: -79.5, gdp: 107.4, population: 11.1, gdpPerCapita: 9676, freedomScore: 25.7, worldRank: 176, propertyRights: 20.0, businessFreedom: 20.0, tradeFreedom: 57.4, financialFreedom: 10 },
  { name: "China", iso3: "CHN", flag: "🇨🇳", lat: 35.9, lon: 104.2, gdp: 17794.8, population: 1410.7, gdpPerCapita: 12614, freedomScore: 48.5, worldRank: 151, propertyRights: 43.2, businessFreedom: 59.3, tradeFreedom: 73.6, financialFreedom: 20 },
  { name: "El Salvador", iso3: "SLV", flag: "🇸🇻", lat: 13.8, lon: -88.9, gdp: 34.0, population: 6.3, gdpPerCapita: 5397, freedomScore: 59.6, worldRank: 88, propertyRights: 45.8, businessFreedom: 62.5, tradeFreedom: 72.8, financialFreedom: 60 },
  { name: "Ireland", iso3: "IRL", flag: "🇮🇪", lat: 53.4, lon: -8.2, gdp: 545.6, population: 5.3, gdpPerCapita: 102900, freedomScore: 82.0, worldRank: 3, propertyRights: 92.4, businessFreedom: 86.1, tradeFreedom: 79.8, financialFreedom: 70 },
  { name: "Mexico", iso3: "MEX", flag: "🇲🇽", lat: 23.6, lon: -102.6, gdp: 1789.1, population: 128.5, gdpPerCapita: 13923, freedomScore: 63.7, worldRank: 66, propertyRights: 57.1, businessFreedom: 69.5, tradeFreedom: 78.6, financialFreedom: 60 },
  { name: "Nigeria", iso3: "NGA", flag: "🇳🇬", lat: 9.1, lon: 8.7, gdp: 362.8, population: 223.8, gdpPerCapita: 1621, freedomScore: 53.1, worldRank: 126, propertyRights: 30.9, businessFreedom: 56.4, tradeFreedom: 63.6, financialFreedom: 40 },
  { name: "Philippines", iso3: "PHL", flag: "🇵🇭", lat: 12.9, lon: 121.8, gdp: 437.1, population: 117.3, gdpPerCapita: 3726, freedomScore: 59.1, worldRank: 92, propertyRights: 43.5, businessFreedom: 61.1, tradeFreedom: 74.8, financialFreedom: 60 },
  { name: "Thailand", iso3: "THA", flag: "🇹🇭", lat: 15.9, lon: 101.0, gdp: 514.9, population: 71.8, gdpPerCapita: 7171, freedomScore: 59.0, worldRank: 93, propertyRights: 48.0, businessFreedom: 66.9, tradeFreedom: 71.2, financialFreedom: 60 },
  { name: "Trinidad and Tobago", iso3: "TTO", flag: "🇹🇹", lat: 10.7, lon: -61.2, gdp: 28.1, population: 1.5, gdpPerCapita: 18733, freedomScore: 59.5, worldRank: 89, propertyRights: 50.3, businessFreedom: 60.6, tradeFreedom: 70.0, financialFreedom: 50 },
  { name: "Ukraine", iso3: "UKR", flag: "🇺🇦", lat: 49.0, lon: 31.4, gdp: 178.8, population: 37.0, gdpPerCapita: 4832, freedomScore: 54.3, worldRank: 118, propertyRights: 41.2, businessFreedom: 59.8, tradeFreedom: 73.4, financialFreedom: 30 },
  { name: "United States", iso3: "USA", flag: "🇺🇸", lat: 39.8, lon: -98.6, gdp: 27360.9, population: 334.9, gdpPerCapita: 81700, freedomScore: 70.1, worldRank: 25, propertyRights: 88.0, businessFreedom: 83.8, tradeFreedom: 75.2, financialFreedom: 70 },
  { name: "Viet Nam", iso3: "VNM", flag: "🇻🇳", lat: 14.1, lon: 108.3, gdp: 429.7, population: 98.9, gdpPerCapita: 4345, freedomScore: 62.0, worldRank: 74, propertyRights: 49.8, businessFreedom: 68.2, tradeFreedom: 79.0, financialFreedom: 50 }
];

const darkPlot = "rgba(7, 17, 31, 0.98)";
const chartFont = { family: "Inter, Arial, sans-serif", color: "#f4f7fb" };
const geoBase = { projection: { type: "natural earth" }, bgcolor: darkPlot, showframe: false, showcoastlines: true, coastlinecolor: "#4d6685", showland: true, landcolor: "#132a44", showocean: true, oceancolor: "#07111f", showcountries: true, countrycolor: "#36506d" };
const chartLayout = { paper_bgcolor: darkPlot, plot_bgcolor: darkPlot, margin: { t: 42, r: 10, b: 14, l: 10 }, font: chartFont, geo: geoBase };
const mentionedCountries = countries;
const pulseTraceIndices = {};
const componentMetrics = [
  { key: "propertyRights", label: "Property rights", color: "#2563eb" },
  { key: "businessFreedom", label: "Business freedom", color: "#0891b2" },
  { key: "tradeFreedom", label: "Trade freedom", color: "#16a34a" },
  { key: "financialFreedom", label: "Financial freedom", color: "#f59e0b" }
];

function darkCartesianLayout(title, extra = {}) {
  return { title, paper_bgcolor: darkPlot, plot_bgcolor: darkPlot, font: chartFont, margin: { t: 50, r: 20, b: 44, l: 112 }, xaxis: { gridcolor: "#243a56", zerolinecolor: "#4d6685" }, yaxis: { gridcolor: "#243a56", automargin: true }, ...extra };
}

function pulseTrace() {
  return { type: "scattergeo", mode: "markers", name: "Pulsing country markers", lat: mentionedCountries.map(c => c.lat), lon: mentionedCountries.map(c => c.lon), text: mentionedCountries.map(c => c.name), hoverinfo: "skip", marker: { size: 9, color: "#ffd166", opacity: 0.72, line: { color: "#ffffff", width: 1.5 } }, showlegend: false };
}

function rememberPulse(id, traceIndex) { pulseTraceIndices[id] = traceIndex; }
function renderTopCountries() {
  const container = document.querySelector("#topCountries");
  countries
    .slice()
    .sort((a, b) => b.freedomScore - a.freedomScore)
    .slice(0, 3)
    .forEach((country, index) => {
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
    type: "choropleth", locations: countries.map(c => c.iso3), z: countries.map(c => c.gdpPerCapita), text: countries.map(c => `${c.name}: $${c.gdpPerCapita.toLocaleString()}`), colorscale: "Viridis", colorbar: { title: "GDP per capita", tickfont: { color: "#f4f7fb" }, titlefont: { color: "#f4f7fb" } }
  }, pulseTrace()], { ...chartLayout, title: "GDP per capita for all 15 countries" }, { responsive: true, displayModeBar: false });
  rememberPulse("gdpPerCapitaMap", 1);

  Plotly.newPlot("gdpPopulationHeatMap", [{
    type: "choropleth", locations: countries.map(c => c.iso3), z: countries.map(c => c.gdp), text: countries.map(c => c.name), customdata: countries.map(c => [c.population, c.gdpPerCapita]), colorscale: "Portland", colorbar: { title: "GDP (US$B)", tickfont: { color: "#f4f7fb" }, titlefont: { color: "#f4f7fb" } }, hovertemplate: "%{text}<br>GDP: $%{z:,.1f}B<br>Population: %{customdata[0]:,.1f}M<br>GDP per capita: $%{customdata[1]:,}<extra></extra>"
  }, pulseTrace()], { ...chartLayout, title: "GDP heat map with population context for all 15 countries" }, { responsive: true, displayModeBar: false });
  rememberPulse("gdpPopulationHeatMap", 1);

  Plotly.newPlot("freedomMap", [{
    type: "choropleth", locations: countries.map(c => c.iso3), z: countries.map(c => c.freedomScore), text: countries.map(c => `${c.name}: ${c.freedomScore}`), colorscale: "YlGnBu", zmin: 40, zmax: 90, colorbar: { title: "Score", tickfont: { color: "#f4f7fb" }, titlefont: { color: "#f4f7fb" } }
  }, pulseTrace()], { ...chartLayout, title: "2025 Index of Economic Freedom scores for all 15 countries" }, { responsive: true, displayModeBar: false });
  rememberPulse("freedomMap", 1);

  Plotly.newPlot("freedomRankingChart", [{
    type: "bar", x: countries.map(c => c.freedomScore), y: countries.map(c => c.name), orientation: "h", text: countries.map(c => `Rank ${c.worldRank}`), textposition: "auto", hovertext: countries.map(c => `${c.name}<br>Score: ${c.freedomScore}<br>World rank: ${c.worldRank}`), marker: { color: countries.map(c => c.freedomScore), colorscale: "YlGnBu", line: { color: "#ffd166", width: 1 } }
  }], darkCartesianLayout("Economic freedom score and world rank for all 15 countries", { xaxis: { range: [0, 100], title: "Score", gridcolor: "#243a56" } }), { responsive: true, displayModeBar: false });
}

function renderComponentCharts() {
  const grid = document.querySelector("#componentCharts");
  const snapshotMetrics = [
    { key: "financialFreedom", label: "Financial freedom", color: "#f59e0b", range: [0, 100], axis: "Score" },
    { key: "worldRank", label: "World rank", color: "#71e0ff", range: [0, 185], axis: "Rank (lower is stronger)" },
    { key: "freedomScore", label: "Freedom score", color: "#91f2b3", range: [0, 100], axis: "Score" }
  ];

  snapshotMetrics.forEach(metric => {
    const id = `snapshot-${metric.key}`;
    grid.insertAdjacentHTML("beforeend", `<article class="chart-wrap snapshot-chart"><div id="${id}" class="chart"></div></article>`);
    Plotly.newPlot(id, [{
      type: "bar",
      x: countries.map(c => c.name),
      y: countries.map(c => c[metric.key]),
      marker: { color: metric.color, line: { color: "rgba(255,255,255,0.55)", width: 1 } },
      hovertemplate: `%{x}<br>${metric.label}: %{y}<extra></extra>`
    }], darkCartesianLayout(`${metric.label}: all 15 countries`, {
      margin: { t: 48, r: 14, b: 112, l: 52 },
      yaxis: { range: metric.range, title: metric.axis, gridcolor: "#243a56" },
      xaxis: { tickangle: -42, gridcolor: "#243a56" }
    }), { responsive: true, displayModeBar: false });
  });
}

function renderIndexComparisonCharts() {
  const grid = document.querySelector("#indexComparisonCharts");
  componentMetrics.forEach(metric => {
    const id = `${metric.key}Comparison`;
    grid.insertAdjacentHTML("beforeend", `<article class="chart-wrap compact-chart"><div id="${id}" class="chart"></div></article>`);
    Plotly.newPlot(id, [{ type: "bar", x: countries.map(c => c.name), y: countries.map(c => c[metric.key]), marker: { color: metric.color, line: { color: "#ffd166", width: 1 } }, hovertemplate: `%{x}<br>${metric.label}: %{y}<extra></extra>` }], darkCartesianLayout(`${metric.label}: all 15 countries`, { margin: { t: 48, r: 14, b: 112, l: 48 }, yaxis: { range: [0, 100], title: "Score", gridcolor: "#243a56" }, xaxis: { tickangle: -42, gridcolor: "#243a56" } }), { responsive: true, displayModeBar: false });
  });

  const topThree = countries.slice().sort((a, b) => b.freedomScore - a.freedomScore).slice(0, 3);
  const topThreeMetrics = [
    { key: "worldRank", label: "World rank" },
    { key: "freedomScore", label: "Freedom score" },
    { key: "financialFreedom", label: "Financial freedom" }
  ];
  const topThreeColors = ["#ffd166", "#71e0ff", "#91f2b3"];
  Plotly.newPlot("topThreeStacked", topThree.map((country, index) => ({
    type: "bar",
    orientation: "h",
    name: country.name,
    x: topThreeMetrics.map(metric => country[metric.key]),
    y: topThreeMetrics.map(metric => metric.label),
    marker: { color: topThreeColors[index], line: { color: "#ffffff", width: 1 } },
    hovertemplate: `${country.name}<br>%{y}: %{x}<extra></extra>`
  })), darkCartesianLayout("Top-three side-by-side index comparison", {
    barmode: "group",
    margin: { t: 50, r: 24, b: 56, l: 140 },
    xaxis: { title: "Index value / rank", gridcolor: "#243a56", zerolinecolor: "#4d6685" },
    yaxis: { automargin: true, gridcolor: "#243a56" },
    legend: { orientation: "h", y: -0.18, font: { color: "#f4f7fb" } }
  }), { responsive: true, displayModeBar: false });
}

function setupAnimations() {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }); }, { threshold: 0.14 });
  document.querySelectorAll(".fade-in, .reveal").forEach(el => observer.observe(el));
  requestAnimationFrame(() => document.querySelectorAll(".fade-in").forEach(el => el.classList.add("is-visible")));

  const topButton = document.querySelector(".to-top");
  window.addEventListener("scroll", () => topButton.classList.toggle("show", window.scrollY > 700));
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const resizeObserver = new ResizeObserver(entries => { entries.forEach(entry => Plotly.Plots.resize(entry.target)); });
  document.querySelectorAll(".chart").forEach(chart => resizeObserver.observe(chart));
}

function startPulseAnimation() {
  let expanded = false;
  window.setInterval(() => {
    expanded = !expanded;
    Object.entries(pulseTraceIndices).forEach(([id, traceIndex]) => {
      Plotly.restyle(id, { "marker.size": expanded ? 16 : 9, "marker.opacity": expanded ? 0.22 : 0.78 }, [traceIndex]);
    });
  }, 950);
}

window.addEventListener("DOMContentLoaded", () => {
  renderTopCountries();
  renderGeoCharts();
  renderIndexComparisonCharts();
  renderComponentCharts();
  setupAnimations();
  startPulseAnimation();
});
