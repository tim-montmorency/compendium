# Instructions

- [ ] 1- Création de l'app Vue.js
- [ ] 2- Création du fichier .json contenant les données de votre projet
- [ ] 3- Fetch des données du fichier
- [ ] 4- Création des données, méthodes, instructions Vue pour votre widget prévu

## 1- Création de l'app Vue

Vous savez comment faire. Créez une app Vue et montez la sur une balise du DOM.

## 2- Création du .json des données de vos projets

Créez un fichier *projects.json* dans le dossier de votre portfolio.

Le format des données : ce doit être un tableau [] qui contient des objets {} avec plusieurs propriétés pour chaque projet. Votre fichier ressemblera à:

```
[
  {
    "id": 1,
    "title": "Titre du projet 1",
    "category": "3d",
    "img": "./chemin/vers/votre/img.jpg",
    ...
  },
  {
    "id": 2,
    "title": "Titre du projet 2",
    "category": "video",
    "img": "./chemin/vers/votre/img2.jpg",
    ...
  }
]
```

IMPORTANT: Veuillez vous référer aux instructions du portfolio de votre cours *Préparation au milieu du travail* pour les [données obligatoires pour présenter chaque projet](https://tim-montmorency.com/compendium/582-541%E2%80%93preparation-milieu-travail/stages/portfolio.html#contenu-obligatoire-de-votre-portfolio)


## 3 Fetch

### 3.1- Fetch des données de projet

D'abord, il convient de vous présenter `mounted()`.  C'est un *hook* de cycle de vie dans Vue.js qui est exécuté après que le composant a été monté dans le DOM.  C'est dans cette fonction que vous allez faire le `fetch` de vos données de projet qui se trouverons dans un fichier `.json`. `mounted()` se place au même niveau que `data()`, `methods`, ou `computed`.

```
const appli = Vue.createApp({

    data() {
        return {
            message: "Chargement..."
        };
    },
    mounted() {
        console.log("L'app Vue a été créée et montée au DOM (mounted) !");

        this.message = "Vue a été chargé et montée au DOM (mounted) !";

        // C'est ici qu'on récupère (fetch) les données, qu'on manipule le DOM ou qu'on itinitialise des librairies
    },
    methods: {
        // ...
    }
});

const vm = appli.mount('.appli-vue');
```

### 3.2 Donnée projects [] (relié au fetch)

- [ ] Dans `data()`, initialisez une propriété `project: []`.
- [ ] Ensuite, dans `mounted()`, faites votre `fetch` pour charger les données de votre fichier .json.
- [ ] Lorsque les données sont chargée et convertie en format json, attribuez la valeur de ce que vous avec chargée à la propriété `projects`. Bref, `projects` contiendra un tableau lisant tous vos projets. 
- [ ] Vous pourrez donc utiliser cette données pour afficher les projets dans le HTML via un `v-for`.

## 4- Composante Vue.js

Étant donné qu'on n'a pas eu beaucoup de temps en classe pour les composante Vue, pour votre portfolio, vous allez simplement créer tout ce que vous avez besoin pour votre choix de widget Vue directement dans l'app Vue (`data()`, `methods`, `computed`).

Pour vous le rappeler, voici la [liste des composantes Vue](https://tim-montmorency.com/compendium/582-511-web5/projets/portfolio-remise1.html#exemples-de-composantes-vuejs) qui vous avait été offerte en début de projet. Vous aviez faire un choix et rédigé votre choix dans votre READM.md dans votre git. Si vous ne vous en rappelez plus, veuillez vous y référer. Il est possible de changer d'idée si vous le souhaitez, je vous le permets.

Vous devez donc réfléchir par vous même à savoir qu'est-ce qui doit être fait du côté Vue.js pour arriver à faire votre widget prévu. Je vous laisse libre d'y penser et d'essayer par vous même. Si jamais vous n'y arrivez pas, écrivez moi sur Teams, je vais voir comment je peux vous accompagner à ce niveau, n'hésitez pas. 

*N'oubliez pas de commenter votre code et de laisser des traces de votre compréhension.*

Bonne découverte!
