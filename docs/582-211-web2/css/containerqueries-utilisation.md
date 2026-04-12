# Requêtes de conteneur (Container Queries)

Découvrez les *Container Queries* pour un design responsive + modulaire, + précis et + réutilisable que jamais.

Un complément CSS très récent et déjà indispensable aux *Media Queries* pour créer des composants vraiment adaptatifs, qui s'ajustent à leur contexte d'utilisation, pas seulement à la taille de l'écran.


<!-- https://laconsole.dev/formations/css/container-queries -->

## ✦ Syntaxe de base : deux étapes

1. **Définir le conteneur**
  avec un nom `container-name` et un type `container-type`
2. **Déclarer un container query** 
  `@container nom-du-container (min-width: 400px){ }`

## ✦ 1. Définir le conteneur

Pour déclarer un container query, il faut d'abord *définir un conteneur* !

Cela équivaut à dire à la balise parent quelle incarnera le *contexte de mesure*, qu'elle sera *conteneur du composant à adapter*.

Cela se fait via les propriétés `container-type` et `container-name` sur le parent du composant. 


```css title="Définir le conteneur sur le PARENT"
/* Étape 1 : Définir le conteneur */
.card-wrapper {
  container-type: inline-size;
  /* optionnel mais recommandé: nommer le conteneur */
  container-name: card;
}
```

!!! info 💡 Le type le plus courant: `inline-size`
     **`container-type: inline-size`**: le plus courant. On mesure seulement la largeur (l'axe inline). 
     Les autres type de conteneur sont:
     - `container-type: size` (largeur ET hauteur) 
     - `container-type: normal` (pas de mesure, mais le nom est disponible pour du style conditionnel).


## ✦ 2. Déclarer la container query

Écrire la *container query* : « si mon conteneur fait X de large (ou plus), alors... ».


```css title="Déclarer la requête"
/* Étape 2 : Déclarer la requête  */
@container card-wrapper (min-width: 400px) {
  .card {
    flex-direction: row;
    gap: 1.5rem;
  }
  .card__image {
    width: 30%;
    flex-shrink: 0;
  }
}
```


## Unités pour container queries

<!-- https://laconsole.dev/formations/css/container-queries -->

Tout comme les media queries ont leurs propres unités, les *container queries* introduisent des **unités relatives au conteneur** :


| Unité  | Description                                               | Exemple d’usage      |Équivalent Viewport|
|--------|-----------------------------------------------------------|----------------------|-------------------|
| `cqw`  | 1% de la largeur du conteneur                             | `width: 50cqw;`      | `vw`              |
| `cqh`  | 1% de la hauteur du conteneur                             | `height: 100cqh;`    | `vh`              |
| `cqmin`| La plus petite des deux dimensions (`cqw` ou `cqh`)       | `font-size: 5cqmin;` | `vmin`            |
| `cqmax`| La plus grande des deux dimensions (`cqw` ou `cqh`)       | `font-size: 5cqmax;` | `vmax`            |
| `cqi`  | 1% de la taille du conteneur sur l'axe inline (largeur)   | `font-size: 20cqi;`  | `vi`              |
| `cqb`  | 1% de la taille du conteneur sur l'axe block (hauteur)    | `font-size: 20cqb;`  | `vb`              |


```css
@container (min-width: 300px) {
  .card__title {
    /* cqi = container query inline (= largeur du conteneur) */
    font-size: clamp(1rem, 5cqi, 2rem);
  }
}
```

!!! tip Analogie
    `cqi` est aux container queries ce que `vw` est aux media queries, mais relatif au conteneur plutôt qu'à la fenêtre.
