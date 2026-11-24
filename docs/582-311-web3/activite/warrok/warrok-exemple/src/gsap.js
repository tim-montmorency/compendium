import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const vitrine = document.querySelector("#vitrine")

// L'état de la caméra, dans un objet ordinaire que GSAP peut animer
const camera = {
  angle: 0,        // rotation autour du modèle (degrés)
  hauteur: 80,     // angle vertical : 0 = au-dessus, 90 = à l'horizontale (degrés)
  distance: 110,   // éloignement (% de la distance automatique)
  cible: 1.2       // hauteur du point visé sur le modèle (mètres)
}

// Recopie l'objet camera dans le modèle
function majCamera() {
  vitrine.cameraOrbit = `${camera.angle}deg ${camera.hauteur}deg ${camera.distance}%`
  vitrine.cameraTarget = `0m ${camera.cible}m 0m`
}

// 1. La caméra tourne autour du modèle
gsap.to(camera, {
  angle: 360,
  ease: "none",
  onUpdate: majCamera,
  scrollTrigger: {
    trigger: "#tour",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
})

// 2. La caméra s'approche et vise la tête
gsap.to(camera, {
  distance: 35,
  cible: 1.7,
  ease: "none",
  onUpdate: majCamera,
  scrollTrigger: {
    trigger: "#gros-plan",
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
})

// 3. La caméra recule et monte au-dessus du personnage
gsap.to(camera, {
  distance: 130,
  hauteur: 30,
  cible: 1,
  ease: "none",
  onUpdate: majCamera,
  scrollTrigger: {
    trigger: "#plongee",
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
})
