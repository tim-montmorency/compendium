# Exercice guidé: requête média (media query)

## Activité 3 — Premier exercice guidé : une media query (15 min)

### Objectif

Faire fonctionner la mécanique de base une première fois dans tes mains.

### Point de départ

Crée un fichier `exercice-mq.html` avec ce code :

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

    .carte {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      background-color: #f0f0f0;
      max-width: 800px;
      margin: 2rem auto;
    }

    .carte__image {
      background-color: #ccc;
      height: 200px;
      border-radius: 8px;
    }

    .carte__texte h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .carte__texte p {
      color: #555;
      line-height: 1.6;
    }

    /* Ton breakpoint va ici */

  </style>
</head>
<body>
  <div class="carte">
    <div class="carte__image"></div>
    <div class="carte__texte">
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

  .carte__image {
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

