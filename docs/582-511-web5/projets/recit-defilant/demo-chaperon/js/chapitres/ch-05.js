// =========================================================
// Chapitre 5 : Deux chemins (Personne B)
// 1. Les deux chemins se dessinent (GSAP + DrawSVG).
// 2. La dataviz : la météo du jour (fetch externe, Open-Meteo),
//    chargée seulement quand le chapitre approche.
// =========================================================

import { moinsDeMouvement, observerUneFois } from "../outils.js";

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  // Les deux chemins (SVG + DrawSVG), puis la météo,
  // remplie plus tard par afficherMeteo()
  const chemins = chapitre.contenu.medias[0];
  return `
    <div class="chemins" data-svg="${chemins.src}"></div>
    <div class="meteo">
      <p>Chargement des données de la forêt...</p></div>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  // La météo se charge même avec moins de mouvement
  const meteo = section.querySelector(".meteo");
  const lieu = chapitre.contenu.lieu;
  observerUneFois(
    meteo,
    (el) => afficherMeteo(el, lieu),
    "0px 0px 50% 0px"
  );

  if (moinsDeMouvement) return;

  const q = gsap.utils.selector(section);
  const course = gsap.timeline({
    scrollTrigger: {
      trigger: section.querySelector(".chemins"),
      start: "top 95%",
      end: "center 55%",
      scrub: 1,
    },
  });

  course
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

async function chargerMeteo(latitude, longitude, fuseau) {
  const url = "https://api.open-meteo.com/v1/forecast"
    + `?latitude=${latitude}&longitude=${longitude}`
    + "&hourly=temperature_2m&daily=sunset&forecast_days=1"
    + `&timezone=${encodeURIComponent(fuseau)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Météo indisponible (" + response.status + ")");
  }
  const donnees = await response.json();
  return {
    temperatures: donnees.hourly.temperature_2m, // 24 valeurs, de 0 h à 23 h
    coucher: donnees.daily.sunset[0].slice(11),  // "2026-10-09T18:57" devient "18:57"
  };
}

// Un graphique en barres, dessiné en SVG
function dessinerGraphique(temperatures, heureCoucher) {
  const largeur = 720;
  const hauteur = 220;
  const barre = largeur / temperatures.length;
  const max = Math.max(...temperatures, 1);
  const coucher = parseInt(heureCoucher, 10);

  const barres = temperatures.map((t, heure) => {
    const h = Math.max(2, (Math.max(t, 0) / max) * (hauteur - 40));
    const couleur = heure >= coucher ? "#FF2B47" : "#E9E4D8";
    return `<rect x="${heure * barre + 2}" y="${hauteur - 20 - h}" width="${barre - 4}" height="${h}" fill="${couleur}"><title>${heure} h : ${t} °C</title></rect>`;
  }).join("");

  return `
    <svg class="meteo__graphique" viewBox="0 0 ${largeur} ${hauteur}" role="img"
         aria-label="Température heure par heure aujourd'hui. En rouge, les heures après le coucher du soleil.">
      ${barres}
      <text x="0" y="${hauteur - 2}" fill="#A8A8A8" font-size="12">0 h</text>
      <text x="${largeur / 2}" y="${hauteur - 2}" fill="#A8A8A8" font-size="12" text-anchor="middle">12 h</text>
      <text x="${largeur}" y="${hauteur - 2}" fill="#A8A8A8" font-size="12" text-anchor="end">23 h</text>
    </svg>
  `;
}

async function afficherMeteo(conteneur, lieu) {
  const { latitude, longitude, fuseau } = lieu;
  try {
    const { temperatures, coucher } = await chargerMeteo(latitude, longitude, fuseau);
    conteneur.innerHTML = `
      <p class="meteo__phrase">Aujourd'hui, dans ${lieu.nom}, le soleil se couche à <strong>${coucher.replace(":", " h ")}</strong>. Après, la forêt appartient au loup.</p>
      ${dessinerGraphique(temperatures, coucher)}
      <p class="meteo__source">Température heure par heure, aujourd'hui. Données : <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>.</p>
    `;
  } catch (erreur) {
    console.error(erreur);
    conteneur.innerHTML = `<p class="meteo__phrase">Le jour baisse vite en automne. Le loup, lui, connaît le chemin le plus court.</p>`;
  }
}
