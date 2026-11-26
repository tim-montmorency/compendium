// La musique d'ambiance et son bouton sont dans la navbar,
// HORS du conteneur Barba : ils ne sont jamais remplacés.
const musique = document.querySelector("#musique")
const boutonSon = document.querySelector("#bouton-son")

musique.volume = 0.4

boutonSon.addEventListener("click", () => {
  if (musique.paused) {
    musique.play()
    boutonSon.textContent = "🔊 Son activé"
  } else {
    musique.pause()
    boutonSon.textContent = "🔇 Son coupé"
  }
})
