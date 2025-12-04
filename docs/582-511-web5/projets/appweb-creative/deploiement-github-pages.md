# Déploiement *live* de votre projet

Déploiement *live* de votre projet avec *Vite* sur *GitHub Pages*

## ÉTAPE 0 : Préparation des images du JSON en vue de la mise en ligne

Si vos images sont *référencées dans un fichier JSON* de données :

1. Créez un dossier `public/` à la racine (au même niveau que `src/`)

2. Bougez vos images du json dans `public/images/`

3. Dans votre *JSON*, modifiez des chemins vers les images en commançant par `/`. Par exemple:

```json
   {
     "image": "/images/photo.jpg"  // ← Commence par /
   }
```

4. *Vite* copiera automatiquement tout le contenu de `public/` dans `dist/` final (bref dans votre projet compilé (*build*))

**Structure correcte :**
```
votre-projet/
├── public/
│   └── images/
│       ├── salle1.jpg
│       └── salle2.jpg
├── src/
│   └── data/
│       └── data.json  ← Référence: "/images/salle1.jpg"
```

❌ Bref: *NE PAS* mettre les images dans `src/assets/` si elles sont dans le *JSON*.


## ÉTAPE 1 : Configurer `vite.config.js`

- Ouvrez le fichier `vite.config.js` à la racine de votre projet.

- Ajoutez la propriété `base` :

  ```javascript
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'

  export default defineConfig({
    plugins: [vue()],
    base: '/nom-de-votre-repo/', // ⚠️ IMPORTANT : remplacer par le nom de votre repo
  })
  ```

- Comment trouver le nom de votre repo ?

  - URL de votre repo : `https://github.com/votre-username/mon-projet`
  - Le nom du repo = `mon-projet`
  - Donc `base: '/mon-projet/',`

- *N'oubliez pas les `/` au début ET à la fin !*

- Sauvegardez le fichier.


!!! Warning "⚠️ ⚠️ ⚠️ "
    Attention, si vous avez un sous-dossier et que votre projet n'est pas à la racine du repo git, vous devez plutôt suivre [ces instructions](./deploiement-github-pages-sous-dossier.md) pour l'ÉTAPE 1 qui consiste à définir la `base` de votre projet dans `vite.config.js`.



## ÉTAPE 2 : Compiler (*build*) le projet

- Ouvrez un terminal dans le dossier de votre projet

- Lancez la commande de build :

  ```bash
  npm run build
  ```

- Ce qui va se passer :
  - Vite va créer un dossier `dist/` 
  - Ce dossier contient votre site optimisé (minifié, compressé)
  - Ça prend 10-30 secondes

- Vérifiez que le dossier `dist/` a été créé :

  - Il devrait contenir : `index.html`, un dossier `assets/`, etc.



## ÉTAPE 3 : Tester le build localement (optionnel mais recommandé)

- Avant de déployer, testez que le *build* fonctionne :

  ```bash
  npm run preview
  ```

- Ouvrez le lien affiché (généralement [http://localhost:4173](http://localhost:4173))

- Vérifiez que tout fonctionne :

  - Navigation
  - Images
  - Fonctionnalités principales

**Si ça fonctionne, passez à l'étape suivante !**

**Si ça ne fonctionne pas :**

- Vérifiez `base` dans `vite.config.js`
- Vérifiez les chemins d'images.
  - Ils doivent être relatifs.
  - Les images référencées par le fichier *JSON* [doivent être placées dans un dossier `public`](#)



## ÉTAPE 4 : Créer la branche gh-pages sur GitHub

Si ce n'est pas fait, arrêtez le projet dans le terminal via `q` et `enter`.

Ensuite créez via ligne de commande une nouvelle branche vide:

```bash
git switch --orphan gh-pages
```

<!--
**Allez sur votre repo GitHub dans un navigateur**

**URL : `https://github.com/votre-username/votre-repo`**

**Cliquez sur le menu déroulant "main" (en haut à gauche)**

**Tapez `gh-pages` dans la zone de texte**

**Cliquez sur "Create branch: gh-pages"**

-->

Vous pouvez vérifier dans *GitHub Desktop* sur la branche que vous venez de créer voir si'il est vraimetn vide de tout ficheir. S'il n'est pas vide, videz le avec ceci toujorus dans votre terminal:

```bash
git rm -rf .
```


Une bnrache orpheline doit avoir au moins un commit, même s'il est vide de ficheir pour initialiser une historique de branche:

```bash
git commit --allow-empty -m "Initial commit on orphan branch"

```

Allez dans *GitHub Desktop* pour faire le push de votre nouvelle branche *gh-pages*.



✅ Vous avez maintenant une branche `gh-pages` vide!



## ÉTAPE 5 : Installer gh-pages (outil de déploiement)

**Dans votre terminal :**

```bash
npm install --save-dev gh-pages
```

**Attendez que l'installation se termine (10-20 secondes)**


## ÉTAPE 6 : Ajouter le script de déploiement

**Ouvrez `package.json`**

**Dans la section `"scripts"`, ajoutez cette ligne :**

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

⚠️ **Important : ajoutez une virgule après la ligne précédente si nécessaire**

**Sauvegardez `package.json`**



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



## ÉTAPE 8 : Activer GitHub Pages (première fois seulement)

**Retournez sur votre repo GitHub**

**Cliquez sur "Settings" (en haut)**

**Dans le menu de gauche, cliquez sur "Pages"**

**Sous "Branch", sélectionnez :**

- Branch : `gh-pages`
- Folder : `/ (root)`

**Cliquez sur "Save"**

**Attendez 1-2 minutes**

**GitHub va vous donner l'URL de votre site :**
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

**Si tout fonctionne : 🎉 BRAVO !**

**Si ça ne fonctionne pas, voir section "Problèmes courants" ci-dessous**


<!-- 
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
-->

??? 🐛 Problèmes courants"

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


## 📋 Checklist finale

Avant de dire "c'est déployé", vérifiez :

- [ ] Le site s'ouvre sans erreur
- [ ] Toutes les pages sont accessibles
- [ ] Les images s'affichent
- [ ] Les fonctionnalités marchent (formulaires, boutons, etc.)
- [ ] Le site est responsive (tester sur mobile)
- [ ] Pas d'erreurs dans la console (F12)
- [ ] L'URL GitHub Pages fonctionne


<!-- 

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



-->