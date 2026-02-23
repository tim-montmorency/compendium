# Page de résultats de recherche (SERP)

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>

## Concept

Reproduire une interface de type résultats de recherche (pensez Airbnb, Spotify, ou une boutique en ligne simple) avec une liste de résultats qui gère l'espace de façon fluide. 

Le défi central est que les éléments doivent se comporter différemment selon l'espace disponible — ce qui rend `flex-grow` / `flex-shrink` / `flex-basis` incontournables.


## Fichier de départ

<span class="important-label">IMPORTANT</span> : Connectez-vous à CodePen d'abord et ensuitefaites un *FORK* du Pen de départ pour l'enregistrer dans votre compte, archiver l'exercice et pouvoir avoir un lien unique vers votre exercice complété pour la remise.

[Pen de départ | FAIRE UN FORK](https://codepen.io/tim-momo/pen/){ .md-button }

## Structure des composants à reproduire

```
┌─────────────────────────────────────────┐
│  BARRE DE RECHERCHE (row)               │
│  [Input: flex-grow:1] [Btn: fixe]       │
└─────────────────────────────────────────┘

┌──────────────┬──────────────────────────┐
│  FILTRES     │  RÉSULTATS               │
│  (fixe,      │  (wrap, gap)             │
│  shrink: 0)  │                          │
│              │  ┌──────┐ ┌──────┐       │
│  [Filtre]    │  │Carte │ │Carte │       │
│  [Filtre]    │  │      │ │      │       │
│  [Filtre]    │  └──────┘ └──────┘       │
│  [Filtre]    │  ┌──────┐ ┌──────┐       │
│              │  │Carte │ │Carte │       │
│              │  └──────┘ └──────┘       │
└──────────────┴──────────────────────────┘

Carte résultat (row) :
┌────────────────────────────────┐
│ [Image fixe] │ [Infos: grow:1] │
│              │ Titre           │
│              │ Description     │
│              │ [Tags][Prix]    │
└────────────────────────────────┘
```


