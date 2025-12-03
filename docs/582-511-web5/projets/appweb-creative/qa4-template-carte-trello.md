# Template de carte Trello - Rapport de bogue

**Instructions :** Copiez ce template dans une carte Trello pour chaque bug trouvé.



Dans le projet Trello, il (au moins) devrait y avoir ces colonnes (ou équivalent)

- À faire
- En cours
- Prêt à être validé
- *Validé par l'équipe QA*

S'il manque celle nommée *Validé par l'équipe QA*, veuillez la créer.

C'est dans cette colonne que vous ajoutez les cartes de bogues au besoin.

## 📋 TEMPLATE À COPIER DANS UNE CARTE TRELLO

En faire un modèle réutilisable dans Trello.

![Faire un modère avec la carte](../assets/trello-modele-carte.png)

```
🐛 Bug #[Numéro] : [Titre court et descriptif]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRIORITÉ
[Choisir UNE priorité et supprimer les autres]
🔴 CRITIQUE - Bloquant, empêche l'utilisation
🟠 MAJEUR - Impact important sur l'expérience
🟡 MINEUR - Petit problème, amélioration souhaitable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 DESCRIPTION
[Décrivez ce qui ne fonctionne pas]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 COMMENT REPRODUIRE
1. [Étape 1]
2. [Étape 2]  
3. [Étape 3]
4. Observer : [le bug se produit]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ RÉSULTAT ATTENDU
[Ce qui devrait se passer normalement]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ RÉSULTAT ACTUEL
[Ce qui se passe réellement]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ENVIRONNEMENT
Navigateur : [Chrome 120 / Firefox 121 /  Edge 142]
Appareil : [Desktop 1920px / Mobile 375px / Tablette 768px]
OS : [Windows / Mac / Android / iOS]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 SCREENSHOT
[Ajouter en pièce jointe à la carte]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 TROUVÉ PAR
@[Votre nom]

📅 DATE
[Date de découverte]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 STATUT (à remplir par l'équipe qui corrige)
[ ] À faire
[ ] En cours
[ ] Corrigé
[ ] Validé
[ ] Ne sera pas corrigé (Will not fix) (justification : ...)
```

---

## 📚 EXEMPLES CONCRETS

### Exemple 1 : Bogue Critique

```
🐛 Bogue #1 : Upload d'image > 5MB plante l'application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRIORITÉ
🔴 CRITIQUE - Bloquant, empêche l'utilisation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 DESCRIPTION
Quand on téléverse une image de plus de 5 MB, l'application freeze 
complètement et ne répond plus. La page doit être rafraîchie pour 
retrouver l'accès.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 COMMENT REPRODUIRE
1. Aller sur "Ajouter une mémoire"
2. Cliquer sur "Choisir une image"
3. Sélectionner une photo de 8 MB
4. Cliquer "Sauvegarder"
5. Observer : L'app freeze, erreur dans la console

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ RÉSULTAT ATTENDU
Un message d'erreur devrait s'afficher : 
"Image trop grande. Maximum 5 MB autorisé."
L'upload devrait être bloqué avant la sauvegarde.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ RÉSULTAT ACTUEL
L'application freeze complètement.
Erreur console : "QuotaExceededError: LocalStorage quota exceeded"
Aucun message utilisateur.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ENVIRONNEMENT
Navigateur : Chrome 120
Appareil : Desktop 1920px
OS : Windows 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 SCREENSHOT
[capture-console-error.png attachée]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 TROUVÉ PAR
@Marie

📅 DATE
4 décembre 2024

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 STATUT
[X] À faire
[ ] En cours
[ ] Corrigé
[ ] Validé
```

---

### Exemple 2 : Bogue Majeur

