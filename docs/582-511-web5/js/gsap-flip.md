# :material-view-grid-outline: GSAP : Flip

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Flip **anime un changement de mise en page** : un élément qui change de place, de taille ou de parent. Une vignette qui devient plein écran, des cartes qui se réorganisent.
2. Toujours 3 étapes : **mémoriser** où sont les éléments (`Flip.getState()`), **changer** la mise en page (une classe CSS), puis **animer** de l'ancien état au nouveau (`Flip.from()`).
3. Le changement, c'est vous qui le faites, en CSS. Flip s'occupe seulement de rendre la transition fluide.

</div>

*Une extension à explorer, si votre récit en a besoin. Elle n'est pas obligatoire : choisissez-la parce qu'elle sert votre histoire.*

## Ce que ça fait { #ce-que-ca-fait }

Cliquez sur le bouton : la grille devient une rangée, et chaque carte glisse vers sa nouvelle place.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-flip&onglets=js,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:520px;border:0" loading="lazy"></iframe>

## Installer { #installer }

Depuis GSAP 3.13, **toutes les extensions sont gratuites**, sur le même CDN que GSAP. Si un tutoriel ou une ancienne page parle du « Club GSAP » payant ou de `gsap-trial`, c'est périmé.

1. Dans `index.html`, ajoutez la balise de l'extension **après** celle de GSAP, et **avant** `main.js` :

    ```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Flip.min.js"></script>
    <script type="module" src="js/main.js"></script>
    ```

2. Dans `main.js`, enregistrez-la **une fois**, avec ScrollTrigger :

    ```js
    gsap.registerPlugin(ScrollTrigger, Flip);
    ```

Comme ScrollTrigger, l'extension est ensuite disponible dans tous vos modules de chapitre, sans `import`.

!!! tip "Un exemple trouvé ailleurs? Vérifiez sa version"
    Toutes les démos de cette page sont en **GSAP 3**. Sur le web, beaucoup d'exemples sont encore en GSAP 2, qui n'est pas entièrement compatible. [Comment reconnaître du GSAP 2](gsap-bases.md#version-3).

## Le principe : 3 étapes { #principe }

Sans Flip, changer une classe fait « sauter » les éléments d'un coup à leur nouvelle place. Avec Flip :

```js
// 1. Mémoriser : où sont les cartes, et quelle taille elles ont
const etat = Flip.getState(".carte");

// 2. Changer : la nouvelle mise en page, en CSS
grille.classList.toggle("en-ligne");

// 3. Animer : de l'ancien état vers le nouveau
Flip.from(etat, {
  duration: 0.8,
  ease: "power2.inOut",
});
```

Pourquoi « Flip »? C'est l'acronyme de la technique : *First, Last, Invert, Play*. GSAP note la position de départ (*first*) et d'arrivée (*last*), replace l'élément là où il était (*invert*), puis l'anime vers sa nouvelle place (*play*).

## Les options utiles { #options }

| Option | Ce qu'elle fait |
|---|---|
| `duration`, `ease`, `stagger` | Comme dans un tween. |
| `absolute` | Place les éléments en `position: absolute` pendant l'animation. Utile si la grille « saute » pendant la transition. |
| `scale` | Anime la taille avec `scale` plutôt qu'avec `width` et `height` : plus fluide, mais le contenu est étiré. |
| `onComplete` | Une fonction appelée à la fin, comme dans un tween. |

## Dans votre récit { #dans-votre-recit }

Une image qui passe de vignette à plein écran quand on arrive au chapitre. Le changement est une classe CSS, ajoutée par un *callback* de ScrollTrigger :

```js
export function animate(section, chapter) {
  const image = section.querySelector(".image");

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    onEnter: () => basculer(image),
    onLeaveBack: () => basculer(image),
  });
}

function basculer(image) {
  const etat = Flip.getState(image);
  image.classList.toggle("plein-ecran");
  Flip.from(etat, { duration: 0.8, ease: "power2.inOut" });
}
```

!!! tip "Le mouvement réduit"
    Ici, le changement de mise en page a du sens même sans animation : l'image passe en plein écran. Avec le mouvement réduit, gardez la classe, mais sautez l'animation (`duration: 0`).

## Références

- [Flip : la documentation](https://gsap.com/docs/v3/Plugins/Flip/){ :target="_blank" }
- [Toutes les extensions de GSAP](https://gsap.com/docs/v3/Plugins/){ :target="_blank" }

