# Les branches Git, en 10 minutes

!!! abstract "L'essentiel en 3 points"
    1. Une **branche**, c'est une ligne de travail parallèle dans votre dépôt. `main` est votre ligne principale; une autre branche (ex. `beta`) peut garder une version à part, sans toucher à `main`.
    2. Vous travaillez toujours **sur une** branche à la fois : la branche **active**. Ses fichiers sont ceux que vous voyez dans VS Code. Changer de branche change les fichiers affichés.
    3. Pour la remise bêta : on crée `beta` à partir de `main`, on la publie sur GitHub, et on **revient sur `main`** pour continuer à travailler.

## Le principe, en une image

```text
main   ●───●───●───●───●───●───●   ← vous continuez ici après la remise
                   │
beta               └───●              ← copie figée au moment de la remise
                    (vendredi)          c'est elle que GitHub Pages met en ligne
```

Créer une branche ne copie pas vos fichiers dans un autre dossier : Git garde les deux versions dans le **même** dossier, et vous montre celle de la branche active.

## Le vocabulaire

| Terme | Ce que ça veut dire |
|---|---|
| **Branche active** | La branche sur laquelle vous êtes. Vos *commits* vont sur **elle**. |
| **Créer une branche** | Partir de la branche active (ex. `main`) pour en faire une nouvelle (ex. `beta`), identique au départ. |
| **Changer de branche** (*checkout*, *switch*) | Passer d'une branche à l'autre. Les fichiers de votre dossier changent pour afficher ceux de cette branche. |
| **Publier une branche** (*publish*, *push*) | Envoyer une branche créée sur votre poste vers GitHub. Tant qu'elle n'est pas publiée, elle n'existe que chez vous. |

## Pour la remise bêta : le plus simple, sur github.com

Pour la remise, vous n'avez même pas besoin de changer de branche sur votre poste :

1. Poussez (*push*) tout votre travail sur `main`.
2. Sur la page de votre dépôt sur github.com, cliquez sur le menu des branches (il affiche `main`).
3. Tapez `beta`, puis **Create branch beta from main**.

C'est tout : `beta` existe sur GitHub, et vous êtes toujours sur `main` dans VS Code. Aucun risque de travailler sur la mauvaise branche.

Les sections suivantes montrent comment faire la même chose, et changer de branche, **depuis votre poste**. Utile pour la suite de votre parcours : les branches sont partout dans les projets d'équipe, comme l'intégrateur.

## Dans VS Code

### Voir la branche active

En **bas à gauche** de la fenêtre, dans la barre bleue : l'icône de branche suivie du nom (ex. `main`). C'est **le** réflexe à prendre : un coup d'œil avant de coder.

### Créer une branche

1. Cliquez sur le nom de la branche, en bas à gauche.
2. Dans le menu qui s'ouvre en haut : **+ Create new branch…**
3. Tapez le nom (ex. `beta`), puis **Entrée**.
4. VS Code vous place **sur** la nouvelle branche (le nom en bas à gauche change).
5. Dans le panneau **Source Control** (icône de branches à gauche), cliquez sur **Publish Branch** pour l'envoyer sur GitHub.

### Changer de branche

1. Cliquez sur le nom de la branche, en bas à gauche.
2. Choisissez la branche dans la liste (ex. `main`).

!!! warning "Après avoir créé `beta` : revenez sur `main`"
    À l'étape 4, VS Code vous a placé sur `beta`. Changez de branche pour revenir sur **`main`** avant de continuer à travailler.

## Dans GitHub Desktop

### Voir la branche active

En haut de la fenêtre, le bouton **Current branch** affiche son nom.

### Créer une branche

1. Vérifiez que vous êtes sur `main` (bouton **Current branch**).
2. Cliquez sur **Current branch** → **New branch**.
3. Tapez le nom (ex. `beta`). Vérifiez que la branche de départ est bien `main`. **Create branch**.
4. GitHub Desktop vous place **sur** la nouvelle branche.
5. Cliquez sur **Publish branch** (en haut à droite) pour l'envoyer sur GitHub.

### Changer de branche

Cliquez sur **Current branch**, puis sur la branche voulue (ex. `main`).

!!! warning "Même règle : revenez sur `main`"
    Après avoir publié `beta`, revenez sur **`main`** avec le bouton **Current branch**.

## En ligne de commande (terminal de VS Code)

| Commande | Ce qu'elle fait |
|---|---|
| `git branch` | Liste les branches. La branche active a une étoile `*`. |
| `git checkout -b beta` | Crée la branche `beta` à partir de la branche active, et s'y place. |
| `git push -u origin beta` | Publie `beta` sur GitHub. |
| `git checkout main` | Revient sur `main`. |

## Deux pièges à éviter

!!! danger "Changer de branche avec des modifications non commitées"
    Si vous avez des fichiers modifiés mais pas encore *commités*, changer de branche peut les « emporter » vers l'autre branche, ou Git peut refuser de changer. GitHub Desktop vous demande alors quoi faire (*leave my changes* / *bring my changes*).

    **Réflexe** : faites un *commit* **avant** de changer de branche.

!!! danger "Travailler sur `beta` par erreur"
    Si vous remarquez que vous êtes sur `beta` en plein travail : ne faites **pas** de *push*. Venez me voir, on le règle ensemble en deux minutes.

## Pour vérifier que tout est correct

- [ ] Sur github.com, le menu des branches de votre dépôt affiche `main` **et** `beta`.
- [ ] Dans VS Code (en bas à gauche) ou GitHub Desktop (**Current branch**), vous êtes sur **`main`**.

[:material-github: Retour : remettre la bêta et la mettre en ligne](deploiement-github-pages.md){ .md-button }
