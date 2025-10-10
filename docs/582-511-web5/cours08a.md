# Cours 8.1
<!-- 20 octobre-->

<!--

Node.js et NPM : gestionnaire de paquets JavaScript

VITE : outil de développement front-end qui inclut serveur de développement et compilateur

IMPORTANT DE VOIR VITE CE COURS_CI car j'exige le setup du projet Vite pour le 22 octobre.







VUE

https://tim-montmorency.com/timdoc/582-518MO/javascript/vue-js/composantes/  (vu au cours 6.2 mais en faire une révision rapido)

 https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-composante-cartes/ (probablement déjà fait au cours 6.2, à confirmer...)

https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis/ < à mettre à jour au besoin pour faire le lien entre composante et app ($emit)


Peut-être un ajout?
https://tim-montmorency.com/timdoc/582-518MO/exercices/jeu-defense/ < il faut que je fasse la solution avec composante (les instructions le sont mais je ne trouve plus la solution avec composante donc je dois checker ça)

/*********************************************************** */
Contenu à développer et ajouter: références $emit *ref* entre une app et les composantes. 
/*********************************************************** */

https://fr.vuejs.org/guide/components/events.html 
La  <a href="https://www.w3schools.com/vue/vue_emit.php">méthode intégrée `$emit`  qui permet de faire le lien entre une app et ses composantes.


/*********************************************************** */
Vue SCF: 
/*********************************************************** */
https://tim-montmorency.com/timdoc/582-518MO/javascript/vue-js/sfc/ > Rrepousser SFC à quand on va voir Vite... Car anyway faut le compiler...




/*********************************************************** */
Ils doivent bien connaitre les GESTION DES TABLEAUX pour mieux travailler avec les données Vue.js
/*********************************************************** */
https://www.w3schools.com/js/js_arrays.asp

Exemple 
https://youtu.be/mDnahxy80KY?si=BNPfyTG_7Z9rxz5k&t=316

PUSH

const newTodo = ref('')
const todos = ref([])
const adTodo = () => {
  todo.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now()
  })
}


EXEMPLE
https://chatgpt.com/g/g-p-6864330428ec8191b7dc8c66ae4dff79-marie/c/68db25da-85ec-8326-8974-ff1c12e3830d

INCLUDES
const needle = q.value.toLowerCase();
arr = arr.filter(a => a.name.toLowerCase().includes(needle));

SORT
 const by = sortBy.value;
  arr = [...arr].sort((a, b) => {
    if (by === 'time') return toMinutes(a.start) - toMinutes(b.start);
    if (by === 'pop') return b.popularity - a.popularity;
    return a.name.localeCompare(b.name, 'fr');
  });


/*********************************************************** */
Portfolio fecth json
/*********************************************************** */
aussi pour fetch attendre que l'app soit mounted

const app = Vue.createApp({
  data() {
    return {
      =
    };
  },
  async mounted() {
    try{
      const res = await fetch('./data.json');
      if (!res.ok) throw new Error('HTTP '+res.status);
      this.raw = await res.json();
      this.state = 'loaded';
    }catch(e){
      console.error(e);
      this.state = 'error';
    }
  }
});
app.mount('#app');
-->


<!--
TUTEUR MOMO-BOT
<button class="btn-open-modal place-bottom-right" data-modal="momobot">🤖</button>

<div class="modal" id="modal-momobot">
  <div class="modal-content">
    <span class="close">&times;</span>
    <iframe src="https://tuteur-ai-web5.netlify.app" width="100%" style="width: 100%; height: 80vh;"></iframe>
  </div>
</div>
-->

## Projet application web créative

### Inspirations d'interface utilisateur (UI)

Allez vous inspirer, notemment sur [Awwwards](https://www.awwwards.com/)

[Liste de références et inpsirations web](./projets/appweb-creative/references-et-inpspirations.md){ .md-button }

Carousel circulaire 3d de cartes
- https://www.youtube.com/watch?v=yqaLSlPOUxM
- https://gsap.com/community/forums/topic/43001-3d-carousel-with-more-items/
- https://www.youtube.com/watch?v=lxGwReGtKqs



### SCRUM d'équipe

10 minutes pour votre SCRUM.

### Contrat d'équipe

Le contrat permet aux membres de chaque équipe de s’entendre sur un *but commun* et de rendre explicites les *règles* qu’elles et ils désirent voir respecter dans leur équipe.

[](./projets/appweb-creative/contrat-equipe.md)

## Git

- [Git - Introduction](https://tim-montmorency.com/timdoc/582-518MO/git/intro/)
- [GitHub](https://tim-montmorency.com/timdoc/582-518MO/git/github/)
- [GitHub Desktop](https://tim-montmorency.com/timdoc/582-518MO/git/github-desktop/)
- [Collaborer avec git](https://tim-montmorency.com/timdoc/582-518MO/git/collaboration/)
- [gitignore](https://tim-montmorency.com/timdoc/582-518MO/git/gitignore/)
- [Pull Request](https://tim-montmorency.com/timdoc/582-518MO/git/pull-request/)

## Node, NPM et Vites