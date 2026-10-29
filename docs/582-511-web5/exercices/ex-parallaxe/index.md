# :material-pencil-ruler:  Exercice : la parallaxe en calques

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Une scène est déjà composée en **5 calques** : nuages lointains, nuages, deux montgolfières et le sol. Rien ne bouge encore.
2. Vous faites défiler chaque calque **à sa propre vitesse**, en CSS, selon la règle : **plus c'est loin, plus on compense le défilement**.
3. C'est exactement ce que vous ferez avec votre média animable « image en calques ».

</div>

**Seul, environ 40 minutes.** Pour le principe et des exemples, voyez [La parallaxe](../../css/parallaxe.md). Gardez aussi la section [Un classique : le parallax](../../css/animations-scroll.md#un-classique-le-parallax) ouverte à côté.

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exercice-parallaxe/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. Quand le dépôt est prêt, **clonez**-le sur votre poste et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**, et défilez : la scène est en place, mais elle défile d'un bloc, comme une image plate.

Le dépôt contient :

- `index.html` : la page, avec la scène et ses calques;
- `css/style.css` : la mise en place des calques, et la place pour vos réponses de la partie 1;
- `assets/images/` : les 5 calques, en SVG.

## Le principe, en une phrase

Quand on défile, tout monte à l'écran. Un calque qu'on **descend** pendant ce temps (`translateY` positif) semble monter **moins vite** : il paraît plus loin. Plus on le descend, plus il paraît loin.

```text
calque           distance   compensation
nuages-loin      très loin  beaucoup
nuages           loin       un peu moins
montgolfiere-2   milieu     encore moins
montgolfiere-1   proche     très peu
sol              devant     aucune : il défile avec la page
```

## Partie 1 : lire la scène (5 min)

Dans le commentaire prévu en haut de `css/style.css`, répondez :

1. Dans quel ordre les calques sont-ils empilés? Qu'est-ce qui décide lequel passe devant l'autre?
2. Pourquoi la montgolfière 2 est-elle plus petite que la montgolfière 1?
3. Repérez la propriété de `.scene` qui va empêcher votre animation de fonctionner. Que faut-il mettre à la place? (Relisez le piège de la page sur les animations au défilement.)

## Partie 2 : animer les calques (20 min)

- [ ] Donnez un **nom à la timeline** de la scène, avec `view-timeline-name`.
- [ ] Corrigez le piège de la partie 1.
- [ ] Créez une animation par calque (sauf le sol), qui le fait descendre pendant que la scène traverse l'écran : de `translateY(-X)` à `translateY(X)`.
- [ ] Reliez chaque calque à la timeline **de la scène**, avec `animation-timeline`.
- [ ] Choisissez les amplitudes selon la règle : les nuages lointains bougent le plus, la montgolfière 1 le moins, le sol pas du tout.

**Vérifiez** : défilez lentement. Les nuages semblent loin, les montgolfières flottent entre les deux, le sol suit la page.

!!! tip "Des amplitudes en `vh`"
    Un pourcentage dans `translateY` se calcule sur la hauteur **du calque lui-même** : `20%` d'un petit ballon, c'est presque rien; `20%` d'une bande de nuages, c'est beaucoup. Avec des `vh`, toutes les amplitudes se comparent directement. Essayez entre `2vh` et `20vh`.

## Partie 3 : les deux règles obligatoires (5 min)

- [ ] **`@supports`** : les animations ne s'appliquent que si le navigateur comprend `animation-timeline`. Sinon, la scène reste fixe, et tout est lisible.
- [ ] **`prefers-reduced-motion`** : avec le mouvement réduit, aucun calque ne bouge.

Pour tester `prefers-reduced-motion` : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Bonus : les montgolfières décollent (10 min)

*Facultatif, pour ceux qui veulent aller plus loin.*

Le texte dit que les montgolfières « quittent le sol ». Faites-le voir :

- [ ] La montgolfière 1 **monte** pendant le défilement, plus vite que la page : elle va dans l'autre sens que les autres calques.
- [ ] Elle **se balance** légèrement en montant (une petite rotation, quelques degrés).
- [ ] Bonus : les nuages **dérivent** un peu vers la droite, poussés par le vent.

Indice : `transform` peut combiner plusieurs fonctions. Et pensez à `transform-origin` pour la rotation : une montgolfière se balance depuis le haut, pas depuis son centre.

## Vos *commits* et la remise

Un *commit* à la **fin de chaque partie**, puis *push* :

```text
Partie 1 : répond aux questions
Partie 2 : anime les calques au défilement
Partie 3 : ajoute @supports et le mouvement réduit
Bonus : fait monter les montgolfières
```

La dernière ligne est **facultative** : seulement si vous avez fait le bonus.

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50. Gardez-le : il vous servira de référence pour votre média animable.

!!! info "Pas d'IA"
    Comme dans votre projet, Copilot est désactivé dans ce dépôt (`.vscode/settings.json`). Le code, c'est vous!
