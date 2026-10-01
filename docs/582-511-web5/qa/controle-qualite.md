# Le contrôle de la qualité (QA)

!!! abstract "L'essentiel en 3 points"
    1. On ne voit plus les défauts de son propre site : on sait où cliquer, on connaît le contenu, on utilise toujours le même navigateur. Le contrôle de la qualité (*QA*, *quality assurance*) sert à **voir son produit avec d'autres yeux**, de façon méthodique.
    2. Un test, c'est un **scénario**, un **résultat attendu** et un **résultat observé**. S'ils diffèrent, il y a un **écart**, qu'on classe selon sa **gravité**.
    3. Un correctif ne compte que s'il est **validé** : on refait le même scénario, et l'écart a disparu.

## Pourquoi tester, si mon site fonctionne?

Il fonctionne **chez vous** : sur votre écran, dans votre navigateur, avec votre souris, en sachant déjà où cliquer. Ce que vos tests ne voient pas :

- le visiteur qui arrive sans contexte et ne comprend pas ce que vous faites;
- le téléphone sur lequel le menu cache la moitié de la page;
- la personne qui navigue au clavier, ou qui voit mal les contrastes;
- l'image de 6 Mo qui charge en 10 secondes sur une connexion mobile;
- le fichier `Biome.jpg` qui s'affiche sous Windows mais pas en ligne (majuscule).

En entreprise, rien n'est mis en ligne sans passer par la QA. C'est la compétence **015Q, Contrôler la qualité** : une démarche, pas une impression.

## Le vocabulaire

| Terme | Définition | Exemple |
|---|---|---|
| **Scénario** | Une action précise, reproductible, que le testeur fait. | « Sans souris, ouvrir le détail d'un projet avec Tab et Entrée, puis le fermer. » |
| **Résultat attendu** | Ce qui devrait se passer si tout va bien. Écrit **avant** le test. | « Le focus est visible sur chaque élément; Échap ferme le détail. » |
| **Résultat observé** | Ce qui se passe réellement. Un fait, pas une opinion. | « Le focus disparaît sur les cartes; Échap ne fait rien. » |
| **Écart** | La différence entre attendu et observé. | Focus invisible + fermeture au clavier impossible. |
| **Gravité** | L'importance de l'écart, pour décider quoi corriger en premier. | Majeur. |
| **Correctif** | La modification apportée pour éliminer l'écart. | `:focus-visible` sur les cartes; `<dialog>` pour la modale. |
| **Validation** | Refaire le **même** scénario après le correctif, pour confirmer que l'écart a disparu. | Scénario refait en ligne : conforme. |

!!! tip "Un bon scénario est reproductible"
    Si deux testeurs suivent le même scénario, ils font exactement les mêmes gestes. « Tester le menu » n'est pas un scénario. « Sur téléphone, ouvrir le menu, cliquer sur Projets, puis vérifier que le menu se referme » en est un.

## La gravité : prioriser

On n'a jamais le temps de tout corriger. La gravité dit par où commencer.

| Gravité | Définition | Exemples |
|---|---|---|
| **Bloquant** | Empêche d'utiliser le site ou une fonction. | Les cartes de projets ne s'affichent pas en ligne. Le menu mobile ne s'ouvre pas. |
| **Majeur** | Le site s'utilise, mais l'expérience est clairement dégradée. | Contraste insuffisant. Focus invisible. Image de 5 Mo. Texte qui déborde sur mobile. |
| **Mineur** | Un détail. | Un alignement décalé de quelques pixels. Un espacement incohérent. |

Ordre de correction : **tous les bloquants, puis les majeurs, puis les mineurs** si le temps le permet.

## Le cycle complet

```text
Scénario → Test → Écart? → Gravité → Correctif (commit) → Validation (même scénario)
                    │
                    └── non : conforme ✔️
```

Le cycle n'est terminé qu'à la **validation**. Un correctif non validé, c'est une hypothèse : « je pense que c'est réglé ».

## Tester dans plusieurs environnements

Un **environnement**, c'est la combinaison d'un navigateur et d'un appareil. Les mêmes fichiers ne s'affichent pas toujours de la même façon :

| Environnement | Ce qu'il révèle souvent |
|---|---|
| Chrome ou Edge, ordinateur | Votre environnement de développement : peu de surprises. |
| Firefox | Les fonctions CSS récentes pas encore supportées (ex. animations au défilement). |
| Safari (Mac ou iPhone) | Des différences de rendu (formulaires, `position: sticky`, vidéos). |
| Téléphone réel | Le tactile, la vraie taille du texte, le menu mobile, la vraie vitesse de chargement. |

Le mode appareil de l'inspecteur **simule** la largeur d'un téléphone, mais pas son tactile ni sa vitesse. Rien ne remplace un vrai téléphone.

## Les outils

| Outil | Pour quoi | Où |
|---|---|---|
| **Console** (F12) | Les erreurs JavaScript et les ressources introuvables. | Inspecteur, onglet Console |
| **Réseau** (F12) | Les 404, le poids des fichiers, la simulation d'une connexion lente. | Inspecteur, onglet Réseau |
| **Mode appareil** | Simuler la largeur d'un téléphone ou d'une tablette. | Inspecteur, icône téléphone/tablette (Ctrl + Maj + M) |
| **WAVE** | Les erreurs d'accessibilité : `alt`, titres, contraste, formulaires. | [Extension WAVE](https://wave.webaim.org/extension/){ :target="_blank" } (Chrome, Firefox, Edge) |
| **Lighthouse** | Un rapport global : performance, accessibilité, bonnes pratiques. | Inspecteur Chrome, onglet Lighthouse |

!!! warning "Un score n'est pas une preuve"
    Lighthouse à 100 en accessibilité ne veut pas dire que votre site est accessible : l'outil ne peut pas savoir si votre `alt` décrit vraiment l'image, ni si on peut fermer votre modale au clavier. Les outils trouvent une partie des problèmes; les **scénarios faits par des humains** trouvent le reste.

## Dans votre portfolio

La démarche, les dates et le fichier Excel :

[:material-clipboard-check-multiple: Contrôle de la qualité du portfolio : consignes](../projets/portfolio/qa-portfolio.md){ .md-button .md-button--primary }
