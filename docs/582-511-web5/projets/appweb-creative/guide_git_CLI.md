# Guide Git - Workflow et Conventions d'Équipe

## 🎯 Objectif

Ce document établit les conventions Git pour votre projet d'équipe. En suivant ces règles, vous éviterez les conflits et maintiendrez un historique propre.

---

## 🌳 Structure des Branches

### Branches principales (permanentes)

```
main (ou master)
└── develop
```

**`main`** - Branche de production
- ✅ Code stable et fonctionnel uniquement
- ✅ Déployé automatiquement (Netlify/Vercel)
- ❌ Ne jamais commit directement dessus
- ❌ Merge seulement depuis `develop` via Pull Request

**`develop`** - Branche de développement
- ✅ Intégration de toutes les features
- ✅ Code testé et qui fonctionne
- ❌ Ne pas commit du code cassé
- ✅ Base pour créer les branches de feature

### Branches temporaires (supprimées après merge)

```
develop
├── feature/nom-de-la-feature
├── fix/nom-du-bug
└── docs/nom-de-la-doc
```

**Types de branches:**

1. **`feature/`** - Nouvelles fonctionnalités
   - Exemple: `feature/memory-card-component`
   - Exemple: `feature/chapter-navigation`

2. **`fix/`** - Corrections de bugs
   - Exemple: `fix/save-button-not-working`
   - Exemple: `fix/animation-lag-mobile`

3. **`docs/`** - Documentation uniquement
   - Exemple: `docs/update-readme`
   - Exemple: `docs/add-installation-guide`

---

## 📝 Convention de Nommage des Commits

### Format standard:
```
<type>(<scope>): <description courte>

[Corps optionnel - détails]

[Footer optionnel - issues, breaking changes]
```

### Types de commits:

| Type | Usage | Emoji | Exemple |
|------|-------|-------|---------|
| `feat` | Nouvelle fonctionnalité | ✨ | `feat(memory): add delete button` |
| `fix` | Correction de bug | 🐛 | `fix(save): resolve localStorage quota error` |
| `style` | CSS/SCSS uniquement | 💄 | `style(header): update nav colors` |
| `refactor` | Refactoring du code | ♻️ | `refactor(store): simplify actions logic` |
| `docs` | Documentation | 📝 | `docs(readme): add installation steps` |
| `test` | Tests | ✅ | `test(memory): add unit tests` |
| `chore` | Maintenance | 🔧 | `chore(deps): update vue to 3.4.0` |
| `perf` | Performance | ⚡ | `perf(images): compress background images` |

### Scope (optionnel mais recommandé):

**Pour Option A (Mémoires):**
- `memory` - Fonctionnalités de mémoires
- `room` - Fonctionnalités de salles
- `search` - Système de recherche
- `save` - Sauvegarde LocalStorage
- `ui` - Composants UI généraux

**Pour Option B (Choisis ta Voie):**
- `chapter` - Fonctionnalités de chapitres
- `choice` - Système de choix
- `save` - Système de sauvegarde
- `story` - Logique narrative
- `ui` - Composants UI généraux

### Exemples de bons commits:

```bash
✨ feat(memory): add image upload feature
🐛 fix(router): resolve navigation error on mobile
💄 style(card): update hover animation
♻️ refactor(store): split into multiple stores
📝 docs(readme): add project description
🔧 chore(eslint): configure rules
⚡ perf(gsap): optimize animation performance
```

### Exemples de mauvais commits (à éviter):

```bash
❌ "update"
❌ "fix bug"
❌ "working on stuff"
❌ "asdfasdf"
❌ "Final version"
❌ "Changes"
```

---

## 🔄 Workflow Git Complet

### 1. Créer une nouvelle branche

```bash
# S'assurer d'être sur develop et à jour
git checkout develop
git pull origin develop

# Créer une nouvelle branche
git checkout -b feature/memory-card

# Vérifier sur quelle branche on est
git branch
```

### 2. Travailler sur la branche

```bash
# Faire vos modifications...

# Voir les fichiers modifiés
git status

# Ajouter les fichiers
git add src/components/MemoryCard.vue
# OU ajouter tous les fichiers modifiés
git add .

# Committer avec un message clair
git commit -m "feat(memory): add MemoryCard component with props"

# Push vers GitHub
git push origin feature/memory-card
```

### 3. Commits réguliers (recommandé)

```bash
# Après chaque petite tâche complétée (~30 min de travail)
git add .
git commit -m "feat(memory): add edit functionality"
git push origin feature/memory-card

# Continuer à travailler...
git add .
git commit -m "style(memory): add hover effects"
git push origin feature/memory-card
```

### 4. Créer une Pull Request

**Sur GitHub:**
1. Aller sur le repo GitHub
2. Cliquer sur "Pull requests" → "New pull request"
3. Base: `develop` ← Compare: `feature/memory-card`
4. Titre clair: "Add MemoryCard component"
5. Description détaillée:
   ```markdown
   ## Changements
   - Ajout du composant MemoryCard.vue
   - Props: title, description, image, date
   - Fonctionnalités: edit, delete
   
   ## Tests effectués
   - ✅ Affichage correct
   - ✅ Edit fonctionne
   - ✅ Delete avec confirmation
   
   ## Screenshots
   [Ajouter screenshot si pertinent]
   ```
