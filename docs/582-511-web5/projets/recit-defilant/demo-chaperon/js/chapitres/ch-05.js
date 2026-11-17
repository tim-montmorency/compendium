// =========================================================
// Chapitre 5 : Deux chemins (Personne B)
// 1. Les deux chemins se dessinent (GSAP + DrawSVG).
// 2. La dataviz : la météo du jour (fetch externe, Open-Meteo),
//    chargée seulement quand le chapitre approche.
// =========================================================

import { reducedMotion, observeOnce } from "../utils.js";

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  // Les deux chemins (SVG + DrawSVG), puis la météo,
  // remplie plus tard par showWeather()
  const pathsMedia = chapter.contenu.medias[0];
  return `
    <div class="chapitre__texte">${paragraphs}</div>
    <div class="chemins" data-svg="${pathsMedia.src}"></div>
    <div class="meteo">
      <p>Chargement des données de la forêt...</p></div>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  // La météo se charge même avec moins de mouvement
  const weather = section.querySelector(".meteo");
  const place = chapter.contenu.lieu;
  observeOnce(
    weather,
    (el) => showWeather(el, place),
    "0px 0px 50% 0px"
  );

  if (reducedMotion) return;

  const q = gsap.utils.selector(section);
  const race = gsap.timeline({
    scrollTrigger: {
      trigger: section.querySelector(".chemins"),
      start: "top 95%",
      end: "center 55%",
      scrub: 1,
    },
  });

  race
    // Le chemin du loup se dessine vite : il arrive en premier
    .from(q("#chemin-court"),
      { drawSVG: 0, ease: "power1.in", duration: 0.35 }, 0)
    // Celui du Chaperon serpente, lentement, du début à la fin
    .from(q("#chemin-long"), { drawSVG: 0, ease: "none", duration: 1 }, 0)
    // La maison de la mère-grand saute quand le loup y arrive
    .from(q("#arrivee"), { scale: 0, transformOrigin: "center bottom",
      ease: "back.out(3)", duration: 0.15 }, 0.3);
}

// ---------- La dataviz : fonctions privées au chapitre 5 ----------

async function loadWeather(latitude, longitude, timezone) {
  const url = "https://api.open-meteo.com/v1/forecast"
    + `?latitude=${latitude}&longitude=${longitude}`
    + "&hourly=temperature_2m&daily=sunset&forecast_days=1"
    + `&timezone=${encodeURIComponent(timezone)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Météo indisponible (" + response.status + ")");
  }
  const data = await response.json();
  return {
    temperatures: data.hourly.temperature_2m, // 24 valeurs, de 0 h à 23 h
    sunset: data.daily.sunset[0].slice(11),  // "2026-10-09T18:57" devient "18:57"
  };
}

// Un graphique en barres, dessiné en SVG
function drawChart(temperatures, sunsetTime) {
  const width = 720;
  const height = 220;
  const barWidth = width / temperatures.length;
  const max = Math.max(...temperatures, 1);
  const sunset = parseInt(sunsetTime, 10);

  const bars = temperatures.map((t, hour) => {
    const h = Math.max(2, (Math.max(t, 0) / max) * (height - 40));
    const color = hour >= sunset ? "#FF2B47" : "#E9E4D8";
    return `<rect x="${hour * barWidth + 2}" y="${height - 20 - h}" width="${barWidth - 4}" height="${h}" fill="${color}"><title>${hour} h : ${t} °C</title></rect>`;
  }).join("");

  return `
    <svg class="meteo__graphique" viewBox="0 0 ${width} ${height}" role="img"
         aria-label="Température heure par heure aujourd'hui. En rouge, les heures après le coucher du soleil.">
      ${bars}
      <text x="0" y="${height - 2}" fill="#A8A8A8" font-size="12">0 h</text>
      <text x="${width / 2}" y="${height - 2}" fill="#A8A8A8" font-size="12" text-anchor="middle">12 h</text>
      <text x="${width}" y="${height - 2}" fill="#A8A8A8" font-size="12" text-anchor="end">23 h</text>
    </svg>
  `;
}

async function showWeather(container, place) {
  // fuseau : la clé du JSON; timezone : le nom dans le code
  const { latitude, longitude, fuseau: timezone } = place;
  try {
    const { temperatures, sunset } =
      await loadWeather(latitude, longitude, timezone);
    container.innerHTML = `
      <p class="meteo__phrase">Aujourd'hui, dans ${place.nom}, le soleil se couche à <strong>${sunset.replace(":", " h ")}</strong>. Après, la forêt appartient au loup.</p>
      ${drawChart(temperatures, sunset)}
      <p class="meteo__source">Température heure par heure, aujourd'hui. Données : <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>.</p>
    `;
  } catch (error) {
    console.error(error);
    container.innerHTML = `<p class="meteo__phrase">Le jour baisse vite en automne. Le loup, lui, connaît le chemin le plus court.</p>`;
  }
}
