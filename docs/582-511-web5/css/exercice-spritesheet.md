# Exercice : le monstre responsive

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous partez d'un monstre animé avec la **méthode classique** (arrière-plan + `background-position`), et vous le convertissez à la **version responsive et performante** : une `<img>` déplacée avec `transform`.
2. Puis vous réglez la vitesse, la pause et `prefers-reduced-motion`.
3. Défi : faire **marcher le monstre au défilement**. Vous retrouverez un piège que vous connaissez déjà.

</div>

**Seul, environ 40 minutes.** Gardez la page [Animation par spritesheet](animation-spritesheet.md) ouverte à côté.

## Obtenir votre dépôt (5 min)

Votre dépôt est créé pour vous par **Classroom 50**, avec les fichiers de départ.

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-test00000001/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. Quand le dépôt est prêt, ouvrez-le, puis **clonez**-le sur votre poste et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server** : le monstre marche déjà, avec la méthode classique.

Le dépôt contient :

- `index.html` : la page;
- `css/style.css` : le style et l'animation, avec la place pour vos réponses de la partie 1;
- `assets/images/magenta_spritesheet_700.png` : la planche.

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
- [ ] La `div` devient la **fenêtre** : la taille d'**une** image, et elle cache tout ce qui dépasse.
- [ ] L'image fait **19 fois** la largeur de la fenêtre.
- [ ] L'animation déplace l'image avec **`transform`**, et plus avec `background-position`.

**Vérifiez** : redimensionnez la fenêtre du navigateur. Le monstre suit, et il marche sans trembler ni glisser.

!!! tip "Si le monstre glisse ou tremble"
    Ajoutez temporairement une bordure à la fenêtre (`outline: 2px solid red`) et mettez l'animation en pause (`animation-play-state: paused`). Changez la valeur de `transform` à la main dans l'inspecteur : chaque image doit remplir exactement la fenêtre.

## Partie 3 : régler (10 min)

- [ ] **La vitesse** : le monstre doit marcher à **12 images par seconde**. Calculez la durée (formule dans la page sur la spritesheet) et écrivez le calcul en commentaire.
- [ ] **La pause au survol** : quand la souris est sur le monstre, il s'arrête.
- [ ] **Moins de mouvement** : avec `prefers-reduced-motion: reduce`, le monstre ne marche pas.

Pour tester `prefers-reduced-motion` sans changer les réglages de votre ordinateur : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Défi : le monstre marche au défilement (10 min)

Dans votre récit défilant, c'est le visiteur qui fait avancer l'animation. Faites la même chose ici : **le monstre fait ses pas quand on défile**, et s'arrête quand on arrête de défiler.

- [ ] Ajoutez de l'espace avant et après le monstre (ex. deux `div` de `150vh`), pour qu'on puisse défiler.
- [ ] Liez l'animation de l'image à sa visibilité dans l'écran, avec `animation-timeline` (voir [Animations pilotées par le défilement](animations-scroll.md)).
- [ ] Pendant la traversée de l'écran, le monstre fait **3 cycles** de marche.
- [ ] Protégez le tout avec `@supports`.

!!! warning "Le monstre reste figé?"
    Ce n'est pas votre animation. Relisez le piège de la page sur les animations au défilement, à propos d'une propriété de la fenêtre.

**Pour aller plus loin** : faites aussi **traverser l'écran** au monstre, de gauche à droite, pendant qu'il marche. Indice : deux animations, sur deux éléments différents.

## Vos *commits* et la remise

Un *commit* à la **fin de chaque partie**, puis *push* :

```text
Partie 1 : répond aux questions
Partie 2 : convertit à la version responsive
Partie 3 : règle la vitesse, la pause et le mouvement réduit
Défi : anime la marche au défilement
```

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50. Gardez-le : il vous servira de référence pour votre média animable.

!!! info "Pas d'IA"
    Comme dans votre projet, Copilot est désactivé dans ce dépôt (`.vscode/settings.json`). Le code, c'est vous!
