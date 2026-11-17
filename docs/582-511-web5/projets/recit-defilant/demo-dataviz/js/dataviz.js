// =========================================================
// dataviz.js : deux moments dataviz au défilement
// 1. On attend que le moment approche de l'écran (IntersectionObserver).
// 2. On charge les données réelles (fetch).
// 3. On construit la forme (chiffre, points, barres).
// 4. On ajoute la classe .est-visible : le CSS fait l'animation.
// =========================================================

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------------------------------------------------
// Outil : lancer une fonction une seule fois, quand un élément approche
// ---------------------------------------------------------
function whenVisible(element, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        callback(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -25% 0px" }); // quand le haut du moment atteint les 3/4 de l'écran
  observer.observe(element);
}

// ---------------------------------------------------------
// Outil : faire défiler un nombre de 0 jusqu'à sa valeur finale
// ---------------------------------------------------------
function animateCounter(element, target, duration = 1500) {
  if (reducedMotion) {
    element.textContent = target;
    return;
  }
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ralentit à la fin
    element.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// =========================================================
// Moment 1 : les séismes de la semaine (API USGS, sans clé)
// =========================================================
async function loadEarthquakes() {
  const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";
  const response = await fetch(url);
  if (!response.ok) throw new Error("USGS indisponible (" + response.status + ")");
  const data = await response.json();

  // On ne garde que ce dont on a besoin : la magnitude et le lieu
  return data.features.map((quake) => ({
    magnitude: quake.properties.mag,
    place: quake.properties.place,
  }));
}

async function showEarthquakes(section) {
  let quakes;
  try {
    quakes = await loadEarthquakes();
  } catch (error) {
    console.error(error);
    section.querySelector(".moment__chute").textContent = "Les données n'ont pas pu être chargées. Rechargez la page.";
    section.classList.add("est-visible");
    return;
  }

  // 1. Le chiffre géant
  animateCounter(section.querySelector(".compteur"), quakes.length);

  // 2. Un point par séisme : sa taille dépend de la magnitude
  const container = section.querySelector(".points");
  container.innerHTML = quakes.map((s, i) => {
    const size = Math.max(4, (s.magnitude - 2) * 7); // magnitude 2,5 : 4 px; magnitude 6 : 28 px
    const cssClass = s.magnitude >= 6 ? "fort" : "";
    return `<span class="${cssClass}" style="--taille:${size}px; --i:${i}"></span>`;
  }).join("");

  // 3. La chute : ce que la donnée raconte
  const strongest = quakes.reduce((max, s) => (s.magnitude > max.magnitude ? s : max));
  section.querySelector(".moment__chute").innerHTML =
    `Le plus fort : <strong>magnitude ${strongest.magnitude.toFixed(1).replace(".", ",")}</strong>, ${strongest.place}. En rouge, ceux de magnitude 6 et plus.`;

  // 4. La révélation : le CSS anime tout ce qui est dans .est-visible
  requestAnimationFrame(() => section.classList.add("est-visible"));
}

// =========================================================
// Moment 2 : la météo de Montréal (API Open-Meteo, sans clé)
// =========================================================
async function loadWeather() {
  const url = "https://api.open-meteo.com/v1/forecast"
    + "?latitude=45.50&longitude=-73.57"
    + "&daily=temperature_2m_max&timezone=America%2FToronto";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Open-Meteo indisponible (" + response.status + ")");
  const data = await response.json();

  // Deux tableaux de même longueur : les dates et les températures
  return data.daily.time.map((date, i) => ({
    date: date,
    max: data.daily.temperature_2m_max[i],
  }));
}

function dayName(dateText) {
  // "2026-10-21" devient "mer."
  const date = new Date(dateText + "T12:00:00");
  return date.toLocaleDateString("fr-CA", { weekday: "short" });
}

async function showWeather(section) {
  let days;
  try {
    days = await loadWeather();
  } catch (error) {
    console.error(error);
    section.querySelector(".moment__chute").textContent = "Les données n'ont pas pu être chargées. Rechargez la page.";
    section.classList.add("est-visible");
    return;
  }

  const warmest = Math.max(...days.map((d) => d.max));
  const coldest = Math.min(...days.map((d) => d.max));
  // L'échelle commence un peu sous le jour le plus froid, pour que les écarts se voient
  const low = Math.min(0, coldest - 2);

  section.querySelector(".barres").innerHTML = days.map((day, i) => {
    const height = ((day.max - low) / (warmest - low)) * 100; // en %
    const cssClass = day.max === warmest ? "barre barre--max" : "barre";
    return `
      <div class="${cssClass}" style="--i:${i}">
        <span class="barre__valeur">${Math.round(day.max)}°</span>
        <span class="barre__colonne" style="--hauteur:${height}%"></span>
        <span class="barre__jour">${dayName(day.date)}</span>
      </div>`;
  }).join("");

  const gap = Math.round(warmest - coldest);
  section.querySelector(".moment__chute").innerHTML =
    `<strong>${gap} degrés</strong> d'écart entre le jour le plus chaud et le plus froid de la semaine.`;

  requestAnimationFrame(() => section.classList.add("est-visible"));
}

// =========================================================
// On branche chaque moment à son observateur
// =========================================================
whenVisible(document.querySelector("[data-moment='seismes']"), showEarthquakes);
whenVisible(document.querySelector("[data-moment='meteo']"), showWeather);
