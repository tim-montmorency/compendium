# :material-arrow-down-circle-outline: GSAP : ScrollTo

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. ScrollTo **fait défiler la page** jusqu'à un élément ou une position, avec une durée et un *ease* que vous choisissez.
2. Dans un récit : un sommaire, ou un bouton « chapitre suivant », qui amène le visiteur au bon endroit en douceur.
3. Le CSS d'abord : pour un simple lien vers une ancre, `scroll-behavior: smooth` suffit. ScrollTo sert quand vous voulez contrôler la durée, l'*ease* ou le décalage.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

Cliquez sur un numéro : la page défile jusqu'au chapitre.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-scroll-to&onglets=js,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:480px;border:0" loading="lazy"></iframe>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollToPlugin.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! tip "Un exemple trouvé ailleurs? Vérifiez sa version"
    Toutes les démos de cette page sont en **GSAP 3**. Sur le web, beaucoup d'exemples sont encore en GSAP 2, qui n'est pas entièrement compatible. [Comment reconnaître du GSAP 2](gsap-bases.md#version-3).

## Le principe { #principe }

On anime le défilement **de la fenêtre** (`window`), vers un sélecteur :

```js
gsap.to(window, {
  duration: 1,
  scrollTo: "#ch-3",
  ease: "power2.inOut",
});
```

`scrollTo` accepte aussi un nombre de pixels (`scrollTo: 500`) ou un objet, pour plus de réglages.

## Avec un objet : les options { #options }

```js
gsap.to(window, {
  duration: 1,
  scrollTo: {
    y: "#ch-3",
    offsetY: 80,   // s'arrête 80 px plus haut : la place du menu
  },
});
```

| Option | Ce qu'elle fait |
|---|---|
| `y` | La cible verticale : un sélecteur, un élément, ou un nombre de pixels. `"max"` : tout en bas. |
| `x` | La même chose, à l'horizontale. |
| `offsetY` | S'arrête un peu avant la cible. Pratique si un menu fixe cache le haut de la section. |
| `autoKill` | Arrête l'animation si le visiteur défile lui-même pendant ce temps. |

## Dans votre récit : un sommaire { #dans-votre-recit }

Chaque bouton du sommaire indique son chapitre dans un attribut `data-cible` :

```html
<nav class="sommaire">
  <button data-cible="#la-foret">La forêt</button>
  <button data-cible="#la-maison">La maison</button>
</nav>
```

```js
const boutons = document.querySelectorAll(".sommaire button");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: bouton.dataset.cible,
      ease: "power2.inOut",
    });
  });
});
```

!!! warning "Le mouvement réduit"
    Un long défilement automatique peut donner le vertige. Avec le mouvement réduit, allez directement au chapitre : `duration: 0`.

    ```js
    const reduit = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.to(window, {
      duration: reduit ? 0 : 1,
      scrollTo: bouton.dataset.cible,
    });
    ```

!!! info "Avec des sections épinglées"
    Une section épinglée par ScrollTrigger ajoute de l'espace dans la page. ScrollTo en tient compte : il amène au bon endroit, même après une scène épinglée.

## Références

- [ScrollToPlugin : la documentation](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

