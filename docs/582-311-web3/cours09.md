# Cours 9 | GSAP - les bases

[STOP]

<!-- **Savoirs :** #10 Programmation événementielle · #16 Animation via librairie -->

*[GSAP]: GreenSock Animation Platform
*[CDN]: Content Delivery Network
*[npm]: Node Package Manager

![](./assets/images/gsap-banner.jpg){.w-100}

Jusqu'ici, vos pages sont belles et interactives, mais **statiques**. Aujourd'hui, on leur donne vie avec **[GSAP](https://gsap.com/)** (GreenSock Animation Platform), la librairie d'animation la plus utilisée du Web professionnel 🎬.

!!! note "GSAP, c'est une librairie"

    Rappelez-vous la distinction du cours 7&nbsp;: contrairement à Alpine (un **cadriciel** qui appelle votre code), GSAP est une **librairie**&nbsp;: *vous* l'appelez quand vous voulez, avec des fonctions comme `gsap.to(...)`. C'est une boîte à outils d'animation.

!!! success "100 % gratuit depuis 2025"

    Depuis que Webflow a racheté GreenSock, **tout GSAP est gratuit**, y compris les plugins autrefois payants (ScrollTrigger, SplitText, MorphSVG, DrawSVG…). Aucune barrière pour vos projets, même commerciaux.

## Installation

=== ":material-flash: CDN (rapide)"

    ```html title="index.html"
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
    ```

=== ":simple-vite: npm (projet Vite)"

    ```bash
    npm install gsap
    ```

    ```js title="src/main.js"
    import gsap from "gsap"
    ```

## Le _tween_

Le mot **_tween_** vient de « be**twee**n »&nbsp;: c'est une animation qui calcule toutes les valeurs **entre** un point de départ et un point d'arrivée. C'est l'unité de base de GSAP.

On crée un tween avec l'une de ces trois méthodes&nbsp;:

| Méthode | Anime… | Exemple |
| :--- | :--- | :--- |
| [`gsap.to()`](https://gsap.com/docs/v3/GSAP/gsap.to()) | de l'état **actuel** → vers les valeurs données | « va vers là » |
| [`gsap.from()`](https://gsap.com/docs/v3/GSAP/gsap.from()) | des valeurs données → vers l'état **actuel** | « viens de là » |
| [`gsap.fromTo()`](https://gsap.com/docs/v3/GSAP/gsap.fromTo()) | d'un état de départ → vers un état de fin (les deux définis) | « de là à là » |

```js title="Anatomie d'un tween"
gsap.to(".boite", {   // 1. la cible (sélecteur CSS)
  x: 300,             // 2. les propriétés à animer
  rotation: 360,
  duration: 2         // 3. les paramètres du tween
})
```

<!-- CODEPEN: to() vs from() vs fromTo() côte à côte -->

### La cible

Le premier argument est une **cible**&nbsp;: un sélecteur CSS (`".boite"`), un élément du DOM, ou un tableau d'éléments. GSAP anime **tout** ce qui correspond.

### Les propriétés animables

GSAP peut animer presque n'importe quelle propriété CSS. Les plus courantes&nbsp;:

| Propriété GSAP | Effet |
| :--- | :--- |
| `x` / `y` | Déplacement horizontal / vertical (via `transform`, performant) |
| `rotation` | Rotation en degrés |
| `scale` | Mise à l'échelle |
| `opacity` | Transparence |
| `backgroundColor` | Couleur de fond |
| `width` / `height` | Dimensions |

!!! tip "`x` plutôt que `left`"

    Pour déplacer un élément, préférez `x`/`y` (qui utilisent `transform`) à `left`/`top`. C'est beaucoup plus fluide, car le navigateur les traite sur le processeur graphique.

## Les paramètres d'un tween

Le deuxième argument est un **objet de configuration** (du JavaScript, comme un `x-data` Alpine 😉). En plus des propriétés animées, il accepte des paramètres&nbsp;:

| Paramètre | Rôle |
| :--- | :--- |
| `duration` | Durée en secondes |
| `delay` | Attente avant de démarrer |
| `repeat` | Nombre de répétitions (`-1` = infini) |
| `yoyo` | Repart en sens inverse à chaque répétition |
| `ease` | Courbe d'accélération (voir plus bas) |
| `stagger` | Décalage entre plusieurs cibles |
| `onComplete` | Fonction appelée à la fin |

```js title="Exemple complet"
gsap.to(".carte", {
  y: -20,
  duration: 0.6,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})
```

## Les courbes d'accélération (`ease`)

L'`ease` décrit **comment** l'animation accélère et ralentit. C'est ce qui distingue une animation robotique d'une animation vivante. Testez-les dans le [visualiseur d'eases officiel](https://gsap.com/docs/v3/Eases).

| Ease | Sensation |
| :--- | :--- |
| `none` | Vitesse constante (linéaire) |
| `power2.out` | Démarre vite, ralentit à la fin (naturel) |
| `power2.in` | Démarre lentement, accélère |
| `back.out` | Dépasse légèrement puis revient |
| `elastic.out` | Rebondit comme un ressort |
| `bounce.out` | Rebondit comme une balle |

<!-- CODEPEN: comparateur d'eases (mêmes boîtes, eases différents) -->

## Le décalage (`stagger`)

`stagger` anime plusieurs cibles **l'une après l'autre**, avec un délai entre chacune. Parfait pour faire apparaître une liste ou une grille.

```js
gsap.from(".carte", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15   // 0,15 s entre chaque carte
})
```

<!-- CODEPEN: stagger sur une grille de cartes -->

## Les _timelines_

Un tween anime une chose. Une **[timeline](https://gsap.com/docs/v3/GSAP/Timeline)** enchaîne **plusieurs** tweens dans un ordre précis, comme un scénario. C'est l'outil clé pour les séquences.

```js
const tl = gsap.timeline()

tl.to(".titre", { opacity: 1, duration: 1 })
  .to(".sous-titre", { x: 0, duration: 0.5 })
  .to(".bouton", { scale: 1, duration: 0.3 })
```

Par défaut, chaque tween attend la fin du précédent. Mais on peut contrôler le timing précis avec le **paramètre de position** (3e argument)&nbsp;:

| Position | Signifie |
| :--- | :--- |
| _(rien)_ | À la suite du tween précédent |
| `"+=0.5"` | 0,5 s **après** la fin du précédent |
| `"-=0.5"` | 0,5 s **avant** la fin (chevauchement) |
| `"<"` | En même temps que le **début** du précédent |
| `">"` | À la **fin** du précédent |
| `2` | À 2 s (temps absolu depuis le début) |

```js title="Positionnement précis"
tl.to(".a", { x: 100, duration: 1 })
  .to(".b", { y: 100, duration: 1 }, "<")     // en même temps que .a
  .to(".c", { rotation: 90, duration: 1 }, "-=0.5")
```

<!-- CODEPEN: timeline séquencée avec paramètres de position -->

### Contrôler la lecture

Une timeline (ou un tween) se pilote comme un lecteur vidéo&nbsp;: pratique pour brancher des boutons.

| Méthode | Effet |
| :--- | :--- |
| `.play()` | Lance |
| `.pause()` | Met en pause |
| `.reverse()` | Joue à l'envers |
| `.restart()` | Recommence du début |
| `.timeScale(2)` | Change la vitesse (2 = deux fois plus vite) |

```js
const tl = gsap.timeline({ paused: true })
tl.to(".boite", { x: 300, duration: 1 })

document.querySelector("#play").addEventListener("click", () => tl.play())
```

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Un, deux et trois](./exercices/gsap-123.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Automobile jaune](./exercices/gsap-auto1.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Animation en séquence avec contrôle de lecture](./exercices/gsap-animation.md){.stretched-link .back}**
</div>

Pour aller plus loin&nbsp;: [Domino](./exercices/gsap-domino.md) · [Le chat potté 2](./exercices/gsap-puss.md) · [Passion maladive](./exercices/gsap-passion.md)
