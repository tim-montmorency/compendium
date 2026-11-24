---
tags:
  - Exercice
  - Médias
---

# 🎬 Salle de projection

Les contrôles natifs de `<video>` sont pratiques, mais ils ne ressemblent jamais à votre site. L'objectif de cet exercice est de **construire votre propre lecteur**, en pilotant la vidéo par programmation, puis d'y ajouter des effets sonores.

<!-- ![](../assets/images/medias-salle-projection.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une vidéo sans contrôles natifs, surmontée d'une barre personnalisée&nbsp;: bouton lecture/pause, temps écoulé / durée totale, barre de progression cliquable et bouton sourdine. Un petit « clic » se fait entendre à chaque appui sur un bouton.

## Indices

Trois propriétés et trois événements suffisent pour tout faire&nbsp;:

| Propriété | Ce qu'elle contient |
| --- | --- |
| `video.currentTime` | position actuelle, en secondes |
| `video.duration` | durée totale, en secondes |
| `video.paused` | `true` si la vidéo est arrêtée |

| Événement | Quand il se déclenche |
| --- | --- |
| `loadedmetadata` | la durée est enfin connue |
| `timeupdate` | à chaque avancée de la lecture |
| `ended` | la vidéo est terminée |

## Instructions

### Le HTML

- [ ] Intégrez une vidéo **sans** l'attribut `controls`, avec un `poster`
- [ ] Ajoutez sous la vidéo&nbsp;: un bouton lecture/pause, deux `<span>` pour les temps, un `<progress>` DaisyUI et un bouton sourdine
- [ ] Donnez à chaque élément l'`id` attendu par le squelette de départ&nbsp;: `film`, `btn-lecture`, `temps-ecoule`, `duree-totale`, `barre` et `btn-sourdine`

### Le JavaScript

- [ ] Sélectionnez la vidéo et chacun des contrôles avec `querySelector`
- [ ] Au clic sur le bouton lecture/pause, appelez `play()` ou `pause()` selon `video.paused`, et changez l'icône du bouton
- [ ] Sur `loadedmetadata`, affichez la durée totale (la fonction `formaterTemps()` du squelette transforme des secondes en `m:ss`)
- [ ] Sur `timeupdate`, mettez à jour le temps écoulé et la valeur de la barre de progression
- [ ] Au clic sur le bouton sourdine, inversez `video.muted` et changez l'icône du bouton
- [ ] Sur `ended`, remettez le bouton en position « lecture »

### Les effets sonores

- [ ] Ajoutez une balise `<audio>` **sans** `controls` pointant vers un court fichier de clic, et réglez son `volume` autour de `0.4` en JavaScript
- [ ] Jouez-le au clic des boutons du lecteur
- [ ] Ajoutez une ambiance sonore en boucle (une seconde balise `<audio>`, avec `loop = true`) que le bouton sourdine coupe et relance

    !!! warning "Autoplay bloqué"

        Les navigateurs refusent de jouer du son avant une **première interaction** de l'utilisateur. Déclenchez toujours l'ambiance depuis un clic, jamais au chargement.

### La vérification

- [ ] Testez dans Chrome **et** dans Firefox
- [ ] Ouvrez les DevTools → onglet **Network** et vérifiez que la vidéo n'est pas téléchargée en entier au chargement

[STOP]

## Squelette de départ

```js title="src/main.js"
const video = document.querySelector("#film");
const btnLecture = document.querySelector("#btn-lecture");
const btnSourdine = document.querySelector("#btn-sourdine");
const barre = document.querySelector("#barre");
const tempsEcoule = document.querySelector("#temps-ecoule");
const dureeTotale = document.querySelector("#duree-totale");

// Transforme un nombre de secondes en texte « m:ss » (ex. : 75 → "1:15")
function formaterTemps(secondes) {
  const m = Math.floor(secondes / 60);
  const s = Math.floor(secondes % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

btnLecture.addEventListener("click", () => {
  // à compléter…
});

video.addEventListener("timeupdate", () => {
  // à compléter…
});

// à compléter : loadedmetadata, ended, sourdine…
```

## Défis

Pour aller plus loin, une fois le lecteur fonctionnel&nbsp;:

- [ ] **Barre cliquable**&nbsp;: au clic sur la barre de progression, calculez la position visée (à partir de `event.offsetX` et de la largeur de la barre) et déplacez `currentTime` en conséquence
- [ ] **Raccourcis clavier**&nbsp;: la barre d'espacement lance ou arrête la lecture
- [ ] **Plusieurs lecteurs**&nbsp;: regroupez le code dans une classe `Lecteur` dont le constructeur reçoit l'élément conteneur, puis instanciez-la sur chaque lecteur de la page avec `querySelectorAll` et `forEach`
