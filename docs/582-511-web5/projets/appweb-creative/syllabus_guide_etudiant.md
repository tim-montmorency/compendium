# Guide Étudiant - Projet Intégrateur Web5

## Vue d'Ensemble

*Durée:* 8 semaines  
*Pondération:* 50% de la note finale du cours  
*Travail d'équipe:* 3 personnes (groupe 2 (mercredi am): une équipe de 4)
*Heures estimées:* ~90-110 heures par équipe



## Description du Projet

Vous allez créer une *application web interactive* utilisant Vue.js, GSAP, Pinia et CSS. Ce projet vous permettra de démontrer toutes les compétences acquises durant le cours dans un contexte créatif et professionnel.

### Vous avez le choix entre 2 types de projets:

- Option A: *Mémoires interactives*
- Option B: *Trace ton chemin*


## 🏛️ *Option A: Mémoires interactives*

*Concept:* Un musée numérique personnel (ou collaboratif) où l'utilisateur crée et organise ses souvenirs en salles thématiques.

### Ce que vous allez construire:

- 🏛️ 6-8 salles thématiques navigables
- 📸 Système d'ajout/édition/suppression de mémoires
- 🏷️ Tags et système de recherche/filtres
- 💾 Sauvegarde locale (LocalStorage)
- 🎨 Animations GSAP entre salles
- 📤 Export/Import en JSON
- 📱 Interface responsive

### Exemple de thématiques:

- Musée de souvenirs d'enfance
- Collection de voyages
- Musée musical (artistes, albums)
- Galerie d'inspirations créatives
- Souvenirs fictifs du époque que vous n'avez pas connue

### Technologies clés:

- *Vue.js* pour les composants (salles, mémoires, galerie)
- *Pinia* pour gérer l'état du musée
- *GSAP* pour transitions entre salles
- *LocalStorage* pour sauvegarder le musée en local
  - OU *Firebase* backend API (pour les plus équipes + avancés) - Cette option permet de créer une mémoire collective et non seulement locale à un seul utilisateur.



## જ⁀➴ *Option B: Trace ton chemin*

*Concept:* Une histoire interactive où les choix du lecteur influencent la narration et mènent à différentes fins.

### Ce que vous allez construire:

- 📚 8-10 chapitres/scènes narratives
- 🔀 Système de choix avec branches multiples
- 🎭 3-6 fins différentes selon les décisions
- 💾 Sauvegarde de progression (3 slots)
- 🎬 Animations GSAP entre chapitres
- 📊 Tracking des conséquences (karma, stats, inventaire)
- 📱 Interface responsive

### Exemples de genres:

- Science-fiction avec voyages temporels
- Mystère/enquête policière
- Fantasy/aventure épique
- Thriller psychologique
- Comédie/humour

### Technologies clés:

- *Vue.js* pour les composants (chapitres, choix, fins)
- *Pinia* pour gérer la progression et l'état du joueur
- *GSAP* pour transitions narratives
- *LocalStorage* pour sauvegardes multiples



## 📅 Calendrier Général

| Semaine | Phase | Livrables principaux |
|---------|-------|---------------------|
| *1-2* | *Planification* | Cahier de charges, maquettes Figma, arbre narratif (pour Option B) |
| *3* | *Foundation* | Architecture Vue, premiers composants, routing |
| *4* | *Interactivité* | CRUD/Système de choix, Pinia configuré |
| *5* | *Animations et médias* | GSAP, transitions, médias (images, sons) |
| *6* | *Persistance* | LocalStorage, sauvegardes, toutes les fins (Option B) |
| *7* | *Affinage et contrôle qualité* | Responsive, accessibilité, correction de bugs |
| *8* | *Finalisation* | Documentation, déploiement, présentation |



## 👥 Rôles dans l'équipe

<span class="important-label">⚠️ Important:</span> Même avec des rôles définis, *tout le monde code!* Ces rôles indiquent seulement les responsabilités principales.

Vous devez désigner un *chef de projet* et répartir les responsabilités.

### Répartition suggérée (équipe de 3):

*Personne A - Chef de projet + Architecture*

- Coordination de l'équipe
- Vue Router et structure de l'app
- Stores Pinia (state management)
- Gestion du repo GitHub

*Personne B - Design + Animations*

- Design visuel et maquettes Figma
- CSS et stylisation
- Animations GSAP
- Expérience utilisateur

*Personne C - Données + Systèmes*

- LocalStorage et persistance
- Validation des formulaires
- Gestion des erreurs
- Tests et débogage

*Personne D (si équipe de 4):*

- Contenus et UX (Option A: médias, descriptions)
- Narration et écriture (Option B: chapitres, dialogues)
- Accessibilité et responsive
- Documentation

