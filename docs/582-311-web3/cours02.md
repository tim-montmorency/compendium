# Cours 2 | Lignes de commande & Git

*[CLI] : Command-Line Interface

## :octicons-terminal-16: Lignes de commande

![](./assets/images/command.webp){ .w-100 }

La [ligne de commande](https://fr.wikipedia.org/wiki/Commandes_Unix) est un outil qui permet d’interagir avec un ordinateur en tapant des commandes textuelles.

On écris des lignes de commande dans un CLI, aussi appelé « Terminal ».

![Terminal](./assets/images/terminal.png)

Contrairement à une interface graphique (GUI) où vous cliquez sur des boutons, ici, vous tapez directement ce que vous voulez faire.

*[GUI] : Graphical User Interface

Les lignes de commande sont très utile en développement web et pour configurer les serveurs, entre autres.

!!! info "Bon à savoir"

    * En ligne de commande, lorsqu'on voit `.` ou `./`, cela signifie le répertoire courant.
    * Lorsqu'on voit `..` ou `../`, ça signifie le répertoire parent.
    * On peut utiliser la touche ++tab++ pour compléter une ligne de commande.

### Où se trouve le terminal ?

* En **Windows**, utilisez l'application **PowerShell[^powershell]** plutôt que command prompt.
* En **macOS**, utilisez l'application **Terminal[^terminal_osx]**.
* En **Linux**, utilisez l'application **Terminal[^terminal_unix]**.

[^powershell]: [https://learn.microsoft.com/fr-ca/training/modules/introduction-to-powershell/](https://learn.microsoft.com/fr-ca/training/modules/introduction-to-powershell/)
[^terminal_osx]: [https://support.apple.com/fr-ca/guide/terminal/welcome/mac](https://support.apple.com/fr-ca/guide/terminal/welcome/mac)
[^terminal_unix]: [https://ubuntu.com/tutorials/command-line-for-beginners](https://ubuntu.com/tutorials/command-line-for-beginners) (en anglais)

### Position

Affichager l'emplacement avec « pwd »

*[pwd]: Acronyme pour « Print Working Directory » en anglais

=== "Windows"

    ![pwd](./assets/images/pwd.png)

=== "Ligne de commande"

    ```powershell
    pwd

    # Résultat : C:\Windows
    ```

### Navigation

#### Liste

Lister des fichiers et dossiers avec « ls »

*[ls]: Diminutif du mot « list » en anglais

=== "Windows"

    ![ls](./assets/images/ls.png)

=== "Ligne de commande"

    ```powershell
    ls
    ```

#### Déplacement

Changer de répertoire avec « cd »

*[cd]: Acronyme pour « Change Directory » en anglais

=== "Windows"

    ![cd](./assets/images/cd.png)

=== "Ligne de commande"

    ```powershell
    cd nom_du_dossier
    ```

    ```powershell
    cd ./nom_du_dossier # identique à la commande précédente
    ```

    ```powershell
    cd .. # Se déplace au répertoire parent
    ```

### Fichiers

#### Création

Créer un fichier avec « touch »

=== "Windows"

    ![touch](./assets/images/touch.png)

=== "Ligne de commande"

    ```bash
    touch nom_du_fichier.txt
    ```

#### Lecture

Lire le contenu d'un fichier avec « cat »

*[cat]: Diminutif du mot « concatenate » en anglais

=== "Windows"

    ![cat](./assets/images/cat.png)

=== "Ligne de commande"

    ```powershell
    cat nom_du_fichier.txt
    ```

#### Écriture

Écrire dans un fichier avec « echo »

```powershell
echo "Texte à ajouter" >> nom_du_fichier.txt
echo "Texte en deuxième ligne" >> nom_du_fichier.txt
echo "Texte en troisième ligne!" >> nom_du_fichier.txt
```

```powershell
echo "Finalement, remplace tout par ceci" > nom_du_fichier.txt
```

#### Déplacement

Déplacer, ou renommer!!, un fichier avec « mv »

*[mv]: Diminutif du mot « move » en anglais

```powershell
mv nom_du_fichier.txt nouveau_nom.txt
```

```powershell
mv nom_du_fichier.txt assets/nom_du_fichier.txt
```

#### Suppression

Supprimer un fichier ou un répertoire avec « rm »

=== "Windows"

    ![rm](./assets/images/rm.png)

=== "Ligne de commande"

    ```powershell
    rm nom_du_fichier.txt
    ```

### Dossiers

#### Création

Créer un fichier avec « mkdir »

*[mkdir]: Diminutif des mots « make » et « directory » en anglais

=== "Windows"

    ![mkdir](./assets/images/mkdir.png)

=== "Ligne de commande"

    ```powershell
    mkdir nom_du_dossier
    ```

#### Supprimer un dossier

Supprimer un dossier avec « rm -r ». L’option `-r` signifie récursif (recursive en anglais), ce qui permet de supprimer tout les contenus d'un dossier.

*[rm]: Diminutif du mot « remove »  en anglais

=== "Windows"

    ![rm](./assets/images/rm.png)

=== "Ligne de commande"

    ```powershell
    rm -r nom_du_dossier
    ```

### Exercice en ligne de commande

<div class="grid grid-1-2" markdown>
  ![](./assets/images/mandala.jpeg)

  <small>Exercice - CLI</small><br>
  **[Mandala](./exercices/cli-mandala.md){.stretched-link}**
</div>

## Markdown

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

### Outil

<div class="grid grid-1-2" markdown>
  ![](./assets/images/toolbox.jpg)

  <small>Outil - Markdown</small><br>
  **[Dellinger - WYSIWYG Markdown](https://dillinger.io/){.stretched-link}**
</div>

### Exercice Markdown

<div class="grid grid-1-2" markdown>
  ![](./assets/images/markdown.jpg)

  <small>Exercice - Markdown</small><br>
  **[Tutoriel Markdown](https://www.markdowntutorial.com/){.stretched-link}**
</div>

## Git

Git est un outil qui vous protège de vous-même. Il permet en quelque sorte de faire des « checkpoints » ou en français, des points de sauvegarde :material-content-save-outline:, dans un projet.

![Git](./assets/images/git.webp)

Ainsi, vous pouvez modifier votre projet l'esprit tranquille, puisqu'il vous permet de revenir en arrière en cas de besoin.

### Répertoire :material-source-repository:

Un répertoire (« repository » ou « repo » en anglais) est le nom donné au dossier :material-folder-open: surveillé par Git. À chaque `commit`, tous les changements effectués à l'intérieur de celui-ci seront enregistrés par Git.

!!! info ".git"

    Lorsqu'un dossier est surveillé par Git, un dossier caché nommé `.git` s'ajoutera à la racine. Il contient les données données de version, de branches et de configuration Git.

### Commit

À tout moment, il est possible de sauvegarder en local (sur son ordinateur) l'avancement d'un projet :material-content-save-outline: avec Git.

On doit dabord choisir quels fichiers ou changements on souhaite sauvegarder. Cette étape est appelée `staging` ou `stage`. Ensuite, on peut faire une sauvegarde acccompagnée d'un petit commentaire[^gitcomment]. Cette étape est appelée `commit` :octicons-git-commit-16:.

[^gitcomment]: [Comment rédiger un bon commit](https://medium.com/@hritik.jaiswal/how-to-write-a-good-commit-message-9d2d533b9052) (en anglais)

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Git - Commit" src="https://codepen.io/tim-momo/embed/abgjPBv?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abgjPBv">
  Git - Commit</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! example "Ligne de commande"

    Connaître la liste des fichiés ajoutés, modifiés ou supprimés : `git status`

    Ajouter des fichiers au commit : `git add NOM_DU_FICHIER`

    Pour ajouter tous les fichiers créés et modifiés : `git add -A`

    Enregistrer un nouveau commit : `git commit -m "Votre note ici"`

### Push

Idéalement, un commit est ensuite poussé vers un service infonuagique :material-cloud: comme GitHub :octicons-mark-github-16: par exemple.

*[infonuagique] : L'informatique en nuage (cloud computing) est la pratique consistant à utiliser des serveurs informatiques à distance, hébergés dans des centres de données connectés à Internet pour stocker, gérer et traiter des données, plutôt qu'un serveur local ou un ordinateur personnel. - Wikipedia

C'est ce qu'on appel faire un `push` :material-publish:.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Git - Push" src="https://codepen.io/tim-momo/embed/vYqavWW?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYqavWW">
  Git - Push</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! example "Ligne de commande"

    Envoyer le commit au serveur distant : `git push`

### Branches

Par défaut, tous les répertoires ont une branche principale appelée `main`. Lorsqu'un `push` est effectué, les changements sont envoyés vers cette branche.

Travailler sur des branches séparées permet de développer de nouvelles fonctionnalités ou corriger des bugs sans affecter la branche principale (`main`). Cela aide à maintenir un projet stable.

Dans l'image ci-dessous, chaque couleur représente une `branch` différente et chaque cercle représente un `commit`.

![](./assets/images/git-branches.png)

!!! example "Ligne de commande"

    Voir la liste des branches : `git branch`

    Créer une branche : `git branch NOM_DE_LA_BRANCHE`

    Se déplacer sur une nouvelle branche : `git checkout NOM_DE_LA_BRANCHE`

### Merge

Une fois vos modifications terminées sur une branche, utilisez git merge [branche] pour fusionner ces changements dans une autre branche, comme main.

![](./assets/images/git-merge.png)

!!! example "Ligne de commande"

    Intégrer une branche à la branch courante : `git merge NOM_DE_LA_BRANCHE`

### Collaboration

Git permet de travailler simultanément sur un même projet.

Admettons qu'une équipe doivent développer le même projet sur GitHub.

Chaque développeur va faire une copie du projet sur son ordinateur. On appelle cette étape, faire un `clone`.

Lorqu'un membre de l'équipe effectue un `push`, les autres développeurs doivent se synchroniser manuellement.

Ils doivent donc effectuer un `pull` avant de faire un `push` à leur tour.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Git - Collaboration" src="https://codepen.io/tim-momo/embed/NWZBJrp?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWZBJrp">
  Git - Collaboration</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! example "Ligne de commande"

    Télécharge (clone) un projet distant :  `git clone URL`

### Conflits

![](./assets/images/sweat.webp)

Qui dit collaboration, dit conflits potentiels.

Les conflits surviennent lorsque deux développeurs modifient le même fichier.

:white_check_mark: Git combine automatiquement les modifications si elles sont sur des lignes différentes.

:x: Si les mêmes lignes sont modifiées, un conflit est créé.

```js linenums="48" title="Exemple de conflit"
<<<<<<< HEAD
let isStudent = false; (vous)
⩵⩵⩵⩵
let estEtudiant=false; (le dev distant)
>>>>>>>
```

!!! tip "Petit truc"

    Pour minimiser les conflits, effectuez des `commit` + `push` régulièrement, au minimum une fois par jour!

#### Résolution de conflit

Choisissez le code pertinent, supprimez l’autre ainsi que les marqueurs.

```js linenums="49" title="Exemple de conflit résolu"
let isStudent = false;
```

!!! warning "Attention"

    Lorsqu'on résout un conflit, nécessairement, on supprime le code de quelqu'un. Afin d'éviter des conflits, cette fois, de l'ordre interpersonnels, communiquez avec l'auteur du code supprimé pour l'informer de votre décision. Il est toujours préférable de maintenir une attitude respectueuse :material-peace: et professionnelle :material-tie:.

### .gitignore

Git permet d’ignorer certains fichiers ou dossiers en utilisant un fichier nommé `.gitignore`.

#### Ignorer un fichier

Pour ignorer un fichier spécifique, ajoutez simplement son nom dans le fichier `.gitignore`.

Par exemple, pour ignorer `notes_perso.txt`, ajoutez :

```yaml
notes_perso.txt
```

On peut aussi utiliser un « wildcard » (`*`) si on ne connais pas le nom du ou des fichiers à exclure.

```yaml
# Git ignorera tous les fichiers avec l'extension .txt
*.txt
```

#### Ignorer un dossier

Pour ignorer un dossier, ajoutez son nom suivi de `/`.

```yaml
node_modules/
```

### Exercices Git

<div class="grid grid-1-2" markdown>
  ![](./assets/images/dolly.jpg)

  <small>Exercice - Git</small><br>
  Cloner un projet GitHub en ligne de commande
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/git-gud.png)

  <small>Exercice - Git</small><br>
  **[Git en ligne de commande](https://nic-hartley.github.io/git-gud/){.stretched-link}**
</div>

## Github

![](./assets/images/github-banner.webp)

GitHub est un service en ligne qui permet de stocker et partager vos projets Git avec d’autres personnes.

Disons que c'est la partie concernée par la notion de `push` avec Git :wink:

### Collaboration

Héberger un projet sur GitHub est gratuit et beaucoup de projets sont publics afin de pouvoir être consultés/modifiés au besoin.

Parmi ces projets, on retrouve plusieurs librairies connues, telles que :

* [Bootstrap](https://github.com/twbs/bootstrap)
* [jQuery](https://github.com/jquery/jquery)
* [React](https://github.com/facebook/react)

On y retrouve également plusieurs organisations d'envergures :

* [NASA](https://github.com/nasa)
* [Microsoft](https://github.com/microsoft) Propriétaire de GitHub depuis 2018
* [Google](https://github.com/google)

### Création d'un répertoire

Pour créer un répertoire, il suffit d'être connecté à GitHub et de se rendre sur la page d'accueil. En haut à gauche de l'interface, un bouton `New` permet d'accéder à la page d'initialisation d'un nouveau repo.

![](./assets/images/github-new.png){data-zoom-image}

#### Nouveau répertoire

Sur cette page, il suffit d'entrer le nom désiré du repo, une brève description et son statut (privé ou public).

De plus, il est possible de spécifier si un fichier README devrait être créé, de spécifier si l'on souhaite utiliser un .gitignore et si une licence devrait être attribuée au projet.

![](./assets/images/github-new-configs.png){data-zoom-image}

### README

Le fichier README sert à présenter un projet. Il indique généralement la raison d'être du projet et souvent comment l'utiliser.

Sur GitHub, un fichier README situé à la racine d'un projet sera automatiquement détecté puis affiché sous les dossiers du projet en question.

C'est une porte d'entrée extrêmement importante dans un contexte de collaboration grand public.

Son contenu est traditionnellement rédigé en Markdown, d'où l'extension `.md`.

### Gitignore

Le fichier .gitignore permet de spécifier à Git des fichiers ou dossiers à l'intérieur du repo qu'il ne devrait pas surveiller et pousser vers le serveur (GitHub).

Voici un exemple de .gitignore :

```bash title=".gitignore"
node_modules/

.sass-cache/

mes-notes-perso.txt
```

### Licenses

Si un repo n'a aucune licence, il est possible d'utiliser son contenu librement.

Cependant, certaines licences vont spécifier:

* de créditer l'auteur
* que son usage est réservé aux projets à but non lucratif
* de ne pas modifier le contenu
* etc.

Voici un [petit guide](https://choosealicense.com/) (en anglais) pour vous aider à choisir une licence.

### Clone

Si vous avez créé votre repo en ligne, vous voudrez assurément travailler dessus sur un ordinateur, soit au collège ou à la maison.

Pour ce faire, il faut repérer le bouton vert `Code` en haut à droite de votre page de répertoire.

![](./assets/images/github-code-btn.png){data-zoom-image}

En cliquant sur celui-ci, vous aurez les options de:

Copier l'url du répertoire, ce qui peut-être requis par certains logiciels concurrents à GitHub Desktop.

![](./assets/images/github-code-popup.png){data-zoom-image}

Pour effectuer un clone en ligne de commande, vous pouvez utiliser l'url indiquée.

Pour cloner avec le logiciel « GitHub Desktop », assurez vous d'abord que celui-ci soit installé, puis cliquez sur le lien « Open with GitHub Desktop ».

### Fork

Pour modifier un repo en ligne, il faut en être l'auteur ou en avoir obtenu la permission.

Néanmoins, il est possible d'être intéressé par un projet et de vouloir s'en servir comme point de départ pour créer sa propre variation.

Pour ce faire, il est possible d'effectuer un `fork`. Cette commande copie le repo GitHub en question vers son compte GitHub. Puisque cette copie du repo vous appartient, vous pouvez effectuer des modifications et des `push` sur celle-ci.

Pour ce faire, il faut cliquer sur le bouton « Fork » en haut à droite du répertoire que l'on désire copier.

![](./assets/images/github-code-btn.png){data-zoom-image}

### Alternatives

Les deux plus grands compétiteurs à GitHub sont :

* Bitbucket :fontawesome-brands-bitbucket:
* GitLab :fontawesome-brands-gitlab:

### Exercice Github

<div class="grid grid-1-2" markdown>
  ![](./assets/images/mandala-git.jpg)

  <small>Exercice - Git</small><br>
  **[Mandala Git](./git/exercices/git-mandala.md){.stretched-link}**
</div>

## Github Desktop

![](./assets/images/GHD-banner.jpg)

L'interface en ligne de commande de Git permet aux développeurs de travailler sans interface graphique en tapant des lignes de commandes directement dans un terminal. Cette technique est puissante, efficace et ne présente que très peu d'inconvénients, outre qu'elle peut paraître intimidante de prime abord.

Pour rendre Git plus accessible, GitHub a créé l'application gratuite GitHub Desktop offrant une interface graphique, permettant d'utiliser des boutons plutôt que d'entrer des lignes de commande sous forme de texte.

[Télécharger Github Desktop](https://desktop.github.com/download/)

### Authentification

![](./assets/images/GHD-first.png){data-zoom-image}

![](./assets/images/GHD-auth.png){data-zoom-image}

![](./assets/images/GHD-config.png){data-zoom-image}

### Clone via Github

![](./assets/images/GHD-open.png){data-zoom-image}

![](./assets/images/GHD-Browser.png){data-zoom-image}

![](./assets/images/GHD-clone.png){data-zoom-image}

### Clone manuel

![](./assets/images/GHD-clone-man.png){data-zoom-image}

![](./assets/images/GHD-clone-man-repo.png){data-zoom-image}

### Repo / Branch / Fetch et Pull

![](./assets/images/GHD-menu.png){data-zoom-image}

**Current Repository** indique le répertoire/projet sur lequel vous, vous trouver. Au clic, il vous permet de passer d'un projet à un autre.

**Current Branch** indique la branche courante. Au clic, il est possible de changer de branche.

**Fetch origin** indique quand GitHub Desktop a vérifié pour la dernière fois si de nouveaux changements étaient disponibles en ligne. Cliquer sur cet onglet forcera GitHub à effectuer une nouvelle vérification. Si un changement existe, le bouton changement pour un "Pull origin".

### Commit

![](./assets/images/GHD-stage.png){data-zoom-image}

![](./assets/images/GHD-commit.png){data-zoom-image}

**Changes** indique le nombre de fichiers modifiés depuis le dernier commit et les affiches, sous forme de liste.

**History** lorsque sélectionné, indique tous les précédents commits, du plus récent aux plus anciens, et permet de voir le détail de chaque fichier modifié.

### Push

![](./assets/images/GHD-commited.png){data-zoom-image}

## Se déplacer entre commits (rollback)

![](./assets/images/GHD-rollback.png){data-zoom-image}

### Alternatives

Il existe plusieurs alternatives à GitHub Desktop, notamment:

* Sourcetree :fontawesome-brands-sourcetree:
* GitKraken :fontawesome-brands-gitkraken:


### Exercice Github Desktop

<div class="grid grid-1-2" markdown>
  ![](./assets/images/prometheus.jpg)

  <small>Exercice - Git</small><br>
  **[Prometheus](./git/exercices/ghd-prometheus.md){.stretched-link}**
</div>

[STOP]

NOTE PÉDAGOGIQUE :
Ce cours fini entre 1h et 30min plus tôt.
La matière enseignée avec Github est trop semblable à celle du cours de muséologie.
