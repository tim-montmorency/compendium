---
tags:
  - TP
---

# La critique

<figure markdown>
![](./the-columnist.jpg){.w-100}
<figcaption markdown>🎬 [The Columnist (2019)](https://www.imdb.com/title/tt9695308/)</figcaption>
</figure>

L’objectif du TP1 est de développer une page Web en utilisant **Bootstrap 5**.

Vous devrez concevoir la page d’une critique (sur un sujet de votre choix) comme si elle faisait partie d’un site officiel de critiques. Donnez lui le nom que vous désirez 😜

> Exemples de sujets possibles : un livre, un film, un jeu vidéo, un produit, un événement, etc.

L’accent de l’évaluation portera sur l’usage adéquat de **Bootstrap**, l’organisation du projet, ainsi que sur l’esthétisme et l’attention aux détails. Le contenu de la critique (texte) n’est pas évalué.

## Exemple

Ceci n'est pas un résultat attendu. C'est simplement un exemple.

<div class="grid grid-1-2" markdown>
  ![](./lacritique.png)

  <small>Exemple du prof</small><br>
  **[Spires d'une critique cardinale](https://web3.tim-momo.com/la-critique/){.stretched-link}**
</div>

## Consignes techniques

- [ ] Bootstrap doit être installé via **npm**.
- [ ] Le projet doit être publié sur **GitHub** en mode public.
- [ ] Le dossier `node_modules` **ne doit pas être inclus** dans GitHub (ajoutez un `.gitignore`).
- [ ] Vous devez modifier au moins une couleur du thème Bootstrap et l'utiliser dans votre page.
- [ ] Vous devez utiliser une police différente de celle par défaut (ex. Google Fonts).
- [ ] Pour la remise sur Teams :
  - **Un fichier .zip** du projet (supprimez le `node_modules` avant de faire le zip).
  - **L’URL de votre dépôt GitHub public**.

## Structure du projet

```txt
📁 jfcartier-tp1
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
│
├── 📁 src/
│   ├── styles.css (ton CSS personnalisé)
│   └── scripts.js (ton JS personnalisé)
│
└── 📁 assets/
    └── (images, icônes, videos, fonts, etc.)
```

## Grille d’évaluation

- [ ] Librairies/Cadriciels installés via npm (1 point)
- [ ] `.gitignore` excluant `node_modules` (1 point)
- [ ] Projet publié sur GitHub en mode public (1 point)
- [ ] Structure de projet respectée (1 point)
- [ ] Usage de conteneur Bootstrap (1 point)
- [ ] Usage correct du système de grille Bootstrap (1 point)
- [ ] Usage pertinent breakpoint Bootstrap (1 point)
- [ ] Utilisation d’un modal ou d'un accordion Bootstrap (1 point)
- [ ] Utilisation de Bootstrap Icons (1 point)
- [ ] Présence d’une autre composante (card, navbar, etc.) (1 point)
- [ ] Surcharge d'une couleur Bootstrap et son utilisation (1 point)
- [ ] Utilisation d’une autre police (ex. Google Fonts) (1 point)
- [ ] Marges et espacements soignés (`m-`, `p-`) (1 point)
- [ ] Créativité et esthétisme (palette de couleur, police, équilibre et cohérence visuelle) (2 point)
- [ ] Qualité du code (indentation, sans erreur) (1 point)

_Le total sera converti sur 20%_

## Remise

- **Date limite : 5 octobre à 23h59**
- Sur Teams (devoir **TP1**) :
  - Remettez votre fichier `.zip` (sans `node_modules`) avec la nomenclature du département (ex.: cartier-jf_tp1.zip)
  - Ajoutez aussi l’URL de votre dépôt GitHub.

[STOP]

## Consignes

Votre page Web devra inclure les éléments suivants :

1. Une structure de page correspondant à un site de critiques (par exemple : une critique de livre, de film, ou autre, accompagnée d’une note ou évaluation visuelle).
1. Une critique du sujet choisi accompagné d'une note.
1. Un design responsive en utilisant Bootstrap.
1. Des composants Bootstrap, utilisés de manière pertinente pour organiser et styliser la page.
