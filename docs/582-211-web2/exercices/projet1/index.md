
# Projet 1: Assemblage d’interface

[< retour au *cours 6*](../../cours06.md)

---

## LE BRIEF COMPLET POUR LE PROJET 1 

LE BRIEF COMPLET EST DISPONIBLE ICI : 
[Projet 1: Brief complet (PDF)](./Projet1_Brief.pdf){ .md-button .md-primary }

Les critères d'évaluation sont détaillés dans la grille d'auto-évaluation suivante :
[Grille d'auto-évaluation du projet 1 (PDF)](./Projet1_Grille_Autoevaluation.pdf){ .md-button .md-primary }


## Objectif et évaluation

**ÉVALUATION:** 35% de la note finale du cours

**OBJECTIF:** Intégrer une maquette Figma en HTML/CSS en suivant les bonnes pratiques : segmenter l'interface en [composants réutilisables](../../css/composants.md), appliquer la [nomenclature BEM](../../css/nomenclature-bem.md) et les concepts de Flexbox ([`display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`](../../css/flexbox01.md) | [`flex-grow`, `flex-shrink`, `flex-basis`, `flex`](../../css/flexbox02.md)  | [`order`](../../css/flexbox-order.md)), mettre en place un [système de tokens (variables CSS)](../../css/variables-unites-fonctions.md) et documenter votre travail de manière professionnelle.

## Contexte

*Projet individuel*

Vous êtes un intégrateur web travaillant pour une agence de design. Votre tâche est de transformer une maquette Figma fournie par un designer en une page web fonctionnelle.

Vous devez analyser la maquette, comprendre les intentions du designer à travers le *Dev Mode* de Figma, et utiliser Flexbox pour recréer la structure de la maquette tout en produisant un code propre et maintenable.

## Vous allez tous recevoir:

- Une maquette Figma complète avec auto-layout avec des défauts intentionnels à corriger (par Teams, individuellement)
- [Un brief du projet accepssible ici même](./Projet1_Brief.pdf)

À noter que la maquette et le brief sont différents pour chaque étudiant. Certains se ressemblent au niveau du thème mais les éléments et la structure sont différents.

## Étapes

### 0. Préparation

- Assurez-vous d’avoir une bonne compréhension de Flexbox, de Figma Auto Layout et du Dev Mode avant de commencer le projet.
- Création de votre répertoire GitHub, nommez-le : `nom-prenom-projet1-web2` (non lié à GitHub Classrooom, c’est un repo personnel).
- Faites un clone en local (sur votre OneDrive ou votre disque dur externe) de votre repo GitHub.
- Préparez votre environnement de travail (VSCode, extension Figma for VS Code, etc.).
- Ajoutez à votre répertoire un README.md pour présenter votre projet et un DOCUMENTATION.md pour documenter votre démarche d’intégration.
- Faites un premier commit avec un message clair pour marquer le début de votre projet. Et poussez ce commit sur GitHub.

### 1. Le choix de la maquette

Marie-Michelle va vous attribuer personnellement une maquette Figma à intégrer (vous la recevrez dans une conversation du TEAMS au plus tard le 27 février en fin de journée). Chaque maquette a été conçue pour mettre en valeur des aspects spécifiques de l’intégration web et pour vous permettre de démontrer votre capacité à analyser et à traduire une conception visuelle en code HTML/CSS fonctionnel.

### 2. Lecture du brief du client

Comprendre les exigences et les objectifs du projet.

### 3. Analyse de la maquette

La maquette que vous recevrez a été conçue avec des règles d’*auto-layout* de Figma qui correspondent à des propriétés CSS spécifiques sous le concept de Flexbox. Votre tâche est d’analyser la maquette en utilisant le *Dev Mode* de Figma pour identifier ces règles et comprendre comment elles se traduisent en HTML/CSS.

Utiliser le *Dev Mode* (via l'extension Figma for VS Code) pour analyser et comprendre la structure, les espacements, les styles et les valeurs CSS. Démarrer avec la base générée par le Dev Mode et ensuite adapter et corriger pour créer un code propre et maintenable . Puis, fixeres défauts intentionnels qui ont été laissés dans la maquette.

### 4. Planification de l’intégration

Décider :

- de l’*architecture HTML*,
- des *composants réutilisables*,
- de la *nomenclature des classes (BEM)*.
- et du *système de tokens (variables)* à utiliser.

Dans un fichier `DOCUMENTATION.md`, documenter votre démarche de planification et les décisions prises: liste des composants réutilisables identifiés, l’architecture HTML proposée, la nomenclature BEM choisie et le système de tokens (variables) mis en place.

### 5. Intégration

Écrire le code HTML et CSS en s’inspirant du code généré par Figma via le Dev Mode, mais en l’adaptant pour créer un code propre et maintenable.

- *Flexbox* : Utiliser Flexbox pour recréer la structure de la maquette, en traduisant les règles d’auto-layout de Figma en propriétés CSS appropriées.
- Structurez *composants réutilisables*
- Attention, il y a *plusieurs éléments à corriger* à partir de la maquette qui vous a été fournie, c'est normal et c'est prévu ainsi. C'est à vous de les repérer et de décider comment les corriger.

### 6. Documentation

- Documenter les décisions techniques prises lors de l’intégration. [Documenter par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html#4-documentez-vos-composants).
- Pour documenter:
  - rédiger des commentaires HTML `<!-- -->` et CSS `/* */` et
  - créer un fichier `DOCUMENTATION.md` pour expliquer votre démarche, vos choix techniques et les défis rencontrés.
  - créer un fichier `README.md` pour présenter le projet.

!!! warning
    L'évaluation du projet dépend de la *qualité de votre documentation*. C'est avec cette démarche que vous pouvez vraiment expliquer votre travail d'analyse, vos choix techniques et démontrer votre compréhension des concepts.

## Calendrier du projet

| Date | Activité |
|------|----------|
| **Semaine 6 (vendredi 27 février)** | Lancement du projet le 27 février: attribution des entreprises et maquettes |
| **2–8 mars** | **SEMAINE DE RATTRAPAGE** — Travail autonome intensif (vous devez avoir avancé pour montrer l'avancement de votre travail en classe au cours 7) |
| **Cours 7 (9 ou 11 mars)** | **Travail en classe + rencontres individuelles** |
| **Cours 8 (16 ou 18 mars)** | **REMISE** |


## Critères d’évaluation    

Voir la grille détaillée dans le document [Projet1_Grille_Autoevaluation.pdf]()

| Catégorie | Pondération |
|-----------|-------------|
| Structure et organisation du code | 20% |
| Système de design (variables/tokens) | 15% |
| Maîtrise de Flexbox | 30% |
| Fidélité à la maquette | 15% |
| Documentation et justifications | 20% |

