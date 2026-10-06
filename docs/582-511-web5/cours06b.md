# Cours 6.2
<!-- ven. 2 oct. -->


[:material-clipboard-check-multiple: Consignes QA du portfolio](projets/portfolio/qa-portfolio.md){ .md-button .md-button--primary }

## Aujourd'hui

- [ ] Remise bêta : tout est en ligne?
- [ ] Le contrôle de la qualité : les notions
- [ ] L'accessibilité : tester les 4 points de la grille
- [ ] Votre fichier QA et vos trios
- [ ] Auto-test
- [ ] Tests croisés dans les trios
- [ ] Bilan : prioriser vos écarts
- [ ] Devoir : terminer les tests, passer sur `main`, corriger

## Rappel et mise à jour

### Projet portfolio

!!! danger "Remise finale : gr. Lora jeu. 8 oct. · gr. Enric jeu. 15 oct."
    Il reste **un cours** (mer. 7 oct.) avant la remise du gr. Lora. Les tests se font **aujourd'hui** : c'est ce qui vous laisse le temps de corriger.

| Étape | Gr. Lora | Gr. Enric |
|---|---|---|
| Vos 3 tests terminés, sur `beta` | **lun. 5 oct. à 23h59** | **lun. 5 oct. à 23h59** |
| Pages sur `main`, correctifs validés | avant le 8 oct. | avant le 15 oct. |
| Autoévaluation (à la maison, en devoir) | avant le 8 oct. | avant le 15 oct. |

### Tutorat

