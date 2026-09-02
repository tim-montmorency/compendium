# Markdown

Le Markdown est un langage de balisage léger créé par John Gruber permettant d'écrire des blogs, de la documentation ou des livres dans un format simple et standardisé. Le Markdown peut ensuite être converti facilement en divers formats, notamment: Word, PDF, EPUB ou HTML.

Sa grande force réside dans sa simplicité permettant de se concentrer sur l'écriture du texte lui-même, tout en offrant des options de mise en page de base.

Il existe plusieurs variations de Markdown. Cependant, nous nous concentrerons sur le [Markdown Github](https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Titres

=== "Markdown"

    ```markdown
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    ```

=== "Résultat"

    <h1>H1</h1>
    <h2>H2</h1>
    <h3>H3</h1>
    <h4>H4</h1>
    <h5>H5</h1>
    <h6>H6</h1>

### Accentuation

=== "Markdown"

    ```markdown
    *Italic*
    **Bold**
    ```

=== "Résultat"

    *Italic*

    **Bold**

### Liste non ordonnée

=== "Markdown"

    ```markdown
    - Item 1
    - Item 2
    - Item 3
    ```

=== "Résultat"

    - Item 1
    - Item 2
    - Item 3

### Liste ordonnée

=== "Markdown"

    ```markdown
    1. Item 1
    1. Item 2
    1. Item 3
    ```

=== "Résultat"

    1. Item 1
    1. Item 2
    1. Item 3

### Lien

=== "Markdown"

    ```markdown
    [Momo](https://tim-montmorency.com/)
    ```

=== "Résultat"

    [Momo](https://tim-montmorency.com/)

### Image

=== "Markdown"

    ```markdown
    ![Texte alternative de mon image](https://picsum.photos/160/90)
    ```

=== "Résultat"

    ![Texte alternative de mon image](https://picsum.photos/160/90)

### Citation

=== "Markdown"

    ```markdown
    > La patience est la plus héroïque des vertus, précisément parce qu'elle n'a pas la moindre apparence d'héroïsme.
    >
    > — Giacomo Leopardi
    ```

=== "Résultat"

    > La patience est la plus héroïque des vertus, précisément parce qu'elle n'a pas la moindre apparence d'héroïsme.
    >
    > — Giacomo Leopardi

### Code

=== "Markdown"

    ````markdown
    ```javascript
    function exclamation() {
        return "!";
    }
    ```
    ````

=== "Résultat"

    ```javascript
    function exclamation() {
        return "!";
    }
    ```

### Trait horizontal

=== "Markdown"

    ```markdown
    ---
    ```

=== "Résultat"

    ---

### Tableaux

=== "Markdown"

    ```markdown
    | Entête 1 | Entête 2 | Entête 3 |
    | -------- | -------- | -------- |
    | Ligne 1  | Data 1   | Data 2   |
    | Ligne 2  | Data 3   | Data 4   |
    ```

=== "Résultat"

    | Entête 1 | Entête 2 | Entête 3 |
    | -------- | -------- | -------- |
    | Ligne 1  | Data 1   | Data 2   |
    | Ligne 2  | Data 3   | Data 4   |

## Outil

<div class="grid grid-1-2" markdown>
  ![](../assets/images/toolbox.jpg)

  <small>Outil - Markdown</small><br>
  **[Dellinger - WYSIWYG Markdown](https://dillinger.io/){.stretched-link}**
</div>
