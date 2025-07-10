# Chemins d'accès
Peu importe le langage utilisé **(HTML, CSS, JavaScript)**, la façon d'écrire un chemin vers un fichier externe **(image, police, stylesheet ou JS)** reste la même.

## Absolu

Un chemin est absolu lorsqu'il commence par un protocole **(ex: https://)**.

```
<img src="https://site.com/image.png">
```

## Relatif

À l'opposé, un chemin est considéré comme étant relatif lorsqu'il ne commence pas par un protocol **(ex: https://)**.

Afin d'illustrer les différentes possibilités de chemin relatif, imaginons que nous sommes actuellement dans le fichier index.html dans l'arborescence ci-dessous 👇

![chemin-fichiers](https://github.com/user-attachments/assets/90c6a45a-1cbb-4b23-b233-60b86b6a6f6d)


## Même dossier
Il est possible d'accéder à un fichier au même niveau que le fichier dans lequel nous sommes, simplement en spécifiant son nom.

Par exemple, pour accéder à l'image b.png 🌄 à partir du fichier index.html il est possible de faire:

```
<img src="b.png">
```

## Sous-dossier
Il est possible d'accéder à un fichier dans un sous-dossier en spécifiant le nom du sous-dossier en question suivi du nom du fichier.

Par exemple, pour accéder à l'image c.png 🌄 à partir du fichier index.html, il est possible de faire:

```
<img src="dossier-1.1/c.png">
```

## Dossier parent
Il est possible d'accéder à un fichier dans un dossier parent en indiquant qu'il faut remonter d'un dossier via la mention ../ suivi du nom du fichier.

Par exemple, pour accéder à l'image a.png 🌄 à partir du fichier index.html il est possible de faire:

```
<img src="../a.png">
```

Il est possible de remonter de plusieurs dossiers en enchainant les mentions **../**.

Par exemple, pour remonter de deux dossiers:

```
<img src="../../a.png">
```

## Exercices

<div class="grid grid-auto" markdown>
![Capture d’écran, le 2024-09-06 à 14 31 57](https://github.com/user-attachments/assets/f53a8759-1526-4c60-b3c5-9b28a37530c4)




  **Chemin de fichiers - Pokémon**<br>
  _Trouve les bons chemins de fichiers des Pokémon_<br>
  [Exercice Pokémon](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/pokemon.html)
</div>

