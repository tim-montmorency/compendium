# Phase contrôle qualité (QA)

Ce guide vous aide à tester votre application de manière structurée et professionnelle avant la remise finale. 

Pas besoin de tests unitaires ou de test d'intégrations complexes - on se concentre sur des tests manuels pratiques et efficaces.

---

## Objectifs de cette phase

1. **Identifier et corriger les bugs** avant que l'enseignant ou les utilisateurs les trouvent
2. **Valider l'accessibilité de base** pour que tout le monde puisse utiliser votre app
3. **Optimiser les performances** pour une expérience fluide
4. **Documenter ce qui fonctionne et ce qui ne fonctionne pas** (transparence)

---

## ✅ Checklist Générale de Tests

### 1. Tests de Fonctionnalité de Base

#### Pour "Mémoires Interactives"

- [ ] **Navigation entre salles** : Je peux accéder à toutes les salles
- [ ] **Ajout de mémoire** : Le formulaire fonctionne et sauvegarde correctement
- [ ] **Édition de mémoire** : Je peux modifier une mémoire existante
- [ ] **Suppression de mémoire** : La suppression fonctionne (avec ou sans confirmation)
- [ ] **Affichage des mémoires** : Toutes les mémoires s'affichent correctement
- [ ] **Upload d'images** : Les images se téléchargent et s'affichent
- [ ] **Tags** : Je peux ajouter des tags aux mémoires
- [ ] **Filtres/Recherche** : Les filtres et la recherche fonctionnent correctement

#### Pour "Trace ton Chemin"

- [ ] **Navigation entre chapitres** : Je peux passer d'un chapitre à l'autre
- [ ] **Affichage du texte** : Le texte s'affiche correctement et est lisible
- [ ] **Système de choix** : Les boutons de choix fonctionnent
- [ ] **Branches narratives** : Mes choix mènent aux bons chapitres
- [ ] **Toutes les fins** : J'ai testé et atteint chaque fin possible
- [ ] **Tracking** : Le système de karma/flags/inventaire fonctionne (si applicable)
- [ ] **Historique** : L'historique des décisions se remplit correctement (si applicable)
- [ ] **Pas de dead-end** : Aucun chapitre ne mène à une impasse

---

## 🧪 Tests par Navigateur et Appareil

### Navigateurs à tester (minimum)
- [ ] **Chrome** (ou Edge - même moteur)
- [ ] **Firefox**
- [ ] **Safari** (si vous avez accès à un Mac/iPhone)

### Appareils à tester
- [ ] **Desktop** (1920x1080 ou votre résolution)
- [ ] **Tablette** (768px - utilisez les DevTools de Chrome)
- [ ] **Mobile** (375px - utilisez les DevTools de Chrome)

### Comment tester avec Chrome DevTools
1. Ouvrez votre site dans Chrome
2. F12 ou clic droit > Inspecter
3. Cliquez sur l'icône de téléphone/tablette (Toggle device toolbar)
4. Sélectionnez différentes tailles d'écran dans le menu déroulant
5. Testez TOUTES les fonctionnalités principales à chaque taille

---

## ♿ Accessibilité - Les Bases Essentielles

### 1. Navigation au clavier
**Pourquoi ?** Certaines personnes n'utilisent pas de souris (handicap, préférence, etc.)

**Tests à faire :**
- [ ] **Tab** : Je peux naviguer entre TOUS les éléments interactifs avec Tab
- [ ] **Shift+Tab** : Je peux revenir en arrière
- [ ] **Enter/Space** : Je peux activer les boutons avec Enter ou Espace
- [ ] **Indicateur visuel** : Je VOIS clairement quel élément est sélectionné (outline visible)

**Comment corriger si ça ne fonctionne pas :**
```css
/* N'enlevez JAMAIS le outline par défaut sans le remplacer ! */
/* ❌ MAUVAIS */
button:focus { outline: none; }

/* ✅ BON */
button:focus {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}
```

### 2. Contraste des couleurs
**Pourquoi ?** Les personnes avec une vision réduite doivent pouvoir lire votre texte.

**Règle simple :**
- Texte normal : ratio de **4.5:1** minimum
- Texte large (18px+) : ratio de **3:1** minimum

**Outils pour tester :**
1. **WebAIM Contrast Checker** : https://webaim.org/resources/contrastchecker/
2. Copiez votre couleur de texte et de fond
3. Vérifiez si ça passe le test AA

