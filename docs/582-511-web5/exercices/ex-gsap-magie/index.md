# :material-pencil-ruler:  Exercice : Magie

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Votre **première timeline** : un chapeau de magicien apparaît, se retourne, une baguette s'agite... et une chose horrifiante en sort!
2. Notions : `gsap.set()` pour l'état de départ, `gsap.timeline()` pour enchaîner, `autoAlpha`, `rotation`, `y`, `transformOrigin`, `yoyo` et `repeat`.
3. **Seul, environ 25 minutes.** C'est la base de l'exercice suivant : vous y accrocherez **cette** timeline au défilement.

</div>

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-gsap-magie/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

Pas de `npm install` : GSAP est chargé par CDN, avec une balise `<script>` dans `index.html`, **avant** `js/script.js`. Comme dans votre récit.

Tout le HTML et le CSS sont faits. Votre code va dans `js/script.js`.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-magie.webm" autoplay muted loop playsinline aria-label="Aperçu du résultat : un chapeau de magicien apparaît et se retourne, une baguette s'agite, puis une main de zombi sort du chapeau"></video>

## Explorer la scène (3 min)

- [ ] Dans `index.html`, repérez les 3 images à l'intérieur de `#chapeau`, et les identifiants `#chapeau`, `#main` et `#baguette` : ce sont les cibles des animations.

??? question "Comment la main peut-elle sortir de *l'intérieur* du chapeau?"
    C'est un jeu de `position: absolute` et de `z-index` (dans `css/style.css`). La main est **devant** l'image de l'arrière du chapeau, mais **derrière** le chapeau lui-même.

## L'état de départ (5 min)

Au chargement, tout est visible. Avant d'animer, on place chaque élément dans son état de départ, **sans animation** : c'est le rôle de `gsap.set()`.

- [ ] Le chapeau : invisible (`autoAlpha: 0`) et à l'envers (`rotation: 180`).
- [ ] La main : invisible, et descendue de `80` pixels, cachée dans le chapeau.
- [ ] La baguette : invisible, avec son point de pivot en bas, au centre (`transformOrigin: "bottom center"`).
- [ ] Sauvegardez : la page devrait être vide.

??? tip "Pourquoi `autoAlpha` plutôt qu'`opacity`?"
    `autoAlpha: 0` met `opacity: 0` **et** `visibility: hidden`. Un élément à `opacity: 0` est invisible, mais toujours cliquable; avec `autoAlpha`, il disparaît vraiment.

- [ ] *Commit* (`Magie : prépare l'état de départ`), puis *push*.

## La timeline (15 min)

La timeline joue les animations **les unes après les autres**. Construisez-la une étape à la fois : après chaque étape, sauvegardez et regardez le résultat.

- [ ] Sous les `gsap.set()`, créez une timeline avec `gsap.timeline()`.

??? tip "Indice : la structure"
    ```js
    gsap.timeline()
      .to("cible", { /* ... */ })
      .to("cible", { /* ... */ });
    ```

    Pas de point-virgule entre les `.to()`, seulement à la fin.

1. **Le chapeau apparaît** en fondu, en `1` seconde.
2. **Le chapeau se retourne** : rotation à `0`, en `1` seconde, avec `ease: "back.inOut"`.
3. **La baguette apparaît** en fondu, en `0.5` seconde.
4. **La baguette s'agite 3 fois** : rotation jusqu'à `-20` degrés, en `0.25` seconde, en aller-retour (`yoyo`), avec `ease: "sine.inOut"`.
5. **La main sort du chapeau** : elle apparaît **et** remonte à sa position d'origine (`y: 0`), en `2` secondes, avec `ease: "sine.out"`.

??? tip "3 oscillations : combien de `repeat`?"
    Un aller-retour, c'est 2 demi-mouvements. Ajustez `repeat` pour arriver au résultat de la vidéo : ça se compte sur une main.

??? quote "Observation : le point de pivot"
    La baguette pivote à partir du manche grâce au `transformOrigin` de l'état de départ. Retirez-le un instant pour voir la différence.

- [ ] *Commit* (`Magie : la timeline`), puis *push*.

## Défis (facultatifs)

- [ ] La baguette apparaît **pendant** que le chapeau se retourne, plutôt qu'après. Voir *Le paramètre de position* dans les notes.
- [ ] Le numéro complet joue **en boucle**, avec une pause d'une seconde entre chaque tour. Indice : `gsap.timeline()` accepte un objet de paramètres, comme un tween.
- [ ] *Commit* (`Défis : la baguette et la boucle`), puis *push*.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50.

[:material-pencil-ruler: L'exercice suivant : la magie au défilement](../ex-gsap-magie-defilement/index.md){ .md-button .md-button--primary }

<small>Exercice adapté, avec sa permission, de l'exercice du même nom du cours Web 3 (582-311), TIM Montmorency.</small>
