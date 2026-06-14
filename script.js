const macroCountries = [
  { name: "Ireland", iso3: "IRL", flag: "🇮🇪", gdp: 545.6, population: 5.3, gdpPerCapita: 102900 },
  { name: "Finland", iso3: "FIN", flag: "🇫🇮", gdp: 300.2, population: 5.6, gdpPerCapita: 53600 },
  { name: "United States", iso3: "USA", flag: "🇺🇸", gdp: 27360.9, population: 334.9, gdpPerCapita: 81700 },
  { name: "China", iso3: "CHN", flag: "🇨🇳", gdp: 17794.8, population: 1410.7, gdpPerCapita: 12614 },
  { name: "Nigeria", iso3: "NGA", flag: "🇳🇬", gdp: 362.8, population: 223.8, gdpPerCapita: 1621 },
  { name: "Bangladesh", iso3: "BGD", flag: "🇧🇩", gdp: 437.4, population: 172.9, gdpPerCapita: 2530 },
  { name: "Brazil", iso3: "BRA", flag: "🇧🇷", gdp: 2173.7, population: 216.4, gdpPerCapita: 10045 },
  { name: "India", iso3: "IND", flag: "🇮🇳", gdp: 3549.9, population: 1428.6, gdpPerCapita: 2485 }
];

const economicFreedomData = [
  { country: "Bangladesh", iso3: "BGD", flag: "🇧🇩", worldRank: "122", overallScore: 54.7, propertyRights: 36.5, businessFreedom: 53.9, tradeFreedom: 62.2, financialFreedom: 40, perCapitaGDP: 2551.017727 },
  { country: "Cameroon", iso3: "CMR", flag: "🇨🇲", worldRank: "134", overallScore: 52.1, propertyRights: 31.3, businessFreedom: 48.8, tradeFreedom: 57.2, financialFreedom: 50, perCapitaGDP: 1736.860911 },
  { country: "China", iso3: "CHN", flag: "🇨🇳", worldRank: "151", overallScore: 49, propertyRights: 46.7, businessFreedom: 67.7, tradeFreedom: 74, financialFreedom: 20, perCapitaGDP: 12614.06174 },
  { country: "Cuba", iso3: "CUB", flag: "🇨🇺", worldRank: "175", overallScore: 25.4, propertyRights: 29.9, businessFreedom: 42.3, tradeFreedom: 72.8, financialFreedom: 10, perCapitaGDP: 39693.10979 },
  { country: "El Salvador", iso3: "SLV", flag: "🇸🇻", worldRank: "106", overallScore: 56.6, propertyRights: 43.2, businessFreedom: 62.7, tradeFreedom: 70.4, financialFreedom: 60, perCapitaGDP: 5391.069262 },
  { country: "Finland", iso3: "FIN", flag: "🇫🇮", worldRank: "13", overallScore: 77, propertyRights: 100, businessFreedom: 88.3, tradeFreedom: 79.6, financialFreedom: 80, perCapitaGDP: 52925.68976 },
  { country: "Ireland", iso3: "IRL", flag: "🇮🇪", worldRank: "3", overallScore: 83.1, propertyRights: 94.1, businessFreedom: 88.1, tradeFreedom: 79.6, financialFreedom: 70, perCapitaGDP: 103887.8004 },
  { country: "Mexico", iso3: "MEX", flag: "🇲🇽", worldRank: "80", overallScore: 61.3, propertyRights: 41.1, businessFreedom: 71.9, tradeFreedom: 72.2, financialFreedom: 60, perCapitaGDP: 13790.02434 },
  { country: "Nigeria", iso3: "NGA", flag: "🇳🇬", worldRank: "127", overallScore: 53.4, propertyRights: 25.4, businessFreedom: 38.5, tradeFreedom: 67.6, financialFreedom: 40, perCapitaGDP: 1596.636961 },
  { country: "Thailand", iso3: "THA", flag: "🇹🇭", worldRank: "84", overallScore: 60.6, propertyRights: 45.1, businessFreedom: 70.9, tradeFreedom: 72.4, financialFreedom: 60, perCapitaGDP: 7182.025258 },
  { country: "The Philippines", iso3: "PHL", flag: "🇵🇭", worldRank: "82", overallScore: 60.6, propertyRights: 47.4, businessFreedom: 69.1, tradeFreedom: 79.2, financialFreedom: 60, perCapitaGDP: 3804.87258 },
  { country: "Trinidad and Tobago", iso3: "TTO", flag: "🇹🇹", worldRank: "69", overallScore: 63.6, propertyRights: 58.3, businessFreedom: 72.6, tradeFreedom: 67.6, financialFreedom: 40, perCapitaGDP: 20016.1503 },
  { country: "Ukraine", iso3: "UKR", flag: "🇺🇦", worldRank: "N/A", overallScore: null, propertyRights: 21.5, businessFreedom: null, tradeFreedom: 73.2, financialFreedom: null, perCapitaGDP: 4737.439348 },
  { country: "United States", iso3: "USA", flag: "🇺🇸", worldRank: "26", overallScore: 70.2, propertyRights: 95.4, businessFreedom: 88.5, tradeFreedom: 75.6, financialFreedom: 80, perCapitaGDP: 82769.41221 },
  { country: "Vietnam", iso3: "VNM", flag: "🇻🇳", worldRank: "61", overallScore: 65.2, propertyRights: 49.9, businessFreedom: 73.9, tradeFreedom: 79.8, financialFreedom: 50, perCapitaGDP: 4282.088517 }
];

