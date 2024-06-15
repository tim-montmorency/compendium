---
hide:
  - toc
---

!!! Titres

    === "Résultat"

        # Titre 1

        ## Titre 2

        ### Titre 3

        #### Titre 4

    === "Markdown"

        ``` markdown
        # Titre 1
        ## Titre 2
        ### Titre 3
        #### Titre 4
        ```

!!! Gras et italic

    === "Résultat"

        **gras** ou *italic*

    === "Markdown"

        ``` markdown
        **gras** ou *italic*
        ```

!!! Hyperlien

    === "Résultat"

        [Google](https://google.ca)

    === "Markdown"

        ``` markdown
        [Google](https://google.ca)
        ```

!!! Liste

    === "Résultat"

        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci

        ---

        1. Sed sagittis eleifend rutrum
        1. Donec vitae suscipit est
        1. Nulla tempor lobortis orci

    === "Markdown"

        ``` markdown
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci
        ```

        ``` markdown
        1. Sed sagittis eleifend rutrum
        1. Donec vitae suscipit est
        1. Nulla tempor lobortis orci
        ```

!!! Cases à cocher

    === "Résultat"

        * [ ] Sed sagittis eleifend rutrum
        * [x] Donec vitae suscipit est
        * [ ] Nulla tempor lobortis orci

    === "Markdown"

        ``` markdown
        * [ ] Sed sagittis eleifend rutrum
        * [x] Donec vitae suscipit est
        * [ ] Nulla tempor lobortis orci
        ```

!!! Image

    === "Résultat"

        ![Texte alternatif de l'image](https://picsum.photos/200)

    === "Markdown"

        ``` markdown
        ![Texte alternatif de l'image](https://picsum.photos/200)
        ```

!!! Vidéo

    === "Résultat"

        ![type:video](https://www.youtube.com/embed/LXb3EKWsInQ)

    === "Markdown"

        ``` markdown
        ![type:video](https://www.youtube.com/embed/LXb3EKWsInQ)
        ```

!!! Audio

    === "Résultat"

        <audio controls>
            <source src="_/test.mp3">
        </audio>

        ![type:audio](_/test.mp3)

    === "Markdown"

        ``` html
        <audio controls>
            <source src="_/test.mp3">
        </audio>
        ```

!!! Embed

    === "Résultat"

        <iframe height="300" style="width: 100%;" scrolling="no" title="EXERC Scss @function - Uno" src="https://codepen.io/tim-momo/embed/ZEVOLpX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

    === "Markdown"

        ```html
        <iframe height="300" style="width: 100%;" scrolling="no" title="EXERC Scss @function - Uno" src="https://codepen.io/tim-momo/embed/ZEVOLpX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
        ```

!!! Code

    === "Résultat"

        ``` css
        .container {
            width: 70vw;
            margin: 0 auto;
        }
        ```

    === "Markdown"

        ````
        ``` css
        .container {
            width: 70vw;
            margin: 0 auto;
        }
        ```
        ````

!!! Tableau

    === "Résultat"

        | Colonne 1   | Colonne 2   |
        | ----------- | ----------- |
        | Cellule A   | Cellule X   |
        | Cellule B   | Cellule Y   |
        | Cellule C   | Cellule Z   |

    === "Markdown"

        ``` markdown
        | Colonne 1   | Colonne 2   |
        | ----------- | ----------- |
        | Cellule A   | Cellule X   |
        | Cellule B   | Cellule Y   |
        | Cellule C   | Cellule Z   |
        ```

!!! Message

    === "Résultat"
        
        !!! tip "Titre facultatif"

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    === "Markdown"

        ``` markdown
        !!! tip "Titre facultatif"

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        ```

        Types disponibles : `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote` 
