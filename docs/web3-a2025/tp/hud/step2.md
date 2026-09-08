# TP2 | Étape 2 - Préparation du développement

*[HUD]: Heads-up display

![](./setup.gif){.w-100}

## 1. GitHub

- [ ] Créer un repertoire public `web3tp2`
- [ ] Cloner le projet sur l'ordinateur
- [ ] Inscrire le lien public vers le répertoire GitHub dans le document de conception

!!!example "Enregistrer les modifications"

    Tout au long du projet, il sera important de faire des `commit` et `push` au fur et à mesure, le plus souvent possible. C'est important pour garder une trace de votre développement.

## 2. Structure du projet

Afin de faciliter le développement du TP2, séparez les fichiers javascript **par technologies**.

- [ ] Dans votre dossier `web3tp2`, créer la structure de projet suivante :

    ```txt
    📁 web3tp2
        📁 assets
            📁 img
            📁 audio
            📁 video
        📁 src
            📁 css
                📄 styles.css
            📁 js
                📄 animejs.js
                📄 bootstrap.js
                📄 chartjs.js
                📄 maplibre.js
                📄 vfx.js
                📄 tonejs.js
                📄 zdog.js
        📄 .gitignore
        📄 index.html
    ```
    
## 3. `node_modules`

- [ ] Dans le fichier `.gitignore`, ignorez le dossier node_modules.

```txt title=".gitignore"
node_modules
```

- [ ] Faire un commit + push

## 4. Importer les technologies

- [ ] Initialisez votre projet avec `npm`

Importez les technologies suivantes avec `npm` : 
    
- [ ] `animejs`
- [ ] `bootstrap`
- [ ] `bootstrap-icons`
- [ ] `chartjs`

## 5. Connecter les technologies

- [ ] Dans `index.html`, ajouter une structure HTML de base
- [ ] Connecter au projet chacunes des technologies installées avec `npm`.
  - [ ] Pour `bootstrap`, connectez le css et le javascript depuis `node_modules`
  - [ ] Pour `bootstrap-icons`, connectez le css depuis `node_modules`
  - [ ] Pour `animejs` et `chartjs`, connectez les avec la méthode du `importmap`  depuis `node_modules`
- [ ] Connecter `src/js/animejs.js` et `src/js/chartjs.js` en module
- [ ] Connecter `src/js/bootstrap.js` en `defer`

```html title="Exemple"
<!-- CSS -->
<link rel="stylesheet" href="./node_modules/bootstrap/...">
<link rel="stylesheet" href="./node_modules/bootstrap-icons/...">
<link rel="stylesheet" href="./src/css/styles.css">

<!-- JS -->
<script type="importmap">
    {
        "imports": {            
            "animejs": "./node_modules/animejs/...",
            "chart.js": "./node_modules/chart.js/...",
            "@kurkle/color": "./node_modules/@kurkle/..."
        }
    }
</script>
<script src="./src/js/animejs.js" type="module"></script>
<script src="./src/js/chartjs.js" type="module"></script>

<script src="./src/js/bootstrap.js" defer></script>
```

!!! question "Pourquoi éviter les CDN ?"

    L’utilisation de CDN n’est pas mauvaise en soi ! C’est même très pratique pour tester rapidement du code.

    Cependant, les CDN sont surtout faits pour des exemples ou des démos, pas pour des projets en ligne.
    
    Pour plusieurs raisons techniques, importer les librairies avec la méthode ESM (modules) est la façon de faire dans le milieu professionnel.

## 6. Faire des tests

- [ ] Tester `bootstrap` avec un exemple bidon
- [ ] Tester `bootstrap-icons` avec un exemple bidon
- [ ] Tester `animejs` avec un exemple bidon
- [ ] Tester `chart.js` avec un exemple bidon

- [ ] Faire un commit + push
