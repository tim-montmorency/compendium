# Cours 2

[^pascalCase]: [Notation Pascal | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26543805/notation-pascal)
[^camelCase]: [Notation chameau | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26543803/notation-chameau)
[^snakeCase]: [Notation serpent | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26571362/notation-serpent)
[^kebabCase]: [Notation kébab | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26571363/notation-kebab)

## Arborescence et structure d’un site Web

L’arborescence est la structure hiérarchique des dossiers et fichiers dans un projet Web.

```txt
📂 mon-site-web
├── index.html
└── 📂 assets
    ├── 📂 img
    │   ├── main-background.jpg
    │   └── logo.png
    └── 📂 css
        └── styles.js
```

Arborescence ≠ navigation

### Convention de nommage

Il existe 4 grandes conventions pour nommer des fichiers, des dossiers et même pour écrire du code en programmation.

On appelle ça des **notations**.

| Notation                 | Exemple              | Explication                                            |
|--------------------------|----------------------|--------------------------------------------------------|
| 🧮 Pascal[^pascalCase]   | `MonNomDeFichier`    | Chaque mot commence par une majuscule                  |
| 🐫 Chameau[^camelCase]   | `monNomDeFichier`    | Chaque mot commence par une majuscule sauf le premier  |
| 🐍 Serpent[^snakeCase]   | `mon_nom_de_fichier` | Chaque mot est séparé par une barre de soulignement    |
| 🌯 Kébab[^kebabCase]     | `mon-nom-de-fichier` | Chaque mot est séparé par un tiret                     |

Celui qui nous intéresse en Web, c’est le **kébab** (miam miam).

#### Notation Kébab

![](./assets/images/kebab.gif)

Alors, en quoi consiste cette fameuse notation _kebab case_ ?

Il suffit d'écrire des mots en minuscule séparé par un tiret !

En général, voici ce qui doit être évité :

- ❌ Espace
- ❌ Accents
- ❌ Caractères spéciaux. Ex. : $, #, ?, %.

Pourquoi ?

Si vous nommez un fichier ou un dossier avec les éléments ci-dessus, l'URL pour accéder à votre site peut être simplement brisé

#### Pourquoi on nomme les dossiers et les fichiers en *kebab-case* ?

Parce qu’en Web, la **nomenclature a un impact direct sur l’URL** dans le navigateur.

> Exemple :  
> Un fichier nommé `ma-page-contact.html` devient :  
> `https://monsite.com/ma-page-contact.html`

Extensions de fichiers : .html, .css, .js, .jpg, etc.

## HTML

C'est quoi ça ?

À quoi ça sert ?

## VS Code

Créer une structure dans vscode
Extension “Live Server” (aperçu en temps réel).

Anatomie d’un document HTML

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Titre de la page</title>
</head>
<body>
  <h1>Bonjour le Web!</h1>
</body>
</html>

	•	<!DOCTYPE html> : indique que c’est du HTML5.
	•	<html> : racine du document.
	•	<head> : métadonnées, titre, liens vers CSS ou JS.
	•	<body> : contenu visible de la page.

Modèle parent-enfant (DOM) 

HTML = un arbre.
Chaque balise contient (ou non) d’autres balises.

<body>
  <section>
    <h2>Section 1</h2>
    <p>Paragraphe dans la section</p>
  </section>
</body>

Le <body> est parent de <section>, qui est parent de <h2> et <p>.
Indentation

## Balises sémantiques 

Balise
Rôle
<header>
En-tête du site ou d’une section
<nav>
Zone de navigation
<main>
Contenu principal unique
<section>
Regroupement logique de contenu
<article>
Contenu autonome (ex. : blogue)
<aside>
Contenu secondaire (infos connexes, pub)
<footer>
Pied de page

DEMO: faire un site avec ca.

## Attributs



## Exercices

index.html 

<header>, <nav>, <main>, <section>, <aside>, <footer>
<h1>, <p>
/css/ et /img/.

contact.html 



[STOP]

 : Nommée d’après le vieux langage de programmation [Pascal](https://fr.wikipedia.org/wiki/Pascal_(langage)), lui-même nommé en l'honneur du polymathe [Blaise Pascal](https://fr.wikipedia.org/wiki/Blaise_Pascal)

## Arborescence

![icon](https://github.com/user-attachments/assets/45afe678-94df-47d8-b3ac-b99d9d09cf4f)
[Sitemap](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/arborescence.html)
<br>
<br>
## Arborescence Exercice 01

![Arborescence2](https://github.com/user-attachments/assets/700283b5-d1ea-4538-b790-4453fa48709b)
[Créer l'arborescence suivante](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/arborescence_exercice_01.html)
<br>
<br>
## Arborescence Exercice 02

![Mac Montreal 4](https://github.com/user-attachments/assets/952a2048-a6dc-4211-b363-1ce9af8a0536)
[Créer l'arborescence du site web MAC Montréal](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/arborescence_exercice_02.html)
<br>
<br>
## Relation Parent-Enfant

![icon (3)](https://github.com/user-attachments/assets/3572f2cb-dc55-41c3-96bd-c86f72bbc8e7)
[Parent, enfant](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/parents-enfants.html)
<br>
<br>
## Sémantique

![logo-2582748_640](https://github.com/user-attachments/assets/41d98834-b49e-453d-857e-830ac6c4dbaa)
[header, footer, nav, main, section, aside](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/semantique.html)
<br>
<br>
## Les Balises

![icon (1)](https://github.com/user-attachments/assets/f9117e39-9d2b-457c-adfa-bd33d2447c36)
[`<html>`, `<head>`, `<body>`, `<p>`, etc](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/balises.html)
<br>
<br>
## Mes premières balises

![balises](https://github.com/user-attachments/assets/dc60993a-4390-4485-a20d-a008d2f3551e)
[Exercice sur les balises sémantiques HTML](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/mes_premieres_balises.html)
