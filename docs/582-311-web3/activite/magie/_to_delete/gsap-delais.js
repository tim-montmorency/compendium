import gsap from "gsap"

// PARTIE 1 — Version avec des tweens indépendants et des délais.
// Chaque délai doit être calculé à la main en additionnant
// la durée de tout ce qui joue avant.

export function gsapAnimations() {

  // État de départ
  gsap.set(".chapeau", { autoAlpha: 0, rotation: 180 })   // invisible et à l'envers
  gsap.set(".baguette", { autoAlpha: 0, transformOrigin: "bottom center" })
  gsap.set(".main", { autoAlpha: 0, y: 80 })              // cachée dans le chapeau

  // 1. Le chapeau apparaît en fondu                          0 s → 1 s
  gsap.to(".chapeau", { autoAlpha: 1, duration: 1 })

  // 2. Il se retourne de 180°, l'ouverture vers le haut      1 s → 2 s
  gsap.to(".chapeau", { rotation: 0, duration: 1, ease: "back.inOut", delay: 1 })

  // 3. La baguette apparaît                                  2 s → 2,5 s
  gsap.to(".baguette", { autoAlpha: 1, duration: 0.5, delay: 2 })

  // 4. Elle oscille 3 fois : 6 × 0,25 s = 1,5 s              2,5 s → 4 s
  gsap.to(".baguette", { rotation: -20, duration: 0.25, ease: "sine.inOut", yoyo: true, repeat: 5, delay: 2.5 })

  // 5. La main apparaît et sort du chapeau                   4 s → 5 s
  gsap.to(".main", { autoAlpha: 1, y: 0, duration: 1, ease: "back.out", delay: 4 })
}
