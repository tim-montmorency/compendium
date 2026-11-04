# :material-animation-play-outline:  GSAP : tweens et timelines

<video class="w-100" src="assets/gsap-website.webm" autoplay muted loop playsinline aria-label="Aperçu du site de GSAP : des animations web de toutes sortes"></video>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. **GSAP** est une librairie d'animation JavaScript. Vous connaissez déjà le principe avec Anime.js : une cible, des propriétés, une durée.
2. Un **tween** (une interpolation) anime une chose (`gsap.to()`, `from()`, `fromTo()`, `set()`). Une **timeline** enchaîne plusieurs tweens, comme un scénario.
3. C'est la base de ScrollTrigger : au prochain sujet, on accroche ces mêmes animations au défilement.

</div>

## Pourquoi GSAP, si le CSS sait animer au défilement?

Vous savez déjà animer au défilement en CSS (`animation-timeline`). Pour votre récit, GSAP sert pour ce que le CSS fait mal :

| Besoin | CSS natif | GSAP + ScrollTrigger |
|---|---|---|
| Une apparition, une barre de progression, une parallaxe | Parfait | Possible, mais inutile |
| **Enchaîner** plusieurs animations dans un ordre précis | Difficile (une plage par animation) | Une timeline |
| **Épingler** une scène pendant une séquence | `sticky` + calculs | `pin: true` |
| Firefox | Pas encore (repli fixe) | Partout |
| Déclencher du JavaScript au bon moment (un `fetch`, une classe) | Non | Les *callbacks* |

La règle du cours : **le CSS d'abord**, GSAP quand le CSS ne suffit pas.

## Installer GSAP : par CDN

Comme Bootstrap et Anime.js, GSAP se charge avec une balise `<script>`, **avant** votre propre script :

```html
<!-- GSAP 3.13 : tous les plugins sont gratuits depuis cette version -->
<script
  src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
></script>
<script src="js/script.js"></script>
```

L'objet `gsap` est alors disponible partout, y compris dans vos modules de chapitres, sans `import`.

## De Anime.js à GSAP

Vous connaissez déjà la structure :

```js
// Anime.js
anime({
  targets: ".box",
  translateX: 200,
  rotate: 90,
  duration: 1500,     // en millisecondes
});

// GSAP
gsap.to(".box", {
  x: 200,
  rotation: 90,
  duration: 1.5,      // en SECONDES
});
```

Trois différences à retenir :

- La **cible** est le premier argument, hors de l'objet.
- Les **durées** sont en **secondes**.
- Les noms de propriétés sont plus courts : `x`, `y`, `rotation`, `scale`.

## Le tween (l'interpolation) : animer une chose

Un *tween* (de *be**tween***) calcule toutes les valeurs **entre** un départ et une arrivée. En français, c'est une **interpolation**.

| Méthode | Simplement dit |
|---|---|
| `gsap.to()` | « Va vers là » : de l'état actuel aux valeurs données |
| `gsap.from()` | « Viens de là » : des valeurs données vers l'état actuel |
| `gsap.fromTo()` | « De là à là » : on donne le départ et l'arrivée |
| `gsap.set()` | « Va là, tout de suite » : sans animation |

Modifiez le code des exemples : le résultat se met à jour.

### `to()`

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-to-copie&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-3-1" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=gsap-to-copie&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

### `from()`

Très utile pour les **apparitions** : l'élément est déjà à sa place dans le CSS, et `from()` le fait arriver.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-from&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-3-1" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=gsap-from&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

### `fromTo()`

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-fromto&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-2-1" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=gsap-fromto&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

Les paramètres (`duration`, `repeat`...) vont toujours dans le **deuxième** objet.

### `set()`

Place un élément **sans animation**. On s'en sert pour préparer l'état de départ d'une scène.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-set&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-3-1" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=gsap-set&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

## Quoi animer : les propriétés

| Propriété GSAP | Effet |
|---|---|
| `x`, `y` | Déplacement (avec `transform` : performant) |
| `xPercent`, `yPercent` | Déplacement en % de la taille de l'élément |
| `rotation` | Rotation, en degrés |
| `scale`, `scaleX`, `scaleY` | Mise à l'échelle |
| `opacity` | Transparence |
| `autoAlpha` | `opacity` **et** `visibility: hidden` à 0 : l'élément disparaît vraiment |
| `backgroundColor` | Couleur de fond |

Les propriétés CSS s'écrivent en *camelCase* : `background-color` devient `backgroundColor`.

!!! tip "Animez `x` et `y`, pas `left` et `top`"
    Comme en CSS : `x`, `y`, `scale`, `rotation` et `opacity` ne font pas recalculer la mise en page. L'animation reste fluide.

