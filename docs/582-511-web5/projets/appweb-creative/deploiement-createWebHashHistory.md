# Hébergement sur GitHub Pages: redéfinir vos paramètres de routes

## Pourquoi utiliser `createWebHashHistory` à la place de `createWebHistory` pour GitHub Pages ?

*GitHub Pages n'est pas un serveur dynamique* à proprement dit - c'est simplement un hébergeur de fichiers statiques (HTML, CSS, JS).

### Le problème avec `createWebHistory` (sans `#`) :

- Quand vous allez sur `monsite.com/about`, GitHub Pages cherche un fichier `about.html`
- Ce fichier n'existe pas → **Erreur 404** ❌
- Ça fonctionne en dev parce que Vite a un vrai serveur qui redirige tout vers `index.html`

### La solution avec `createWebHashHistory` (avec `#`) :

- L'URL devient `monsite.com/#/about`
- Le navigateur ignore tout après le `#` et demande juste `monsite.com/`
- GitHub Pages envoie `index.html` → Vue se charge → Vue Router lit le `#/about` → **Ça fonctionne !** ✅

*Le `#` est la clé magique qui permet au routing de fonctionner sans serveur.*

Veuillez-donc remplacer ceci 


```javascript
// ✅ Pour GitHub Pages
import { createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...]
})
```


par cela:


```javascript
// ✅ Pour GitHub Pages
import { createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...]
})
```