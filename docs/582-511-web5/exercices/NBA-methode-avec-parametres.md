# Exercice NBA - Méthode unique avec paramètres

- [ ] Faire un **fork** du pen complété de votre [exercice NBA complété la semaine dernière](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-tableau-nba/). Le Pen était nommé: *EXERC Vue.js: Tableau NBA*, faites en un **fork** et renommez le *EXERC Vue.js: Tableau NBA - Méthode unique avec paramètres*.
- [ ] Modifiez votre code afin de n’avoir **qu'une seule méthode** pour gérer l’augmentation des scores (au lieu de deux, comme dans votre premier essai).
    Pour savoir à quelle équipe incrémenter le pointage, vous devrez transmettre un paramètre à la méthode.
    La valeur de ce paramètre sera le nom de la propriété du score correspondant à l’équipe, tel que défini dans vos données initiales.

!!! tip "Conseil pour l'exercice"
    Quand la méthode reçoit ce paramètre, vous devez accéder à la propriété de l’objet `this` dont le nom est contenu dans la variable (bref dans le paramètre reçu).
    Dans ce cas, vous ne pouvez pas utiliser la notation avec un point (`this.scoreRaptors`) puisque le nom de la propriété n’est pas écrit en dur : il est dynamique (il change selon le paramètre reçu).
    C’est pour cette raison qu’il faut utiliser la notation avec crochets (`this[nomDeTaPropriete]`).

    *À titre de appel*: il existe deux façons de cibler une propriété d’objet: [avec un point ou avec des crochets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors): 

    ```
    objet.propriete;
    objet["propriete"];
    ```


## Notes de cours

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/interpolation.html">Vue: Interpolation des données</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/methodes-evenements.html">Vue: Méthode et événement</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/methodes-evenements.html#methode-dynamisee-avec-des-parametres">Vue: Méthode dynamisée par des paramètres</a>
</div>