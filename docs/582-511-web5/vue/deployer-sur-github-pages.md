# **Vue.js** Déploiement Vite sur GitHub Pages


## ÉTAPE 1 : Configurer `vite.config.js`

**Ouvrez le fichier `vite.config.js` à la racine de votre projet**

**Ajoutez la propriété `base` :**

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/nom-de-votre-repo/', // ⚠️ IMPORTANT : remplacer par le nom de votre repo
})
```

**Comment trouver le nom de votre repo ?**

- URL de votre repo : `https://github.com/votre-username/mon-projet`
- Le nom du repo = `mon-projet`
- Donc `base: '/mon-projet/',`

⚠️ **N'oubliez pas les `/` au début ET à la fin !**

**Sauvegardez le fichier.**


## ÉTAPE 2 : Compiler (build) le projet

- **Ouvrez un terminal dans le dossier de votre projet**

- **Lancez la commande de build :**

  ```bash
  npm run build
  ```

  **Ce qui va se passer :**

  - Vite va créer un dossier `dist/` 
  - Ce dossier contient votre site optimisé (minifié, compressé)
  - Ça prend 10-30 secondes

- **Vérifiez que le dossier `dist/` a été créé :**

  - Il devrait contenir : `index.html`, un dossier `assets/`, etc.


## ÉTAPE 3 : Tester le build localement (optionnel mais recommandé)

- **Avant de déployer, testez que le build fonctionne :**

  ```bash
  npm run preview
  ```

- **Ouvrez le lien affiché (généralement http://localhost:4173)**

  - **Vérifiez que tout fonctionne :**

    - Navigation
    - Images
    - Fonctionnalités principales

    - **Si ça fonctionne, passez à l'étape suivante !**

    - **Si ça ne fonctionne pas :**

      - Vérifiez `base` dans `vite.config.js`
      - Vérifiez les chemins d'images (ils doivent être tous relatifs (bref ne pas débuter par un `/`))

## ÉTAPE 4 : Créer la branche `gh-pages` sur GitHub

- **Allez sur votre repo GitHub dans un navigateur**

  - **URL : `https://github.com/votre-username/votre-repo`**

- **Cliquez sur le menu déroulant "main" (en haut à gauche)**

- **Tapez `gh-pages` dans la zone de texte**

- **Cliquez sur "Create branch: gh-pages"**

✅ Vous avez maintenant une branche `gh-pages` vide


## ÉTAPE 5 : Installer `gh-pages` dans votre projet (outil de déploiement)

- **Dans votre terminal :**

  ```bash
  npm install --save-dev gh-pages
  ```

- **Attendez que l'installation se termine (10-20 secondes)**


## ÉTAPE 6 : Ajouter le script de déploiement

- **Ouvrez `package.json`**

- **Dans la section `"scripts"`, ajoutez cette ligne :**

  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview",
      "deploy": "gh-pages -d dist"
    }
  }
  ```

  ⚠️ **Important : ajoutez une virgule après la ligne précédente**

- **Sauvegardez `package.json`**

---

## ÉTAPE 7 : Déployer sur GitHub Pages

**Dans votre terminal, lancez :**

```bash
npm run deploy
```

**Ce qui va se passer :**

1. L'outil `gh-pages` prend le contenu de `dist/`
2. Le pousse vers la branche `gh-pages` sur GitHub
3. Ça prend 10-30 secondes

**Vous devriez voir des messages comme :**

```
Published
```

✅ **C'est fait ! Votre site est en ligne !**


## ÉTAPE 8 : Activer GitHub Pages (première fois seulement et si ce n'était pas déjà fait)

- **Retournez sur votre repo GitHub**

- **Cliquez sur "Settings" (en haut)**

- **Dans le menu de gauche, cliquez sur "Pages"**

- **Sous "Branch", sélectionnez :**

  - Branch : `gh-pages`
  - Folder : `/ (root)`

- **Cliquez sur "Save"**

- **Attendez 1-2 minutes**

- **GitHub va vous donner l'URL de votre site :**

  ```
  https://votre-username.github.io/votre-repo/
  ```


## ÉTAPE 9 : Vérifier que ça fonctionne

**Ouvrez l'URL dans votre navigateur :**

```
https://votre-username.github.io/votre-repo/
```

**Testez :**

- ✅ Le site s'affiche ?
- ✅ La navigation fonctionne ?
- ✅ Les images s'affichent ?
- ✅ Les fonctionnalités marchent ?

## Et voilà !


??? Si ça ne fonctionne pas, voici les "Problèmes courants"
    ## 🐛 Problèmes courants

    ### Problème 1 : Page blanche après déploiement

    **Cause :** Le `base` dans `vite.config.js` n'est pas correct

    **Solution :**
    1. Vérifiez que `base: '/nom-repo/',` correspond au nom de votre repo
    2. N'oubliez pas les `/` au début ET à la fin
    3. Rebuild et redéployez

    ---

    ### Problème 2 : Images ne s'affichent pas

    **Cause :** Chemins d'images incorrects

    **Solution :**
    Les chemins doivent être relatifs ou commencer par `/`

    ❌ **Mauvais :**
    ```javascript
    <img src="C:/Users/moi/projet/images/photo.jpg">
    <img src="file:///images/photo.jpg">
    ```

    ✅ **Bon :**
    ```javascript
    <img src="/images/photo.jpg">
    <img src="./images/photo.jpg">
    ```

    ---

    ### Problème 3 : Erreur 404 lors de la navigation

    **Cause :** Vue Router en mode `history` sur GitHub Pages

    **Solution :**
    Utiliser le mode `hash` dans `router/index.js` :

    ```javascript
    import { createRouter, createWebHashHistory } from 'vue-router'

    const router = createRouter({
      history: createWebHashHistory(), // ← Utilisez hash au lieu de history
      routes: [...]
    })
    ```

    ---

    ### Problème 4 : `npm run deploy` ne fonctionne pas

    **Erreur possible :** "gh-pages: command not found"

    **Solution :**
    ```bash
    npm install --save-dev gh-pages
    ```

    ---

    ### Problème 5 : Changements ne s'affichent pas

    **Cause :** Cache du navigateur

    **Solution :**
    - **Vider le cache :** Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
    - **Mode incognito :** Ouvrir le site en navigation privée
    - **Attendre 2-3 minutes :** GitHub Pages peut prendre du temps


<!--

**Si tout fonctionne : 🎉 BRAVO !**

**Si ça ne fonctionne pas, voir section "Problèmes courants" ci-dessous**

---

## 🔄 Pour mettre à jour le site (après modifications)

**Après avoir modifié votre code :**

1. **Sauvegarder vos changements dans Git :**
   ```bash
   git add .
   git commit -m "Corrections de bugs"
   git push
   ```

2. **Rebuilder :**
   ```bash
   npm run build
   ```

3. **Redéployer :**
   ```bash
   npm run deploy
   ```

4. **Attendre 1-2 minutes**

5. **Rafraîchir votre site (Ctrl+F5)**

✅ Le site est mis à jour !

---

## 🐛 Problèmes courants

### Problème 1 : Page blanche après déploiement

**Cause :** Le `base` dans `vite.config.js` n'est pas correct

**Solution :**
1. Vérifiez que `base: '/nom-repo/',` correspond au nom de votre repo
2. N'oubliez pas les `/` au début ET à la fin
3. Rebuild et redéployez

---

### Problème 2 : Images ne s'affichent pas

**Cause :** Chemins d'images incorrects

**Solution :**
Les chemins doivent être relatifs ou commencer par `/`

❌ **Mauvais :**
```javascript
<img src="C:/Users/moi/projet/images/photo.jpg">
<img src="file:///images/photo.jpg">
```

✅ **Bon :**
```javascript
<img src="/images/photo.jpg">
<img src="./images/photo.jpg">
```

---

### Problème 3 : Erreur 404 lors de la navigation

**Cause :** Vue Router en mode `history` sur GitHub Pages

**Solution :**
Utiliser le mode `hash` dans `router/index.js` :

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // ← Utilisez hash au lieu de history
  routes: [...]
})
```

