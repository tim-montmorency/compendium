// =========================================================
// Chapitre 2 : Le panier (Personne A)
// Les objets du panier entrent un à un : IntersectionObserver
// ajoute une classe, la transition est en CSS (ch-02.css).
// =========================================================

import { observerUneFois } from "../outils.js";

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  const objets = chapitre.contenu.objets
    .map((o) => `<li>${o}</li>`)
    .join("");
  return `<ul class="panier">${objets}</ul>`;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  const panier = section.querySelector(".panier");
  // Marge de -5 % : ça part dès que le panier entre dans le bas de l'écran
  observerUneFois(
    panier,
    (el) => el.classList.add("est-visible"),
    "0px 0px -5% 0px"
  );
}
