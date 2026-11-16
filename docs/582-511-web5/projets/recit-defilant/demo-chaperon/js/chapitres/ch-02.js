// =========================================================
// Chapitre 2 : Le panier (Personne A)
// Les objets du panier entrent un à un : IntersectionObserver
// ajoute une classe, la transition est en CSS (ch-02.css).
// =========================================================

import { observeOnce } from "../utils.js";

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  const items = chapter.contenu.objets
    .map((o) => `<li>${o}</li>`)
    .join("");
  return `
    <div class="chapitre__texte">${paragraphs}</div>
    <ul class="panier">${items}</ul>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  const basket = section.querySelector(".panier");
  // Marge de -5 % : ça part dès que le panier entre dans le bas de l'écran
  observeOnce(
    basket,
    (el) => el.classList.add("est-visible"),
    "0px 0px -5% 0px"
  );
}
