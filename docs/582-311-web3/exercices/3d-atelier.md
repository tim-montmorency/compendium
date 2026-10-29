---
tags:
  - Exercice
  - 3D
  - localStorage
---

# 🎨 Atelier de personnalisation

L'objectif de cet exercice est de transformer la vitrine 3D en **configurateur**&nbsp;: le visiteur choisit une couleur pour une partie du modèle, et **son choix est retenu** d'une visite à l'autre grâce au `localStorage`.

Au passage, on règle enfin un vieux problème du cours 4&nbsp;: le thème DaisyUI qui s'oublie au rechargement.

<!-- ![](../assets/images/3d-atelier.png){.w-100 data-zoom-image} -->

## Résultat attendu

Sous le modèle, une rangée de pastilles de couleur. Un clic change la couleur d'une partie du modèle (armure, carrosserie, cape…). On recharge la page&nbsp;: la couleur choisie est toujours là, tout comme le thème clair ou sombre.

## Indices

Un matériau ne se modifie qu'une fois le modèle **chargé**&nbsp;: tout le code qui touche à `vitrine.model` va dans l'écouteur de l'événement `load`.

La logique de sauvegarde tient en deux moments&nbsp;: **au clic**, on applique et on écrit&nbsp;; **au chargement**, on lit et on réapplique.

## Instructions

### Mise en place

- [ ] Repartez de votre exercice **Vitrine 3D**
- [ ] Dans Maya, nommez clairement le matériau de la partie à personnaliser (ex.&nbsp;: `armure`), sans texture de couleur, puis réexportez le modèle

### Le configurateur

- [ ] Ajoutez au moins **trois pastilles** de couleur (boutons DaisyUI), chacune avec un attribut `data-couleur` et un `aria-label`
- [ ] Au chargement du modèle, récupérez le matériau avec `getMaterialByName()`
- [ ] Au clic sur une pastille, changez la couleur du matériau avec `setBaseColorFactor()`
- [ ] Indiquez visuellement la pastille active (bordure, anneau…)

### La mémoire

- [ ] Sauvegardez la couleur choisie dans le `localStorage`
- [ ] Au chargement du modèle, réappliquez la couleur sauvegardée, s'il y en a une
- [ ] Ajoutez un interrupteur `theme-controller` DaisyUI dans la barre de navigation, et mémorisez aussi le thème choisi
- [ ] Regroupez les deux réglages dans **un seul objet** sauvegardé avec `JSON.stringify()` et relu avec `JSON.parse()`

### Vérification

- [ ] Choisissez une couleur et le thème sombre, rechargez la page&nbsp;: les deux choix tiennent
- [ ] DevTools → onglet **Application** → **Local Storage**&nbsp;: retrouvez votre clé et son contenu
- [ ] Supprimez la clé à la main, rechargez&nbsp;: la page revient aux réglages par défaut sans erreur dans la console

!!! tip "Bonus"

    Faites tourner le modèle au défilement avec GSAP et ScrollTrigger, en animant `cameraOrbit` (voir le cours 12).

[STOP]

## Solution de référence

```html title="index.html"
<input type="checkbox" value="dark" class="toggle theme-controller" />

<model-viewer id="vitrine" src="/modeles/perso.glb" alt="Le héros du jeu"
              camera-controls class="w-full h-[60vh]"></model-viewer>

<div class="flex gap-2 justify-center">
  <button class="btn btn-circle bg-[#e63946]" data-couleur="#e63946" aria-label="Rouge"></button>
  <button class="btn btn-circle bg-[#2a9d8f]" data-couleur="#2a9d8f" aria-label="Turquoise"></button>
  <button class="btn btn-circle bg-[#f4a261]" data-couleur="#f4a261" aria-label="Orange"></button>
</div>
```

```js title="src/main.js"
import "./style.css"
import "@google/model-viewer"

const CLE = "reglages-vitrine"
const reglages = JSON.parse(localStorage.getItem(CLE)) ?? { couleur: null, theme: "light" }

function sauvegarder() {
  localStorage.setItem(CLE, JSON.stringify(reglages))
}

// Thème
const interrupteur = document.querySelector(".theme-controller")
interrupteur.checked = reglages.theme === interrupteur.value

interrupteur.addEventListener("change", () => {
  reglages.theme = interrupteur.checked ? interrupteur.value : "light"
  sauvegarder()
})

// Couleur du modèle
const vitrine = document.querySelector("#vitrine")
const pastilles = document.querySelectorAll("[data-couleur]")

vitrine.addEventListener("load", () => {
  const armure = vitrine.model.getMaterialByName("armure")

  function appliquerCouleur(couleur) {
    armure.pbrMetallicRoughness.setBaseColorFactor(couleur)
    pastilles.forEach((p) => p.classList.toggle("ring-4", p.dataset.couleur === couleur))
    reglages.couleur = couleur
    sauvegarder()
  }

  if (reglages.couleur) {
    appliquerCouleur(reglages.couleur)
  }

  pastilles.forEach((pastille) => {
    pastille.addEventListener("click", () => appliquerCouleur(pastille.dataset.couleur))
  })
})
```
