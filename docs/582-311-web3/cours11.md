# Cours 11 | Audio et vidéo par programmation

[STOP]

<!-- **Savoirs :** #3 Contrôle audio et vidéo · #13 Classe JavaScript · #14 Classes sur mesure · #12 Repérage d'erreur (DevTools) · #15 Interactivité -->

*[CDN]: Content Delivery Network
*[npm]: Node Package Manager
*[API]: Application Programming Interface

![](./assets/images/js-banner.png){.w-100}

Ce cours s'appelle « Web **audiovisuel** »&nbsp;: au cours 7, les médias ont été **optimisés**. Aujourd'hui, on les **contrôle par programmation** 🎬🔊, juste à temps pour le projet final.

<div class="grid grid-1-4" markdown>
  ![](./assets/images/javascript_banner.png){.aspect-4-3 .w-100}

  :material-play-circle: **Audio et vidéo** - API native, classes JavaScript et Howler.js
</div>

<div class="grid grid-1-4" markdown>
  ![](./assets/images/tonejs-adsr.png){.aspect-4-3 .w-100}

  :material-music: **Tone.js** - du son et de la musique
</div>

Chart.js et Three.js, en bonus, sont présentés au cours 12.

---

# Partie 1 - Contrôler les médias par programmation

Les balises `<video>` et `<audio>` viennent avec des contrôles par défaut. Mais dès qu'on veut un **lecteur sur mesure** (boutons stylisés, barre de progression maison, effets sonores au clic), on passe par le JavaScript.

## L'API native `<video>` / `<audio>`

Tout élément média expose des **propriétés**, des **méthodes** et des **événements** qu'on manipule en JS.

| Propriété | Rôle |
| :--- | :--- |
| `currentTime` | Position de lecture (en secondes) |
| `duration` | Durée totale |
| `volume` | Volume (0 à 1) |
| `muted` | Sourdine (booléen) |
| `paused` | En pause ? (booléen) |
| `playbackRate` | Vitesse de lecture |

| Méthode | Effet |
| :--- | :--- |
| `.play()` | Lance la lecture |
| `.pause()` | Met en pause |
| `.load()` | Recharge la source |

| Événement | Se déclenche… |
| :--- | :--- |
| `play` / `pause` | À la lecture / pause |
| `timeupdate` | À chaque avancée de lecture (pour une barre de progression) |
| `ended` | À la fin |
| `loadedmetadata` | Quand la durée est connue |

```js title="Bouton lecture/pause maison"
const video = document.querySelector("#film")
const bouton = document.querySelector("#lecture")

bouton.addEventListener("click", () => {
  video.paused ? video.play() : video.pause()
})

// Barre de progression
video.addEventListener("timeupdate", () => {
  const pourcent = (video.currentTime / video.duration) * 100
  document.querySelector("#barre").style.width = pourcent + "%"
})
```

<!-- CODEPEN: lecteur vidéo maison (play/pause + barre de progression) -->

## Petit détour : les classes JavaScript

