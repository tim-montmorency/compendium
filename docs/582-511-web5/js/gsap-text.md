# :material-format-text: GSAP : TextPlugin

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. TextPlugin **remplace le texte** d'un élément, caractère par caractère : l'effet machine à écrire.
2. La valeur `text` peut être un texte simple, ou un objet pour régler le découpage (`delimiter`), la vitesse (`speed`) ou une classe CSS (`newClass`).
3. Dans votre récit : gardez le texte final dans le HTML, et animez **à partir d'un texte vide**. Sans animation, le texte reste lisible.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

<iframe height="640" style="width: 100%;" scrolling="no" title="TextPlugin : exemple" src="https://codepen.io/tim-momo/embed/JjVeNBZ?default-tab=js%2Cresult&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [TextPlugin : exemple](https://codepen.io/tim-momo/pen/JjVeNBZ){ :target="_blank" }</small>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/TextPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

## Le principe { #principe }

TextPlugin remplace le contenu textuel d'un élément, **un caractère à la fois**. À la fin du tween, le texte a été complètement remplacé. Si on rejoue l'animation à l'envers, le texte revient, lui aussi caractère par caractère.

```js
// Remplace le texte en 2 secondes, à vitesse constante
gsap.to(".narration", {
  duration: 2,
  text: "Ceci est la suite de l'histoire.",
  ease: "none",
});
```

`ease: "none"` donne un rythme régulier, comme une machine à écrire.

<iframe height="300" style="width: 100%;" scrolling="no" title="TextPlugin : remplacer un texte" src="https://codepen.io/tim-momo/embed/MWRZwKw?default-tab=js%2Cresult&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [TextPlugin : remplacer un texte](https://codepen.io/tim-momo/pen/MWRZwKw){ :target="_blank" }</small>

<iframe height="500" style="width: 100%;" scrolling="no" title="TextPlugin : autre exemple" src="https://codepen.io/tim-momo/embed/ExJGjyZ?default-tab=js%2Cresult&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<small>Démo CodePen : [TextPlugin : autre exemple](https://codepen.io/tim-momo/pen/ExJGjyZ){ :target="_blank" }</small>

## Avec un objet : les options { #options }

Pour régler le comportement, `text` reçoit un objet. Le texte de remplacement va alors dans `value`.

```js
gsap.to(".narration", {
  duration: 2,
  text: {
    value: "Le loup, lui, l'attendait déjà.",
    delimiter: " ",
  },
});
```

| Option | Ce qu'elle fait |
|---|---|
| `value` | Le texte de remplacement. **Obligatoire** quand `text` est un objet. |
| `delimiter` | Ce qui découpe le texte. Par défaut `""` : lettre par lettre. `" "` : mot par mot. `"."` : phrase par phrase. |
| `newClass` | Une classe CSS appliquée au nouveau texte (une couleur, du gras), pour le distinguer de l'ancien. |
| `speed` | Règle la durée selon la quantité de texte : `1` est lent, `20` est très rapide. Pratique quand vos textes n'ont pas tous la même longueur. |

## Dans votre récit { #dans-votre-recit }

Le texte de votre récit doit rester lisible, même sans animation. Écrivez-le **dans le HTML** (ou dans `data.json`), et animez **à partir d'un texte vide**, avec `from()` :

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(q(".narration"), {
      text: "",       // part de vide, finit sur le texte du HTML
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
      },
    });
  });
}
```

Avec le mouvement réduit, rien ne s'anime : le texte est simplement là.

!!! tip "Un long texte? Pensez `speed`"
    Animer 10 caractères en 2 secondes, ou 500, ce n'est pas du tout le même effet. Avec `speed`, la durée s'ajuste à la longueur du texte.

## Références

- [TextPlugin : la documentation](https://gsap.com/docs/v3/Plugins/TextPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

