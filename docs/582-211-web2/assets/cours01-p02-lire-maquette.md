---
marp: true
title: présentation 1
paginate: true
theme: rose-pine-moon
size: 16:9
---

<style>
aside::before { 
    content: "";
    font-weight: bold;
}
aside {
    width: 85%;
    border: 1px black solid;
    padding: 5px 5px 5px 5px;
    font-size: 14px !important;
    color: black  !important;
    font-weight: 400;
    line-height: 1.5em;
    background-color: #ffffff99;
    position: absolute;
    bottom: 15px;
}
</style>


# De la maquette de design au code

*L'art de prendre les bonnes décisions*

---

# Une maquette n'est PAS une recette

### Mythe :
> "La maquette me dit exactement quoi coder"

### Réalité :
> "La maquette montre une INTENTION. À moi de traduire en décisions techniques."

<br>
### Exemple :

- **Maquette :** "Espace = 24px"
- ❌ **Mauvaise lecture :** `margin: 24px` partout
- ✅ **Bonne lecture :** Créer une variable `--spacing: 1.5rem` et système cohérent


---

# Les 5 décisions CSS fondamentales

### Quand vous analysez une maquette :

1. **Structure / Layout** → Flexbox? Grid? Combinaison?
2. **Typographie** → Tailles, hiérarchie, échelle fluide
3. **Couleurs** → Palette, variables, thème
4. **Espacements** → Système cohérent (tokens)
5. **Responsive** → Points de rupture, adaptations

<br>

> "L'IA ne fait PAS ces choix systémiques."
---

## Démo live: Analyser une maquette (partie 1)

### Exemple : Landing page simple

#### 1. Structure

- "Header : logo + nav → **Flexbox**, `justify-content: space-between`"
- "Hero : texte + image → **Flexbox** 2 colonnes"
- "Cartes : **Grid** avec `repeat(auto-fit, minmax(...))`"

#### 2. Typographie

- "Titre : ~48px → `clamp(2rem, 5vw, 3rem)`"
- "Corps : 16-18px → `var(--font-size-base)`"

---

## Démo live: Analyser une maquette (partie 2)

#### 3. Couleurs

- "Palette : bleu, gris, blanc"
- "Variables : `--color-primary`, `--color-text`, `--color-bg`"

#### 4. Espacements

- "Entre sections : ~80px → `--spacing-section: 5rem`"
- "Entre éléments : ~24px → `--spacing-md: 1.5rem`"

#### 5. Responsive

- "Mobile : colonne, texte centré"
- "Desktop : 2 colonnes, texte gauche"
- "Breakpoint probable : ~768px (mais tester)"

---

## Message clé :

> Avant même de coder, j'ai pris 10 décisions. 
> .
> L'IA ne peut PAS faire ça. 
> Elle ne VOIT pas la maquette comme moi.

---

## CSS = Langage de décision

CSS n'est pas juste "rendre joli".

#### Chaque ligne = une décision :

- Pourquoi `flexbox` et pas `grid`?
- Pourquoi ce **breakpoint**?
- Pourquoi `rem` et pas `px`?
- Pourquoi cette **variable**?

#### Un bon intégrateur :

- Prend des décisions **intentionnelles**
- Peut **justifier** chaque choix
- Crée des **systèmes cohérents** (pas du code au coup par coup)

---

# Convivialité Web (UX de base)

### Principes essentiels à respecter :

✅ **Visibilité** → Éléments importants évidents  
✅ **Feedback** → Utilisateur sait que ça fonctionne (hover, focus, loading)  
✅ **Cohérence** → Même design pour actions similaires  
✅ **Accessibilité** → Navigation clavier, contrastes, tailles de clic 
<br>
> "L'IA oublie souvent ces principes. C'est VOTRE rôle de veiller sur ces principes."