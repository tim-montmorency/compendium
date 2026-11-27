import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText)

export function gsapAnimations() {

  // ---------- Toutes les pages : apparitions au défilement ----------
  // Chaque élément .apparition apparaît quand il entre dans l'écran
  gsap.utils.toArray(".apparition").forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // ---------- Page Accueil : timeline d'introduction ----------
  if (document.querySelector("#hero")) {
    // SplitText découpe l'accroche en mots, animés un après l'autre
    let accroche = SplitText.create("#hero-accroche", { type: "words" })

    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from("#hero-logo", { scale: 0.6, opacity: 0, duration: 1.4 })
      .from(accroche.words, { y: 30, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.6")
      .from("#hero-boutons .btn", { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.4")
  }

  // ---------- Page Le jeu : parallaxe et chemin dessiné ----------
  if (document.querySelector("#parallaxe")) {
    let mm = gsap.matchMedia()

    // Écran large : parallaxe complète et chemin épinglé
    mm.add("(min-width: 768px)", () => {
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "#parallaxe",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
        .to(".couche-fond", { yPercent: 30 })                         // loin : descend lentement
        .to("#parallaxe-titre", { yPercent: 120, opacity: 0 }, "<")
        .to(".couche-cadres", { yPercent: -120 }, "<")                // proche : remonte vite

      gsap.from("#chemin-trace", {
        drawSVG: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: "#chemin",
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
        },
      })
    })

    // Mobile : pas de parallaxe (trop saccadée), chemin dessiné sans épinglage
    mm.add("(max-width: 767px)", () => {
      gsap.from("#chemin-trace", {
        drawSVG: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: "#chemin",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      })
    })
  }
}
