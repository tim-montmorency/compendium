# Calendrier Hebdomadaire Détaillé - Trace ton chemin

**Durée totale:** 8 semaines  
**Heures en classe:** 8h/semaine (3h théorie + 5h pratique)  
**Heures hors classe:** ~3h/semaine (travail sur le projet)  
**Total par semaine:** ~11h effectives

---

## 📅 SEMAINE 1-2: Planification, Design et Écriture (2 semaines)

### 🎯 Objectifs
- Définir le concept narratif et l'univers
- Créer l'arbre narratif complet (branches et fins)
- Écrire tous les chapitres (ou au moins 50%)
- Créer les maquettes Figma
- Définir l'architecture technique
- Setup initial du projet

### 📚 En classe (16h sur 2 semaines)

**Semaine 1 - Jour 1 (3h):**
- Introduction au projet (30 min)
- Formation des équipes et attribution des rôles (30 min)
- Atelier brainstorming narratif (1h30):
  - Genre, univers, personnages
  - Synopsis de base
  - Principales décisions/embranchements
- Début de rédaction du cahier de charges (30 min)

**Semaine 1 - Jour 2 (5h):**
- Création de l'arbre narratif (2h):
  - Diagramme des branches
  - Points de décision clés
  - 3-6 fins différentes
- Atelier Figma: maquettage (2h)
- Création du repo GitHub et structure de dossiers (1h)

**Semaine 2 - Jour 1 (3h):**
- **Session d'écriture collective** (2h30):
  - Écriture des 3-4 premiers chapitres
  - Révision croisée entre équipes
- Révision des cahiers de charges (30 min)

**Semaine 2 - Jour 2 (5h):**
- Setup du projet Vite + Vue (1h)
- Installation des dépendances (Pinia, GSAP, SASS) (1h)
- Configuration ESLint + Prettier (30 min)
- Création des premiers composants "skeleton" (1h30)
- **Session d'écriture** (1h): Continuer les chapitres

### 🏠 Hors classe (~6h sur 2 semaines)

**Semaine 1:**
- Recherche d'inspirations narratives et visuelles (1h)
- Rédaction du cahier de charges (1h)
- **Écriture de chapitres** (1h)

**Semaine 2:**
- Finalisation du cahier de charges (30 min)
- Complétion des maquettes Figma (1h30)
- **Écriture des chapitres restants** (1h) - **CRITIQUE!**

### ⚠️ **POINT CRITIQUE: L'ÉCRITURE**

**Il est ESSENTIEL d'avoir 80% du texte écrit avant la semaine 3!**

**Stratégie recommandée:**
- Personne dédiée à la narration écrit en continu
- Sessions d'écriture collectives (30-45 min par jour)
- Utiliser Google Docs pour écriture collaborative
- Ne PAS attendre d'avoir codé pour écrire

**Checklist fin semaine 2:**
- [ ] Synopsis complet validé
- [ ] Arbre narratif dessiné (diagramme)
- [ ] Minimum 8 chapitres écrits (texte final ou quasi-final)
- [ ] Toutes les fins écrites (même brouillon)
- [ ] Liste des conséquences par choix définie

### ✅ Livrables de fin de période

- [ ] **Cahier de charges complet**
- [ ] **Arbre narratif** (diagramme visuel + descriptions)
- [ ] **Minimum 8 chapitres écrits** (texte complet)
- [ ] **Maquettes Figma** (minimum 5 écrans + version mobile)
- [ ] **Repo GitHub** configuré avec structure de base
- [ ] **Projet Vite+Vue** initialisé et fonctionnel
- [ ] **Fichier JSON** avec structure des chapitres commencée

---

## 📅 SEMAINE 3: Foundation - Structure et Affichage de Base

### 🎯 Objectifs
- Mettre en place la structure de composants
- Configurer Vue Router
- Créer les stores Pinia de base
- Afficher les premiers chapitres (texte statique)

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: Architecture de composants pour histoires interactives (30 min)
- Création des composants de layout:
  - `AppHeader.vue` (navigation, menu)
  - `ChapterView.vue` (conteneur principal)
  - `NarrativeText.vue` (affichage du texte)
- Mise en place du système de routing

