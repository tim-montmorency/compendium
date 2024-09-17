# Video
La balise `<video> `permet d'intégrer un contenu vidéo dans une page.

## Src & Source

Afficher une vidéo peut se faire en une seule ligne, comme suit:

```
<video src="video.mp4"></video>
```
Telle une image 🖼️

Il est aussi possible, de l’afficher avec une ou des balises enfants de type source, de la sorte:

```
<video>
    <source src=”video.mp4”>
</video>
```
Cette méthode offre l'avantage de définir plusieurs sources. Ainsi, si le navigateur est incapable de lire le premier format, il tentera de lire le deuxième et ainsi de suite. Par exemple:

```
<video>
    <source src=”video.mp4”>
    <source src=”video.webm”>
</video>
```
!!! info
    
    Si vous ne désirez pas avoir à fournir plusieurs sources, les mp4 sont maintenant supportés sur tous les navigateurs majeurs. caniuse.com/mp4

## Poster

Par défaut, une balise vidéo affichera le premier frame de sa source. Néanmoins, il est possible d’ajouter un attribut poster pour définir une image à utiliser à la place.

```
<video src="video.mp4" poster=”image.jpg”></video>
```

## Controls

Si présent, cet attribut indique au navigateur d’afficher les contrôles de base de la vidéo.

play/pause
volume
etc.

À moins de définir ses propres boutons, il est préférable dans la majorité des cas d'ajouter cet attribut.

```
<video src="video.mp4" controls></video>
```

## Loop

Indique au navigateur de jouer la vidéo en boucle 🔁

```
<video src="video.mp4" loop></video>
```

## Muted

Indique au navigateur de jouer la vidéo en mode silencieux 🔇

```
<video src="video.mp4" muted></video>
```

## Autoplay

Indique au navigateur de démarrer la vidéo si possible dès le chargement de la page.

```
<video src="video.mp4" autoplay></video>
```

!!! warning

    Les navigateurs bloquent presque tous cette option si la vidéo n’est pas en sourdine aka muted. Si l’utilisateur a déjà déclenché manuellement d’autres vidéos avec de l’audio sur le site, le navigateur peut choisir d’honorer l’autoplay.

## Playsinline

Certains appareils, notamment plusieurs mobiles 📱, démarrent automatiquement les vidéos en plein écran. Pour contrer ce comportement, il est possible de spécifier de jouer la vidéo dans son cadre d’origine avec playsinline.

```
<video src="video.mp4" playsinline></video>
```
