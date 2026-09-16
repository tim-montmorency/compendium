# Cours 4.1
<!-- merc. 16 sept. -->

!!! danger "📱 Téléphones cellulaires en classe"
    Il est dorénavant obligatoire de conserver son téléphone hors de votre portée d'attention, sinon vous devrez le laisser dans la boîte prévue à cet effet. C'est une résolution de département et nous devons suivre la procédure pour toutes les classes. Aucune exception.

## Aujourd'hui

- [ ] Code généré par IA : Figma Make, Stitch, maquette vivante vs code livré
- [ ] Paramétrage de GitHub Copilot (obligatoire, à faire approuver avant de partir)
- [ ] Arborescence du dépôt
- [ ] Démo : la boucle IA avec Copilot
- [ ] Approche par composant pour structurer le HTML/CSS/JS
- [ ] Nomenclature BEM pour les classes CSS
- [ ] Journal de bord
- [ ] Devoirs : structure de dossiers + premier composant fonctionnel (pour vendredi)


## Code généré par IA

### Figma Make ou Stitch (ou autre) lors de la phase design

[:material-file-powerpoint-box: Diapositives PPT : Code généré par Figma Make ou Google Stitch](assets/documents/Web5_codefigmamake-vs-tontravail.pptx){ .md-button .md-button--primary :target="_blank" }

## Paramétrage de GitHub Copilot

Rappel (ou changement de licence) :
[:material-github: GitHub Education :material-robot: GitHub Copilot :material-microsoft-visual-studio-code: VS Code](ia/Guide_GitHub_Education_Copilot.md){ .md-button .md-button--primary :target="_b lank" }

[:material-github: Paramétrage de GitHub Copilot](ia/parametrage-copilot.md){ .md-button .md-button--primary :target="_blank" }

!!! danger "Faire approuver votre paramétrage avant de quitter"
    Une fois vos réglages faits, venez me les montrer avant de quitter le cours aujourd'hui. Je vérifie et note chaque étudiant individuellement : tant que ce n'est pas approuvé par moi, ce n'est pas considéré comme fait.

## Arborescence du dépôt git

[:material-file-tree: Arborescence du dépôt : portfolio](./projets/portfolio/arborescence-portfolio.md){ .md-button .md-button--primary :target="_blank" }

## Boucle IA avec Copilot : démonstration

En direct dans VS Code, sur un vrai composant (la carte de projet) : intention écrite avant de générer, complétion en ligne pour les petits incréments, puis un changement plus large à réviser avant de l'accepter, et enfin la documentation dans `JOURNAL.md`.

| Étape | À utiliser |
|---|---|
| Intention | À la main, en commentaire de code. Devient le `Prompt` documenté dans `JOURNAL.md` |
| Générer par petits incréments | Complétion en ligne |
| Un changement plus large (renommer, restructurer) | Chat, **Agent** + **Interactif** + **Manual permissions** |
| Comprendre quelque chose de généré | Chat, **Ask** |

!!! tip
    Pas tout ce qui précède ne va dans le journal. Les complétions en ligne ne se documentent pas, seuls les vrais prompts/questions délibérés le sont.

## Approche par composant pour structurer votre code HTML/CSS/JS

Un bloc de code HTML/CSS/JS qui représente un élément de l'interface (ex. un bouton, un formulaire, une carte d'un projet). Chaque bloc est commenté et séparé des autres pour faciliter la lecture et la maintenance.

[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button .md-button--primary :target="_blank" }

## Nomenclature BEM pour vos classes CSS

Une convention de nommage des classes CSS qui reflète la structure du composant (ex. `card__title` pour le titre d'une carte).

[Nomenclature BEM pour vos classes CSS](https://tim-montmorency.com/compendium/582-211-web2/css/nomenclature-bem.html){ .md-button .md-button--primary :target="_blank" }

## Devoirs

### Portfolio

Créer la structure de fichiers et dossiers de votre portfolio, avec un premier composant HTML/CSS/JS créé, commenté et fonctionnel. Faites des commits git et pushez sur votre dépôt GitHub. Le tout doit être fait avant la prochaine classe ce vendredi.