**Exemple :**
- ❌ Texte gris clair (#CCCCCC) sur fond blanc (#FFFFFF) = mauvais contraste
- ✅ Texte gris foncé (#333333) sur fond blanc (#FFFFFF) = bon contraste

### 3. Textes alternatifs pour les images
**Pourquoi ?** Les lecteurs d'écran lisent ces descriptions aux personnes non-voyantes.

```html
<!-- ❌ MAUVAIS -->
<img src="photo-paris.jpg">

<!-- ✅ BON -->
<img src="photo-paris.jpg" alt="Vue de la Tour Eiffel au coucher du soleil">

<!-- ✅ BON pour image décorative (laissez alt vide, pas absent) -->
<img src="decoration.svg" alt="">
```

**Pour vos projets :**
- **Mémoires** : Chaque mémoire avec image doit avoir un alt descriptif
- **Trace ton chemin** : Images de fond ou d'ambiance peuvent avoir alt=""

### 4. Labels pour les formulaires
**Pourquoi ?** Les lecteurs d'écran doivent savoir à quoi sert chaque champ.

```html
<!-- ❌ MAUVAIS -->
<input type="text" placeholder="Titre">

<!-- ✅ BON -->
<label for="titre">Titre de la mémoire</label>
<input type="text" id="titre" placeholder="Ex: Mon voyage à Paris">
```

### 5. Messages d'erreur clairs
```html
<!-- ✅ BON EXEMPLE -->
<form>
  <label for="email">Courriel</label>
  <input type="email" id="email" required>
  <span class="error" role="alert">
    Veuillez entrer un courriel valide (ex: nom@exemple.com)
  </span>
</form>
```

### 6. Zones de clic suffisamment grandes
**Règle simple :** Minimum 44x44 pixels pour les boutons et liens (recommandation WCAG)

```css
/* ✅ BON */
button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}
```

---

## 🚀 Optimisation des Performances

### 1. Compression des images

**Problème courant :** Images de 5-10 MB qui ralentissent le chargement

**Solutions :**

#### Option A : Outils en ligne (le plus simple)
- **TinyPNG** : https://tinypng.com/
  - Glissez-déposez vos images
  - Téléchargez les versions compressées
  - Qualité excellente, taille réduite de 50-70%

- **Squoosh** : https://squoosh.app/
  - Plus de contrôle sur la compression
  - Comparaison avant/après en direct

#### Option B : Outils locaux
- **ImageOptim** (Mac) : gratuit, drag & drop
- **RIOT** (Windows) : gratuit, très efficace

**Recommandations par type d'image :**
- **Photos** : JPEG, qualité 75-85%
- **Illustrations/logos** : PNG ou WebP
- **Icônes simples** : SVG (déjà optimal)

**Tailles cibles :**
- Image plein écran : max 500 KB
- Image de carte/vignette : max 150 KB
- Image d'arrière-plan : max 300 KB

### 2. Lazy Loading des images

```html
<!-- ✅ Ajoutez loading="lazy" pour les images hors écran -->
<img src="grande-image.jpg" alt="Description" loading="lazy">
```

### 3. Vérification des performances

**Outil : Lighthouse dans Chrome DevTools**

1. Ouvrez DevTools (F12)
2. Onglet "Lighthouse"
3. Cochez "Performance" et "Accessibility"
4. Cliquez "Generate report"
5. Visez un score > 70 sur mobile

**Points critiques à surveiller :**
- [ ] **First Contentful Paint** : < 2 secondes
- [ ] **Largest Contentful Paint** : < 2.5 secondes
- [ ] **Time to Interactive** : < 3.5 secondes

### 4. Optimisation du code

**À vérifier :**
- [ ] Pas de `console.log()` partout dans le code final
- [ ] Pas d'imports inutilisés
- [ ] Pas de composants chargés mais non utilisés

```bash
# Nettoyer les imports inutilisés (si vous utilisez ESLint)
npm run lint -- --fix
```

---

## 🐛 Tests de Cas Limites (Edge Cases)

### Tests à faire absolument

#### Pour les formulaires
- [ ] **Champs vides** : Que se passe-t-il si je soumets un formulaire vide ?
- [ ] **Caractères spéciaux** : Testez avec des émojis, accents, apostrophes : `L'été à Montréal 🌞`
- [ ] **Texte très long** : Que se passe-t-il si je tape 1000 caractères ?
- [ ] **Images énormes** : Que se passe-t-il si j'uploade une image de 20 MB ? (devrait être bloqué)

#### Pour la navigation
- [ ] **Bouton retour du navigateur** : Est-ce que ça fonctionne correctement ?
- [ ] **Rafraîchir la page (F5)** : Est-ce que je perds mes données ?
- [ ] **URL directe** : Si je copie-colle l'URL d'une salle/chapitre, ça fonctionne ?

#### Pour "Trace ton Chemin" spécifiquement
- [ ] **Chaque branche narrative** : Testez TOUS les chemins possibles
- [ ] **Chaque fin** : Vérifiez que chaque fin est atteignable
- [ ] **Dead ends** : Assurez-vous qu'aucun chapitre ne mène nulle part

---

## 📊 Créer votre Rapport de Contrôle Qualité

### Structure recommandée du rapport

```markdown
# Rapport de Contrôle Qualité - [Nom du Projet]

## 1. Informations générales
- **Nom de l'équipe :** [Nom]
- **Projet :** [Mémoires interactives / Trace ton chemin]
- **Date des tests :** [Date]
- **Testeurs :** [Noms des membres]

## 2. Environnements testés
- [x] Chrome (version X)
- [x] Firefox (version X)
- [ ] Safari (non testé - pas d'accès Mac)
- [x] Mobile (375px via DevTools)
- [x] Tablette (768px via DevTools)
- [x] Desktop (1920px)

## 3. Résultats des tests fonctionnels

### Navigation (5/5 tests passés ✅)
- ✅ Navigation entre les salles/chapitres fonctionne
- ✅ Bouton retour du navigateur fonctionne
- ✅ URLs directes fonctionnent
- ✅ Menu responsive fonctionne
- ✅ Pas de lien brisé

### Formulaires (4/5 tests passés ⚠️)
- ✅ Ajout de données fonctionne
- ✅ Édition fonctionne
- ✅ Suppression fonctionne
- ✅ Validation des champs obligatoires
- ❌ BUG: Upload d'image > 5MB plante l'app

## 4. Accessibilité

### Navigation au clavier (3/4 tests passés ⚠️)
- ✅ Tab fonctionne sur tous les boutons
- ✅ Enter/Space activent les boutons
- ❌ PROBLÈME: Focus visible manquant sur certains liens
- ✅ Skip links présents (si applicable)

### Contraste (5/5 tests passés ✅)
- ✅ Texte principal : 7.2:1 (excellent)
- ✅ Titres : 5.8:1 (bon)
- ✅ Boutons : 4.9:1 (conforme)
- ✅ Liens : 4.6:1 (conforme)
- ✅ Texte sur images : bon contraste

### Images et média (2/3 tests passés ⚠️)
- ✅ Toutes les images ont un attribut alt
- ❌ PROBLÈME: Certains alt sont vides alors que l'image est informative
- ✅ Vidéos ont des contrôles (si applicable)

## 5. Performance

### Lighthouse Score
- **Performance :** 78/100 (bon)
- **Accessibilité :** 85/100 (bon)
- **Best Practices :** 92/100 (excellent)

### Temps de chargement
- **Page d'accueil :** 1.2s (excellent ✅)
- **Salle avec images :** 3.8s (à améliorer ⚠️)
- **Chapitre texte :** 0.8s (excellent ✅)

### Taille des assets
- **Images :** Total 4.2 MB (avant compression)
- **Après compression :** 1.8 MB (économie de 57% ✅)

## 6. Bugs identifiés et leur priorité

### 🔴 CRITIQUES (bloquants)
1. **Upload d'image > 5MB plante l'application**
   - **Comment reproduire :** Téléverser une photo > 5MB
   - **Correction prévue :** Ajouter validation côté client
   - **Statut :** En cours de correction

### 🟠 MAJEURS (impactent l'expérience)
2. **Focus keyboard invisible sur les liens**
   - **Impact :** Navigation au clavier difficile
   - **Correction prévue :** Ajouter style :focus visible
   - **Statut :** À faire

3. **Temps de chargement long sur la galerie**
   - **Impact :** Attente de 3-4 secondes
   - **Correction prévue :** Lazy loading + compression
   - **Statut :** Compression faite, lazy loading à ajouter

### 🟡 MINEURS (améliorations souhaitables)
4. **Alt text manquant sur 3 images décoratives**
   - **Impact :** Lecteur d'écran lit le nom de fichier
   - **Correction prévue :** Ajouter alt=""
   - **Statut :** À faire

5. **Bouton "Retour" pas assez contrasté**
   - **Impact :** Légèrement difficile à voir
   - **Correction prévue :** Augmenter le contraste
   - **Statut :** À faire

## 7. Tests des cas limites

### Formulaires avec données inhabituelles
- ✅ Émojis dans le titre : fonctionne
- ✅ Texte de 1000 caractères : fonctionne
- ⚠️ Caractères spéciaux (', ", <, >) : apostrophe pose problème

### Navigation inhabituelle
- ✅ Bouton retour : fonctionne
- ✅ F5 (refresh) : fonctionne
- ✅ URL directe : fonctionne

### Pour "Trace ton Chemin" (si applicable)
- ✅ Toutes les fins testées : 5/5 atteignables
- ✅ Toutes les branches testées : aucun dead-end
- ✅ Historique fonctionne correctement

## 8. Plan de corrections (priorisé)

### Avant la remise finale (obligatoire)
1. ✅ Compresser toutes les images (FAIT)
2. [ ] Corriger le bug d'upload > 5MB
3. [ ] Ajouter focus visible sur les liens
4. [ ] Corriger le problème d'apostrophe dans les formulaires

### Si le temps le permet (bonus)
5. [ ] Ajouter lazy loading sur les images
6. [ ] Améliorer les alt text des images
7. [ ] Augmenter le contraste du bouton "Retour"

## 9. Recommandations pour l'avenir
- Tester avec de vrais utilisateurs externes
- Utiliser un validateur HTML pour détecter les erreurs
- Automatiser la compression d'images dans le workflow
- Mettre en place des tests de régression

## 10. Conclusion
Le projet est **fonctionnel et prêt pour la remise** avec quelques corrections mineures à apporter. La majorité des fonctionnalités fonctionnent correctement, l'accessibilité de base est respectée, et les performances sont acceptables après compression des images.

**Temps estimé pour corrections critiques :** 3-4 heures
**Statut global :** ✅ Prêt (avec corrections mineures)
```

---

## 🛠️ Outils Pratiques Recommandés

### Pour l'accessibilité
- **WAVE** (extension Chrome) : https://wave.webaim.org/extension/
  - Identifie visuellement les problèmes d'accessibilité sur votre page
  
- **axe DevTools** (extension Chrome) : https://www.deque.com/axe/devtools/
  - Tests d'accessibilité automatisés directement dans les DevTools

- **Contraste de couleurs** : https://webaim.org/resources/contrastchecker/

### Pour les performances
- **Lighthouse** (intégré à Chrome DevTools)
- **TinyPNG** : https://tinypng.com/
- **Squoosh** : https://squoosh.app/

### Pour tester sur mobile (sans appareil)
- **Chrome DevTools** (F12 > Toggle device toolbar)
- **Responsive Viewer** (extension Chrome) : teste plusieurs tailles en même temps

### Pour valider le HTML
- **W3C Validator** : https://validator.w3.org/
  - Copier-coller votre HTML ou entrer l'URL

---

## 📝 Checklist Finale Avant Remise

- [ ] Tous les bugs critiques sont corrigés
- [ ] Le site fonctionne sur Chrome ET Firefox minimum
- [ ] Le site est responsive (mobile, tablette, desktop)
- [ ] La navigation au clavier fonctionne avec focus visible
- [ ] Toutes les images ont un attribut alt approprié
- [ ] Le contraste des couleurs est suffisant (testé avec outil)
- [ ] Les images sont compressées (< 500 KB par image)
- [ ] Pas de console.log() ou code de debug dans le code final
- [ ] Le rapport QA est complet et honnête
- [ ] README.md est à jour avec les instructions
- [ ] Le site est déployé et l'URL fonctionne

---

## 💡 Conseil Final

**Soyez honnêtes dans votre rapport !** 

L'objectif n'est pas d'avoir un projet parfait, mais de démontrer que vous avez :

1. **Testé rigoureusement** votre application
2. **Identifié** les problèmes
3. **Priorisé** les corrections
4. **Documenté** votre démarche

Un projet avec quelques bugs mineurs bien documentés vaut mieux qu'un projet "parfait" qui n'a pas été testé. La transparence est une qualité professionnelle importante.
