# Remettre la bêta et la mettre en ligne (GitHub Pages)

!!! abstract "L'essentiel en 3 points"
    1. Pour la remise bêta, vous « figez » votre portfolio dans une **branche `beta`**, et c'est **cette branche** que GitHub Pages met en ligne, à une adresse du type `https://votre-nom.github.io/nom-du-depot/`.
    2. Votre dépôt devient **public** : c'est nécessaire pour la mise en ligne, et pour que vos pairs puissent tester votre bêta.
    3. Après la remise, vous continuez à travailler sur **`main`**, jamais sur `beta`. La version en ligne reste la bêta remise, intacte, pendant les tests par les pairs.

!!! danger "Date limite : vendredi 2 octobre, avant le début du cours"
    La branche `beta` doit exister, le dépôt doit être public et le site doit être en ligne **avant le début du cours**.

## Étape 1 : tout est sur `main`

1. Vérifiez la [liste de vérification de la remise bêta](remise-beta.md) : tous les fichiers demandés sont dans votre dépôt.
2. Votre `index.html` est **à la racine** du dépôt (pas dans un sous-dossier) : c'est la page que GitHub Pages affiche en premier.
3. Dans votre `README.md`, inscrivez l'adresse de votre futur site. Elle est prévisible :

    ```text
    https://votre-nom-utilisateur-github.github.io/nom-du-depot/
    ```

4. Dans le `<head>` de **chaque** page HTML (`index.html`, `project.html`...), ajoutez cette ligne pour que votre bêta ne soit **pas indexée** par Google et les autres moteurs de recherche :

    ```html
    <meta name="robots" content="noindex, nofollow">
    ```

    Une bêta n'est pas votre vitrine finale : inutile qu'un employeur la trouve en cherchant votre nom. On la retirera pour la remise finale, quand vous voudrez au contraire être trouvé.

5. *Commit*, puis *push* sur `main`. Vérifiez sur github.com que votre dernier *commit* y est bien.

## Étape 2 : créer la branche `beta`

La branche `beta` est une **copie figée** de `main` au moment de la remise.

!!! info "Jamais travaillé avec des branches?"
    [Les branches Git, en 10 minutes](branches-git.md) : le principe, et comment créer ou changer de branche dans VS Code et GitHub Desktop.

**Sur github.com (le plus simple)** :

1. Sur la page principale de votre dépôt, cliquez sur le menu des branches (il affiche `main`, en haut à gauche de la liste des fichiers).
2. Tapez `beta` dans le champ.
3. Cliquez sur **Create branch beta from main**.

**Ou en ligne de commande**, dans le terminal de VS Code :

```bash
git checkout -b beta       # crée la branche beta à partir de main, et s'y place
git push -u origin beta    # l'envoie sur GitHub
git checkout main          # IMPORTANT : revenir sur main
```

!!! warning "Revenez sur `main`"
    Avec la ligne de commande, vous êtes **sur** `beta` après la première commande. N'oubliez pas le `git checkout main` à la fin. Le nom de la branche active est affiché en bas à gauche de VS Code.

## Étape 3 : rendre le dépôt public

1. Sur GitHub, ouvrez votre dépôt, puis **Settings** (onglet du haut).
2. Tout en bas de la page **General**, section **Danger Zone** : **Change repository visibility** → **Change to public**.
3. Confirmez (GitHub vous demande de retaper le nom du dépôt).

!!! warning "Avant de rendre public : tout sera visible"
    Tout le contenu de votre dépôt devient visible par n'importe qui : le code, le `README.md`, le journal, les maquettes. Vérifiez qu'il n'y a rien de confidentiel. Si vous utilisez Airtable, votre jeton doit être **en lecture seule et limité à une seule base** (voir la [page Airtable](donnees/airtable.md)).

## Étape 4 : mettre en ligne la branche `beta`

1. Toujours dans **Settings**, menu de gauche : **Pages**.
2. Section **Build and deployment** :
    - **Source** : *Deploy from a branch*;
    - **Branch** : **`beta`**, dossier `/ (root)`;
    - **Save**.
3. Attendez une ou deux minutes, puis rechargez la page **Settings → Pages** : l'adresse de votre site s'affiche en haut (*Your site is live at…*).
4. Cliquez sur **Visit site** et testez tout : navigation, cartes de projets, détail d'un projet, version mobile.

!!! tip "Suivre la publication"
    L'onglet **Actions** de votre dépôt montre chaque publication en cours. Un crochet vert : c'est en ligne. Un X rouge : cliquez dessus pour voir l'erreur.

## Après la remise : continuer sur `main`

- Vous continuez à travailler **sur `main`**, comme avant : *commit*, *push*, tout est normal.
- Le site en ligne, lui, **ne change pas** : il affiche toujours la branche `beta`, telle que remise. C'est voulu : vos pairs testent la même version que celle que j'évalue.
- **Ne travaillez jamais sur `beta`**, et ne faites aucun *push* sur cette branche après la remise.

!!! question "Comment savoir sur quelle branche je suis?"
    Regardez en bas à gauche de VS Code : le nom de la branche active y est affiché. Ou, dans le terminal : `git branch` (la branche active a une étoile `*`). Si vous êtes sur `beta` par erreur : `git checkout main`, et si vous y avez déjà fait un *commit*, venez me voir avant de faire un *push*.

## Pièges fréquents : « ça marchait sur mon poste! »

| Symptôme | Cause probable | Solution |
|---|---|---|
| Erreur 404 sur toute la page | `index.html` n'est pas à la racine, mauvaise branche choisie dans **Pages**, ou publication pas encore terminée | Vérifiez l'emplacement de `index.html` et la branche `beta` dans **Settings → Pages**; attendez la fin de la publication dans **Actions**. |
| Images, CSS ou JSON introuvables (404 dans la console) | **Majuscules** : `Projects.json` n'est pas `projects.json` en ligne. Windows ignore la casse, le serveur de GitHub non. | Écrivez tous vos noms de fichiers et chemins en minuscules, identiques partout. |
| Tout fonctionne sur la page d'accueil, mais les liens ou images cassent | Chemins qui commencent par `/` (ex. `/css/style.css`) : ils pointent vers `votre-nom.github.io/css/…` au lieu de `votre-nom.github.io/nom-du-depot/css/…` | Utilisez des chemins **relatifs**, sans `/` au début : `css/style.css`, `data/projects.json`. |
| Chemins Windows | Des `\` au lieu de `/` (ex. `assets\images\cafe.jpg`) | Toujours `/` dans le web. |
| Une correction faite avant la remise n'apparaît pas en ligne | Le *commit* a été poussé sur `main` **après** la création de `beta` | Venez me voir **avant** la date limite. |
| La page ne se met pas à jour | Cache du navigateur | **Ctrl + F5** (ou **Cmd + Maj + R** sur Mac). |

## Vérification finale

- [ ] La branche `beta` existe sur GitHub.
- [ ] Le dépôt est **public**.
- [ ] **Settings → Pages** indique la branche `beta`.
- [ ] L'adresse `https://votre-nom.github.io/nom-du-depot/` affiche votre portfolio.
- [ ] Les cartes de projets s'affichent (le `fetch()` fonctionne en ligne), et le détail d'un projet fonctionne.
- [ ] La console (F12) ne montre aucune erreur rouge.
- [ ] Le site est testé sur mobile (votre téléphone, ou le mode appareil de l'inspecteur).
- [ ] L'adresse est inscrite dans votre `README.md`.
- [ ] Chaque page HTML contient `<meta name="robots" content="noindex, nofollow">`.
- [ ] Dans VS Code, je suis de retour sur `main`.
