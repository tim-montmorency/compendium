---
tags:
  - Exercice
---
# Copenhague

![](../assets/images/flamant-rose.jpg){.w-100}

L'objectif de cet exercice est de mettre en pratique les notions PHP vues en cours. Il n'est pas question de faire un pont avec Wordpress, mais bien de comprendre la logique du langage de programmation.

## Résultat attendu

<iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="Flamant rose" src="https://web4.tim-momo.com/flamant-rose/" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

Vous pouvez modifier l'histoire, mais la structure du site doit être la même.

Le site ne contient aucun CSS personnalisé ni JavaScript. Tout a été réalisé avec du bon vieux HTML, des classes Bootstrap 5 et bien sur du PHP.

## Consignes

### Première partie

- [ ] Créer un dossier à l'endroit où vous configurez l'emplacement de vos sites Web avec MAMP. Nommez-le comme vous voulez, par exemple `copenhague`.
- [ ] Créer un fichier `index.html` et reproduisez le résultat attendu. Si par hasart, vous vouliez prendre un raccourci, vous pourriez récupérer le code HTML du résultat attendu avec l'inspecteur de votre navigateur :wink:, je dis ça de même.
- [ ] Créer un fichier `reponse.html` et reproduisez la mise en forme d'une seule page réponse observable dans le resultat attendu.
- [ ] Vérifiez que votre site est bien accessible via votre navigateur.

- [ ] Lire le code HTML des deux pages et tâchez de comprendre ce qui se passe.<br>C'est **HYPER** important ! Ajoutez des commentaires dans le code s'il le faut.

```html
<!-- Commentaire HTML -->
```

### Deuxième partie

- [ ] Renommez votre fichier index.html en `index.php`, puis votre fichier `reponse.html` en `reponse.php`. Vérifiez que tout s'affiche encore correctement.

- [ ] Entrez-les informations obligatoires du formulaire, puis cliquez sur le bouton de soumission du formulaire. Si tout va bien, le navigateur devrait charger la page `reponse.php`.

- [ ] Dans `reponse.php`, recueillez les informations provenant de votre formulaire avec `$_POST[]` et assignez les dans 2 variables, soit `$characterName` et `$choice`.
- [ ] Sécurisez 🔒 les variables.
- [ ] Dans `reponse.php`, dynamisez le contenu affiché sur la page en fonction du choix de l'utilisateur (`$choice`) recueillis du formulaire. Vous pouvez utiliser soit un `if / else`, soit un `switch`.
- [ ] Dans `reponse.php`, dynamisez chacun des contenus avec le nom inscrit dans le formulaire précédemment (`$characterName`).

Vous devriez maintenant pourvoir reproduire le resultat attendu.

### Troisième partie

Dans cette troisième partie, il sera question de dynamiser l'entête et le pied de page du site que vous êtes en train de créer. Cela permettra d'éviter la répétition de code.

- [ ] Crééez un nouveau fichier `header.php` et placez-y le code HTML de l'entête du site qui se répète sur les deux pages.
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon site</title>
</head>
<body>

<header>
    <h1>Mon site</h1>
</header>
```

- [ ] Crééez un nouveau fichier `footer.php` et placez-y le code HTML du pied de page qui se répète sur les deux pages.
```html
</body>
</html>
```
- [ ] Dans votre index.php, ajouté l'entête et le pied de page.
```php
<?php include 'header.php'; ?>

<h2>Accueil</h2>

<?php include 'footer.php'; ?>
```

### Quatrième partie

- [ ] Dans `reponse.php`, ajoutez un formulaire pour chaque réponse et pointez vers `reponse.php` pour continuer l'histoire ! C'est le temps de devenir créatif !
- [ ] Utiliser la méthode du champ caché (type="hidden") pour conservez le nom de l'utilisateur.

> Vous allez voir. La quantité de contenu (et le code) devient assez exponentiel.
> C'est pourquoi éventullement on veut avoir une base de données pour stocker les informations.
> Et éventuellement, un CMS! Genre WordPress 🤷 !

- [ ] Sauvegardez votre dossier dans votre disque dur et supprimez le de votre ordinateur. Évitons ainsi que le prochain étudiant sur votre poste ne mette la main sur votre travail.