<span class="important-label">⚠️ Important:</span> Même avec des rôles définis, *tout le monde code!* Ces rôles indiquent seulement les responsabilités principales.

<!--

## 📊 Évaluation (85% de la note finale)

| Critère | Pondération |
|---------|-------------|
| *Cahier de charges* (semaine 2) | 15% |
| *Architecture Vue.js* | 20% |
| *Gestion d'état (Pinia)* | 15% |
| *Styles CSS* | 10% |
| *Animations GSAP* | 10% |
| *Gestion des données* | 10% |
| *Fonctionnalités* | 10% |
| *Qualité/Accessibilité* | 10% |
| *Créativité* | 10% |
| *Travail d'équipe* | 5% |
| *Présentation finale* | 5% |

*Note:* Pour Option B, une section "Qualité narrative" (10%) remplace partiellement "Créativité".


-->

## ✅ Critères de Réussite

### Exigences minimales (MVP):

*Technique:*

- ✅ Application Vue.js fonctionnelle sans erreurs
- ✅ Minimum 8 composants bien structurés
- ✅ Vue Router avec 5+ routes
- ✅ Pinia pour state management
- ✅ CSS organisé avec variables
- ✅ Animations GSAP fluides
- ✅ Persistance LocalStorage fonctionnelle
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Accessibilité WCAG AA

*Fonctionnel:*

- *Option A:* 4-6 salles, CRUD complet, filtres/recherche
- *Option B:* 8+ chapitres, 3+ fins, système de choix fonctionnel



## 🚀 Technologies Utilisées

### Obligatoires:

- *Vue.js 3* - Framework JavaScript
- *Vite* - Build tool
- *Vue Router* - Routing
- *Pinia* - State management
- *GSAP* - Animations
- *Git + GitHub* - Contrôle de version

### Recommandées:

- *ESLint + Prettier* - Qualité du code
- *Figma* - Maquettage
- *Netlify/Vercel* - Déploiement

### Librairies optionnelles:

- VueUse (composables utilitaires)
- Howler.js (gestion audio)
- Day.js (dates)


<!--
## 📚 Livrables

### 1. Cahier de charges (Semaine 2) - 15%

Document complet incluant:
- Description du concept
- Maquettes Figma (5+ écrans)
- Architecture technique
- Planification (répartition des tâches, timeline)
- *Option B uniquement:* Arbre narratif complet

### 2. Projet final (Semaine 8) - 70%

Application web complète et déployée

### 3. Documentation (Semaine 8) - 5%

- README.md complet
- Code commenté
- Instructions d'installation

### 4. Présentation (Semaine 8) - 10%

- Présentation orale (10 min)
- Démo live
- Vidéo de présentation (2-3 min)

 -->

## ⚠️ Points Critiques à Retenir

### Pour Option A (Mémoires):

- 🎨 Commencez tôt sur le design visuel
- 💾 Testez intensivement le LocalStorage
- 🔍 Le système de recherche/filtres peut être complexe
- 📸 Prévoyez la validation des uploads d'images des utilisateurs

### Pour Option B (Trace ton chemin):