```
🐛 Bogue #5 : Navigation au clavier - focus invisible

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRIORITÉ
🟠 MAJEUR - Impact important sur l'expérience

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 DESCRIPTION
Quand on navigue au clavier avec Tab, on ne voit PAS quel élément 
est sélectionné. Aucun outline ou indication visuelle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 COMMENT REPRODUIRE
1. Aller sur la page d'accueil
2. Appuyer sur Tab plusieurs fois
3. Observer : Les éléments se sélectionnent (on peut les activer 
   avec Enter) mais on ne VOIT PAS lequel est sélectionné

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ RÉSULTAT ATTENDU
Un outline visible (bleu, noir, ou autre couleur contrastée) devrait 
apparaître autour de l'élément sélectionné.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ RÉSULTAT ACTUEL
Aucune indication visuelle du focus.
Impossible de savoir où on est dans la page sans cliquer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ENVIRONNEMENT
Navigateur : Chrome 120
Appareil : Desktop
OS : Windows 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 SCREENSHOT
[video-navigation-clavier.gif attachée]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 TROUVÉ PAR
@Alex

📅 DATE
4 décembre 2024

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 SUGGESTION DE FIX
Ajouter dans le CSS :
button:focus, a:focus {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 STATUT
[ ] À faire
[ ] En cours
[ ] Corrigé
[ ] Validé
```

---

## 🎯 GUIDE : Quelle priorité choisir ?

### 🔴 CRITIQUE (Rouge)

**Définition :** Bogue qui EMPÊCHE l'utilisation d'une fonctionnalité majeure

**Exemples :**

- L'application plante/freeze
- Impossible d'ajouter une mémoire (fonctionnalité principale)
- Impossible d'atteindre une fin de l'histoire
- Données perdues/corrompues
- Page blanche (erreur 500)
- Bouton "Sauvegarder" ne fait rien

**Action :** DOIT être corrigé avant la remise finale

---

### 🟠 MAJEUR (Orange)

**Définition :** Bogue qui DÉGRADE significativement l'expérience utilisateur

**Exemples :**

- Navigation au clavier ne fonctionne pas (accessibilité)
- Contraste insuffisant (texte illisible)
- Site cassé sur mobile
- Images très lourdes (chargement lent)
- Formulaire ne valide pas les données
- Recherche ne fonctionne pas

**Action :** Devrait être corrigé avant la remise finale

---

### 🟡 MINEUR (Jaune)

**Définition :** Petit problème ou amélioration souhaitable

**Exemples :**

- Recherche sensible à la casse
- Texte qui déborde légèrement
- Bouton un peu petit
- Message d'erreur pas assez clair
- Faute d'orthographe
- Animation qui saute

**Action :** Corriger si temps disponible

---

## ✅ CHECKLIST AVANT DE CRÉER LA CARTE

Avant de créer une carte Trello pour un bug, vérifiez :

- [ ] C'est un VRAI bug (pas une feature manquante si elle était optionnelle)
- [ ] Ce n'est PAS dans la liste des "problèmes connus" du brief
- [ ] Vous avez essayé de reproduire le bug 2 fois (pour confirmer)
- [ ] Vous avez un screenshot ou vidéo du bug
- [ ] Vous avez noté le navigateur et la taille d'écran
- [ ] Le titre est clair et descriptif
- [ ] Les étapes de reproduction sont précises
- [ ] Vous avez assigné la bonne priorité

---

## 🚫 CE QUI N'EST PAS UN BUG

**Ne créez PAS de carte Trello pour :**

❌ **Feature manquante (si elle était optionnelle)**

- "Pas d'animations GSAP" → Ce n'était pas obligatoire
- "Pas de sauvegarde LocalStorage" → Listé comme optionnel

❌ **Suggestions d'amélioration**

- "Serait cool d'avoir un mode sombre"
- "Pourrait ajouter un tutoriel"
→ Mentionner dans la section "Suggestions" du rapport

❌ **Préférences personnelles**

- "Je n'aime pas cette couleur"
- "Le logo devrait être plus gros"
→ Ce ne sont pas des bugs

❌ **Problèmes déjà connus**

- Si c'est listé dans le brief comme "problème connu"
→ Ne pas le reporter

