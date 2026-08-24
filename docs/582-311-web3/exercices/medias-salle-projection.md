---
tags:
  - Exercice
  - Médias
---

# 🎬 Salle de projection

Les contrôles natifs de `<video>` sont pratiques, mais ils ne ressemblent jamais à votre site. L'objectif de cet exercice est de **construire votre propre lecteur**, en pilotant la vidéo par programmation, puis d'y ajouter des effets sonores avec **Howler.js**.

C'est aussi votre première **classe JavaScript sur mesure**&nbsp;: le lecteur sera écrit une fois, puis réutilisable sur n'importe quelle vidéo de la page.

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

### La classe

- [ ] Créez une classe `Lecteur` dont le constructeur reçoit l'élément conteneur
- [ ] Dans le constructeur, sélectionnez la vidéo et les contrôles, puis branchez les écouteurs
- [ ] Écrivez une méthode `basculer()` qui appelle `play()` ou `pause()` selon `video.paused`, et change l'icône du bouton
- [ ] Écrivez une méthode `formaterTemps(secondes)` qui retourne une chaîne `m:ss`
- [ ] Sur `loadedmetadata`, affichez la durée totale
- [ ] Sur `timeupdate`, mettez à jour le temps écoulé et la valeur de la barre de progression
- [ ] Au clic sur la barre, calculez la position visée et déplacez `currentTime` en conséquence
- [ ] Sur `ended`, remettez le bouton en position « lecture »
- [ ] Instanciez la classe sur **chaque** lecteur de la page avec `querySelectorAll` et `forEach`

### Les effets sonores avec Howler

- [ ] Installez la librairie&nbsp;: `npm install howler`
- [ ] Créez un `Howl` pointant vers un court fichier de clic, avec un `volume` autour de `0.4`
- [ ] Jouez-le au clic des boutons du lecteur
- [ ] Ajoutez une ambiance sonore en boucle (`loop: true`) que le bouton sourdine coupe et relance

    !!! warning "Autoplay bloqué"

        Les navigateurs refusent de jouer du son avant une **première interaction** de l'utilisateur. Déclenchez toujours l'ambiance depuis un clic, jamais au chargement.

### La vérification

- [ ] Testez dans Chrome **et** dans Firefox
- [ ] Ouvrez les DevTools → onglet **Network** et vérifiez que la vidéo n'est pas téléchargée en entier au chargement

[STOP]

## Squelette de départ

```js
class Lecteur {
  constructor(conteneur) {
    this.video = conteneur.querySelector("video");
    this.btnLecture = conteneur.querySelector(".btn-lecture");
    this.barre = conteneur.querySelector("progress");
    this.tempsEcoule = conteneur.querySelector(".temps-ecoule");
    this.dureeTotale = conteneur.querySelector(".duree-totale");

    this.btnLecture.addEventListener("click", () => this.basculer());
    this.video.addEventListener("timeupdate", () => this.majProgression());
    // à compléter…
  }

  basculer() {
    // à compléter…
  }

  formaterTemps(secondes) {
    const m = Math.floor(secondes / 60);
    const s = Math.floor(secondes % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  majProgression() {
    // à compléter…
  }
}

document.querySelectorAll(".lecteur").forEach((el) => new Lecteur(el));
```
