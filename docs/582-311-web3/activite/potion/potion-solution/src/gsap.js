import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { SplitText } from "gsap/SplitText"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(Draggable, SplitText, ScrollToPlugin, ScrollTrigger)

export function gsapAnimations() {

  // ScrollTrigger + SplitText

  const abra = SplitText.create("#abra", { type: "chars" })
  gsap.from(abra.chars, {
    y: 80,
    opacity: 0,
    rotation: "random(-40, 40)",
    stagger: 0.05,
    ease: "back.out(2)",
    scrollTrigger: { trigger: "#abra", start: "top 80%", end: "top 40%", scrub: 1 }
  })

  const cada = SplitText.create("#cada", { type: "chars" })
  gsap.from(cada.chars, {
    y: 80,
    opacity: 0,
    rotation: "random(-40, 40)",
    stagger: 0.05,
    ease: "back.out(2)",
    scrollTrigger: { trigger: "#cada", start: "top 80%", end: "top 40%", scrub: 1 }
  })

  const bra = SplitText.create("#bra", { type: "chars" })
  gsap.from(bra.chars, {
    y: 80,
    opacity: 0,
    rotation: "random(-40, 40)",
    stagger: 0.05,
    ease: "back.out(2)",
    scrollTrigger: { trigger: "#bra", start: "top 80%", end: "top 40%", scrub: 1 }
  })

  // Draggable + SplitText

  const cta = SplitText.create("#cta", { type: "words" })

  Draggable.create("#ingredient", {
    type: "x,y",
    bounds: "header",
    onDragEnd() {
      if (this.hitTest("#chaudron", "50%")) {

        let timeline = gsap.timeline();

        timeline.to("#ingredient", {
          scale: 0,
          autoAlpha: 0,
          duration: 0.3,
          ease: "back.in(2)"
        })

        timeline.to("#chaudron", {
          scaleX: 1.1,
          scaleY: 0.9,
          transformOrigin: "50% 100%",
          duration: 0.15,
          yoyo: true,
          repeat: 1
        })

        timeline.set("#cta", { autoAlpha: 1 })

        timeline.from(cta.words, {
          y: 40,
          opacity: 0,
          rotation: "random(-100, 100)",
          duration: 0.6,
          ease: "back.out(2)",
          stagger: 0.5
        })

      } else {
        
        gsap.to("#ingredient", {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.3)"
        });

      }
    }
  })

  // ScrollTo

  document.querySelector("#cta").addEventListener("click", () => {
    gsap.to(window, {
      duration: 5,
      ease: "power1.inOut",
      scrollTo: { y: "max" }
    })
  })

  // Finition

  gsap.fromTo(".bulle",
    {
      y: 0,
      x: 0,
      scale: 0
    }, {
    y: "random(-100, -15)",
    x: "random(-10, 10)",
    scale: "random(0.6, 1.3)",
    duration: "random(0.8, 1.6)",
    ease: "power1.out",
    stagger: { each: 0.3, from: "random", repeat: -1, repeatRefresh: true }
  })

  gsap.to("#grenouille", {
    scaleY: 1.1,
    transformOrigin: "50% 100%",
    duration: 0.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  })

}
