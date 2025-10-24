# Cours 9.1

<!-- 27 octobre-->

<!-- 


Peut-être un ajout?
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

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio-presentation.html">Instructions pour la présentation orale du 29 octobre.</a>
</div>



## SCRUM d'équipe

## Installation de VUE en CDN

### Installer Vue avec CDN

[Suivre ce lien](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn) pour récupérer la balise `<script>` à copier et à ajouter à votre page HTML. Collez-le dans le `<head>` *AVANT* le fichier *script.js* dans lequel vous allez créer votre instance Vue et coder par la suite.

Attention, il faut que ces script [soient chargés en différé](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn), c'est à dire après que tout le HTML soit chargé mais en ordre l'un après l'autre.

```
<script src="..." defer></script>
```

## Exercice SFC

Mini catalogue de jeux retro

## Composantes Vue (suite)

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/emit.html">Composante: Émettre des événements vers le parent via `$emit`</a>
</div>


[Menu de sushis - Compléter la partie compostante et le calcul du total](https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis/){ .md-button}
<!-- ➜ [Solution instructions avec composante et le calcul du total💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Eqn9ipdhnKpKoqIkHDITICoBlltEz5UwU_XImShgklHAeg?e=P8Z7yH) -->




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