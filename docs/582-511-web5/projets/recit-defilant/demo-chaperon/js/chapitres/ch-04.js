// =========================================================
// Chapitre 4 : La rencontre (Personne B)
// Le loup se dessine trait par trait (GSAP + DrawSVG).
// =========================================================

import { reducedMotion } from "../utils.js";

// Appelée par main.js pour construire la section du chapitre.
// Retourne tout ce qui suit le <h2> : le texte, puis le média.
// Lit chapter.texte et chapter.contenu (la partie libre du JSON).
export function createMedia(chapter) {
  // Le texte du chapitre : un <p> par paragraphe de chapter.texte
  const paragraphs = chapter.texte.map((p) => `<p>${p}</p>`).join("");

  // data-svg : main.js insère le SVG dans la page,
  // pour que DrawSVG atteigne ses traits
  const wolf = chapter.contenu.medias[0];
  return `
    <div class="chapitre__texte">${paragraphs}</div>
    <div class="loup" data-svg="${wolf.src}"></div>
  `;
}

// Appelée par main.js une fois tout le HTML dans la page.
export function animate(section, chapter) {
  if (reducedMotion) return;

  const q = gsap.utils.selector(section);
  const wolf = section.querySelector(".loup svg");

  const drawing = gsap.timeline({
    scrollTrigger: {
      trigger: section.querySelector(".loup"),
      start: "center 80%", // le dessin commence quand le loup est bien visible...
      end: "center 30%",  // ...et se termine quand il est en haut de l'écran
      scrub: 1,
    },
  });

  drawing
    // drawSVG: 0 = aucun trait visible; le trait se dessine jusqu'à 100 %
    .from(q(".loup-trait"),
      { drawSVG: 0, stagger: 0.08, duration: 0.5, ease: "none" })
    // Les yeux s'allument d'un coup
    .from(q(".loup-oeil"), { scale: 0, transformOrigin: "center",
      ease: "back.out(4)", duration: 0.15 })
    // Le loup fonce vers nous
    .to(wolf, { scale: 1.35, ease: "power2.in", duration: 0.3 });
}
