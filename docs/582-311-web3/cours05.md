# Cours 5 

<!-- git ligne de commande
git vscode

Codeberg
Bitbucket
Console dans vscode

| Mise en ligne : GitHub Pages & cPanel -->

<!-- **Savoirs :** #4 Compatibilité navigateurs · #12 Validation (via le build/déploiement) -->

<!-- Plan : distinction code source vs build (dist/) · GitHub Pages (CI/CD) · cPanel (hébergement réel) · comparaison -->
<!-- ![](./assets/images/webserver.gif){.aspect-16-9 .w-100} -->

*[CDN]: Content Delivery Network
*[FTP]: File Transfer Protocol
*[CI/CD]: Continuous Integration / Continuous Deployment

## Serveur, domaine et hébergement

Le concept de serveur, de domaine et d'hébergement se traduit bien par l'analogie du lopin de terre.

![](./assets/images/DomainHostingVsWebHosting.jpg){data-zoom-image}

## GitHub Pages

![](./assets/images/github-banner.webp){.w-100}

[GitHub Pages](https://docs.github.com/fr/pages) transforme gratuitement un dépôt Git en site Web. 

### Méthode rapide

La façon la plus simple de le faire est avec un `index.html` à la racine du repo.

1. Créer un nouveau repository **public** sur GitHub.
1. Créer un `index.html` avec une structure de base et du contenu dans le `<body>`
1. Clic sur Settings > Pages
1. Source = Deploy from a branch
1. Branch = main, clic Save
1. Attendre le déploiement (quelques minutes). On peut voir quand c'est fait dans l'onglet `Actions`.

L'adresse de votre site est normalement construite ainsi : 

```
https://USERNAME.github.io/NOM-DU-REPOSITORY/
```

#### Déployer manuellement un build vite

![](./assets/images/false-automation.gif){.w-50 data-zoom-image}

Après avoir exécuté `npx vite build`, un dossier `/dist` est créé avec le code à déployer à l'intérieur.

Il suffit alors de mettre **le contenu** du dossier `/dist` à la racine du repo GitHub pour que GitHub Pages l'affiche.

``` title="Exemple du repo GitHub"
📂 assets
  - index-BJN94h4U.css
  - poppins-latin-700-normal-BVuQR_eA.woff
  - ...
📄 index.html
```

### Méthode automatisée

![](./assets/images/real-automation.gif){.w-50 data-zoom-image}

Il est possible d'automatiser tout ça avec **GitHub Actions**.

Ainsi, on a le code source sur GitHub, et quand on fait un `git push`, ça exécute en arrière-plan un `npx vite build` et ça déploie automatiquement sur GitHub Pages !

<!-- 
### :material-numeric-1-box: Configurer le `base` dans `vite.config.js`

C'est **l'étape la plus importante** - celle qu'on oublie toujours. Sur GitHub Pages, votre site n'est pas à la racine du domaine, mais dans un **sous-dossier** portant le nom du dépôt :

```
https://VOTRE-USAGER.github.io/NOM-DU-DEPOT/
```

Si Vite ne le sait pas, il cherchera vos fichiers CSS/JS à la racine et vous obtiendrez une **page blanche**. Il faut donc lui indiquer le chemin :

```js title="vite.config.js"
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/NOM-DU-DEPOT/',
})
```

!!! warning "Les deux barres obliques comptent"

    Le `base` doit commencer **et** finir par un `/`. Remplacez `NOM-DU-DEPOT` par le nom exact de votre dépôt GitHub (sensible à la casse).

    *(Si un jour vous branchez un nom de domaine personnalisé ou utilisez `usager.github.io`, remettez simplement `base: '/'`.)*

### :material-numeric-2-box: Activer GitHub Pages

Dans votre dépôt, allez dans **Settings → Pages**. Sous **Build and deployment**, dans la liste déroulante **Source**, choisissez **GitHub Actions**.

### :material-numeric-3-box: Créer le workflow

Créez le fichier `.github/workflows/deploy.yml`. Ce fichier dit à GitHub : « à chaque `push` sur `main`, installe les dépendances, fais le `build`, et publie le `dist/` ».

```yaml title=".github/workflows/deploy.yml"
name: Deploy static content to Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7
      - name: Set up Node
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v6
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

### :material-numeric-4-box: Pousser et observer

```bash
git add .
git commit -m "Configurer le déploiement GitHub Pages"
git push
```

Rendez-vous dans l'onglet **Actions** de votre dépôt : vous verrez le workflow s'exécuter (checkout → build → deploy). Une fois le rond vert affiché, votre site est en ligne à `https://VOTRE-USAGER.github.io/NOM-DU-DEPOT/`.

!!! tip "C'est ça, le CI/CD"

    Vous venez de mettre en place un mini pipeline d'**intégration et de déploiement continus** : chaque `push` reconstruit et republie le site automatiquement. Plus besoin d'y penser. -->

## Hébergement avec cPanel

![](./assets/images/cpanel_banner.png)

Abréviation de « Control Panel », cPanel est un panneau de gestion d’hébergement Web qui permet de gérer des serveurs et des sites Web.

Il existe plusieurs alternatives comme Plesk, DirectAdmin ou Webmin, mais dans le cadre du cours, nous utiliserons cPanel.

L'entreprise qui héberge les sites Web s'appelle HostPapa et le nom de domaine qui sera utilisé sera `tim-momo.com`.

### Connexion

![](./assets/images/cpanel-login.png){data-zoom-image}

La connexion se fait à l'adresse suivante : 

```
https://SOUSDOMAINE.tim-momo.com:2083
```

!!! note "Remplacez `SOUSDOMAINE` par votre nom de famille"

    Exemple : https://tremblay-rivard.tim-momo.com:2083

Le **nom d'utilisateur** est votre prénom sur colnet, en minuscule, sans accents. 

!!! info "Spécificités"

    - Si vous avez plusieurs prénoms, ce sera simplement le premier. (ex: pour Charlie Charlotte, le username est `charlie`)
    - Si c'est un prénom composé, le trait n'est pas conservé. (ex: pour Pier-Olivier, le username est `pierolivier`)

    - Pour Alexandre, ajoute les initiales de ton nom de famille (ex: pour Alexandre Tremblay-Rivard, le username est `alexandretr`)

Le **mot de passe** est le numéro de DA à 9 chiffres. (ex: `201234567`)

### Tableau de bord

![](./assets/images/cpanel-dashboard.png){data-zoom-image}

### Informations générales et statistiques

<div class="grid align-items-start" markdown>
![](./assets/images/cpanel-infos.png){data-zoom-image}

![](./assets/images/cpanel-stats.png){data-zoom-image}
</div>

### Changer son mot de passe

![](./assets/images/cpanel-preferences.png)

Il est fortement recommandé de changer son mot de passe pour quelque chose de plus sécuritaire.

1. Dans le tableau de bord, cliquer sur « Mot de passe et sécurité »
1. Changer le mot de passe

### Gestionnaire de fichiers

1. Dans le tableau de bord, cliquer sur « Gestionnaire de fichiers »

![](./assets/images/cpanel-fichiers.png){data-zoom-image}

![](./assets/images/cpanel-file-manager.html.png){data-zoom-image}

* 📁 public_html : C’est la racine Web : tout ce que vous y ajouterez sera visible sur internet

  > Exemples :
  > - public_html/index.html : visible par `https://xxxxxx.tim-momo.com/`
  > - public_html/tp2/index.html : visible par `https://xxxxxx.tim-momo.com/tp2/`
   
  - Je recommande de faire un répertoire par projet pour le moment. Rien à la racine directement. Pour le moment ;)
  - Petit truc. Téléverser un `.zip` pour l'extraire ensuite permet de faciliter le processus.

