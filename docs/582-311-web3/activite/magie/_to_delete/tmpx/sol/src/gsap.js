import gsap from "gsap"

export function gsapAnimations() {

  // État de départ
  gsap.set(".chapeau", { autoAlpha: 0, rotation: 180 })   // invisible et à l'envers
  gsap.set(".main", { autoAlpha: 0, y: 80 })              // invisible et cachée dans le chapeau
  gsap.set(".baguette", { autoAlpha: 0, transformOrigin: "bottom center" })

  gsap.timeline()

    // 1. Le chapeau apparaît en fondu
    .to(".chapeau", { autoAlpha: 1, duration: 1 })

    // 2. Il se retourne de 180°, l'ouverture vers le haut
    .to(".chapeau", { rotation: 0, duration: 1, ease: "back.inOut" })

    // 3. La baguette apparaît
    .to(".baguette", { autoAlpha: 1, duration: 0.5 })

    // 4. Elle oscille 3 fois (3 allers-retours = 6 demi-mouvements)
    .to(".baguette", { rotation: -20, duration: 0.25, ease: "sine.inOut", yoyo: true, repeat: 5 })

    // 5. La main apparaît et sort du chapeau
    .to(".main", { autoAlpha: 1, y: 0, duration: 1, ease: "back.out" })
}
