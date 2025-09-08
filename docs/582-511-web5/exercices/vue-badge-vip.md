# Exercice Vue.js: Badge VIP Festif

## Objectif
Créer une première **application Vue.js** simple qui utilise l’**interpolation `{{ }}`** pour afficher des données définies dans `data()`.

## Contexte créatif
Vous réalisez le **badge VIP** d’un **festival imaginaire** (au choix : musique, cinéma, jeux vidéo, café, etc.).  
Le badge doit s’adapter automatiquement lorsque vous changez les données dans `data()`.

---

## Étapes à suivre

1. **Inclure Vue dans le projet**
   - Installez Vue via CDN comme indiqué dans les notes « [Installer Vue avec CDN](../vue/index.html#installer-vue-avec-cdn) » collez la balise `<script>` de Vue avant votre `script.js`

1. **Créez l’app Vue**  
   - Dans `script.js`, utilisez `Vue.createApp` 
   - Ajoutez une fonction `data()` qui retourne un objet avec vos données.  
   - Montez l’app sur une balise qui encadre l'app avec la méthode `mount`.

2. **Définissez vos données** dans `data()` :  
   - `festivalName`  
   - `tagline` (slogan)  
   - `firstName`, `lastName`  
   - `role` (ex. Artiste invité·e)  
   - `city`  
   - `date`  
   - `emoji`

3. **Construisez le badge** dans le HTML (à l’intérieur de `<div id="app">`), en affichant toutes les données avec `{{ }}`.  
   - Exemple : `<h1>{{ festivalName }}</h1>`  
   - Utilisez au moins **une donnée à deux endroits** (ex. `festivalName` dans le titre et dans le bas de page).

4. **Testez la réactivité**  
   - Changez une valeur dans `data()` (ex. la ville ou le prénom).  
   - Vérifiez que la page se met à jour automatiquement, sans modifier le HTML.

---

## Résultat attendu

- Un badge affichant :  
  - Le nom du festival  
  - Un slogan  
  - Le nom complet d’une personne (prénom + nom)  
  - Son rôle  
  - La ville et la date  
  - Un emoji  
- Si une valeur est modifiée dans `data()`, tous les endroits où elle est affichée changent aussi.

---

## Contraintes

- ✅ Utiliser seulement ce qui est couvert dans le cours :  
  - création d’app Vue  
  - `data()`  
  - interpolation `{{ }}`  
  - `:` ou `:v-bind`
- ❌ Ne pas utiliser encore ce qu'on n'a pas couvert : `v-for`, `v-if`, `v-model`, événements ou méthodes.

---

## Bonus

Ajoutez une image (logo ou affiche du festival) en utilisant la **liaison d’attribut** avec `:src`.  

Exemple :

```html
<img :src="posterUrl" :alt="festivalName">


---

## Notes de cours 📚

- [Vue: Introduction](./vue/index.html)

- [Vue: Création d'une app](./vue/creation-app.html)

- [Vue: Interpolation des données](./vue/interpolation.html)