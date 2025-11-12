
# 🛡️ Protection de routes (navigation guards)

## Cas d'usage

- ✅ Protéger des pages (authentification requise)
- ✅ Redirection automatique
- ✅ Confirmation avant de quitter une page
- ✅ Charger des données avant d'afficher la page

## 1. Guard globale (beforeEach)

*Exemple: Vérifier l'authentification:*

```javascript
// router/index.js
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard globale: s'exécute avant CHAQUE navigation
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  // Liste des routes qui nécessitent l'authentification
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth && !authStore.isAuthenticated) {
    // Rediriger vers la page de login
    next({ name: 'login' });
  } else {
    // Autoriser la navigation
    next();
  }
});

export default router;
```

*Configuration des routes avec meta:*

```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // Pas de meta: accessible sans auth
  },
  {
    path: '/museum',
    name: 'museum',
    component: MuseumView,
    meta: { requiresAuth: true }  // ← Nécessite l'authentification
  },
  {
    path: '/room/:id',
    name: 'room',
    component: RoomView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];
```

## 2. Guard par route (beforeEnter)

```javascript
const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      
      // Vérifier si l'utilisateur est admin
      if (authStore.user && authStore.user.role === 'admin') {
        next();
      } else {
        next({ name: 'home' });
      }
    }
  }
];
```

## 3. Guard dans le composant (beforeRouteLeave)

*Exemple: Confirmation avant de quitter une page avec formulaire non sauvegardé:*

*Fichier `src/views/MemoryFormView.vue`*

```vue

<template>
  <form @submit.prevent="save">
    <input v-model="title" @input="hasChanges = true" />
    <button type="submit">Enregistrer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      hasChanges: false
    }
  },
  
  methods: {
    save() {
      // Sauvegarder...
      this.hasChanges = false;
    }
  },
  
  // Guard de composant
  beforeRouteLeave(to, from, next) {
    if (this.hasChanges) {
      const answer = window.confirm(
        'Vous avez des modifications non sauvegardées. Quitter quand même?'
      );
      if (answer) {
        next();
      } else {
        next(false);  // Annuler la navigation
      }
    } else {
      next();
    }
  }
}
</script>
```
