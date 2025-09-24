# Exercice 2 — Carte de bingo (5×5)

**Objectif :** créer une grille 5 colonnes × 5 rangées avec un `gap`. La cellule centrale doit afficher **★** (déjà placée dans le HTML).

[📥 Télécharger fichiers de départ](ex-grid-carte-bingo-fichiers-depart.zip){ .md-button }

## Tâches
1. Sur `.bingo`, activez Grid : `display: grid;`  
2. Définissez **5 colonnes** et **5 rangées** égales :  
   - `grid-template-columns: repeat(5, 1fr);`  
   - `grid-template-rows: repeat(5, 80px);` (ou autre hauteur)  
3. Ajoutez `gap: 6px;` (ou la valeur de votre choix).