**Jour 2 (5h):**
- Mini-cours: Pinia pour gestion de progression (45 min)
- Création des stores:
  - `useStoryStore.js` (chapitres, navigation)
  - `usePlayerStore.js` (état du joueur)
- Création du fichier JSON avec les chapitres
- Développement des composants clés:
  - `ChoiceButton.vue` (bouton de choix)
  - `ChoicePanel.vue` (panel de choix)
- Affichage des 3-4 premiers chapitres (texte statique)

### 🏠 Hors classe (3h)

- Complétion des composants commencés en classe (1h30)
- **Intégration de tous les chapitres dans le JSON** (1h30)

### ✅ Livrables de fin de semaine

- [ ] **Minimum 6-8 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec routes par chapitre
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre chapitres
- [ ] **Tous les chapitres** dans le fichier JSON
- [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)

### 🎯 Checkpoint enseignant

- Revue de code (15 min/équipe)
- Vérification de la structure JSON des chapitres
- Validation que TOUT le texte est prêt

---

## 📅 SEMAINE 4: Système de Choix et Branches

### 🎯 Objectifs
- Implémenter la logique de choix
- Créer le système de redirection par branches
- Tracker les conséquences des choix
- Implémenter l'historique des décisions

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: Logique de branches narratives (30 min)
- Développement du système de choix:
  - Affichage dynamique des choix
  - Sélection et validation
  - Redirection vers le bon chapitre
- Tests des premières branches

**Jour 2 (5h):**
- Implémentation du tracking des conséquences:
  - Système de flags (événements déclenchés)
  - Karma/stats (si applicable)
  - Inventaire (si applicable)
  - Relations avec personnages (si applicable)
- Historique des choix:
  - Enregistrement de chaque décision
  - Affichage dans un menu (optionnel)
- Tests de toutes les branches principales

### 🏠 Hors classe (3h)

- Complétion de la logique de toutes les branches (1h30)
- Tests manuels de chaque chemin possible (1h30)

### ✅ Livrables de fin de semaine

- [ ] **Système de choix** complet et fonctionnel
- [ ] **Redirection par branches** fonctionnelle
- [ ] **Tracking des conséquences** (flags, stats, etc.)
- [ ] **Historique des choix** sauvegardé
- [ ] **Toutes les branches** testées manuellement
- [ ] **Logique des fins** implémentée (conditions d'accès)

### 🎯 Checkpoint enseignant
- Test d'une branche complète (de l'intro à une fin)
- Vérification de la logique de conséquences
- Feedback sur la cohérence narrative

---

## 📅 SEMAINE 5: Animations et Expérience Narrative

### 🎯 Objectifs
- Intégrer GSAP et créer des animations fluides
- Ajouter des transitions entre chapitres
- Implémenter l'apparition progressive du texte
- Intégrer des images de fond et médias
- Ajouter musiques/sons d'ambiance

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: GSAP pour narration interactive (45 min)
- Animations de texte:
  - Effet d'apparition progressive (typewriter optionnel)
  - Fade in des paragraphes
  - Animations des dialogues
- Transitions entre chapitres

**Jour 2 (5h):**
- Atelier GSAP avancé (1h30):
  - Animations des boutons de choix
  - Effets de hover et sélection
  - Transitions contextuelles (selon le ton du chapitre)
- Intégration des médias:
  - Images de fond par chapitre
  - Musiques d'ambiance
  - Effets sonores (optionnel)
  - Système de contrôle audio

### 🏠 Hors classe (3h)

- Ajout d'animations supplémentaires (1h)
- Recherche et intégration de musiques/images (1h30)
- Polish des transitions (30 min)

### ✅ Livrables de fin de semaine

- [ ] **Apparition du texte animée** (GSAP)
- [ ] **Transitions entre chapitres** fluides
- [ ] **Animations des boutons de choix** réactives
- [ ] **Images de fond** pour chaque chapitre (ou catégories)
- [ ] **Musiques d'ambiance** intégrées avec contrôle volume
- [ ] **Effets sonores** pour choix importants (optionnel)

### 🎯 Checkpoint enseignant
- Démonstration des animations (session collective)
- Feedback sur l'ambiance et le rythme
- Vérification de la performance

---

## 📅 SEMAINE 6: Sauvegarde et Fins

