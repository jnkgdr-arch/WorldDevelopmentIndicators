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
    marker: {
  size: countries.map(c => Math.sqrt(c.gdp) * 2.2),
  color: countries.map(c => c.population),
  colorscale: "Portland",
  opacity: 0.86,
  line: {
    color: "rgba(255,255,255,0.95)",
    width: 1.8
  },
  colorbar: {
    title: "Population (M)",
    bgcolor: "rgba(7,17,31,0.72)",
    bordercolor: "rgba(255,255,255,0.22)",
    borderwidth: 1,
    tickfont: { color: "#f4f7fb" },
    titlefont: { color: "#f4f7fb" }
  }
}
  }], { ...chartLayout, title: "GDP bubble size and population color" }, { responsive: true, displayModeBar: false });

  const economicFreedomData = [
  { country: "Bangladesh", flag: "🇧🇩", worldRank: "122", overallScore: 54.7, propertyRights: 36.5, businessFreedom: 53.9, tradeFreedom: 62.2, financialFreedom: 40, perCapitaGDP: 2551.017727 },
  { country: "Cameroon", flag: "🇨🇲", worldRank: "134", overallScore: 52.1, propertyRights: 31.3, businessFreedom: 48.8, tradeFreedom: 57.2, financialFreedom: 50, perCapitaGDP: 1736.860911 },
  { country: "China", flag: "🇨🇳", worldRank: "151", overallScore: 49, propertyRights: 46.7, businessFreedom: 67.7, tradeFreedom: 74, financialFreedom: 20, perCapitaGDP: 12614.06174 },
  { country: "Cuba", flag: "🇨🇺", worldRank: "175", overallScore: 25.4, propertyRights: 29.9, businessFreedom: 42.3, tradeFreedom: 72.8, financialFreedom: 10, perCapitaGDP: 39693.10979 },
  { country: "El Salvador", flag: "🇸🇻", worldRank: "106", overallScore: 56.6, propertyRights: 43.2, businessFreedom: 62.7, tradeFreedom: 70.4, financialFreedom: 60, perCapitaGDP: 5391.069262 },
  { country: "Finland", flag: "🇫🇮", worldRank: "13", overallScore: 77, propertyRights: 100, businessFreedom: 88.3, tradeFreedom: 79.6, financialFreedom: 80, perCapitaGDP: 52925.68976 },
  { country: "Ireland", flag: "🇮🇪", worldRank: "3", overallScore: 83.1, propertyRights: 94.1, businessFreedom: 88.1, tradeFreedom: 79.6, financialFreedom: 70, perCapitaGDP: 103887.8004 },
  { country: "Mexico", flag: "🇲🇽", worldRank: "80", overallScore: 61.3, propertyRights: 41.1, businessFreedom: 71.9, tradeFreedom: 72.2, financialFreedom: 60, perCapitaGDP: 13790.02434 },
  { country: "Nigeria", flag: "🇳🇬", worldRank: "127", overallScore: 53.4, propertyRights: 25.4, businessFreedom: 38.5, tradeFreedom: 67.6, financialFreedom: 40, perCapitaGDP: 1596.636961 },
  { country: "Thailand", flag: "🇹🇭", worldRank: "84", overallScore: 60.6, propertyRights: 45.1, businessFreedom: 70.9, tradeFreedom: 72.4, financialFreedom: 60, perCapitaGDP: 7182.025258 },
  { country: "The Philippines", flag: "🇵🇭", worldRank: "82", overallScore: 60.6, propertyRights: 47.4, businessFreedom: 69.1, tradeFreedom: 79.2, financialFreedom: 60, perCapitaGDP: 3804.87258 },
  { country: "Trinidad and Tobago", flag: "🇹🇹", worldRank: "69", overallScore: 63.6, propertyRights: 58.3, businessFreedom: 72.6, tradeFreedom: 67.6, financialFreedom: 40, perCapitaGDP: 20016.1503 },
  { country: "Ukraine", flag: "🇺🇦", worldRank: "N/A", overallScore: null, propertyRights: 21.5, businessFreedom: null, tradeFreedom: 73.2, financialFreedom: null, perCapitaGDP: 4737.439348 },
  { country: "United States", flag: "🇺🇸", worldRank: "26", overallScore: 70.2, propertyRights: 95.4, businessFreedom: 88.5, tradeFreedom: 75.6, financialFreedom: 80, perCapitaGDP: 82769.41221 },
  { country: "Vietnam", flag: "🇻🇳", worldRank: "61", overallScore: 65.2, propertyRights: 49.9, businessFreedom: 73.9, tradeFreedom: 79.8, financialFreedom: 50, perCapitaGDP: 4282.088517 }
];

