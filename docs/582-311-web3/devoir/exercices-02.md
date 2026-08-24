---
tags:
  - Remise
---

[:material-arrow-u-left-top: Cours 12](../cours12.md){.breadcrumb}

# Exercices 02 - Remise du bloc 2 (cours 7 à 12)

Cette remise vaut **15 % de la note de session**. Comme pour le bloc 1, il n'y a rien de nouveau à produire&nbsp;: **si vous avez fait vos exercices en classe, le travail est déjà fait.**

Vous reprenez **le même dépôt** qu'au bloc 1 - `web3-exercices` - et vous y ajoutez une seconde section.

!!! tip "Des points faciles"

    Douze exercices, deux points chacun. Chaque exercice complété et fonctionnel vaut ses points.

## Ce qui change par rapport au bloc 1

Rien dans la mécanique. Trois choses dans le contenu&nbsp;:

* Les exercices des cours 7, 8 et 12 sont des **projets locaux** - ils vivent dans des dossiers du dépôt, pas sur CodePen.
* Les exercices GSAP des cours 9 à 11 sont des **CodePen** - donc **forkés, sauvegardés et publics**.
* L'exercice *Cure minceur* (cours 8) demande en plus un fichier `CREDITS.md` - le même réflexe que pour votre projet final.

!!! danger "Les CodePen doivent être forkés"

    Un pen qui n'a pas été forké **pendant que vous étiez connecté** n'a pas d'adresse&nbsp;: vous ne pourrez pas me le montrer. Si c'est votre cas, refaites l'exercice — vous le connaissez déjà, ça ira vite.

## Étape 1 - Ajouter la section au README

Ajoutez ce tableau **sous** celui du bloc 1, dans le `README.md` de `web3-exercices`.

```markdown
## Bloc 2 - cours 7 à 12

| #  | Exercice | Cours | Type | Lien / dossier | Auto |
|----|----------|:-----:|------|----------------|:----:|
| 7  | Jour et nuit | 7 | Dossier | `07-jour-et-nuit/` | ✅ |
| 8  | Poste restante | 7 | Dossier | `08-poste-restante/` | ✅ |
| 9  | Cure minceur | 8 | Dossier | `09-cure-minceur/` | 🟡 |
| 10 | Salle de projection | 8 | Dossier | `10-salle-projection/` | ❌ |
| 11 | Un, deux et trois | 9 | CodePen | https://codepen.io/… | ✅ |
| 12 | Automobile jaune | 9 | CodePen | https://codepen.io/… | ✅ |
| 13 | Animation en séquence | 9 | CodePen | https://codepen.io/… | 🟡 |
| 14 | Scène animée réactive | 10 | CodePen | https://codepen.io/… | 🟡 |
| 15 | Automobile turquoise | 11 | CodePen | https://codepen.io/… | ✅ |
| 16 | Labyrinthe | 11 | CodePen | https://codepen.io/… | ❌ |
| 17 | Bulletin de saison | 12 | Dossier | `17-bulletin/` | ✅ |
| 18 | Boîte à musique | 12 | Dossier | `18-boite-a-musique/` | ✅ |
```

La colonne **Auto** fonctionne comme au bloc 1 — ✅ réussi seul, 🟡 réussi avec de l'aide, ❌ pas réussi. Elle n'est **pas notée**&nbsp;: remplissez-la honnêtement, c'est votre propre tableau de bord avant le projet final.

- [ ] Une ligne par exercice, **dans l'ordre**
- [ ] Chaque lien doit être **cliquable et fonctionnel**
- [ ] Les dossiers de projet ne contiennent **pas** `node_modules`

## Étape 2 - Vérifier avant de remettre

- [ ] Ouvrez votre dépôt en **navigation privée**&nbsp;: tout doit être visible
- [ ] Cliquez sur **chacun** de vos liens CodePen&nbsp;: aucun ne doit tomber sur une page 404
- [ ] Pour chaque dossier de projet, vérifiez qu'un `npm install && npm run dev` suffirait à le faire fonctionner
- [ ] Pour *Cure minceur*, vérifiez que `CREDITS.md` est présent et rempli

!!! info "Les preuves de type capture"

    Si l'un de vos exercices s'est déroulé ailleurs (plateforme externe, manipulation ponctuelle), la règle du bloc 1 s'applique toujours&nbsp;: une capture d'écran datée dans `preuves/`, et le chemin du fichier dans le tableau.

## Barème

| # | Exercice | Cours | Points |
|:-:|---|:-:|:-:|
| 7 | **Jour et nuit** — thème Alpine persistant via `$persist` | 7 | 2 |
| 8 | **Poste restante** — `x-model`, `x-text`, `x-for` et liste dynamique | 7 | 2 |
| 9 | **Cure minceur** — médias optimisés, classés, nommés, `CREDITS.md` | 8 | 2 |
| 10 | **Salle de projection** — lecteur maison en classe JS + Howler | 8 | 2 |
| 11 | **Un, deux et trois** — trois effets de parallaxe | 9 | 2 |
| 12 | **Automobile jaune** — premier tween `gsap.to()` | 9 | 2 |
| 13 | **Animation en séquence** — timeline avec contrôles de lecture | 9 | 2 |
| 14 | **Scène animée réactive** — ScrollTrigger et `matchMedia()` | 10 | 2 |
| 15 | **Automobile turquoise** — boucles infinies, roues synchronisées | 11 | 2 |
| 16 | **Labyrinthe** — MotionPath le long d'un tracé SVG | 11 | 2 |
| 17 | **Bulletin de saison** — deux graphiques Chart.js | 12 | 2 |
| 18 | **Boîte à musique** — mélodie et effets sonores Tone.js | 12 | 2 |
| — | **Qualité générale** — indentation, nomenclature, arborescence, `.gitignore`, README complet | — | 2 |
| | | **Total** | **/26** |

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
