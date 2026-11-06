# :material-draw: GSAP : DrawSVG

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. DrawSVG **dessine le contour** (le `stroke`) d'un tracé SVG, comme si une main le traçait. Il fonctionne sur `<path>`, `<line>`, `<polyline>`, `<polygon>`, `<rect>` et `<ellipse>`.
2. `drawSVG` prend une ou deux valeurs : la partie visible du trait. `"0%"` : rien. `"100%"` : tout. `"40% 60%"` : un segment au milieu.
3. Dans votre récit : une carte, un chemin, une signature qui se dessine au défilement, avec `scrub`. Le loup du Chaperon, au chapitre 4, se dessine avec DrawSVG.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

Les deux bornes du trait changent : la partie visible glisse le long du tracé.

<iframe height="550" style="width: 100%;" scrolling="no" title="DrawSVG : le principe" src="https://codepen.io/tim-momo/embed/ExdmrwY?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [DrawSVG : le principe](https://codepen.io/tim-momo/pen/ExdmrwY){ :target="_blank" }</small>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/DrawSVGPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! tip "Un exemple trouvé ailleurs? Vérifiez sa version"
    Toutes les démos de cette page sont en **GSAP 3**. Sur le web, beaucoup d'exemples sont encore en GSAP 2, qui n'est pas entièrement compatible. [Comment reconnaître du GSAP 2](gsap-bases.md#version-3).

## Avant de commencer : un SVG avec un contour { #svg }

DrawSVG anime le **contour** (`stroke`), pas le remplissage (`fill`). Votre tracé doit donc avoir un contour visible :

```css
.trace {
  fill: none;
  stroke: #FF2B47;
  stroke-width: 4;
}
```

Pour bien comprendre les contours en SVG : [SVG : remplissage et contour (MDN)](https://developer.mozilla.org/fr/docs/Web/SVG/Tutorial/Fills_and_Strokes){ :target="_blank" }.

!!! info "Sous le capot"
    DrawSVG anime deux propriétés CSS du SVG : `stroke-dasharray` et `stroke-dashoffset`. Vous pourriez le faire à la main, mais il faudrait calculer la longueur exacte de chaque tracé.

## Le principe { #principe }

`drawSVG` peut contenir **une ou deux valeurs** :

- **Deux valeurs**, séparées par un espace : le début et la fin de la partie visible. En pourcentages (`"40% 60%"`) ou en longueurs, sans unité (`"20 350"`).
- **Une seule valeur** : le début est alors `0`. `"100%"`, c'est donc `"0 100%"` : le trait au complet.

Pour voir un trait se dessiner du début à la fin, on part de `0`, avec `set()`, puis on anime vers `100%`, avec `to()` :

<iframe height="440" style="width: 100%;" scrolling="no" title="DrawSVG : set() puis to()" src="https://codepen.io/tim-momo/embed/OJBmKjy?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [DrawSVG : set() puis to()](https://codepen.io/tim-momo/pen/OJBmKjy){ :target="_blank" }</small>

On peut aussi le faire en une seule ligne, avec `fromTo()` :

<iframe height="440" style="width: 100%;" scrolling="no" title="DrawSVG : fromTo()" src="https://codepen.io/tim-momo/embed/XWxRGjK?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [DrawSVG : fromTo()](https://codepen.io/tim-momo/pen/XWxRGjK){ :target="_blank" }</small>

## Plusieurs traits : `stagger` { #stagger }

Tous les tracés qui ont la classe `.dessine-moi` se dessinent l'un après l'autre, à 0,1 s d'intervalle :

```js
gsap.from(".dessine-moi", {
  duration: 1,
  drawSVG: 0,
  stagger: 0.1,
});
```

Et dans une timeline : dessiner chaque trait, puis finir avec le remplissage.

<iframe height="600" style="width: 100%;" scrolling="no" title="DrawSVG : une timeline" src="https://codepen.io/tim-momo/embed/mdzwbEO?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [DrawSVG : une timeline](https://codepen.io/tim-momo/pen/mdzwbEO){ :target="_blank" }</small>

## Dans votre récit { #dans-votre-recit }

Un chemin sur une carte qui se dessine au rythme du défilement :

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(q(".chemin"), {
      drawSVG: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 60%",
        scrub: 1,
      },
    });
  });
}
```

Avec le mouvement réduit, le chemin est affiché au complet, tout de suite.

## Références

- [DrawSVGPlugin : la documentation](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

