# :simple-vuedotjs:  Exercice : Tableau NBA

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Votre **première app Vue** : le tableau indicateur d'un match entre les Raptors de Toronto et les Celtics de Boston. Un clic sur le logo d'une équipe lui donne 2 points.
2. Notions : `createApp()` et `mount()`, `data()`, l'interpolation `{{ }}`, `@click` et les méthodes, puis une propriété calculée.
3. **Seul, environ 40 minutes.** Gardez les pages [Création d'une app](../../vue/creation-app.md) et [Méthodes et événements](../../vue/methodes-evenements.md) ouvertes à côté.

</div>

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-vue-tableau-nba/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

Vue est chargé par CDN, avec une balise `<script>` dans `index.html`, **avant** `js/script.js`. Le CSS est déjà fait. Tout votre code va dans `js/script.js`, et quelques ajouts dans `index.html`.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-nba.webm" autoplay muted loop playsinline aria-label="Aperçu du résultat : un clic sur le logo d'une équipe ajoute 2 points à son pointage, et le texte sous VS indique quelle équipe mène"></video>

## Partie A : l'app et les données (10 min)

- [ ] Dans `js/script.js`, créez l'app avec `Vue.createApp()`, et montez-la sur `#app`.
- [ ] Dans `data()`, créez deux données pour les pointages : `scoreRaptors` et `scoreCeltics`, toutes deux à `80`.
- [ ] Dans `index.html`, remplacez les deux `50` par vos données, avec `{{ }}`.

??? quote "Ce que vous devriez voir"
    Les deux pointages affichent **80**. Changez une valeur dans `data()`, enregistrez : la page suit.

- [ ] *Commit* (`Partie A : les pointages viennent des données`), puis *push*.

## Partie B : le clic sur les logos (10 min)

- [ ] Créez deux méthodes, une par équipe, qui ajoutent **2 points** au pointage de l'équipe.
- [ ] Dans `index.html`, appelez la bonne méthode au clic sur chaque logo, avec `@click`.

??? tip "Indice : les données dans une méthode"
    Dans une méthode, on lit et on change une donnée avec `this` : `this.scoreRaptors`.

- [ ] *Commit* (`Partie B : un clic ajoute 2 points`), puis *push*.

## Partie C : une seule méthode, avec un paramètre (10 min)

Deux méthodes qui font presque la même chose, c'est du code en double.

- [ ] Remplacez vos deux méthodes par **une seule**, `addPoints(team)`.
- [ ] Au clic, passez-lui en paramètre **le nom de la donnée** à augmenter : `addPoints('scoreRaptors')`.

??? tip "Indice : les crochets"
    Le nom de la propriété est dans une variable : la notation avec un point (`this.team`) ne fonctionne pas. Utilisez les crochets : `this[team]`.

    Voir [les deux façons d'accéder à une propriété (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors){ :target="_blank" }, et [une méthode avec des paramètres](../../vue/methodes-evenements.md).

- [ ] *Commit* (`Partie C : une seule méthode avec un paramètre`), puis *push*.

## Partie D : la propriété calculée (10 min)

Sous le **VS**, affichez qui mène : « Raptors en tête », « Celtics en tête » ou « Égalité ».

- [ ] Créez une propriété calculée `leader` qui **retourne** le bon texte selon les deux pointages.
- [ ] Affichez-la sous le VS, dans un `<p class="leader">`, avec `{{ leader }}`.

??? tip "Indice : `computed`"
    Une propriété calculée va dans `computed`, à côté de `methods`. C'est une fonction qui **retourne** une valeur. Dans le HTML, on l'utilise sans parenthèses, comme une donnée. Voir [Propriété calculée](../../vue/propriete-calculee.md).

- [ ] *Commit* (`Partie D : la propriété calculée leader`), puis *push*.

## Vérifiez votre travail { #verifier }

Testez votre page **sans regarder le code**, sauf quand l'énoncé le demande. Chaque énoncé doit être vrai **avant votre dernier *push***. Si un point coince, relisez la partie concernée et ses indices.

- [ ] **Partie A** : au chargement, les deux pointages affichent **80**, et le `50` n'est plus écrit nulle part dans `index.html`.
- [ ] **Partie B** : un clic sur **TOR** ajoute 2 points aux Raptors, et **seulement** aux Raptors. Même chose pour **BOS**.
- [ ] **Partie C** : dans `methods`, il n'y a **qu'une seule** méthode, `addPoints()`.
- [ ] **Partie D** : au chargement, on lit « Égalité ». Les Raptors marquent : « Raptors en tête ». Les Celtics les dépassent : « Celtics en tête ».
- [ ] La console n'affiche **aucune erreur**, et mes *commits* sont sur github.com.

## Défi (facultatif)

- [ ] Ajoutez sous chaque logo un petit bouton **+3**, pour un panier à trois points. Réutilisez `addPoints()` : ajoutez-lui un deuxième paramètre, le nombre de points.
- [ ] *Commit* (`Défi : les paniers à trois points`), puis *push*.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

[:simple-vuedotjs: L'exercice suivant : Collection de films](../ex-vue-films/index.md){ .md-button .md-button--primary }

<small>Exercice adapté de l'exercice du même nom du cours Programmation interactive (582-518), TIM Montmorency.</small>