const iso3ToIso2 = {
  BGD: "bd",
  CMR: "cm",
  CHN: "cn",
  CUB: "cu",
  SLV: "sv",
  FIN: "fi",
  IRL: "ie",
  MEX: "mx",
  NGA: "ng",
  THA: "th",
  PHL: "ph",
  TTO: "tt",
  UKR: "ua",
  USA: "us",
  VNM: "vn"
};

function flagImages(data, xPosition, xSize) {
  return data.map(country => ({
    source: `https://flagcdn.com/w40/${iso3ToIso2[country.iso3]}.png`,
    xref: "x",
    yref: "y",
    x: xPosition,
    y: country.country,
    sizex: xSize,
    sizey: 0.42,
    xanchor: "center",
    yanchor: "middle",
    layer: "above"
  }));
}

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
      type: "natural earth",
      scale: 1
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
  if (!container) return;

  const topThree = economicFreedomData
    .filter(country => country.overallScore !== null)
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 3);

  container.innerHTML = "";

  topThree.forEach((country, index) => {
    container.insertAdjacentHTML("beforeend", `
      <article class="country-card">
        <span class="flag" aria-hidden="true">${country.flag}</span>
        <div>
          <strong>#${index + 1} ${country.country}</strong><br>
          <small>World rank ${country.worldRank}</small>
        </div>
        <span class="score">${country.overallScore}</span>
      </article>
    `);
  });
}

function renderGeoCharts() {
  Plotly.newPlot(
    "gdpPerCapitaMap",
    [
      {
        type: "choropleth",
        locations: economicFreedomData.map(country => country.iso3),
        z: economicFreedomData.map(country => country.perCapitaGDP),
        text: economicFreedomData.map(country =>
          `${country.flag} ${country.country}: $${Math.round(country.perCapitaGDP).toLocaleString()}`
        ),
        colorscale: "Viridis",
        colorbar: {
          title: "GDP per capita",
          tickprefix: "$",
          tickfont: { color: "#f4f7fb" },
          titlefont: { color: "#f4f7fb" }
        },
        marker: {
          line: {
            color: "rgba(255,255,255,0.7)",
            width: 0.8
          }
        },
        hovertemplate: "%{text}<extra></extra>"
      }
    ],
    {
      ...chartLayout,
      title: "GDP per capita across selected countries"
    },
    {
      responsive: true,
      displayModeBar: false
    }
  );

  Plotly.newPlot(
    "gdpPopulationHeatMap",
    [
      {
        type: "choropleth",
        locations: macroCountries.map(country => country.iso3),
        z: macroCountries.map(country => country.gdp),
        text: macroCountries.map(country =>
          `${country.flag} ${country.name}<br>` +
          `GDP: $${country.gdp.toLocaleString()}B<br>` +
          `Population: ${country.population.toLocaleString()}M<br>` +
          `GDP per capita: $${country.gdpPerCapita.toLocaleString()}`
        ),
        colorscale: "YlOrRd",
        colorbar: {
          title: "GDP, billions",
          tickprefix: "$",
          ticksuffix: "B",
          bgcolor: "rgba(7,17,31,0.72)",
          bordercolor: "rgba(255,255,255,0.22)",
          borderwidth: 1,
          tickfont: { color: "#f4f7fb" },
          titlefont: { color: "#f4f7fb" }
        },
        hovertemplate: "%{text}<extra></extra>",
        marker: {
          line: {
            color: "rgba(255,255,255,0.7)",
            width: 0.8
          }
        }
      }
    ],
    {
      ...chartLayout,
      title: "GDP heat map with population context"
    },
    {
      responsive: true,
      displayModeBar: false
    }
  );
}

