---
tags:
  - Exercice
---

# DaisyUI

![](./giphy2.gif){.w-100}

L'objectif de cet exercice est de reprendre l'exercice précédent DaisyUI et de remplacer les technologies CDN par `npm`/Vite.

## Résultat attendu

Identique à la version du CDN

## Consignes

### Partie 1

- [ ] Partir du projet de l'exercice DaisyUI déjà complété
- [ ] Retirer les `<link>`/`<script>` CDN de Tailwind et de DaisyUI
- [ ] Installer en ligne de commande les technologies Vite Tailwind et DaisyUI
- [ ] Créer les fichiers `vite.config.mjs` et `style.css` à la racine du projet
- [ ] Ajuster `index.html` pour lier le fichier `style.css`
- [ ] Lancer avec `npx vite` et confirmer que le rendu est identique à la version CDN

### Partie 2

- [ ] Ajouter un `.gitignore` approprié
- [ ] Faire un build et vérifier le contenu généré dans le dossier `dist/`
- [ ] Faites un _commit_ et un _push_
- [ ] Vérifiez que le dossier `node_modules` ne se trouve pas sur GitHub
