import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function gsapAnimations() {

  // Étape 1 - La forêt qui défile
  // Chaque couche fait défiler son image sans fin. Plus la couche est proche, plus elle va vite.

  // gsap.to("#buissons", {
  //   backgroundPositionX: "-=50px",
  //   duration: 1,
  //   ease: "none",
  //   repeat: -1,
  //   repeatRefresh: true
  // })
  // gsap.to("#arbres-loin", {
  //   backgroundPositionX: "-=100px",
  //   duration: 1,
  //   ease: "none",
  //   repeat: -1,
  //   repeatRefresh: true
  // })
  // gsap.to("#arbres-milieu", {
  //   backgroundPositionX: "-=175px",
  //   duration: 1,
  //   ease: "none",
  //   repeat: -1,
  //   repeatRefresh: true
  // })
  // gsap.to("#arbres-proches", {
  //   backgroundPositionX: "-=250px",
  //   duration: 1,
  //   ease: "none",
  //   repeat: -1,
  //   repeatRefresh: true
  // })
  // gsap.to("#avant-plan", {
  //   backgroundPositionX: "-=400px",
  //   duration: 1,
  //   ease: "none",
  //   repeat: -1,
  //   repeatRefresh: true
  // })


  // Étape 2 - Parallaxe verticale
  // Plus une couche est loin, plus elle descend : elle « résiste » au défilement et paraît lente.

  // gsap.timeline({
  //   defaults: { ease: "none" },
  //   scrollTrigger: {
  //     trigger: "#foret",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true
  //   }
  // })
  //   .to("#buissons", { yPercent: 70 })
  //   .to("#arbres-loin", { yPercent: 60 }, "<")
  //   .to("#arbres-milieu", { yPercent: 45 }, "<")
  //   .to("#rayons", { yPercent: 35 }, "<")
  //   .to("#arbres-proches", { yPercent: 25 }, "<")
  //   .to("#lumiere", { yPercent: 15 }, "<")
  //   .to("#titre", { yPercent: 50, autoAlpha: 0 }, "<")


  // Étape 3 - Zoom
  // Plus une couche est proche, plus elle grossit : on a l'impression d'avancer.

  // gsap.timeline({
  //   defaults: { ease: "power1.out" },
  //   scrollTrigger: {
  //     trigger: "#foret",
  //     start: "top top",
  //     end: "+=3000",
  //     pin: true,
  //     scrub: 1
  //   }
  // })
  //   .to("#buissons", { scale: 1.1 })
  //   .to("#arbres-loin", { scale: 1.3 }, "<")
  //   .to("#arbres-milieu", { scale: 1.6 }, "<")
  //   .to("#rayons", { scale: 1.5 }, "<")
  //   .to("#arbres-proches", { scale: 1.8 }, "<")
  //   .to("#lumiere", { scale: 1.8 }, "<")
  //   .to("#avant-plan", { scale: 2.5 }, "<")
  //   .to("#titre", { scale: 3, autoAlpha: 0 }, "<")


  // Étape 4 - Promenade horizontale
  // Plus une couche est proche, plus elle glisse loin vers la gauche.

  gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: "#foret",
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1
    }
  })
    .to("#buissons", { xPercent: -10 })
    .to("#arbres-loin", { xPercent: -20 }, "<")
    .to("#arbres-milieu", { xPercent: -35 }, "<")
    .to("#arbres-proches", { xPercent: -50 }, "<")
    .to("#avant-plan", { xPercent: -75 }, "<")
    .to("#titre", { xPercent: -100 }, "<")

}
