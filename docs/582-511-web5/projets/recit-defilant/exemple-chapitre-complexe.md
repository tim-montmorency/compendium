# :material-movie-open-outline: Exemple : un chapitre, plusieurs médias en timeline

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Un chapitre avec **plusieurs images et plusieurs animations** : une scène épinglée, 5 calques en traveling avant, deux personnages qui entrent, un fond qui passe au noir, et la tête du Chaperon qui se transforme en gueule pleine de dents (MorphSVG).
2. Dans `data.json`, on range les médias selon leur rôle : **un tableau** quand ils se traitent tous pareil (les calques), **un objet avec des noms** quand chacun a sa propre animation (les personnages).
3. Les **classes** sont le pont : `createMedia()` donne une classe à chaque élément, et `animate()` cible ces classes. Elle ne lit jamais le JSON. C'est pourquoi `animate()` est identique à la [*phase 1*{ .w5-phase .w5-phase-1 }](arborescence-recit-defilant.md#html-phase-1) (intégration statique : HTML écrit à la main) et à la [*phase 2*{ .w5-phase .w5-phase-2 }](arborescence-recit-defilant.md#phase-2) (intégration dynamique : HTML construit depuis le JSON).

</div>

## Le chapitre { #le-chapitre }

Le chapitre 5, « La clairière », se joue dans une **seule scène épinglée**. Pendant 6 écrans de défilement :

1. la caméra avance dans le paysage : 5 calques, du ciel aux herbes, grossissent chacun à sa vitesse (un **traveling avant**);
2. le Chaperon entre lentement par la gauche, puis **une pause**;
3. le loup entre lentement par la droite, et **en même temps**, le fond passe au noir pendant qu'au-dessus, la tête du Chaperon apparaît, puis se transforme en gueule pleine de dents;
4. **une pause** sur l'image finale, puis la scène se libère et la page continue.

Défilez dans la démo :

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-chapitre-complexe&onglets=html,js,resultat&actif=resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:560px;border:0" loading="lazy"></iframe>

La démo contient le HTML **écrit à la main**, comme à la *phase 1*{ .w5-phase .w5-phase-1 } (intégration statique). Plus bas, on voit comment le même HTML se construit depuis `data.json`.

## Les médias, et leur rôle { #medias }

| Média | Combien | Ce qu'il fait | Dans le JSON |
|---|---|---|---|
| Les calques du paysage | 5 | Tous la même animation (grossir), seule l'amplitude change | Un **tableau**, du plus loin au plus proche |
| Le Chaperon | 1 | Entre par la gauche | Un **objet** nommé `gauche` |
| Le loup | 1 | Entre par la droite | Un **objet** nommé `droite` |
| La tête qui devient gueule | 1 SVG, 4 tracés | Se transforme ([MorphSVG](../../js/gsap-morphsvg.md)) | Rien : le SVG est **dans le module** (voir plus bas) |
| Le voile noir | 1 | Passe au noir | Rien : c'est une simple `div`, sans image |

## Le JSON { #json }

```json
{
  "id": "la-clairiere",
  "numero": 5,
  "titre": "La clairière",
  "responsable": "Prénom",
  "texte": ["Au cœur de la forêt, la clairière s'ouvre."],
  "contenu": {
    "calques": [
      { "id": "ciel", "src": "assets/images/ch-05/ciel.svg" },
      { "id": "montagnes", "src": "assets/images/ch-05/montagnes.svg" },
      { "id": "foret-loin", "src": "assets/images/ch-05/foret-loin.svg" },
      { "id": "foret-proche", "src": "assets/images/ch-05/foret-proche.svg" },
      { "id": "herbes", "src": "assets/images/ch-05/herbes.svg" }
    ],
    "personnages": {
      "gauche": {
        "src": "assets/images/ch-05/chaperon.svg",
        "alt": "Le Chaperon rouge"
      },
      "droite": {
        "src": "assets/images/ch-05/loup.svg",
        "alt": "Le loup"
      }
    }
  }
}
```

!!! tip "Nommer par le rôle, pas par le fichier"
    On écrit `gauche` et `droite`, pas `loup-v3-final`. Si vous changez d'image, seul le `src` change : le code ne bouge pas.

    Et les calques ont un `alt` vide : ce sont des décors. Les personnages, eux, ont un vrai texte alternatif.

## `createMedia()` : du JSON aux classes { #create-media }

