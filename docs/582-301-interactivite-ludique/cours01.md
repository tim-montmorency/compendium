# Cours 1

![](./assets/img/unity-6-banner.webp){.w-100}

*[LTS] : Long-Term Support

## Unity

### Création de compte

### Configuration système requise

https://docs.unity3d.com/Manual/system-requirements.html

### Plan

En tant qu'étudiant-e, vous avez accès au [compte éducationnel](https://unity.com/products/unity-student) qui donne accès à l'éditeur Pro de Unity. Il donne également accès à un paquet d'assets premium gratuitement.

https://unity.com/products/unity-student


## Unity Hub

### Installation

1. Rendez-vous sur la page de [téléchargement de Unity](https://unity.com/download).
2. Sélectionnez l’une des options correspondant à votre système d’exploitation. Un fichier nommé UnityHubSetup sera téléchargé. Le nom du fichier peut varier selon la version du Hub et votre système d’exploitation.
3. Repérez le fichier UnityHubSetup que vous venez de télécharger et lancez-le.
4. Suivez les instructions propres à votre plateforme afin d’installer Unity Hub.
    * Si vous n’avez pas encore créé de compte Unity, vous serez invité à le faire durant cette étape.
    * Une fois connecté à Unity Hub, celui-ci vous guidera pour installer la plus récente version LTS de l’éditeur Unity. Les versions LTS sont les versions les plus récentes ayant fait l’objet de tests complets et offrant une stabilité accrue.
5. Sélectionnez Installer l’éditeur Unity (Install Unity Editor) afin de télécharger et d’installer la dernière version LTS de l’éditeur Unity.

![](./assets/img/install-unity-hub-step1.png){data-zoom-image}

![](./assets/img/install-unity-hub-step2.png){data-zoom-image}

![](./assets/img/install-unity-hub-step3.png){data-zoom-image}

![](./assets/img/install-unity-hub-step4.png){data-zoom-image}

![](./assets/img/install-unity-hub-step5.png){data-zoom-image}

### Installer Unity 6

Si vous avez déjà Unity Hub, mais qu’une version plus ancienne de Unity est installée sur votre ordinateur, suivez ces étapes pour installer Unity 6

1. Dans Unity Hub, ouvrez l’onglet Installs (Installations).
2. Cliquez sur le bouton Install Editor (Installer l’éditeur) afin d’installer une nouvelle version de Unity.
3. Dans la section Unity 6 Releases, cliquez sur Install pour la version correspondant à votre plateforme.
    > Remarque : Sur macOS, vous devrez choisir entre un processeur Apple Silicon ou Intel. Si vous ne savez pas quel type de processeur équipe votre Mac, consultez l’article d’assistance d’Apple à ce sujet.
4. À l’étape Add Modules (Ajouter des modules), sélectionnez l’option disponible sous DEV TOOLS afin d’installer un environnement de développement compatible.
    * Windows : sélectionnez Visual Studio.
    * macOS : sélectionnez Visual Studio Code.
    L’installation de l’un de ces outils vous permettra d’écrire, d’exécuter et de déboguer votre code plus efficacement dans vos projets Unity.
5. Cliquez sur Continue (Continuer) pour lancer l’installation.
    > Remarque : L’éditeur Unity est une application puissante et de grande taille. Le téléchargement et l’installation peuvent prendre plusieurs minutes.

Une fois l’installation terminée, cette version de l’éditeur Unity apparaîtra dans l’onglet Installs de Unity Hub.

## Structure de fichier

Lorsque vous créez un nouveau projet, je vous conseille de tout de suite créer les dossiers suivants dans votre fenêtre Project. Ainsi, vous pourrez classer vos ressources dès que vous les importez:

Animation
Art
Audio
Font
Materials (en 3D seulement)
Prefabs
Rendering (Si nécessaire)
Scenes
Scripts