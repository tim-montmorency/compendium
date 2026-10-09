// =========================================================
// animations.js : IntersectionObserver et GSAP + ScrollTrigger + DrawSVG
// (les chapitres 1 et 7 sont animés en CSS seulement, voir style.css)
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

// Chapitre 2 : les objets du panier entrent un à un (la transition est en CSS)
function observerPanier() {
  const panier = document.querySelector(".panier");
  if (!panier) return;
  observerUneFois(panier, (el) => el.classList.add("est-visible"));
}

// Chapitre 8 : toute la page vire au rouge pendant la morale, et revient en remontant
function observerMorale() {
  const morale = document.querySelector("#la-morale");
  if (!morale) return;
  const observateur = new IntersectionObserver(([entree]) => {
    document.body.classList.toggle("fin-rouge", entree.isIntersecting);
  }, { threshold: 0.35 });
  observateur.observe(morale);
}

// Chapitres 3, 4, 5 et 6 : animations synchronisées au défilement
function initAnimationsGSAP() {
  if (moinsDeMouvement) return; // les états finaux sont gérés en CSS
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  animerForet();
  animerLoup();
  animerChemins();
  animerMaison();
}

// ---------- Chapitre 3 : la forêt (section épinglée no 1) ----------
function animerForet() {
  const foret = document.querySelector(".foret");
  if (!foret) return;

  const traversee = gsap.timeline({
    scrollTrigger: {
      trigger: foret,
      start: "center center", // quand la forêt est au centre de l'écran...
      end: "+=250%",          // ...elle reste épinglée pendant 2,5 écrans de défilement
      scrub: 1,               // 1 seconde de « retard » : le mouvement glisse au lieu de suivre sec
      pin: true,
    },
  });

  traversee
    // Le Chaperon traverse tout l'écran, en grandissant (elle s'approche de nous)
    .fromTo(".marcheur",
      { x: -200, scale: 0.8 },
      { x: () => foret.offsetWidth, scale: 1.6, ease: "none", duration: 1 }, 0)
    // Les arbres de l'avant-plan défilent beaucoup plus vite : effet de profondeur
    .fromTo(".foret__arbres", { xPercent: 20 }, { xPercent: -45, ease: "none", duration: 1 }, 0)
    // La forêt s'assombrit
    .fromTo(".foret__ombre", { opacity: 0 }, { opacity: 0.85, ease: "none", duration: 0.6 }, 0.2)
    // Les yeux s'allument, une paire à la fois, en rebondissant
    .from(".yeux", { scale: 0, opacity: 0, stagger: 0.12, ease: "back.out(3)", duration: 0.15 }, 0.45)
    // Et la forêt tremble (les arbres et les yeux, pas la section épinglée elle-même)
    .to(".foret__arbres, .yeux", { x: 14, repeat: 7, yoyo: true, ease: "none", duration: 0.02 }, 0.9);
}

// ---------- Chapitre 4 : le loup, dessiné trait par trait (DrawSVG) ----------
function animerLoup() {
  const loup = document.querySelector(".loup svg");
  if (!loup) return;

  const dessin = gsap.timeline({
    scrollTrigger: {
      trigger: ".loup",
      start: "top 85%",
      end: "bottom 35%",
      scrub: 1,
    },
  });

  dessin
    // drawSVG: 0 = aucun trait visible; le trait se dessine jusqu'à 100 %
    .from(".loup-trait", { drawSVG: 0, stagger: 0.08, duration: 0.5, ease: "none" })
    // Les yeux s'allument d'un coup
    .from(".loup-oeil", { scale: 0, transformOrigin: "center", ease: "back.out(4)", duration: 0.15 })
    // Le loup fonce vers nous
    .to(loup, { scale: 1.35, ease: "power2.in", duration: 0.3 });
}

// ---------- Chapitre 5 : deux chemins (DrawSVG) ----------
function animerChemins() {
  if (!document.querySelector("#chemin-court")) return;

  const course = gsap.timeline({
    scrollTrigger: {
      trigger: ".chemins",
      start: "top 75%",
      end: "bottom 30%",
      scrub: 1,
    },
  });

  course
    // Le chemin du loup se dessine vite : il arrive en premier
    .from("#chemin-court", { drawSVG: 0, ease: "power1.in", duration: 0.35 }, 0)
    // Celui du Chaperon serpente, lentement, du début à la fin
    .from("#chemin-long", { drawSVG: 0, ease: "none", duration: 1 }, 0)
    // La maison de la mère-grand saute quand le loup y arrive
    .from("#arrivee", { scale: 0, transformOrigin: "center bottom", ease: "back.out(3)", duration: 0.15 }, 0.3);
}

// ---------- Chapitre 6 : la maison (section épinglée no 2) ----------
function animerMaison() {
  if (!document.querySelector("#porte")) return;

  const maison = gsap.timeline({
    scrollTrigger: {
      trigger: "#chez-la-mere-grand",
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
    },
  });

  maison
    // La maison arrive de loin et grossit
    .from(".maison svg", { scale: 0.3, rotation: -8, opacity: 0, transformOrigin: "center bottom", duration: 0.3 })
    // La fumée monte et gonfle
    .from(".bouffee", { y: 60, scale: 0, opacity: 0, transformOrigin: "center", stagger: 0.06, duration: 0.2 })
    .to(".bouffee", { y: -120, scale: 2.5, opacity: 0, transformOrigin: "center", stagger: 0.06, duration: 0.3 })
    // La lumière s'allume
    .from("#lumiere", { opacity: 0, duration: 0.1 }, "<")
    // La porte s'ouvre d'un coup... et des yeux brillent dans le noir
    .to("#porte", { scaleX: 0, transformOrigin: "left center", ease: "power4.in", duration: 0.15 })
    .from("#yeux-porte", { opacity: 0, duration: 0.05 })
    // On fonce dans le noir de la porte, et le texte s'efface
    .to(".maison svg", { scale: 40, transformOrigin: "42% 80%", ease: "power2.in", duration: 0.3 })
    .to("#chez-la-mere-grand .chapitre__texte", { opacity: 0, duration: 0.1 }, "<");
}
