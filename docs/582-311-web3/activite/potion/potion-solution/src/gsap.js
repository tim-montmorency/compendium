import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { SplitText } from "gsap/SplitText"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(Draggable, SplitText, ScrollToPlugin)

export function gsapAnimations() {

  // Les bulles : chacune grossit en montant, puis éclate (retour à scale 0),
  // en boucle, avec de nouvelles valeurs aléatoires à chaque tour
  gsap.fromTo(".bulle",
    { y: 0, x: 0, scale: 0 },
    {
      y: "random(-100, -15)",
      x: "random(-10, 10)",
      scale: "random(0.6, 1.3)",
      duration: "random(0.8, 1.6)",
      ease: "power1.out",
      stagger: { each: 0.3, from: "random", repeat: -1, repeatRefresh: true }
    }
  )

  // La grenouille respire : étirement vertical en boucle, à partir du bas
  gsap.to("#grenouille", {
    scaleY: 1.06,
    transformOrigin: "50% 100%",
    duration: 0.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  })

  // Le message découpé en lettres (encore invisible)
  const message = SplitText.create("#message", { type: "chars" })

  // La potion est prête
  function potionPrete() {
    gsap.timeline()
      // L'ingrédient tombe dans le chaudron
      .to("#ingredient", { scale: 0, autoAlpha: 0, duration: 0.3, ease: "back.in(2)" })
      // Le chaudron s'écrase un peu, puis revient
      .to("#chaudron", { scaleX: 1.1, scaleY: 0.9, transformOrigin: "50% 100%", duration: 0.15, yoyo: true, repeat: 1 })
      // Le message devient visible, puis ses lettres arrivent une à une
      .set("#message", { autoAlpha: 1 })
      .from(message.chars, {
        y: 40,
        opacity: 0,
        rotation: "random(-30, 30)",
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.04
      })
  }

  // Déplacer l'ingrédient
  Draggable.create("#ingredient", {
    type: "x,y",
    bounds: "#atelier",
    onDragEnd() {
      if (this.hitTest("#chaudron", "50%")) {
        potionPrete()
      } else {
        // Retour à la case départ
        gsap.to("#ingredient", { x: 0, y: 0, duration: 0.6, ease: "back.out(2)" })
      }
    }
  })

  // Boire la potion : défiler tout en bas de la page
  document.querySelector("#message").addEventListener("click", () => {
    gsap.to(window, {
      duration: 3,
      ease: "power2.inOut",
      scrollTo: { y: "max" }
    })
  })

}
