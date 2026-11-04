# :material-pencil-ruler:  Exercice : le monstre responsive

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous partez d'un monstre animé avec la **méthode classique** (arrière-plan + `background-position`), et vous le convertissez à la **version responsive et performante** : une `<img>` déplacée avec `transform`.
2. Puis vous réglez la vitesse, la pause et `prefers-reduced-motion`.
3. Enfin, vous faites **marcher le monstre au défilement**. Vous retrouverez un piège que vous connaissez déjà. En bonus : l'épingler au centre de l'écran.

</div>

**Seul, environ 40 minutes.** Gardez la page [Animation par spritesheet](../../css/animation-spritesheet.md) ouverte à côté.

## Obtenir votre dépôt (5 min)

Votre dépôt est créé pour vous par **Classroom 50**, avec les fichiers de départ.

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exercice-spritesheet/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. Quand le dépôt est prêt, ouvrez-le, puis **clonez**-le sur votre poste et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server** : le monstre marche déjà, avec la méthode classique.

Le dépôt contient :

- `index.html` : la page;
- `css/style.css` : le style et l'animation, avec la place pour vos réponses de la partie 1;
- `assets/images/magenta_spritesheet_700.png` : la planche.

## Aperçu du résultat

<video class="w-100" src="assets/exercice-spritesheet-apercu.mp4" autoplay muted loop playsinline aria-label="Aperçu du résultat : on défile, le monstre magenta entre dans l'écran et fait ses pas au rythme du défilement; on s'arrête, il s'arrête; on remonte, il recule"></video>

## La planche

**19 images** de **700 × 700 px**, côte à côte : une planche de 19 × 700 = **13 300 px** de large.

Le code de départ, dans `index.html` :

```html
<div class="monstre-magenta"></div>
```

Et dans `css/style.css` :

```css
.monstre-magenta {
  width: 50vw;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  background-image:
    url("../assets/images/magenta_spritesheet_700.png");
  background-size: 1900% 100%;
  animation: marche 1s steps(19) infinite;
}

@keyframes marche {
  from { background-position: 0 0; }
  to   { background-position: -1900% 0; }
}
```

## Partie 1 : lire le code de départ (5 min)

Avant de toucher au code, répondez dans le commentaire prévu en haut de `css/style.css` :

1. Pourquoi `background-size: 1900% 100%`?
2. Pourquoi `steps(19)`? Remplacez-le par `linear` : que se passe-t-il? Remettez `steps(19)`.
3. Quelle propriété est animée? Selon les garde-fous du récit défilant, est-ce une bonne propriété à animer?

## Partie 2 : convertir à la version 2 (15 min)

Transformez le code pour utiliser la méthode **responsive et performante** :

- [ ] Dans le HTML, la planche devient une vraie image `<img>`, avec un `alt`, à l'intérieur de la `div`.
- [ ] La `div` devient le **conteneur** : la taille d'**une** image, et elle cache tout ce qui dépasse.
- [ ] L'image fait **19 fois** la largeur du conteneur.
- [ ] L'animation déplace l'image avec **`transform`**, et plus avec `background-position`.

**Vérifiez** : redimensionnez la fenêtre du navigateur. Le monstre suit, et il marche sans trembler ni glisser.

!!! tip "Si le monstre glisse ou tremble"
    Ajoutez temporairement une bordure au conteneur (`outline: 2px solid red`) et mettez l'animation en pause (`animation-play-state: paused`). Changez la valeur de `transform` à la main dans l'inspecteur : chaque image doit remplir exactement le conteneur.

## Partie 3 : régler (10 min)

- [ ] **La vitesse** : le monstre doit marcher à **12 images par seconde**. Calculez la durée (formule dans la page sur la spritesheet) et écrivez le calcul en commentaire.
- [ ] **La pause au survol** : quand la souris est sur le monstre, il s'arrête.
- [ ] **Moins de mouvement** : avec `prefers-reduced-motion: reduce`, le monstre ne marche pas.

