// =========================================================
// Chapitre 6 : Chez la mère-grand (Personne A)
// GSAP + ScrollTrigger, section épinglée no 2.
// =========================================================

import { moinsDeMouvement } from "../outils.js";

// Appelée par main.js pour construire la section du chapitre.
// Lit chapitre.contenu : la partie libre du JSON, à ce chapitre.
export function createMedia(chapitre) {
  // data-svg : main.js insère le SVG dans la page,
  // pour que GSAP puisse cibler ses id
  const maison = chapitre.contenu.medias[0];
  return `<div class="maison" data-svg="${maison.src}"></div>`;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapitre) {
  if (moinsDeMouvement) return;

  const q = gsap.utils.selector(section);

  // 1. L'arrivée : la maison grossit pendant que la section monte
  gsap.from(q(".maison svg"), {
    scale: 0.3, rotation: -8, opacity: 0,
    transformOrigin: "center bottom", ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      end: "top top",
      scrub: 1,
    },
  });

  // 2. La section épinglée : la fumée, la lumière, la porte
  const maison = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
    },
  });

  maison
    // La fumée monte et gonfle
    .from(q(".bouffee"), { y: 60, scale: 0, opacity: 0,
      transformOrigin: "center", stagger: 0.06, duration: 0.2 })
    .to(q(".bouffee"), { y: -120, scale: 2.5, opacity: 0,
      transformOrigin: "center", stagger: 0.06, duration: 0.3 })
    // La lumière s'allume
    .from(q("#lumiere"), { opacity: 0, duration: 0.1 }, "<")
    // La porte s'ouvre d'un coup... et des yeux brillent dans le noir
    .to(q("#porte"), { scaleX: 0, transformOrigin: "left center",
      ease: "power4.in", duration: 0.15 })
    .from(q("#yeux-porte"), { opacity: 0, duration: 0.05 })
    // On fonce dans le noir de la porte, et le texte s'efface
    .to(q(".maison svg"), { scale: 40, transformOrigin: "42% 80%",
      ease: "power2.in", duration: 0.3 })
    .to(q(".chapitre__texte"), { opacity: 0, duration: 0.1 }, "<");
}
