# :material-pencil-ruler:  Exercice : Zombi

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Votre **premier tween** GSAP (une interpolation) : faire battre le coeur d'un zombi, et faire varier la couleur de fond de la page.
2. Notions : `gsap.to()`, `gsap.fromTo()`, les propriétés `scale` et `backgroundColor`, les paramètres `duration`, `repeat`, `yoyo` et `ease`.
3. **Seul, environ 15 minutes.** Gardez la page [GSAP : tweens et timelines](../../js/gsap-bases.md) ouverte à côté.

</div>

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-gsap-zombi/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

Pas de `npm install` : GSAP est chargé par CDN, avec une balise `<script>` dans `index.html`, **avant** `js/script.js`. Comme dans votre récit.

Tout votre code va dans `js/script.js`. Ouvrez aussi `index.html` et repérez l'image du coeur : notez sa classe CSS, c'est la cible de l'animation.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-zombi.webm" autoplay muted loop playsinline aria-label="Aperçu du résultat : un coeur de zombi bat en rebondissant, pendant que le fond change lentement de couleur"></video>

## Animation A : le coeur (5 min)

### Un premier tween (interpolation)

- [ ] Avec `gsap.to()`, animez le coeur : agrandissement à `1.2` fois sa taille (`scale`), en `0.6` seconde.

??? quote "Ce que vous devriez voir"
    Le coeur grossit **une seule fois**, puis plus rien : un tween joue une seule fois par défaut.

### La répétition

- [ ] Ajoutez le paramètre `repeat` pour que l'animation se répète **à l'infini**.

??? quote "Ce que vous devriez voir"
    Ça se répète, mais le coeur revient à sa taille d'origine d'un coup sec.

### L'aller-retour

- [ ] Ajoutez le paramètre `yoyo` : le coeur revient **en douceur** à sa taille d'origine.

### Le lissage

- [ ] Ouvrez le [visualiseur d'*eases* de GSAP](https://gsap.com/docs/v3/Eases){ :target="_blank" } et essayez des lissages pour arriver au résultat de la vidéo. Ne regardez pas la réponse tout de suite!

??? success "Réponse"
    `ease: "elastic.out(1, 0.3)"`

- [ ] *Commit* (`Animation A : le coeur bat`), puis *push*.

## Animation B : le fond (5 min)

- [ ] Sous l'animation du coeur, animez la couleur de fond du `body` avec `gsap.fromTo()` :
  - couleur de départ : `#838B2F`;
  - couleur d'arrivée : `#BDAF88`;
  - durée de `2.4` secondes;
  - répétition à l'infini, en aller-retour.

??? tip "Indice : `fromTo()`"
    `fromTo()` reçoit **deux** objets : le départ, puis l'arrivée. Les paramètres (`duration`, `repeat`...) vont toujours dans le **deuxième**.

    ```js
    gsap.fromTo("cible",
      { /* valeurs de départ */ },
      { /* valeurs d'arrivée + paramètres */ }
    );
    ```

- [ ] *Commit* (`Animation B : le fond change de couleur`), puis *push*.

## Défi du zombi (facultatif)

- [ ] Ajoutez une légère **rotation** au coeur pendant qu'il bat : quelques degrés seulement.
- [ ] *Commit* (`Défi : le coeur tourne`), puis *push*.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50.

[:material-pencil-ruler: L'exercice suivant : Magie](../ex-gsap-magie/index.md){ .md-button .md-button--primary }

<small>Exercice adapté, avec sa permission, de l'exercice du même nom du cours Web 3 (582-311), TIM Montmorency.</small>
