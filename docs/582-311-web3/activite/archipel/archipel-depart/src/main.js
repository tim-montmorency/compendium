import "./style.css"

const btnBoussole = document.querySelector("#btn-boussole")
const direction = document.querySelector("#direction")

btnBoussole.addEventListener("click", () => {
  direction.textContent = "Le nord est par là ⬆️"
})
