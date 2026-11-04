# :material-shape-outline: GSAP : MorphSVG

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. MorphSVG **transforme une forme SVG en une autre** : un cercle en hippopotame, une goutte en flamme, une lune en soleil.
2. Il vous faut deux tracés (`<path>`) : la forme de départ, visible, et la forme d'arrivée, cachée. GSAP ajoute lui-même les points qui manquent.
3. Si la transition « se chiffonne », réglez `shapeIndex` : il choisit quel point de départ va vers quel point d'arrivée.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/MorphSVGPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

## Le principe { #principe }

Dans un SVG, deux tracés, chacun avec un `id` :

```html
<svg viewBox="0 0 500 500">
  <path id="cercle" d="..." />
  <path id="hippo" d="..." />
</svg>
```

En CSS, on cache la forme d'arrivée : elle sert seulement de modèle.

```css
#hippo {
  visibility: hidden;
}
```

Puis on anime la forme de départ, avec `morphSVG` qui pointe vers la forme d'arrivée :

```js
gsap.to("#cercle", {
  duration: 2,
  morphSVG: "#hippo",
});
```

<iframe height="500" style="width: 100%;" scrolling="no" title="MorphSVG : le principe" src="https://codepen.io/tim-momo/embed/GRYyZOb?default-tab=js&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MorphSVG : le principe](https://codepen.io/tim-momo/pen/GRYyZOb){ :target="_blank" }</small>

MorphSVG lit les deux tracés, les convertit en courbes de Bézier, et ajoute des points à celui qui en a le moins, pour que les deux en aient autant. Vous n'avez rien à calculer.

Et comme MorphSVG fait partie de GSAP, enchaîner plusieurs formes dans une timeline est facile : un cercle, puis un hippopotame, une étoile et un éléphant.

<iframe height="500" style="width: 100%;" scrolling="no" title="MorphSVG : une timeline de formes" src="https://codepen.io/tim-momo/embed/WNadQaz?default-tab=js&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MorphSVG : une timeline de formes](https://codepen.io/tim-momo/pen/WNadQaz){ :target="_blank" }</small>

!!! tip "Un cercle ou un rectangle?"
    MorphSVG anime des `<path>`. Si votre forme est un `<circle>`, un `<rect>` ou un `<polygon>`, convertissez-la d'abord :

    ```js
    MorphSVGPlugin.convertToPath("circle, rect, polygon");
    ```

    Ou, dans Illustrator, exportez vos formes en tracés.

## Avec un objet { #objet }

Pour régler le comportement, `morphSVG` reçoit un objet. La forme d'arrivée va alors dans `shape`.

<iframe height="500" style="width: 100%;" scrolling="no" title="MorphSVG : avec un objet" src="https://codepen.io/tim-momo/embed/bGmapLV?default-tab=js&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MorphSVG : avec un objet](https://codepen.io/tim-momo/pen/bGmapLV){ :target="_blank" }</small>

## Éviter le chiffon : `shapeIndex` { #shape-index }

Parfois, la forme se tord et se mélange avant de prendre sa nouvelle forme. C'est que les points de départ ne vont pas vers les « bons » points d'arrivée. `shapeIndex` décale la correspondance :

```js
gsap.to("#carre", {
  duration: 3,
  morphSVG: {
    shape: "#etoile",
    shapeIndex: 5,
  },
});
```

Trouver le bon nombre à l'œil, ce n'est pas évident. La démo suivante vous aide :

1. Faites un *fork* de la démo.
2. Gardez la fonction `findShapeIndex()`, déjà écrite.
3. Remplacez les formes par vos deux tracés.
4. Appelez `findShapeIndex()` avec vos deux formes, puis utilisez les boutons **+** et **−** pour tester les valeurs.

<iframe height="500" style="width: 100%;" scrolling="no" title="MorphSVG : trouver le shapeIndex" src="https://codepen.io/tim-momo/embed/qBJpbom?default-tab=result&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MorphSVG : trouver le shapeIndex](https://codepen.io/tim-momo/pen/qBJpbom){ :target="_blank" }</small>

Pour des formes qui tournent sur elles-mêmes, essayez aussi `type: "rotational"` : les points voyagent en arc plutôt qu'en ligne droite.

## D'autres exemples { #exemples }

<iframe height="850" style="width: 100%;" scrolling="no" title="MorphSVG : d'autres exemples" src="https://codepen.io/tim-momo/embed/mdzpVKL?default-tab=result&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MorphSVG : d'autres exemples](https://codepen.io/tim-momo/pen/mdzpVKL){ :target="_blank" }</small>

## Dans votre récit { #dans-votre-recit }

Une forme qui se transforme au rythme du défilement : la lune qui devient soleil entre deux chapitres.

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.to(q(".lune"), {
      morphSVG: q(".soleil")[0],
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
}
```

## Références

- [MorphSVGPlugin : la documentation](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

