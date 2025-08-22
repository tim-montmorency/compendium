# Favicon
Prenez un instant pour regarder les onglets ouverts dans votre navigateur, vous en avez minimalement un **(ce site)**, mais probablement aussi quelques autres. Remarquez les petits logos dans ceux-ci vous permettant d'identifier rapidement quels sites sont ouverts dans votre navigateur.

![favicons-tabs](https://github.com/user-attachments/assets/d06707aa-9507-45de-9398-73e313ca93da)


Ces icônes sont utilisées à plusieurs sauces afin d’aider à identifier rapidement certains sites dans différents contextes. Par exemple, plusieurs navigateurs proposent une page d’accueil présentant nos sites préférés ou régulièrement visités avec leur icône bien visible.

![favicons-browser-home](https://github.com/user-attachments/assets/fea88804-a2e6-4aa2-8e41-fb3f0b23f38e)

Les appareils mobiles les utilisent lorsqu'un site est ajouté à l’écran d’accueil.

![favicons-browser-home](https://github.com/user-attachments/assets/36c0b816-5c10-4ce6-875c-c5c61d407eb3)


Les favoris **(bookmarks)** d’un navigateur les affichent afin d’aider à trouver rapidement le site recherché.

![favicons-bookmark](https://github.com/user-attachments/assets/484df107-371c-41d0-ba9a-f02e347d1178)


!!! note

    À l’origine le nom **"favicon"** provient de la contraction des mots **"Favourite"** et **"Icon"** puisqu’ils étaient initialement utilisés uniquement pour les favoris.


## Création

### Taille

À la base, les favicons avaient une dimension de 16x16px. Avec l’évolution de leur usage et des appareils, plusieurs formats sont maintenant nécessaires afin d’afficher correctement sur tous les types d'appareils. Il est donc préférable de concevoir un favicon le plus grand possible et de créer des versions de tailles inférieures à partir de celui-ci.

### Format

Historiquement les favicons étaient des fichiers .ico puisque ce format était utilisé par Windows afin d’afficher toutes les icônes de son système d’exploitation. Avec le temps, il est maintenant possible d’utiliser tous les formats d’image, sans restrictions. Incluant même le format **SVG**!

### Générateurs

Puisque les tailles optimales de favicon tendent à changer avec l’évolution des appareils, il est préférable d’utiliser un outil de générateur de favicons afin de s’assurer de produire toutes les résolutions de favicons courantes.

Par exemple:

- [RealFaviconGenerator.net](https://realfavicongenerator.net)
- [Favicon.cc](https://www.favicon.cc)

### Affichage

Afin de lier un favicon à une page web, il faut ajouter un extrait de code dans sa balise <head> indiquant où se trouve le fichier favicon à utiliser.

Pour ajouter une favicon à votre site web, enregistrez l’image de la favicon dans le répertoire racine de votre site web ou créez un dossier dans le répertoire racine appelé images et enregistrez l’image du favicon dans ce dossier. Un nom courant pour une image de favicon est "favicon.ico". Ensuite, ajoutez un élément `<link>` à votre fichier **"index.html"**, après l’élément `<title>`.

Par exemple:

```
<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

!!! warning

    Ce code ne permet d’afficher qu’une version du favicon. Pour obtenir toutes les variantes, il est suggéré d’utiliser un **générateur de favicons**.


!!! note

    ## Types MIME
    Les types MIME sont un moyen de communiquer le format d’un fichier ou de données à un navigateur. Pour les favicons, ils sont utilisés dans l’attribut type="" dans la balise .
    
    Le type MIME utilisé aujourd’hui est image/x-icon.
    
    De nos jours, vous n’êtes pas limité à utiliser uniquement le format ICO. Vous pouvez utiliser les GIF non animés, des PNG et des SVG.  


## Exercices

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-09-29 à 10 24 05" src="https://github.com/user-attachments/assets/60d078f9-25a5-400d-bba0-f2617ef16b77">


  **Exercice Favicon - Mega Man**<br>
  _Pour cet exercice, vous devrez créer un fichier HTML affichant dans l’onglet de votre navigateur un favicon de Mega Man._<br>
  [Exercice Favicon - Mega Man](../exercices/megaman.md)
</div>