=== "Tutorat supplém. pour Web 5"

    | 📅 Date | 👤 Tuteur | ⏱️ Durée | 📍 Où | 🎯 Avant |
    |---|---|---|---|---|
    | Lun. 5 oct., 19h10 à 20h | Olivier | 50min | En ligne Teams, équipe *Web5* : [canal « Tutorat Web5 »](https://teams.microsoft.com/l/channel/19%3A9d3216c048864138a5c339b1fab4744f%40thread.tacv2/Tutorat%20d%C3%A9di%C3%A9%20Web5?groupId=f3a480ff-8bfb-44d3-9785-1b4c7f366701&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) | Remise finale gr. Lora (8 oct.) |
    | Mar. 6 oct., 19h10 à 20h | Alexis | 50min | En ligne Teams, équipe *Web5* : [canal « Tutorat Web5 »](https://teams.microsoft.com/l/channel/19%3A9d3216c048864138a5c339b1fab4744f%40thread.tacv2/Tutorat%20d%C3%A9di%C3%A9%20Web5?groupId=f3a480ff-8bfb-44d3-9785-1b4c7f366701&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) | Remise finale gr. Lora (8 oct.) |
    | Mar. 13 oct., 19h10 à 20h | Alexis | 50min | En ligne Teams, équipe *Web5* : [canal « Tutorat Web5 »](https://teams.microsoft.com/l/channel/19%3A9d3216c048864138a5c339b1fab4744f%40thread.tacv2/Tutorat%20d%C3%A9di%C3%A9%20Web5?groupId=f3a480ff-8bfb-44d3-9785-1b4c7f366701&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) | Remise finale gr. Enric (15 oct.) |

    👥 **Toutes les périodes sont ouvertes aux deux groupes.** Apportez votre fichier QA : on peut vous aider à corriger un écart précis.

=== "Tutorat hebdomadaire récurrent"

    | 📅 Date | 👤 Tuteur | ⏱️ Durée | 📍 Où |
    |---|---|---|---|
    | Chaque mardi, 12h30 à 14h10 (8 sept. au 8 déc.) | Alexis Guilbault | 1h40 | 🏫 En personne au Centre d'aide C-1602 |
    | Chaque mercredi, 20h à 21h15 (9 sept. au 9 déc.) | Olivier Laliberté | 1h15 | 💻 En ligne sur Teams : [canal Tutorat de l'équipe TIM-Programme TIM](https://teams.microsoft.com/l/channel/19%3A68fb96c731e7460ba846ff328a9fe109%40thread.tacv2/Tutorat?groupId=924057af-2255-4c2a-8ce7-f0a1809ad4a4&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) |

## Remise bêta : tout est en ligne?

Avant de tester, on vérifie que chaque bêta est testable :

- [ ] La branche `beta` existe sur GitHub.
- [ ] Le dépôt est public.
- [ ] **Settings → Pages** publie `beta`, et l'adresse affiche votre portfolio.

Un problème? On le règle maintenant : sans bêta en ligne, vos camarades ne peuvent pas vous tester.

[:material-github: Remettre la bêta et la mettre en ligne](projets/portfolio/deploiement-github-pages.md){ .md-button }

## Le contrôle de la qualité

[:material-presentation: Présentation : QA et accessibilité (PowerPoint)](assets/documents/Web5_qa-accessibilite.pptx){ .md-button }

Scénario, résultat attendu, résultat observé, écart, gravité, correctif, validation : le vocabulaire de votre grille, et la démarche qu'on applique aujourd'hui.

[:material-magnify-scan: Le contrôle de la qualité : les notions](qa/controle-qualite.md){ .md-button .md-button--primary }

## L'accessibilité

Les 4 points de la grille (sémantique, `alt`, contraste, clavier), et comment tester chacun en quelques minutes. Démo au projecteur sur une bêta volontaire.

Aucune installation : on utilise [WAVE en ligne](https://wave.webaim.org/){ :target="_blank" }, en collant l'adresse du site.

[:material-human: L'accessibilité : les 4 points de la grille](qa/accessibilite.md){ .md-button .md-button--primary }

## Votre fichier QA et vos trios

1. Copiez le gabarit dans le dossier OneDrive et renommez-le `qa-prenom-nom.xlsx` ([étape 1 des consignes](projets/portfolio/qa-portfolio.md#etape-1-preparer-votre-fichier)).
2. Formez un **trio**. Chaque personne choisit **son** environnement pour tout le cours : ordinateur à environ 1920 px, écran large en plein écran, téléphone ([étape 2 des consignes](projets/portfolio/qa-portfolio.md#etape-2-choisir-3-environnements-differents)).
3. Remplissez l'onglet **Lisez-moi** : l'adresse de votre site et vos 3 testeurs.
4. Ajoutez 2 ou 3 scénarios personnels.

## Auto-test

Vous êtes le **testeur 1** de votre propre site : faites tous les scénarios dans votre environnement, dans votre bloc de l'onglet Tests. Soyez aussi exigeant que si c'était le site d'un autre.

## Tests croisés

Dans votre trio, chacun teste les deux autres sites, **dans son environnement**, directement dans le fichier de l'auteur, dans le bloc testeur 2 ou 3. Environ 30 minutes par site.

!!! info "Règles du testeur"
    On teste, on ne corrige pas. On décrit des faits observables, précisément : où, quoi, comment le reproduire. [Exemples d'écarts bien décrits](projets/portfolio/qa-portfolio.md#etape-3-tester)

## Bilan : prioriser

Avant de partir, dans votre fichier :

- [ ] Chaque écart a une gravité (onglet Synthèse : « écarts sans gravité » = 0).
- [ ] Vous savez quels bloquants et quels majeurs corriger en premier.

**Ne passez pas Pages sur `main`** tant que vos 3 tests ne sont pas terminés.

## Devoir

### Portfolio : tests, correctifs, validation

- [ ] Terminer vos 3 tests si ce n'est pas fait : **lun. 5 oct. à 23h59**, pour les deux groupes.
- [ ] Une fois les 3 tests terminés : passer GitHub Pages sur `main` ([étape 4](projets/portfolio/qa-portfolio.md#etape-4-passer-github-pages-sur-main)).
- [ ] Corriger les bloquants, puis les majeurs, un commit par correctif (`T-21 : ...`).
- [ ] Valider chaque correctif en ligne, dans l'onglet Correctifs.

[:material-clipboard-check-multiple: Consignes QA du portfolio](projets/portfolio/qa-portfolio.md){ .md-button .md-button--primary }
