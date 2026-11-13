import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin)

export function gsapAnimations() {


  // Même durée et même lissage pour la bille et le trait : ils restent synchronisés
  const duree = 3
  const lissage = "power2.inOut"

  // Départ : trait invisible, bille au début du tracé, à l'échelle 0
  gsap.set("#trace", { drawSVG: "0% 0%" })
  gsap.set("#bille", {
    motionPath: {
      path: "#trace",
      align: "#trace",
      alignOrigin: [0.5, 0.5], end: 0
    }, scale: 0, transformOrigin: "50% 50%"
  })

  gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
    // Apparition
    .to("#bille", { scale: 1, duration: 0.4, ease: "back.out(3)" })

    // Aller : la bille avance, le trait se dessine derrière elle
    .to("#bille", {
      motionPath: {
        path: "#trace",
        align: "#trace",
        alignOrigin: [0.5, 0.5], start: 0, end: 1
      }, duration: duree, ease: lissage
    })
    .to("#trace", { drawSVG: "0% 100%", duration: duree, ease: lissage }, "<")

    // Rebond à l'arrivée
    .to("#bille", { scale: 1.8, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.out" })

    // Retour : la bille recule, le trait s'efface derrière elle
    .to("#bille", {
      motionPath: {
        path: "#trace",
        align: "#trace",
        alignOrigin: [0.5, 0.5], start: 1, end: 0
      }, duration: duree, ease: lissage
    })
    .to("#trace", { drawSVG: "0% 0%", duration: duree, ease: lissage }, "<")

    // Disparition
    .to("#bille", { scale: 0, duration: 0.3, ease: "back.in(3)" })

}
