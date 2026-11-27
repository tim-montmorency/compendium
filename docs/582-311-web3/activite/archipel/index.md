---
tags:
  - Exercice
  - Vite
---

# Archipel

L'objectif de cet exercice est de **construire un site Vite de plusieurs pages** qui fonctionne aussi une fois publié.

Il sera question d'ajouter des pages, de les déclarer dans la configuration de Vite et de partager un même fichier JavaScript entre toutes les pages.

## Résultat attendu

* Un site de trois pages : Accueil, Île du Nord et Île du Sud.
* La même navbar sur chaque page, avec le lien de la page courante mis en évidence.
* Après `npx vite build`, les trois pages sont dans le dossier `dist/`.
* Aucune erreur dans la console, sur aucune des pages.

## Petits rappels

| Besoin | Où et comment |
| --- | --- |
| Ajouter une page | Un nouveau fichier `.html` à la racine du projet, à côté de `index.html` |
| Lier les pages | `<a href="./ile-nord.html">`, toujours avec `./` |
| Garder les pages au *build* | Les déclarer dans `vite.config.js`, sous `build.rolldownOptions.input` |
| Code propre à une page | Un bloc `if (element) { ... }` |

## Consignes

Le dossier de départ contient la page d'accueil, avec sa navbar et un bouton « Boussole ».

### Ajouter les pages

- [ ] Lancer `npx vite` et tester le bouton « Boussole » de l'accueil
- [ ] Créer `ile-nord.html` et `ile-sud.html` à la racine du projet, en copiant `index.html`
- [ ] Dans chaque nouvelle page, changer le `<title>` et le contenu du `<main>` (un titre et une courte description de l'île). Retirer le bouton « Boussole », qui n'appartient qu'à l'accueil
- [ ] Vérifier que la navbar mène bien aux trois pages

### La page active

- [ ] Dans la navbar de chaque page, ajouter la classe DaisyUI `btn-active` au lien de la page courante seulement

### Le code partagé

- [ ] Ouvrir la console sur la page Île du Nord

!!! question "Observation"

    Une erreur apparaît sur les deux îles, mais pas sur l'accueil. Pourquoi ? Que retourne `document.querySelector("#btn-boussole")` sur une page qui n'a pas ce bouton ?

- [ ] Dans `src/main.js`, entourer l'écouteur du bouton d'un bloc `if (btnBoussole) { ... }`
- [ ] Vérifier la console des trois pages : plus aucune erreur

### Le build

- [ ] Lancer `npx vite build`, puis ouvrir le dossier `dist/`

!!! question "Observation"

    Combien de fichiers HTML se trouvent dans `dist/` ? Qu'arriverait-il au lien vers l'Île du Nord une fois le site en ligne ?

- [ ] Déclarer les trois pages dans `vite.config.js` (voir le cours 12, section *Site de plusieurs pages*)
- [ ] Relancer `npx vite build` : les trois fichiers HTML sont maintenant dans `dist/`

## Défis

Pour aller plus loin, une fois l'exercice fonctionnel :

- [ ] **Mise en ligne** : publier le site sur GitHub Pages et vérifier que les trois pages et leurs liens fonctionnent en ligne

[STOP]

## Solution

La solution complète se trouve dans le dossier `archipel-solution/`, et le projet de départ dans `archipel-depart/`.
