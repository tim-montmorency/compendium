# Exercice guidé: requête média (media query)

[< retour au *cours 8*](../../cours08.md)

## Activité 3 — Premier exercice guidé : une media query (15 min)

.

<!-- Slide 8 -->

### Objectif

Faire fonctionner la mécanique de base une première fois dans tes mains.

### Point de départ

- [ ] Dans ton dossier de classement de fichiers du cours "Web2", crée un dossier `exerc-mediaqueries` et ouvre ce dossier dans VS Code.
- [ ] Dans ce dossier, via VS Code, crée un un fichier `index.html` et ajoutes-y  ce code :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première media query</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      background-color: #f0f0f0;
      max-width: 800px;
      margin: 2rem auto;
    }

    .card__img {
      background-color: #ccc;
      height: 200px;
      border-radius: 8px;
    }

    .card__txt h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .card__txt p {
      color: #555;
      line-height: 1.6;
    }

    /* Ton breakpoint va ici */

  </style>
</head>
<body>
  <div class="card">
    <div class="card__img"><img src="https://static.photos/blurred/1024x576" alt="Description de la photo."></div>
    <div class="card__desc">
      <h2>Titre de la carte</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
  </div>
</body>
</html>
```

### Ta mission

À partir de **600px de large**, la carte doit passer en disposition horizontale : image à gauche, texte à droite.

**Ajoute une media query** dans le fichier pour obtenir ce résultat. Tu n'as pas le droit de modifier le HTML.

```css
/* Indice de structure */
@media (min-width: ???) {
  .carte {
    /* flex-direction: ??? */
  }

  .card__image {
    /* width: ??? */
    /* height: ??? */  /* hint: tu dois fixer une hauteur minimale */
    /* flex-shrink: 0 */
  }
}
```

### Validation

- Rétrécis et agrandis la fenêtre : la transition doit se faire proprement.
- Aucune barre de défilement horizontale ne doit apparaître.
- Le texte doit rester lisible dans les deux configurations.

> **Note :** As-tu inclus `<meta name="viewport" ...>` ? Sans lui, la media query ne fonctionnera pas sur mobile. Vérifie.

