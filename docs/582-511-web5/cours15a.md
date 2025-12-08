# Cours 15.1 Phase QA et corrections

Lundi 8 décembre


!!! example "*REMISE DU RAPPORT DU CONTRÔLE DE LA QUALITÉ* (sommatif 10%)"

    Attention, cette remise doit contenir les tests complétés du rapport et vous devez avoir commencé à corriger les bogues et anomalies. Cependant, il n'est pas attendu que TOUT soit corrigé et fixé. Mais outre cela, le rapport doit être complet. Remettre le rapport dans le Devoir Teams et le déposer aussi à la racine de votre répertoire git.

## Un retour sur la mise en ligne

### Pour les images de votre JSON

Vous devez la placer dans un dossier nommé public afin qu'elles fassent partie de votre build en vue de la mise en ligne.

Par la suite, dans votre fichier JSON,  devrez aussi mettre à jour le chemin d'accès vers leur nouvel emplacement. [Info ici](./projets/appweb-creative/deploiement-github-pages.html#etape-0-preparation-des-images-du-json-en-vue-de-la-mise-en-ligne)
 
### Les routes Vue Router sur GitHub Pages

Les routes ne fonctionnent pas bien sur GitHub Page alors qu'en dev local tout allait bien?  

[Voici pourquoi et voici comment corriger la situation](./projets/appweb-creative/deploiement-createWebHashHistory.md)

 

## Affinage (polish) et accessibilité

- Favicon: ajouter un favicon pour votre projet
- Assurez vous que la langue `lang` du document HTML est bien `fr`
- Ajoutez le titre `title` du projet au document HTML
- Corrigez vos fautes de français (Antidote)
- Validation du HTML avec le [validateur du W3C](https://validator.w3.org/)
- Corrections finales suite au rapport QA

[💯🧐 Rappel sur le *contrôle de la qualité* - QA](./projets/appweb-creative/qa.md){ .md-button }

[♿ Rappel sur segment spécifique sur l'*accessiblité*](./projets/appweb-creative/qa.html#accessibilite-les-bases-essentielles){ .md-button }

## Documentation 

- `README.md`: [instructions pour la documentation finale du projet dans le README.md](./projets/appweb-creative/documentation-readme.md)
- `composants.md`: mettre à jour avec vos composants finaux (supprimer ceux qui sont inutilisés)
- `routes.md`: mettre à jour avec vos routes finales
- mise à jour de l'*arbre narratif complet* (branches et fins)
- mise à jour finale du *cahier de charges*

## Présentaton finale à préparer pour mercredi

- Préparer la *présentation finale* de votre projet: [instructions ici](./projets/appweb-creative/presentation-orale.md)

## Remise finale dans Teams pour mercredi

Remettre 4 liens distincts dans le Devoirs Teams de la remise finale

- Lien vers Trello
- Lien vers Figma
- Lien vers projet live
- Lien vers répertoire GitHub (le code final devra se retrouver sur la branche `main`)

<!-- 

## Build pour mettre votre projet en production (mettre en ligne)

- [Utiliser Vite pour rapidement contruire (build) votre projet pour la mise en ligne](https://vite.dev/guide/build.html#building-for-production)

<!-- 
## Corrections finales suite au rapport QA

Faites les corrections nécessaires. 

Mais à ce stade, si vous n'avez plus de corrections, considérer le prochain point pour pousser un peu plus votre projet:
-->
<!--
## Au delà du MVP*, ajout de fonctionnalités bonus

*MVP = Minimum Viable Product

### *Mémoires interactives*

**Tiré de votre cahier de charges au point 5.2, faites un choix parmis:**

- [ ] *B1 - Authentification simple*
  - Login avec email/password
  - Multi-utilisateurs (localStorage séparé par user)

- [ ] *B2 - Sons d'ambiance*
  - Son différent par salle
  - Contrôle volume
  - Mute toggle

- [ ] *B3 - Timeline chronologique*
  - Vue chronologique des mémoires
  - Tri par date

- [ ] *B4 - Mode sombre*
  - Toggle dark/light mode
  - Sauvegarde de la préférence

- [ ] *B5 - Partage social*
  - Génération de lien de partage
  - Aperçu Open Graph

- [ ] *B6 - Firebase (équipes avancées)*
  - Synchronisation cloud
  - Galerie publique
  - Multi-device

  ### *Trace ton chemin*

  **Tiré de votre cahier de charges au point 5.2, faites un choix parmis:**
  
- [ ] *B1 - Auto-save*
  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] *B2 - Inventaire visuel*
  - Affichage graphique des items
  - Description des objets au survol

- [ ] *B3 - Stats visuelles*
  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [ ] *B4 - Arbre de choix visualisé*
  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [ ] *B5 - Galerie des fins*
  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [ ] *B6 - Mode rejouabilité*
  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [ ] *B7 - Effets sonores contextuels*
  - Sons lors de choix importants
  - Ambiances sonores par scène

- [ ] *B8 - Animations avancées ~GSAP~*
  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] *B9 - Firebase (équipes avancées)*
  - Partage de fins débloquées
  - Galerie publique d'histoires

  ## Affinage (polish) et accessibilité

- Ajouter du contenu additionnel pour enrichir l'expérience

-->