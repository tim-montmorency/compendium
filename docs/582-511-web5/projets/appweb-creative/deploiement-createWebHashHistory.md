# Hébergement sur GitHub Pages: redéfinir vos paramètres de routes

## Pourquoi utiliser `createWebHashHistory` à la place de `createWebHistory` pour GitHub Pages?

*GitHub Pages n'est pas un serveur dynamique* à proprement dit - c'est simplement un hébergeur de fichiers statiques (HTML, CSS, JS).

### Le problème `createWebHistory`(sans `#`)

- Quand vous allez sur `monsite.com/about`, GitHub Pages cherche un fichier `about.html`
- Ce fichier n'existe pas → **Erreur 404** ❌
- Ça fonctionne en *dev* parce que *Vite* a un vrai serveur qui redirige tout vers `index.html`

### La solution `createWebHashHistory`(avec `#`)

- L'URL devient `monsite.com/#/about`
- Le navigateur ignore tout après le `#` et demande juste `monsite.com/`
- GitHub Pages envoie `index.html` → Vue se charge → Vue Router lit le `#/about` → **Ça fonctionne !** ✅

*Le `#` est la clé magique qui permet au routing de fonctionner sans serveur.*

Veuillez-donc remplacer ceci :

```javascript copy-range="2:4"
// Fonctionnel en local dev (car Vite est un vrai serveur) 
// ou sur un vrai serveur web
import { createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...]
})
```

par cela :

```javascript  copy-range="1:4"
// Pour GitHub Pages qui n'est pas un serveur 
// mais un simple hébergeur de fichiers statiques
import { createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...]
})
```