### 🎯 Objectifs
- Implémenter le système de sauvegarde (3 slots)
- Finaliser toutes les fins
- Créer les écrans de fin avec récapitulatif
- Tester tous les chemins vers les fins

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: LocalStorage et gestion de sauvegardes (30 min)
- Implémentation du système de sauvegarde:
  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement de sauvegarde
  - Affichage des infos (date, progression, chapitre)
  - Suppression de sauvegarde

**Jour 2 (5h):**
- Finalisation de toutes les fins:
  - Textes des fins (si pas déjà fait)
  - Conditions d'accès vérifiées
  - Écrans de fin personnalisés
- Composant `EndingScreen.vue`:
  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Stats finales (karma, items, etc.)
  - Boutons: recommencer, charger, menu principal
- Tests intensifs de tous les chemins

### 🏠 Hors classe (3h)

- Tests de toutes les fins (au moins 1 fois chacune) (2h)
- Corrections de bugs identifiés (1h)

### ✅ Livrables de fin de semaine

- [ ] **Système de 3 slots** fonctionnel
- [ ] **Sauvegarde/chargement** sans bugs
- [ ] **Toutes les fins** (minimum 3) accessibles et testées
- [ ] **Écrans de fin** personnalisés et impactants
- [ ] **Récapitulatif** des choix et conséquences
- [ ] **Options post-fin** (rejouer, charger, etc.)

### 🎯 Checkpoint enseignant
- Test du système de sauvegarde (sauvegarder, fermer, rouvrir, charger)
- Vérification que toutes les fins sont atteignables
- Feedback sur l'impact émotionnel des fins

---

## 📅 SEMAINE 7: Polish, Accessibilité et Relecture

### 🎯 Objectifs
- Rendre le projet 100% responsive
- Implémenter l'accessibilité (WCAG AA)
- **Relecture complète de tous les textes**
- Corriger tous les bugs
- Optimiser les performances
- Ajouter features bonus (si temps)

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: Accessibilité pour applications narratives (45 min)
- Tests et corrections responsive:
  - Mobile (320px-768px)
  - Tablette (768px-1024px)
  - Desktop (1024px+)
- **SESSION DE RELECTURE COLLECTIVE** (1h15):
  - Chaque équipe lit l'histoire d'une autre équipe
  - Notes de fautes et incohérences
  - Feedback narratif

**Jour 2 (5h):**
- Implémentation accessibilité:
  - Navigation au clavier complète
  - ARIA labels sur tous les éléments interactifs
  - Contraste des couleurs (WCAG AA)
  - Option "skip animations"
  - Taille de texte ajustable (optionnel)
- Optimisation:
  - Compression des images
  - Lazy loading des chapitres (si nécessaire)
  - Optimisation des animations
- **Correction des fautes** identifiées lors de la relecture
- Features bonus (si temps):
  - Fast-forward pour texte déjà lu
  - Galerie des fins débloquées
  - Stats globales (% de complétion)

### 🏠 Hors classe (3h)

- **Relecture personnelle complète** (1h)
- Correction des bugs et fautes restants (1h30)
- Polish visuel final (30 min)

### ✅ Livrables de fin de semaine

- [ ] **Responsive** parfait sur 3 breakpoints
- [ ] **Navigation clavier** fonctionnelle partout
- [ ] **ARIA labels** sur tous les éléments interactifs
- [ ] **Contraste WCAG AA** respecté
- [ ] **Aucune faute d'orthographe** (relecture complète faite)
- [ ] **Aucun bug bloquant** restant
- [ ] **Performance** optimisée (< 3s chargement)
- [ ] **Toutes les branches** testées une dernière fois

### 🎯 Checkpoint enseignant
- Tests d'accessibilité (keyboard, contraste)
- Tests responsive sur appareils réels
- Lecture rapide de 2-3 chapitres (vérification qualité texte)
- Liste de bugs critiques à corriger

---

## 📅 SEMAINE 8: Finalisation et Déploiement

### 🎯 Objectifs
- Finaliser la documentation
- Déployer le projet en ligne
- Créer une vidéo de présentation
- Préparer la démo finale
- Rétrospective d'équipe

### 📚 En classe (8h)

