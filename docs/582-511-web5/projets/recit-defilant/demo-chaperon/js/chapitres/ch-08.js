// =========================================================
// Chapitre 8 : La morale (Personne B)
// Toute la page vire au rouge pendant la morale,
// et revient en remontant (IntersectionObserver).
// =========================================================

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  // Pas de média : toute la page vire au rouge (voir animate)
  return "";
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  // Marge de -30 % en bas : la page vire au rouge dès que
  // le chapitre atteint le haut du tiers inférieur de l'écran
  const observateur = new IntersectionObserver(([entree]) => {
    document.body.classList.toggle("fin-rouge", entree.isIntersecting);
  }, { rootMargin: "0px 0px -30% 0px" });
  observateur.observe(section);
}
