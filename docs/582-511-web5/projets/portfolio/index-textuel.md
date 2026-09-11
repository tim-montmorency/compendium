# Projet Portfolio: consignes complètes

## Mise en situation

Vous êtes un·e intégrateur·rice multimédia junior sur le point de postuler pour un premier stage dans une agence web ou une entreprise créative. Pour convaincre un employeur potentiel de vous accorder une entrevue, vous devez lui soumettre votre portfolio en ligne : votre carte de visite numérique.

Soumettre un portfolio, ce n'est pas seulement livrer un beau site. C'est démontrer que vous savez concevoir un produit web de qualité professionnelle, de la planification initiale jusqu'au contrôle de la qualité finale, en prenant des décisions techniques réfléchies et en étant capable de les justifier.

À la mi-session, vous présenterez votre portfolio devant un jury composé de votre enseignante et, si possible, d'un·e professionnel·le invité·e du milieu, qui incarnera le rôle de l'employeur potentiel. Ce jury évaluera non seulement le résultat final, mais aussi votre capacité à expliquer vos choix, à documenter votre démarche et à démontrer la rigueur de votre processus de développement.

## Responsabilités

### Vos responsabilités (étudiant·e)

- Planifier votre portfolio et **justifier vos choix technologiques** dans un document nommé *PLANIFICAITON.md*.
- Concevoir les maquettes visuelles dans Figma (mobile et desktop) et ajouter les fichiers PDF exportés dans votre dépôt GitHub.
- Créer un ficheir *README.md* dans votre dépôt GitHub, inscrivez-y : votre nom et un lien vers votre Figma Design.
- Développer le site web en mobilisant les technologies de votre choix (dans le cadre des balises établies)
- Commenter votre code dans vos propres mots afin de démontrer votre compréhension
- Maintenir un **journal de bord** (*JOURNAL.md*) tout au long du projet, en répondant aux questions fournies à chaque bloc
- Inscrire vos questions posées à l'IA dans votre journal de bord (*JOURNAL.md*), en précisant la date, le prompt, l'outil utilisé et le résultat obtenu
- Utiliser **Git** avec des commits réguliers, fréquents et bien nommés
- Conduire une démarche de contrôle de qualité : tester votre portfolio selon une grille fournie, puis faire tester votre site par un pair
- Déployer votre site en ligne
- Présenter et défendre votre portfolio devant le jury à la mi-session

### Responsabilités de l'enseignante

- Fournir les consignes, les questions du journal de bord, la grille d'évaluation critériée et la grille de tests de contrôle de qualité
- Offrir une rétroaction collective en classe à la remise 1
- Offrir une rétroaction audio ou vidéo individuelle à la remise 2
- Coordonner l'invitation du ou de la professionnel·le invité·e pour la présentation finale
- Incarner le rôle de l'employeur potentiel lors de la présentation finale si aucun invité externe n'est disponible
- Évaluer le portfolio, la présentation et la démarche de processus selon la grille critériée

### Responsabilités du ou de la professionnel·le invité·e (le cas échéant)

- Jouer le rôle d'un·e employeur·e potentiel·le lors de la présentation finale
- Poser des questions sur les choix de conception et de développement, comme lors d'un vrai entretien professionnel
- Offrir une rétroaction informelle du point de vue du milieu de travail

## Consignes

### Format du livrable

Votre portfolio doit être un site web fait entièrement à la main, sans CMS ni thème préfabriqué. C'est ce qui démontre le mieux que vous savez concevoir et coder un site web de zéro, une compétence directement valorisée par les employeurs du milieu.

### Base obligatoire pour tous

Peu importe vos choix technologiques, les éléments suivants sont exigés :

- Dépôt GitHub avec *commits* réguliers, fréquents et bien nommés (les conventions de nommage seront présentées en classe dès le début de la session).
- Site *responsive* (mobile et desktop), sans bogues majeurs.
- Code commenté dans vos propres mots.
- Déploiement en ligne (GitHub Pages recommandé).
- Journal de bord complété (JOURNAL.md dans votre dépôt GitHub).
- Démarche de contrôle de qualité documentée.

### Vos choix technologiques : à justifier dans votre planification

Dans un contexte professionnel réel, un développeur ou une développeuse choisit ses outils en fonction des besoins du projet, puis justifie ses décisions. C'est exactement ce qu'on vous demande ici. Pour chacun des éléments suivants, vous devrez choisir l'approche qui convient le mieux à votre projet **et en expliquer la raison** dans votre document de planification (PLANIFICATION.md) :

