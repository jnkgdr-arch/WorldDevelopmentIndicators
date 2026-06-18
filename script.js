const countries = [
  { name: "Ireland", iso3: "IRL", flag: "🇮🇪", lat: 53.4, lon: -8.2, gdp: 545.6, population: 5.3, gdpPerCapita: 102900, freedomScore: 82.0, worldRank: 3, propertyRights: 92.4, businessFreedom: 86.1, tradeFreedom: 79.8, financialFreedom: 70 },
  { name: "Finland", iso3: "FIN", flag: "🇫🇮", lat: 61.9, lon: 25.7, gdp: 300.2, population: 5.6, gdpPerCapita: 53600, freedomScore: 78.3, worldRank: 12, propertyRights: 100, businessFreedom: 86.8, tradeFreedom: 79.8, financialFreedom: 80 },
  { name: "United States", iso3: "USA", flag: "🇺🇸", lat: 39.8, lon: -98.6, gdp: 27360.9, population: 334.9, gdpPerCapita: 81700, freedomScore: 70.1, worldRank: 25, propertyRights: 88.0, businessFreedom: 83.8, tradeFreedom: 75.2, financialFreedom: 70 },
  { name: "China", iso3: "CHN", flag: "🇨🇳", lat: 35.9, lon: 104.2, gdp: 17794.8, population: 1410.7, gdpPerCapita: 12614, freedomScore: 48.5, worldRank: 151, propertyRights: 43.2, businessFreedom: 59.3, tradeFreedom: 73.6, financialFreedom: 20 },
  { name: "Nigeria", iso3: "NGA", flag: "🇳🇬", lat: 9.1, lon: 8.7, gdp: 362.8, population: 223.8, gdpPerCapita: 1621, freedomScore: 53.1, worldRank: 126, propertyRights: 30.9, businessFreedom: 56.4, tradeFreedom: 63.6, financialFreedom: 40 },
  { name: "Bangladesh", iso3: "BGD", flag: "🇧🇩", lat: 23.7, lon: 90.4, gdp: 437.4, population: 172.9, gdpPerCapita: 2530, freedomScore: 52.9, worldRank: 128, propertyRights: 36.8, businessFreedom: 54.3, tradeFreedom: 63.0, financialFreedom: 30 },
  { name: "Brazil", iso3: "BRA", flag: "🇧🇷", lat: -14.2, lon: -51.9, gdp: 2173.7, population: 216.4, gdpPerCapita: 10045, freedomScore: 53.2, worldRank: 124, propertyRights: 49.8, businessFreedom: 57.4, tradeFreedom: 67.8, financialFreedom: 50 },
  { name: "India", iso3: "IND", flag: "🇮🇳", lat: 20.6, lon: 78.9, gdp: 3549.9, population: 1428.6, gdpPerCapita: 2485, freedomScore: 52.9, worldRank: 127, propertyRights: 49.6, businessFreedom: 58.0, tradeFreedom: 68.4, financialFreedom: 40 },
  { name: "Germany", iso3: "DEU", flag: "🇩🇪", lat: 51.2, lon: 10.5, gdp: 4456.1, population: 84.5, gdpPerCapita: 52730, freedomScore: 72.5, worldRank: 22, propertyRights: 95.0, businessFreedom: 82.7, tradeFreedom: 79.8, financialFreedom: 70 },
  { name: "Japan", iso3: "JPN", flag: "🇯🇵", lat: 36.2, lon: 138.3, gdp: 4212.9, population: 124.5, gdpPerCapita: 33839, freedomScore: 67.3, worldRank: 38, propertyRights: 87.5, businessFreedom: 78.9, tradeFreedom: 74.6, financialFreedom: 60 },
  { name: "United Kingdom", iso3: "GBR", flag: "🇬🇧", lat: 55.4, lon: -3.4, gdp: 3340.0, population: 68.4, gdpPerCapita: 48830, freedomScore: 68.6, worldRank: 30, propertyRights: 92.9, businessFreedom: 79.4, tradeFreedom: 78.4, financialFreedom: 70 },
  { name: "Canada", iso3: "CAN", flag: "🇨🇦", lat: 56.1, lon: -106.3, gdp: 2140.1, population: 40.1, gdpPerCapita: 53370, freedomScore: 72.4, worldRank: 23, propertyRights: 94.2, businessFreedom: 81.5, tradeFreedom: 78.2, financialFreedom: 80 },
  { name: "Australia", iso3: "AUS", flag: "🇦🇺", lat: -25.3, lon: 133.8, gdp: 1723.8, population: 26.6, gdpPerCapita: 64805, freedomScore: 77.8, worldRank: 13, propertyRights: 96.2, businessFreedom: 84.5, tradeFreedom: 81.0, financialFreedom: 90 },
  { name: "Mexico", iso3: "MEX", flag: "🇲🇽", lat: 23.6, lon: -102.6, gdp: 1789.1, population: 128.5, gdpPerCapita: 13923, freedomScore: 63.7, worldRank: 66, propertyRights: 57.1, businessFreedom: 69.5, tradeFreedom: 78.6, financialFreedom: 60 },
  { name: "South Africa", iso3: "ZAF", flag: "🇿🇦", lat: -30.6, lon: 22.9, gdp: 377.8, population: 60.4, gdpPerCapita: 6255, freedomScore: 55.3, worldRank: 112, propertyRights: 54.8, businessFreedom: 61.1, tradeFreedom: 72.4, financialFreedom: 50 }
];

