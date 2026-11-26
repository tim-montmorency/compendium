import "./style.css"
import "photoswipe/style.css"
import emailjs from "@emailjs/browser"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import { gsapAnimations } from "./gsap.js"

gsapAnimations()

// ---------- Toutes les pages : thème clair / sombre ----------

const interrupteur = document.querySelector("#theme")

// Au chargement : remettre l'interrupteur dans l'état sauvegardé
if (localStorage.getItem("theme") === "clair") {
  interrupteur.checked = true
}

// Au changement : sauvegarder le choix
interrupteur.addEventListener("change", () => {
  if (interrupteur.checked) {
    localStorage.setItem("theme", "clair")
  } else {
    localStorage.setItem("theme", "sombre")
  }
})

// ---------- Toutes les pages : musique d'ambiance et effet sonore ----------

const musique = document.querySelector("#musique")
const effet = document.querySelector("#effet")
const boutonSon = document.querySelector("#bouton-son")

musique.volume = 0.4

boutonSon.addEventListener("click", () => {
  if (musique.paused) {
    musique.play()
    boutonSon.innerHTML = '<span class="icon-volume-2"></span> Muet'
  } else {
    musique.pause()
    boutonSon.innerHTML = '<span class="icon-volume-x"></span> Jouer'
  }
})

// Effet sonore au changement de thème, seulement si le son est activé
interrupteur.addEventListener("change", () => {
  if (!musique.paused) {
    effet.currentTime = 0
    effet.play()
  }
})

// ---------- Page Le jeu : galerie PhotoSwipe (touche supplémentaire) ----------

if (document.querySelector("#galerie")) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#galerie",
    children: "img",
    pswpModule: () => import("photoswipe"),
  })

  // L'image agrandie est la même que celle affichée dans la grille
  lightbox.addFilter("domItemData", (itemData, image) => {
    itemData.src = image.src
    return itemData
  })

  lightbox.init()
}

// ---------- Page Contact : formulaire EmailJS ----------

const form = document.querySelector("#formulaire-contact")

if (form) {
  // Valeurs à remplacer par celles du compte EmailJS
  emailjs.init({ publicKey: "VOTRE_PUBLIC_KEY" })
  const service_id = "service_xxx"
  const template_id = "template_xxx"

  const succes = document.querySelector("#message-succes")
  const erreur = document.querySelector("#message-erreur")

  form.addEventListener("submit", (event) => {
    event.preventDefault() // évite le rechargement de la page
    succes.classList.add("hidden")
    erreur.classList.add("hidden")

    const templateParams = {
      mon_sujet: form.sujet.value,
      mon_message: form.nom.value + " (" + form.courriel.value + ") : " + form.message.value,
      email: form.courriel.value,
    }

    emailjs.send(service_id, template_id, templateParams)
      .then(() => {
        succes.classList.remove("hidden")
        form.reset()
      })
      .catch(() => {
        erreur.classList.remove("hidden")
      })
  })
}
