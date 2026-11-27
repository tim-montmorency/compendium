---
tags:
  - Exercice
  - Sauvegarde
---

# Caméléon

L'objectif de cet exercice est de **sauvegarder des informations dans le navigateur** avec `localStorage`, pour qu'elles survivent au rechargement de la page.

Il sera question de mémoriser le thème choisi par le visiteur et de compter ses visites.

## Résultat attendu

* Un interrupteur qui passe du thème sombre au thème clair. Après un rechargement de la page, le thème choisi est toujours appliqué.
* Un compteur qui affiche le nombre de visites et augmente de 1 à chaque rechargement.

## Petits rappels

| Besoin | Fonctionnalité liée |
| --- | --- |
| Écrire une valeur | `localStorage.setItem("cle", valeur)` |
| Lire une valeur | `localStorage.getItem("cle")`, qui retourne `null` si la clé n'existe pas |
| Effacer une valeur | `localStorage.removeItem("cle")` |
| Transformer du texte en nombre | `Number("3")` |

!!! info "Seulement du texte"

    Le `localStorage` ne garde que du **texte**. Un nombre sauvegardé revient sous forme de texte : `"3"` et non `3`. Pour calculer avec, il faut d'abord le transformer avec `Number()`.

## Consignes

Le dossier de départ contient déjà le HTML de la page. Le fichier `src/main.js` sélectionne déjà l'interrupteur et l'affichage des visites.

### Le thème

- [ ] Lancer `npx vite`, puis tester l'interrupteur : le thème change
- [ ] Recharger la page et observer : le thème choisi est oublié
- [ ] Au changement de l'interrupteur (événement `change`), sauvegarder `"light"` si l'interrupteur est coché, sinon `"dark"`
- [ ] Au chargement de la page, lire la valeur sauvegardée. Si elle vaut `"light"`, cocher l'interrupteur (`interrupteur.checked = true`)
- [ ] Recharger la page : le thème choisi est conservé

### Le compteur de visites

- [ ] Au chargement de la page, lire le nombre de visites sauvegardé et le transformer en nombre avec `Number()`
- [ ] Ajouter 1 à ce nombre, puis le sauvegarder
- [ ] Afficher le nombre dans `#visites` avec `textContent`

!!! question "Observation"

    À la toute première visite, la clé n'existe pas encore : `getItem()` retourne `null`. Que donne `Number(null)` ? Pourquoi le compteur fonctionne-t-il quand même ?

### La vérification

- [ ] DevTools > onglet **Application** > **Local Storage** : retrouver les deux clés et leur valeur
- [ ] Supprimer une clé à la main, recharger la page : aucune erreur dans la console

## Défis

Pour aller plus loin, une fois l'exercice fonctionnel :

- [ ] **Remise à zéro** : ajouter un bouton « Tout oublier » qui efface les deux clés avec `removeItem()`, puis recharge la page avec `location.reload()`

[STOP]

## Solution

La solution complète se trouve dans le dossier `cameleon-solution/`, et le projet de départ dans `cameleon-depart/`.
