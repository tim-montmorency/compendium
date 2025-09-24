# Exercice 3 — Mise en page simple (2 colonnes)

**Objectif :** réaliser une mise en page basique avec un header pleine largeur, une grille principale à 2 colonnes (nav + contenu), puis un footer pleine largeur. On reste dans les **bases de Grid**.

## Tâches
1. Sur `.grid-layout`, activez Grid : `display: grid;`  
2. Définissez **2 colonnes** : par exemple `grid-template-columns: 240px 1fr;`  
3. Ajoutez `gap: 16px;` entre les colonnes.  
4. Ne pas utiliser `grid-area`, `grid-column` ni `grid-row`. Le header/ footer restent **en dehors** de la grille principale.

> Variante responsive (optionnelle) : sous 640px de largeur, vous pouvez passer la grille en 1 colonne (`grid-template-columns: 1fr;`) et placer la navigation **au-dessus** du contenu.