Pour tester `prefers-reduced-motion` sans changer les réglages de votre ordinateur : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Partie 4 : le monstre marche au défilement (10 min)

Dans votre récit défilant, c'est le visiteur qui fait avancer l'animation. Faites la même chose ici : **le monstre fait ses pas quand on défile**, et s'arrête quand on arrête de défiler.

- [ ] Ajoutez de l'espace avant et après le monstre (ex. deux `div` de `150vh`), pour qu'on puisse défiler.
- [ ] Liez l'animation de l'image à sa visibilité dans l'écran, avec `animation-timeline` (voir [Animations pilotées par le défilement](../../css/animations-scroll.md)).
- [ ] Pendant la traversée de l'écran, le monstre fait **3 cycles** de marche.
- [ ] Protégez le tout avec `@supports`.

!!! warning "Le monstre reste figé?"
    Ce n'est pas votre animation. Relisez le piège de la page sur les animations au défilement, à propos d'une propriété du conteneur.

## Vérifiez votre travail { #verifier }

Testez votre page **sans regarder le code**. Chaque énoncé doit être vrai. Si un point coince, ouvrez les [indices](#indices), un à la fois.

- [ ] **Partie 2** : je redimensionne la fenêtre, le monstre change de taille et marche sans glisser ni trembler.
- [ ] **Partie 2** : dans l'inspecteur, l'animation modifie `transform`, et plus `background-position`.
- [ ] **Partie 3** : un cycle de marche dure environ une seconde et demie (12 images par seconde).
- [ ] **Partie 3** : au survol, le monstre s'arrête net, sur une image complète, pas entre deux images.
- [ ] **Partie 3** : avec le mouvement réduit émulé, le monstre ne marche pas.
- [ ] **Partie 4** : le monstre fait ses pas **seulement** quand je défile. Je remonte : il recule.
- [ ] **Partie 4** : il fait environ 3 cycles pendant qu'il traverse l'écran.
- [ ] **Partie 4** : dans Firefox, qui ne comprend pas encore `animation-timeline`, le monstre marche comme à la partie 3. Rien n'est cassé.

## Coincé? Des indices par paliers { #indices }

Ouvrez **un indice à la fois**, et essayez avant d'ouvrir le suivant. Le dernier indice d'une partie donne presque la réponse : gardez-le pour la fin.

??? tip "Partie 2, indice 1 : le principe"
    Le conteneur est une **fenêtre** de la taille d'une seule image. La planche, beaucoup plus large, glisse **derrière** cette fenêtre. Tout ce qui dépasse de la fenêtre est caché.

    Deux questions : quelle propriété cache ce qui dépasse? Et quelle largeur donner à l'image pour que chaque image de la planche remplisse exactement la fenêtre?

??? tip "Partie 2, indice 2 : les propriétés"
    - Le conteneur : `overflow: clip` (et pas `hidden` : vous verrez pourquoi à la partie 4).
    - L'image : `width: 1900%` et `height: 100%`.
    - Si votre CSS limite les images (`max-width: 100%`), la planche ne s'étire pas : ajoutez `max-width: none`.

??? tip "Partie 2, indice 3 : l'animation"
    Un pourcentage dans `translateX` se calcule sur la largeur **de l'élément lui-même**. Pour l'image, `-100%`, c'est donc toute la planche.

    ```css
    @keyframes marche {
      to { transform: translateX(-100%); }
    }
    ```

    On garde `steps(19)` : 19 sauts secs, un par image.

??? tip "Partie 3 : la durée, la pause et le mouvement réduit"
    - La durée : **nombre d'images ÷ images par seconde**.
    - La pause : `animation-play-state`, quand la souris est sur le **conteneur**.
    - Le mouvement réduit : la même propriété, dans `@media (prefers-reduced-motion: reduce)`.

??? tip "Partie 4, indice 1 : relier au défilement"
    Sur l'image : `animation-timeline: view()`. Avec une timeline de défilement, la durée en secondes ne compte plus : c'est la traversée de l'écran qui fait avancer l'animation. Le nombre de cycles, c'est `animation-iteration-count`.

    Attention à l'ordre : le raccourci `animation` remet `animation-timeline` à sa valeur par défaut. Écrivez `animation-timeline` **après** `animation`.

??? tip "Partie 4, indice 2 : le monstre reste figé"
    Regardez le conteneur. Avec `overflow: hidden`, il devient un conteneur de défilement, et `view()` suit **ce conteneur**, qui ne défile jamais. Aucune erreur, juste une animation figée. La solution : `overflow: clip`. Voir [le piège de `overflow: hidden`](../../css/animations-scroll.md#piege-overflow).

## Bonus : le monstre reste au centre (15 min)

*Facultatif, pour ceux qui veulent aller plus loin. L'épinglage reviendra au cours 10.1, avec GSAP.*

<video class="w-100" src="assets/exercice-spritesheet-bonus.mp4" autoplay muted loop playsinline aria-label="Aperçu du bonus : le monstre se fixe au centre de l'écran et marche pendant qu'on défile, en traversant l'écran de gauche à droite"></video>

À la partie 4, le monstre traverse l'écran assez vite : on voit à peine un cycle complet. Cette fois, **quand il arrive au centre de l'écran, il s'y fixe**. On continue de défiler : il marche sur place. On arrête : il s'arrête. Puis il repart avec la page.

C'est l'**épinglage** (*pin*), en CSS pur, avec `position: sticky`. Remplacez vos deux `div` d'espace par cette structure :

```html
<div class="espace"></div>

<section class="scene">
  <div class="scene__ecran">
    <div class="monstre">
      <img src="..." alt="Un monstre magenta qui marche">
    </div>
  </div>
</section>

<div class="espace"></div>
```

- [ ] **La scène** est très haute : `300vh`. C'est elle qui donne la durée de l'épinglage.
- [ ] **L'écran** (`.scene__ecran`) est **collant** : `position: sticky`, `top: 0`, `height: 100vh`. Il centre le monstre (une grille avec `place-items: center`).
- [ ] La marche suit la timeline **de la scène**, pas celle de l'image : donnez-lui un nom avec `view-timeline-name`, et utilisez ce nom dans `animation-timeline`.
- [ ] La marche joue **seulement pendant que le monstre est fixé** : `animation-range: contain`.
- [ ] Pendant ce temps, le monstre fait **6 cycles** de marche.

!!! tip "Pourquoi pas `view()` sur l'image?"
    Pendant l'épinglage, l'image ne bouge plus dans l'écran : sa visibilité ne change pas, donc une timeline `view()` sur l'image n'avance plus. La **scène**, elle, continue de défiler derrière : c'est sa timeline qu'on suit.

**Pour aller plus loin** : pendant qu'il marche sur place, faites aussi **traverser l'écran** au monstre, de gauche à droite. Indice : une deuxième animation, sur le conteneur (`.monstre`), avec la même timeline et la même plage.

## Vos *commits* et la remise

Un *commit* à la **fin de chaque partie**, puis *push* :

```text
Partie 1 : répond aux questions
Partie 2 : convertit à la version responsive
Partie 3 : règle la vitesse, la pause et le mouvement réduit
Partie 4 : anime la marche au défilement
Bonus : épingle le monstre au centre
```

La dernière ligne est **facultative** : seulement si vous avez fait le bonus.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas, et l'exercice compte comme non fait.

    **Vérifiez** : sur github.com, ouvrez votre dépôt. Votre dernier *commit* apparaît en haut de la liste des fichiers.

Je vois votre dépôt et vos *commits* dans Classroom 50. Gardez-le : il vous servira de référence pour votre média animable.

!!! info "Pas d'IA"
    Comme dans votre projet, Copilot est désactivé dans ce dépôt (`.vscode/settings.json`). Le code, c'est vous!
