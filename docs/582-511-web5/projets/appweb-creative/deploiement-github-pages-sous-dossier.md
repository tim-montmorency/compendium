# Lorsque votre projet Vue est dans un sous-dossier

Si vous avez un sous-dossier et que votre projet n'est pas à la racine du repo git, vous devez plutôt suivre [ces instructions](./deploiement-github-pages-sous-dossier.md) pour l'ÉTAPE 1 qui consiste à définir la `base` de votre projet dans `vite.config.js`.


## Remplacez votre `vite.config.js` par ceci :

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode === 'production' 
    ? '/nom-de-votre-repo/'  // ← GitHub Pages
    : '/'                     // ← Dev local
}))
```

### OU si vous avez un sous-dossier :

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode === 'production' 
    ? '/nom-de-votre-repo/sous-dossier/'  // ← GitHub Pages avec sous-dossier
    : '/'                                  // ← Dev local
}))
```

## Maintenant testez :

### En dev (devrait être `/`) :

```bash
npm run dev
```
✅ Devrait ouvrir sur `http://localhost:5173/` (sans le nom du repo)

### En build production :

```bash
npm run build
npm run preview
```
✅ Devrait inclure le nom du repo dans les chemins

## Pourquoi ça fonctionne ?

- `npm run dev` → `mode = 'development'` → `base = '/'`
- `npm run build` → `mode = 'production'` → `base = '/votre-repo/'`

## Alternative : Garder simple (si ça ne marche toujours pas)

**Pour l'instant, gardez juste :**

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/'  // ← Laissez comme ça pour le dev
})
```

**Et changez SEULEMENT avant de faire `npm run build` pour déployer :**

```javascript
base: '/nom-de-votre-repo/'  // ← Changez juste avant npm run build
```

C'est moins élégant comme technique mais ça fonctionne...