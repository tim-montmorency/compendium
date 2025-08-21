# Cours 11

[STOP]

*[BEM]: Block Element Modifier

## Effets visuels

### opacité

Contrôle la transparence d’un élément (valeurs de 0 à 1)

```css
.opacity-demo {
  opacity: 0.5;
}
```

Affecte aussi les enfants (héritée visuellement)

### box-shadow

Ajoute des ombres portées

```css
.shadow-demo {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
}
```

•	Syntaxe : horizontal vertical flou étalement couleur
•	Peut être utilisée pour :
	•	Éléments en relief
	•	Cartes de type “Material Design”
	•	Boutons interactifs

### z-index

Contrôle la profondeur d’un élément positionné

Nécessite position autre que static

```css
.layer-avant {
  position: relative;
  z-index: 10;
}
```

### Autres effets visuels utiles

	•	transition : animation douce de changements de propriété
	•	filter : flou, contraste, grisaille, etc.
	•	transform : rotation, mise à l’échelle, translation

## Bonnes pratiques CSS

### Nommage des classes – Méthodologie BEM

```html
<div class="card card--highlight">
  <h2 class="card__title">Titre</h2>
  <p class="card__text">Texte</p>
</div>
```

•	Convention :
	•	block : composant autonome (card)
	•	block__element : sous-partie du bloc (card__text)
	•	block--modifier : variation (card--highlight)
•	Avantages :
	•	Lisibilité
	•	Réutilisabilité
	•	Éviter les conflits


BEM est conçu pour organiser et structurer ton CSS. Il permet de :
	•	Garder un code lisible et modulaire.
	•	Éviter les conflits de styles (grâce à ses noms explicites).
	•	Favoriser la réutilisabilité des composants.

### Organisation des fichiers CSS

	•	Fichier unique pour débuter (style.css)
	•	Par la suite : séparation possible par composants
	•	Toujours commenter les grandes sections
	•	Suivre une structure logique : Reset → Layout → Components → Utilities

## Validation et outils de débogage

a) Validation CSS
	•	W3C CSS Validator
	•	Pourquoi?
		•	Détecter erreurs de syntaxe
		•	Respect des standards
		•	Compatibilité navigateurs

b) Inspecteur Web (Chrome, Firefox)
	•	Outil principal pour comprendre le rendu CSS
	•	Inspecter un élément → voir styles → modifier en direct
	•	Onglet “Computed” : voir styles appliqués
	•	Onglet “Network” : vérifier chargement CSS
	•	Utiliser l’inspecteur pour :
		•	Repérer un conflit de règle
		•	Voir l’ordre de cascade
		•	Tester une couleur, ombre, padding

## Révision CSS – Rappel des concepts clés

a) Sélecteurs CSS
	•	Balises, classes (.ex), ID (#id), combinaisons (div p, ul > li, a:hover)

b) Modèle de boîte (box model)
	•	padding, border, margin, box-sizing

c) Mise en page
	•	display, position, float, flex, grid (selon ce qui a été vu)

d) Typographie et couleurs
	•	font-*, unités (px, em, rem), color, background-color

e) Bonnes pratiques
	•	Nommage clair
	•	Éviter les doublons
	•	Organisation du code

[STOP]

## Opacity

![icon (40)](https://github.com/user-attachments/assets/2e835b53-6749-47a5-a53d-1f8764217acf)


[Gérer l'opacité d'un élément.](./css/opacity.md)
<br>
<br>


## Opacity - Google Agenda

![thumb (19)](https://github.com/user-attachments/assets/596b7b57-a84e-4664-b9cb-cdebbd976308)

[Pour cet exercice, vous devez recréer une icône inspirée de celle de Google Agenda.](./exercices/google-agenda.md)
<br>
<br>


## Z-index

![icon (41)](https://github.com/user-attachments/assets/3819807f-87a4-49a0-899b-0dd8e707c01e)

[Order d'apparition des éléments dans le flux](./css/z-index.md)
<br>
<br>


## Z-index - Mains de Monstres


![thumb (20)](https://github.com/user-attachments/assets/03ccfc8f-92b4-4eab-a3d7-67e758a07fbf)


[Pour cet exercice, vous devez recréer une scène où des monstres jouent au jeu d’enfants d’empilement des mains.](./exercices/mains-de-monstres.md)
<br>
<br>


## Box-shadow

![icon (42)](https://github.com/user-attachments/assets/f4d51588-2fbc-4856-be74-0071ab7ab0bc)


[Ombrage d'un élément.](./css/box-shadow.md)
<br>
<br>

## Box-shadow - Réseaux Sociaux

![thumb (21)](https://github.com/user-attachments/assets/8ee62c0e-7f48-4223-8e62-1e62cad413ba)

[Pour cet exercice, vous devez compléter le CSS d’une barre de pastilles permettant d’accéder à divers réseaux sociaux.](./exercices/reseaux-sociaux.md)
<br>
<br>


## Raccourcis clavier

![icon (43)](https://github.com/user-attachments/assets/c4558f45-d4c5-406e-be38-a6a5702aeb58)

[Navigation et sélection de code](./autres/raccourcis-clavier.md)
<br>
<br>


