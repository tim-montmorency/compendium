import "./style.css"
import "@google/model-viewer"

const vitrine = document.querySelector("#vitrine")
const bouton = document.querySelector("#interactivite")

// Au clic : ajouter ou retirer l'attribut camera-controls
bouton.addEventListener("click", () => {
  vitrine.toggleAttribute("camera-controls")

  if (vitrine.hasAttribute("camera-controls")) {
    bouton.textContent = "Désactiver l'interactivité"
  } else {
    bouton.textContent = "Activer l'interactivité"
  }
})