**Jour 1 (3h):**
- Rédaction du README complet:
  - Description du projet et synopsis (sans spoilers)
  - Instructions d'installation et utilisation
  - Technologies utilisées
  - Captures d'écran
  - Structure narrative (nombre de chapitres, fins)
  - Crédits (auteurs, musiques, images)
- Déploiement:
  - Netlify ou Vercel
  - Configuration du build
  - Test du site en production
  - Vérification que les sauvegardes fonctionnent en prod

**Jour 2 (5h):**
- Création de la vidéo de présentation (2-3 min):
  - Intro: concept et genre
  - Démo d'un chemin narratif (sans spoiler les fins)
  - Showcase des animations et interface
  - Système de choix et conséquences
  - Voix-off explicative
- Préparation de la présentation finale:
  - Slides de support (pitch, démo, techniques, défis)
  - Répartition des rôles de présentation
  - Répétition complète
- Rétrospective d'équipe:
  - Ce qui a bien fonctionné
  - Difficultés rencontrées (surtout narratives)
  - Apprentissages clés
  - Ce qu'on ferait différemment

### 🏠 Hors classe (3h)

- Finitions de dernière minute (1h)
- Répétition de la présentation (1h)
- Préparation des réponses aux questions potentielles (1h)

### ✅ Livrables FINAUX

- [ ] **README.md complet** avec synopsis sans spoilers
- [ ] **Projet déployé** en ligne (URL fonctionnelle)
- [ ] **Vidéo de présentation** (2-3 min)
- [ ] **Slides de présentation** préparés
- [ ] **Code propre** et commenté
- [ ] **Aucune erreur console**
- [ ] **Tous les textes** finaux et sans fautes
- [ ] **Documentation technique** complète

### 🎯 PRÉSENTATIONS FINALES

**Format:** 15 minutes par équipe (10 min présentation + 5 min questions)

**Structure suggérée:**
1. **Introduction** (1 min): Pitch de l'histoire (synopsis, genre)
2. **Démo narrative** (5 min): Jouer un chemin de l'histoire live
   - Montrer 2-3 chapitres
   - Faire au moins 2 choix
   - Montrer les conséquences
3. **Aspects techniques** (2 min): Architecture, défis techniques résolus
4. **Défis narratifs** (1 min): Difficultés d'écriture, cohérence des branches
5. **Retour d'expérience** (1 min): Ce qu'on a appris
6. **Questions et réponses** (5 min)

---

## 📊 Récapitulatif des Livrables par Semaine

| Semaine | Livrable principal | Poids évaluation |
|---------|-------------------|------------------|
| 2 | Cahier de charges + Arbre narratif + **80% du texte écrit** | 15% |
| 3 | Architecture Vue + Affichage des chapitres | Checkpoint |
| 4 | Système de choix + Branches fonctionnelles | Checkpoint |
| 5 | Animations + Médias (images, sons) | Checkpoint |
| 6 | Sauvegardes + Toutes les fins | Checkpoint |
| 7 | Responsive + Accessibilité + **Relecture complète** | Checkpoint |
| 8 | **Projet final complet + Présentation** | 85% |

---

## 🚨 Points de Vigilance par Semaine

### Semaine 1-2 ⚠️ **CRITIQUE POUR LE SUCCÈS**
- ⚠️ **NE PAS sous-estimer le temps d'écriture!** C'est le plus gros risque
- ⚠️ Écrire des histoires SIMPLES (8-10 chapitres max)
- ⚠️ Ne pas faire trop de branches (complexité exponentielle)
- ⚠️ Avoir une personne dédiée à l'écriture narrative
- ⚠️ Écrire tous les jours un peu (30 min minimum)
- ⚠️ Valider l'arbre narratif avec l'enseignant AVANT de coder

### Semaine 3
- ⚠️ Structurer le JSON des chapitres dès le départ
- ⚠️ Prévoir des champs pour toutes les métadonnées (bg, music, etc.)
- ⚠️ Bien nommer les IDs de chapitres (ch-1, ch-2a, ch-2b, etc.)

### Semaine 4
- ⚠️ Tester CHAQUE branche manuellement (créer une checklist)
- ⚠️ Documenter les conditions d'accès aux fins
- ⚠️ Attention aux bugs de logique (flags non définis, etc.)

