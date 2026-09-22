# Démo : la boucle IA, la suite (cours 5.1)

Notes d'animation, pas une page à publier. Reprend la même carte de projet que la démo du 4.1, mais cette fois avec votre vrai design Figma plutôt qu'un exemple générique, plus convaincant en démo live.

**Composant choisi** : une carte de la grille de projets (ex. BIOME), colonne image + numéro superposé, puis titre, catégorie/année, tags de compétences.

**Ce qui a déjà été vu au 4.1** : intention + complétion en ligne pour une carte générique. Aujourd'hui on recommence avec le vrai design, mais on passe vite sur ces deux étapes pour investir le temps dans ce qui n'a jamais été montré : Agent + révision, Ask, commit, journal.

## 0. Ouvrir le composant dans VS Code, pas dans le navigateur (2 min)

Nouveau depuis la dernière version de ce guide : utiliser l'extension **Figma for VS Code** pour rester dans un seul environnement.

1. Dans Figma (navigateur), sélectionner la carte BIOME seulement, pas la page complète. Dans le panneau Inspect, cliquer **Options** à côté du nom du calque → **Open in VS Code**.
2. Dans VS Code, l'icône Figma dans la barre d'activité montre le composant sélectionné. Onglet **Code** : les valeurs réelles (couleurs, espacement, typographie). Onglet **Component** : ses propriétés.

!!! danger "Ne pas activer le serveur MCP pour cette démo"
    Certains guides en ligne présentent cette extension et le serveur MCP comme une seule suite d'étapes. On s'arrête ici, avant « Enable MCP server ». Testé plus tôt aujourd'hui : donner à Copilot un accès MCP à la structure complète du fichier lui fait générer le site au complet sans qu'on le lui demande, l'inverse de l'objectif de cette démo. Le panneau d'inspection seul, sans le serveur MCP, ne donne accès qu'à ce que vous consultez vous-même, un composant à la fois.

## 1. Intention (recap rapide, 2 min)

Avec la carte BIOME ouverte dans le panneau Figma de VS Code, dire à voix haute, puis écrire en commentaire :

```html
<!-- Carte de projet : image avec numéro superposé, titre, catégorie + année, tags de compétences -->
```

## 2. Générer le HTML (recap rapide, 3 min)

Copier les valeurs pertinentes depuis l'onglet **Code** du panneau Figma (pas besoin de basculer vers le navigateur), les coller dans le chat Copilot avec l'intention. Accepter la suggestion en complétion en ligne, sans s'attarder, ce point a déjà été démontré au 4.1.

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
