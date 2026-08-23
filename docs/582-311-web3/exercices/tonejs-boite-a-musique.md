---
tags:
  - Exercice
  - Tone.js
---

# 🎹 Boîte à musique

Howler joue des fichiers. **Tone.js**, lui, *fabrique* le son&nbsp;: il synthétise les notes à la volée, sans le moindre fichier audio. L'objectif de cet exercice est de faire jouer une courte mélodie à votre page, puis d'habiller vos interactions d'un retour sonore.

<!-- ![](../assets/images/tonejs-boite.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une rangée de touches. Un clic sur une touche joue sa note. Un bouton « Mélodie » enchaîne quatre notes en rythme. Et chaque carte de la page émet un petit son cristallin au survol.

## Le détail qui bloque tout le monde

Un navigateur **interdit** de démarrer l'audio sans une action de l'utilisateur. Tone.js impose donc un appel explicite&nbsp;:

```js
await Tone.start();
```

Placez-le dans le **premier clic** de la page, pas au chargement. Sans ça, rien ne sortira des haut-parleurs et la console vous le reprochera.

## Instructions

### Mise en place

- [ ] Installez la librairie&nbsp;: `npm install tone`
- [ ] Importez Tone et créez un bouton « Activer le son » qui appelle `await Tone.start()`
- [ ] Créez un `Tone.Synth()` relié à la sortie avec `.toDestination()`

### Une note à la fois

- [ ] Ajoutez cinq boutons portant chacun une note&nbsp;: `C4`, `D4`, `E4`, `G4`, `A4`
- [ ] Au clic, jouez la note avec `synth.triggerAttackRelease(note, "8n")`
- [ ] Ajoutez une classe DaisyUI le temps de la note pour un retour visuel

    !!! info "La notation"

        `C4` est un do, `4` est l'octave. `"8n"` veut dire *une croche* - la durée, exprimée en valeurs musicales plutôt qu'en secondes.

### Une mélodie

- [ ] Ajoutez un bouton « Mélodie » qui enchaîne quatre notes espacées dans le temps
- [ ] Utilisez `Tone.now()` comme point de départ et ajoutez un décalage à chaque note&nbsp;:

    ```js
    const t = Tone.now();
    synth.triggerAttackRelease("C4", "8n", t);
    synth.triggerAttackRelease("E4", "8n", t + 0.25);
    ```

- [ ] Faites en sorte que le bouton se désactive pendant la lecture

### Le son au survol

- [ ] Créez un second synthé plus discret (`Tone.MembraneSynth` ou un `Tone.Synth` à faible volume)
- [ ] Jouez une note courte au `mouseenter` de chaque carte de la page
- [ ] Réglez le volume avec `synth.volume.value = -12` (l'échelle est en décibels, donc négative)

    !!! danger "Sobriété"

        Un son au survol qui se déclenche vingt fois en deux secondes devient vite insupportable. Ajoutez un délai minimal entre deux déclenchements, ou réservez l'effet à quelques éléments.

### Pour aller plus loin (optionnel)

- [ ] Chargez un vrai fichier audio avec `Tone.Player` et jouez-le au clic
- [ ] Ajoutez un effet avec `Tone.Reverb` ou `Tone.Distortion` inséré dans la chaîne
- [ ] Synchronisez une animation GSAP avec chaque note de la mélodie (cours 9)

[STOP]

## Solution de référence

```js
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();
let pret = false;

document.querySelector("#activer").addEventListener("click", async () => {
  await Tone.start();
  pret = true;
});

document.querySelectorAll(".touche").forEach((touche) => {
  touche.addEventListener("click", () => {
    if (!pret) return;
    synth.triggerAttackRelease(touche.dataset.note, "8n");
  });
});

document.querySelector("#melodie").addEventListener("click", () => {
  if (!pret) return;
  const t = Tone.now();
  ["C4", "E4", "G4", "C5"].forEach((note, i) => {
    synth.triggerAttackRelease(note, "8n", t + i * 0.25);
  });
});
```
