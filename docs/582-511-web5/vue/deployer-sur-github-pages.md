# Déploiement sur GitHub Pages

## 1. Configurez le chemin de base :

- Ouvrez votre fichier `vite.config.js` (ou `vue.config.js`).
- Ajoutez ou modifiez l'option base en remplaçant "`<your-repository-name>`" par le nom de votre dépôt GitHub.
- Si vous utilisez Vue Router, modifiez `createWebHistory()` pour inclure le même chemin de base.
javascript

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/<your-repository-name>/' // Remplacez par le nom de votre dépôt
})
```

## 2. Construisez (build) le projet :

Exécutez `npm run build` dans votre terminal pour créer le dossier `dist`.

## 3. Déployez sur la branche `gh-pages` :

Créez une nouvelle branche gh-pages et poussez le contenu du dossier `dist` vers cette branche avec la commande :
bash

```bash
git subtree push --prefix dist origin gh-pages
```

## 4. Configurez GitHub Pages :

- Allez dans les paramètres de votre dépôt GitHub, puis sélectionnez "Pages" dans le menu de gauche.
- Dans la section "Source", choisissez "Deploy from a branch".
- Sélectionnez la branche `gh-pages` et le dossier / (root) dans le menu déroulant.
- Cliquez sur "Save". 