---

### Problème 4 : `npm run deploy` ne fonctionne pas

**Erreur possible :** "gh-pages: command not found"

**Solution :**
```bash
npm install --save-dev gh-pages
```

---

### Problème 5 : Changements ne s'affichent pas

**Cause :** Cache du navigateur

**Solution :**
- **Vider le cache :** Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
- **Mode incognito :** Ouvrir le site en navigation privée
- **Attendre 2-3 minutes :** GitHub Pages peut prendre du temps

---

## 📋 Checklist finale

Avant de dire "c'est déployé", vérifiez :

- [ ] Le site s'ouvre sans erreur
- [ ] Toutes les pages sont accessibles
- [ ] Les images s'affichent
- [ ] Les fonctionnalités marchent (formulaires, boutons, etc.)
- [ ] Le site est responsive (tester sur mobile)
- [ ] Pas d'erreurs dans la console (F12)
- [ ] L'URL GitHub Pages fonctionne

---

## 🎯 Résumé ultra-rapide

```bash
# 1. Configurer vite.config.js
base: '/nom-repo/'

# 2. Builder
npm run build

# 3. Installer gh-pages (une seule fois)
npm install --save-dev gh-pages

# 4. Ajouter script dans package.json
"deploy": "gh-pages -d dist"

# 5. Déployer
npm run deploy

# 6. Activer Pages sur GitHub (Settings > Pages > Branch: gh-pages)

# 7. Visiter : https://username.github.io/nom-repo/
```

---

## 💡 Alternative : Netlify (plus simple)

**Si GitHub Pages est trop complexe, utilisez Netlify :**

1. Allez sur https://netlify.com
2. Connectez votre compte GitHub
3. Sélectionnez votre repo
4. Build command : `npm run build`
5. Publish directory : `dist`
6. Cliquez "Deploy"

✅ **Netlify déploie automatiquement à chaque push sur GitHub !**

---



-->