# Démo : la boucle IA en direct dans VS Code

Notes d'animation pour toi, pas une page à publier telle quelle (tu peux en tirer un résumé pour les étudiants après coup si tu veux).

**Objectif** : montrer la boucle au complet, une fois, sur un exemple concret, celui-là même qu'ils devront reproduire ce soir pour le devoir (structure de dossiers + premier composant fonctionnel). Composant choisi : **la carte de projet**, puisqu'elle est déjà l'exemple utilisé dans l'arborescence et la nomenclature BEM.

Durée approximative : 20-25 minutes.

## Aide-mémoire : boucle → chat Copilot

| Étape | À utiliser |
|---|---|
| Intention | Rien, ça s'écrit à la main (commentaire de code). Devient le `Prompt` documenté dans `JOURNAL.md` |
| Générer par petits incréments | Complétion en ligne |
| Un changement plus large (renommer, restructurer) | Chat, **Agent** + **Interactif** + **Manual permissions** |
| Comprendre quelque chose de généré | Chat, **Ask** |
| ~~Tout faire d'un coup~~ | **Agent** + **Autopilot** + **Allow all**, à montrer mais pas à utiliser aujourd'hui |


## 1. L'intention (avant d'ouvrir Copilot)

Dire à voix haute, puis écrire en commentaire dans `index.html` :

```html
<!-- Carte de projet : image, titre, description, lien. Au survol, légère élévation avec ombre. -->
```

Insister sur le fait que cette phrase existe **avant** toute génération, c'est elle qui définit ce qu'un « bon résultat » veut dire.

## 2. Générer le HTML par complétion en ligne

Sous le commentaire, commencer à taper :

```html
<article class="carte-projet">
```

Laisser la suggestion apparaître, montrer le texte fantôme, `Tab` pour accepter une ligne à la fois plutôt que tout accepter d'un coup. Si la suggestion propose une structure inutile (ex. des attributs superflus), le dire à voix haute et la refuser avec `Esc`.

## 3. Générer le CSS par complétion en ligne

Dans `css/composants/carte-projet.css` :

```css
/* Carte de projet : coins arrondis, ombre légère, s'élève au survol */
```

Même principe : accepter, ajuster une valeur (ex. la durée de la transition) pour montrer que le code généré n'est pas figé.

## 4. Un changement plus large avec Agent + Interactif + Manual permissions

Dire : « Mes classes ne suivent pas encore la nomenclature BEM qu'on vient de voir. »

Ouvrir le chat, vérifier qu'on est en **Agent**, avec le style **Interactif** et les permissions en **Manual permissions** (pas Autopilot, pas Allow all), sélectionner les deux fichiers (HTML + CSS), demander :

```text
Renomme les classes de la carte de projet selon BEM :
carte-projet__titre, carte-projet__description, carte-projet__lien.
```

Montrer le diff proposé sur les deux fichiers, l'accepter ligne par ligne plutôt qu'en bloc. C'est le moment fort pour illustrer « comprendre avant d'accepter » : lire chaque renommage avant de valider.

## 5. Comprendre avec Ask

Sélectionner une ligne CSS générée qui n'est pas évidente pour eux (ex. la syntaxe de `box-shadow` ou `transition`), ouvrir le chat en **Ask** :

```text
Explique-moi cette ligne.
```

Bon moment pour rappeler : Ask ne modifie rien, c'est pour comprendre seulement.

## 6. Montrer Autopilot + Allow all, sans les utiliser

Ouvrir les sélecteurs de style et de permissions, montrer qu'**Autopilot** et **Allow all** existent, expliquer en une phrase ce que ça ferait (construire plusieurs fichiers tout seul, sans demander d'approbation), puis fermer sans l'exécuter :

« On ne les utilise pas aujourd'hui, ça irait à l'encontre de l'objectif de la journée : coder le HTML/CSS vous-même. »

Ça rejoint directement l'encart obligatoire du guide de paramétrage, bonne occasion d'y référer.

## 7. Tester

Rafraîchir dans le navigateur (Live Server), survoler la carte, montrer que l'effet fonctionne.

## 8. Commit

Dans le panneau Source Control (ou le terminal) :

```bash
git add .
git commit -m "Ajout du composant carte-projet (HTML + CSS), classes BEM"
git push
```

Insister : un commit pour cet incrément-là, pas un commit fourre-tout à la fin de la soirée.

## 9. Documenter dans JOURNAL.md

Rappel important à faire ici : **pas tout ce qui précède ne va dans le journal.** Les complétions en ligne des étapes 2 et 3 ne se documentent pas. Ce qui mérite une entrée, ce sont les vraies questions/prompts délibérés : le renommage BEM en Agent (étape 4) et la question en Ask (étape 5), selon le modèle déjà établi (Date / Prompt / Outil / Résultat).

C'est le bon moment pour faire écrire l'entrée devant eux, pas juste l'expliquer.


## Note sur la portée JS

Tes consignes de devoir mentionnent « HTML/CSS/JS », mais ton plan de cours réserve le JS d'interactivité au bloc 5.1. Pour cette démo, je suis resté en HTML/CSS pur. À toi de décider : soit le devoir de ce soir reste HTML/CSS seulement (le fichier JS du composant peut être créé vide, prêt pour plus tard), soit tu veux qu'ils ajoutent une petite touche JS non liée au `fetch` (ex. une classe togglée au clic). Dis-moi si tu veux qu'on ajuste le devoir ou qu'on ajoute une étape JS légère à la démo.
