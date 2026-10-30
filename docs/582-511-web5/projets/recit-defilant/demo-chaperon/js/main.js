// =========================================================
// main.js : charge les chapitres (JSON), les affiche,
// puis lance la navigation (Vue) et les animations
// de chaque chapitre. (commun)
// =========================================================

import { creerNavigation } from "./navigation.js";

// Un module par chapitre, dans l'ordre du récit
import * as ch01 from "./chapitres/ch-01.js";
import * as ch02 from "./chapitres/ch-02.js";
import * as ch03 from "./chapitres/ch-03.js";
import * as ch04 from "./chapitres/ch-04.js";
import * as ch05 from "./chapitres/ch-05.js";
import * as ch06 from "./chapitres/ch-06.js";
import * as ch07 from "./chapitres/ch-07.js";
import * as ch08 from "./chapitres/ch-08.js";

const modulesChapitres = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08];

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

// 3. Une section par chapitre : le texte (commun), puis le média,
//    créé par le module du chapitre lui-même
function creerChapitre(chapitre, moduleChapitre) {
  return `
    <section class="chapitre" id="${chapitre.id}">
      ${creerTexte(chapitre)}
      ${moduleChapitre.createMedia(chapitre)}
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
    recit.innerHTML = chapitres
      .map((chapitre, index) =>
        creerChapitre(chapitre, modulesChapitres[index]))
      .join("");
    await injecterSVG();

    creerNavigation(chapitres);   // navigation.js (Vue)

    // GSAP et ses plugins sont chargés par CDN dans index.html
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    // 6. Chaque chapitre anime sa propre section,
    //    avec ses propres données
    chapitres.forEach((chapitre, index) => {
      const section = document.getElementById(chapitre.id);
      modulesChapitres[index].animate(section, chapitre);
    });
  } catch (erreur) {
    console.error(erreur);
    recit.innerHTML = `<p class="chapitre">Le récit n'a pas pu être chargé.
      Rechargez la page.</p>`;
  }
}

init();