```js
// js/chapitres/ch-05.js

// La tête qui devient une gueule : un SVG DANS la page,
// pour que MorphSVG puisse modifier ses tracés.
// (Les tracés complets : onglet HTML de la démo.)
const MORPH = `
  <svg class="morph" viewBox="0 0 400 400" aria-hidden="true">
    <path class="morph__capuche" d="M200,30 C250,70 ..."/>
    <path class="morph__visage" d="M200,160 C245,160 ..."/>
    <circle class="morph__oeil" cx="178" cy="235" r="6"/>
    <circle class="morph__oeil" cx="222" cy="235" r="6"/>
    <path class="morph__haut" d="M30,190 C70,60 ..."/>
    <path class="morph__bas" d="M50,262 L72,300 ..."/>
  </svg>
`;

export function createMedia(chapter) {
  const c = chapter.contenu;

  // Un <img> par calque, du plus loin au plus proche
  const calques = c.calques
    .map((calque) => `
      <img class="calque calque--${calque.id}"
           src="${calque.src}" alt="">`)
    .join("");

  // L'ordre du HTML = l'ordre d'empilement
  return `
    <div class="scene">
      ${calques}
      <div class="voile"></div>
      ${MORPH}
      <img class="perso perso--gauche"
           src="${c.personnages.gauche.src}"
           alt="${c.personnages.gauche.alt}">
      <img class="perso perso--droite"
           src="${c.personnages.droite.src}"
           alt="${c.personnages.droite.alt}">
    </div>
  `;
}
```

`.map()` transforme chaque calque du tableau en balise `<img>`, et `.join("")` colle ces balises en un seul texte. Voir [Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join).

L'ordre du HTML décide de ce qui passe devant : le voile noir couvre les calques, la tête ressort sur le noir, et les personnages sont devant tout.

!!! info "Pourquoi le SVG du morph n'est pas dans le JSON?"
    MorphSVG modifie les **tracés** (`<path>`) d'un SVG. Il faut donc que le SVG soit **dans la page** : une `<img src="...svg">` ne laisse pas le JavaScript toucher à ses tracés. Et ces formes font partie de l'animation, pas des données : leur place est dans le module du chapitre.

    Le SVG a 4 tracés : la **capuche** et le **visage** (le départ, visibles), la **mâchoire du haut** et la **mâchoire du bas** (l'arrivée, cachées en CSS). La capuche devient la mâchoire du haut, le visage devient celle du bas.

## `animate()` : une timeline épinglée { #animate }

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=600%",   // 6 écrans de défilement
        pin: true,
        scrub: 1,
      },
    });

    // 1. Traveling avant : plus le calque est proche,
    //    plus il grossit (i = son rang, 0 = le ciel)
    tl.to(q(".calque"), {
      scale: (i) => 1 + i * 0.2,
      duration: 3,
    })
      // 2. Le personnage de gauche entre, lentement
      .from(q(".perso--gauche"), { x: "-100vw", duration: 2 })
      // 3. Une pause ("+=1"), puis celui de droite entre...
      .from(q(".perso--droite"), { x: "100vw", duration: 3 }, "+=1")
      // ... et en même temps, le noir
      .to(q(".voile"), { opacity: 1, duration: 3 }, "<")
      // et la tête du Chaperon apparaît...
      .from(q(".morph"), { opacity: 0, duration: 1 }, "<")
      // ... puis, 1 part plus tard ("<1"), devient une gueule
      .to(q(".morph__capuche"), {
        morphSVG: q(".morph__haut")[0],
        stroke: "#F2F2F2",
        duration: 2,
      }, "<1")
      .to(q(".morph__visage"), {
        morphSVG: q(".morph__bas")[0],
        stroke: "#F2F2F2",
        duration: 2,
      }, "<")
      .to(q(".morph__oeil"), { opacity: 0, duration: 0.5 }, "<")
      // 4. Une pause à la fin, avant de libérer la scène
      .to({}, { duration: 1.5 });
  });
}
```

Cinq choses à remarquer :

- **`scale: (i) => 1 + i * 0.2`** : une valeur calculée par une [fonction fléchée](../../js/recap-js.md#fonctions-flechees). GSAP l'appelle pour chaque calque, avec son rang `i`. Le ciel (`i = 0`) ne grossit pas, les herbes (`i = 4`) grossissent presque du double. Ajouter un 6e calque ne demande **aucune ligne de JavaScript** : seulement une ligne dans le JSON.
- **`duration`**, avec `scrub`, ne compte plus en secondes : c'est une **part du défilement**. Ici : le traveling 3 parts, le Chaperon 2, la pause 1, le loup 3, la pause finale 1,5. En tout 10,5 parts, réparties sur les 6 écrans de `end`. Pour ralentir un moment, on augmente sa `duration`; pour ralentir toute la scène, on augmente `end`.
- **`"<"`** : le voile et la tête commencent **en même temps** que l'entrée du loup. **`"+=1"`** : le loup attend une part après la fin du Chaperon. **`"<1"`** : le morph commence une part après l'apparition de la tête, et finit en même temps que le loup. Voir [le paramètre de position](../../js/gsap-bases.md#la-timeline).
- **`morphSVG: q(".morph__haut")[0]`** : la forme d'arrivée, cherchée dans la section, comme le reste. On anime aussi `stroke` : le trait passe du rouge du Chaperon au blanc des dents. Les yeux, eux, disparaissent : ils n'ont pas de forme d'arrivée.
- **`.to({}, { duration: 1.5 })`** : un tween qui n'anime rien. Il sert seulement à allonger la timeline : la scène reste épinglée sur l'image finale avant de repartir. C'est la façon habituelle de faire une pause à la fin.

!!! warning "`x` plutôt que `xPercent` pour sortir de l'écran"
    `xPercent: -150` déplace le personnage de 1,5 fois **sa propre largeur**. S'il est étroit, on voit encore son bord au départ. `x: "-100vw"` le déplace d'une largeur **d'écran** complète : il part vraiment hors cadre, quelle que soit la taille de la fenêtre.

## Le CSS de la scène { #css }

```css
/* La scène : les éléments s'empilent dans l'ordre du HTML */
.scene {
  position: relative;
  height: 100vh;
  overflow: clip;
}

