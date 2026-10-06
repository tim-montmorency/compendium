# Remise 3 : remise finale (gr. Lora jeu. 8 oct. · gr. Enric jeu. 15 oct.)

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. La remise finale, c'est votre portfolio **complet, corrigé et publié sur la branche `main`**, visible par les moteurs de recherche : c'est la version qu'un employeur verra.
2. La **documentation** doit être complète : fichier QA (tests, correctifs validés, autoévaluation), `JOURNAL.md`, `PLANIFICATION.md` et `README.md`.
3. **Comment remettre** : un *commit* et un *push* de tout sur `main`, puis vos **4 liens** dans le **devoir Teams**, **avant votre présentation** devant le jury.

Cochez chaque élément ci-dessous avant la remise. C'est cette version qui est évaluée (40 % de la note finale).

</div>

[:material-file-document-outline: Consignes complètes du portfolio](index-textuel.md#remise-3-finale-portfolio-complet-et-presentation-devant-le-jury-gr-lora-8-oct-gr-enric-15-oct){ .md-button }
[:material-presentation-play: Présentation devant le jury](presentation-jury.md){ .md-button }

## Le site

- [ ] Les écarts **bloquants** et **majeurs** de votre fichier QA sont corrigés et validés en ligne.
- [ ] Les **contenus finaux** sont intégrés : textes, projets, médias. Plus aucun faux texte ni image temporaire.
- [ ] Votre **CV** et votre **démo reel** (s'il y a lieu) sont accessibles depuis le site.
- [ ] Le site est **responsive** : version desktop **et** mobile complètes et fonctionnelles.
- [ ] Les **médias sont optimisés** : formats adaptés, poids réduit, dimensions adéquates. [Optimiser les médias](../../qa/optimisation-medias.md)
- [ ] Les 4 points d'**accessibilité** sont vérifiés : sémantique, `alt`, contraste, clavier. [L'accessibilité](../../qa/accessibilite.md)
- [ ] Le code est **commenté dans vos propres mots** (HTML, CSS et JS).
- [ ] La console du navigateur (F12) ne montre **aucune erreur rouge**.
- [ ] La ligne `<meta name="robots" content="noindex, nofollow">` est **retirée** de chaque page HTML : votre portfolio final doit pouvoir être trouvé.
- [ ] Chaque page HTML a un `<title>` significatif, ex. `Prénom Nom | Portfolio`.

## La mise en ligne

- [ ] Tous vos fichiers sont *commités* et poussés (*push*) sur `main`.
- [ ] GitHub Pages met en ligne la branche **`main`** (**Settings → Pages**). [Étape 4 des consignes QA](qa-portfolio.md#etape-4-passer-github-pages-sur-main)
- [ ] Tout fonctionne **en ligne**, pas seulement sur votre poste : cartes, détail des projets, images, liens, CV.
- [ ] La branche `beta` est toujours dans le dépôt, intacte : c'est la trace de la version testée.

## Le dépôt GitHub

- [ ] La structure de dossiers suit l'[arborescence du dépôt](arborescence-portfolio.md), avec des noms de fichiers uniformes.
- [ ] Les **commits** sont réguliers et bien nommés. Ceux des correctifs commencent par l'ID du test (`T-21 : ...`).
- [ ] `README.md` contient : l'**adresse en ligne** de votre site, le lien vers votre **Figma** et le lien vers votre **fichier QA**.
- [ ] `documentation/PLANIFICATION.md` est à jour. Tout changement de choix technologique est justifié dans le journal.

## Le fichier QA (`qa-prenom-nom.xlsx`)

[:material-clipboard-check-multiple: Consignes QA du portfolio](qa-portfolio.md){ .md-button }

- [ ] Les **3 blocs** de l'onglet Tests sont remplis (vous + 2 camarades, 3 environnements différents).
- [ ] Chaque écart a une **gravité**.
- [ ] Chaque bloquant et chaque majeur a sa ligne dans l'onglet **Correctifs**, validée ou justifiée.
- [ ] <span class="label-important">Important</span> : l'onglet **Autoévaluation** est rempli, avec **une preuve** pour chaque indicateur. Sans elle, la remise n'est pas acceptée.

## Le journal de bord (`documentation/JOURNAL.md`)

- [ ] Un titre pour ce dernier bloc, par exemple `## Bloc 3 : correctifs et finalisation`.
- [ ] Les **5 questions** du dernier bloc, avec des réponses concrètes :

1. Qu'est-ce que j'ai accompli depuis le dernier bloc? (Vous pouvez faire référence à vos *commits*.)
2. Quelle a été ma principale difficulté et comment je l'ai surmontée?
3. Qu'est-ce que j'ai appris que je ne savais pas avant?
4. Si j'avais une semaine de plus, qu'est-ce que je changerais?
5. Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?

- [ ] **Chaque question posée à l'IA** depuis la bêta est inscrite, avec la date, le prompt, l'outil et le résultat. [Comment citer l'IA](index-textuel.md#utilisation-de-lia)

!!! danger "IA utilisée sans respecter les consignes du cours"
    Usage non documenté dans le journal : plagiat, **zéro**. Code que vous ne pouvez pas expliquer au jury : **Insuffisant** au critère 1. [Les détails](index-textuel.md#ia-consequences)

## Le devoir Teams : vos 4 liens

Remettez ces liens dans le devoir Teams **avant votre présentation**. Le jour du jury, on ouvre votre remise sur le poste de l'enseignante et tout est là, en quelques clics.

!!! warning "Le code évalué : celui de votre dernier *commit* avant l'heure de remise"
    Les questions de code se font sur une copie de votre dépôt récupérée à l'heure de remise du devoir Teams. Tout *commit* poussé après cette heure ne sera pas vu.

- [ ] Le lien vers votre **dépôt GitHub**.
- [ ] Le lien vers votre **site en ligne**.
- [ ] Le lien vers votre **fichier QA** sur OneDrive.
- [ ] Le lien vers votre **maquette Figma**, partagée avec `marie-michelle.ouellet@cmontmorency.qc.ca`.

## Avant de remettre : le test final

- [ ] J'ai ouvert **l'adresse en ligne** dans une fenêtre de navigation privée, et tout fonctionne.
- [ ] J'ai testé sur mon téléphone (ou avec le mode appareil de l'inspecteur).
- [ ] Ctrl + U sur mon site en ligne : la ligne `noindex` n'y est plus.
- [ ] J'ai cliqué sur chacun de mes 4 liens **depuis ma remise Teams** : ils mènent tous au bon endroit.
- [ ] **Airtable ou Google Sheets?** Mon téléphone est connecté à ma source de données, pour la modifier pendant les questions de code.
- [ ] Ma présentation est prête et **chronométrée** : environ 7 minutes. [Consignes du jury](presentation-jury.md)
