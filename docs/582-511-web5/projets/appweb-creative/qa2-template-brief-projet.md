# Brief de Projet - À fournir à l'équipe testeuse

**Nom de votre équipe :** [Nom]  
**Nom du projet :** [Nom]  
**Type de projet :** [Mémoires interactives / Trace ton chemin]  
**Date :** 3 décembre 2024

---

## 🔗 Accès au projet

**URL du site déployé :** [https://votre-projet.netlify.app]

**Identifiants de connexion (si applicable) :**
- Username : [si nécessaire]
- Password : [si nécessaire]

**Lien GitHub (optionnel) :** [https://github.com/votre-equipe/projet]

---

## 📖 Description du projet

### Concept général
[Décrivez en 2-3 phrases ce que fait votre projet]

**Exemple (Mémoires) :**
"Musée des Souvenirs est une application qui permet de créer et organiser ses mémoires personnelles dans 6 salles thématiques. Les utilisateurs peuvent ajouter des photos, des descriptions et des tags à leurs souvenirs."

**Exemple (Trace ton chemin) :**
"Les Échos du Temps est une histoire interactive de science-fiction où le joueur incarne un scientifique qui découvre une machine à voyager dans le temps. Les choix du joueur influencent l'histoire et mènent à 4 fins différentes."

---

## ✅ Fonctionnalités implémentées (À TESTER)

### PRIORITÉ HAUTE (fonctionnalités principales)

#### Pour "Mémoires interactives"
- [ ] Navigation entre [X] salles thématiques
- [ ] Ajout de mémoire (formulaire complet)
- [ ] Édition de mémoire existante
- [ ] Suppression de mémoire
- [ ] Upload d'images (limite : [X] MB)
- [ ] Système de tags
- [ ] Recherche par mot-clé
- [ ] Filtre par tag
- [ ] Filtre par salle

#### Pour "Trace ton chemin"
- [ ] Lecture de [X] chapitres
- [ ] Système de choix fonctionnel
- [ ] [X] branches narratives
- [ ] [X] fins différentes accessibles
- [ ] Tracking de [karma/stats/inventaire/flags]
- [ ] Historique des décisions

### PRIORITÉ MOYENNE
- [ ] Responsive (mobile, tablette, desktop)
- [ ] [Autre fonctionnalité]
- [ ] [Autre fonctionnalité]

### PRIORITÉ BASSE (bonus si temps)
- [ ] [Fonctionnalité bonus]
- [ ] [Fonctionnalité bonus]

---

## ❌ Fonctionnalités NON implémentées

**Important : Ne PAS reporter ces éléments comme bugs**

- ❌ [Exemple : Sauvegarde LocalStorage (optionnelle - pas faite)]
- ❌ [Exemple : Animations GSAP (optionnelles - pas faites)]
- ❌ [Exemple : Mode sombre]
- ❌ [Autre]

---

## 🧪 Cas de test suggérés

### Test 1 : [Nom du test]
**Objectif :** Vérifier que [fonctionnalité] fonctionne

**Étapes :**
1. [Action 1]
2. [Action 2]
3. [Action 3]

**Résultat attendu :**
[Ce qui devrait se passer]

---

### Test 2 : [Nom du test]
**Objectif :** [Description]

**Étapes :**
1. [Action 1]
2. [Action 2]

**Résultat attendu :**
[Ce qui devrait se passer]

---

### Test 3 : Responsive mobile
**Objectif :** Vérifier que le site fonctionne sur mobile

**Étapes :**
1. Ouvrir DevTools (F12)
2. Activer le mode device (icône téléphone/tablette)
3. Sélectionner "iPhone SE" ou 375px
4. Tester les fonctionnalités principales

**Résultat attendu :**
- Tout s'affiche correctement (pas de débordement)
- Navigation fonctionne
- Boutons sont assez grands pour être cliqués

---

## 🐛 Problèmes connus (Ne PAS les reporter)

**Ces problèmes sont déjà identifiés et documentés :**

- [Exemple : Images très lourdes (> 10 MB) peuvent ralentir le chargement]
- [Exemple : Safari : pas testé (pas d'accès Mac)]
- [Exemple : Recherche sensible à la casse (majuscules/minuscules)]
- [Autre]

---

## 🎯 Zones à tester en priorité

**Nous aimerions que vous testiez particulièrement :**

1. [Exemple : Le système de filtres (nous ne sommes pas sûrs qu'il fonctionne dans tous les cas)]
2. [Exemple : La version mobile (nous l'avons peu testée)]
3. [Exemple : Toutes les fins de l'histoire (pour vérifier qu'elles sont atteignables)]

---

## 📱 Appareils et navigateurs testés par nous

**Ce que nous avons déjà testé :**
- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ⚠️ Mobile (via DevTools uniquement, pas sur vrai téléphone)
- ❌ Safari (pas d'accès)
- ❌ Tablette réelle

**Ce que vous pourriez tester en plus :**
- Safari (si vous avez un Mac/iPhone)
- Sur vos vrais téléphones
- Sur vraie tablette

---

## 🗺️ Structure du projet (Pour "Trace ton chemin")

**Arbre narratif simplifié :**

```
Chapitre 1 (Intro)
    ↓
Chapitre 2 (Premier choix)
    ↓           ↓
Branche A   Branche B
    ↓           ↓
  Fin 1       Fin 2
  Fin 3       Fin 4
```

**Liste des fins accessibles :**
1. [Nom de la fin 1] - Condition : [karma > 5]
2. [Nom de la fin 2] - Condition : [karma < -5]
3. [Nom de la fin 3] - Condition : [avoir l'objet X]
4. [Nom de la fin 4] - Condition : [avoir fait le choix Y au chapitre 3]

---

## 📞 Contact

**Pour questions urgentes ou clarifications :**
- Teams : @[Nom du chef de projet]
- Email : [email si nécessaire]

**Disponibilité :**
- Réponse rapide sur Teams pendant les heures de travail
- Possibilité de meeting rapide (15-20 min) si nécessaire

---

## 💬 Notes additionnelles

[Toute autre information utile pour les testeurs]

[Exemple : "Notez que le chargement initial peut prendre 2-3 secondes à cause du nombre d'images"]

[Exemple : "L'historique des décisions se trouve dans le menu en haut à droite"]

