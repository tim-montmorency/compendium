# Techniques de prompting pour du CSS maintenable

> Un bon prompt ne vient pas d'une connaissance de l'IA.
>
> Il vient d'une bonne compréhension du CSS.


## Le principe de base

La qualité du code généré est **directement proportionnelle à la précision de tes instructions**. L'IA ne peut pas deviner ton système de design, tes conventions de nommage, ou tes contraintes d'accessibilité : tu dois les lui fournir.

Plus tu maîtrises le CSS, plus tes prompts sont précis. Plus tes prompts sont précis, moins tu as à refactoriser. C'est pourquoi les Phase 1 (IA interdit) et 2 (IA permis mais limité) de ce cours existaient.


## Anatomie d'un bon prompt CSS

Un prompt efficace contient idéalement **5 éléments** :

> *[Composant]*+*[Structure attendue]*+*[Contraintes CSS]*+*[Conventions]*+*[Contexte]*

### Exemple complet :

> *Génère un composant HTML/CSS "carte de produit" contenant une image, un titre, une description courte et un bouton "Ajouter au panier".*
>
> *Contraintes CSS :*
> *- Utilise des variables pour les couleurs (--color-primary, --color-surface, --color-text, --color-text-muted) et les espacements  (--space-sm, --space-md, --space-lg)*
> *- Utilise container queries pour l'adaptation (pas de media queries)*
> *- Nomme les classes selon la méthodologie BEM*
> *- Inclus les états :hover et :focus-visible sur le bouton*
> *- Utilise rem pour la typographie, pas px* 
>
> *Contexte : ce composant sera utilisé dans une grille de 1 à 3 colonnes selon la largeur disponible.*


## Les niveaux de précision

### Niveau 1 : Prompt trop vague

```
Fais-moi une carte CSS.
```
→ Résultat générique, valeurs magiques, pas de variables, aucun état interactif.

---

### Niveau 2 : Prompt structuré (minimum acceptable)

```
Génère une carte HTML/CSS avec un titre, une description et un bouton. 
Utilise des variables et le nommage BEM.
```

→ Résultat correct mais incomplet. Probablement sans container queries ni états.

---

### Niveau 3 : Prompt avec contraintes (standard professionnel)

```
Génère un composant "carte d'article" en HTML/CSS avec :
- Image de couverture, titre (h3), extrait (p), lien "Lire la suite"
- Variables : --color-surface, --color-text, --color-accent, 
  --space-sm, --space-md, --radius-md
- Container queries (pas de media queries) pour passer d'une disposition 
  en colonne (< 400px) à une disposition en ligne (≥ 400px)
- Classes BEM : .article-card, .article-card__image, .article-card__body, etc.
- État :hover sur le lien, :focus-visible visible et contrasté
- Aucune valeur px pour la typographie (utilise rem)
```

→ Résultat directement utilisable avec peu de refactorisation.

---

### Niveau 4 : Prompt avec système de design existant (avancé)

```
En utilisant ces variables déjà définies dans mon système :
--color-primary: #2563eb
--color-surface: #ffffff
--color-text: #1e293b
--space-sm: 0.5rem
--space-md: 1rem
--space-lg: 1.5rem
--radius-md: 0.5rem

Génère un composant "carte de témoignage" avec [...]
```

→ Le code généré s'intègre directement dans le projet sans ajustement de variables.


## Techniques spécifiques

### Demander plusieurs variantes
```
Génère 3 variantes CSS du même composant en utilisant des approches 
différentes : une avec Flexbox, une avec Grid, une avec container queries. 
Explique brièvement les avantages de chaque approche.
```

Utile pour comparer et choisir la meilleure décision pour ton contexte.

---

### Demander une explication avec le code

```
[...prompt du composant...]
Pour chaque décision CSS non évidente, ajoute un commentaire qui explique 
POURQUOI tu as fait ce choix (pas ce que ça fait, mais pourquoi).
```

Force l'IA à produire une documentation partielle : que tu pourras valider ou corriger.

---

### Demander un audit, pas une génération

```
Voici mon CSS actuel pour un composant de carte :
[coller le code]

Identifie les code smells présents (valeurs magiques, spécificité excessive, 
redondance, etc.) et propose une version refactorisée. Explique chaque 
changement.
```

Utile pour la refactorisation de code existant.

---

### Demander de respecter une convention existante

```
Voici un exemple de composant déjà codé dans mon projet :
[coller un exemple de composant existant]

En respectant exactement la même structure BEM, les mêmes noms de custom 
properties et la même organisation du CSS, génère un composant "badge" 
avec les variantes : succès, avertissement, erreur.
```

L'IA peut apprendre ta convention à partir d'un exemple : c'est beaucoup plus fiable que de tout lui expliquer verbalement.


## Ce que l'IA ne peut pas faire à ta place

Même avec un prompt parfait, l'IA ne peut pas :

- **Connaître ton contexte projet** (sauf si tu le lui fournis)
- **Tester visuellement le résultat** dans ton navigateur
- **Décider ce qui est pertinent** pour ton utilisateur spécifique
- **Garantir l'accessibilité** : elle peut en écrire la syntaxe, pas en évaluer le sens
- **Justifier ses décisions** de façon fiable (elle peut inventer des justifications plausibles mais fausses)

> C'est pour ça que le workflow est **IA → audit → amélioration**, et pas juste **IA → livraison**.


## Exercice de comparaison en classe

Choisir un composant simple (ex. : un badge de statut). Générer :

1. Une version avec un prompt minimal (1 ligne)
2. Une version avec un prompt structuré (niveau 3)

Comparer les deux résultats avec la grille des 7 questions de détection des code smells (voir le document *Code Smells en CSS*).

Discussion : qu'est-ce que le prompt précis a économisé comme travail de refactorisation ?