### Semaine 5
- ⚠️ Ne pas surcharger d'animations (ralentit la lecture)
- ⚠️ Attention aux droits d'auteur des musiques/images
- ⚠️ Tester les animations sur mobile (peuvent être lourdes)

### Semaine 6
- ⚠️ Tester les sauvegardes intensivement (beaucoup de bugs possibles)
- ⚠️ S'assurer que TOUTES les fins sont atteignables
- ⚠️ Vérifier la cohérence narrative de chaque fin

### Semaine 7 ⚠️ **RELECTURE OBLIGATOIRE**
- ⚠️ Faire relire par quelqu'un qui n'a PAS écrit
- ⚠️ Utiliser un correcteur orthographique (Antidote, etc.)
- ⚠️ Tester sur vrais appareils mobiles
- ⚠️ Corriger TOUTES les fautes avant la semaine 8

### Semaine 8
- ⚠️ Prévoir du temps pour les imprévus de déploiement
- ⚠️ Ne pas spoiler les fins dans la présentation!
- ⚠️ Répéter la démo (éviter les bugs en live)

---

## 💡 Conseils Spécifiques pour l'Écriture Narrative

### Stratégies d'écriture efficaces

**Pour rester productif:**
1. **Sessions chronométrées:** 30 min d'écriture intensive, 10 min pause
2. **Écriture "brouillon rapide":** Écrire vite sans se relire (corriger après)
3. **Collaboration asynchrone:** Chacun écrit une branche différente
4. **Templates de scènes:** Utiliser une structure répétable

**Structure de chapitre suggérée:**
```
1. Description de la scène (2-3 phrases)
2. Narration de l'action (1-2 paragraphes)
3. [Dialogue si nécessaire]
4. Pensées du personnage (optionnel)
5. Transition vers le choix
6. [Choix présentés]
```

### Éviter le "scope creep" narratif

**Restez simples:**
- ❌ Histoire avec 15 personnages et 20 branches
- ✅ Histoire focalisée avec 3-4 personnages et 6-8 branches

**Limites recommandées:**
- **Chapitres:** 8-12 maximum
- **Fins:** 3-6 (pas plus!)
- **Branches majeures:** 2-3 seulement
- **Mots par chapitre:** 150-300 mots (2-3 minutes de lecture)

### Checklist qualité narrative

Avant la semaine 7, vérifiez:
- [ ] Aucun chapitre ne mène nulle part (dead end)
- [ ] Toutes les fins sont cohérentes avec les choix faits
- [ ] Aucune incohérence temporelle ou logique
- [ ] Les personnages restent cohérents
- [ ] Le ton narratif est uniforme
- [ ] Pas de trous dans l'intrigue

---

## 🎯 Checklist de Fin de Projet

Avant la remise finale, vérifiez que:

### Code
- [ ] Aucune erreur ou warning console
- [ ] Code commenté aux endroits clés
- [ ] Variables et fonctions bien nommées
- [ ] Pas de code mort (commenté ou inutilisé)
- [ ] ESLint passe sans erreur

### Fonctionnalités
- [ ] Toutes les routes fonctionnent
- [ ] Navigation entre chapitres fluide
- [ ] Système de choix fonctionnel sur toutes les branches
- [ ] Toutes les fins accessibles (testées!)
- [ ] Sauvegarde/chargement fiable
- [ ] Animations fluides
- [ ] Médias (images/sons) intégrés

### Contenu narratif
- [ ] **Tous les chapitres écrits et intégrés**
- [ ] **Aucune faute d'orthographe**
- [ ] **Histoire cohérente du début à la fin**
- [ ] Toutes les branches testées manuellement
- [ ] Toutes les fins testées et satisfaisantes
- [ ] Dialogues naturels et crédibles

### Qualité
- [ ] Responsive sur tous les breakpoints
- [ ] Accessible (navigation clavier, ARIA)
- [ ] Performance optimisée
- [ ] Tests sur Chrome, Firefox, Safari

### Documentation
- [ ] README complet et clair
- [ ] Synopsis sans spoilers
- [ ] Instructions d'installation
- [ ] Captures d'écran
- [ ] URL du site déployé
- [ ] Crédits (texte, musiques, images)

### Présentation
- [ ] Vidéo de 2-3 minutes prête
- [ ] Slides préparés
- [ ] Rôles de présentation répartis
- [ ] Démo répétée 2-3 fois
- [ ] Préparation aux questions sur l'histoire

