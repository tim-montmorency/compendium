// =========================================================
// outils.js : petits outils partagés par les chapitres (commun)
// =========================================================

// Le visiteur a demandé moins de mouvement dans son système?
export const moinsDeMouvement = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Déclencher une fonction une seule fois,
// quand un élément entre dans l'écran
export function observerUneFois(element, action, marge = "0px 0px -20% 0px") {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        action(entree.target);
        observateur.unobserve(entree.target);
      }
    });
  }, { rootMargin: marge });
  observateur.observe(element);
}