const sortedFreedomData = [...economicFreedomData].sort((a, b) => {
  return (b.overallScore ?? -1) - (a.overallScore ?? -1);
});

  const usableFreedomData = economicFreedomData.filter(d => d.overallScore !== null);

function createSunburstChart(chartId, title, rootLabel, valueKey, valueLabel, formatter) {
  Plotly.newPlot(
    chartId,
    [
      {
        type: "sunburst",
        labels: [
          rootLabel,
          ...usableFreedomData.map(d => `${d.flag} ${d.country}`)
        ],
        parents: [
          "",
          ...usableFreedomData.map(() => rootLabel)
        ],
        values: [
          usableFreedomData.reduce((sum, d) => sum + d[valueKey], 0),
          ...usableFreedomData.map(d => d[valueKey])
        ],
        branchvalues: "total",
        customdata: [
          "",
          ...usableFreedomData.map(d => formatter(d))
        ],
        hovertemplate:
          "<b>%{label}</b><br>" +
          valueLabel + ": %{customdata}" +
          "<extra></extra>",
        insidetextorientation: "radial",
        marker: {
          line: {
            color: "rgba(255,255,255,0.85)",
            width: 1
          }
        }
      }
    ],
    {
      title,
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      margin: { t: 58, r: 8, b: 8, l: 8 },
      font: {
        family: "Inter, Arial, sans-serif",
        color: "#1e2a3a"
      },
      hoverlabel: {
        bgcolor: "#1e2a3a",
        bordercolor: "rgba(255,255,255,0.25)",
        font: {
          color: "#ffffff"
        }
      }
    },
    {
      responsive: true,
      displayModeBar: false
    }
  );
}

createSunburstChart(
  "overallScoreSunburst",
  "Overall Economic Freedom Score",
  "Overall Score",
  "overallScore",
  "Score",
  d => d.overallScore
);

createSunburstChart(
  "gdpSunburst",
  "GDP Per Capita",
  "GDP Per Capita",
  "perCapitaGDP",
  "GDP Per Capita",
  d => `$${Math.round(d.perCapitaGDP).toLocaleString()}`
);
const freedomSegments = [
  { key: "propertyRights", label: "Property Rights", color: "#1e4385" },
  { key: "businessFreedom", label: "Business Freedom", color: "#0d9488" },
  { key: "tradeFreedom", label: "Trade Freedom", color: "#f97316" },
  { key: "financialFreedom", label: "Financial Freedom", color: "#8b5cf6" }
];

const freedomLabels = sortedFreedomData.map(d => `${d.flag} ${d.country}`);

Plotly.newPlot(
  "freedomMap",
  freedomSegments.map(segment => ({
    type: "bar",
    orientation: "h",
    name: segment.label,
    y: freedomLabels,
    x: sortedFreedomData.map(d => d[segment.key]),
    text: sortedFreedomData.map(d => d[segment.key] === null ? "" : d[segment.key]),
    texttemplate: "%{text}",
    textposition: "inside",
    insidetextanchor: "middle",
    customdata: sortedFreedomData.map(d => [
      d.overallScore === null ? "N/A" : d.overallScore,
      d.worldRank,
      `$${Math.round(d.perCapitaGDP).toLocaleString()}`
    ]),
    hovertemplate:
      "<b>%{y}</b><br>" +
      segment.label + ": %{x}<br>" +
      "Overall Score: %{customdata[0]}<br>" +
      "World Rank: %{customdata[1]}<br>" +
      "Per Capita GDP: %{customdata[2]}" +
      "<extra></extra>",
    marker: {
      color: segment.color,
      line: {
        color: "rgba(255,255,255,0.85)",
        width: 1
      }
    }
  })),
  {
    title: "Index of Economic Freedom Components, 2025",
    barmode: "stack",
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    margin: { t: 68, r: 36, b: 92, l: 185 },
    font: {
      family: "Inter, Arial, sans-serif",
      color: "#1e2a3a"
    },
    xaxis: {
      title: "Component score total",
      range: [0, 400],
      gridcolor: "rgba(30,42,58,0.12)",
      zeroline: false
    },
    yaxis: {
      autorange: "reversed",
      tickfont: {
        size: 12
      }
    },
    legend: {
      orientation: "h",
      x: 0,
      y: -0.18,
      font: {
        size: 12
      }
    },
    hoverlabel: {
      bgcolor: "#1e2a3a",
      bordercolor: "rgba(255,255,255,0.25)",
      font: {
        color: "#ffffff"
      }
    }
  },
  {
    responsive: true,
    displayModeBar: false
  }
);

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
