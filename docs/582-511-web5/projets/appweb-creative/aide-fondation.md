# Aide pour la fondation du projet

## 🚀 Installation et Configuration

### Prérequis

Avant de commencer, assurez-vous d'avoir:

- ✅ Node.js 18+ installé ([télécharger](https://nodejs.org))
- ✅ Git installé ([télécharger](https://git-scm.com))
- ✅ VS Code installé ([télécharger](https://code.visualstudio.com))
- ✅ Compte GitHub créé

*Vérifier les versions:*

```bash
node --version   # Devrait afficher v18.x ou plus
npm --version    # Devrait afficher 9.x ou plus
git --version    # Devrait afficher 2.x ou plus
```



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
npm install pinia vue-router gsap

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
│   │       ├── main.css
│   │       └── reset.css
│   ├── components/
│   │   ├── common/
│   │   ├── specific/
│   │   └── ui/
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

### 1.4 Configurer Vue Router

*src/router/index.js:*

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

*src/main.js (mise à jour):*

```javascript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './assets/styles/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
```

### 1.5 Configurer Pinia

*src/stores/example.js:*

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


### 1.6 Créer le .gitignore

*.gitignore:*

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

### 1.7 Initialiser Git et pousser sur GitHub

Via GitHub Desktop

## 📋 Templates de fichiers utiles

### Composant Vue de base

*src/components/ExampleComponent.vue:*

```vue
<template>
  <div class="example-component">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="handleClick">Click me</button>
    <p>Count: {{ count }} | Double: {{ doubleCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  
  emits: ['click'],
  
  data() {
    return {
      count: 0
    };
  },
  
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  
  methods: {
    handleClick() {
      this.count++;
      this.$emit('click', this.count);
    }
  }
};
</script>

<style scoped>

</style>
```

### Store Pinia de base

*src/stores/exampleStore.js:*

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
    },
    currentChapter: (state) => {
      return state.items[state.currentItem];
    },
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

## 🎨 Composants UI Réutilisables

### ButtonPrimary.vue

*src/components/ui/ButtonPrimary.vue:*

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

<script>
export default {
  name: 'ButtonPrimary',
  
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  
  emits: ['click'],
  
  methods: {
    handleClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click');
      }
    }
  }
};
</script>

<style scoped>


.btn-primary {
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
}

.btn-primary:hover{
   background: pink;
}


</style>
```

### Modal.vue

*src/components/ui/Modal.vue:*

```vue
<template>
<!-- <Teleport> est un composant natif qui nous permet de "téléporter"
   une partie du template d'un composant dans un nœud du DOM qui existe 
   en dehors de la hiérarchie du DOM de ce composant. Ici, la modale se 
   téléporte dans la balise <body>.
   Info à propos de <teleport> : https://fr.vuejs.org/guide/built-ins/teleport-->
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

<script>
export default {
  name: 'Modal',
  
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  
  emits: ['update:modelValue'],
  
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    }
  }
};
</script>

<style scoped lang="scss">
// Attention: code démo en format SCSS, veuillez l'adapter en CSS classique 
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

#### Exemple d'utilisation du Modal

```vue
<template>
  <div>
    <ButtonPrimary @click="openModal">
      Ouvrir le Modal
    </ButtonPrimary>
    
    <Modal v-model="isModalOpen" title="Mon Modal">
      <p>Contenu du modal ici</p>
      
      <template #footer>
        <button @click="isModalOpen = false">Annuler</button>
        <ButtonPrimary @click="handleSave">Sauvegarder</ButtonPrimary>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/ui/Modal.vue';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';

export default {
  name: 'ExamplePage',
  
  components: {
    Modal,
    ButtonPrimary
  },
  
  data() {
    return {
      isModalOpen: false
    };
  },
  
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    
    handleSave() {
      console.log('Sauvegarde...');
      this.isModalOpen = false;
    }
  }
};
</script>
```

## Exemple complet d'un composant intégrant Pinia Store

```vue
<template>
  <div class="items-list">
    <h1>Liste des items ({{ itemCount }})</h1>
    
    <div v-if="isLoading">Chargement...</div>
    
    <div v-else-if="hasItems">
      <div 
        v-for="item in items" 
        :key="item.id"
        class="item-card"
      >
        <h3>{{ item.name }}</h3>
        <button @click="selectItem(item.id)">Voir</button>
        <button @click="removeItem(item.id)">Supprimer</button>
      </div>
    </div>
    
    <div v-else>
      <p>Aucun item</p>
    </div>
    
    <ButtonPrimary @click="addNewItem">
      Ajouter un item
    </ButtonPrimary>
  </div>
</template>

<script>
import { useExampleStore } from '@/stores/exampleStore';
import { mapState, mapGetters, mapActions } from 'pinia';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';

export default {
  name: 'ItemsList',
  
  components: {
    ButtonPrimary
  },
  
  computed: {
    // Mapper le state
    ...mapState(useExampleStore, ['items', 'isLoading', 'currentItem']),
    
    // Mapper les getters
    ...mapGetters(useExampleStore, ['itemCount', 'hasItems'])
  },
  
  methods: {
    // Mapper les actions
    ...mapActions(useExampleStore, ['addItem', 'deleteItem', 'setCurrentItem']),
    
    addNewItem() {
      this.addItem({
        name: `Item ${this.itemCount + 1}`,
        description: 'Nouvel item'
      });
    },
    
    removeItem(id) {
      if (confirm('Supprimer cet item?')) {
        this.deleteItem(id);
      }
    },
    
    selectItem(id) {
      this.setCurrentItem(id);
      this.$router.push(`/item/${id}`);
    }
  }
};
</script>

<style scoped>
.items-list {
  padding: 2rem;
}

.item-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}
</style>
```