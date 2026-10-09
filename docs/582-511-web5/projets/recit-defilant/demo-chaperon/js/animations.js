// =========================================================
// animations.js : IntersectionObserver et GSAP + ScrollTrigger
// (le chapitre 1 est animé en CSS seulement, voir style.css)
// =========================================================

// Le visiteur a demandé moins de mouvement dans son système?
const moinsDeMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Déclencher une fonction une seule fois, quand un élément entre dans l'écran
function observerUneFois(element, action, marge = "0px 0px -20% 0px") {
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

// Chapitre 2 : les objets du panier apparaissent un à un
function observerPanier() {
  const panier = document.querySelector(".panier");
  if (!panier) return;
  observerUneFois(panier, (el) => el.classList.add("est-visible"));
}

// Chapitres 3 et 5 : animations synchronisées au défilement
function initAnimationsGSAP() {
  if (moinsDeMouvement) return; // les états finaux sont gérés en CSS
  gsap.registerPlugin(ScrollTrigger);

  // Chapitre 3 : la forêt reste épinglée pendant que le Chaperon traverse la forêt
  const foret = document.querySelector(".foret");
  if (foret) {
    const traversee = gsap.timeline({
      scrollTrigger: {
        trigger: foret,
        start: "center center", // quand la forêt est au centre de l'écran...
        end: "+=150%",          // ...elle reste épinglée pendant 1,5 écran de défilement
        scrub: true,
        pin: true,
      },
    });
    traversee
      .to(".marcheur", { x: () => foret.offsetWidth - 160, ease: "none", duration: 1 })
      .to(".yeux", { opacity: 1, duration: 0.2 }, 0.45);
  }

  // Chapitre 5 : la maison s'anime (fumée, fenêtre, porte)
  if (document.querySelector("#porte")) {
    const maison = gsap.timeline({
      scrollTrigger: {
        trigger: "#chez-la-mere-grand",
        start: "top 40%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    maison
      .from(".bouffee", { y: 30, opacity: 0, stagger: 0.15, duration: 0.5 })
      .to("#fenetre", { fill: "#FFC83D", duration: 0.3 })
      .to("#porte", { scaleX: 0.15, transformOrigin: "left center", duration: 0.5 });
  }
}
