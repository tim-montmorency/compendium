---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Magie

L'objectif de cet exercice est de créer une première **timeline** avec GSAP&nbsp;: un chapeau de magicien apparaît, se retourne, une baguette s'agite… et une main de zombi en sort 🎩🧟

Notions mises en pratique&nbsp;:

* `gsap.set()` pour préparer l'état de départ
* `gsap.timeline()` pour enchaîner des animations
* `autoAlpha`, `rotation`, `y`
* `transformOrigin`, `yoyo` et `repeat`

## Résultat attendu

![type:video](./preview.webm){.h-auto}

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/magie/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet&nbsp;:
    ```bash
    npm install
    ```
    ```bash
    npx vite
    ```

### Exploration du projet

Tout le HTML et le CSS sont déjà faits. Avant d'animer, prendre quelques minutes pour comprendre comment la scène est construite.

- [ ] Ouvrir `index.html` et repérer les 3 images à l'intérieur de `.chapeau`

??? question "Comment la main peut-elle sortir *de l'intérieur* du chapeau&nbsp;?"

    C'est simplement un jeu de `position: absolute` et de `z-index` (les classes Tailwind `absolute`, `z-10`, `z-20` et `z-30`).

    Les 3 images sont superposées au même endroit, comme des calques&nbsp;:

    | Couche | Image | `z-index` |
    | :--- | :--- | :--- |
    | Derrière | L'intérieur du chapeau | `z-10` |
    | Au milieu | La main | `z-20` |
    | Devant | L'avant du chapeau | `z-30` |

    La main est donc **devant** l'intérieur du chapeau, mais **derrière** son rebord. En la déplaçant vers le bas, l'avant du chapeau la cache complètement. En la remontant, elle semble sortir du chapeau.

- [ ] Repérer les classes `chapeau`, `main` et `baguette`. Ce sont les cibles des animations.
- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`.

### État de départ

Au chargement de la page, tout est visible. Avant d'animer, il faut placer chaque élément dans son état initial, **sans animation**. C'est le rôle de `gsap.set()`.

- [ ] Avec `gsap.set()`, préparer le chapeau&nbsp;:
  - [ ] Invisible (`autoAlpha: 0`)
  - [ ] À l'envers (`rotation: 180`)
- [ ] Avec `gsap.set()`, préparer la main&nbsp;:
  - [ ] Invisible
  - [ ] Descendue de `80` pixels, pour qu'elle soit cachée dans le chapeau
- [ ] Avec `gsap.set()`, préparer la baguette&nbsp;:
  - [ ] Invisible
  - [ ] Point de pivot au bas de la baguette, au centre (`"bottom center"`)
- [ ] Sauvegarder&nbsp;: la page doit maintenant être vide

??? tip "Indice : `autoAlpha`"

    `autoAlpha` fonctionne comme `opacity`, mais ajoute aussi `visibility: hidden` lorsque la valeur atteint `0`. Un élément à `opacity: 0` est invisible, mais toujours cliquable. Avec `autoAlpha: 0`, il disparaît vraiment. C'est le bon choix pour faire apparaître ou disparaître un élément.

??? question "Pourquoi le chapeau commence-t-il à l'envers&nbsp;?"

    L'image du chapeau est dessinée **l'ouverture vers le haut**, prête à faire sortir quelque chose. À `180°`, on le voit comme un chapeau porté normalement. L'animation le retournera ensuite à `0°`.

??? question "Pourquoi régler le point de pivot de la baguette tout de suite&nbsp;?"

    Une baguette s'agite à partir du manche, pas à partir de son milieu. Par défaut, le point de pivot est le centre de l'élément (voir *Le point de pivot* dans les notes de cours).

- [ ] Commit + push

### La timeline

La timeline joue les animations **les unes après les autres**, dans l'ordre où elles sont ajoutées. On la construit une étape à la fois&nbsp;: après chaque étape, sauvegarder et observer le résultat.

- [ ] Sous les `gsap.set()`, créer une timeline avec `gsap.timeline()`

??? tip "Indice : la structure d'une timeline"

    ```js
    gsap.timeline()
      .to("cible", { /* ... */ })
      .to("cible", { /* ... */ })
    ```

    Chaque `.to()` s'enchaîne au précédent. Attention&nbsp;: pas de point-virgule entre les `.to()`, sinon la chaîne est coupée.

#### Étape 1 — Le chapeau apparaît

- [ ] Faire apparaître le chapeau en fondu, en `1` seconde

#### Étape 2 — Le chapeau se retourne

- [ ] Ramener la rotation du chapeau à `0`, en `1` seconde
- [ ] Lissage&nbsp;: `back.inOut`

??? question "Observation"

    Le chapeau attend que le fondu soit terminé avant de se retourner. Aucun `delay` n'a été nécessaire&nbsp;: c'est la timeline qui s'en occupe.

#### Étape 3 — La baguette apparaît

- [ ] Faire apparaître la baguette en fondu, en `0.5` seconde

#### Étape 4 — La baguette s'agite

- [ ] Faire osciller la baguette **3 fois**&nbsp;:
  - [ ] Rotation jusqu'à `-20` degrés
  - [ ] Durée de `0.25` seconde
  - [ ] Aller-retour (`yoyo`)
  - [ ] Lissage&nbsp;: `sine.inOut`

??? tip "Indice : 3 oscillations, combien de répétitions&nbsp;?"

    Une oscillation complète, c'est un **aller** et un **retour**&nbsp;: 3 oscillations font donc 6 mouvements. Le tween joue une première fois, puis se **répète**. Combien de répétitions faut-il ajouter au premier mouvement pour en obtenir 6&nbsp;?

??? question "Observation"

    La baguette pivote à partir du manche grâce au `transformOrigin` réglé dans l'état de départ. Essayer de le retirer temporairement pour voir la différence.

#### Étape 5 — La main sort du chapeau

- [ ] Faire apparaître la main **et** la remonter à sa position d'origine (`y: 0`), en `1` seconde
- [ ] Lissage&nbsp;: `back.out`

??? question "Observation"

    Un seul tween peut animer plusieurs propriétés à la fois&nbsp;: ici, la transparence et la position.

- [ ] Commit + push

??? question "Et sans timeline&nbsp;?"

    Il aurait fallu animer chaque élément avec un tween indépendant et calculer chaque `delay` à la main&nbsp;: `1`, `2`, `2.5`, puis `4` pour la main (car l'oscillation dure 6 × 0.25 s).

    Et si le chapeau devait apparaître en 1.5 seconde au lieu de 1&nbsp;? Il faudrait recalculer **tous** les délais qui suivent. Avec la timeline, un seul chiffre change. Essayer pour le constater, puis revenir à `1`.

## Défis

Pour les plus rapides&nbsp;:

- [ ] Faire apparaître la baguette **pendant** que le chapeau se retourne, plutôt qu'après (voir *Le paramètre de position* dans les notes de cours)
- [ ] Faire jouer le numéro au complet **en boucle**, avec une pause d'une seconde entre chaque tour

??? tip "Indice : une timeline en boucle"

    `gsap.timeline()` accepte un objet de paramètres, exactement comme un tween&nbsp;: `repeat`, `repeatDelay`, `yoyo`…
