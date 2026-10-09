---
tags:
  - Remise
---

[:material-arrow-u-left-top: Cours 12](../cours12.md){.breadcrumb}

# Exercices 02 - Remise du bloc 2 (cours 7 à 12)

Cette remise vaut **15 % de la note de session**. Comme pour le bloc 1, il n'y a rien de nouveau à produire&nbsp;: **si vous avez fait vos exercices en classe, le travail est déjà fait.**

Vous reprenez **le même dépôt** qu'au bloc 1 - `web3-exercices` - et vous y ajoutez une seconde section.

!!! tip "Des points faciles"

    Onze exercices, deux points chacun. Chaque exercice complété et fonctionnel vaut ses points.

## Ce qui change par rapport au bloc 1

Rien dans la mécanique. Trois choses dans le contenu&nbsp;:

* Les exercices des cours 7, 11 et 12 sont des **projets locaux** - ils vivent dans des dossiers du dépôt, pas sur CodePen.
* Les exercices GSAP des cours 8 à 10 sont des **CodePen** - donc **forkés, sauvegardés et publics**.
* L'exercice *Momo* (cours 7) se fait dans un devoir Classroom 50&nbsp;: on y indique simplement l'adresse de son répertoire.

!!! danger "Les CodePen doivent être forkés"

    Un pen qui n'a pas été forké **pendant que vous étiez connecté** n'a pas d'adresse&nbsp;: vous ne pourrez pas me le montrer. Si c'est votre cas, refaites l'exercice — vous le connaissez déjà, ça ira vite.

## Étape 1 - Ajouter la section au README

Ajoutez ce tableau **sous** celui du bloc 1, dans le `README.md` de `web3-exercices`.

```markdown
## Bloc 2 - cours 7 à 12

| #  | Exercice | Cours | Type | Lien / dossier | Auto |
|----|----------|:-----:|------|----------------|:----:|
| 7  | Momo | 7 | Classroom | https://github.com/… | 🟡 |
| 8  | Un, deux et trois | 8 | CodePen | https://codepen.io/… | ✅ |
| 9  | Automobile jaune | 8 | CodePen | https://codepen.io/… | ✅ |
| 10 | Animation en séquence | 8 | CodePen | https://codepen.io/… | 🟡 |
| 11 | Scène animée réactive | 9 | CodePen | https://codepen.io/… | 🟡 |
| 12 | Automobile turquoise | 10 | CodePen | https://codepen.io/… | ✅ |
| 13 | Labyrinthe | 10 | CodePen | https://codepen.io/… | ❌ |
| 14 | Salle de projection | 11 | Dossier | `14-salle-projection/` | ✅ |
| 15 | Boîte à musique | 11 | Dossier | `15-boite-a-musique/` | ✅ |
| 16 | Jour et nuit | 12 | Dossier | `16-jour-et-nuit/` | ✅ |
| 17 | Poste restante | 12 | Dossier | `17-poste-restante/` | ✅ |
```

La colonne **Auto** fonctionne comme au bloc 1 — ✅ réussi seul, 🟡 réussi avec de l'aide, ❌ pas réussi. Elle n'est **pas notée**&nbsp;: remplissez-la honnêtement, c'est votre propre tableau de bord avant le projet final.

- [ ] Une ligne par exercice, **dans l'ordre**
- [ ] Chaque lien doit être **cliquable et fonctionnel**
- [ ] Les dossiers de projet ne contiennent **pas** `node_modules`

## Étape 2 - Vérifier avant de remettre

- [ ] Ouvrez votre dépôt en **navigation privée**&nbsp;: tout doit être visible
- [ ] Cliquez sur **chacun** de vos liens CodePen&nbsp;: aucun ne doit tomber sur une page 404
- [ ] Pour chaque dossier de projet, vérifiez qu'un `npm install && npm run dev` suffirait à le faire fonctionner
- [ ] Pour *Momo*, vérifiez que les médias d'origine ont été supprimés et que `npm run build` fonctionne

!!! info "Les preuves de type capture"

    Si l'un de vos exercices s'est déroulé ailleurs (plateforme externe, manipulation ponctuelle), la règle du bloc 1 s'applique toujours&nbsp;: une capture d'écran datée dans `preuves/`, et le chemin du fichier dans le tableau.

## Barème

| # | Exercice | Cours | Points |
|:-:|---|:-:|:-:|
| 7 | **Momo** — projet Vite + Tailwind, vidéo et logo optimisés, Typed.js | 7 | 2 |
| 8 | **Un, deux et trois** — trois effets de parallaxe | 8 | 2 |
| 9 | **Automobile jaune** — premier tween `gsap.to()` | 8 | 2 |
| 10 | **Animation en séquence** — timeline avec contrôles de lecture | 8 | 2 |
| 11 | **Scène animée réactive** — ScrollTrigger et `matchMedia()` | 9 | 2 |
| 12 | **Automobile turquoise** — boucles infinies, roues synchronisées | 10 | 2 |
| 13 | **Labyrinthe** — MotionPath le long d'un tracé SVG | 10 | 2 |
| 14 | **Salle de projection** — lecteur maison en classe JS + Howler | 11 | 2 |
| 15 | **Boîte à musique** — mélodie et effets sonores Tone.js | 11 | 2 |
| 16 | **Jour et nuit** — thème Alpine persistant via `$persist` | 12 | 2 |
| 17 | **Poste restante** — `x-model`, `x-text`, `x-for` et liste dynamique | 12 | 2 |
| — | **Qualité générale** — indentation, nomenclature, arborescence, `.gitignore`, README complet | — | 2 |
| | | **Total** | **/24** |

Pour chaque exercice&nbsp;:

| Points | Signification |
|:-:|---|
| **2** | Complet et fonctionnel |
| **1** | Partiel, ou présent mais non fonctionnel |
| **0** | Absent, lien mort, ou dépôt privé |

## Livrable

Dans le devoir **Exercices 02** sur Teams, déposez **une seule chose**&nbsp;:

- [ ] L'**adresse de votre dépôt GitHub** — le même qu'au bloc 1

!!! success "Aucun fichier à téléverser"

    Pas de `.zip`. Juste le lien.

**Date de remise&nbsp;: la veille du cours 13, à 23 h 59.**

Les retards sont pénalisés selon la PIÉA (art. 7.4.2).

!!! note "Et après"

    Le cours 13 est un **atelier de projet**. Vous arrivez donc avec vos exercices remis et l'esprit libre pour attaquer le site promotionnel 🚀.
