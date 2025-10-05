# Quick Start - Démarrage Rapide du Projet

## 🚀 Installation et Configuration (30 minutes)

### Prérequis

Avant de commencer, assurez-vous d'avoir:
- ✅ Node.js 18+ installé ([télécharger](https://nodejs.org))
- ✅ Git installé ([télécharger](https://git-scm.com))
- ✅ VS Code installé ([télécharger](https://code.visualstudio.com))
- ✅ Compte GitHub créé

**Vérifier les versions:**
```bash
node --version   # Devrait afficher v18.x ou plus
npm --version    # Devrait afficher 9.x ou plus
git --version    # Devrait afficher 2.x ou plus
```

---

## 📦 Étape 1: Créer le Projet (Chef de projet uniquement)

### 1.1 Initialiser le projet Vite + Vue

```bash
# Créer le projet
npm create vite@latest mon-projet -- --template vue

# Entrer dans le dossier
cd mon-projet

# Installer les dépendances de base
npm install

# Tester que ça fonctionne
npm run dev
```

Ouvrez http://localhost:5173 - Vous devriez voir la page de démo Vue.

### 1.2 Installer les dépendances du projet

```bash
# Dépendances principales
npm install pinia vue-router sass gsap

# Dépendances de développement
npm install -D eslint prettier eslint-plugin-vue
```

### 1.3 Structure de dossiers

Créer la structure suivante:

```
mon-projet/
├── public/
│   ├── images/
│   └── sounds/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── main.scss
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       └── _reset.scss
│   ├── components/
│   │   ├── common/
│   │   └── ui/
│   ├── composables/
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   ├── views/
│   ├── utils/
│   ├── App.vue
│   └── main.js
├── .gitignore
├── README.md
└── package.json
```

**Créer les dossiers rapidement:**
```bash
# Windows (PowerShell)
New-Item -ItemType Directory -Path src/components/common, src/components/ui, src/composables, src/router, src/stores, src/views, src/utils, src/assets/styles, public/images, public/sounds

# Mac/Linux
mkdir -p src/{components/{common,ui},composables,router,stores,views,utils,assets/styles} public/{images,sounds}
```

### 1.4 Configurer Vue Router

**src/router/index.js:**
```javascript
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // Ajoutez vos routes ici
  ]
});

export default router;
```

**src/main.js (mise à jour):**
```javascript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
```

### 1.5 Configurer Pinia

**src/stores/example.js:**
```javascript
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    // Votre state ici
  }),
  
  getters: {
    // Vos getters ici
  },
  
  actions: {
    // Vos actions ici
  }
});
```

### 1.6 Configurer SASS

**src/assets/styles/_variables.scss:**
```scss
// Couleurs
$primary-color: #6366f1;
$secondary-color: #8b5cf6;
$text-color: #1f2937;
$bg-color: #ffffff;
$error-color: #ef4444;
$success-color: #10b981;

// Espacements
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// Breakpoints
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;

// Typographie
$font-family: 'Inter', sans-serif;
$font-size-base: 16px;
```

**src/assets/styles/_mixins.scss:**
```scss
// Responsive breakpoints
@mixin mobile {
  @media (max-width: #{$tablet - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$tablet}) and (max-width: #{$desktop - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}

// Flexbox center
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Transition standard
@mixin transition($property: all) {
  transition: $property 0.3s ease;
}
```

**src/assets/styles/_reset.scss:**
```scss
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: $font-family;
  font-size: $font-size-base;
  color: $text-color;
  background-color: $bg-color;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
```

**src/assets/styles/main.scss:**
```scss
@import './variables';
@import './mixins';
@import './reset';

// Vos styles globaux ici
```

### 1.7 Créer le .gitignore

**.gitignore:**
```gitignore
# Dependencies
node_modules/

# Build
dist/
dist-ssr/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
```

### 1.8 Initialiser Git et pousser sur GitHub

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "chore: initial project setup"

# Créer le repo sur GitHub (via interface web)
# Puis lier et push:
git remote add origin https://github.com/votre-username/nom-du-repo.git
git branch -M main
git push -u origin main

# Créer la branche develop
git checkout -b develop
git push -u origin develop
```

---

## 👥 Étape 2: Rejoindre le Projet (Autres membres)

### 2.1 Cloner le repo

```bash
# Cloner le repo
git clone https://github.com/votre-username/nom-du-repo.git

# Entrer dans le dossier
cd nom-du-repo

# Installer les dépendances
npm install

# Vérifier que ça fonctionne
npm run dev
```

### 2.2 Configurer Git localement

```bash
# Configurer votre nom et email
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Vérifier les branches
git branch -a

# Passer sur develop
git checkout develop
```

---

## 🛠️ Étape 3: Workflow Quotidien

### Chaque jour avant de commencer:

```bash
# 1. Se mettre à jour
git checkout develop
git pull origin develop

# 2. Créer une branche pour votre tâche
git checkout -b feature/nom-de-votre-feature

# 3. Travailler sur votre code...
```

### Pendant le travail:

```bash
# Voir vos modifications
git status

# Ajouter vos fichiers
git add .

# Commit régulièrement (toutes les 30-60 min)
git commit -m "feat(scope): description courte"

# Push vers GitHub
git push origin feature/nom-de-votre-feature
```

### En fin de journée:

```bash
# Push final
git add .
git commit -m "feat(scope): votre dernier changement"
git push origin feature/nom-de-votre-feature

# Créer une Pull Request sur GitHub si la feature est terminée
```

---

## 📋 Templates de Fichiers Utiles

### Composant Vue de Base

**src/components/ExampleComponent.vue:**
```vue
<template>
  <div class="example-component">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

// Emits
const emit = defineEmits(['click']);

// State
const count = ref(0);

// Computed
const doubleCount = computed(() => count.value * 2);

// Methods
const handleClick = () => {
  count.value++;
  emit('click', count.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.example-component {
  padding: $spacing-lg;
  
  h2 {
    color: $primary-color;
    margin-bottom: $spacing-md;
  }
  
  button {
    background: $primary-color;
    color: white;
    padding: $spacing-sm $spacing-md;
    border: none;
    border-radius: 4px;
    @include transition(background);
    
    &:hover {
      background: darken($primary-color, 10%);
    }
  }
  
  @include mobile {
    padding: $spacing-md;
  }
}
</style>
```

### Store Pinia de Base

**src/stores/exampleStore.js:**
```javascript
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    items: [],
    currentItem: null,
    isLoading: false,
    error: null
  }),
  
  getters: {
    itemCount: (state) => state.items.length,
    
    hasItems: (state) => state.items.length > 0,
    
    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id);
    }
  },
  
  actions: {
    addItem(item) {
      this.items.push({
        ...item,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      });
    },
    
    updateItem(id, updates) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updates };
      }
    },
    
    deleteItem(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    
    setCurrentItem(id) {
      this.currentItem = this.getItemById(id);
    }
  }
});
```

### Composable useLocalStorage

**src/composables/useLocalStorage.js:**
```javascript
export function useLocalStorage(key) {
  const save = (data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  };

  const load = (defaultValue = null) => {
    try {
      const jsonData = localStorage.getItem(key);
      return jsonData ? JSON.parse(jsonData) : defaultValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  };

  const exists = () => {
    return localStorage.getItem(key) !== null;
  };

  return {
    save,
    load,
    remove,
    exists
  };
}
```

---

## 🎨 Composants UI Réutilisables

### ButtonPrimary.vue

**src/components/ui/ButtonPrimary.vue:**
```vue
<template>
  <button
    class="btn-primary"
    :class="{ 'btn-primary--loading': loading, 'btn-primary--disabled': disabled }"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="btn-primary__spinner"></span>
    <span v-else><slot>Button</slot></span>
  </button>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  if (!props.loading && !props.disabled) {
    emit('click');
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.btn-primary {
  background: $primary-color;
  color: white;
  padding: $spacing-sm $spacing-lg;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  @include transition(all);
  
  &:hover:not(&--disabled):not(&--loading) {
    background: darken($primary-color, 10%);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(&--disabled):not(&--loading) {
    transform: translateY(0);
  }
  
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &--loading {
    cursor: wait;
  }
  
  &__spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
```

### Modal.vue

**src/components/ui/Modal.vue:**
```vue
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" @click="close" aria-label="Close">✕</button>
          
          <div v-if="title" class="modal-header">
            <h2>{{ title }}</h2>
          </div>
          
          <div class="modal-body">
            <slot></slot>
          </div>
          
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const close = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: $spacing-md;
  right: $spacing-md;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  
  &:hover {
    color: $text-color;
  }
}

.modal-header {
  padding: $spacing-xl $spacing-xl $spacing-md;
  border-bottom: 1px solid #e5e7eb;
  
  h2 {
    margin: 0;
  }
}

.modal-body {
  padding: $spacing-xl;
}

.modal-footer {
  padding: $spacing-md $spacing-xl $spacing-xl;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: $spacing-md;
}

// Transitions
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
  
  .modal-content {
    transition: transform 0.3s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  
  .modal-content {
    transform: scale(0.9);
  }
}
</style>
```

---

## 🚀 Scripts NPM Utiles

Ajoutez dans **package.json:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
  }
}
```

---

## ✅ Checklist Premier Jour

- [ ] Node.js et npm installés
- [ ] Git installé et configuré
- [ ] VS Code installé avec extensions (Volar, ESLint, Prettier)
- [ ] Projet cloné et dépendances installées
- [ ] `npm run dev` fonctionne
- [ ] Premier commit/push réussi
- [ ] Branches `main` et `develop` créées
- [ ] Tous les membres ont accès au repo GitHub
- [ ] Structure de dossiers créée
- [ ] Router et Pinia configurés
- [ ] SASS configuré avec variables

---

## 🆘 Problèmes Courants

### "npm install" échoue

```bash
# Nettoyer le cache npm
npm cache clean --force

# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### "npm run dev" ne démarre pas

```bash
# Vérifier que le port 5173 n'est pas utilisé
# Changer le port dans vite.config.js:
export default {
  server: {
    port: 3000
  }
}
```

### Erreurs de permissions (Mac/Linux)

```bash
# Ne jamais utiliser sudo avec npm!
# Corriger les permissions:
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
```

---

**Vous êtes prêts à coder! 🎉**