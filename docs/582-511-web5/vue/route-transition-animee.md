# Routes: Transition animées


## Le composant `<Transition>`

`<Transition>` est un composant intégré : cela signifie qu'il est disponible dans n'importe quel template de composant sans avoir à l'enregistrer. Il peut être utilisé pour appliquer des animations d'entrée et de sortie sur des éléments ou des composants qui lui sont transmis via son slot par défaut. L'entrée ou la sortie peut être déclenchée par l'une des actions suivantes :

Rendu conditionnel via `v-if`
Affichage conditionnel via `v-show`
Basculement des composants dynamiques via l'élément spécial `<component>`
Changer l'attribut spécial `key`

Voici un exemple de l'utilisation la plus basique :

```vue title="template"
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
```

```vue title="css"
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
```


## Ajouter des transitions avec CSS simple

![Noms de classe de transition](./assets/transition-classes.png)


*Exemple d'utilisation*

```vue
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
```


## Ajouter des transitions avec ~GSAP~

Avec Vue.js, vous pouvez vous connecter au processus de transition avec JavaScript en écoutant les événements sur le composant `<Transition>` :

```vue
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>

</Transition>
```

et réutiliser ces événements dans les methods de votre app:

```vue
methods: {
// appelée avant que l'élément ne soit inséré dans le DOM.
// utilisez ceci pour définir l'état "enter-from" de l'élément
onBeforeEnter(el) {},

// appelée une frame après l'insertion de l'élément.
// utilisez ceci pour démarrer l'animation d'entrée.
onEnter(el, done) {
    // appelle la fonction de rappel done pour indiquer la fin de la transition.
    // facultative si utilisée en combinaison avec CSS
    done()
},

// appelée lorsque la transition enter est terminée.
onAfterEnter(el) {},

// appelée lorsque la transition d'entrée est annulée avant d'être achevée.
onEnterCancelled(el) {},

// appelée avant le hook de sortie.
// la plupart du temps, vous devez simplement utiliser le hook de sortie.
onBeforeLeave(el) {},

// appelée lorsque la transition de sortie démarre.
// utilisez ceci pour démarrer l'animation de sortie.
onLeave(el, done) {
    // appelle la fonction de rappel done pour indiquer la fin de la transition
    // facultative si utilisée en combinaison avec CSS
    done()
},

// appelée lorsque la transition de sortie est terminée et que
// l'élément a été supprimé du DOM.
onAfterLeave(el) {},

// uniquement disponible avec les transitions v-show
onLeaveCancelled(el) {}
}

```

#### Voici un exemple de transition entre pages en utilisant le router et ~GSAP~:

*Dans App.vue:*

```vue
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/museum">Musée</router-link>
      </nav>
    </header>
    
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          name="fade"
          @enter="onEnter"
          @leave="onLeave"
        >
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  methods: {
    onEnter(el, done) {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: done
      });
    },
    
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: done
      });
    }
  }
}
</script>
```
