# :material-movie-open-outline: Exemple : un chapitre complexe

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Un chapitre avec **plusieurs images et plusieurs animations** : une scène épinglée, 5 calques en traveling avant, deux personnages qui entrent, une explosion et un fond qui passe au noir.
2. Dans `data.json`, on range les médias selon leur rôle : **un tableau** quand ils se traitent tous pareil (les calques), **un objet avec des noms** quand chacun a sa propre animation (les personnages).
3. Les **classes** sont le pont : `createMedia()` donne une classe à chaque élément, et `animate()` cible ces classes. Elle ne lit jamais le JSON. C'est pourquoi `animate()` est identique au [temps 1](arborescence-recit-defilant.md#html-temps-1) (HTML écrit à la main) et au [temps 2](arborescence-recit-defilant.md#temps-2) (HTML construit depuis le JSON).

</div>

## Le chapitre { #le-chapitre }

Le chapitre 5, « La clairière », se joue dans une **seule scène épinglée**. Pendant 3 écrans de défilement :

1. la caméra avance dans le paysage : 5 calques, du ciel aux herbes, grossissent chacun à sa vitesse (un **traveling avant**);
2. le Chaperon entre par la gauche;
3. le loup entre par la droite, et **en même temps**, une explosion surgit en arrière-plan pendant que le fond passe au noir.

Défilez dans la démo :

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-chapitre-complexe&onglets=js,resultat&actif=resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:560px;border:0" loading="lazy"></iframe>

La démo contient le HTML **écrit à la main**, comme au temps 1. Plus bas, on voit comment le même HTML se construit depuis `data.json`.

## Les médias, et leur rôle { #medias }

| Média | Combien | Ce qu'il fait | Dans le JSON |
|---|---|---|---|
| Les calques du paysage | 5 | Tous la même animation (grossir), seule l'amplitude change | Un **tableau**, du plus loin au plus proche |
| Le Chaperon | 1 | Entre par la gauche | Un **objet** nommé `gauche` |
| Le loup | 1 | Entre par la droite | Un **objet** nommé `droite` |
| L'explosion | 1 | Surgit en arrière-plan | Un **objet** nommé `explosion` |
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
    },
    "explosion": { "src": "assets/images/ch-05/explosion.svg" }
  }
}
```

!!! tip "Nommer par le rôle, pas par le fichier"
    On écrit `gauche` et `droite`, pas `loup-v3-final`. Si vous changez d'image, seul le `src` change : le code ne bouge pas.

    Et les calques ont un `alt` vide : ce sont des décors. Les personnages, eux, ont un vrai texte alternatif.

## `createMedia()` : du JSON aux classes { #create-media }

```js
// js/chapitres/ch-05.js
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
      <img class="explosion" src="${c.explosion.src}" alt="">
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

L'ordre du HTML décide de ce qui passe devant : le voile noir couvre les calques, l'explosion ressort sur le noir, et les personnages sont devant tout.

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
        end: "+=300%",   // 3 écrans de défilement
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
      // 2. Le personnage de gauche entre
      .from(q(".perso--gauche"), { x: "-100vw", duration: 1 })
      // 3. Celui de droite entre...
      .from(q(".perso--droite"), { x: "100vw", duration: 1 })
      // ... et en même temps, l'explosion et le noir
      .from(q(".explosion"), { scale: 0, opacity: 0 }, "<")
      .to(q(".voile"), { opacity: 1 }, "<");
  });
}
```

Trois choses à remarquer :

- **`scale: (i) => 1 + i * 0.2`** : une valeur calculée par une fonction. GSAP l'appelle pour chaque calque, avec son rang `i`. Le ciel (`i = 0`) ne grossit pas, les herbes (`i = 4`) grossissent presque du double. Ajouter un 6e calque ne demande **aucune ligne de JavaScript** : seulement une ligne dans le JSON.
- **`duration`**, avec `scrub`, ne compte plus en secondes : c'est une **part du défilement**. Ici, le traveling prend 3 parts sur 5, chaque personnage 1 part.
- **`"<"`** : l'explosion et le voile commencent **en même temps** que l'entrée du loup. Voir [le paramètre de position](../../js/gsap-bases.md#la-timeline).

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
```

`overflow: clip`, et non `hidden` : c'est [le même piège](../../css/animations-scroll.md#piege-overflow) qu'avec les animations CSS au défilement.

## Au temps 1 : le même chapitre, en HTML { #temps-1 }

Au temps 1, vous écrivez **à la main** ce que `createMedia()` construirait, dans votre `<section>` de `index.html` :

```html
<section class="chapitre" id="la-clairiere">
  <h2>La clairière</h2>
  <p>Au cœur de la forêt, la clairière s'ouvre.</p>
  <div class="scene">
    <img class="calque calque--ciel" alt=""
         src="assets/images/ch-05/ciel.svg">
    <!-- ... les 4 autres calques ... -->
    <div class="voile"></div>
    <img class="explosion" alt=""
         src="assets/images/ch-05/explosion.svg">
    <img class="perso perso--gauche" alt="Le Chaperon rouge"
         src="assets/images/ch-05/chaperon.svg">
    <img class="perso perso--droite" alt="Le loup"
         src="assets/images/ch-05/loup.svg">
  </div>
</section>
```

Mêmes classes, même ordre : la fonction `animate()` est **exactement la même**. Au temps 2, vous déplacez les chemins et les textes alternatifs dans le JSON, et le HTML dans `createMedia()`. Voir [Passer au temps 2](arborescence-recit-defilant.md#temps-2).

## À retenir { #a-retenir }

1. **Les classes sont le pont** entre les données et l'animation. Une fois la page construite, on anime ce qu'on voit dans l'inspecteur.
2. **Un tableau** pour les médias qui se traitent pareil; **un objet nommé** pour ceux qui ont chacun leur rôle.
3. **Une seule timeline** pour toute la scène : l'ordre du récit devient l'ordre des tweens.
4. **Pas plus d'une scène comme celle-là** par chapitre : elle est épinglée, et chacun épingle [au plus la moitié de ses chapitres](index.md).

[:material-file-tree: Arborescence du dépôt](arborescence-recit-defilant.md){ .md-button }
[:material-gesture-swipe-vertical: GSAP : ScrollTrigger](../../js/gsap-scrolltrigger.md){ .md-button }
