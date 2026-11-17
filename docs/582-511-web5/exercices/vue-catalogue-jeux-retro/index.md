# **Exercice** Vue: Mini-catalogue Jeux retro


## Fichiers de départ

[📥 Télécharger fichiers de départ](./jeu-retro-fichiers-depart.zip){ .md-button }


## Aperçu

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=2e828139-878b-4441-a090-60fa02d95470&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

[Lien vers l'aperçu](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/ETmBgi6Lh0FEoJBg-gLZVHAB5Ngk6SnwFCETyoxf_QaFwA?e=y8sQut&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

## Un mini-catalogue de jeux rétro

- [ ] Une *liste* d'items rendue par une *composante de carte* reutilisable (`ItemCard`)
- [ ] Un *panneau d'options* (tri, ordre, limite, disposition grid/list) géré par le *parent* (`App.vue`)
- [ ] Bonus: séparer ce *panneau d'options* (tri, ordre, limite, disposition grid/list) et en faire une composante à part
- [ ] *SFC* partout (`.vue`) avec styles `scoped`

## Lancer le projet

- [ ] Installer les dépendances npm
- [ ] Démarrer le serveur de développement Vite

```bash
npm install
npm run dev
```
> Vite + Vue 3

---

## Étapes (1–4)

### 1) Préparer les données (dans `App.vue`)

- [ ] Observez le tableau `items` fourni (id, title, price, year, image, tags).
- [ ] Ajoutez un jeux rétro dans la liste (n'oubliez pas d'ajouter l'image trouvé sur Internet).
- [ ] Notez les états d'interface (`sortBy`, `sortDir`, `limit`, `layout`).
- [ ] Sous le commentaire `<!--  Affichage de la liste des jeux -->` ajoutez l'affichage de la composante `ItemList`.

### 2) Analysez la propriété calculée `itemsFiltered`

- [ ] Analysez la logique de *tri* (par `title`, `price` ou `year`), d'*ordre* (asc/desc) et de *limite* dans `computed: itemsFiltered`.

### 3) Mettre en place la liste (dans `ItemList.vue`)

- [ ] Préparer la composante à recevoir les *props* `items` et `layout` en spécifiant le type de donnée. À titre d'information:
  - `items` contiendra la liste des jeux sous forme de tableau (Array).
  - `layout` contiendra le format de la mise en page des carte, soit "grid" ou "list". Cette `prop` sera donc une chaîne de caractères (String).
- [ ] Retournez dans `App.vue` pour envoyer les données dans les 2 `props`que vous venez de créer. La prop `items` devra recevoir les données filtrées provenant de la propriété calculée `itemsFiltered`.
- [ ] De retour dans `ItemList.vue`, sous `<!-- Affichage des cartes de chaque jeu -->`, affichez la liste de jeux `ItemCard` avec `v-for` (clé `:key="item.id"`) [En savoir plus sur l'utilisation de `key` avec un v-for](https://fr.vuejs.org/guide/essentials/list#maintaining-state-with-key)
- [ ] Adaptez la *disposition* (`grid` / `list`) en ajoutant une classe dynamique sur conteneur `<section class="collection">` en fonction de la valeur de la prop `layout`.

### 4) Construire la carte (dans `ItemCard.vue`)

- [ ] Déclarez les *props* (`title`, `price`, `image`, `tags`, `year`)  en spécifiant le type de donnée.
- [ ] Dans le `<template>` affichez l'image, le titre, l'année, les tags et le prix formaté par la méthode `formatPrice` déjà existante.


## BONUS: Panneau d'options (dans `OptionsBar.vue`)

- Pour le moment, le panneau d'options (`sortBy`, `sortDir`, `limit`, `layout`) se trouve directement dans l'App principale `App.vue`. Sortez ça de la et faites-en une composante dans OptionsBar.vue. Observez les 2 autres composantes pour savoir comment le préparer et l'intégrer à l'app principale.
- [ ] Montez les base de la composante, monter le `<template> `.
- [ ] Recevez les *props* `sortBy`, `sortDir`, `limit`, `layout` et affichez-les.
- [ ] Utilisez `$emit` pour envoyer les données à l'app parent lorsque la valeur de l'événement de formulaire change.



## Rappels

- [ ] *Props* : flux *parent -> enfant*, read-only côté enfant.
- [ ] *Emit* : flux *enfant -> parent*.
- [ ] *SFC* : structure `<template> <script> <style scoped>`.

## Notes de cours 📚

- [Vue intro](../../vue/index.md)
- [Vue: Création d'une app](../../vue/creation-app.html)
- [Vue: Interpolation des données](../../vue/interpolation.html)
- [Vue: Méthode et événenement v-on](../../vue/methodes-evenements.md)
- [Vue: Classe CSS dynamique](../../vue/classe-dynamique.md)
- [Vue: Condition v-if](../../vue/condition.md)
- [Vue: Tableau[ ] + boucle v-for](../../vue/boucle.md)
- [Vue: Éléments d'un formulaire](../../vue/elements-de-formulaire.md)
- [Vue: Propriété calculée](../../vue/propriete-calculee.md)
- [Vue: Composante](../../vue/composante.md)
- [Vue: Props](../../vue/props.md)
- [Vue: Émettre un événement ($emit)](../../vue/emit.md)

