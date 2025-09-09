
<!--
https://squidfunk.github.io/mkdocs-material/reference/admonitions/
✏️note, 📄abstract, ℹ️info, 🔥tip, ✔️success, ❔question, ⚠️warning, ❌failure, ⚡danger, 🐞bug, 🧪example, ❜❜quote
-->

# Portfolio: Web&nbsp;5

## Description

Dans le cadre des cours **Web 5** et **Préparation au milieu de travail** vous avez à réaliser un portfolio web qui vous permettra de vous présenter aux employeurs potentiels.

Pour le cours de **Préparation au milieu de travail**, c'est le *contenu* de ce portfolio qui sera évalué.

Pour le cours de **Web 5**, c'est la *planification*, le *design*, le *processus*, le *code* qui seront évalués.

[📋✅ Voir les critères d'évaluation complets ci-bas.](#criteres-devaluation){ .md-button }

<hr>

[Lien vers les instrutions de **Préparation au milieu de travail**](https://tim-montmorency.com/compendium/582-541%E2%80%93preparation-milieu-travail/stages/portfolio.html){ .md-button .x-small }

## Format

**Site web statique fait à la main** (sans CMS ni thème déjà pré-fait)

!!! question "Avantage de ce format"

    C’est la façon la plus claire de démontrer que vous savez concevoir et coder vous-mêmes un site web à partir de zéro.

## Technologies permises

- *HTML5*
- *CSS3*
- *JavaScript*
- *Bootstrap*
- *Vue.js*
- *GSAP* + son plugin *ScrollTrigger*
- *Git*
- *Json*
- *Hébergement web* de votre choix (je recommande simplement GitHub Pages car gratuit)
- Possibilité de s'acheter une *nom de domaine* personnalisé pour éviter d'avoir `github.io` comme nom de domaine et se doter d'un style plus professionnel

<div style="margin: 30px 0; padding: 30px; border: 8px solid #ef5552;">
    <h3 style="color: #ef5552;">À PROPOS DE L'<em>IA</em> EN ÉDUCATION</h3> 
    <p>Vous pouvez utiliser l’IA pour apprendre mais <em>pas pour remplacer votre compréhension</em>. Toute aide d’IA doit être documentée dans journal-IA.md ou partagée lors de votre remise via un lien de la conversation avec la dite IA. Vous devez pouvoir expliquer votre code et le modifier en direct. </p>
    <p><strong><em>Un portfolio sert à convaincre un·e employeur·e que vous savez faire. On valorise l’honnêteté et l’apprentissage réel.<em> </strong></p>
</div>

!!! warning "À propos de l'utilisation de l'IA pour le projet"

    L'utilisation de l'IA est permise pour vous aider à vous déboguer SEULEMENT SI vous partagez le lien de votre conversation avec l'IA lors de la remise. Toutes les questions posées doivent être dans le même fil conversationnel. Si par erreur vous posez une question dans un autre fil, veuillez remettre tous les fils conversationnel que vous aurez utilisés. Si l'IA sélectionnée ne vous permet pas de partager la conversation, vous devrez alors fournir un *journal-IA.md* contenant une liste de tous vos prompts.

## Obligatoire pour Web 5

- Utiliser un **dépôt GitHub** avec des commits réguliers et bien nommés.  
- Intégrer au moins une **animation GSAP** déclenchée au défilement (scroll).  
- Séparer les **données des projets** dans un fichier `projects.json` et les charger via l’**API fetch**.  
- Prévoir une **mise en page flexible** permettant d’ajouter facilement des projets ultérieurement.  
- Créer et intégrer un **composant Vue.js** codé par vous-même.  
- **Commenter le code** (HTML, CSS et JavaScript) dans vos propres mots afin de démontrer votre compréhension.  
- S’assurer que le **code est validé** par le validateur **W3C**.  
- Rendre le site **responsive** (adaptable aux différents écrans).  


## Compétences démontrées

- Planification, organisation personnelle, documentation.
- Créativité et minutie au niveau du design.
- Structure sémantique HTML.
- Mise en page CSS (Flexbox, Grid).
- Interactions JavaScript fonctionnelles (menus, carrousel, lightbox, animations, filtres etc).
- Accessibilité, performance et optimisation pour moteur de recherche.
- Responsive design.


## Calendrier

![septembre](./assets/portfolio-calendrier-2025-page1.png)
![octobre](./assets/portfolio-calendrier-2025-page2.png)

[📥 Téléchargez le calendrier en PDF](./assets/portfolio-calendrier-2025.pdf){ .md-button :target="_blank" }

## Dates de remise pour Web 5

- **17 septembre**: Remise de la planification de portfolio (formatif)
- **24 septembre**: Remise du design du portfolio versions mobile et desktop (formatif)
- **1er octobre**: Remise du contenu intégré (suivi formatif)
- **29 octobre**: Remise du portfolio final (sommatif: 25%)




## Critères d'évaluation

### 1. Planification & recherche  

- **Moodboard visuel** : choix et harmonie des couleurs, typographies, ambiance, références cohérentes.  
- **Justification du concept** : explication des choix visuels/ergonomiques, lien avec la personnalité ou le type de stage visé.  
- **Organisation du contenu** : plan clair (sections du portfolio, hiérarchie de l’information).  

### 2. Design du site  

- **Qualité visuelle** : cohérence graphique, respect du moodboard, esthétique générale.  
- **UX et navigation** : ergonomie, lisibilité, accessibilité de base, responsive design pensé dès la maquette.  
- **Originalité et personnalisation** : effort créatif pour se démarquer, éviter les templates génériques.  

### 3. Codage HTML + CSS 

- **Structure HTML** : sémantique, hiérarchie, respect des standards W3C, titres et balises correctes.  
- **CSS et mise en page** : utilisation claire de Grid/Flexbox, propreté du code, classes logiques.  
- **Responsive design** : site adapté aux écrans mobiles et desktop, sans bogues majeurs.  
- **Accessibilité & SEO de base** : contraste suffisant, textes alternatifs pour images, métadonnées essentielles.  
- **Nomenclature des fichiers** : dossiers, fichiers et images bien nommés (sans caractères spéciaux, sans espaces ni accents).  

### 4. Composante Vue.js  

- **Fonctionnalité correcte** : la composante fonctionne, interaction fluide, pas de bug majeur.  
- **Utilisation de Vue** : data, rendu dynamique via `v-for` / `v-if`, interaction avec `@click` ou autres directives.  
- **Pertinence du widget** : apporte une valeur réelle au portfolio.  

### 5. Animation GSAP 

- **Intégration d’une animation GSAP** : déclenchée au scroll ou à l’interaction, correctement intégrée.  

### 6. Documentation & mise en ligne 

- **Déploiement web** : intégration adéquate sur un serveur web.  
- **README.md clair** : description du projet, instructions d’installation et d’utilisation.  
- **Journal-IA.md** : si utilisation de l’IA, documentation complète des prompts utilisés.  


## Sites de référence d'inspiration

## Exemples de portfolios

- [💼 Portfolio de Audrey Dandurand](https://audreydandurand.github.io/index.html)
- [💼 Portfolio de Justine Rousseau](https://justinersu.github.io/)
- [💼 Portfolio de Victor Gileau](https://victorgileau.github.io/victorgileau_portfolio/index.html)
- [💼 Portfolio de Joshua Gonzalez-Barrera](https://jxshvfx.github.io/joshuagonzalez.github.io/)
- [💼 Portfolio d'Ikrame Rata](https://ikramert.ca/)
- [💼 Portfolio de Kenza El Harrif](https://kenzaelharrif.github.io/KenzaElHarrif_portfolio/index.html)  
- [💼 Portfolio de Delphine Grenier](https://delphineg-projets.github.io/portfolio)  
- [💼 Portfolio de Ihab Mouhajer](https://ihabmjr.github.io/)
- [💼 Portfolio de Daniel Sébastien Dezemma](https://dezemma.com/)  
- [💼 Portfolio de Sitmonternna Yi](https://sitmonternna.github.io/artist_portfolio/)
