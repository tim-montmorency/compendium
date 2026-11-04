# :material-pencil-ruler:  Exercice : la magie au défilement

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous reprenez **la timeline de Magie**, déjà écrite dans le gabarit. Vous ne la réécrivez pas : vous lui ajoutez un `scrollTrigger`.
2. Étape par étape : déclencher au défilement (`markers`, `start`), suivre le défilement (`scrub`), épingler la scène (`pin`), puis respecter le mouvement réduit.
3. **Seul, environ 35 minutes.** C'est exactement ce que vous ferez pour une scène de votre récit.

</div>

Gardez la page [GSAP : ScrollTrigger](../../js/gsap-scrolltrigger.md) ouverte à côté.

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-gsap-magie-defilement/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

Pas de `npm install` : GSAP est chargé par CDN, avec une balise `<script>` dans `index.html`, **avant** `js/script.js`. Comme dans votre récit.

Dans `index.html`, GSAP **et** le plugin ScrollTrigger sont déjà chargés. Dans `js/script.js` : l'état de départ et la timeline de l'exercice Magie. Défilez : le numéro se joue tout de suite, au chargement, même si la scène n'est pas encore à l'écran.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-magie-defilement.mp4" autoplay muted loop playsinline aria-label="Aperçu du résultat : on défile, la scène du chapeau reste en place à l'écran, et le numéro de magie avance au rythme du défilement, puis la page repart"></video>

## Partie 1 : déclencher au défilement (10 min)

- [ ] En haut de `js/script.js`, enregistrez le plugin : `gsap.registerPlugin(ScrollTrigger);`
- [ ] Ajoutez un objet de paramètres à `gsap.timeline()`, avec un `scrollTrigger` :
  - l'élément observé (`trigger`) : la scène, `.scene`;
  - les repères : `markers: true`.

??? tip "Indice : où va le `scrollTrigger`?"
    Dans l'objet de paramètres de la **timeline**, pas dans un des `.to()` :

    ```js
    gsap.timeline({
      scrollTrigger: {
        // ...
      },
    })
      .to(/* ... */)
    ```

- [ ] Défilez lentement. Observez les 4 repères : le numéro démarre quand `start` croise `scroller-start`.
- [ ] Changez `start` pour que le numéro démarre quand le **haut de la scène** atteint le **milieu de l'écran**.
- [ ] Remontez : le numéro ne se rejoue pas. Ajoutez des `toggleActions` pour qu'il se **rejoue à l'envers** quand on remonte au-dessus de la scène.

- [ ] *Commit* (`Partie 1 : déclenche le numéro au défilement`), puis *push*.

## Partie 2 : suivre le défilement (5 min)

Avec `toggleActions`, le numéro joue tout seul, à sa vitesse. Dans un récit, c'est le visiteur qui doit le faire avancer.

- [ ] Remplacez les `toggleActions` par `scrub: true`. Défilez, arrêtez, remontez.
- [ ] Essayez ensuite `scrub: 1`. Quelle différence?

??? quote "Ce que vous devriez voir"
    Le numéro avance quand on descend, recule quand on remonte, s'arrête quand on s'arrête. Mais la scène continue de monter : on rate la fin du numéro, qui se joue pendant qu'elle sort de l'écran.

- [ ] *Commit* (`Partie 2 : le numéro suit le défilement`), puis *push*.

## Partie 3 : épingler la scène (10 min)

- [ ] Le numéro commence quand le **haut de la scène** touche le **haut de l'écran** : réglez `start`.
- [ ] Ajoutez `pin: true` : la scène reste en place pendant tout le numéro.
- [ ] Le numéro dure **3 écrans** de défilement : réglez `end` avec une valeur relative.

??? tip "Indice : `end` relatif"
    `end: "+=300%"` : 3 hauteurs d'écran **après** le `start`.

- [ ] Défilez : la scène s'arrête, le numéro se joue au rythme de votre défilement, puis la page repart quand la main est sortie.
- [ ] Retirez les `markers`.
- [ ] *Commit* (`Partie 3 : épingle la scène`), puis *push*.

## Partie 4 : le mouvement réduit (5 min)

Avec le mouvement réduit, le numéro ne doit pas jouer, **et** rien ne doit rester caché : le chapeau, la baguette et la main restent visibles, à leur place.

- [ ] Enveloppez **l'état de départ et la timeline** dans `gsap.matchMedia()`, avec la condition `(prefers-reduced-motion: no-preference)`.
- [ ] Testez : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion* → `reduce`. Rechargez : tout est visible, rien ne bouge, et la scène n'est plus épinglée.

??? question "Pourquoi l'état de départ va-t-il aussi dans le `matchMedia()`?"
    C'est le `gsap.set()` qui cache le chapeau, la main et la baguette. Si on le laisse dehors, ils restent cachés avec le mouvement réduit... et la timeline qui devait les montrer ne joue jamais.

- [ ] *Commit* (`Partie 4 : respecte le mouvement réduit`), puis *push*.

## Bonus (facultatif)

- [ ] À la fin du numéro, la main reste quelques instants en l'air avant que la page reparte. Indice : un tween « vide » à la fin de la timeline, `.to({}, { duration: 1 })`, ajoute du défilement sans rien animer.
- [ ] Ajoutez un titre dans la scène (« Ta-da! ») qui apparaît à la toute fin du numéro.
- [ ] *Commit* (`Bonus : une pause à la fin`), puis *push*.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

Je vois votre dépôt et vos *commits* dans Classroom 50.

<small>Scène et images : exercice Magie du cours Web 3 (582-311), TIM Montmorency, avec sa permission.</small>
