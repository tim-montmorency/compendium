import "./style.css"

const interrupteur = document.querySelector("#theme")
const affichageVisites = document.querySelector("#visites")

// ---------- Le thème ----------

// Au chargement : remettre l'interrupteur dans l'état sauvegardé
if (localStorage.getItem("theme") === "light") {
  interrupteur.checked = true
}

// Au changement : sauvegarder le choix
interrupteur.addEventListener("change", () => {
  if (interrupteur.checked) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
})

// ---------- Le compteur de visites ----------

// Le localStorage ne garde que du texte : Number() le transforme en nombre
let visites = Number(localStorage.getItem("visites"))

visites = visites + 1
localStorage.setItem("visites", visites)

affichageVisites.textContent = visites

// ---------- Défi « Remise à zéro » ----------

const btnEffacer = document.querySelector("#btn-effacer")

btnEffacer.addEventListener("click", () => {
  localStorage.removeItem("theme")
  localStorage.removeItem("visites")
  location.reload()
})
