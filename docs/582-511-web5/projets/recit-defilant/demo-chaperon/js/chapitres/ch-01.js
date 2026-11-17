// =========================================================
// Chapitre 1 : Il était une fois (Personne A)
// La parallaxe en calques est en CSS seulement :
// voir css/chapitres/ch-01.css
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  // Les calques de la parallaxe : un <img> par calque
  const layers = chapter.contenu.medias
    .map((m) => `<img class="calque calque--${m.vitesse}"
      src="${m.src}" alt="${m.alt}">`)
    .join("");
  return `
    <div class="chapitre__texte">${paragraphs}</div>
    <div class="parallaxe" aria-hidden="true">${layers}</div>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  // Rien à faire en JavaScript pour ce chapitre.
}