Les librairies (GSAP depuis le cours 8, Howler et Tone.js aujourd'hui) nous donnent des **objets** créés avec le mot-clé `new`. Trois notions suffisent pour s'y retrouver&nbsp;:

- une **classe** est un *moule* (ex.&nbsp;: `Howl`)&nbsp;;
- `new` fabrique une **instance** à partir du moule&nbsp;;
- une **méthode** est une action de l'instance (ex.&nbsp;: `.play()`).

```js
const son = new Howl({ src: ["saut.mp3"] })  // une instance de la classe Howl
son.play()                                    // une méthode de cette instance
```

!!! note "On les utilise plus qu'on les écrit"

    À ce stade, l'important est de **savoir lire et utiliser** une classe fournie par une librairie, pas d'écrire les vôtres. Vous reconnaîtrez ce motif `new Quelquechose({...})` partout&nbsp;: Howler, Chart.js, Tone.js, GSAP…

### Écrire sa propre classe (aperçu)

Rien ne vous empêche d'écrire la vôtre. La structure minimale regroupe des **données** (dans le `constructor`) et des **méthodes** (des actions)&nbsp;:

```js
class Personnage {
  constructor(nom, pv) {
    this.nom = nom      // une propriété
    this.pv = pv
  }
  saluer() {           // une méthode
    console.log(`${this.nom} entre en scène !`)
  }
}

const heros = new Personnage("Digger", 100)
heros.saluer()   // "Digger entre en scène !"
```

!!! note "À garder simple"

    Écrire ses propres classes devient utile quand on gère **plusieurs objets du même type**. Pour un site promotionnel, l'usage des classes **fournies par les librairies** suffit largement&nbsp;: retenez surtout comment les **lire et les instancier**.

## Une librairie audio : Howler.js

L'`<audio>` natif suffit pour lire un fichier, mais dès qu'on veut des **effets sonores** fiables (jeu, interactions), des **sprites audio** ou un contrôle multiplateforme, **[Howler.js](https://howlerjs.com/)** est la référence.

=== ":material-flash: CDN"

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
    ```

=== ":simple-vite: npm"

    ```bash
    npm install howler
    ```

    ```js title="src/main.js"
    import { Howl, Howler } from "howler"
    ```

```js title="Un son avec repli de format"
const son = new Howl({
  src: ["bruit.webm", "bruit.mp3"],  // le navigateur prend le 1er compatible
  volume: 0.8,
  loop: false
})

son.play()
```

| Méthode | Effet |
| :--- | :--- |
| `son.play()` / `son.pause()` / `son.stop()` | Contrôle de lecture |
| `son.volume(0.5)` | Règle le volume de ce son |
| `son.rate(1.5)` | Change la vitesse |
| `Howler.volume(0.5)` | Volume **global** de tous les sons |
| `Howler.mute(true)` | Coupe tout |

!!! tip "Les sprites audio"

    Comme les sprites d'image (cours 9), un **sprite audio** regroupe plusieurs sons dans un seul fichier - idéal pour les effets d'un jeu.

    ```js
    const fx = new Howl({
      src: ["fx.webm"],
      sprite: { saut: [0, 300], piece: [400, 150] }
    })
    fx.play("saut")
    ```

<!-- CODEPEN: effets sonores au clic avec Howler -->

### Autres librairies (survol)

- **[Video.js](https://videojs.com/)** - un lecteur **vidéo** entièrement habillable (thèmes, sous-titres, qualité).

## Déboguer : les DevTools

Quand un média ne réagit pas, ouvrez les **DevTools** (++f12++)&nbsp;:

- la **Console** affiche les erreurs et vos `console.log(...)`&nbsp;;
- l'onglet **Réseau** montre si le fichier média se charge (ou renvoie une erreur 404)&nbsp;;
- un **point d'arrêt** (_breakpoint_) met le code en pause pour l'inspecter ligne par ligne.

```js
console.log("durée :", video.duration)   // vérifier une valeur au vol
```

## Exercice - Médias

<div class="grid grid-1-2" markdown>
  ![](./assets/images/javascript_banner.png){.aspect-4-3}

  <small>Exercice - Médias</small><br>
  **[Salle de projection](./exercices/medias-salle-projection.md){.stretched-link .back}**
</div>

---

# Partie 2 - Tone.js

![](./assets/images/tonejs-adsr.png){data-zoom-image .w-75}

**[Tone.js](https://tonejs.github.io/)** est un cadre audio pour **créer du son et de la musique** dans le navigateur. Pour un site de jeu, c'est parfait&nbsp;: une ambiance sonore, un thème musical, ou des effets aux interactions.

## Installation

=== ":material-flash: CDN (rapide)"

    ```html
    <script src="https://unpkg.com/tone"></script>
    ```

=== ":simple-vite: npm (projet Vite)"

    ```bash
    npm install tone
    ```

    ```js title="src/main.js"
    import * as Tone from "tone"
    ```

!!! danger "Le son exige un clic d'abord"

    Les navigateurs **bloquent** tout son tant que l'utilisateur n'a pas interagi avec la page. Il faut donc appeler **`Tone.start()`** depuis un événement déclenché par l'utilisateur (un clic), sinon&nbsp;: silence.

    ```js
    document.querySelector("#demarrer").addEventListener("click", async () => {
      await Tone.start()   // débloque l'audio
      // … le son peut jouer maintenant …
    })
    ```

## Jouer une note

L'objet de base est le **synthétiseur**. On le crée, on le branche aux haut-parleurs avec `.toDestination()`, puis on joue une note.

```js
const synth = new Tone.Synth().toDestination()

// note "Do 4", tenue pendant une croche ("8n")
synth.triggerAttackRelease("C4", "8n")
```

| Argument | Signifie |
| :--- | :--- |
| `"C4"` | La note (nom + octave), ou une fréquence en Hz (`440`) |
| `"8n"` | La durée&nbsp;: `"4n"` = noire, `"8n"` = croche, `"1m"` = une mesure |

## Enchaîner des notes

Le 3ᵉ argument planifie **quand** jouer, en secondes à partir de maintenant (`Tone.now()`).

```js
const synth = new Tone.Synth().toDestination()
const t = Tone.now()

synth.triggerAttackRelease("C4", "8n", t)
synth.triggerAttackRelease("E4", "8n", t + 0.5)
synth.triggerAttackRelease("G4", "8n", t + 1)
```

## Jouer un fichier audio

Pour une **musique** ou un effet à partir d'un fichier, on utilise `Tone.Player`.

```js
const musique = new Tone.Player({
  url: "./assets/audio/theme.mp3",
  loop: true,
  autostart: false
}).toDestination()

// après Tone.start() :
musique.start()
```

!!! tip "Idées pour votre site de jeu"

    Un thème musical en boucle dans le hero, un « bip » à chaque survol de bouton, un son de validation à l'envoi du formulaire… petit détail, grande immersion 🎧.

<!-- CODEPEN: clavier de quelques notes + bouton Tone.start() -->

## Exercice - Tone.js

<div class="grid grid-1-2" markdown>
  ![](./assets/images/tonejs-adsr.png){.aspect-4-3}

  <small>Exercice - Tone.js</small><br>
  **[Boîte à musique](./exercices/tonejs-boite-a-musique.md){.stretched-link .back}**
</div>

---

## Projet final

L'énoncé du projet final est présenté aujourd'hui&nbsp;: les médias du jeu (ou de l'œuvre choisie) seront contrôlés avec les outils vus dans ce cours.

[Énoncé du projet final](./devoir/projet-final.md){ .md-button .md-button--primary }
