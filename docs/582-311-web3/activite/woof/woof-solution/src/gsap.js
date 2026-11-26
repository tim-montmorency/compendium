import { gsap } from "gsap"

// Flash d'appareil photo : l'écran devient blanc, puis s'efface.
// autoAlpha anime l'opacité ET gère la visibilité :
// à 0, l'élément repasse en visibility: hidden.
export function flash() {
  gsap.fromTo("#flash",
    { autoAlpha: 1 },
    { autoAlpha: 0, duration: 0.6, ease: "power2.out" }
  )
}
