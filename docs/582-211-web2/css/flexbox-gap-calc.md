# Flexbox, `gap` et `calc()` — gérer les colonnes en pourcentage

## Le problème

Quand tu construis une grille de colonnes avec Flexbox, l'instinct naturel est de diviser l'espace en parts égales :

```css
.player-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.player-card {
  flex-basis: 50%; /* 2 colonnes, non ? */
}
```

Mais ça ne fonctionne pas comme prévu. La deuxième carte tombe à la ligne.

## Pourquoi ?

En Flexbox, le `gap` crée de l'espace **entre** les éléments, mais cet espace est **retranché de la largeur totale disponible** du conteneur. Le navigateur procède ainsi :

1. Il prend la largeur du conteneur (ex. : `900px`)
2. Il soustrait le(s) gap(s) entre les éléments (ex. : `1.5rem` = `24px`)
3. Il distribue ce qui reste entre les éléments

Le problème : `flex-basis: 50%` est calculé sur la largeur **brute** du conteneur, avant que les gaps soient soustraits. Donc deux cartes à 50% + un gap = plus de 100%. La deuxième carte n'a plus de place et passe à la ligne suivante.

```
|←————————————— 900px ——————————————→|
| carte 450px | gap 24px | carte 450px |  ← 924px total = débordement !
```

## La solution : `calc()`

On corrige en soustrayant manuellement la part du gap qui revient à chaque carte.

### 2 colonnes

Il y a **1 gap** à répartir entre **2 cartes** → chaque carte cède `gap / 2`.

```css
.player-card {
  flex-basis: calc(50% - 0.75rem); /* 0.75rem = 1.5rem ÷ 2 */
}
```

```
|←————————————— 900px ——————————————→|
| carte 438px | gap 24px | carte 438px |  ← 900px exactement ✓
```

### 3 colonnes

Il y a **2 gaps** à répartir entre **3 cartes** → chaque carte cède `(gap × 2) / 3`.

```css
.player-card {
  flex-basis: calc(33.333% - 1rem); /* 1rem = (1.5rem × 2) ÷ 3 */
}
```

### Formule générale

```
flex-basis = (100% / nb-colonnes) - (gap × (nb-colonnes - 1) / nb-colonnes)
```



## Comparaison avec CSS Grid

En **Grid**, ce problème n'existe pas. Quand tu utilises l'unité `fr`, le navigateur calcule les fractions *après* avoir soustrait les gaps :

```css
.player-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 colonnes égales, gap inclus automatiquement */
  gap: 1.5rem;
}
```

Pas besoin de `calc()` — Grid s'en occupe tout seul. C'est l'une des raisons pour lesquelles Grid est souvent plus pratique pour les mises en page en colonnes régulières.

| | Flexbox | Grid |
|---|---|---|
| Colonnes en % | `calc()` nécessaire | — |
| Colonnes avec `fr` | — | Automatique |
| Layouts unidimensionnels | ✓ Idéal | Possible |
| Layouts bidimensionnels | Limité | ✓ Idéal |



## À retenir

> En Flexbox, `gap` n'est pas "gratuit" quand tu travailles en pourcentages.
> Utilise `calc()` pour soustraire la part de gap qui revient à chaque élément.
> En Grid, `fr` gère ça automatiquement.



## Références

- [MDN — flex-basis](https://developer.mozilla.org/fr/docs/Web/CSS/flex-basis)
- [MDN — gap (Flexbox)](https://developer.mozilla.org/fr/docs/Web/CSS/gap)
- [MDN — calc()](https://developer.mozilla.org/fr/docs/Web/CSS/calc)
- [CSS Tricks — A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