function renderEconomicFreedomCharts() {
  const usableFreedomData = economicFreedomData.filter(country => country.overallScore !== null);

  renderOverallScoreBar(usableFreedomData);
  renderWorldRankBar();
  renderGDPPerCapitaBar();
}

function renderOverallScoreBar(data) {
  const chart = document.querySelector("#overallScoreBar");
  if (!chart) return;

  const rankedByScore = [...data].sort((a, b) => b.overallScore - a.overallScore);

  Plotly.newPlot(
    "overallScoreBar",
    [
      {
        type: "bar",
        orientation: "h",
        y: rankedByScore.map(country => country.country),
        x: rankedByScore.map(country => country.overallScore),
        text: rankedByScore.map(country => country.overallScore),
        texttemplate: "%{text}",
        textposition: "auto",
        marker: { color: "#1e4385" },
        hovertemplate:
          "<b>%{y}</b><br>" +
          "Overall Score: %{x}<extra></extra>"
      }
    ],
    {
      title: "Overall Score",
      images: flagImages(rankedByScore, -7, 5),
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      margin: { t: 58, r: 24, b: 48, l: 175 },
      font: { family: "Inter, Arial, sans-serif", color: "#ffffff" },
      xaxis: {
        range: [-15, 100],
        gridcolor: "rgba(30,42,58,0.12)",
        zeroline: false
      },
      yaxis: {
        autorange: "reversed",
        tickfont: { size: 12,  color: "#ffffff" },
        automargin: true
      }
    },
    { responsive: true, displayModeBar: false }
  );
}

function renderWorldRankBar() {
  const chart = document.querySelector("#worldRankBar");
  if (!chart) return;

  const rankedByWorldRank = economicFreedomData
    .filter(country => country.worldRank !== "N/A")
    .map(country => ({
      ...country,
      rankStrength: 176 - Number(country.worldRank)
    }))
    .sort((a, b) => b.rankStrength - a.rankStrength);

  Plotly.newPlot(
    "worldRankBar",
    [
      {
        type: "bar",
        orientation: "h",
        y: rankedByWorldRank.map(country => country.country),
        x: rankedByWorldRank.map(country => country.rankStrength),
        text: rankedByWorldRank.map(country => `#${country.worldRank}`),
        texttemplate: "%{text}",
        textposition: "auto",
        marker: { color: "#0d9488" },
        hovertemplate:
          "<b>%{y}</b><br>" +
          "World Rank: %{text}<br>" +
          "Rank strength: %{x}" +
          "<extra></extra>"
      }
    ],
    {
      title: "World Rank Strength",
      images: flagImages(rankedByWorldRank, -12, 9),
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      margin: { t: 58, r: 24, b: 48, l: 175 },
      font: { family: "Inter, Arial, sans-serif", color: "#ffffff" },
      xaxis: {
        range: [-25, 185],
        title: "Lower rank = stronger",
        gridcolor: "rgba(30,42,58,0.12)",
        zeroline: false
      },
      yaxis: {
        autorange: "reversed",
        tickfont: { size: 12,  color: "#ffffff" },
        automargin: true
      }
    },
    { responsive: true, displayModeBar: false }
  );
}

