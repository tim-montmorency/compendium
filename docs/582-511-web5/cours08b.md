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

- [ ] Rappel contrat d'équipe
- [ ] Hébergement Web, nom de domaine et gbergement sur GitHub Pages
- [ ] NPM exercice
- [ ] Révision composantes Vue.js
  - [ ] Quiz
  - [ ] Révision composante
  - [ ] Révision exercices
- [ ] Vue.js Un peu plus sur les props des composantes
- [ ] Vue.js Single File Component (SFC)
<!-- - [ ] Vue.js Communication entre app et composantes ($emit) -->

## Contrat d'équipe

Le contrat permet aux membres de chaque équipe de s’entendre sur un *but commun* et de rendre explicites les *règles* qu’elles et ils désirent voir respecter dans leur équipe.

[Contrat](./projets/appweb-creative/contrat-equipe.md)


## Hébergement Web

[Diapositives de cours sur l'hébergement web et les noms de domaines](https://cmontmorency365-my.sharepoint.com/:p:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EWhOSUd3EyFPglOlWHZH9qcBD9bupObOPce8JKrzvq8eGA?e=HjX0z2)

### Hébergement Web chez *HostPapa*

Pour paramétrer votre site sur Host Papa via le cPanel, vous pouvez consulter cette <a href="https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EZd7jM8DNIZHndllts3nA0cBtrrGG2NBLBOuO7svWXVjug?e=kT9gnu&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D" target="_blank" rel="noopener noreferrer">petite capsule vidéo</a>.

### Hébergement sur *GitHub Pages*

[Petite capsule vidéo sur l'hébergement GitHub Pages](https://cmontmorency365-my.sharepoint.com/:v:/r/personal/mariem_ouellet_cmontmorency_qc_ca/Documents/01_cours/Cours%20Optimisation%20-%20Web%203/02_contenu_de_cours/capsules/heberger-site-sur-github-pages.mov?csf=1&web=1&e=KOk8Hq&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

<small>Notez que cette capsule a été faite pour un autre groupe alors quand je parle de remise sur plusieurs branches, vous pouvez ignorer, du moins dans le cadre de votre projet portfolio</small>


## NPM (retour)

<div class="class-content-link">
  <img src="./assets/icon-npm.webp">
  <a href="https://tim-montmorency.com/timdoc/582-518MO/javascript/npm/">Node Pacakge Manager (NPM)</a>
</div>

### Exercice NPM Dragon Smaug

#### Partie 1 Exercice NPM Dragon Smaug

[Exercice partie 1](https://tim-montmorency.com/compendium/582-311-web3/exercices/dragon-smaug/)

#### Partie 2 Exercice NPM Dragon Smaug

- [ ] Créer un répertoire git nommé *Exercice NPM Dragon Smaug*
- [ ] Clonez le en local et déposez-y vos fichiers de travail de l'exercice.
- [ ] Créer un fichier [gitignore](https://tim-montmorency.com/timdoc/582-518MO/git/gitignore/). Ce fichier vous servira à ignorer quelque chsoe de tr`s important à ignorer lorsqu'on utiliser le Node Package Manager (voir les notes de cours NPM ci haut).
- [ ] Poussez tout vers GitHub et lorsque terminé, veuillez montrer le otut à votre enseignante.


## Composantes Vue.js

### Quiz time!

- [Groupe merc AM](https://app.wooclap.com/UKUUIJ)
- [Groupe merc PM](https://app.wooclap.com/)


### Composantes Vue (révision)

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/composante.html">La composante et ses props</a>
</div>


### Révision exercices composante

[Composantes cartes](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-composante-cartes/){ .md-button} 
➜ [Solution💡](https://codepen.io/tim-momo/pen/xxMJpYM)

[Menu de sushis](https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis/){ .md-button}
 ➜ [Solution instructions de base💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EhtC7SIixSJBgmnqcpJHT9YBdJE-3Q31KJRaOIOgiWyySw?e=wPw9A3)

➜ [Solution instructions avec composante (partielle, sans le total)💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Es-siVfM7OtNjn7_Q3xCghsBcLierKi6KqNczpNX8nzb_Q?e=Y6ahig) 


---

### Suite composantes Vue

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/props.html">Composante: props (en savoir plus)</a>
</div>

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/sfc.html">Composante: Le SFC (Single File Component)</a>
</div>
<!-- 
<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/emit.html">Composante: Émettre des événements vers le parent via `$emit`</a>
</div>
-->


<!--
Peut-être un ajout?
https://tim-montmorency.com/timdoc/582-518MO/exercices/jeu-defense/ < il faut que je fasse la solution avec composante
-->


## Devoirs

- Compléter ton portfolio d'ici le 29 octobre
  - [Instructions générales et critères d'évaluation](./projets/portfolio.md)
  - [Instructions fetch des données des projets et widget Vue.js](./projets/portfolio-instructions-fecth-vue.md)
  - Préparer la présentation orale (les instructions plus précises vous seront fournie lundi prochain)

- Phase 2 du projet App web créative
  - Création de l'app Vue de base et de l'environnement de développement via NPM et Vite (n'oubliez pas le .gitignore et ce qui est attendu d'être ignoré dans ce contexte).
  - Structure des composantes de base [Trace ton chemin](https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/cahier_charges_chemin.html#42-architecture-des-composants) [Mémoires interactives](https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/cahier_charges_memoires.html#42-architecture-des-composants)

