# **Exercice** Badge VIP Festif

## Démo
![](./assets/vue-badge-vip-demo.png)

## Objectif
Créer une première **application Vue.js** simple qui utilise l’**interpolation `{{ }}`** pour afficher des données définies dans `data()`.

## Contexte créatif
Vous réalisez le **badge VIP** d’un **festival imaginaire** (au choix : musique, cinéma, jeux vidéo, café, etc.).  
Le badge doit s’adapter automatiquement lorsque vous changez les données dans `data()`.

## Dossier de départ
[📥 Téléchargez le dossier de départ](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EUFFktXr13VMsRQBDskPRoMB13hx76B0s26Y4o7RYttheA?e=avM1lX){ .md-button target="_blank" }



## Étapes à suivre

- [ ] 1. **Inclure Vue dans le projet**
  - Installez Vue via CDN comme indiqué dans les notes « [Installer Vue avec CDN](../vue/index.html#installer-vue-avec-cdn) » collez la balise `<script>` de Vue avant votre `script.js`

- [ ] 2. **Créez l’app Vue**  
  - Dans `script.js`, utilisez `Vue.createApp` 
  - Ajoutez une fonction `data()` qui retourne un objet avec vos données.  
  - Choisissez une balise existante qui encadrera l'app Vue avec ses données dynamiques. Puis, montez l'app sur cette balise avec la méthode `mount`.

- [ ] 3. **Définissez vos données** dans `data()` :  
  - `festivalName`  
  - `tagline` (slogan)  
  - `firstName`, `lastName`  
  - `role` (ex. Artiste invité·e)  
  - `city`  
  - `date`  
  - `emoji`

- [ ] 4. **Construisez le badge** dans le HTML (à l’intérieur de la balise sur laquelle l'app a été montée à l'étape 1), en affichant toutes les données avec `{{ }}`.  
  - Exemple : `<h1>{{ festivalName }}</h1>`  
  - Utilisez au moins **une donnée à deux endroits** (ex. `festivalName` dans le titre et dans le bas de page).

- [ ] 5. **Stylisez la badge et son contenu**
    Stylisez afin que votre contenu ait l'air d'une badge tel que dans l'exemple présenté par l'enseignante.

- [ ] 6. **Testez la réactivité**  
  - Changez une valeur dans `data()` (ex. la ville ou le prénom).  
  - Vérifiez que la page se met à jour automatiquement, sans modifier le HTML.

- [ ] 7. **Attribut dynamique**

  - Ajoutez une image (logo ou affiche du festival): Téléchargez l'image (webp, png, jpg, svg) au niveau de votre dossier de travail de l'exercice.
  - En JavaScript, dans le data() de votre app Vue, ajoutez une donnée correspondant à cette image, elle doit contenir le chemin d'accès à ce fichier image.
  - Dans le HTML, affichez maintenant cette image en utilisant la **liaison d’attribut** (attribute binding) avec `v-bind:src` ou sa syntaxe courte `:src`.



## Résultat attendu

- Un badge affichant :  
  - Le nom du festival  
  - Un slogan  
  - Le nom complet d’une personne (prénom + nom)  
  - Son rôle  
  - La ville et la date  
  - Un emoji  
- Si une valeur est modifiée dans `data()`, tous les endroits où elle est affichée changent aussi.



## Contraintes

- ✅ Utiliser seulement ce qui est couvert dans le cours :  
  - création d’app Vue  
  - `data()`  
  - interpolation `{{ }}`  
  - `:` ou `:v-bind`
- ❌ Ne pas utiliser encore ce qu'on n'a pas couvert : `v-for`, `v-if`, `v-model`, événements ou méthodes.




## Notes de cours

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/index.html">Vue: Introduction</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/creation-app.html">Vue: Création d'une app</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/interpolation.html">Vue: Interpolation des données</a>
</div>