const darkPlot = "rgba(7, 17, 31, 0.98)";
const chartFont = { family: "Inter, Arial, sans-serif", color: "#f4f7fb" };
const geoBase = { projection: { type: "natural earth" }, bgcolor: darkPlot, showframe: false, showcoastlines: true, coastlinecolor: "#4d6685", showland: true, landcolor: "#132a44", showocean: true, oceancolor: "#07111f", showcountries: true, countrycolor: "#36506d" };
const chartLayout = { paper_bgcolor: darkPlot, plot_bgcolor: darkPlot, margin: { t: 42, r: 10, b: 14, l: 10 }, font: chartFont, geo: geoBase };
const mentionedCountries = countries;
const pulseTraceIndices = {};
const pulseBarIds = [];
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
function rememberPulseBar(id) { pulseBarIds.push(id); }

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
  rememberPulseBar("freedomRankingChart");
}

function renderComponentCharts() {
  const grid = document.querySelector("#componentCharts");
  countries.forEach((country, index) => {
    const id = `component-${index}`;
    grid.insertAdjacentHTML("beforeend", `
      <article class="component-card">
        <div class="component-summary">
          <span class="flag" aria-hidden="true">${country.flag}</span>
          <div>
            <h3>${country.name}</h3>
            <p>GDP $${country.gdp.toLocaleString()}B • Population ${country.population.toLocaleString()}M • GDP per capita $${country.gdpPerCapita.toLocaleString()}</p>
          </div>
          <div class="metric-row" aria-label="${country.name} economic freedom summary">
            <span class="metric-pill"><strong>${country.freedomScore}</strong>Freedom score</span>
            <span class="metric-pill"><strong>#${country.worldRank}</strong>World rank</span>
            <span class="metric-pill"><strong>${country.financialFreedom}</strong>Financial freedom</span>
          </div>
        </div>
        <div id="${id}" class="chart"></div>
      </article>`);
    Plotly.newPlot(id, [{ type: "bar", orientation: "h", x: componentMetrics.map(m => country[m.key]), y: componentMetrics.map(m => m.label), marker: { color: componentMetrics.map(m => m.color), line: { color: "#ffd166", width: 1 } } }], darkCartesianLayout(`${country.flag} ${country.name} component scores`, { margin: { t: 38, r: 16, b: 28, l: 112 }, xaxis: { range: [0, 100], gridcolor: "#243a56" } }), { responsive: true, displayModeBar: false });
    rememberPulseBar(id);
  });
}

function renderIndexComparisonCharts() {
  const grid = document.querySelector("#indexComparisonCharts");
  componentMetrics.forEach(metric => {
    const id = `${metric.key}Comparison`;
    grid.insertAdjacentHTML("beforeend", `<article class="chart-wrap compact-chart"><div id="${id}" class="chart"></div></article>`);
    Plotly.newPlot(id, [{ type: "bar", x: countries.map(c => c.name), y: countries.map(c => c[metric.key]), marker: { color: metric.color, line: { color: "#ffd166", width: 1 } }, hovertemplate: `%{x}<br>${metric.label}: %{y}<extra></extra>` }], darkCartesianLayout(`${metric.label}: all 15 countries`, { margin: { t: 48, r: 14, b: 112, l: 48 }, yaxis: { range: [0, 100], title: "Score", gridcolor: "#243a56" }, xaxis: { tickangle: -42, gridcolor: "#243a56" } }), { responsive: true, displayModeBar: false });
    rememberPulseBar(id);
  });

  const topThree = countries.slice(0, 3);
  Plotly.newPlot("topThreeStacked", [
    { type: "bar", name: "World rank", x: topThree.map(c => c.name), y: topThree.map(c => c.worldRank), marker: { color: "#ffd166", line: { color: "#ffffff", width: 1 } } },
    { type: "bar", name: "Freedom score", x: topThree.map(c => c.name), y: topThree.map(c => c.freedomScore), marker: { color: "#71e0ff", line: { color: "#ffffff", width: 1 } } },
    { type: "bar", name: "Financial freedom", x: topThree.map(c => c.name), y: topThree.map(c => c.financialFreedom), marker: { color: "#91f2b3", line: { color: "#ffffff", width: 1 } } }
  ], darkCartesianLayout("Top-three stacked comparison", { barmode: "stack", margin: { t: 50, r: 20, b: 52, l: 56 }, yaxis: { title: "Combined index values", gridcolor: "#243a56" }, legend: { orientation: "h", y: -0.2, font: { color: "#f4f7fb" } } }), { responsive: true, displayModeBar: false });
  rememberPulseBar("topThreeStacked");
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
    pulseBarIds.forEach(id => {
      Plotly.restyle(id, { "marker.line.width": expanded ? 3 : 1, "marker.line.color": expanded ? "#ffffff" : "#ffd166" });
    });
    document.querySelectorAll(".component-card").forEach((card, index) => card.classList.toggle("pulse-highlight", expanded && index < countries.length));
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
