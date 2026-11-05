import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function gsapAnimations() {

  // Étape 1 - Le trajet
  // Étape 2 - Les arrêts : une étiquette par station, et le train s'y aimante (snap)

  gsap.timeline({
    defaults: { ease: "power1.inOut" },  // le train accélère au départ et freine à l'arrivée
    scrollTrigger: {
      trigger: "#ligne",
      start: "top top",
      end: "+=3000",
      pin: true,
      scrub: 1,
      snap: "labels"                     // étape 2 : s'aimante à l'étiquette la plus proche
    }
  })
    .addLabel("Montmorency")
    .to("#train", { yPercent: 30, duration: 30 })
    .addLabel("De la Concorde")
    .to("#train", { yPercent: 55, duration: 25 })
    .addLabel("Cartier")
    .to("#train", { yPercent: 100, duration: 45 })
    .addLabel("Henri-Bourassa")

}
