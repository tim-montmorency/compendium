// =========================================================
// Chapitre 3 : Dans la forêt (Personne B)
// GSAP + ScrollTrigger, section épinglée no 1.
// La spritesheet du Chaperon est animée en CSS (ch-03.css).
// =========================================================

import { moinsDeMouvement } from "../outils.js";

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  const [sprite, arbres] = chapitre.contenu.medias;
  return `
    <div class="foret">
      <div class="foret__ombre" aria-hidden="true"></div>
      <div class="yeux yeux--1" aria-hidden="true">
        <span></span><span></span></div>
      <div class="yeux yeux--2" aria-hidden="true">
        <span></span><span></span></div>
      <div class="yeux yeux--3" aria-hidden="true">
        <span></span><span></span></div>
      <div class="marcheur" role="img" aria-label="${sprite.alt}"></div>
      <img class="foret__arbres" src="${arbres.src}" alt="${arbres.alt}">
    </div>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  if (moinsDeMouvement) return; // les états finaux sont gérés en CSS

  const foret = section.querySelector(".foret");
  // q(".marcheur") : cherche seulement DANS cette section
  const q = gsap.utils.selector(section);

  // 1. L'entrée : dès que la forêt apparaît au bas de l'écran,
  //    le Chaperon entre en scène
  const entree = gsap.timeline({
    scrollTrigger: {
      trigger: foret,
      start: "top bottom",   // le haut de la forêt touche le bas de l'écran...
      end: "center center",  // ...jusqu'à ce qu'elle soit au centre
      scrub: 1,              // 1 s de « retard » : le mouvement glisse
    },
  });
  entree
    .fromTo(q(".marcheur"),
      { x: -200, scale: 0.8 },
      { x: () => foret.offsetWidth * 0.3, scale: 1.1, ease: "none" }, 0)
    .fromTo(q(".foret__arbres"),
      { xPercent: 30 }, { xPercent: 0, ease: "none" }, 0);

  // 2. La traversée : la forêt reste épinglée au centre
  //    pendant 2,5 écrans de défilement
  const traversee = gsap.timeline({
    scrollTrigger: {
      trigger: foret,
      start: "center center",
      end: "+=250%",
      scrub: 1,
      pin: true,
    },
  });

  traversee
    // immediateRender: false : la timeline d'entrée place
    // les éléments au départ
    .fromTo(q(".marcheur"),
      { x: () => foret.offsetWidth * 0.3, scale: 1.1 },
      { x: () => foret.offsetWidth, scale: 1.6, ease: "none",
        duration: 1, immediateRender: false }, 0)
    // Les arbres de l'avant-plan défilent beaucoup plus vite :
    // effet de profondeur
    .fromTo(q(".foret__arbres"),
      { xPercent: 0 },
      { xPercent: -45, ease: "none", duration: 1,
        immediateRender: false }, 0)
    // La forêt s'assombrit
    .fromTo(q(".foret__ombre"),
      { opacity: 0 }, { opacity: 0.85, ease: "none", duration: 0.6 }, 0.2)
    // Les yeux s'allument, une paire à la fois, en rebondissant
    .from(q(".yeux"), { scale: 0, opacity: 0, stagger: 0.12,
      ease: "back.out(3)", duration: 0.15 }, 0.45)
    // Et la forêt tremble (les arbres et les yeux,
    // pas la section épinglée elle-même)
    .to(q(".foret__arbres, .yeux"), { x: 14, repeat: 7, yoyo: true,
      ease: "none", duration: 0.02 }, 0.9);
}
