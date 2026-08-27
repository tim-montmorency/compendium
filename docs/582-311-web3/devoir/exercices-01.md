---
tags:
  - Remise
---

[:material-arrow-u-left-top: Cours 5](../cours05.md){.breadcrumb}

# Exercices 01 - Remise du bloc 1 (cours 1 à 5)

Cette remise vaut **10 % de la note de session**. Il n'y a rien de nouveau à produire&nbsp;: **si vous avez fait vos exercices en classe, le travail est déjà fait.** Il ne reste qu'à les rassembler au même endroit et à me donner un lien.

!!! tip "Des points faciles"

    Chaque exercice complété et fonctionnel vaut ses points. La seule vraie façon de perdre des points ici, c'est de ne pas avoir fait les exercices — ou de ne pas être capable de me les montrer.

## Le principe

Vos exercices n'ont pas tous la même forme&nbsp;: certains vivent sur **CodePen**, d'autres sont des **projets locaux**, d'autres encore sont des manipulations dans le **terminal**. On ne les remet donc pas un par un.

Vous créez **un seul dépôt GitHub** pour toute la session, et son `README.md` sert d'**index**&nbsp;: un tableau qui pointe vers chaque exercice. C'est ce seul lien que vous me remettez.

## Étape 1 - Créer le dépôt

- [ ] Créez un dépôt **public** nommé `web3-exercices`
- [ ] Clonez-le sur votre poste (ou sur votre disque portatif)
- [ ] Ajoutez un fichier `.gitignore` qui ignore `node_modules` et `.DS_Store`
- [ ] Créez un dossier `preuves/` à la racine

!!! warning "Public, vraiment"

    Un dépôt privé que je ne peux pas ouvrir équivaut à un travail non remis. Vérifiez en ouvrant l'adresse de votre dépôt dans une fenêtre de navigation privée.

## Étape 2 - Rassembler les preuves

Trois types d'exercices, trois façons de les remettre.

| Type d'exercice | Ce que vous remettez | Comment |
| --- | --- | --- |
| **CodePen** | Le lien de **votre fork** | Adresse en `.../live/...`, pen sauvegardé et public |
| **Projet local** | Le **dossier** dans le dépôt | Un dossier numéroté par exercice, sans `node_modules` |
| **Manipulation ou plateforme tierce** | Une **capture d'écran** | Fichier `.png` dans `preuves/` |

!!! danger "Les CodePen doivent être forkés"

    Un pen qui n'a pas été forké **pendant que vous étiez connecté** n'existe nulle part&nbsp;: il n'a pas d'adresse, et vous ne pourrez pas me le montrer. Si c'est votre cas pour un exercice, refaites-le — ça prend cinq minutes maintenant que vous savez comment.

## Étape 3 - Remplir le README

Copiez ce gabarit dans le `README.md` à la racine de votre dépôt et remplacez chaque `…` par votre lien ou votre dossier.

```markdown
# Web 3 - Exercices | Prénom Nom

Dépôt d'exercices du cours 582-311-MO, session A2026.

## Bloc 1 - cours 1 à 5

| # | Exercice | Cours | Type | Lien / dossier | Auto |
|---|----------|:-----:|------|----------------|:----:|
| 1 | Grid pas à pas | 1 | CodePen | https://codepen.io/… | ✅ |
| 2 | Spirale | 1 | CodePen | https://codepen.io/… | ✅ |
| 3 | Mandala | 1 | Capture | `preuves/mandala.png` | ✅ |
| 4 | Gratuit | 2 | CodePen | https://codepen.io/… | 🟡 |
| 5 | Digger → Vite | 3 | Dossier | `04-digger-vite/` | ✅ |
| 6 | Digger avancé | 4 | Dossier | `05-digger-avance/` | 🟡 |
| 7 | Digger en ligne | 5 | Site en ligne | https://….github.io/… | ❌ |
```

La colonne **Auto** est votre auto-évaluation, remplie au moment du retour sur les exercices en début de séance&nbsp;:

| Marqueur | Signification |
| :--: | --- |
| ✅ | Réussi seul |
| 🟡 | Réussi avec de l'aide |
| ❌ | Pas réussi, à reprendre |

!!! success "Elle n'est pas notée"

    Soyez honnêtes&nbsp;: cette colonne ne vaut aucun point et n'entre dans aucun calcul. Elle est là pour que **vous** voyiez venir vos points faibles avant l'examen, et pour que je sache quelle notion mérite un second passage en classe.

- [ ] Une ligne par exercice, **dans l'ordre**
- [ ] Chaque lien doit être **cliquable et fonctionnel**
- [ ] Pour *Mandala*, la capture doit montrer votre terminal avec les commandes visibles

!!! info "Commit à chaque cours"

    Prenez l'habitude de **commiter à la fin de chaque laboratoire**. Votre historique de commits me montre que le travail a été fait au fil de la session — et vous évite de tout perdre la veille de la remise.

## Barème

| # | Exercice | Cours | Points |
|:-:|---|:-:|:-:|
| 1 | **Grid pas à pas** — les huit étapes présentes dans le pen, commentées | 1 | 2 |
| 2 | **Spirale** — grille CSS complète, en zones nommées **et** en lignes | 1 | 2 |
| 3 | **Mandala** — arborescence créée et détruite en ligne de commande | 1 | 2 |
| 4 | **Gratuit** — maquette reproduite en classes utilitaires Tailwind | 2 | 2 |
| 5 | **Digger → Vite** — migration npm + Vite, Tailwind installé, composantes DaisyUI | 3 | 2 |
| 6 | **Digger avancé** — hero, drawer responsive, tabs, carousel, thème maison | 4 | 2 |
| 7 | **Digger en ligne** — build publié et validé au W3C | 5 | 2 |
| — | **Qualité générale** — indentation, nomenclature, arborescence, `.gitignore`, README complet | — | 2 |
| | | **Total** | **/16** |

Pour chaque exercice&nbsp;:

| Points | Signification |
|:-:|---|
| **2** | Complet et fonctionnel |
| **1** | Partiel, ou présent mais non fonctionnel |
| **0** | Absent, lien mort, ou dépôt privé |

## Livrable

Dans le devoir **Exercices 01** sur Teams, déposez **une seule chose**&nbsp;:

- [ ] L'**adresse de votre dépôt GitHub** (ex.&nbsp;: `https://github.com/votrenom/web3-exercices`)

!!! success "Aucun fichier à téléverser"

    Pas de `.zip`, pas de `node_modules`, pas de dossier compressé de 400 Mo. Juste le lien.

**Date de remise&nbsp;: la veille du cours 6, à 23 h 59.**

Les retards sont pénalisés selon la PIÉA (art. 7.4.2).
