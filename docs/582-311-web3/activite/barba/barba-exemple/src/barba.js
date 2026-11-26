import barba from "@barba/core"
import { animerPage, sortie, entree } from "./gsap.js"

// Met en évidence le lien de la page affichée dans la navbar
function majLienActif() {
  const page = location.pathname.split("/").pop() || "index.html"

  for (const lien of document.querySelectorAll(".navbar a")) {
    lien.classList.toggle("btn-active", lien.getAttribute("href") === "./" + page)
  }
}

barba.init({
  transitions: [{
    name: "fondu",

    // 1. La page actuelle disparaît
    leave(data) {
      return sortie(data.current.container)
    },

    // 2. La nouvelle page apparaît, en haut de l'écran
    enter(data) {
      window.scrollTo(0, 0)
      return entree(data.next.container)
    },

    // 3. Une fois la nouvelle page en place : relancer ce qui dépend du contenu
    after() {
      animerPage()
      majLienActif()
    }
  }]
})

// Au tout premier chargement
animerPage()
majLienActif()