- ✍️ *CRITIQUE:* Écrivez 80% du texte AVANT la semaine 3!
- 📖 Gardez les histoires simples (8-10 chapitres max)
- 🔀 Limitez les branches (2-3 branches principales)
- 🧪 Testez CHAQUE chemin narratif manuellement
- 📝 Faites relire par quelqu'un d'externe (fautes d'orthographe!)


## 🛠️ Outils et Ressources

### Configuration initiale:
```bash
# Créer le projet
npm create vite@latest mon-projet -- --template vue

# Installer les dépendances
npm install pinia vue-router gsap

# Installer les outils de dev
npm install -D eslint prettier
```

### Ressources d'apprentissage:

- 📚 [Contenu du cours Web 5](https://tim-montmorency.com/compendium/582-511-web5/)
- 📖 [Vue.js Documentation](https://vuejs.org)
- 🍍 [Pinia Documentation](https://pinia.vuejs.org)
- 🎨 [GSAP Documentation](https://greensock.com/docs/)
- 🎬 [Vue School (tutoriels)](https://vueschool.io)

### Templates fournis par l'enseignant:

- Composable `useLocalStorage.js`
- Store Pinia exemple
- Composants de base commentés
- Structure de projet recommandée


## 📞 Support et Questions

### Pendant les heures de cours:

- Posez vos questions en direct
- Profitez des mini-cliniques optionnelles (GSAP, Pinia, etc.)
- Participez aux sessions de revue de code

### Hors des heures de cours:

- Utilisez le canal Teams de la classe
- Consultez la FAQ (mise à jour régulièrement)
- Documentation officielle des technologies

### Checkpoints hebdomadaires:

Chaque semaine, une revue rapide (15 min) avec l'enseignant pour:
- Valider votre progression
- Débloquer les problèmes techniques
- Ajuster le scope si nécessaire



## 🎯 Conseils pour Réussir

### Gestion de projet:

1. *Planifiez dès le début* - Le cahier de charges est crucial
2. *Divisez en petites tâches* - Utilisez un board (Trello, GitHub Projects)
3. *Committez souvent* - Petits commits réguliers > gros commits rares
4. *Testez continuellement* - Ne laissez pas les bugs s'accumuler
5. *Communiquez* - Daily stand-ups de 5 min

### Technique:

1. *Commencez simple* - MVP d'abord, fonctionnalités bonus ensuite
2. *Composants réutilisables* - DRY (Don't Repeat Yourself)
3. *Commentez votre code* - Votre "futur vous" vous remerciera
4. *Suivez les conventions* - ESLint est votre ami
5. *Branching Git* - Une branche par fonctionnalité

### Créativité:

1. *Inspirez-vous* - Regardez des références, mais ne copiez pas
2. *Restez cohérent* - Design uniforme du début à la fin
3. *Pensez UX* - L'utilisateur doit comprendre intuitivement
4. *Animations subtiles* - Moins c'est plus!
5. *Accessibilité first* - Design pour tous dès le départ

<!-- 

## 📅 Dates Importantes

| Date | Événement |
|------|-----------|
| *Semaine 1* | Lancement du projet, formation des équipes |
| *Semaine 2* | *REMISE: Cahier de charges* |
| *Semaine 3* | Checkpoint: Architecture de base |
| *Semaine 4* | Checkpoint: Fonctionnalités principales |
| *Semaine 5* | Checkpoint: Animations et médias |
| *Semaine 6* | Checkpoint: Persistance |
| *Semaine 7* | Checkpoint: Polish et accessibilité |
| *Semaine 8* | *REMISE FINALE + PRÉSENTATIONS* |

-->

## 🏆 Critères d'Excellence

Pour obtenir une note exceptionnelle (90%+):

### Technique:

- Architecture Vue exemplaire (composants bien pensés)
- State management Pinia optimal
- Animations GSAP créatives et fluides
- Code propre, commenté et sans erreurs
- Performance optimale (< 2s chargement)

### Design:

- Interface moderne et professionnelle
- Expérience utilisateur intuitive
- Cohérence visuelle totale
- Responsive parfait sur tous les appareils
- Accessibilité excellente (WCAG AAA)

### Créativité:

- Concept original et personnel
- Features innovantes (au-delà du MVP)
- Attention exceptionnelle aux détails
- Expérience émotionnelle impactante

### Professionnalisme:

- Documentation complète et claire
- Git workflow impeccable
- Présentation soignée et percutante
- Travail d'équipe harmonieux



## ❓ FAQ

*Q: Puis-je utiliser TypeScript?*  
R: Oui, mais ce n'est pas obligatoire. Si vous êtes à l'aise, allez-y!

*Q: Puis-je utiliser une UI library (Vuetify, PrimeVue)?*  
R: Non, vous devez créer vos propres composants pour démontrer vos compétences.

*Q: Dois-je faire un backend?*  
R: Non, LocalStorage suffit. Firebase est optionnel pour les équipes avancées.

*Q: Combien de temps dois-je passer sur le projet hors cours?*  
R: Environ 3h/semaine, soit 24h sur 8 semaines. Mais c'est variable selon votre rythme.

*Q: Que se passe-t-il si un membre ne contribue pas?*  
R: Signalez-le rapidement à l'enseignant. L'évaluation individuelle sera ajustée.

*Q: Puis-je changer de projet en cours de route?*  
R: Possible jusqu'à la fin de la semaine 2. Après, c'est trop risqué.

*Q: Option B - Combien de mots dois-je écrire?*  
R: Environ 150-300 mots par chapitre. Total: 1500-2500 mots pour 8-10 chapitres.

*Q: Puis-je utiliser ChatGPT/IA pour écrire l'histoire?*  
R: Vous pouvez l'utiliser pour brainstorm ou correction, mais l'écriture doit être vôtre.

*Q: Comment gérer les conflits Git?*  
R: Travaillez sur des branches séparées, communiquez avant de merger, utilisez des pull requests.



## 🎉 Mot de la Fin

Ce projet est l'occasion de:

- ✨ Créer quelque chose dont vous serez fiers
- 💼 Enrichir votre portfolio
- 🚀 Maîtriser des technologies professionnelles
- 🤝 Apprendre à travailler en équipe
- 🎓 Appliquer TOUTES vos connaissances du cours

*N'ayez pas peur d'être ambitieux, mais restez réalistes!*

Un projet simple et bien exécuté vaut mieux qu'un projet complexe inachevé.


*Bon courage! 🚀*


---

*Document version 1.0 - [8 octobre 2025]*