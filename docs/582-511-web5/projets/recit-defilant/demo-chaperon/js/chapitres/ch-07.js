// =========================================================
// Chapitre 7 : Que vous avez de grandes dents (Personne A)
// Les répliques grossissent au défilement, en CSS seulement :
// voir css/chapitres/ch-07.css
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  // Chaque réplique grossit au défilement (CSS seulement)
  const replies = chapter.contenu.repliques.map((r) => `
    <li class="replique">
      <p class="replique__question">${r.question}</p>
      <p class="replique__reponse">${r.reponse}</p>
    </li>`).join("");
  return `
    <div class="chapitre__texte">${paragraphs}</div>
    <ol class="dialogue">${replies}</ol>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  // Rien à faire en JavaScript pour ce chapitre.
}