function renderGDPPerCapitaBar() {
  const chart = document.querySelector("#gdpPerCapitaBar");
  if (!chart) return;

  const rankedByGDP = [...economicFreedomData].sort((a, b) => b.perCapitaGDP - a.perCapitaGDP);
  const maxGDP = Math.max(...rankedByGDP.map(country => country.perCapitaGDP));

  Plotly.newPlot(
    "gdpPerCapitaBar",
    [
      {
        type: "bar",
        orientation: "h",
        y: rankedByGDP.map(country => country.country),
        x: rankedByGDP.map(country => country.perCapitaGDP),
        text: rankedByGDP.map(country => `$${Math.round(country.perCapitaGDP).toLocaleString()}`),
        texttemplate: "%{text}",
        textposition: "auto",
        marker: { color: "#f97316" },
        hovertemplate:
          "<b>%{y}</b><br>" +
          "GDP Per Capita: $%{x:,.0f}<extra></extra>"
      }
    ],
    {
      title: "GDP Per Capita",
      images: flagImages(rankedByGDP, -maxGDP * 0.08, maxGDP * 0.055),
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      margin: { t: 58, r: 24, b: 48, l: 175 },
      font: { family: "Inter, Arial, sans-serif", color: "#ffffff" },
      xaxis: {
        range: [-maxGDP * 0.16, maxGDP * 1.08],
        tickprefix: "$",
        gridcolor: "rgba(30,42,58,0.12)",
        zeroline: false
      },
      yaxis: {
        autorange: "reversed",
        tickfont: { size: 12,  color: "#ffffff" },
        automargin: true
      }
    },
    { responsive: true, displayModeBar: false }
  );
}

function renderComponentCharts() {
  const chartElement = document.querySelector("#componentCharts");
  if (!chartElement) return;

  const componentData = [...economicFreedomData].sort((a, b) => {
    return (b.overallScore ?? -1) - (a.overallScore ?? -1);
  });

  const freedomSegments = [
    { key: "propertyRights", label: "Property Rights", color: "#1e4385" },
    { key: "businessFreedom", label: "Business Freedom", color: "#0d9488" },
    { key: "tradeFreedom", label: "Trade Freedom", color: "#f97316" },
    { key: "financialFreedom", label: "Financial Freedom", color: "#8b5cf6" }
  ];

  Plotly.newPlot(
    "componentCharts",
    freedomSegments.map(segment => ({
      type: "bar",
      orientation: "h",
      name: segment.label,
      y: componentData.map(country => `${country.flag} ${country.country}`),
      x: componentData.map(country => country[segment.key] ?? 0),
      text: componentData.map(country => country[segment.key] === null ? "" : country[segment.key]),
      texttemplate: "%{text}",
      textposition: "inside",
      insidetextanchor: "middle",
      customdata: componentData.map(country => [
        country.overallScore === null ? "N/A" : country.overallScore,
        country.worldRank,
        `$${Math.round(country.perCapitaGDP).toLocaleString()}`,
        country[segment.key] === null ? "N/A" : country[segment.key]
      ]),
      hovertemplate:
        "<b>%{y}</b><br>" +
        segment.label + ": %{customdata[3]}<br>" +
        "Overall Score: %{customdata[0]}<br>" +
        "World Rank: %{customdata[1]}<br>" +
        "GDP Per Capita: %{customdata[2]}" +
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
      title: "Economic Freedom Component Breakdown, 2025",
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      margin: { t: 68, r: 36, b: 92, l: 190 },
      font: {
        family: "Inter, Arial, sans-serif",
        color: "#ffffff"
      },
      xaxis: {
        title: "Combined component score",
        range: [0, 400],
        gridcolor: "rgba(30,42,58,0.12)",
        zeroline: false
      },
      yaxis: {
        autorange: "reversed",
        tickfont: { size: 12,  color: "#ffffff" }
      },
      legend: {
        orientation: "h",
        x: 0,
        y: -0.18,
        font: { size: 12,  color: "#ffffff" }
      },
      hoverlabel: {
        bgcolor: "#1e2a3a",
        bordercolor: "rgba(255,255,255,0.25)",
        font: { color: "#ffffff" }
      }
    },
    {
      responsive: true,
      displayModeBar: false
    }
  );
}

function setupAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".fade-in, .reveal").forEach(element => observer.observe(element));

  requestAnimationFrame(() => {
    document.querySelectorAll(".fade-in").forEach(element => element.classList.add("is-visible"));
  });

  const topButton = document.querySelector(".to-top");

  if (topButton) {
    window.addEventListener("scroll", () => {
      topButton.classList.toggle("show", window.scrollY > 700);
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("resize", () => {
    [
      "gdpPerCapitaMap",
      "gdpPopulationHeatMap",
      "overallScoreBar",
      "worldRankBar",
      "gdpPerCapitaBar",
      "componentCharts"
    ].forEach(id => {
      const element = document.getElementById(id);
      if (element) Plotly.Plots.resize(element);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderTopCountries();
  renderGeoCharts();
  renderEconomicFreedomCharts();
  renderComponentCharts();
  setupAnimations();
});
