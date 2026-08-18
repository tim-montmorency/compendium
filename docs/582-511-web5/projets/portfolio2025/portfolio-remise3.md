# Remise 3 Suivi d'intégration HTML/CSS

<!--
https://squidfunk.github.io/mkdocs-material/reference/admonitions/
✏️note, 📄abstract, ℹ️info, 🔥tip, ✔️success, ❔question, ⚠️warning, ❌failure, ⚡danger, 🐞bug, 🧪example, ❜❜quote
-->


!!! warning "Cette page ne concerne que la remise 3 - Suivi d'intégration HTML/CSS"

    Pour consulter les intructions complètes du projet, veuillez vous référer à

    <div class="class-content-link">
        <img src="./assets/icon-portfolio.svg">
        <a href="./portfolio.html">Projet Portfolio - Infos générales</a>
    </div>

<br>
<hr>
<br>

!!! example "L'IA en éducation" 
  Vous pouvez utiliser l’*IA* pour apprendre mais *PAS pour remplacer votre compréhension*. 
  
  Toute aide d’IA doit être documentée dans *journal-IA.md* ou partagée lors de votre remise via un *lien de la conversation* avec l'IA.*
  
  À la fin du projet, vous devrez pouvoir *expliquer votre propre code* et *le modifier à ma demande en direct*.

  Un portfolio sert à convaincre un·e employeur·e de *ce que vous savez faire.*
  
  On valorise l’*honnêteté* et l’*apprentissage réel.*


!!! note "À propos de l'utilisation de l'IA pour le projet"

    L'utilisation de l'*IA* est permise pour vous aider à vous déboguer SEULEMENT SI vous *partagez le lien de votre conversation avec l'IA lors de la remise*. Toutes les questions posées doivent être *dans le même fil conversationnel*. Si par erreur vous posez une question dans un autre fil, veuillez remettre *tous les fils conversationnel* que vous aurez utilisés. 
    
    Si l'IA sélectionnée ne vous permet pas de partager la conversation, vous devrez alors fournir un *journal-IA.md* contenant une liste de tous vos prompts.


## Consignes (partie 1) pour HTML/CSS

Veuillez vous référer aux [critères d'évaluation finale](./portfolio.html#criteres-devaluation), notamment la partie [3 - Codage HTML+CSS](./portfolio.html#3-codage-html-css) avant de débuter le travail et de façon récurente pour vous assurer que bien travailler.

- [ ] Faites un *clone local* de votre répertoire git **portfolio-prenom-nom**. 
  👉 Si vous souhaitez travailler sur différents ordinateurs, clonez-le sur un disque dur externe, une clé USB ou dans votre OneDrive (si vous l’utilisez en classe).
- [ ] Ouvrez ce répertoire local dans **Visual Studio Code** et, à la racine (au même niveau que votre `readme.md`) :
  - [ ] *Créez les fichiers* de base de votre portfolio et assurez-vous de bien les *lier entre eux*.
  - [ ] Si vous prévoyez avoir des *pages de projets* distinctes de la page d’accueil, créez-en d’abord **une seule** que vous utiliserez comme modèle de référence (template) pour les autres.
- [ ] Faites un `commit git` et un `push` vers GitHub afin d'avoir un commit initial contenant les fichiers du projet.

!!! Important "Important à propos de vos commit git"

    À partir de maintenant, pour ce projet, il vous est demandé d’effectuer le plus de `commit git` possible afin de conserver différentes versions complètes de votre travail. Plus vous en réalisez, plus vous vous protégez contre les pertes ou les erreurs. De plus, ce processus fera partie de votre évaluation.

    Il est également important de bien nommer vos `commit`. Le message doit être clair et représentatif de ce que vous avez accompli. Par exemple, si vous venez de terminer la mise en place de la navigation principale, vous pourriez intituler votre `commit` *Navigation principale stylisée*.

    👉 Petit conseil : pensez à rédiger vos messages de `commit` comme de mini-notes de projet. Ainsi, vous (et éventuellement vos coéquipiers) pourrez rapidement comprendre l’évolution du travail sans devoir fouiller dans le code.

## Consignes (partie 2) pour HTML/CSS

- [ ] Préparez vos *médias* (images, vidéos de projet).
  - [ ] Compressez et optimisez-les pour le Web.
  - [ ] Prévoyez des versions petites et grandes, si votre design inclut un agrandissement des images au clic.
  - [ ] Donnez-leur des noms clairs, sans espace ni accent et classez-les dans un dossier approprié.
- [ ] Importez les *cadriciels et bibliothèques* obligatoires (et optionnels, si nécessaire).
- [ ] N'oubliez pas de *commenter tout votre code* !
- [ ] Rappel amical de faire un autre `commit` à ce stade 😉 (Ok ok, je ne le répèterai plus, vous aurez à y penser par vous même pour la suite). Vous devez en faire régulièrement pendant l'intégration et la programmation de votre portfolio.
- [ ] Commencez l’*intégration HTML/CSS* de votre *page d’accueil*, bref: la mise en page!
  👉 Pour le *1er octobre*, il est attendu que *50 % de la page d'accueil soit complétée*.
- [ ] Les *styles CSS* doivent être pensés de manière *globale* pour l’ensemble du site (si plusieurs pages).
  - Évitez d’ajouter une classe spécifique à chaque balise.
  - Exemple : le style d’un `<h1>` ou un `<h2>`doit s’appliquer à toutes les pages.
  - Si vous avez besoin d’un style particulier (ex. un `<h2>` dans une carte), utilisez les sélecteurs contextuels : `.card h2{ ... }` où le parent du `<h2>` est soit `<a class='card'>` si la carte est cliquable, soit `<div class='card'>`.
- [ ] N'oubliez pas de *commenter tout votre code* !

<hr>

!!! important

    Consultez régulièrement les informations générales du projet pour vous assurer que vous n'oubliez rien, notammenet la [liste de ce qui est obligatoire pour le projet portfolio en Web 5](./portfolio.html#obligatoire-pour-web-5), les [les technologies permises](./portfolio.html#technologies-permises) et les [critères d'évaluation finales](./portfolio.html#criteres-devaluation)


## Remise

### Date

📅 **Mercredi 1er octobre, avant le cours**

### Où remettre

- Dans le **Devoir de Web 5** sur Teams

### Quoi remettre

- [ ] **Lien** vers ton **repo GitHub**. Il est attendu que lorsque j'ira sur ton répertoire git, j'y retrouverai plusieurs `commit` dans l'historique de celui-ci et ce, tout le long de ton travail. Déjà, en date du 1er octobre, je devrai en voir plusieurs.