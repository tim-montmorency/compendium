# Cours 8.2

<!-- 
22 octobre

Remise de la planification et design du projet intégrateur
-->

<!-- 

Composante Vue

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
https://tim-montmorency.com/timdoc/582-518MO/javascript/vue-js/sfc/ > Repousser SFC à quand on va voir Vite... Car anyway faut le compiler...




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
Portfolio fetch json
/*********************************************************** */
aussi pour fetch attendre que l'app soit 

const appli = Vue.createApp({

    data() {
        return {
            message: "Chargement..."
        };
    },
    mounted() {
        console.log("L'app Vue a été créée et montée au DOM (mounted) !");

        this.message = "Vue a été chargé et montée au DOM (mounted) !";

        // C'est ici qu'on récupère (fetch) les données, qu'on manipule le DOM ou qu'on itinitialise des librairies
    },
    methods: {
        // ...
    }
});

const vm = appli.mount('.appli-vue');







/*********************************************************** */
Vue Pinia 
/*********************************************************** */

C'est un endroit où vous stockez des données qui doivent être **partagées entre plusieurs composants** Vue.
[Pinia](./vue/pinia.md)
-->




- [ ] Révision composantes Vue.js (contenu et des exercices)
- [ ] Vue.js Single File Component (SFC)
- [ ] Vue.js Communication entre app et composantes ($emit)


## Révision composantes Vue.js







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