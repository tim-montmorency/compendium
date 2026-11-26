import "./style.css"
import { flash } from "./gsap.js"

// Les éléments de la page
const video = document.querySelector("#film")
const musique = document.querySelector("#musique")
const klaxon = document.querySelector("#klaxon")
const photo = document.querySelector("#photo")

const btnLecture = document.querySelector("#btn-lecture")
const btnKlaxon = document.querySelector("#btn-klaxon")
const btnPhoto = document.querySelector("#btn-photo")

musique.volume = 0.4

// Le bouton play : la vidéo et la musique démarrent ou s'arrêtent ensemble
btnLecture.addEventListener("click", () => {
  if (video.paused) {
    video.play()
    musique.play()
    btnLecture.innerHTML = '<span class="icon-pause"></span>'
  } else {
    video.pause()
    musique.pause()
    btnLecture.innerHTML = '<span class="icon-play"></span>'
  }
})

// Le klaxon recommence du début à chaque clic, même s'il joue déjà
btnKlaxon.addEventListener("click", () => {
  klaxon.currentTime = 0
  klaxon.play()
})

// La photo : le son de l'obturateur et le flash blanc
btnPhoto.addEventListener("click", () => {
  photo.currentTime = 0
  photo.play()
  flash()
})

// ---------- Défi « Raccourci clavier » ----------

// La barre d'espacement fait comme le bouton play
document.addEventListener("keydown", (event) => {
  // Si un bouton a le focus, la barre d'espacement le clique déjà toute seule
  if (event.code === "Space" && event.target.tagName !== "BUTTON") {
    event.preventDefault()   // empêche la page de défiler
    btnLecture.click()
  }
})
