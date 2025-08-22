# Cours 5

[STOP]

*[UX]: Expérience utilisateur (User eXperience)

## Médias

### Audio

Balise : [`<audio>`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/audio)

```html title="Exemple le plus simple"
<audio controls src="musique.mp3"></audio>
```

Attributs

* **autoplay** :octicons-play-16: : Démarre la lecture automatiquement. Désactivé par défaut sur la plupart des navigateurs pour des raisons de UX.
* **controls** :material-play-pause: : Affiche les contrôles du lecteur (lecture, pause, volume). Pas obligatoire, mais un peu oui ;), parce que l'autoplay ne fonctionne pas vraiment.
* **loop** :material-repeat-variant: : Fait jouer l’audio en boucle.
* **muted** :material-volume-mute: : L’audio est désactivé.
* **preload** :material-progress-download: : Indique comment le navigateur doit gérer le chargement de l’audio :
  * none : Ne préchargera rien (idéal si on veut économiser la bande passante)
  * metadata : Préchargera uniquement les métadonnées (durée, dimensions)
  * auto : Laisse le navigateur choisir (c'est la valeur par défaut)

Formats recommandés :

* `.mp3`
* `.ogg`
* `.wav`

C'est possible aussi d'utiliser une méthode de chargement avec la balise [`<source>`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/source). 

Elle permet de fournir **plusieurs formats** au navigateur et le laisse choisir celui qui est compatible. Celui-ci commence par essayer la lecture du premier format. S'il n'est pas compatible, il essaye le deuxième et ainsi de suite.

Si rien ne fait, le navigateur peut afficher un message spécifié dans la balise `<audio>`. Voici un exemple : 

```html title="Exemple complet"
<audio controls loop preload="metadata">
  <source src="https://assets.codepen.io/9367036/NyanCatoriginal.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="https://assets.codepen.io/9367036/NyanCatoriginal.mp3" type="audio/mpeg">
  <p>
    Votre navigateur ne prend pas en charge l'audio HTML.
    <a href="https://assets.codepen.io/9367036/NyanCatoriginal.mp3" download>Télécharger l’audio</a>.
  </p>
</audio>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage" src="https://codepen.io/tim-momo/embed/ZYbWWrJ?default-tab=html%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZYbWWrJ">
  Web 1 - Formatage</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Vidéo

Balise : `<video>`

Attributs :

* controls, autoplay, loop, muted, poster, width, height

Formats recommandés :

* `.mp4` (H.264)
* `.webm`
* `.ogg`

Exemple :

```html
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas l’élément vidéo.
</video>
```

## Tableaux HTML

Balises :

* `<table>`
* `<tr>`
* `<td>`
* `<th>`

Structure logique :

```html
<table>
  <tr>
    <th>Nom</th>
    <th>Âge</th>
  </tr>
  <tr>
    <td>Julie</td>
    <td>21</td>
  </tr>
</table>
```

Attributs utiles :
	•	colspan : étendre une cellule sur plusieurs colonnes
	•	rowspan : étendre une cellule sur plusieurs lignes

Bonnes pratiques :
	•	Ne pas utiliser de tableau pour la mise en page
	•	Ajouter une légende (<caption>) et utiliser les balises sémantiques (<thead>, <tbody>, <tfoot>)

## Listes structurées

Listes non ordonnées : <ul>
	•	Utilisée pour des listes où l’ordre n’a pas d’importance
	•	Exemple :

```html
<ul>
  <li>Pomme</li>
  <li>Banane</li>
</ul>
```

Listes ordonnées : <ol>
	•	Utilisée quand l’ordre compte (étapes, classement)
	•	Exemple :

```html
<ol>
  <li>Étape 1</li>
  <li>Étape 2</li>
</ol>
```

Listes de définitions : <dl>, <dt>, <dd>
	•	Exemple :

```html
<dl>
  <dt>HTML</dt>
  <dd>Langage de balisage utilisé pour structurer le contenu Web.</dd>
</dl>
```

[STOP]

## Arborescence exercice 3

![thumb](https://github.com/user-attachments/assets/1d0921c0-3bc8-4749-9c37-e006b1ddca43)


[Créer l'arborescence du site web de la Tohu](https://tim-montmorency.com/compendium/582-111–web1/exercices/arborescence_reproduction_ex3.md)
<br>
<br>
## Maquette filaire

![icon (3)](https://github.com/user-attachments/assets/816f3906-5e07-4c07-8a91-1a9d55bebbfd)


[Plan architectural](https://tim-montmorency.com/compendium/582-111–web1/autres/maquette-filaire.md)
<br>
<br>
## Maquette filaire exercice 01

![thumb (1)](https://github.com/user-attachments/assets/45541572-9050-4928-9ef2-4c46067f71d0)


[Conception de la maquette filaire d’une page d’accueil d’un site fictif en conception.](https://tim-montmorency.com/compendium/582-111–web1/exercices/maquette-filaire-ex01.md)
<br>
<br>
## Formulaire

![icon (1)](https://github.com/user-attachments/assets/930845c4-c6f3-4132-bf44-83b3a4051506)


[text, label, form, submit](https://tim-montmorency.com/compendium/582-111–web1/html/formulaire.md)
<br>
<br>
## Formulaire - Carte de crédit
![Capture d’écran, le 2024-09-24 à 17 23 47](https://github.com/user-attachments/assets/eb9e09d7-4dcf-479a-9a75-85eeb50c27d0)


[Pour cet exercice vous devrez compléter un formulaire de carte de crédit déjà entamé.](https://tim-montmorency.com/compendium/582-111–web1/exercices/carte-de-credit.md)
<br>
<br>

## Formulaire intermédiaire
![icon (2)](https://github.com/user-attachments/assets/99a514a1-30cf-4734-875b-0edf09a09c01)


[https://tim-montmorency.com/compendium/582-111–web1/exercices/carte-de-credit.html](https://tim-montmorency.com/compendium/582-111–web1/html/formulaire-intermediaire.md)
<br>
<br>

## Radio - Dragonball

![Capture d’écran, le 2024-09-24 à 17 30 03](https://github.com/user-attachments/assets/cf6f90d2-a16c-4540-a90f-8b7232ba4e20)

[
Pour cet exercice, nous allons modifier l’action performée par Goku, le personnage principal de Dragonball, en fonction du bouton radio sélectionné.](https://tim-montmorency.com/compendium/582-111–web1/exercices/dragonball.md)

## Select - Twitter
![Capture d’écran, le 2024-09-24 à 17 32 35](https://github.com/user-attachments/assets/f7dd0cee-6d12-4c86-b267-20c37bc7074f)


[Pour cet exercice, vous devrez compléter le formulaire de Twitter demandant la date de naissance de son nouveau membre.](https://tim-montmorency.com/compendium/582-111–web1/exercices/twitter.md)


