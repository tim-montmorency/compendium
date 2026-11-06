# :material-format-letter-case: GSAP : SplitText

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. SplitText **découpe un texte** en lettres, en mots ou en lignes, chacun dans sa propre balise. Vous les animez ensuite un par un, avec `stagger`.
2. `mask: "lines"` ajoute un cadre autour de chaque ligne : la ligne monte de « sous » le texte. C'est l'effet de titre le plus vu dans les récits défilants.
3. SplitText garde le texte lisible pour les lecteurs d'écran. À vous de ne pas en mettre partout : réservez-le aux titres et aux moments forts.

</div>

*Votre récit doit utiliser **au moins une extension de GSAP** (autre que ScrollTrigger), au moins une fois par équipe. Choisissez celle qui sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

Le titre apparaît lettre par lettre, puis chaque ligne du paragraphe monte de son masque.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-split-text&onglets=js,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:560px;border:0" loading="lazy"></iframe>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! tip "Un exemple trouvé ailleurs? Vérifiez sa version"
    Toutes les démos de cette page sont en **GSAP 3**. Sur le web, beaucoup d'exemples sont encore en GSAP 2, qui n'est pas entièrement compatible. [Comment reconnaître du GSAP 2](gsap-bases.md#version-3).

## Le principe { #principe }

`SplitText.create()` découpe le texte et vous redonne des tableaux d'éléments : `chars` (les lettres), `words` (les mots), `lines` (les lignes). Vous les animez comme n'importe quelle cible GSAP.

```js
// Découper le titre en mots et en lettres
const titre = SplitText.create(".titre", {
  type: "words, chars",
});

// Animer les lettres, une après l'autre
gsap.from(titre.chars, {
  y: 40,
  opacity: 0,
  stagger: 0.04,   // 0,04 s entre chaque lettre
});
```

!!! info "Pourquoi `words, chars` et pas seulement `chars`?"
    Avec `chars` seul, un mot peut se couper en fin de ligne. En découpant aussi les mots, chaque mot reste d'un bloc.

## Les options utiles { #options }

| Option | Ce qu'elle fait |
|---|---|
| `type` | Ce qu'on découpe : `"chars"`, `"words"`, `"lines"`, ou une combinaison (`"words, chars"`). |
| `mask` | Ajoute un cadre qui cache ce qui dépasse, autour de chaque ligne, mot ou lettre (`mask: "lines"`). L'élément peut alors « monter de nulle part ». |
| `autoSplit` | Redécoupe le texte quand la largeur change, ou quand la police finit de charger. Utile avec `lines`, qui dépendent de la largeur. |
| `onSplit` | Une fonction appelée après chaque découpage. Avec `autoSplit`, c'est là qu'on crée l'animation. |

!!! warning "Les lignes changent avec la largeur"
    Une « ligne », c'est ce qui tient dans la largeur de l'écran **au moment du découpage**. Si la fenêtre change, ou si votre police arrive après le découpage, les lignes ne correspondent plus. Avec `lines`, utilisez `autoSplit: true`, et créez l'animation dans `onSplit` :

    ```js
    SplitText.create(".texte", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 100,
          stagger: 0.2,
        });
      },
    });
    ```

## Dans votre récit { #dans-votre-recit }

Le titre d'un chapitre qui se révèle quand on y arrive :

```js
export function animate(section, chapter) {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const h2 = section.querySelector("h2");
    const titre = SplitText.create(h2, {
      type: "words, chars",
    });

    gsap.from(titre.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.03,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });
  });
}
```

Avec le mouvement réduit, on ne découpe rien : le titre reste tel quel.

## Références

- [SplitText : la documentation](https://gsap.com/docs/v3/Plugins/SplitText/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

