# Cours 1.1

## Aujourd'hui

- [ ] Brise-glace
- [ ] Présentation du cours (approche par projets)
- [ ] Activer notifications Canal Général dans Teams Web 5
- [ ] Plan de cours
- [ ] Quiz diagnostique CSS + JS
- [ ] Mise en place des comptes (GitHub Education + Copilot, Figma Éducation)
- [ ] Devoir

## Brise-glace 🧊🔨❄️

**Sondage humain, ligne de positionnement.** Aucun matériel, juste de l'espace pour bouger.

??? info "Comment ça marche"
    Une ligne imaginaire traverse la classe d'un mur à l'autre. Un bout représente **« tout à fait d'accord »**, l'autre **« pas du tout d'accord »**. Pour chaque affirmation, les étudiants se placent physiquement sur le spectre selon leur réponse. Prendre 30 à 60 secondes pour discuter avec 1 ou 2 personnes proches sur la ligne avant de passer à l'affirmation suivante. Durée totale : environ 10 minutes.

    **Affirmations à lancer** (dans l'ordre, ou à piger selon l'énergie du groupe) :

    1. Je suis à l'aise avec les animations CSS.
    2. J'ai déjà utilisé un framework ou une librairie JavaScript (Anime.js, Chart.js, etc.).
    3. Le travail d'équipe me stresse plus que le travail solo.
    4. Je me sens prêt pour la dernière année du programme.
    5. L'IA fait déjà partie de ma façon de coder.
    6. J'ai hâte de travailler sur un projet créatif plutôt que sur des exercices.
    7. Je sais déjà ce que je veux faire après le DEC.



## Présentation du cours 🎬

Web 5 est le cours **intégrateur** de votre 5e session : il rassemble ce que vous avez appris depuis Web 1 (HTML, CSS, JavaScript, frameworks, outils) dans deux projets concrets, plutôt que dans des exercices isolés.

### Structure du cours : 2 projets, aucun examen

| Projet | Format | Pondération | Période |
|---|---|---|---|
| **Portfolio** | Individuel | 40 % | Semaines 1 à 7 |
| **Projet intégrateur** *(scrollytelling)* | Équipe de 2 | 60 % | Semaines 7 à 15 |

!!! tip
    Aucun examen dans ce cours. Toute l'évaluation repose sur ces deux projets, avec des jalons formatifs en cours de route pour vous laisser le droit à l'erreur avant chaque remise sommative.

### Coenseignement avec Préparation au milieu du travail

!!! note "Le portfolio est un projet conjoint"
    - **Web 5** s'occupe du **contenant** : site web, code, design, UX, qualité
    - **Préparation au milieu du travail** (Lora / Enric) s'occupe du **contenu** : CV, lettre de présentation, démo reel

### Nouveautés cette session

- **Vue.js** (initiation)
- **GSAP + ScrollTrigger** : animations pilotées par le défilement
- Animations CSS modernes (parallax, spritesheet, scroll-driven natif)
- **Workflow assisté par IA** : Copilot (code) et Figma (design)
- Démarche de **contrôle de la qualité** formalisée (015Q)

### Aperçu du calendrier

- Lancement du portfolio : **28 août**
- Rencontres formatives individuelles (planif et design) : **14 et 17 sept**
- Présentations jury du portfolio : **Gr01 le 8 oct, Gr02 le 15 oct**
- Lancement du projet intégrateur : **9 oct**
- Remise finale et présentation : **11 déc**

## Plan de cours 📄🎓

[:material-file-document-outline: Plan de cours](https://cmontmorency365-my.sharepoint.com/:b:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQDTYB5eNYuIT7NKFELpmV9gAT0c5x58pU_X_G5hhFsUTxE?e=mW4Xc8){ .md-button .md-button--primary }

## Le travail assisté par IA 🤖

L'IA (Copilot, Figma) est disponible tout au long de la session. Elle change votre vitesse de travail, pas votre responsabilité : vous devez être capable d'expliquer et de défendre tout ce que vous livrez.

[:material-file-powerpoint-box: Diapositives : Le travail assisté par IA](assets/documents/Web5_travail-assiste-IA.pptx){ .md-button .md-button--primary :target="_blank" }

La compétence clé se déplace : la question n'est plus « comment mémoriser la syntaxe », c'est « comment décrire clairement ce que je veux, puis reconnaître si la réponse est bonne ».

### Quatre moments où l'IA intervient

- **Planifier** : décrire une fonctionnalité et faire générer une structure de projet ou un plan de réalisation étape par étape, avant d'écrire une ligne.
- **Générer** : compléter du code à partir d'une intention claire (un nom de fonction, un commentaire décrivant l'effet voulu).
- **Déboguer** : coller un message d'erreur et le faire expliquer dans son contexte. C'est souvent l'usage le plus rentable au quotidien.
- **Réviser** : demander comment simplifier ou améliorer un bout de code qui fonctionne déjà. L'IA agit alors comme un pair programmeur.