- **Gestion des données** : séparer les données de vos projets dans une base de données ou fichier externe (par exemple, le format *.json*). Ces données devront être récupérées et affichées de façon asynchrone au chargement de la page du portfolio. Selon la nature de votre portfolio et l’aisance de mise à jour des données des projets, sélectionner le type de base de données ou CMS et la technique de récupération de données de votre choix.
- **Animations** : utiliser [GSAP](https://gsap.com/), [Animejs](https://animejs.com/), une autre librairie, ou des animations CSS purs. Précisez ce que vous voulez animer, comment, et sur quel événement utilisateur (défilement, survol, clic).
- **Structure de navigation** : one-pager, multipages, ou autre : selon votre concept.
- **Hébergement** : GitHub Pages ou un autre service d’hébergement de votre choix (si vous utilisez un CMS avec des technologies exécutables au niveau serveur, alors il faut sélectionner un hébergeur en fonction de la technologie utilisée).

[:material-file-document-outline: Voir les explications en détail pour les 4 choix technologiques dans le cours 3.2](https://tim-montmorency.com/compendium/582-511-web5/cours03b.html#les-4-choix-technologiques-de-votre-portfolio){ .md-button :target="_blank" }

Il n'y a pas de mauvais choix, mais tout choix doit être justifié au départ dans la planification (PLANIFICATION.md) et tout changement de choix en cours de projet soit être justifié dans le journal de bord (JOURNAL.md).

### Journal de bord (JOURNAL.md)

À chaque bloc de cours (aux deux semaines environ), vous répondrez dans votre journal de bord aux questions suivantes:

1. Qu'est-ce que j'ai accompli depuis le dernier bloc? (Vous pouvez faire référence à vos *commits*).
2. Quelle a été ma principale difficulté et comment je l'ai surmontée?
3. Qu'est-ce que j'ai appris que je ne savais pas avant?
4. Quelle est ma prochaine étape concrète?
5. Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?

#### Utilisation de l'IA

L'IA est permise pour vous aider à apprendre et à déboguer, mais pas pour remplacer votre compréhension. Tout usage doit être documenté dans votre journal de bord ou via un lien de conversation partagé dans le journal de bord. Vous devez en tout temps être en mesure d'expliquer et de modifier votre code en direct. À la fin du projet, lors de la présentation, vous serez invité à le faire devant la classe à la demande de l’enseignante.


##### Comment citer?

Pour ce cours, cette citation se fait directement dans votre *JOURNAL.md*.

Vous ne devez pas inclure les autocomplétions de Copilot (VS Code) dans votre journal, mais vous devez inclure toute question posée à l'IA que ce soit avec Co-Pilot intégré VS Code ou autre outil IAG (Figma, ChatGPT, etc.).

##### Éléments à inclure

- *Date :* La date précise du prompt ou de la question posée à l'IA.
- *Prompt :* Le texte exact utilisé en *italique*.
- *Outil :* Le nom du logiciel utilisé.
- *Résultat :* Une description de ce que l'IA a généré, et ce que vous avez fait avec ce résultat (accepté tel quel, modifié, rejeté, etc.).

### Contrôle de qualité

Vous devrez mener et documenter une démarche de contrôle de qualité en deux volets :

- **Auto-évaluation** : à l'aide de la grille critériée fournie, vous évaluez vous-même votre portfolio avant la remise 3.
- **Tests par les pairs** : un·e collègue teste votre portfolio à partir d'une grille de tests guidés et vous remet ses observations écrites. Vous documentez ensuite les correctifs que vous avez apportés à la suite de ces tests.



## Critères d'évaluation

Ce projet compte pour **40 % de la note finale** du cours Web 5 et est évalué de façon individuelle (100 % de la note est individuelle).

Votre portfolio est évalué selon la grille critériée suivante. La qualité de la langue est évaluée séparément. Total : /40.

### Critère 1 : Conception structurée et complète du projet (015T, /15)

| Indicateur | Insuffisant | Acceptable | Très bien | Excellent |
|---|---|---|---|---|
| Proposition d'une interface cohérente sur le plan visuel (palette de couleurs, typographie, hiérarchie visuelle) qui reflète l'identité du portfolio et facilite la lecture du contenu. | L'interface présente une cohérence visuelle insuffisante (palette de couleurs, typographie, hiérarchie visuelle) : les choix nuisent à la lecture du contenu ou ne reflètent pas l'identité du portfolio. | L'interface présente une cohérence visuelle partielle (palette de couleurs, typographie, hiérarchie visuelle) : certains éléments facilitent la lecture du contenu, mais l'ensemble manque d'harmonie. | L'interface présente une cohérence visuelle satisfaisante (palette de couleurs, typographie, hiérarchie visuelle) qui reflète l'identité du portfolio et facilite la lecture du contenu. | L'interface présente une cohérence visuelle remarquable (palette de couleurs, typographie, hiérarchie visuelle) qui reflète clairement l'identité du portfolio et optimise la lecture du contenu. |
| Planification de l'arborescence du site et structuration logique des pages/sections, démontrée par un document de planification. | La structuration des pages/sections est peu logique ou incomplète : le document de planification est absent ou très lacunaire. | La structuration des pages/sections est partiellement logique : le document de planification présente quelques lacunes qui nuisent à la compréhension de l'arborescence. | La structuration des pages/sections est logique et démontrée par un document de planification clair (plan du site, wireframe ou schéma). | La structuration des pages/sections est rigoureusement logique et démontrée par un document de planification complet et précis qui facilite une compréhension immédiate de l'arborescence. |
| Justification adéquate de chaque technologie choisie (langages, librairies, outils) en fonction des besoins spécifiques du projet. | La justification des technologies choisies est absente ou ne tient pas compte des besoins spécifiques du projet. | La justification des technologies choisies est sommaire : le lien avec les besoins spécifiques du projet est établi pour certaines technologies seulement. | La justification de chaque technologie choisie est adéquate et démontre un lien clair avec les besoins spécifiques du projet. | La justification de chaque technologie choisie est rigoureuse et approfondie, démontrant un lien précis et pertinent avec les besoins spécifiques du projet. |
| Organisation des fichiers selon une structure de dossiers cohérente et une convention de nommage uniforme facilitant le repérage des ressources. | La structure de dossiers présente des incohérences et la convention de nommage est peu uniforme, ce qui rend le repérage des ressources difficile. | La structure de dossiers est partiellement cohérente et la convention de nommage est partiellement uniforme, ce qui complique parfois le repérage des ressources. | La structure de dossiers est cohérente et la convention de nommage est uniforme, facilitant le repérage des ressources. | La structure de dossiers est rigoureusement cohérente et la convention de nommage parfaitement uniforme, ce qui rend le repérage des ressources immédiat et intuitif. |
| Traitement optimisé des médias pour le web : format adapté à l'usage, compression appropriée (poids réduit sans perte visuelle notable), dimensions adéquates. | Le traitement des médias n'est pas optimisé pour le web : formats inadaptés, compression absente ou excessive (perte de qualité visible) et/ou dimensions inadéquates. | Le traitement des médias est partiellement optimisé pour le web : certains formats, compressions ou dimensions sont à revoir. | Le traitement des médias est optimisé pour le web : formats adaptés à l'usage, compression appropriée (poids réduit sans perte visuelle notable) et dimensions adéquates. | Le traitement des médias est optimisé de façon exemplaire pour le web : formats parfaitement adaptés, compression maximisée sans aucune perte visuelle perceptible et dimensions précisément adéquates. |
| Justification orale, devant le jury, des choix de conception et de réalisation du portfolio (design, structure, choix techniques), en réponse aux questions posées. | Lors de la présentation devant le jury, la personne étudiante ne parvient pas à expliquer ses choix ou les justifie de façon erronée; elle ne répond pas aux questions ou démontre qu'elle ne maîtrise pas le contenu présenté (par exemple, du code qu'elle ne comprend pas). | Lors de la présentation devant le jury, la personne étudiante explique ses principaux choix et répond aux questions, mais ses justifications restent superficielles ou incomplètes; elle comprend l'essentiel de son travail, avec quelques hésitations. | Lors de la présentation devant le jury, la personne étudiante justifie clairement ses choix de conception et de réalisation et répond aux questions avec assurance; ses explications sont pertinentes et démontrent une bonne compréhension de son travail. | Lors de la présentation devant le jury, la personne étudiante justifie ses choix avec rigueur et nuance, en établissant des liens avec les besoins des personnes représentatives visées; elle répond aux questions avec aisance et démontre une maîtrise complète de son travail, y compris ses choix techniques non évidents. |

### Critère 2 : Programmation fonctionnelle et optimale de l'interactivité de l'interface (015T, /15)

| Indicateur | Insuffisant | Acceptable | Très bien | Excellent |
|---|---|---|---|---|
| Codification d'une mise en page flexible et adaptative (responsive) assurant un affichage cohérent sur mobile, tablette et ordinateur. | La mise en page est peu adaptative (responsive) et présente des problèmes d'affichage importants sur au moins un type d'appareil (mobile, tablette, ordinateur). | La mise en page est partiellement adaptative (responsive) : l'affichage est cohérent sur certains appareils seulement, avec quelques problèmes visibles. | La mise en page est flexible et adaptative (responsive), assurant un affichage cohérent sur mobile, tablette et ordinateur. | La mise en page est flexible et parfaitement adaptative (responsive), assurant un affichage cohérent et optimisé sur l'ensemble des formats d'écran testés. |
| Programmation d'une navigation fonctionnelle (menu, liens, ancres) et d'éléments interactifs qui répondent correctement aux actions de l'utilisateur, sans erreur bloquante. | La navigation et/ou les éléments interactifs présentent des erreurs bloquantes qui empêchent l'utilisation normale de l'interface. | La navigation et les éléments interactifs fonctionnent globalement, mais présentent quelques erreurs mineures non bloquantes. | La navigation (menu, liens, ancres) et les éléments interactifs sont fonctionnels et répondent correctement aux actions de l'utilisateur, sans erreur bloquante. | La navigation et les éléments interactifs sont entièrement fonctionnels et répondent avec précision et fluidité à toutes les actions de l'utilisateur, sans aucune erreur. |
| Application rigoureuse des normes d'accessibilité WCAG, niveau AA: balises sémantiques HTML5, attributs alt, contraste suffisant, navigation au clavier fonctionnelle. | Les normes d'accessibilité WCAG (niveau AA) sont peu appliquées : les balises sémantiques, les attributs alt, le contraste et la navigation au clavier présentent plusieurs lacunes importantes. | Les normes d'accessibilité WCAG (niveau AA) sont partiellement appliquées : certains éléments (balises sémantiques, attributs alt, contraste, navigation au clavier) sont manquants ou incomplets. | Les normes d'accessibilité WCAG (niveau AA) sont appliquées de façon rigoureuse : balises sémantiques HTML5, attributs alt, contraste suffisant et navigation au clavier fonctionnelle. | Les normes d'accessibilité WCAG (niveau AA) sont appliquées de façon rigoureuse et systématique sur l'ensemble du site, sans aucune exception. |
| Insertion de commentaires pertinents (HTML/CSS/JS) expliquant le rôle des sections principales, des fonctions complexes et des choix techniques non évidents. | Les commentaires dans le code sont rare ou peu pertinents : le rôle des sections principales, des fonctions complexes ou des choix techniques est peu expliqué. | Les commentaires dans le code sont présents mais inconstants : certaines sections principales, fonctions complexes ou choix techniques importants ne sont pas expliqués. | Les commentaires insérés dans le code sont pertinents et expliquent le rôle des sections principales, des fonctions complexes et des choix techniques non évidents. | Les commentaires insérés dans le code sont pertinents, précis et systématiques, expliquant clairement l'ensemble des sections principales, des fonctions complexes et des choix techniques non évidents. |
| Programmation d'un chargement efficace des données du portfolio limitant la duplication de code et le temps de chargement perçu. | Le chargement des données du portfolio est peu efficace : duplication importante de code et/ou temps de chargement perçu élevé. | Le chargement des données du portfolio est partiellement efficace : certaines duplications de code subsistent ou le temps de chargement perçu pourrait être amélioré. | Le chargement des données du portfolio est programmé de façon efficace, limitant la duplication de code et le temps de chargement perçu. | Le chargement des données du portfolio est programmé de façon particulièrement efficace, minimisant la duplication de code et réduisant au maximum le temps de chargement perçu. |

### Critère 3 : Contrôle rigoureux de la qualité du portfolio (015Q, /10)

| Indicateur | Insuffisant | Acceptable | Très bien | Excellent |
|---|---|---|---|---|
| Vérification rigoureuse et exhaustive de l'expérience utilisateur (clarté de la navigation, lisibilité du contenu et attrait visuel) ainsi que du bon fonctionnement des fonctionnalités (liens, formulaires et scripts) auprès d'au moins trois personnes différentes et représentatives, chacune utilisant un navigateur ou un appareil différent. | La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est sommaire : moins de trois personnes différentes ont participé aux tests et les fonctionnalités ont été testées sur un seul navigateur ou appareil. | La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est réalisée auprès d'au moins trois personnes différentes, chacune utilisant un navigateur ou un appareil différent, mais la couverture des aspects est partielle. | La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est rigoureuse et exhaustive, réalisée auprès d'au moins trois personnes différentes, chacune utilisant un navigateur ou un appareil différent. | La vérification de l'expérience utilisateur et du bon fonctionnement des fonctionnalités est rigoureuse, approfondie et systématique, réalisée auprès d'au moins trois personnes représentatives, chacune utilisant un navigateur ou un appareil différent, incluant des cas limites. |
| Rédaction précise et claire d'un rapport de tests indiquant, pour chaque test : le scénario testé, le résultat observé et l'écart par rapport au résultat attendu. | Le rapport de tests est peu précis et peu clair : les éléments essentiels (scénario testé, résultat observé, écart par rapport au résultat attendu) sont manquants pour certains tests. | Le rapport de tests est partiellement précis et clair : certains éléments (scénario testé, résultat observé, écart par rapport au résultat attendu) sont imprécis pour certains tests. | Le rapport de tests est rédigé de façon précise et claire, indiquant pour chaque test le scénario testé, le résultat observé et l'écart par rapport au résultat attendu. | Le rapport de tests est rédigé de façon particulièrement précise et claire, indiquant pour chaque test, avec rigueur, le scénario testé, le résultat observé et une analyse pertinente de l'écart par rapport au résultat attendu. |
| Application de corrections adéquates pour chaque problème identifié, avec description du correctif et validation que le problème est résolu. | Les corrections apportées sont peu adéquates et ciblent partiellement les problèmes identifiés : la description du correctif et la validation de la résolution est peu développées. | Les corrections apportées sont partiellement ciblées : la description du correctif ou la validation de la résolution est partiellement développée. | Les corrections apportées sont ciblées pour chaque problème identifié, avec description du correctif et validation que le problème est résolu. | Les corrections apportées sont ciblées et rigoureuses pour chaque problème identifié, avec une description précise du correctif et une validation systématique de sa résolution. |

## Modalités d'évaluation (formative et sommative) et dates de remise

### Remises formatives

#### Remise 1 : Planification et design *(gr. Enric 14 sept. | gr. Lora 17 sept.)*

- dépôt GitHub initialisé et doit contenir:
  - <span class="important-label">IMPORTANT</span>, le dépôt doit être privé et vous devez inviter *marie-michelle-ouellet* comme collaboratrice
  - ficheir *README.md* dans votre dépôt GitHub, inscrivez-y :
    - votre nom,
    - votre programme d'études et le nom du collège,
    - votre courriel,
    - un lien vers votre portfolio en ligne (le futur url de votre portfolio),
    - un lien vers votre Figma Design.
      - Lorsque vous copiez le lien dans Figma, assurez-vous de me donner accès à modifier votre fichier Figma en ligne afin que je puisse le consulter et le commenter. Mon courriel pour Figma est *marie-michelle.ouellet@cmontmorency.qc.ca*.
  - commits réguliers, fréquents et bien nommés,
  - moodboard exporté en PDF et déposé dans le dépôt GitHub,
  - maquettes visuelles (Figma) mobile et desktop exportées en PDF et déposées dans le dépôt GitHub,
  - justification des choix technologiques (*PLANIFICATION.md*),
  - idées d'animation documentées (*PLANIFICATION.md*) : quoi animer, comment, sur quel événement,
  - journal de bord complété jusqu'à ce point (*JOURNAL.md*),
    - 5 questions à répondre pour le premier bloc du projet,
    - inscription de toute question posée à l'IA, avec date, prompt, outil utilisé et résultat obtenu.

**Rétroaction formative individuelle** de l'enseignante.
  
#### Remise 2 : Version Beta *(semaine 6, 2 octobre)*

- design corrigé et adapté, suite à la rétroaction de la remise 1,
- dépôt GitHub mis à jour:
  - structure de dossiers cohérente et convention de nommage uniforme,
  - fichiers README.md, PLANIFICATION.md et JOURNAL.md mis-à-jour,
  - commits réguliers, fréquents et bien nommés. avec commits réguliers et bien nommés,
- intégration HTML/CSS/JS fonctionnelle, avec commentaires dans le code,
- intégration des contenus textuels et médias,
- journal de bord complété jusqu'à ce point (JOURNAL.md),
  - 5 questions à répondre pour le deuxième bloc du projet,
  - inscription de toute question posée à l'IA, avec date, prompt, outil utilisé et résultat obtenu.
- version Beta déployée et fonctionnelle en ligne,
- grille de validation qualité amorcée.
- lancement des tests par les pairs cette semaine-là : **les résultats et correctifs seront documentés pour la remise finale**.

### Remise finale : sommative (40%)

#### Remise 3 (FINALE) : Portfolio complet et présentation devant le jury *(semaine 7 | gr. Lora : 8 oct. | gr. Enric : 15 oct.)*

- dépôt du site en ligne (déploiment sur un serveur web de votre choix),
- justification des choix technologiques tel que présenté à la remsie 1 (PLANIFICATION.md) et s'il y a eu des changements en cours de projet, justification de ces changements dans le journal de bord (JOURNAL.md),
- journal de bord complété pour l'ensemble du projet (JOURNAL.md)
  - 5 questions à répondre pour le dernier bloc du projet,
  - inscription de toute question posée à l'IA, avec date, prompt, outil utilisé et résultat obtenu.
- auto-évaluation à partir de la grille critériée,
- résultats des tests par les pairs documentés et correctifs apportés,
- présentation devant le jury (groupe de Lora le 8 octobre, groupe d'Enric le 15 octobre).
  
*Durée approximative :*

- 5 minutes de présentation par étudiant·e,
- suivies de questions du jury.
  
*L'évaluation porte sur :*

- le produit final (qualité du design, de l'expérience utilisateur, de l'interactivité et du code),
- la démarche de contrôle de qualité,
- le processus documenté (journal de bord, commits Git, commentaires dans le code, justification des choix technologiques),
- et la capacité à justifier ses choix et son processus devant un employeur potentiel.

## Sites de référence d'inspiration

### Inspirations graphiques / web design

- [Awwwards](https://www.awwwards.com/)
- [CSS Design Awards](https://www.cssdesignawards.com/)
- [Dribbble, Web Design (popular shots)](https://dribbble.com/shots/popular/web-design)
- [Behance, Portfolios](https://www.behance.net/search/projects/portfolio)

### Références intemporelles

- [Material Design](https://material.io/)
- [Théorie des couleurs](https://99designs.fr/blog/conseils-design/la-theorie-des-couleurs/)

### Exemples de portfolios d'anciens étudiants

- 💼 [Portfolio de Émeryk Bélisle](https://emerykbelisle.com/)
- 💼 [Portfolio de Mikael Arseneau](https://mikaelarseneau.github.io/portfolio-Mikael-Arseneau/index.html)
- 💼 [Portfolio de Matis Ghariani](https://matisgh.github.io/portfolio-matis-ghariani/)
- 💼 [Portfolio de Anton Nikulin](https://antoha2033.github.io/portfolio-Anton-Nikulin/index.html)
- 💼 [Portfolio de Thearylou Lach](https://thearyl.github.io/portfolio-thearylou-lach/)
- 💼 [Portfolio de Audrey Dandurand](https://audreydandurand.github.io/index.html)
- 💼 [Portfolio de Justine Rousseau](https://justinersu.github.io/)
- 💼 [Portfolio de Victor Gileau](https://victorgileau.github.io/victorgileau_portfolio/index.html)
- 💼 [Portfolio de Joshua Gonzalez-Barrera](https://jxshvfx.github.io/joshuagonzalez.github.io/)
- 💼 [Portfolio de Kenza El Harrif](https://kenzaelharrif.github.io/KenzaElHarrif_portfolio/index.html)
- 💼 [Portfolio de Delphine Grenier](https://delphineg-projets.github.io/portfolio)
- 💼 [Portfolio de Ihab Mouhajer](https://ihabmjr.github.io/)
- 💼 [Portfolio de Daniel Sébastien Dezemma](https://dezemma.com/)
- 💼 [Portfolio de Sitmonternna Yi](https://sitmonternna.github.io/artist_portfolio/)
- 💼 [Portfolio de Benjamin Ferland](https://benjaminferland.github.io/portfolio-benjamin-ferland/)
