// =========================================================
// utils.js : petits outils partagés par les chapitres (commun)
// =========================================================

// Le visiteur a demandé moins de mouvement dans son système?
export const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Déclencher une fonction une seule fois,
// quand un élément entre dans l'écran
export function observeOnce(element, callback, margin = "0px 0px -20% 0px") {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: margin });
  observer.observe(element);
}
