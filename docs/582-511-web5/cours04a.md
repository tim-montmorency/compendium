# Cours 4.1

## Aujourd'hui



## Quiz time !

- [Groupe 1 merc AM](https://app.wooclap.com/YOZIXE)
- [Groupe 2 merc PM](https://app.wooclap.com/EZTJGO)


## Révision d'exercices

[Tableau NBA](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-tableau-nba/){ .md-button }
[Cheese Kanye Says](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-cheese-kanye-says/){ .md-button }

## Suite - Exercice classes dynamiques

[Collection de films: Classe dynamique](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-collection-films-1/){ .md-button }

## Vue

### Retour et ajout à propos des méthodes et événements

[Vue: Méthode et événement (v-for)](./vue/methodes-evenements.md)

##### Exercice

- [ ] Faire un **fork** du pen votre exercice NBA complété la semaine dernière *EXERC Vue.js: Tableau NBA* et renommez le *EXERC Vue.js: Tableau NBA - Méthode unique avec paramètres*.
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



### Condition v-if | Tableau + boucle v-for

[Vue: Condition v-if](./vue/condition.md)

[Vue: Listes et boucle v-for](./vue/boucle.md)


#### Exercice

Lien à venir

<!-- 
[Côte ouest VS côte est](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-ouest-vs-est/){ .md-button } 
-->


### Formulaires (v-model) et propriété calculé (computed)

[Vue: Éléments de formulaire (v-model)](./vue/elements-de-formulaire.md)
[Vue: Propriété calculée (computed)](./vue/propriete-calculee.md)

##### Exercice

Lien à venir
<!--[Luchador](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-luchador/){ .md-button } -->



[Événement avec arguments et instruction en ligne avec v-on](./vue/methodes-evenementshtml#gestion-devenement)