# :material-vector-curve: GSAP : MotionPath

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. MotionPath **déplace un élément le long d'un tracé** : un `<path>` SVG dessiné dans Illustrator, ou une liste de points.
2. `align` colle l'élément sur le tracé, `alignOrigin` choisit son point d'ancrage, `autoRotate` le fait tourner dans le sens de la courbe.
3. Dans votre récit, avec `scrub` : le personnage avance sur son chemin au rythme du défilement.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

L'hélicoptère suit un tracé, et pivote dans le sens de la courbe.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : l'hélicoptère, de Chris Dyer" src="https://codepen.io/tim-momo/embed/WNmPwXM?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : l'hélicoptère, de Chris Dyer](https://codepen.io/tim-momo/pen/WNmPwXM){ :target="_blank" }</small>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/MotionPathPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! warning "Bezier, l'ancêtre"
    Sur le web, vous tomberez peut-être sur le plugin **Bezier** de GSAP. C'est l'ancêtre de MotionPath, remplacé en 2019 avec GSAP 3. Ne les confondez pas.

## Le principe { #principe }

La façon la plus simple : un tracé dans un SVG, et la propriété `motionPath` qui pointe vers ce tracé.

```js
gsap.to(".carre", {
  duration: 3,
  motionPath: "#courbe",   // le <path id="courbe"> du SVG
});
```

!!! info "Obtenir un tracé"
    Dessinez votre courbe dans Adobe Illustrator (outil plume), exportez-la en SVG, et donnez un `id` au `<path>`.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : utilisation de base" src="https://codepen.io/tim-momo/embed/eYXxZyx?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : utilisation de base](https://codepen.io/tim-momo/pen/eYXxZyx){ :target="_blank" }</small>

GSAP lit les coordonnées du tracé et les applique en `transform` à l'élément. Mais attention : l'élément **ne se superpose pas** au tracé. Il fait le même trajet, à partir de **sa propre position**. Ici, le SVG est déplacé à droite, et le carré fait exactement le même parcours qu'avant :

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : le SVG déplacé" src="https://codepen.io/tim-momo/embed/ZEPwWrV?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : le SVG déplacé](https://codepen.io/tim-momo/pen/ZEPwWrV){ :target="_blank" }</small>

## Avec un objet { #objet }

Pour régler le comportement, `motionPath` reçoit un objet. Le tracé va alors dans `path`.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : avec un objet" src="https://codepen.io/tim-momo/embed/poYGyLO?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : avec un objet](https://codepen.io/tim-momo/pen/poYGyLO){ :target="_blank" }</small>

### `align` : coller l'élément au tracé { #align }

`align` superpose l'élément au tracé : il le suit là où il est vraiment dessiné.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : align" src="https://codepen.io/tim-momo/embed/QWoYNrr?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : align](https://codepen.io/tim-momo/pen/QWoYNrr){ :target="_blank" }</small>

### `alignOrigin` : le point d'ancrage { #align-origin }

Par défaut, c'est le **coin supérieur gauche** de l'élément qui suit le tracé. Avec `alignOrigin`, on choisit un autre point : `[0.5, 0.5]`, c'est le centre.

```js
motionPath: {
  path: "#courbe",
  align: "#courbe",
  alignOrigin: [0.5, 0.5],   // le centre de l'élément
},
```

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : alignOrigin, exemple 1" src="https://codepen.io/tim-momo/embed/JjzxKNE?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : alignOrigin, exemple 1](https://codepen.io/tim-momo/pen/JjzxKNE){ :target="_blank" }</small>

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : alignOrigin, exemple 2" src="https://codepen.io/tim-momo/embed/JjVwrxL?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : alignOrigin, exemple 2](https://codepen.io/tim-momo/pen/JjVwrxL){ :target="_blank" }</small>

### `start` et `end` : une partie du tracé { #start-end }

`0` est le début du tracé, `1` la fin. `start: 0.5` commence à mi-chemin :

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : start" src="https://codepen.io/tim-momo/embed/wvONGXp?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : start](https://codepen.io/tim-momo/pen/wvONGXp){ :target="_blank" }</small>

Et en inversant `start` et `end`, l'élément parcourt le tracé à l'envers :

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : à l'envers" src="https://codepen.io/tim-momo/embed/zYbeqaV?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : à l'envers](https://codepen.io/tim-momo/pen/zYbeqaV){ :target="_blank" }</small>

### `autoRotate` : suivre la courbe { #auto-rotate }

`autoRotate: true` fait pivoter l'élément dans le sens du tracé, comme une voiture dans un virage.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : autoRotate" src="https://codepen.io/tim-momo/embed/mdovEWX?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : autoRotate](https://codepen.io/tim-momo/pen/mdovEWX){ :target="_blank" }</small>

!!! tip "`autoRotate` ne fait rien?"
    C'est presque toujours la majuscule : `autoRotate`, pas `autorotate`.

## Sans SVG : une liste de points { #points }

On peut aussi donner un tableau de coordonnées. GSAP trace une courbe qui passe par chaque point, à partir de la position de l'élément.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : des coordonnées" src="https://codepen.io/tim-momo/embed/wvONWzE?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : des coordonnées](https://codepen.io/tim-momo/pen/wvONWzE){ :target="_blank" }</small>

`curviness` règle la courbe : `1` par défaut, `0` pour des lignes droites, plus de `1` pour des courbes plus prononcées.

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : curviness 0" src="https://codepen.io/tim-momo/embed/yLwZJVm?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : curviness 0](https://codepen.io/tim-momo/pen/yLwZJVm){ :target="_blank" }</small>

<iframe height="500" style="width: 100%;" scrolling="no" title="MotionPath : curviness prononcée" src="https://codepen.io/tim-momo/embed/gOEqMgz?default-tab=result&editable=false" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [MotionPath : curviness prononcée](https://codepen.io/tim-momo/pen/gOEqMgz){ :target="_blank" }</small>

## Aligner un tracé sur une image de fond { #image-de-fond }

Votre personnage doit suivre un chemin **dans une illustration** (une route, une rivière)? Le tracé et l'image doivent avoir exactement la même taille.

1. Si l'image est en `background-image`, remettez-la en balise `<img>`.
2. Dans Illustrator, placez l'image, ajustez le plan de travail à ses dimensions, dessinez le tracé par-dessus, supprimez l'image, puis exportez le SVG.
3. Dans le HTML, superposez l'`<img>` et le SVG, à la même taille (par exemple `width: 100%; height: 100%` dans la section).
4. Sur l'image : `object-fit: cover; object-position: 0 0;`.
5. Sur le SVG, ajoutez ces deux attributs, avec la largeur et la hauteur de **votre** image :

    ```html
    <svg viewBox="0 0 2000 1335" preserveAspectRatio="xMinYMin slice">
    ```

    L'image et le tracé sont recadrés de la même façon : ils restent alignés.

!!! warning "Le tracé est calculé au départ"
    GSAP calcule le trajet quand l'animation est créée. Si la fenêtre change de taille ensuite, le trajet ne suit pas. Pour un récit responsive, gardez `align` et le SVG recadré comme ci-dessus, et testez à plusieurs largeurs.

## Dans votre récit { #dans-votre-recit }

Avec `scrub`, le personnage avance sur son chemin au rythme du défilement :

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.to(q(".chaperon"), {
      ease: "none",
      motionPath: {
        path: q(".chemin")[0],
        align: q(".chemin")[0],
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });
}
```

`ease: "none"` : la vitesse sur le chemin suit exactement celle du défilement.

## Références

- [MotionPathPlugin : la documentation](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

