# :material-shuffle-variant: GSAP : ScrambleText

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. ScrambleText **brouille un texte** avec des caractères au hasard, puis le révèle : l'effet « décodage », « signal radio » ou « terminal ».
2. `text: "{original}"` garde le texte du HTML : il se brouille, puis revient. Vous choisissez les caractères du brouillage avec `chars`.
3. Un effet fort, donc rare : un titre, une date, un nom de lieu. Pas un paragraphe.

</div>

*Votre récit doit utiliser **au moins une extension de GSAP** (autre que ScrollTrigger), au moins une fois par équipe. Choisissez celle qui sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-scramble-text&onglets=resultat,js&modifiable=1&boutons=rejouer,ouvrir&disposition=pile" style="width:100%;height:480px;border:0" loading="lazy"></iframe>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrambleTextPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! tip "Un exemple trouvé ailleurs? Vérifiez sa version"
    Toutes les démos de cette page sont en **GSAP 3**. Sur le web, beaucoup d'exemples sont encore en GSAP 2, qui n'est pas entièrement compatible. [Comment reconnaître du GSAP 2](gsap-bases.md#version-3).

## Le principe { #principe }

```js
gsap.to(".titre", {
  duration: 2,
  scrambleText: {
    text: "{original}",    // le texte déjà dans le HTML
    chars: "upperCase",    // brouillé avec des majuscules
    revealDelay: 0.5,      // commence à révéler après 0,5 s
  },
});
```

`"{original}"` est une valeur spéciale : le texte final est celui qui est déjà dans l'élément. Votre texte reste donc dans le HTML, lisible sans animation.

## Les options utiles { #options }

| Option | Ce qu'elle fait |
|---|---|
| `text` | Le texte final. `"{original}"` : celui du HTML. |
| `chars` | Les caractères du brouillage : `"upperCase"`, `"lowerCase"`, `"upperAndLowerCase"`, ou les vôtres (`"01"`, `"0123456789"`, `"XO"`). |
| `revealDelay` | Combien de temps le texte reste brouillé avant de commencer à se révéler. |
| `speed` | La vitesse à laquelle les caractères brouillés changent. Par défaut : `1`. |
| `tweenLength` | Par défaut, la longueur du texte change progressivement. Avec `false`, il a tout de suite sa longueur finale. |

**Les options, en action** : au clic, le texte se brouille avec des lettres majuscules et minuscules (`chars: "upperAndLowerCase"`), et `revealDelay` le garde brouillé un quart de seconde avant de le révéler.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-scrambletextplugin&onglets=resultat,js,html,css&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:420px;border:0" loading="lazy"></iframe>

<small>Fragment du cours Web 3 (582-311), TIM Montmorency, utilisé avec sa permission.</small>

## Dans votre récit { #dans-votre-recit }

Le titre du chapitre qui se « décode » à l'arrivée :

```js
export function animate(section, chapter) {
  const q = gsap.utils.selector(section);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.to(q("h2"), {
      duration: 1.5,
      scrambleText: { text: "{original}", chars: "upperCase" },
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });
  });
}
```

!!! tip "Une police à chasse fixe"
    Avec une police à chasse fixe (*monospace*), toutes les lettres ont la même largeur : le texte ne « danse » pas pendant le brouillage.

## Références

- [ScrambleTextPlugin : la documentation](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

