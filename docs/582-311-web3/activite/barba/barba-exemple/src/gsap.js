import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Crée les animations de la page affichée.
// Appelée au premier chargement, puis après chaque changement de page.
export function animerPage() {
  // 1. Retirer les ScrollTrigger de la page précédente
  ScrollTrigger.killAll()

  // 2. Faire apparaître les éléments .apparition au défilement
  ScrollTrigger.batch(".apparition", {
    start: "top 85%",
    onEnter: (elements) => {
      gsap.fromTo(elements,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      )
    }
  })
}

// Transition entre les pages : l'ancienne page s'efface...
export function sortie(conteneur) {
  return gsap.to(conteneur, { opacity: 0, y: -30, duration: 0.4 })
}

// ... puis la nouvelle apparaît
export function entree(conteneur) {
  return gsap.fromTo(conteneur,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.4 }
  )
}
