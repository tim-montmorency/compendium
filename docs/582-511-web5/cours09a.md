# Cours 9.1

<!-- 27 octobre-->

<!-- 

SFC : Single File Component 
Architecture de composants Vue 
Création des composants de layout 
Communications entre composantes via les props et emits.
Les tableaux JavaScript
+
"Communications entre composantes via Pinia" ou sinon ça irait 3 nov mais le "SPA–Single Pages Applications et Système de routage (routing)"" serait repoussé au 5 nov.


Peut-être cet exercice?
https://tim-montmorency.com/timdoc/582-518MO/exercices/jeu-defense/ < il faut que je fasse la solution avec composante (les instructions le sont mais je ne trouve plus la solution avec composante donc je dois checker ça)


/*********************************************************** */
Contenu à développer et ajouter: références $emit *ref* entre une app et les composantes. 
/*********************************************************** */

https://fr.vuejs.org/guide/components/events.html 
La  <a href="https://www.w3schools.com/vue/vue_emit.php">méthode intégrée `$emit`  qui permet de faire le lien entre une app et ses composantes.


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
Vue Pinia 
/*********************************************************** */

C'est un endroit où vous stockez des données qui doivent être **partagées entre plusieurs composants** Vue.
[Pinia](./vue/pinia.md)
-->

## Projet portfolio (25%)

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio.html">Projet Portfolio - Infos générales</a>
</div>

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio-instructions-fecth-vue.html">Instructions spécifiques aux données <strong>json</strong> du fichier <strong>projects.json</strong> et celles pour la partie <strong>Vue</strong>.</a>
</div>

### Ajout

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio-presentation.html">Instructions pour la *présentation orale* du 29 octobre.</a>
</div>



## Projet app web créative

Normalement vous auriez une *rencontre SCRUM* aujourd'hui mais je préfère vous laisser focusser sur votre portfolio. Pour cette semaine, le SCRUM va donc être remis à mercredi après les présentations.


## Révision exercice Menu de sushis

[Exercice - Menu de sushis](https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis/){ .md-button}

➜ [Solution instructions de base💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EhtC7SIixSJBgmnqcpJHT9YBdJE-3Q31KJRaOIOgiWyySw?e=wPw9A3)

➜ [Solution instructions avec composante (partielle, sans le total)💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Es-siVfM7OtNjn7_Q3xCghsBcLierKi6KqNczpNX8nzb_Q?e=Y6ahig) 


## Vue composante les props (suite)

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/props.html">Composante: props (en savoir plus)</a>
</div>

### Exercice composantes et props

[Exercice - Bouton j'aime](./exercices/vue-btn-jaime/index.md){ .md-button} 

## Vue SFC (Single File Component)

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/sfc.html">Composante: Le SFC (Single File Component)</a>
</div>

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/emit.html">Composante: Émettre des événements vers le parent via `$emit`</a>
</div>




<!---->
Peut-être un ajout?
https://tim-montmorency.com/timdoc/582-518MO/exercices/jeu-defense/ < il faut que je fasse la solution avec composante
-->



## Exercice SFC

Mini catalogue de jeux retro



[Menu de sushis - Compléter la partie compostante et le calcul du total](https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis/){ .md-button}


<!-- ➜ [Solution instructions avec composante et le calcul du total💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Eqn9ipdhnKpKoqIkHDITICoBlltEz5UwU_XImShgklHAeg?e=P8Z7yH) -->

