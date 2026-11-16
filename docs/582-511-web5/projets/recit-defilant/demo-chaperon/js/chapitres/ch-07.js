// =========================================================
// Chapitre 7 : Que vous avez de grandes dents (Personne A)
// Les répliques grossissent au défilement, en CSS seulement :
// voir css/chapitres/ch-07.css
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  // Chaque réplique grossit au défilement (CSS seulement)
  const repliques = chapitre.contenu.repliques.map((r) => `
    <li class="replique">
      <p class="replique__question">${r.question}</p>
      <p class="replique__reponse">${r.reponse}</p>
    </li>`).join("");
  return `<ol class="dialogue">${repliques}</ol>`;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  // Rien à faire en JavaScript pour ce chapitre.
}
