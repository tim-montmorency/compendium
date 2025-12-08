# Guide Git - Workflow et Conventions d'Équipe

## 🎯 Objectif

Ce document établit les conventions Git pour votre projet d'équipe. En suivant ces règles, vous éviterez les conflits et maintiendrez un historique propre.

## 🛠️ Outils Utilisés

- **GitHub Desktop** - Pour gérer commits, branches, push/pull
- **VS Code** - Pour coder et résoudre les conflits Git
- **GitHub Web** - Pour créer et merger les Pull Requests

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
| `style` | CSS uniquement | 💄 | `style(header): update nav colors` |
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
⚡ perf(GSAP): optimize animation performance
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

### 1. Créer une nouvelle branche (GitHub Desktop)

**Dans GitHub Desktop:**

1. Cliquer sur **"Current Branch"** en haut
2. Cliquer sur **"New Branch"**
3. Nommer la branche selon la convention:
   - `feature/memory-card`
   - `fix/save-button-bug`
   - `style/header-design`
4. S'assurer que "Create branch based on..." affiche **develop**
5. Cliquer **"Create Branch"**

![Créer une branche dans GitHub Desktop]

**Vous êtes maintenant sur votre nouvelle branche!** ✅

### 2. Travailler et committer (GitHub Desktop)

**Dans VS Code:**
- Faites vos modifications de code
- Sauvegardez vos fichiers (Ctrl+S / Cmd+S)

**Dans GitHub Desktop:**

1. Vous verrez automatiquement les fichiers modifiés dans la colonne de gauche
2. Cochez les fichiers que vous voulez committer (ou laissez tout coché)
3. En bas à gauche, écrivez votre message de commit:
   - **Summary:** `feat(memory): add MemoryCard component`
   - **Description (optionnel):** Détails supplémentaires
4. Cliquer **"Commit to feature/memory-card"**

![Commit dans GitHub Desktop]

**Bonnes pratiques:**
- ✅ Commitez souvent (toutes les 30-60 minutes)
- ✅ Un commit = une petite tâche complétée
- ✅ Messages clairs et descriptifs

### 3. Push vers GitHub (GitHub Desktop)

**Après un ou plusieurs commits:**

1. En haut, cliquez **"Push origin"** (ou **"Publish branch"** si première fois)
2. Attendez que GitHub Desktop confirme l'envoi

![Push dans GitHub Desktop]

**C'est tout!** Vos changements sont maintenant sur GitHub. 🚀

### 4. Mettre à jour votre branche (Pull)

**Avant de commencer à travailler chaque jour:**

**Dans GitHub Desktop:**

1. En haut, cliquez sur **"Fetch origin"** (télécharge les infos)
2. Si des changements existent, cliquez **"Pull origin"**
3. Vos fichiers locaux sont maintenant à jour! ✅

**Faites ceci:**
- ✅ Au début de chaque session de travail
- ✅ Avant de créer une nouvelle branche
- ✅ Avant de merger une Pull Request

### 5. Changer de branche (GitHub Desktop)

**Pour passer d'une branche à une autre:**

1. Cliquer sur **"Current Branch"** en haut
2. Sélectionner la branche dans la liste
   - Branches récentes en haut
   - Toutes les branches plus bas
3. GitHub Desktop change automatiquement les fichiers dans VS Code

⚠️ **Attention:** Commitez ou annulez vos changements avant de changer de branche!

### 6. Créer une Pull Request (GitHub Web)

**Une fois votre feature terminée:**

**Dans GitHub Desktop:**
1. Assurez-vous d'avoir push tous vos commits
2. Cliquez **"Preview Pull Request"** en haut
3. Vérifiez les changements
4. Cliquez **"Create Pull Request"**

**OU sur GitHub.com:**
1. Aller sur le repo GitHub
2. Vous verrez un bandeau jaune: **"Compare & pull request"** - Cliquez dessus
3. Remplissez la Pull Request:

```markdown
**Titre:** Add MemoryCard component

**Description:**
## Changements
- Ajout du composant MemoryCard.vue
- Props: title, description, image, date
- Fonctionnalités: edit, delete

## Tests effectués
- ✅ Affichage correct sur desktop
- ✅ Affichage correct sur mobile
- ✅ Edit fonctionne
- ✅ Delete avec confirmation

## Screenshots
[Optionnel: ajouter une capture d'écran]
```

