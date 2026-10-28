# Exercice : provoquer et régler un conflit

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. En duo, dans un **petit dépôt d'exercice** créé par Classroom 50, vous allez **provoquer un conflit exprès**, puis le régler. Rien ne peut briser votre vrai projet.
2. Vous pratiquez tout le flux de l'équipe : une branche chacun, une *pull request*, la mise à jour avec `main`, le conflit, la fusion.
3. Durée : environ **25 minutes**. Puis vous inversez les rôles.

</div>

!!! info "Avant de commencer"
    Gardez ouverte la page [Git en équipe](git-en-equipe.md) : chaque étape y est expliquée en détail. Ici, on parle de **personne A** et **personne B** : décidez qui est qui.

## Partie 1 : obtenir votre dépôt de duo (5 min)

Votre dépôt est créé pour vous par **Classroom 50**, avec le fichier `index.html` de départ déjà dedans.

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exercice-conflit-git/accept?k=rthn1z36){ :target="_blank" }**

1. **Avant tout** : vous devez avoir accepté l'invitation à l'organisation GitHub du cours (courriel de GitHub). Sinon, Classroom 50 affiche « Not a member yet » : venez me voir.
2. **Personne A** : ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis **Accept assignment**. Choisissez de **créer un groupe**.
3. **Personne B** : ouvrez le même lien, et **rejoignez le groupe** de la personne A. Ne créez pas un deuxième groupe!
4. Quand le dépôt est prêt, cliquez sur **Open repository**. Vérifiez que vous voyez **le même dépôt** tous les deux.
5. Chacun **clone** le dépôt sur son poste et l'ouvre dans VS Code.

Le dépôt est **privé** : seuls vous deux et moi y avons accès. Ouvrez `index.html` : il contient ceci.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Exercice conflit</title>
</head>
<body>
  <h1>Notre récit</h1>
  <p>Couleur principale : à décider</p>
</body>
</html>
```

## Partie 2 : une branche chacun (3 min)

Chacun, sur son poste, crée **sa** branche à partir de `main`, à son prénom, et la publie. Vérifiez en bas à gauche de VS Code : vous êtes sur **votre** branche.

## Partie 3 : modifier la même ligne (5 min)

**En même temps**, chacun modifie **la même ligne** du fichier `index.html`, chacun à sa façon :

- **Personne A** remplace `Notre récit` par un titre de son choix.
- **Personne B** remplace aussi `Notre récit`, par un autre titre.

Chacun fait un *commit* (`Commun : change le titre de la page`) et un *push* de sa branche.

## Partie 4 : la première fusion passe (3 min)

**Personne A** ouvre une *pull request* : **base: `main`** ← **compare: votre branche**. Puis **Merge pull request** → **Confirm merge**.

Aucun problème : `main` n'avait pas changé depuis la création de la branche.

## Partie 5 : la deuxième fusion bloque (2 min)

**Personne B** ouvre à son tour une *pull request* vers `main`.

GitHub affiche : **This branch has conflicts that must be resolved**. Normal : `main` contient maintenant le titre de A, et votre branche, celui de B, sur la même ligne.

## Partie 6 : régler le conflit (7 min)

**Personne B**, sur son poste, sur **sa** branche :

1. Mettez votre branche à jour avec `main` : **Git: Fetch**, puis **Git: Merge…** → `origin/main` (ou, dans GitHub Desktop, **Branch** → **Update from main**).
2. VS Code annonce un conflit. Ouvrez `index.html` : repérez les marqueurs `<<<<<<<`, `=======` et `>>>>>>>`.
3. **Décidez à deux** du bon titre. Choisissez **Accept Current Change**, **Accept Incoming Change**, ou écrivez une nouvelle version à la main.
4. Vérifiez qu'il ne reste **aucun marqueur**. Ouvrez la page avec Live Server.
5. Enregistrez, ajoutez le fichier (`+`), *commit*, puis *push*.
6. Retournez sur la *pull request* : le conflit a disparu. **Merge pull request** → **Confirm merge**.

**Personne A** : mettez votre branche à jour avec `main` à votre tour. Vous avez maintenant le titre final.

## Partie 7 : on inverse les rôles

Recommencez les parties 3 à 6 avec la ligne `Couleur principale`, en inversant les rôles : cette fois, c'est **B** qui fusionne en premier, et **A** qui règle le conflit. Essayez **Accept Both Changes**, pour voir ce qu'il fait.

## Pour vérifier

- [ ] Sur github.com, l'onglet **Pull requests** → **Closed** montre 4 PR fusionnées.
- [ ] Dans le terminal de VS Code, `git log --oneline --graph --all` montre vos deux branches qui se rejoignent dans `main`.
- [ ] Chacun a réglé **un** conflit lui-même.
- [ ] Vos *commits* suivent la convention : `Zone : ce qui a changé`.

Une fois l'exercice terminé, **ne supprimez pas le dépôt** : c'est votre remise. Je vois vos PR et votre historique dans Classroom 50.
