// =========================================================
// meteo.js : fetch externe (API Open-Meteo, sans clé)
// Les données sont chargées seulement quand le chapitre approche.
// =========================================================

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

async function afficherMeteo(conteneur) {
  const { latitude, longitude, fuseau, lieu } = conteneur.dataset;
  try {
    const { temperatures, coucher } = await chargerMeteo(latitude, longitude, fuseau);
    conteneur.innerHTML = `
      <p class="meteo__phrase">Aujourd'hui, dans ${lieu}, le soleil se couche à <strong>${coucher.replace(":", " h ")}</strong>. Après, la forêt appartient au loup.</p>
      ${dessinerGraphique(temperatures, coucher)}
      <p class="meteo__source">Température heure par heure, aujourd'hui. Données : <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>.</p>
    `;
  } catch (erreur) {
    console.error(erreur);
    conteneur.innerHTML = `<p class="meteo__phrase">Le jour baisse vite en automne. Le loup, lui, connaît le chemin le plus court.</p>`;
  }
}

// Déclencher le fetch quand le chapitre approche de l'écran
function observerMeteo() {
  const conteneur = document.querySelector(".meteo");
  if (!conteneur) return;
  observerUneFois(conteneur, afficherMeteo, "0px 0px 50% 0px");
}