4. **Base:** `develop` ← **Compare:** `feature/memory-card`
5. Assignez un **reviewer** (membre de l'équipe)
6. Cliquez **"Create pull request"**

### 7. Review de code (GitHub Web + GitHub Desktop)

**Si vous êtes le reviewer:**

**Sur GitHub.com:**
1. Aller dans l'onglet **"Pull requests"**
2. Cliquer sur la PR à reviewer
3. Onglet **"Files changed"** - Voir tous les changements

**Dans GitHub Desktop (pour tester localement):**
1. Cliquer sur **"Current Branch"**
2. Onglet **"Pull Requests"**
3. Sélectionner la PR à tester
4. Cliquer **"Checkout"** - Cela télécharge la branche
5. Tester dans le navigateur (`npm run dev`)

**Sur GitHub.com (après tests):**
- Si OK: **"Approve"** + commenter "LGTM ✅" (Looks Good To Me)
- Si problèmes: **"Request changes"** + expliquer quoi corriger

### 8. Merger la Pull Request (Chef de projet)

**Une fois la PR approuvée:**

**Sur GitHub.com:**
1. Aller sur la Pull Request
2. Vérifier que les tests passent (si configurés)
3. Cliquer **"Merge pull request"**
4. Choisir le type de merge:
   - **"Squash and merge"** ✅ (recommandé - combine tous les commits)
   - "Create a merge commit" (garde tous les commits)
   - "Rebase and merge" (réécrit l'historique)
5. Confirmer le merge
6. Cliquer **"Delete branch"** (nettoie la branche feature)

**Dans GitHub Desktop (pour tous les membres):**
1. Revenir sur la branche **develop**: Current Branch → develop
2. Cliquer **"Fetch origin"**
3. Cliquer **"Pull origin"** - Vous avez maintenant les nouveaux changements!

---

## 🚨 Gestion des Conflits

### Éviter les conflits (prévention):

1. **Pull souvent** - Avant de commencer à travailler
   - Dans GitHub Desktop: **Fetch origin** puis **Pull origin**

2. **Communiquer** - Qui travaille sur quoi?
   - "Je travaille sur le Header.vue" (Teams)
   - Évitez de modifier les mêmes fichiers en même temps

3. **Commits atomiques** - Une feature = une branche
   - Petites branches = moins de conflits
   - Features indépendantes

4. **Merger souvent** - Ne pas laisser une branche vieillir
   - Mergez les PR dès qu'elles sont prêtes
   - Mettez à jour votre branche si develop a changé

### Résoudre un conflit avec VS Code

**Quand un conflit survient:**

**Dans GitHub Desktop:**
- Vous verrez un avertissement: **"⚠️ Resolve conflicts"**
- GitHub Desktop liste les fichiers en conflit

**Dans VS Code:**

1. GitHub Desktop ouvre automatiquement VS Code (ou ouvrez manuellement)
2. Les fichiers en conflit sont marqués avec un **"⚠️"**
3. Ouvrez le fichier en conflit

**Vous verrez quelque chose comme:**
```javascript
<<<<<<< HEAD (votre code actuel)
const title = "Mon titre";
=======
const title = "Nouveau titre";
>>>>>>> develop (code de develop)
```

**Pour résoudre dans VS Code:**

1. VS Code affiche des boutons au-dessus du conflit:
   - **"Accept Current Change"** - Garder votre version
   - **"Accept Incoming Change"** - Garder la version de develop
   - **"Accept Both Changes"** - Garder les deux
   - **"Compare Changes"** - Voir les différences côte à côte

2. Cliquez sur le bouton approprié **OU** modifiez manuellement:
   - Supprimez les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
   - Gardez le code que vous voulez
   - Vous pouvez combiner les deux versions si nécessaire

3. Sauvegardez le fichier (Ctrl+S / Cmd+S)

**De retour dans GitHub Desktop:**

1. Les fichiers résolus n'apparaissent plus en conflit
2. Vous voyez maintenant "Conflicts resolved" ✅
3. En bas, cliquez **"Commit merge"**
4. Push vers GitHub: **"Push origin"**

**Exemple de résolution:**

```javascript
// AVANT (conflit)
<<<<<<< HEAD
const title = "Mon titre";
const subtitle = "Mon sous-titre";
=======
const title = "Nouveau titre";
>>>>>>> develop

// APRÈS (résolu - combiné les deux)
const title = "Nouveau titre";
const subtitle = "Mon sous-titre";
```

### Scénario complet de résolution:

**Situation:** Vous travaillez sur `feature/memory-card`, mais `develop` a été mise à jour.

**Étapes:**

1. **Dans GitHub Desktop:**
   - Current Branch → **develop**
   - **Fetch** puis **Pull** (pour avoir la dernière version)
   - Current Branch → **feature/memory-card** (retour sur votre branche)
   - Menu **Branch** → **Merge into current branch**
   - Sélectionner **develop**
   - Cliquer **"Merge develop into feature/memory-card"**

2. **Si conflit:**
   - GitHub Desktop affiche "⚠️ X conflicted files"
   - Cliquer **"Open in Visual Studio Code"**

3. **Dans VS Code:**
   - Ouvrir chaque fichier en conflit (marqué ⚠️)
   - Résoudre avec les boutons ou manuellement
   - Sauvegarder tous les fichiers

4. **De retour dans GitHub Desktop:**
   - Vérifier que "All conflicts resolved" ✅
   - Cliquer **"Commit merge"**
   - Cliquer **"Push origin"**

5. **C'est résolu!** 🎉

---

## 📋 Checklist Avant de Commit (GitHub Desktop)

Avant chaque commit, vérifiez dans VS Code:

- [ ] Le code fonctionne (`npm run dev` sans erreur)
- [ ] Aucune erreur console dans le navigateur
- [ ] Les fichiers de config (.env) ne sont PAS dans les changements
- [ ] Pas de `console.log()` oubliés
- [ ] Message de commit clair et descriptif

**Dans GitHub Desktop:**
- [ ] Seuls les fichiers pertinents sont cochés
- [ ] Summary bien rempli (type + description)

---

## 🎯 Stratégies par Rôle d'Équipe

### Chef de projet:
**Dans GitHub Desktop:**
- Vérifie régulièrement les branches actives
- Pull develop souvent
- Coordonne les merges

**Sur GitHub.com:**
- Review toutes les PRs
- Merge vers develop après approbation
- À la fin de chaque semaine: merge develop → main

### Développeur (tous):
**Dans GitHub Desktop:**
- Fetch origin au début de chaque session
- Commit 2-3 fois par session
- Push en fin de session
- Crée les PR quand la feature est terminée

**Dans VS Code:**
- Code proprement
- Résout les conflits rapidement
- Teste avant de push

---

## 🔧 Configuration de GitHub Desktop

### Première utilisation:

1. **Télécharger GitHub Desktop:**
   - [desktop.github.com](https://desktop.github.com)
   - Installer l'application

2. **Se connecter:**
   - File → Options (Windows) ou GitHub Desktop → Preferences (Mac)
   - Accounts → Sign in to GitHub.com
   - Autoriser dans le navigateur

3. **Configurer votre identité:**
   - Options/Preferences → Git
   - Vérifier que Name et Email sont corrects

4. **Configurer l'éditeur:**
   - Options/Preferences → Integrations
   - External Editor: **Visual Studio Code**
   - Shell: **Git Bash** (Windows) ou **Terminal** (Mac)

### Cloner un repo:

1. File → **Clone repository**
2. Onglet **GitHub.com**
3. Sélectionner votre repo
4. Choisir où le sauvegarder localement
5. Cliquer **"Clone"**

**Ou avec une URL:**
1. File → Clone repository
2. Onglet **URL**
3. Coller: `https://github.com/username/repo-name.git`
4. Choisir le dossier local
5. Cliquer **"Clone"**

---

## 📊 Vue d'Ensemble GitHub Desktop

### Interface principale:

```
┌────────────────────────────────────────┐
│  Current Branch ▼  │ Fetch/Pull/Push   │
├────────────────────────────────────────┤
│  Changes (12)                          │
│  ☑ src/components/Header.vue          │
│  ☑ src/stores/museumStore.js          │
│  ☐ package-lock.json                  │
│                                         │
│  [Diff view - aperçu des changements] │
├────────────────────────────────────────┤
│  Summary (required)                    │
│  feat(header): add navigation          │
│                                         │
│  Description                           │
│  Added responsive navigation menu      │
│                                         │
│  [ Commit to feature/header ]          │
└────────────────────────────────────────┘
```

### Colonnes:

**Gauche:** 
- Liste des fichiers modifiés
- Cocher/décocher pour inclure dans le commit

**Centre:**
- Aperçu des changements (diff)
- Lignes vertes = ajouts
- Lignes rouges = suppressions

**Bas:**
- Écrire le message de commit
- Bouton pour committer

---

## 💡 Bonnes Pratiques avec GitHub Desktop

### DO ✅

1. **Fetch souvent** - Bouton en haut à droite, au moins au début de chaque session
2. **Commit atomiques** - Un commit = une petite tâche (30-60 min de travail)
3. **Messages clairs** - Utilisez la convention `type(scope): description`
4. **Vérifier avant de commit** - Décochez les fichiers non pertinents
5. **Push régulièrement** - À la fin de chaque session de travail
6. **Branches courtes** - Feature terminée? Créez une PR tout de suite

### DON'T ❌

1. ❌ Ne jamais commit directement sur `main` (utilisez `develop`)
2. ❌ Ne pas push du code qui ne compile pas
3. ❌ Ne pas oublier de Fetch/Pull avant de commencer
4. ❌ Ne pas laisser 50 fichiers modifiés sans commit
5. ❌ Ne pas commit les `node_modules/` ou `.env`
6. ❌ Ne pas ignorer les avertissements de GitHub Desktop

---

## 🆘 Problèmes Courants et Solutions

### "GitHub Desktop ne voit pas mes changements"

**Solution:**
1. Vérifiez que vous êtes dans le bon repo (en haut à gauche)
2. Vérifiez que VS Code a bien sauvegardé (Ctrl+S / Cmd+S)
3. Rafraîchissez: Repository → Show in Explorer/Finder

### "Je ne peux pas changer de branche"

**Solution:**
1. Vous avez des changements non commités
2. Options:
   - **Committer** les changements d'abord
   - **Stash** (mettre de côté): Branch → Stash all changes
   - **Discard** (annuler): Right-click → Discard changes

### "Push origin est grisé"

**Solution:**
1. Vous devez d'abord faire un commit
2. Ou alors vous êtes déjà à jour (rien à push)

### "Fetch origin ne fait rien"

**Solution:**
- C'est normal! Fetch télécharge juste les infos
- Si des changements existent, le bouton devient "Pull origin"

### "Conflits trop compliqués"

**Solution:**
1. Dans GitHub Desktop: Branch → Abort merge
2. Demandez de l'aide à un coéquipier ou l'enseignant
3. Ou contactez le chef de projet

---

## 📈 Métriques de Succès

**Indicateurs d'une bonne utilisation:**

- ✅ 3-5 commits par personne par jour de travail
- ✅ Fetch/Pull au moins 1 fois par jour
- ✅ Branches mergées en moins de 3 jours
- ✅ Messages de commit clairs et descriptifs
- ✅ Aucun fichier `.env` ou `node_modules/` committé

**Red flags:**

- 🚨 Une personne fait 90% des commits
- 🚨 Commits avec message "update" ou "test"
- 🚨 Branches ouvertes depuis 1 semaine sans commit
- 🚨 Push d'un seul coup après 2 jours de travail
- 🚨 Conflits constants

---

## 🎓 Tutoriels Vidéo Recommandés

- **GitHub Desktop Basics** - [YouTube](https://www.youtube.com/results?search_query=github+desktop+tutorial+français)
- **Resolving Conflicts in VS Code** - [YouTube](https://www.youtube.com/results?search_query=vscode+resolve+git+conflicts)
- **Pull Requests Explained** - [GitHub Docs](https://docs.github.com/en/pull-requests)

---

## ✅ Checklist de Setup Initial

**Première rencontre d'équipe:**

- [ ] Tout le monde a installé GitHub Desktop
- [ ] Tout le monde s'est connecté à GitHub
- [ ] Configuration de l'identité Git (Name + Email)
- [ ] VS Code configuré comme éditeur externe
- [ ] Repo cloné sur tous les ordinateurs
- [ ] Tout le monde voit les branches `main` et `develop`
- [ ] Test: chacun crée une branche de test et commit
- [ ] Conventions de nommage définies (ce document!)

---

**Version 2.0 - GitHub Desktop Edition 🚀** Ne pas utiliser `git push --force` (sauf urgence)

---

## 📈 Métriques de Succès Git

**Indicateurs d'une bonne collaboration:**

- ✅ 3-5 commits par personne par jour de travail
- ✅ Branches mergées en moins de 3 jours
- ✅ Pull Requests revues dans les 24h
- ✅ Aucun conflit majeur
- ✅ Historique de commits lisible
- ✅ Aucun fichier sensible committé

**Red flags:**

- 🚨 Une personne fait 90% des commits
- 🚨 Commits avec message "update" ou "fix"
- 🚨 Branches ouvertes depuis 1 semaine
- 🚨 Conflits constants
- 🚨 `.env` dans le repo

---

## 🎓 Ressources Supplémentaires

### Aide-mémoire:

```bash
# Commandes essentielles quotidiennes
git status                    # Voir l'état
git pull origin develop      # Mettre à jour
git checkout -b feature/nom  # Nouvelle branche
git add .                    # Ajouter fichiers
git commit -m "message"      # Commit
git push origin feature/nom  # Push

# Commandes de navigation
git branch                   # Voir les branches locales
git branch -a                # Voir toutes les branches
git checkout nom-branche     # Changer de branche
git log --oneline            # Voir l'historique

# Commandes de synchronisation
git fetch origin             # Récupérer les infos du remote
git pull origin develop      # Fetch + merge
git push origin ma-branche   # Envoyer au remote
```

### Tutoriels:
- [Git et GitHub pour débutants](https://www.youtube.com/watch?v=RGOj5yH7evk) (français)
- [Learn Git Branching](https://learngitbranching.js.org/) (interactif)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

### Outils visuels:
- **GitKraken** - Interface graphique pour Git
- **GitHub Desktop** - Application GitHub officielle
- **VS Code Git Graph** - Extension pour visualiser l'historique

---

## 🎯 Template de Message de Commit

Copiez ce template dans un fichier `.gitmessage` à la racine:

```
# <type>(<scope>): <sujet> (max 50 caractères)
#
# <corps optionnel> (wrappé à 72 caractères)
#
# <footer optionnel>
#
# Types:
#   feat     Nouvelle fonctionnalité
#   fix      Correction de bug
#   docs     Documentation
#   style    Formatage, CSS
#   refactor Refactoring du code
#   test     Tests
#   chore    Maintenance
#   perf     Performance
#
# Scope (exemples):
#   memory, room, save, ui, router, store
#
# Exemples:
#   feat(memory): add delete confirmation modal
#   fix(save): resolve quota exceeded error
#   style(header): update navigation colors
```

**Pour utiliser:**
```bash
git config commit.template .gitmessage
```

---

## 📞 Qui Contacter en Cas de Problème?

**Problèmes Git légers:**
- Demandez à votre équipe d'abord
- Consultez ce guide
- Recherchez sur Google/Stack Overflow

**Problèmes Git sérieux:**
- Chef de projet de l'équipe
- Enseignant pendant les heures de cours
- Canal Teams de la classe

**Avant de demander de l'aide, préparez:**
1. Description du problème
2. Commandes que vous avez tapées
3. Messages d'erreur (copier-coller complet)
4. Capture d'écran si pertinent

---

## ✅ Checklist de Setup Initial (À faire en équipe)

**Première rencontre d'équipe:**

- [ ] Créer le repo GitHub (un membre)
- [ ] Inviter tous les membres comme collaborateurs
- [ ] Créer la branche `develop`
- [ ] Protéger la branche `main` (settings GitHub)
- [ ] Ajouter le `.gitignore`
- [ ] Définir les conventions de nommage (ce document!)
- [ ] Installer Git sur tous les ordinateurs
- [ ] Cloner le repo (tous les membres)
- [ ] Tester un commit chacun sur `develop`
- [ ] Créer le project board (GitHub Projects/Trello)

**Configuration Git locale (chaque membre):**

```bash
# Configurer nom et email
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Configurer l'éditeur par défaut
git config --global core.editor "code --wait"  # VS Code

# Activer les couleurs
git config --global color.ui auto

# Vérifier la config
git config --list
```

---

**Version 1.0 - Bon travail d'équipe! 🚀**