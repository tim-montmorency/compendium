# Code Smells en CSS

> *Un "code smell" n'est pas une erreur. C'est un signe que quelque chose pourrait poser problème plus tard.*


## Pourquoi apprendre à reconnaître les code smells ?

Le code généré par l'IA est souvent **correct mais fragile**. Il fonctionne dans le contexte pour lequel il a été généré — mais il se casse quand le projet évolue, quand un autre composant interagit avec lui, ou quand une résolution d'écran inattendue se présente.

Reconnaître les code smells, c'est **lire le code comme un professionnel** : pas juste vérifier que ça marche, mais anticiper ce qui pourrait casser.


## Les code smells CSS les plus fréquents

---

### 1. Les valeurs magiques

Des nombres qui apparaissent sans explication et qui seront oubliés dans 3 semaines.

```css
/* ❌ Valeurs magiques */
.card { padding: 23px; margin-top: 47px; font-size: 13.5px; }

/* ✅ Valeurs nommées */
.card { padding: var(--space-md); margin-top: var(--space-lg); font-size: var(--text-sm); }
```

**Pourquoi c'est un problème :** Impossible de savoir d'où vient `23px`. Si le système de design change, tu dois chercher et remplacer chaque valeur manuellement — et tu en rateras.

---

### 2. La spécificité excessive

Des sélecteurs trop précis qui rendent le CSS difficile à surcharger ou à réutiliser.

```css
/* ❌ Spécificité excessive */
body > main > section div.card > p.card__description { color: var(--color-text); }

/* ✅ Spécificité minimale et suffisante */
.card__description { color: var(--color-text); }
```

**Pourquoi c'est un problème :** Un sélecteur très spécifique "gagne" sur les règles plus simples, même quand elles devraient s'appliquer. Ça crée des conflits impossibles à débogguer sans augmenter la spécificité partout — une spirale vers l'enfer du `!important`.

---

### 3. Le `!important` en guise de solution

```css
/* ❌ Signe qu'on ne comprend pas la cascade */
.btn { color: white !important; background: blue !important; }
```

**Pourquoi c'est un problème :** `!important` est une capitulation. Il signifie "je ne comprends pas pourquoi ma règle ne s'applique pas, donc je force". En Phase 3, si tu utilises `!important`, c'est le signal que tu dois revoir la structure de tes sélecteurs.

*Exception légitime : reset CSS, accessibilité (forcer `outline` visible).*

---

### 4. La redondance silencieuse

Le même style déclaré plusieurs fois, souvent parce que le code a été généré en plusieurs passes.

```css
/* ❌ Redondance */
.card { border-radius: 8px; }
.card { background: white; }
.card { border-radius: 12px; } /* Quelle valeur gagne ? */

/* ✅ Regroupé */
.card { background: white; border-radius: 12px; }
```

**Pourquoi c'est un problème :** La dernière déclaration gagne (cascade). Mais si quelqu'un lit le code de haut en bas, il pensera que `8px` s'applique. La redondance crée de la confusion et des bugs silencieux.

---

### 5. Les propriétés par défaut déclarées explicitement

L'IA a tendance à écrire des propriétés qui n'ont pas besoin d'être écrites parce qu'elles correspondent déjà à la valeur par défaut du navigateur.

```css
/* ❌ Superflu */
p { display: block; }                    /* block est la valeur par défaut de <p> */
ul { list-style: disc; }                 /* déjà la valeur par défaut */
.flex-container { flex-direction: row; } /* row est la valeur par défaut de flexbox */
span { display: inline; }               /* inline est la valeur par défaut de <span> */
```

**Pourquoi c'est un problème :** Ça alourdit le code inutilement et ça brouille la lecture — on ne sait plus ce qui est une décision intentionnelle et ce qui est du remplissage.

---

### 6. Le nommage générique ou incohérent

```css
/* ❌ Classes sans contexte */
.box { }
.text { }
.blue { }
.big { }

/* ❌ Mélange de conventions */
.card-header { }    /* kebab-case */
.cardBody { }       /* camelCase */
.card_footer { }    /* snake_case */

/* ✅ Nommage contextuel et cohérent (BEM) */
.card__header { }
.card__body { }
.card__footer { }
```

**Pourquoi c'est un problème :** Les classes génériques (`blue`, `big`) ne survivent pas à un changement de design. Les conventions mélangées rendent le code imprévisible — tu ne sais jamais comment nommer la prochaine chose.

---

### 7. L'absence d'états interactifs

L'IA génère souvent des composants sans penser aux états `:hover`, `:focus`, `:active`, `:disabled`.

```css
/* ❌ Incomplet */
.btn { background: var(--color-primary); color: white; padding: var(--space-sm) var(--space-md); }

/* ✅ Complet */
.btn { background: var(--color-primary); color: white; padding: var(--space-sm) var(--space-md); cursor: pointer; transition: background 200ms ease; }
.btn:hover { background: var(--color-primary-hover); }
.btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.btn:active { transform: translateY(1px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

**Pourquoi c'est un problème :** Un composant sans états interactifs n'est pas accessible et n'est pas terminé. C'est le signe le plus courant d'un code généré et non audité.


## Outil de détection rapide

Quand tu reçois du code généré par l'IA, passe-le en revue avec ces 7 questions :

1. Est-ce qu'il y a des valeurs numériques sans variable ? → *Valeurs magiques*
2. Est-ce que les sélecteurs ont plus de 2 niveaux de profondeur ? → *Spécificité excessive*
3. Est-ce qu'il y a des `!important` ? → *Capitulation de cascade*
4. Est-ce qu'une propriété est déclarée deux fois sur le même sélecteur ? → *Redondance*
5. Est-ce qu'il y a des propriétés par défaut déclarées explicitement ? → *Superflu*
6. Est-ce que le nommage est cohérent avec une méthodologie ? → *Convention de nommage*
7. Est-ce que `:hover` et `:focus-visible` sont présents sur les éléments interactifs ? → *États manquants*

> Si tu réponds "oui" à 3 de ces questions ou plus, le code mérite d'être refactorisé avant d'être livré.
