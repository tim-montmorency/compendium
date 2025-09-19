# Cours 5 | Tailwind

[STOP]

## Grid css

## Bootstrap exercices

## Exercice npm

## Tailwind

## node_module + .gitignore

### Option 1 : Le bon réflexe

Créer le projet → ajouter un fichier .gitignore contenant node_modules/ → pousser le projet sur GitHub → installer les dépendances avec npm install.
👉 De cette façon, Git n’a jamais connaissance du dossier node_modules, il l’ignore automatiquement. C’est simple et propre. ✅

### Plan B

Installer les dépendances trop tôt → le dossier node_modules est déjà présent → ajouter ensuite .gitignore.
👉 Problème : si un git add . a déjà été fait, Git garde en mémoire les fichiers de node_modules. Il faut alors nettoyer l’index avec :

git rm -r --cached node_modules

Ensuite, un nouveau commit corrige la situation, et Git arrête enfin de suivre ce dossier.