### La boucle de travail

1. **Intention et critères** : avant de demander quoi que ce soit, savoir ce qu'on veut obtenir et à quoi ressemble un bon résultat.
2. **Générer par incréments** : une petite portion à la fois, jamais une fonctionnalité complète d'un coup.
3. **Lire et comprendre avant d'accepter** : si vous ne pouvez pas expliquer une ligne, vous ne l'acceptez pas.
4. **Tester** : chaque incrément généré est vérifié avant de passer au suivant, lien direct avec le contrôle de la qualité (015Q).
5. **Commit** : des commits petits et fréquents, pas un seul gros commit en fin de journée.
6. **Documenter dans `JOURNAL.md`** : ce qui a été généré par IA, pourquoi, et ce qui a été modifié.

!!! warning "La règle non négociable"
    Si vous ne comprenez pas une ligne de code, vous ne l'acceptez pas. Le code que vous livrez, vous devez pouvoir l'expliquer. L'IA se trompe, parfois beaucoup : votre travail est de repérer ses erreurs, pas de lui faire une confiance aveugle.

### Frontière d'usage

| Outil | Usage | Où |
|---|---|---|
| **Copilot** | Code | VS Code |
| **Figma / Figma Make** | Design, exploration, prototypage | Figma |

Le code final livré est toujours écrit et compris par vous, Copilot est un soutien, pas un remplacement.

## Intégrité intellectuelle et usage encadré de l'IA ⚖️

<!-- NOUVEAU : voir commentaire en tête de fichier, section séparée par défaut, fusionnable avec la section précédente -->

- Rappel PIÉA
- L'IA est permise, mais **documentée** (journal de bord)

## Quiz diagnostique 🕵️✍️

### CSS

!!! tip "Pour réviser avant de répondre"
    Le contenu est réparti sur plusieurs cours précédents :

    - [Flexbox (Web 2)](https://tim-montmorency.com/compendium/582-211-web2/css/flexbox01.html)
    - [CSS Grid (Web 3)](https://tim-montmorency.com/compendium/582-311-web3/cours01.html#css-grid)
    - [Animations CSS (Web 2)](https://tim-montmorency.com/compendium/582-211-web2/css/animations-css.html)
    - [Variables, unités et fonctions (Web 2)](https://tim-montmorency.com/compendium/582-211-web2/css/variables-unites-fonctions.html)

- [Gr1 mercredi AM](https://app.wooclap.com/BZPPADO)
- [Gr2 mercredi PM](https://app.wooclap.com/EJQMHPB)

### JavaScript

!!! tip "Pour réviser avant de répondre"
    [Aide-mémoire JS](https://jfcmontmorency.github.io/aide-memoire/)

À faire en devoir

- [Gr1 mercredi AM](https://app.wooclap.com/NDPKHTG/questionnaires/6a8f2142e16d5b91fd769a75)
- [Gr2 mercredi PM](https://app.wooclap.com/XCQUADJ/questionnaires/6a8f53523c3db622bc47fcb3)

## Mise en place des outils et logiciels pour le cours Web 5

### Activer notifications TEAMS

!!! warning
    Activer notifications Canal *Général* dans Teams Web5

    [https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=6ed557ad-760b-4710-8f42-2fbc550f8c7a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create](https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=6ed557ad-760b-4710-8f42-2fbc550f8c7a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create)

### Procédure pour activer GitHub Education + GitHub Copilot Pro + VS Code

[:material-github: GitHub Education :material-robot: Copilot Pro :material-microsoft-visual-studio-code: VS Code](ia/Guide_GitHub_Education_Copilot.md){ .md-button .md-button--primary :target="_blank" }

### Procédure pour activer Figma Éducation

<!-- NOUVEAU : sujet séparé à traiter ensemble, même traitement pas-à-pas que le guide GitHub -->

[:simple-figma: Figma Éducation](ia/Guide_Figma_Education.md){ .md-button .md-button--primary :target="_blank" }

## DEVOIR pour vendredi

Faire (à ton rythme) le quiz diagnostique JavaScript


- [Gr1 mercredi AM](https://app.wooclap.com/NDPKHTG/questionnaires/6a8f2142e16d5b91fd769a75)
- [Gr2 mercredi PM](https://app.wooclap.com/XCQUADJ/questionnaires/6a8f53523c3db622bc47fcb3)