* 📁 public_ftp : Sert pour partager des fichiers via FTP anonyme. 

  - Si activé, n'importe qui pourrait télécharger son contenu via une adresse comme : `ftp://xxxxxx.tim-momo.com`

* 📁 mail : Contient les boîtes de réception de vos courriels
* 📁 logs : contient les erreurs serveur au format compressé (ex. : 404, 500)
* 📁 ssl : stocke les certificats pour activer la notion HTTPS
* 📁 tmp : fichiers temporaires
* 📁 etc : contient des fichiers de configuration globaux

!!! info "403 Forbidden"

    S'il n'y a pas de fichier index.html à la racine du dossier public_html, vous devriez logiquement voir cette page :

    ![](./assets/images/cpanel-403.png){data-zoom-image}

<div class="grid grid-1-2" markdown>
  ![](./activite/cpanel/giphy.gif){.aspect-4-3}

  <small>Exercice - cPanel</small><br>
  **[Publier un build Vite](./activite/cpanel/index.md){.stretched-link .back}**
</div>

### Courriels

![](./assets/images/cpanel-courriels.png){data-zoom-image}

Votre cPanel vient avec une gestion de courriels, un peu comme si vous aviez votre propre Gmail.

#### Créer une boîte de courriel

1. Dans le tableau de bord, cliquer sur « Comptes de messagerie »
1. Cliquer sur « Créer »
1. Ajouter un nom d'utilisateur. Ce sera le nom de votre courriel. Par exemple : `contact@xxxxxx.tim-momo.com`
1. Ajouter un mot de passe
1. Cliquer sur « Créer »

