
# Nomenclature CSS Cohérente

Donner du sens à vos noms de classes

## Pourquoi la nomenclature compte ?

### Mauvais noms

```
.c { ... }
.box { ... }
.thing { ... }
.header2 { ... }
```

** **

- Impossible de deviner ce que ça fait
- Conflits de noms (`.header` vs `.header2`)
- Aucune structure visible


### Bons noms

```
.product-card { ... }
.product-card__title { ... }
.product-card__button { ... }
.product-card--featured { ... }
```

**Avantages**

- On comprend immédiatement la hiérarchie
- Pas de conflits
- Facile à maintenir



## BEM—Block Element Modifier: La méthodologie la + populaire

- *B*lock
- *E*lement
- *M*odifier

**Structure**

```
.block { ... }           /* Le composant principal */
.block__element { ... }  /* Un élément à l'intérieur */
.block--modifier { ... } /* Une variation du bloc */
```

**Exemple concret**

```
/* BLOCK: 
Le composant, par exemple: card */
.card { ... }

/* ELEMENTS: 
Les parties du composant image, title... */
.card__image { ... }
.card__title { ... }

/* MODIFIERS : 
Des variations du composant card: featured, compact 
ou des variation d'un élément tel que button: primary, secondary */
.card--featured { ... }
.card--compact { ... }
.card__button--primary { ... }
.card__button--secondary { ... }
```




## BEM en HTML

### Carte standard

```
<article class="card">
  <img class="card__image" src="..." alt="...">
  <h3 class="card__title">Titre</h3>
  <p class="card__description">Description</p>
  <button class="card__button card__button--primary">Action</button>
</article>
```

### Carte en vedette (variation)

```
<article class="card card--featured">
  <img class="card__image" src="..." alt="...">
  <h3 class="card__title">Titre important</h3>
  <p class="card__description">Description spéciale</p>
  <button class="card__button card__button--primary">Action</button>
</article>
```


## Les règles d’or de BEM


1. Un bloc = un composant indépendant

    - Peut être déplacé n’importe où
    - Fonctionne seul

2. Les éléments appartiennent toujours à un bloc

    - `.card__title` existe seulement dans `.card`
    - Pas de `.card__title__subtitle` (max 1 niveau)

3. Les modifiers changent l’apparence

    - `--featured`, `--large`, `--disabled`
    - Toujours en complément du bloc/élément de base

4. Nommage en kebab-case

    - `product-card` (pas `productCard` ou `product_card`)



## Alternatives à BEM

> BEM n’est pas la seule approche

### SMACSS (Scalable and Modular Architecture for CSS)

```
/* Layout */
.l-header { ... }
.l-sidebar { ... }

/* Module */
.card { ... }

/* State */
.is-active { ... }
.is-hidden { ... }
```


### OOCSS (Object-Oriented CSS)

Séparer structure et skin :

```
/* Structure */
.box { padding: 1rem; }

/* Skin */
.box-primary { background: blue; }
.box-secondary { background: gray; }
```



### Utility-first (style Tailwind ou Bootstrap)

```
<div class="p-4 bg-white rounded shadow">
  <h2 class="text-xl font-bold mb-2">Titre</h2>
</div>
```


## Quelle méthode choisir ?

### Pour ce cours : BEM

Pourquoi ?

- ✅ Simple à apprendre
- ✅ Très répandu dans l’industrie
- ✅ Fonctionne bien avec les composants
- ✅ Pas besoin d’outils de build



### Mais dans votre carrière…

- Vous rencontrerez différentes approches
- L’important = cohérence et lisibilité
- Adaptez-vous aux conventions de l’équipe



## Documentation = partie intégrante du code

```
/**
 * Composant : Card de produit
 *
 * Utilisé sur : Page d'accueil, Page boutique
 * Variations : --featured (mise en vedette), --compact (version réduite)
 *
 * Structure :
 * - .product-card : Conteneur principal
 * - .product-card__image : Image du produit
 * - .product-card__title : Nom du produit
 * - .product-card__price : Prix affiché
 * - .product-card__button : Bouton d'action
 */
.product-card {
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

/* Variation : Carte en vedette avec fond coloré */
.product-card--featured {
  background: var(--color-accent-light);
  border-color: var(--color-accent);
}
```



> « L’IA peut générer du CSS. 
> Elle ne peut PAS documenter l’intention architecturale. 
> C’est votre job. »



## Checklist d’une bonne nomenclature

- ✅ Descriptive : on comprend ce que ça fait
- ✅ Cohérente : même pattern partout
- ✅ Scalable : facile d’ajouter des composants
- ✅ Prévisible : on devine le nom sans le voir
- ✅ Documentée : les choix sont expliqués
