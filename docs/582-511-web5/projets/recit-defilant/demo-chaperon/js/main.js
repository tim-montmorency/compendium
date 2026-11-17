// =========================================================
// main.js : charge les chapitres (data.json), les affiche,
// lance les animations de chaque chapitre, puis branche
// les deux composants Vue. (commun)
// =========================================================

import { createNavigation } from "./navigation.js";
import { createProgressBar } from "./progression.js";

// Un module par chapitre, dans l'ordre du récit
import * as ch01 from "./chapitres/ch-01.js";
import * as ch02 from "./chapitres/ch-02.js";
import * as ch03 from "./chapitres/ch-03.js";
import * as ch04 from "./chapitres/ch-04.js";
import * as ch05 from "./chapitres/ch-05.js";
import * as ch06 from "./chapitres/ch-06.js";
import * as ch07 from "./chapitres/ch-07.js";
import * as ch08 from "./chapitres/ch-08.js";

const chapterModules = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08];

const recit = document.querySelector("#recit");

// 1. Charger les chapitres depuis data.json
async function loadChapters() {
  const response = await fetch("data/data.json");
  if (!response.ok) {
    throw new Error("Chapitres introuvables (" + response.status + ")");
  }
  return response.json();
}

// 2. Une section par chapitre : le numéro et le titre (communs),
//    puis le texte et le média, créés par le module du chapitre
function createChapter(chapter, chapterModule) {
  return `
    <section class="chapitre" id="${chapter.id}">
      <p class="chapitre__numero">Chapitre ${chapter.numero}</p>
      <h2>${chapter.titre}</h2>
      ${chapterModule.createMedia(chapter)}
    </section>
  `;
}

// 3. Insérer un fichier SVG directement dans la page,
//    pour que GSAP (DrawSVG) atteigne ses traits
async function injectSvg() {
  const containers = document.querySelectorAll("[data-svg]");
  for (const container of containers) {
    const response = await fetch(container.dataset.svg);
    container.innerHTML = await response.text();
  }
}

// 4. Tout lancer, dans l'ordre : construire, animer, brancher
async function init() {
  try {
    // 1. Charger les chapitres (voir « Du JSON aux chapitres »)
    const chapters = await loadChapters();

    // 2. Le HTML de chaque chapitre, avec le module du même rang
    recit.innerHTML = chapters
      .map((chapter, index) => createChapter(chapter, chapterModules[index]))
      .join("");
    await injectSvg();

    // GSAP et ses plugins sont chargés par CDN dans index.html
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    // 3. Chaque chapitre anime sa propre section, avec ses données
    chapters.forEach((chapter, index) => {
      const section = document.getElementById(chapter.id);
      chapterModules[index].animate(section, chapter);
    });

    // Les deux composants Vue, une fois les sections dans la page
    createNavigation(chapters); // navigation.js (Personne A)
    createProgressBar();        // progression.js (Personne B)

    // 4. La page est complète : ScrollTrigger recalcule ses repères
    ScrollTrigger.refresh();
  } catch (error) {
    console.error(error);
    recit.innerHTML = `<p class="chapitre">Le récit n'a pas pu être chargé.
      Rechargez la page.</p>`;
  }
}

init();