#### Boîte de courriel

1. Dans le tableau de bord, cliquer sur « Comptes de messagerie »
1. Cliquer sur « Check Email » de la boîte de courriel précédemment créée.
  - Si le lien ne fonctionne pas, vous y avez accès par votre url en spécifiant webmail (ex: `https://webmail.xxxxxx.tim-momo.com/`)
1. Cliquer sur « Open » <br>![](./assets/images/roundcube.png){.w-50 data-zoom-image}
1. Tester l'envoi et la réception d'un courriel.

## Gestion du serveur à distance avec ftp-simple

![](./assets/images/What_is_FTP_server_820x460.jpg)

<div class="grid grid-auto" markdown>
![](./assets/images/ftp-simple.png)

[ftp-simple](https://marketplace.visualstudio.com/items?itemName=humy2833.ftp-simple) est une extension qui permet de travailler sur le serveur directement dans VSCode !
</div>

### Configuration

1. Dans VSCode, appuyer sur la touche ++f1++ (ou ++ctrl+shift+p++)
1. Chercher « ftp-simple »
1. Choisir l'option « ftp-simple: Config ... »

   > Cela ouvre le fichier de configuration `ftp-simple-temp.json`

1. Entrer les informations de connexion de votre cPanel :<div markdown>
  ```json title="Exemple"
  [
    {
      "name": "xxxxxx.tim-momo.com",
      "host": "xxxxxx.tim-momo.com",
      "port": 21,
      "type": "ftp",
      "username": "picard",
      "password": "201234567",
      "path": "/public_html",
      "autosave": true,
      "confirm": true
    }
  ]
  ```
  </div>
1. Sauvegarder et fermer le fichier de configuration.

### Ouvrir une session

1. Dans VSCode, ouvrir une nouvelle fenêtre
1. Appuyer sur la touche ++f1++
1. Chercher « ftp-simple »
1. Choisir l'option « ftp-simple: Remote directory ... »
1. Choisir le site sur lequel se connecter (normalement celui configuré plus tôt)
1. Choisir le dossier à ouvrir (`. Current directory : /public_html`)

  ![](./assets/images/current-directory.png){data-zoom-image}

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./examens/carre/giphy.gif){.aspect-4-3}

  <small>Exercice - Préparation à l'examen</small><br>
  **[Carré](./examens/carre/index.md){.stretched-link .back}**
</div>
