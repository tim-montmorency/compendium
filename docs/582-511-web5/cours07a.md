# Cours 7.1
<!-- mer. 7 oct. -->

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/presentation-jury.html">Présentation devant le jury : les consignes</a>
</div>

[:material-presentation-play: Présentation devant le jury](projets/portfolio/presentation-jury.md){ .md-button .md-button--primary }

## Aujourd'hui

- [ ] Où en êtes-vous?
- [ ] Optimiser les médias
- [ ] Rendre votre portfolio trouvable (retirer `noindex` de `main`)
- [ ] Le jury : à quoi s'attendre
- [ ] Atelier : vos correctifs QA (et vérification du code, un à un)
- [ ] Répétition en duo
- [ ] Devoir : autoévaluation, journal, remise finale

## Rappel et mise à jour

### Projet portfolio

!!! danger "Remise finale et jury : gr. Lora **demain**, jeu. 8 oct. · gr. Enric jeu. 15 oct."
    Pour le gr. Lora, c'est le **dernier cours** avant le jury. Priorité aux bloquants et aux majeurs de votre fichier QA.

### Tutorat

| 📅 Date | 👤 Tuteur | ⏱️ Durée | 📍 Où |
|---|---|---|---|
| Chaque mardi, 12 h 30 à 14 h 10 (8 sept. au 8 déc.) | Alexis Guilbault | 1 h 40 | 🏫 En personne au Centre d'aide C-1602 |
| Chaque mercredi, 20 h à 21 h 15 (9 sept. au 9 déc.) | Olivier Laliberté | 1 h 15 | 💻 En ligne sur Teams : [canal Tutorat de l'équipe TIM-Programme TIM](https://teams.microsoft.com/l/channel/19%3A68fb96c731e7460ba846ff328a9fe109%40thread.tacv2/Tutorat?groupId=924057af-2255-4c2a-8ce7-f0a1809ad4a4&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) |

!!! success "🆕 Tutorat supplémentaire réservé à Web 5"

    | 📅 Date | 👤 Tuteur | ⏱️ Durée | 📍 Où | 🎯 Avant |
    |---|---|---|---|---|
    | Mar. 13 oct., 19 h 10 à 20 h | Alexis | 50 min | En ligne Teams, équipe *Web5* : [canal « Tutorat Web5 »](https://teams.microsoft.com/l/channel/19%3A9d3216c048864138a5c339b1fab4744f%40thread.tacv2/Tutorat%20d%C3%A9di%C3%A9%20Web5?groupId=f3a480ff-8bfb-44d3-9785-1b4c7f366701&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) | Remise finale gr. Enric (15 oct.) |

    Ce soir, mercredi : la période régulière d'Olivier (20 h) est encore là pour le gr. Lora.

## Où en êtes-vous?

Levez la main pour chaque étape atteinte :

1. Mes 3 tests sont faits (vous + 2 camarades), dans mon fichier QA.
2. GitHub Pages publie maintenant la branche **`main`**.
3. Mes écarts **bloquants** sont corrigés et validés en ligne.
4. Mes écarts **majeurs** sont corrigés et validés en ligne.

Bloqué à l'étape 1 ou 2? C'est la priorité, avant tout le reste. [Étape 4 des consignes QA : passer sur `main`](projets/portfolio/qa-portfolio.md#etape-4-passer-github-pages-sur-main)

## Optimiser les médias

C'est un indicateur de votre grille (critère 1), et souvent le gain le plus facile : les images pèsent presque toujours plus lourd que tout le reste du site. On mesure dans l'onglet Réseau, puis 4 gestes : le bon format, les bonnes dimensions, `loading="lazy"`, et `width`/`height`.

[:material-image-size-select-large: Optimiser les médias](qa/optimisation-medias.md){ .md-button .md-button--primary }

Notez le poids **avant** et **après** dans l'onglet Correctifs de votre fichier QA : c'est votre preuve.

## Rendre votre portfolio trouvable

Pendant les tests, votre bêta était cachée aux moteurs de recherche. Votre portfolio final, lui, doit pouvoir être **trouvé par un employeur**.

Sur `main`, dans VS Code, **retirez** cette ligne de chaque fichier HTML (si elle y est) :

```html
<meta name="robots" content="noindex, nofollow">
```

*Commit*, *push*. Vérification : sur votre site en ligne, Ctrl + U, la ligne n'y est plus.

!!! info "Et la branche `beta`?"
    Ne touchez à rien : elle n'est plus publiée. Elle reste dans votre dépôt comme trace de la version testée.

## Le jury : à quoi s'attendre

Environ 7 minutes de présentation, puis les questions. Le cœur : votre **page de projet qui montre le processus créatif**. Et préparez-vous à ouvrir votre code et à le modifier en direct, Copilot fermé.

[:material-presentation-play: Présentation devant le jury : les consignes](projets/portfolio/presentation-jury.md){ .md-button .md-button--primary }

## Atelier : vos correctifs

Votre fichier QA est votre liste de travail : **bloquants**, puis **majeurs**, puis mineurs si le temps le permet. Pour chaque correctif :

- [ ] un *commit* dont le message commence par l'ID du test (`T-21 : ...`);
- [ ] le scénario refait **en ligne**, sur `main`;
- [ ] la ligne remplie dans l'onglet **Correctifs** (validé, date, comment).

[:material-clipboard-check-multiple: Consignes QA : étape 5, corriger et valider](projets/portfolio/qa-portfolio.md){ .md-button }

!!! question "Pendant l'atelier : je passe vous voir, un à un"
    Environ 3 minutes chacun, **sans note** : vous me montrez votre code et vous faites une petite modification en direct, Copilot fermé. C'est une répétition des questions du jury, pour découvrir **aujourd'hui** ce que vous maîtrisez moins, pendant qu'il reste du temps. Le gr. Lora passe en premier.

## Répétition en duo

Vous avez fini vos correctifs? Formez un duo et présentez-vous mutuellement votre portfolio, **chronométré** :

1. Présentation complète, environ 7 minutes, sans interruption.
2. Votre partenaire joue le jury : une question de justification, puis une demande de modification en direct (« Change la couleur d'accent », « Ajoute l'année sur les cartes »).
3. On inverse.

## Devoir

### Portfolio : remise finale (gr. Lora jeu. 8 oct. · gr. Enric jeu. 15 oct.)

- [ ] GitHub Pages publie `main`, sans la ligne `noindex`, et l'adresse est dans votre `README.md`.
- [ ] Vos correctifs (au moins les bloquants et les majeurs) sont validés dans l'onglet **Correctifs**.
- [ ] L'onglet **Autoévaluation** de votre fichier QA est rempli, avec une preuve pour chaque indicateur.
- [ ] Le lien vers votre fichier `qa-prenom-nom.xlsx` est dans votre `README.md`.
- [ ] `JOURNAL.md` : les 5 questions du dernier bloc, et chaque question posée à l'IA depuis la bêta.
- [ ] Votre présentation est prête et chronométrée : [consignes du jury](projets/portfolio/presentation-jury.md).
