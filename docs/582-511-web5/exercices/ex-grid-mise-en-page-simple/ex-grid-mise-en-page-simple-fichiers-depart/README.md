# Exercice 3 — Mise en page simple (2 colonnes)

**Objectif :** réaliser une mise en page basique avec un header pleine largeur, une grille principale à 2 colonnes (nav + contenu), puis un footer pleine largeur. On reste dans les **bases de Grid**.

## Tâches
- [ ] 1. Sur `.grid-layout`, activez la grille. 
- [ ] 2. Définissez **2 colonnes**. La navigation de gauche devrait être de largeur fixe. Le contenu principal de droite, devrait être flexible en occupant tout l'espace restant sur la rangée.
- [ ] 3. Ajoutez un espace de `16px`entre les colonnes.  

Note: Ne pas utiliser `grid-area`, `grid-column` ni `grid-row`. 
Aussi, le header/ footer restent **en dehors** de la grille principale.

> Variante responsive (optionnelle) : sous 640px de largeur de fenêtre, vous pouvez passer la grille en 1 colonne (`grid-template-columns: 1fr;`) et placer la navigation **au-dessus** du contenu.
