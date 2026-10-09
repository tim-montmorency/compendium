// =========================================================
// main.js : charge les chapitres (JSON), les affiche,
// puis lance la navigation (Vue) et les animations.
// =========================================================

const recit = document.querySelector("#recit");

// 1. Charger les chapitres depuis le fichier JSON
async function chargerChapitres() {
  const response = await fetch("data/chapitres.json");
  if (!response.ok) {
    throw new Error("Chapitres introuvables (" + response.status + ")");
  }
  return response.json();
}

// 2. Les paragraphes du texte, communs à tous les chapitres
function creerTexte(chapitre) {
  const paragraphes = chapitre.texte.map((p) => `<p>${p}</p>`).join("");
  return `
    <div class="chapitre__texte">
      <p class="chapitre__numero">Chapitre ${chapitre.numero}</p>
      <h2>${chapitre.titre}</h2>
      ${paragraphes}
    </div>
  `;
}

// 3. Ce qui change selon le type de chapitre (défini dans le JSON)
function creerMedia(chapitre) {
  switch (chapitre.type) {
    case "parallaxe": {
      // Les calques de la parallaxe : un <img> par calque
      const calques = chapitre.medias
        .map((m) => `<img class="calque calque--${m.vitesse}" src="${m.src}" alt="${m.alt}">`)
        .join("");
      return `<div class="parallaxe" aria-hidden="true">${calques}</div>`;
    }
    case "panier": {
      const objets = chapitre.objets.map((o) => `<li>${o}</li>`).join("");
      return `<ul class="panier">${objets}</ul>`;
    }
    case "foret": {
      const sprite = chapitre.medias[0];
      return `
        <div class="foret">
          <div class="yeux" aria-hidden="true"><span></span><span></span></div>
          <div class="marcheur" role="img" aria-label="${sprite.alt}"></div>
        </div>
      `;
    }
    case "dataviz":
      // Rempli plus tard par meteo.js, quand le chapitre approche
      return `<div class="meteo" data-latitude="${chapitre.lieu.latitude}"
        data-longitude="${chapitre.lieu.longitude}" data-fuseau="${chapitre.lieu.fuseau}"
        data-lieu="${chapitre.lieu.nom}"><p>Chargement des données de la forêt...</p></div>`;
    case "maison":
      // Le SVG est injecté dans la page (voir injecterSVG) pour que GSAP puisse cibler ses id
      return `<div class="maison" data-svg="${chapitre.medias[0].src}"></div>`;
    default:
      return "";
  }
}

function creerChapitre(chapitre) {
  return `
    <section class="chapitre chapitre--${chapitre.type}" id="${chapitre.id}">
      ${creerTexte(chapitre)}
      ${creerMedia(chapitre)}
    </section>
  `;
}

// 4. Insérer un fichier SVG directement dans la page
async function injecterSVG() {
  const conteneurs = document.querySelectorAll("[data-svg]");
  for (const conteneur of conteneurs) {
    const response = await fetch(conteneur.dataset.svg);
    conteneur.innerHTML = await response.text();
  }
}

// 5. Tout lancer
async function init() {
  try {
    const chapitres = await chargerChapitres();
    recit.innerHTML = chapitres.map(creerChapitre).join("");
    await injecterSVG();

    creerNavigation(chapitres);   // navigation.js (Vue)
    observerPanier();             // animations.js (IntersectionObserver)
    observerMeteo();              // meteo.js (fetch externe au défilement)
    initAnimationsGSAP();         // animations.js (GSAP + ScrollTrigger)
  } catch (erreur) {
    console.error(erreur);
    recit.innerHTML = `<p class="chapitre">Le récit n'a pas pu être chargé. Rechargez la page.</p>`;
  }
}

init();
