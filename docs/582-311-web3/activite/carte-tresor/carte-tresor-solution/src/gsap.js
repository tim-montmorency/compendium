import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { SplitText } from "gsap/SplitText"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { CustomEase } from "gsap/CustomEase"
import { CustomWiggle } from "gsap/CustomWiggle"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  ScrambleTextPlugin,
  MotionPathPlugin,
  DrawSVGPlugin,
  MorphSVGPlugin,
  CustomEase,
  CustomWiggle,
  Draggable
)

export function gsapAnimations() {

  // Étape 1 - L'écran titre
  const titre = SplitText.create("#titre", { type: "chars" })

  gsap.timeline()
    .from(titre.chars, {
      y: -120,
      opacity: 0,
      rotation: "random(-40, 40)",
      duration: 0.8,
      ease: "back.out(2)",
      stagger: 0.06,
    })
    .to("#slogan", {
      duration: 1.5,
      scrambleText: {
        text: "Appuyez sur Start",
        chars: "upperCase",
        revealDelay: 0.5,
      },
    })

  document.querySelector("#bouton-depart").addEventListener("click", () => {
    gsap.to(window, { duration: 1.5, scrollTo: "#carte", ease: "power2.inOut" })
  })


  // Étape 2 - Le bateau
  gsap.to("#bateau", {
    duration: 12,
    ease: "none",
    repeat: -1,
    motionPath: {
      path: "#route-bateau",
      align: "#route-bateau",
      alignOrigin: [0.5, 0.8],
      autoRotate: true,
    },
  })


  // Étape 3 - La carte
  // Étape 5 - Adapter au mobile avec matchMedia()
  let mm = gsap.matchMedia()

  mm.add("(min-width: 768px)", () => {
    gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#carte",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1,
      },
    })
      .from("#trace", { drawSVG: "0%" })
      .to("#explorateur", {
        motionPath: {
          path: "#route",
          align: "#route",
          alignOrigin: [0.5, 0.5],
        },
      }, "<")
      .from("#x-tresor", { scale: 0, transformOrigin: "50% 50%", ease: "back.out(3)", duration: 0.2 })
  })

  mm.add("(max-width: 767px)", () => {
    gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#carte",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    })
      .from("#trace", { drawSVG: "0%" })
      .to("#explorateur", {
        motionPath: {
          path: "#route",
          align: "#route",
          alignOrigin: [0.5, 0.5],
        },
      }, "<")
      .from("#x-tresor", { scale: 0, transformOrigin: "50% 50%", ease: "back.out(3)", duration: 0.2 })
  })


  // Étape 4 - Le coffre
  CustomWiggle.create("tremblement", { wiggles: 8, type: "easeOut" })

  function ouvrirCoffre() {
    gsap.timeline()
      .to("#coffre-svg", {
        rotation: 6,
        duration: 0.8,
        ease: "tremblement",
        transformOrigin: "50% 100%",
      })
      .to("#couvercle", { morphSVG: "#couvercle-ouvert", duration: 0.6, ease: "back.out(2)" })
      .to(".piece", { y: -80, autoAlpha: 1, duration: 0.6, ease: "back.out(3)", stagger: 0.1 }, "<")
      .to("#message", {
        duration: 1.2,
        scrambleText: { text: "Trésor trouvé !", chars: "!?#$%*" },
      }, "<")
  }

  document.querySelector("#bouton-coffre").addEventListener("click", ouvrirCoffre)


  // Défi - La clé
  Draggable.create("#cle", {
    type: "x,y",
    onDragEnd() {
      if (this.hitTest("#coffre-svg", "50%")) {
        gsap.to("#cle", { autoAlpha: 0, duration: 0.3 })
        ouvrirCoffre()
      } else {
        gsap.to("#cle", { x: 0, y: 0, duration: 0.5, ease: "back.out(2)" })
      }
    },
  })
}
