# Cours 8.1
<!-- 20 octobre-->

<!--

Node.js et NPM : gestionnaire de paquets JavaScript

VITE : outil de développement front-end qui inclut serveur de développement et compilateur

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