---

## 📝 Template de Session d'Écriture

**Utilisez ce format pour vos sessions d'écriture en équipe:**

```markdown
## Session d'écriture [Date]

**Durée:** 45 minutes
**Objectif:** Écrire chapitres X à Y

### Répartition
- [Nom]: Chapitres 1-2
- [Nom]: Chapitres 3-4
- [Nom]: Révision et correction

### Checklist fin de session
- [ ] Chapitres écrits (même brouillon)
- [ ] Dialogues ajoutés si nécessaire
- [ ] Choix définis avec leurs conséquences
- [ ] Textes copiés dans le fichier JSON
- [ ] Commit et push sur GitHub

### Prochaine session
**Date:** [Date]
**Objectif:** [Objectif]
```

---

## 🎮 Exemple de Structure JSON Complète

Pour vous aider à organiser vos chapitres:

```json
{
  "chapters": {
    "intro": {
      "id": "intro",
      "title": "Chapitre 1 - Le Réveil",
      "type": "linear",
      "text": "Vous vous réveillez dans une chambre inconnue. Les murs sont blancs, aseptisés. Aucun souvenir de comment vous êtes arrivé ici. Sur la table de chevet, une lettre avec votre nom...",
      "backgroundImage": "/images/bg-room.jpg",
      "music": "ambient-mystery.mp3",
      "nextChapter": "ch-2"
    },
    "ch-2": {
      "id": "ch-2",
      "title": "Chapitre 2 - La Décision",
      "type": "choice",
      "text": "La lettre révèle une vérité troublante : vous êtes dans une expérience scientifique. Deux portes s'offrent à vous. L'une mène à la liberté... ou au danger. Que faites-vous?",
      "backgroundImage": "/images/bg-corridor.jpg",
      "music": "tension-theme.mp3",
      "choices": [
        {
          "id": "door-left",
          "text": "Ouvrir la porte de gauche",
          "hint": "Une lumière filtre sous la porte",
          "nextChapter": "ch-3a",
          "effects": {
            "flags": { "tookLeftPath": true },
            "karma": 0,
            "stats": { "courage": 1 }
          }
        },
        {
          "id": "door-right",
          "text": "Ouvrir la porte de droite",
          "hint": "Des voix étouffées se font entendre",
          "nextChapter": "ch-3b",
          "effects": {
            "flags": { "tookRightPath": true },
            "karma": 0,
            "stats": { "caution": 1 }
          }
        },
        {
          "id": "stay",
          "text": "Rester et attendre",
          "hint": "Peut-être vaut-il mieux être patient...",
          "nextChapter": "ch-3c",
          "effects": {
            "flags": { "stayed": true },
            "karma": -1,
            "stats": { "passivity": 1 }
          }
        }
      ]
    }
  },
  "endings": {
    "ending-freedom": {
      "id": "ending-freedom",
      "title": "Fin 1 - Liberté",
      "type": "good",
      "text": "Vous avez réussi à vous échapper. Le soleil sur votre visage n'a jamais été aussi doux. Vous êtes libre.",
      "conditions": {
        "requiredFlags": ["tookLeftPath", "foundKey"],
        "minKarma": 3
      },
      "image": "/images/ending-freedom.jpg",
      "music": "ending-hopeful.mp3"
    }
  }
}
```

---

## 🏆 Critères de Réussite d'une Bonne Histoire Interactive

### ✅ Histoire engageante
- [ ] Début captivant (hook dans le premier chapitre)
- [ ] Mystère ou conflit clair
- [ ] Personnage avec lequel on peut s'identifier
- [ ] Montée de tension progressive
- [ ] Climax satisfaisant
- [ ] Fins impactantes émotionnellement

### ✅ Choix significatifs
- [ ] Chaque choix a une conséquence visible
- [ ] Pas de "faux choix" (où tout mène au même endroit)
- [ ] Dilemmes moraux intéressants
- [ ] Conséquences logiques et cohérentes

### ✅ Rejouabilité
- [ ] Envie de tester d'autres chemins
- [ ] Fins suffisamment différentes
- [ ] Secrets ou contenu caché (optionnel)

---

**Bon courage pour votre aventure narrative! 📖✨**