6. Assigner un reviewer (membre de l'équipe)
7. Créer la PR

### 5. Review de code

**Reviewer (autre membre):**
```bash
# Récupérer la branche pour tester
git fetch origin
git checkout feature/memory-card

# Tester localement
npm run dev

# Si OK: Approuver sur GitHub
# Si problèmes: Demander des modifications
```

### 6. Merger la Pull Request

**Une fois approuvée:**
1. Sur GitHub, cliquer "Merge pull request"
2. Choisir "Squash and merge" (recommandé) ou "Merge commit"
3. Confirmer le merge
4. Supprimer la branche feature/memory-card

**Localement:**
```bash
# Retourner sur develop
git checkout develop

# Mettre à jour avec les derniers changements
git pull origin develop

# Supprimer la branche locale (optionnel)
git branch -d feature/memory-card
```

---

## 🚨 Gestion des Conflits

### Éviter les conflits (prévention):

1. **Pull souvent** - Avant de commencer à travailler
```bash
git checkout develop
git pull origin develop
```

2. **Communiquer** - Qui travaille sur quoi?
   - Utilisez Discord/Teams pour dire "Je travaille sur le header"
   - Évitez de modifier les mêmes fichiers en même temps

3. **Commits atomiques** - Une feature = une branche
   - Ne pas tout mettre dans une énorme branche
   - Petites branches = moins de conflits

4. **Merger souvent** - Ne pas laisser une branche vieillir
   - Mergez vos PR dès qu'elles sont prêtes
   - Mettez à jour votre branche régulièrement

### Résoudre un conflit:

**Si Git vous dit qu'il y a un conflit:**

```bash
# 1. Mettre à jour develop
git checkout develop
git pull origin develop

# 2. Retourner sur votre branche
git checkout feature/ma-feature

# 3. Merger develop dans votre branche
git merge develop

# Git va afficher les fichiers en conflit
```

**Dans le fichier en conflit, vous verrez:**
```javascript
<<<<<<< HEAD (votre code)
const title = "Mon titre";
=======
const title = "Nouveau titre";
>>>>>>> develop (code de develop)
```

**Résolution:**
1. Ouvrir le fichier dans VS Code
2. Choisir quelle version garder (ou combiner)
3. Supprimer les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
4. Sauvegarder le fichier
5. Committer la résolution:
```bash
git add .
git commit -m "fix: resolve merge conflict in Header.vue"
git push origin feature/ma-feature
```

---

## 📋 Checklist Avant de Commit

Avant chaque commit, vérifiez:

- [ ] Le code fonctionne (`npm run dev` sans erreur)
- [ ] Aucune erreur console
- [ ] Les fichiers de config (.env) ne sont PAS inclus
- [ ] Pas de `console.log()` inutiles
- [ ] ESLint passe (si configuré)
- [ ] Message de commit clair et descriptif

---

## 🎯 Stratégies par Rôle d'Équipe

### Chef de projet:
```bash
# Responsable de review les PRs
# Merge vers develop après approbation
# Gère les releases vers main
```

**Workflow:**
1. Review toutes les PR
2. Teste localement avant de merger
3. Merge vers `develop` régulièrement
4. À la fin de chaque semaine: merge `develop` → `main`

### Développeur (Architecture):
```bash
# Travaille sur les stores, router, structure
# Branches: feature/store-*, feature/router-*
```

**Convention de branches:**
- `feature/store-museum` - Store du musée
- `feature/router-setup` - Configuration router
- `feature/component-structure` - Structure composants

### Développeur (Design):
```bash
# Travaille sur les styles et animations
# Branches: style/*, feature/animation-*
```

**Convention de branches:**
- `style/header-navigation` - Styles du header
- `feature/animation-transitions` - Animations GSAP
- `style/responsive-mobile` - Responsive

### Développeur (Données):
```bash
# Travaille sur LocalStorage, validation
# Branches: feature/save-*, fix/validation-*
```

**Convention de branches:**
- `feature/save-system` - Système de sauvegarde
- `feature/validation-forms` - Validation formulaires
- `fix/localstorage-quota` - Bug de quota

---

## 🔧 Configuration Recommandée

### `.gitignore`

Créez un fichier `.gitignore` à la racine du projet:

```gitignore
# Dependencies
node_modules/

# Build files
dist/
dist-ssr/

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
.nyc_output/

# Misc
.cache/
```

### `.vscode/settings.json` (optionnel)

Pour harmoniser l'équipe:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 📊 Exemple de Timeline Git (Semaine Type)

```
Lundi:
  Chef: Crée les branches pour la semaine
  ├── feature/memory-list (Personne A)
  ├── style/card-design (Personne B)
  └── feature/validation (Personne C)

Mardi-Jeudi:
  Chacun travaille sur sa branche
  - Commits réguliers (2-3 par jour)
  - Push quotidien

Vendredi:
  9h: Tout le monde push les derniers changements
  10h: Création des Pull Requests
  11h: Review croisée des PRs
  14h: Merge approuvées → develop
  15h: Test de develop ensemble
  16h: Si OK → Merge develop → main (release hebdomadaire)
```

---

## 🆘 Commandes d'Urgence

### "J'ai commit sur la mauvaise branche!"

```bash
# Si pas encore push
git reset HEAD~1  # Annule le dernier commit (garde les changements)
git stash         # Met les changements de côté
git checkout bonne-branche
git stash pop     # Récupère les changements
git add .
git commit -m "..."
```

### "J'ai besoin d'annuler mes changements!"

```bash
# Annuler les modifications non commitées
git restore .

# Revenir au dernier commit (ATTENTION: perte de données!)
git reset --hard HEAD
```

### "Ma branche est trop vieille, je dois la mettre à jour!"

```bash
git checkout ma-branche
git fetch origin
git