# Cours 8.2

<!-- 
22 octobre

Remise de la planification et design du projet intégrateur
-->

<!-- 

Révision Composante Vue

https://tim-montmorency.com/timdoc/582-518MO/javascript/vue-js/composantes/  (vu au cours 6.2 mais en faire une révision rapido)

Révision exerice https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-composante-cartes/ (déjà fait au cours 6.2, à confirmer...)

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


## Remise phase 1 du projet *App web créative*

Quelques instructions en début de cours (vous pouvez le faire dans les 10 premières minutes du cours)

- [ ] Le git doit aussi comprendre la *cahiers de charges complété*
- [ ] Le git doit aussi inclure un *README.md* (voir les instructions dans Devoir pour les détails du README.md)
- [ ] Veuillez pousser tout ça sur la branche git *main* d'abord
- [ ] Ensuite, créez une nouvelle branche git nommée *phase-1* (à lartir de la branche *main*)
- [ ] Poussez le tout sur le serveur distant GitHub.
- [ ] Ne touchez plus jamais à cette branche. Plus aucun **commit** ni **push** sur celle-ci. Puisque c'est l'état actuel de votre remise.
- [ ] Crééez une branche *dev* à partir de la branche *main*.
- [ ] Poussez le tout sur le serveur distant GitHub.
- [ ] À partir de maintenant, vous ne travaillez que sur la branche *dev*. 
- [ ] Assurez-vous que tout le monde de l'équipe a bien cloné localement le répertoire et positionne leur GitHub Desktop sur la branche *dev*, et ce dès aujourd'hui.

## Aujourd'hui

- [ ] Révision composantes Vue.js (contenu et des exercices)
- [ ] Vue.js Single File Component (SFC)
- [ ] Vue.js Communication entre app et composantes ($emit)


## Révision composantes Vue.js

### Quiz time!


### Composante Vue

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/composante.html">Vue: La composante et ses props</a>
</div>



### Exercice composante

[Composantes cartes](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-composante-cartes/){ .md-button} 
<!-- ➜ [Solution💡](https://codepen.io/tim-momo/pen/xxMJpYM) -->








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