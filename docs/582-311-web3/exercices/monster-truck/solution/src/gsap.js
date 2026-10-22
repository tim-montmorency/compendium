import gsap from "gsap"

export function lancerAnimations() {

  // Le camion part de l'extérieur gauche et sort complètement à droite
  gsap.fromTo('.car',
    { x: -200 },
    {
      x: window.innerWidth + 100,
      duration: 4,
      repeat: -1,
      ease: 'none'
    }
  )

  // Les roues font un tour complet par seconde
  gsap.to('.roue1, .roue2', {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: 'none'
  })

}