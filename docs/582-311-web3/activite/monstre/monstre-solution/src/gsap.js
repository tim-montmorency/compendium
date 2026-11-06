import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function gsapAnimations() {

  // Étape 2 - Les slogans
  // Les deux bandes glissent en sens inverse, au rythme du défilement.

  gsap.to("#slogan-1", {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: "#slogans",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })

  gsap.fromTo("#slogan-2",
    { xPercent: -50 },
    {
      xPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#slogans",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  )


  // Étape 3 - Le catalogue
  // Une timeline DÉCLENCHÉE (sans scrub) : elle se joue d'elle-même quand la section arrive.
  // (La première version, une seule carte avec markers, a été remplacée par cette timeline.)

  gsap.timeline({
    defaults: { duration: 0.5, ease: "back.out" },
    scrollTrigger: {
      trigger: "#catalogue",
      start: "top 60%",
      toggleActions: "play none none reverse"
    }
  })
    .from("#piece-1", { scale: 0, autoAlpha: 0 })
    .from("#piece-2", { scale: 0, autoAlpha: 0 }, "-=0.3")
    .from("#piece-3", { scale: 0, autoAlpha: 0 }, "-=0.3")
    .from("#piece-4", { scale: 0, autoAlpha: 0 }, "-=0.3")


  // Étape 5 - L'atelier
  // Le CSS place les pièces à leur position finale : le monstre est assemblé.
  // Avec from(), chaque pièce part d'ailleurs et revient à sa place.

  gsap.timeline({
    scrollTrigger: {
      trigger: "#atelier",
      start: "top top",
      end: "+=3000",
      pin: true,
      scrub: 1
    }
  })
    .from("#corps",        { autoAlpha: 0 })   // 👈 donné dans l'énoncé : simple fondu
    .from("#jambe-gauche", { x: -500, y: 300, rotation: -60 })
    .from("#jambe-droite", { x: 500, y: 300, rotation: 60 }, "<")
    .from("#bras-gauche",  { x: -600, rotation: -180 })
    .from("#bras-droit",   { x: 600, rotation: 180 }, "<")
    .from("#oeil-gauche",  { y: -400, scale: 3, autoAlpha: 0 })
    .from("#oeil-droit",   { y: -400, scale: 3, autoAlpha: 0 }, "<0.2")
    .from("#bouche",       { scale: 0, rotation: 360 })
    .from("#corne-gauche", { y: -300, autoAlpha: 0 })
    .from("#corne-droite", { y: -300, autoAlpha: 0 }, "<")


  // Étape 6 - Commander
  // Synthèse : une apparition au choix.

  gsap.from("#commande", {
    scale: 0.5,
    autoAlpha: 0,
    duration: 0.6,
    ease: "back.out",
    scrollTrigger: {
      trigger: "#commander",
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  })

}