**Les unités** : par défaut, des pixels et des degrés. Vous pouvez aussi écrire une chaîne :

```js
x: 200        // 200 px
x: "50vw"     // la moitié de la largeur de l'écran
x: "+=100"    // 100 px de PLUS que la position actuelle
```

**Le point de pivot** : une rotation ou une mise à l'échelle se fait autour du centre. Pour changer : `transformOrigin: "left bottom"`.

## Comment l'animer : les paramètres

| Paramètre | Rôle |
|---|---|
| `duration` | Durée, en secondes (`0.5` par défaut) |
| `delay` | Attente avant de commencer |
| `repeat` | Nombre de répétitions (`-1` : à l'infini) |
| `repeatDelay` | Pause entre les répétitions |
| `yoyo` | Repart en sens inverse à chaque répétition |
| `ease` | La courbe d'accélération |
| `stagger` | Décalage entre plusieurs cibles (ex. `0.1`) |

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-gsap-proprietes&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=w5-gsap-proprietes&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

### Les courbes d'accélération (`ease`)

L'*ease*, aussi appelé lissage de vitesse, décrit **comment** l'animation accélère et ralentit. C'est ce qui distingue une animation robotique d'une animation vivante. Vous connaissez le principe : ce sont les principes d'animation du cours 9.1.

```js
ease: "power2.out"    // ralentit à la fin : le plus naturel
ease: "back.inOut"    // dépasse un peu, puis revient
ease: "elastic.out"   // rebondit
ease: "none"          // vitesse constante : pour le défilement
```

Pour les essayer : [le visualiseur d'*eases* de GSAP](https://gsap.com/docs/v3/Eases){ :target="_blank" }.

## La timeline : enchaîner { #la-timeline }

Une **timeline** joue plusieurs tweens **les uns après les autres**, dans l'ordre où on les ajoute. C'est ce que vous utiliserez pour une scène de votre récit.

```js
const tl = gsap.timeline();

tl.to(".box", { x: 100, duration: 1 })        // commence à 0 s
  .to(".box", { rotation: 360, duration: 1 }) // après le premier
  .to(".box", { y: 100, duration: 1 });       // après le deuxième
```

Attention : pas de point-virgule entre les `.to()`, seulement à la fin.

### Le paramètre de position

Un 3e argument décale le début d'un tween :

| Position | Signifie |
|---|---|
| *(rien)* | À la suite du précédent |
| `"+=0.5"` | 0,5 s **après** la fin du précédent |
| `"-=0.5"` | 0,5 s **avant** la fin du précédent (ils se chevauchent) |
| `"<"` | En même temps que le **début** du précédent |
| `"<0.5"` | 0,5 s après le **début** du précédent |

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-gsap-timeline&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=w5-gsap-timeline&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

Une timeline accepte aussi des paramètres, comme un tween : `gsap.timeline({ repeat: -1, repeatDelay: 1 })`.

## Le mouvement réduit avec GSAP

Comme en CSS, **`prefers-reduced-motion` est obligatoire** dans votre récit. Avec GSAP, on utilise `gsap.matchMedia()` : on crée les animations **seulement** si le visiteur accepte le mouvement.

```js
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  // Toutes vos animations GSAP ici
  gsap.to(".box", { x: 120, duration: 1 });
});
```

Si le réglage change, GSAP annule tout seul ce qui a été créé dans la fonction. Avec le mouvement réduit, les éléments restent à leur état CSS : écrivez donc votre CSS pour que l'état **final** soit lisible sans animation.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-gsap-reduced-motion&onglets=js,resultat&disposition=cote&boutons=rejouer" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

<small>[:material-fullscreen: Ouvrir la démo en plein écran](https://tim-montmorency.com/Fragment/v/?f=w5-gsap-reduced-motion&onglets=js,resultat&modifiable=1&disposition=cote&boutons=rejouer){ :target="_blank" }</small>

Pour tester : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Pour pratiquer

[:material-pencil-ruler: Exercice : Zombi (une interpolation)](../exercices/ex-gsap-zombi/index.md){ .md-button }

[:material-pencil-ruler: Exercice : Magie (une timeline)](../exercices/ex-gsap-magie/index.md){ .md-button }

[:material-gesture-swipe-vertical: La suite : ScrollTrigger](gsap-scrolltrigger.md){ .md-button .md-button--primary }

## Références

- [La documentation de GSAP](https://gsap.com/docs/v3/){ :target="_blank" } et son [aide-mémoire](https://gsap.com/cheatsheet){ :target="_blank" }
- Exemples `to()`, `from()`, `fromTo()` et `set()` : Fragment, cours Web 3 (582-311), TIM Montmorency.