/* Les calques couvrent toute la scène */
.calque {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Le voile : noir, invisible au départ */
.voile {
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0;
}

.perso {
  position: absolute;
  bottom: 4vh;
  height: 45vh;
}

.perso--gauche { left: 12%; }

.perso--droite {
  right: 8%;
  height: 26vh;  /* le loup : plus large que haut */
}

/* Le morph : du trait seulement (line art) */
.morph {
  position: absolute;
  left: 50%;
  top: 35%;
  width: 40vh;
  translate: -50% -50%;
  fill: none;
  stroke: #E0233F;
  stroke-width: 5;
}

/* Les formes d'arrivée : des modèles, invisibles */
.morph__haut,
.morph__bas {
  visibility: hidden;
}
```

`overflow: clip`, et non `hidden` : c'est [le même piège](../../css/animations-scroll.md#piege-overflow) qu'avec les animations CSS au défilement.

## *Phase 1*{ .w5-phase .w5-phase-1 } : le même chapitre, en HTML { #phase-1 }

À la *phase 1*{ .w5-phase .w5-phase-1 }, vous écrivez **à la main** ce que `createMedia()` construirait, dans votre `<section>` de `index.html` :

```html
<section class="chapitre" id="la-clairiere">
  <h2>La clairière</h2>
  <p>Au cœur de la forêt, la clairière s'ouvre.</p>
  <div class="scene">
    <img class="calque calque--ciel" alt=""
         src="assets/images/ch-05/ciel.svg">
    <!-- ... les 4 autres calques ... -->
    <div class="voile"></div>
    <svg class="morph" viewBox="0 0 400 400" aria-hidden="true">
      <!-- ... les 4 tracés et les yeux ... -->
    </svg>
    <img class="perso perso--gauche" alt="Le Chaperon rouge"
         src="assets/images/ch-05/chaperon.svg">
    <img class="perso perso--droite" alt="Le loup"
         src="assets/images/ch-05/loup.svg">
  </div>
</section>
```

Mêmes classes, même ordre : la fonction `animate()` est **exactement la même**. À la *phase 2*{ .w5-phase .w5-phase-2 }, vous déplacez les chemins et les textes alternatifs dans le JSON, et le HTML dans `createMedia()`. Le SVG du morph, lui, reste dans le module. Voir [Passer à la *phase 2*{ .w5-phase .w5-phase-2 }](arborescence-recit-defilant.md#phase-2).

## À retenir { #a-retenir }

1. **Les classes sont le pont** entre les données et l'animation. Une fois la page construite, on anime ce qu'on voit dans l'inspecteur.
2. **Un tableau** pour les médias qui se traitent pareil; **un objet nommé** pour ceux qui ont chacun leur rôle.
3. **Une seule timeline** pour toute la scène : l'ordre du récit devient l'ordre des tweens.
4. **Pas plus d'une scène comme celle-là** par chapitre : elle est épinglée, et chacun épingle [au plus la moitié de ses chapitres](index.md).

[:material-file-tree: Arborescence du dépôt](arborescence-recit-defilant.md){ .md-button }
[:material-gesture-swipe-vertical: GSAP : ScrollTrigger](../../js/gsap-scrolltrigger.md){ .md-button }
