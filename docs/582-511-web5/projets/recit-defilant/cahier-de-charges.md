# Le cahier de charges : gabarit et consignes

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Le cahier de charges fixe **ce que votre équipe va construire, et qui fait quoi**, avant d'écrire une ligne de code.
2. Vous partez du **gabarit** ci-dessous : copiez-le dans `documentation/CAHIER-DE-CHARGES.md`, puis remplissez chaque section, en équipe.
3. À déposer **au plus tard le ven. 23 oct., 23 h 59**, avec le storyboard dans Figma. C'est la remise 1 (5 %, note d'équipe).

</div>

[:material-file-document-outline: Consignes complètes du récit défilant](index-textuel.md){ .md-button }

!!! warning "Le processus est évalué"
    Le cahier de charges est la première étape de votre processus. Au cours du **mer. 21 oct.**, vous me présenterez votre avancement (concept, chapitres, début du storyboard). Un cahier généré d'un coup par l'IA, que l'équipe ne peut pas expliquer, sera à recommencer.

## Comment s'y prendre

Vous avez deux semaines, incluant un cours  : le **mer. 21 oct.**, arrivez avec votre concept et vos chapitres (étapes 1 et 2); on avance ensemble le storyboard et la matrice. Voici un ordre qui fonctionne :

1. **Le thème et le concept** (section 1). Discutez-en à deux jusqu'à pouvoir le résumer en une phrase.
2. **Le découpage en chapitres** (section 3) : ce que chaque chapitre raconte, avant de penser aux animations.
3. **Le storyboard dans Figma** (section 2) : à quoi ressemble chaque chapitre, et ce qui bouge quand on défile.
4. **Les animations** de chaque chapitre, en respectant les bornes (section 3).
5. **La matrice de responsabilités** (section 4) : qui possède quoi. À faire **ensemble**, et à prendre au sérieux : c'est la base de votre note individuelle.
6. **Le reste** : données, dataviz, médias, technologies, calendrier, risques.

## Le storyboard dans Figma

Un storyboard de défilement n'est pas une maquette de chaque pixel. C'est **la suite des moments** que vit le visiteur.

- **Un cadre (*frame*) par chapitre**, en format desktop. Ajoutez un ou deux cadres mobiles pour les chapitres les plus animés.
- Sur chaque cadre, **annotez** :
    - ce qui **apparaît**, **bouge** ou **reste épinglé**;
    - **ce qui le déclenche** : l'entrée dans l'écran, la progression du défilement, un clic;
    - **la technique** prévue : CSS au défilement, GSAP + ScrollTrigger ou IntersectionObserver.
- Les **médias** peuvent être des boîtes grises ou des croquis : ce qui compte, c'est le déroulement.
- Repérez votre **moment dataviz** et votre **composant Vue** (navigateur de chapitres ou barre de progression).

Les outils IA de Figma peuvent vous aider à explorer des directions visuelles. Notez-le dans votre journal.

## Trouver l'API de la dataviz

Votre *fetch* externe doit viser une API :

- **gratuite**, sans clé ou avec une clé gratuite;
- **accessible depuis le navigateur** : testez-la tôt, avec un `fetch()` dans la console. Si une erreur CORS apparaît, elle ne conviendra pas;
- **liée à votre récit** : les données doivent raconter quelque chose dans votre histoire.

