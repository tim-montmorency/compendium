# Cours 1 | Bienvenue

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[UX]: Expérience utilisateur (User eXperience)
*[UI]: Interface utilisateur (User Interface)
*[ANI]: Artificial Narrow Intelligence
*[AGI]: Artificial General Intelligence
*[ASI]: Artificial Super Intelligence
*[IA]: Intelligence Artificielle
*[LLM]: Large Language Model (ex: ChatGPT)
*[URL]: Uniform Resource Locator

*[CERN]: L’Organisation européenne pour la recherche nucléaire. Le plus grand centre de physique des particules du monde.
*[ARPANET]: Advanced Research Projects Agency Network

![](./assets/images/bienvenue.jpg){ .w-100 }

## Introduction

### Présentations

### Ressources collégiales

* [:material-microsoft-office: Suite Microsoft 365](https://ccti.cmontmorency.qc.ca/rentree) : Word, Office, Excel, PowerPoint
* [:material-microsoft-teams: Teams](https://ccti.cmontmorency.qc.ca/rentree) : Cours, notes de cours, clavardage
* [:material-microsoft-outlook: Courriel](https://ccti.cmontmorency.qc.ca/rentree)
* [:material-wifi: Wifi](https://ccti.cmontmorency.qc.ca/rentree)
* [ColNET](https://www.cmontmorency.qc.ca/ColNET/etudiant/Messagesgeneraux/ColNET_procedure_connexion.pdf) : Bulletin, horaire, carte étudiante, messagerie médiévale.

### Plan de cours

## D'abord, un peu d'histoire

<div class="grid grid-1-2" markdown>
  ![](./exercices/timeline1/thumb.gif)

  <small>Ligne du temps ludique</small><br>
  **[La fabuleuse histoire de l'Internet](./exercices/timeline1/index.md){.stretched-link .back}**
</div>

## Le développement Web, c’est quoi ?

Le développement Web, c’est tout ce qu’on peut créer pour le Web : des sites, des outils ou des applications accessibles depuis un navigateur, peu importe l’appareil.

La notion plus classique du Web est composée des éléments suivants :

* **Site vitrine** : <https://tim-montmorency.com/>
* **Blogue / Forum** : <https://www.reddit.com/>
* **Commerce en ligne** : <https://www.simons.ca/>
* **Réseaux sociaux** : <https://www.instagram.com/>
* **Messagerie** : <https://discord.com/>
* _et cætera_

Toutefois, le développement Web permet aussi de concevoir une surprenante panoplie d'usage. En voici quelques exemples :

<div class="grid grid-1-4" markdown>
![](./assets/images/domotique.jpg)

<div markdown>
**Tableaux de bord** : [Domotique](https://www.home-assistant.io/)
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/ifttt.jpg)

<div markdown>
**Automatisation** : [IFTTT](https://ifttt.com/) ou [Zapier](https://zapier.com/)
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/combat-trials.png)

<div markdown>
**Jeux vidéos** : [itch.io](https://itch.io/games/platform-web)
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/place-des-arts.png)

<div markdown>
**Environnement interactif** : [Réservation - Place des Arts](https://www.placedesarts.com/programmation)
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/collaboration.webp)

<div markdown>
**Outils collaboratifs** : [Wooclap](https://www.wooclap.com/fr/) ou [Figma](https://www.figma.com/)
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/data-visualisation.png)

<div markdown>
**Visualisation de données** : [World Economic Forum](https://intelligence.weforum.org/topics/a1Gb0000000pTDREA2/key-issues/a1Gb00000017LD8EAM)
</div>
</div>

!!! info "À propos des applications Web"

    De plus en plus d’organisations développent des applications Web pour remplacer les logiciels installés localement.  
    Par exemple, **Microsoft Word en ligne** peut remplacer la version traditionnelle installée sur un ordinateur.

    Ces outils fonctionnent sur tous les types d’appareils et ne nécessitent aucune installation, juste un navigateur. La connexion à Internet n'est même pas obligatoire dans certains cas.

### Comment ça marche ?

C'est d'abord du code. HTML.

Code source d'une page.

-> Démonstration : Analyse rapide de sites Web existants

* Présentation de l'inspecteur du navigateur (Chrome DevTools)
  * Inspection du code source HTML et CSS
* Analyse pratique de quelques sites existants :
  * Structure HTML
  * Application des styles CSS
  * Observation des principes UX/UI en pratique
* Notion rapide de responsive design (adaptation mobile/tablette)

### Un Web à plusieurs niveaux

![](./assets/images/clear-deep-dark.webp)

**Web surfacique**

C’est la partie d’Internet accessible à tous via les moteurs de recherche classiques comme <google.ca>, le site du collège ou <lapresse.ca>.

**Web profond**

Partie du Web qui n’est pas accessible aux internautes au moyen des moteurs de recherche usuels[^webprofond]. Cela inclut les bases de données, les intranets ou les contenus protégés par mot de passe (ex. : Netflix, Gmail, AccèsD). Cette portion représente la majorité du Web. Certains estiment qu’elle en constitue jusqu’à 95%[^avast] du Web !

[^webprofond]: [Définition de la toile profonde | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26544511/toile-profonde)
[^avast]: [Avast – Dark web: facts and myths](https://www.avast.com/c-dark-web-facts)

**Web caché**

Partie du Web invisible à laquelle on peut accéder en utilisant des navigateurs Web spéciaux et des logiciels permettant le cryptage des communications[^webcache].

[^webcache]: [Définition du Web caché | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26557092/web-cache)

## Outils

* Éditeur de code : VS Code.
* Navigateurs : Chrome, Firefox. + Devtool

Shortcut (ex: hard refresh / ouvrir un tab fermé)
 Devtool

* Plateformes collaboratives (GitHub, Teams, Discord).

## Métiers du Web

| Métier                     | Description                                    |
|----------------------------|------------------------------------------------|
| Développeur Frontend       | Interface utilisateur (HTML/CSS/JS)            |
| Développeur Backend        | Serveurs, bases de données, API, sécurité      |
| Intégrateur Web            | Maquettes graphiques → code HTML/CSS           |
| Designer UX/UI             | Expérience utilisateur et interface graphique  |
| Gestionnaire de projet Web | Coordination des équipes et ressources         |

Autres métiers connexes (SEO, rédaction Web, analyse Web).

## Expérience utilisateur : bonnes pratiques

* Définition : Qu'est-ce que l'UX (User Experience) ?
* Principes fondamentaux de l'ergonomie Web :
  * Lisibilité
  * Accessibilité
  * Cohérence
  * Efficacité
* Critères de Jakob Nielsen (heuristiques d’ergonomie)
* Exemples pratiques (bons et mauvais exemples UX)

## Composantes d’une page Web et interactivité

* Structure de base :
  * En-tête (`<header>`)
  * Menu (`<nav>`)
  * Contenu principal (`<main>`, `<section>`)
  * Barre latérale (`<aside>`)
  * Pied de page (`<footer>`)
* Concepts d’interactivité simples :
  * Formulaires
  * Boutons et liens
  * Animations basiques
* Introduction au DOM (Document Object Model)
  * Structure hiérarchique (relation parent-enfant)



## Récapitulatif

Lexique : 

* HTML
* UX
* UI
* Front-End


[STOP]

## Présentation

![380096_presentation_share_slide_slideshare_icon](https://github.com/user-attachments/assets/bd35263f-0e48-4e2c-bfaf-1052d3927119)
[Voir la présentation](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/presentation-web-1.html)

## Les Outils

![669939_adaptive_grid_layout_tools_icon](https://github.com/user-attachments/assets/ba7cc63f-a178-487e-a503-b8484c889f50)
[Voir les outils](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/les-outils.html)

## Histoire du Web

![669948_html_code_coding_programming_web_icon](https://github.com/user-attachments/assets/4d3856ff-a0fa-4aec-b4b0-e76135da579a)
[Voir l'histoire du Web](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/histoire-du-web.html)

## Expérience utilisateur

![667353_brain_mind_process_think_icon](https://github.com/user-attachments/assets/0512cc2b-7623-4cfa-bf35-ce4de2d98e97)
[UX vs UI](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/experience-utilisateur.html)

## Composantes Web

![532723_browser_content_internet_page_web_icon](https://github.com/user-attachments/assets/17380806-2597-45c9-8235-a780f1de38cd)
[Voir les composantes](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/composantes-web.html)

## HTML / Histoire

![2541661_coding_markup_html_icon](https://github.com/user-attachments/assets/e302c4d2-f53a-44e9-be2b-311ac3c28281)
[Voir l'histoire du HTML](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/html-histoire.html)



