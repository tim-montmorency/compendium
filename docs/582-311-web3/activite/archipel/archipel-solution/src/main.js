import "./style.css"

const btnBoussole = document.querySelector("#btn-boussole")
const direction = document.querySelector("#direction")

// Le bouton n'existe que sur l'accueil :
// sans ce if, les autres pages affichent une erreur dans la console
if (btnBoussole) {
  btnBoussole.addEventListener("click", () => {
    direction.textContent = "Le nord est par là ⬆️"
  })
}