Exemple : [Open-Meteo](https://open-meteo.com/){ :target="_blank" } (météo et climat, sans clé). Notez dans le cahier de charges l'adresse exacte que vous avez testée, et ce que les données montreront.

<!-- MM : compléter avec d'autres API suggérées (données ouvertes, etc.) après vérification. -->

## Le gabarit

Copiez tout le bloc ci-dessous (bouton de copie en haut à droite) dans `documentation/CAHIER-DE-CHARGES.md`. Remplacez les indications entre crochets.

````markdown
# Cahier de charges : [Titre du récit]

**Équipe** : [Prénom Nom], [Prénom Nom]
**Thème** : [une cause / un mini-documentaire / une vitrine / un explicatif]
**Storyboard Figma** : [lien]

## 1. Le concept

[En 3 à 5 phrases : de quoi parle votre récit, quelle émotion ou quelle idée le visiteur doit retenir, et à qui il s'adresse.]

**En une phrase** : [votre récit résumé en une seule phrase]

## 2. Le storyboard

[Le lien Figma, et 2 ou 3 phrases sur le déroulement général : comment le récit commence, où est le point culminant, comment il se termine.]

## 3. Les chapitres

6 à 8 chapitres, environ 100 à 250 mots chacun. Au plus 1 animation signature par chapitre, et au plus 2 sections épinglées dans tout le récit.

| # | Titre | Ce que le chapitre raconte | Animation signature | Technique | Médias | Responsable |
|---|---|---|---|---|---|---|
| 1 | [Ex. La forêt s'éveille] | [Ex. On découvre le lieu, au lever du jour] | [Ex. Parallaxe des arbres au défilement] | [CSS au défilement] | [Ex. Image en calques, 3 plans] | [Prénom] |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

Vérification : chaque technique (CSS au défilement, GSAP + ScrollTrigger, IntersectionObserver) apparaît au moins une fois.

## 4. La matrice de responsabilités

| Élément | Responsable | Ce que ça comprend |
|---|---|---|
| Chapitres [numéros] | [Prénom] | Contenu, intégration, animations |
| Chapitres [numéros] | [Prénom] | Contenu, intégration, animations |
| Média animable 1 : [format] | [Prénom] | Préparation et intégration |
| Média animable 2 : [format] | [Prénom] | Préparation et intégration |
| Composant Vue : [navigateur de chapitres ou barre de progression] | [Prénom] | |
| *Fetch* externe et dataviz | [Prénom] | |
| Chargement des chapitres (JSON) | [Prénom] | |
| Structure commune (HTML, CSS de base, mise en page) | [Ensemble ou Prénom] | |

## 5. Le modèle de données

Un exemple d'objet chapitre, tel qu'il sera dans votre fichier JSON :

```json
{
  "id": 1,
  "titre": "La forêt s'éveille",
  "texte": "...",
  "medias": [
    { "type": "image", "src": "assets/images/foret-fond.webp", "alt": "..." }
  ]
}
```

[Ajoutez ou retirez des propriétés selon vos besoins, et expliquez en 1 ou 2 phrases vos choix.]

## 6. La dataviz

- **API** : [nom et adresse exacte testée]
- **Données utilisées** : [ex. températures moyennes de 1950 à aujourd'hui]
- **Ce qu'elles racontent dans le récit** : [1 ou 2 phrases]
- **Chapitre** : [numéro]
- **Test fait dans la console** : [oui / non, et le résultat]

## 7. L'inventaire des médias

| Média | Chapitre | Source (produit, banque, IA) | Format | Responsable |
|---|---|---|---|---|
| | | | | |

Médias animables choisis :

- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]
- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]

## 8. Les choix technologiques

[Pour chaque outil, 1 ou 2 phrases : pourquoi lui, pour ce projet.]

- **GSAP + ScrollTrigger** : [...]
- **Vue.js (CDN)** : [...]
- **Hébergement** : [...]
- **Autres** (Anime.js, Chart.js, etc., s'il y a lieu) : [...]

## 9. Le calendrier de l'équipe (jusqu'au prototype du 13 nov.)

| Semaine | [Prénom] | [Prénom] |
|---|---|---|
| 23 oct. | | |
| 28 oct. | | |
| 4 nov. | | |
| 11 nov. | | |

## 10. Les risques et le plan B

[2 ou 3 risques, et ce que vous couperez ou simplifierez si le temps manque. Ex. « Si la spritesheet prend trop de temps, on réduit à 8 images. »]
````

## Avant de remettre

- [ ] Toutes les sections sont remplies : aucun crochet ne reste.
- [ ] Chaque personne a au moins 3 chapitres et un média animable dans la matrice.
- [ ] Chaque technique d'animation apparaît au moins une fois dans le tableau des chapitres.
- [ ] L'API de la dataviz a été **testée** dans la console.
- [ ] Le lien Figma fonctionne, avec accès donné à `marie-michelle.ouellet@cmontmorency.qc.ca`.
- [ ] Le tout est poussé sur GitHub **au plus tard le ven. 23 oct., 23 h 59**.
