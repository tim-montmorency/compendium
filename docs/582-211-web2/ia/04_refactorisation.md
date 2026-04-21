# Refactorisation CSS : lisibilité, cohérence, simplification



## Qu'est-ce que refactoriser ?

Refactoriser, c'est **améliorer la structure du code sans changer son comportement**. Le résultat visuel reste identique : mais le code devient plus lisible, plus maintenable, et plus facile à faire évoluer.

En CSS, ça veut dire : supprimer la redondance, clarifier les intentions, regrouper ce qui va ensemble, et nommer ce qu'on manipule.

> *« Refactoriser, ce n'est pas réécrire. C'est nettoyer. »*



## Pourquoi refactoriser est une compétence professionnelle

Dans un milieu de travail :
- Le code que tu écris sera lu par quelqu'un d'autre (ou par toi dans 6 mois)
- Le code généré par l'IA est souvent fonctionnel mais verbeux et peu cohérent
- Un projet qui grandit avec du mauvais CSS devient rapidement ingérable

Savoir refactoriser, c'est savoir **prendre une responsabilité sur le code** : pas juste le faire fonctionner.



## Les trois axes de la refactorisation CSS

### 1. Lisibilité

Le code lisible se lit comme une intention, pas comme une liste de propriétés.

**Avant 01 :**
```css
.card { background: #fff; padding: 16px; border-radius: 8px; display: flex; flex-direction: column; gap: 12px; max-width: 400px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
```

**ou avant 02 :**
```css
.card{background: #fff; 
padding: 16px;border-radius: 8px; 
  display: flex; 
  flex-direction: column; 
  gap: 12px; 
    max-width: 400px; 
box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
```

**Après :**
```css
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  max-width: 400px;
  padding: var(--space-md);
  border-radius: var(--radius-md);

  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);
}
```

Ce qui change : indentation, regroupement logique (disposition → dimensions → apparence), remplacement des valeurs magiques par des variables.

---

### 2. Cohérence

La cohérence, c'est utiliser les mêmes décisions partout. Si tu utilises `rem` pour la typographie, tu utilises `rem` partout. Si tu nommes tes modificateurs avec `--`, tu le fais partout.

**Problème fréquent dans le code généré par IA :**
```css
.btn { padding: 8px 16px; font-size: 14px; }
.card__title { font-size: 1.2rem; margin-bottom: 0.5em; }
.badge { padding: 4px 8px; font-size: 12px; }
```

Trois conventions d'unités différentes dans le même fichier. Quand ce fichier grossit, ça devient un problème de maintenance réel.

**Après refactorisation :**
```css
.btn { padding: var(--space-xs) var(--space-sm); font-size: var(--text-sm); }
.card__title { font-size: var(--text-lg); margin-bottom: var(--space-xs); }
.badge { padding: var(--space-xs) var(--space-sm); font-size: var(--text-xs); }
```

---

### 3. Simplification

Supprimer ce qui n'est pas nécessaire. L'IA a tendance à surspécifier : à écrire plus de CSS qu'il n'en faut pour être "sûre".

**Exemples de CSS superflu courant :**

```css
/* Redondant : display: block est la valeur par défaut de <p> */
p { display: block; }

/* Inutile : flex-direction: row est la valeur par défaut de flexbox */
.container { display: flex; flex-direction: row; }

/* Surspécifié : pas besoin du sélecteur parent si la classe est unique */
div.card > p.card__text { color: var(--color-text); }
/* → suffisant : */
.card__text { color: var(--color-text); }
```


## Processus de refactorisation recommandé

1. **Lire d'abord, modifier ensuite.** Comprendre l'intention du code avant de toucher quoi que ce soit.
2. **Identifier les variables candidates.** Toute valeur qui se répète plus d'une fois est candidate à devenir une custom property.
3. **Regrouper par logique, pas par type de propriété.** Les propriétés de disposition ensemble, les propriétés d'apparence ensemble.
4. **Nommer ce qui n'a pas de nom.** Si une valeur n'est pas évidente (`0.875rem`), la remplacer par une variable nommée (`--text-sm`).
5. **Supprimer le superflu.** Propriétés par défaut, sélecteurs trop spécifiques, règles dupliquées.
6. **Tester visuellement à chaque étape.** La refactorisation ne doit rien changer à l'affichage.


## Exercice rapide en classe

Prends ce bloc CSS généré par une IA et identifie au moins **5 choses à améliorer** :

```css
.testimonial-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

.testimonial-card .testimonial-card__quote {
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  font-style: italic;
}

div.testimonial-card > div.testimonial-card__author {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}

.testimonial-card__name {
  font-size: 14px;
  font-weight: 700;
  color: #111111;
  display: block;
}

.testimonial-card__role {
  font-size: 12px;
  color: #666666;
  display: block;
}
```

**Pistes de réflexion :**

- Quelles valeurs se répètent et mériteraient d'être des variables ?
- Quels sélecteurs sont trop spécifiques ?
- Quelles propriétés sont superflues (valeurs par défaut) ?
- Est-ce que le nommage est cohérent ?
- Qu'est-ce qui manque (états, accessibilité) ?
