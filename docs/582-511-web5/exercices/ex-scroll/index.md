# :material-pencil-ruler:  Exercice : animer au défilement

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous avez vu ces notions pour le portfolio. Cette fois, vous les **tapez vous-mêmes** : une barre de progression avec `scroll()`, des cartes qui apparaissent avec `view()`, un texte qui glisse.
2. Toute animation au défilement respecte **deux règles** : `@supports` et `prefers-reduced-motion`.
3. Ce sont les briques de base de votre récit défilant. La parallaxe vient juste après.

</div>

**Seul, environ 40 minutes.** Gardez la page [Animations pilotées par le défilement](../../css/animations-scroll.md) ouverte à côté : tout y est expliqué.

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](#){ :target="_blank" }**
<!-- MM : remplacer # par le lien d'acceptation. -->

1. :material-school-outline: Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. :material-microsoft-visual-studio-code: **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**, dans **Chrome** ou **Edge**. Défilez : rien ne bouge encore.

Les styles de mise en page sont prêts. Vous écrivez vos animations **à la fin** de `css/style.css`.

!!! warning "Le piège de l'ordre"
    La propriété raccourcie `animation` remet `animation-timeline` à sa valeur par défaut. Écrivez donc toujours **`animation` d'abord, puis `animation-timeline`**. Dans l'autre ordre, l'animation joue une seule fois au chargement, au lieu de suivre le défilement.

## Partie 1 : la barre de progression (5 min)

La barre rouge en haut de la page (`.progression`) doit grandir de **0 à 100 % de sa largeur**, à mesure qu'on défile **toute la page**.

- [ ] Une animation `@keyframes` qui passe de `scaleX(0)` à `scaleX(1)`.
- [ ] Reliée au défilement de la page avec `animation-timeline: scroll()`.
- [ ] La barre grandit depuis la **gauche**, pas depuis le centre. Indice : `transform-origin`.

**Vérifiez** : en haut de la page, la barre est vide; en bas, elle est pleine.

## Partie 2 : les cartes apparaissent (10 min)

Chaque carte (`.carte`) apparaît **en entrant dans l'écran** : elle passe de transparente et un peu plus bas, à visible et à sa place.

- [ ] Une animation qui change `opacity` et `transform: translateY()`.
- [ ] Reliée à la visibilité **de chaque carte**, avec `view()`.
- [ ] L'animation est **terminée quand la carte a monté de 30 %** dans l'écran. Indice : `animation-range`, avec `entry` et `cover`.

**Vérifiez** : défilez lentement. Chaque carte apparaît à son tour, et elle est complètement visible bien avant le milieu de l'écran.

## Partie 3 : le grand texte glisse (5 min)

Le grand texte du bandeau (`.bandeau__texte`) **glisse vers la gauche** pendant toute sa traversée de l'écran.

- [ ] Une animation `translateX()`, d'une valeur positive à une valeur négative.
- [ ] Reliée à la visibilité du texte, avec `view()`.

!!! tip "Le texte ne bouge pas?"
    Ce n'est pas votre animation. Regardez une propriété du **bandeau** dans le CSS de départ, et relisez le piège de la page sur les animations au défilement.

## Partie 4 : les deux règles obligatoires (5 min)

- [ ] **`@supports`** : vos animations ne s'appliquent que si le navigateur comprend `animation-timeline`. Sinon, la page reste lisible et fixe.
- [ ] **`prefers-reduced-motion`** : avec le mouvement réduit, rien ne bouge.

Pour tester `prefers-reduced-motion` : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Bonus : la sortie des cartes

*Facultatif, pour ceux qui veulent aller plus loin.*

Les cartes **disparaissent aussi** en sortant par le haut de l'écran : elles pâlissent et rapetissent légèrement.

- [ ] Une deuxième animation sur `.carte`, avec sa propre plage : `exit`.
- [ ] Indice : `animation`, `animation-timeline` et `animation-range` acceptent **plusieurs valeurs, séparées par des virgules**, une par animation.

## Vos *commits* et la remise

Un *commit* à la **fin de chaque partie**, puis *push* :

```text
Partie 1 : anime la barre de progression
Partie 2 : fait apparaître les cartes
Partie 3 : fait glisser le bandeau
Partie 4 : ajoute @supports et le mouvement réduit
Bonus : anime aussi la sortie des cartes
```

La dernière ligne est **facultative** : seulement si vous avez fait le bonus.

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50. Gardez-le : il vous servira de référence pour votre récit.
