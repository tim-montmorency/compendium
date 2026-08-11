# Exercice - Démarrer TON jeu

> Exercice du [cours 5](../cours05.md)

!!! info "Pendant les validations"
    Je rencontre chaque élève ~5 minutes pour valider (et verrouiller) son GDD : boucle en verbes, victoire programmable, scope réaliste. Pendant ton attente, avance les étapes ci-dessous - elles sont identiques pour tous, peu importe ton concept.

### 1. Créer le projet

- [ ] Unity Hub → **New project** → **Universal 3D** (URP)
- [ ] Nom : le titre de ton jeu (sans accents ni espaces) - PAS dans OneDrive/Google Drive
- [ ] Crée l'arborescence complète dans la fenêtre Project :

```txt
Assets/
  ├── 📁 Plugins
  └── 📂 _Project
        ├── 📁 Animations
        ├── 📁 Art
        ├── 📁 Audio
        ├── 📁 Prefabs
        ├── 📁 Scenes
        └── 📁 Scripts
```

### 2. Importer les ressources

- [ ] **Package Manager → My Assets** → *POLYGON Sampler Pack* → Download/Import → range dans `Plugins`
- [ ] Matériaux roses? **Edit → Rendering → Materials → Convert Selected Built-in Materials to URP** (réflexe du cours 2)
- [ ] **Package Manager → Unity Registry** → *Starter Assets - ThirdPerson* → Install

### 3. Le dépôt GitHub

- [ ] GitHub Desktop → **Add local repository** → ton dossier de projet
- [ ] Accepte de créer le dépôt avec le **gitignore Unity** - c'est LE moment où ça se joue : sans lui, ton dépôt pèsera des gigaoctets
- [ ] **Publish repository** - nom : le titre de ton jeu
- [ ] Vérifie sur github.com : tu dois voir `Assets/` mais PAS `Library/` (preuve que le gitignore travaille)

### 4. Le README initial

- [ ] À la racine du projet, crée `README.md` :

```markdown
# [Titre de ton jeu]

## Concept
[2-3 phrases de ton GDD]

## Boucle de jeu
[Ta boucle en verbes d'action]

## Moodboard
[Tes images, ou un lien]

## Métriques
- Hauteur du personnage : ...
- Hauteur de saut : ...

## Crédits et médias externes
(à remplir au fil de la session)

## Notes de développement
(à remplir au fil de la session)
```

- [ ] Ce README est le **devlog** de ton projet : chaque phase l'enrichira, et il fait partie de la grille du projet final

### 5. Le greybox du niveau

- [ ] Nouvelle scène `Jeu` dans `_Project/Scenes`
- [ ] Reproduis le **croquis de niveau de ton GDD** avec des formes simples : Planes pour les sols, Cubes pour les murs et volumes - pas un seul asset Synty pour l'instant!
- [ ] Glisse ton personnage (prefab Starter Assets) et **note tes métriques** : construis un escalier de cubes (0.5, 1, 1.5, 2 m) et saute dessus - quelle hauteur passes-tu? Note-la au README
- [ ] **Parcours ton niveau en entier** : distances trop longues? passages trop étroits? salles vides? Ajuste les cubes - ça coûte 2 secondes
- [ ] Quand l'espace est bon (et seulement là) : commence à remplacer le greybox par des prefabs Synty
- [ ] Crée 2-3 **materials** dans `_Project/Art` et code ton greybox par couleurs : neutre pour le décor, une couleur vive pour tout ce qui sera interactif
- [ ] Classe tes objets dans des GameObject Empty bien nommés (`Sol`, `Murs`, `Decor`, `Interactifs`)

### 6. Le rituel (première fois officielle!)

- [ ] Commit : `Demarrage du projet : greybox du niveau` → Push → vérifie sur github.com
