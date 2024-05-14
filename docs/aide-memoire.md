# Aide-mémoire Markdown

## Introduction

Ce document sert de guide pour l'utilisation du langage Markdown.

- [Cheat Sheet](https://www.markdownguide.org/cheat-sheet)
- [Syntaxe complète](https://daringfireball.net/projects/markdown/syntax)

## Mise en forme de base

### Subscript et Superscript

- Subscript : `H~2~O` affiche H2O
- Superscript : `A^T^A` affiche A^T^A

### Texte barré et marqué

- Barré : `~~Ce texte est barré~~` affiche ~~Ce texte est barré~~
- Marqué : `==Ce texte est marqué==` affiche ==Ce texte est marqué==

### Touches clavier

- Simple touche : `++ctrl++` affiche ++ctrl++
- Raccourci : `++ctrl+alt+del++` affiche ++ctrl+alt+del++

### Listes

#### Listes ordonnées et non ordonnées

``` title="Syntaxe en Markdown"
1. Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
1. Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet

* Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
* Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet
```

!!! example "Résultat"

    1. Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
    1. Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet

!!! example "Résultat"

    * Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
    * Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet

#### Checklist

``` title="Syntaxe en Markdown"
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
```

!!! example "Résultat"

    - [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
    - [ ] Vestibulum convallis sit amet nisi a tincidunt

### Insertion d'image

``` title="Syntaxe en Markdown"
![Texte alternatif de l'image](https://picsum.photos/200)
```

!!! example "Résultat"

    ![Texte alternatif de l'image](https://picsum.photos/200)

## [Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

``` title="Syntaxe en Markdown"
!!! bug "Titre facultatif"

    Contenu ici.
```

!!! example "Résultat"

    !!! bug "Titre facultatif"

        Contenu ici.

Styles disponibles : `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! abstract

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! info

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! tip

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! success

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! question

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! warning

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! failure

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! danger

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! bug

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! example

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

!!! quote

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## [Bloc de code](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)

### Bloc simple avec titre facultatif

``` title="Syntaxe en Markdown"
 ``` css title="styles.css"
   li + li {
     color: pink;
   }

   h3 ~ p {
     font-size: 40px;
   }
 ```
```

!!! example "Résultat"

    ``` css title="styles.css"
    li + li {
        color: pink;
    }

    h3 ~ p {
        font-size: 40px;
    }
    ```

### Inline

\`.fw-bold\` affiche `.fw-bold`

### Onglets

``` title="Syntaxe en Markdown"
=== "Sass"

    ``` sass
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```
=== "CSS"

    ``` css
    body {
        font: 100% Helvetica, sans-serif;
        color: #333;
    }
    ```
```

!!! example "Résultat"
    === "Sass"

        ``` sass
        $font-stack: Helvetica, sans-serif;
        $primary-color: #333;

        body {
            font: 100% $font-stack;
            color: $primary-color;
        }
        ```
    === "CSS"

        ``` css
        body {
            font: 100% Helvetica, sans-serif;
            color: #333;
        }
        ```

## Vidéo

``` title="Syntaxe"
![type:video](https://www.youtube.com/embed/LXb3EKWsInQ)
```

!!! example "Résultat"
    ![type:video](https://www.youtube.com/embed/LXb3EKWsInQ)

## Intégration Codepen

Pour intégrer un snippet Codepen, insérez simplement le iframe directement dans le markdown.

``` title="Syntaxe"
<iframe height="300" style="width: 100%;" scrolling="no" title="EXERC Scss @function - Uno" src="https://codepen.io/tim-momo/embed/ZEVOLpX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
```

!!! example "Résultat"

    <iframe height="300" style="width: 100%;" scrolling="no" title="EXERC Scss @function - Uno" src="https://codepen.io/tim-momo/embed/ZEVOLpX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## [Tableaux](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)

``` title="Syntaxe en Markdown"
| Items       | Descriptions    |
| ----------- | --------------- |
| Item 1      | Description 1   |
| Item 2      | Description 2   |
| Item 3      | Description 3   |
```

!!! example "Résultat"

    | Items       | Descriptions    |
    | ----------- | --------------- |
    | Item 1      | Description 1   |
    | Item 2      | Description 2   |
    | Item 3      | Description 3   |

## [Notes en pied de page](https://squidfunk.github.io/mkdocs-material/reference/footnotes/)

``` title="Syntaxe en Markdown"
Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

!!! example "Résultat"

    Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.

    [^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
