# Démo : la boucle IA, la suite (cours 5.1)

Notes de présentation pour MM, pas une page à publier. 

Reprend la même carte de projet que la démo du 4.1, mais cette fois avec votre vrai design Figma plutôt qu'un exemple générique, plus convaincant en démo live.

- [Figma (lien non public)](https://www.figma.com/design/cN0GIjIo046GJYgrdcUMqr/demo-portfolio-utilis%C3%A9-pour-demo-en-classe-avec-le-repo-demo-portfolio?node-id=1-908&m=dev)
- [Repo demo-portfolio: (lien privé)](https://github.com/marie-michelle-ouellet/demo-portfolio)

---

**Composant choisi** : Une carte de la grille de projets (ex. BIOME): Flexbox en colonne: 

- numéro de projet (commençant par 01)
- image du projet (vignette), 
- titre, 
- catégorie (à gauche) et année (à droite), 
- tags de compétences (logiciels).

**Ce qui a déjà été vu au 4.1** : intention + complétion en ligne pour une carte générique. 

Aujourd'hui on recommence avec le vrai design, mais on passe vite sur ces deux étapes:

- intention + complétion en ligne

pour investir le temps dans ce qui n'a jamais été montré : 

- Agent + révision, 
- Ask, 
- commit, 
- journal.

## 0. Exporter le composant en PNG, pas Figma for VS Code (2 min)

Testé entre les deux versions de ce guide : Figma for VS Code sans le serveur MCP ne donne rien de plus qu'un aller-retour manuel, Copilot ne voit jamais le panneau, il faut quand même lui fournir une image ou du texte. Abandonné, remplacé par ceci :

1. Dans Figma, activer le **Dev Mode** (icône `</>` en haut à droite).
2. Sélectionner le calque de la carte BIOME, pas la page complète.
3. **Export → PNG**, à 1x.
4. Enregistrer dans `exports-composants/carte-projet.png` (nommé comme le fichier CSS à venir, pas « Frame 1 »).
5. Glisser ce fichier dans le chat Copilot, avec l'intention en texte à côté.

```html
<!-- 
  Carte de projet tel que sélectionnée dans Figma. Cette carte contient (en ordre) :
  - numéro de projet (commençant par 01)
  - image du projet (vignette), 
  - titre, 
  - catégorie (à gauche) et année (à droite), 
  - tags de compétences (logiciels). 
  -->
```

!!! tip "Mentionner en classe : ce dossier reste dans le dépôt"
    Pas dans `.gitignore`. Ça donne une trace datée de ce qu'ils avaient sous les yeux en générant chaque composant, utile pour eux, et repérable dans l'historique Git si jamais un suivi individuel en a besoin.

## 1. Intention (recap rapide, 2 min)

L'intention est déjà écrite à l'étape 0, avec l'image jointe. Le recap ici, c'est de le dire à voix haute devant la classe : l'intention et l'image partent toujours ensemble dans le même message.

## 2. Générer le HTML (recap rapide, 3 min)

Accepter la suggestion en complétion en ligne, sans s'attarder, ce point a déjà été démontré au 4.1.

```html
<article class="carte-projet">
  <div class="carte-projet__image">
    <span class="carte-projet__numero">01</span>
  </div>
  <h3 class="carte-projet__titre">Biome</h3>
  <div class="carte-projet__meta">
    <span class="carte-projet__categorie">3D Modélisation</span>
    <span class="carte-projet__annee">2025</span>
  </div>
  <div class="carte-projet__tags">
    <span class="carte-projet__tag">Blender</span>
    <span class="carte-projet__tag">Cinema 4D</span>
  </div>
</article>
```

## 3. Agent + révision : le vrai point de départ d'aujourd'hui (10 min)

Dire : « Mes classes ne suivent pas encore BEM correctement, et je veux gérer les 6 couleurs de fond différentes sans dupliquer mon CSS. »

Vérifier qu'on est en **Agent**, avec l'option qui demande votre accord avant chaque changement (voir `modes-copilot-ancien-nouveau.md` selon le poste). Prompt :

```text
Renomme les classes de cette carte selon BEM si nécessaire, puis ajoute
une variable CSS par carte (--couleur-carte) pour gérer une couleur de
fond différente par projet, sans dupliquer les styles.
```

Montrer le diff proposé, l'accepter ligne par ligne. Insister : c'est le moment où on voit vraiment ce qui a changé, pas juste cliquer « accepter tout ».

```css
.carte-projet__image {
  background: var(--couleur-carte);
}
```
```html
<article class="carte-projet" style="--couleur-carte: #1a2a3a;">
```

## 4. Ask : comprendre une technique du design (5 min)

Sélectionner le CSS du numéro superposé (`carte-projet__numero`), ouvrir le chat en **Ask** :

```text
Explique-moi comment ce numéro reste positionné dans le coin de l'image
peu importe la taille de la carte.
```

Bon moment pour faire nommer par la classe le principe (position relative sur le parent, absolue sur l'enfant) plutôt que de juste lire la réponse.

## 5. Commit (2 min)

```bash
git add .
git commit -m "Carte de projet : BEM, variable de couleur par carte"
git push
```

## 6. Documenter dans JOURNAL.md (3 min)

Rappel : pas les complétions des étapes 1-2, seulement les prompts délibérés des étapes 3 et 4. Faire écrire l'entrée devant eux, au format déjà établi (Date / Prompt / Outil / Résultat).

## Après la démo

Enchaîner directement sur le mini-exercice de la page de cours : ils reproduisent ces mêmes 4 étapes (Agent + révision, Ask, commit, journal) sur une carte de leur propre portfolio, pas nécessairement la même que celle utilisée pour l'exemple.
