// =========================================================
// Chapitre 1 : Il était une fois (Personne A)
// La parallaxe en calques est en CSS seulement :
// voir css/chapitres/ch-01.css
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  // Les calques de la parallaxe : un <img> par calque
  const calques = chapitre.contenu.medias
    .map((m) => `<img class="calque calque--${m.vitesse}"
      src="${m.src}" alt="${m.alt}">`)
    .join("");
  return `<div class="parallaxe" aria-hidden="true">${calques}</div>`;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  // Rien à faire en JavaScript pour ce chapitre.
}
