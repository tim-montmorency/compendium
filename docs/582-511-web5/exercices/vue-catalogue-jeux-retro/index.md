# Vue: Mini-catalogue *Jeux retro*


## Fichiers de départ (lien à venir...)

[📥 Télécharger fichiers de départ](#){ .md-button }

## Apercu

Un mini-catalogue de jeux retro :

- Une **liste** d'items rendue par une **composante de carte** reutilisable (`ItemCard`)
- Un **panneau d'options** (tri, ordre, limite, disposition grid/list) gere par le **parent** (`App.vue`)
- **SFC** partout (`.vue`) avec styles `scoped`

## Lancer le projet

```bash
npm install
npm run dev
```
> Vite + Vue 3


## Étapes (1–5)

### 1) Preparer les donnees (dans `App.vue`)

- Observez le tableau `items` fourni (id, title, price, year, image, tags).
- Ajoutez/retirez des jeux si necessaire.
- Notez les etats d'interface (`sortBy`, `sortDir`, `limit`, `layout`).

### 2) Calculer la liste a afficher

- Completez/validez la logique de **tri** (par `title`, `price` ou `year`), d'**ordre** (asc/desc) et de **limite** dans `computed: itemsPrepared`.
- Objectif : **preparer dans le parent** avant de passer aux enfants (props).

### 3) Mettre en place la liste (dans `ItemList.vue`)

- Recevez les **props** `items` et `layout`.
- Rendre `ItemCard` avec `v-for` (cle `:key="item.id"`).
- Adaptez la **disposition** (`grid` / `list`) via la classe du conteneur.

### 4) Construire la carte (dans `ItemCard.vue`)

- Declarez les **props** (`title`, `price`, `image`, `tags`, `year`).
- Affichez l'image, le titre, le prix formate, l'annee, les tags.
- ⚠️ Ne **pas** muter les **props** dans la carte (enfant *stateless*).

### 5) Panneau d'options (lecture seule) (dans `OptionsBar.vue`)

- Recevez les **props** `sortBy`, `sortDir`, `limit`, `layout` et affichez-les.
- Les **controles** se trouvent dans `App.vue` (version simple sans `emit`).

## Bonus (facultatif)

- Ajoutez un **badge** optionnel dans `ItemCard` (ex.: Promo, Nouveau).
- Ajoutez un **slot** pour un bouton CTA.
- Responsive : adaptez la grille en fonction de la largeur (media queries).

## Rappels

- **Props** : flux **parent -> enfant**, read-only cote enfant.
- **SFC** : structure `<template> <script> <style scoped>`.


## Notes de cours 📚

- [Vite](https://tim-montmorency.com/timdoc/582-518MO/javascript/vite/)
- [Vue: Création d'un projet Vue avec Vite](../../vue/creation-projet-CLI.html)
.
- [Vue: Interpolation des données](../../vue/interpolation.html)
- [Vue: Méthode et événenement v-on](../../vue/methodes-evenements.md)
- [Vue: Classe CSS dynamique](../../vue/classe-dynamique.md)
- [Vue: Condition v-if](../../vue/condition.md)
- [Vue: Tableau[ ] + boucle v-for](../../vue/boucle.md)
- [Vue: Éléments d'un formulaire](../../vue/elements-de-formulaire.md)
- [Vue: Propriété calculée](../../vue/propriete-calculee.md)
- [Vue: Composante](../../vue/composante.md)
- [Vue: Props](../../vue/props.md)
- [Vue: Emit](../../vue/emit.md)¸
- [Vue: SFC](../../vue/sfc.md)

