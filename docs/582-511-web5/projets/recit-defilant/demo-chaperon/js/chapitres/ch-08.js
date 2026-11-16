// =========================================================
// Chapitre 8 : La morale (Personne B)
// Toute la page vire au rouge pendant la morale,
// et revient en remontant (IntersectionObserver).
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  // Pas de média : toute la page vire au rouge (voir animate)
  return `<div class="chapitre__texte">${paragraphs}</div>`;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  // Marge de -30 % en bas : la page vire au rouge dès que
  // le chapitre atteint le haut du tiers inférieur de l'écran
  const observer = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("fin-rouge", entry.isIntersecting);
  }, { rootMargin: "0px 0px -30% 0px" });
  observer.observe(section);
}
