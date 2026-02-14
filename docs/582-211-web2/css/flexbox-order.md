
# Propriété `order` (flexbox) 

> Réorganiser visuellement sans changer le HTML.

## Qu'est-ce que `order` ?

La propriété `order` permet de **changer l'ordre visuel** des items flex **sans modifier le HTML**.

Par défaut, tous les items ont `order: 0` et s'affichent dans l'ordre du HTML.

**Syntaxe :**

```css
.item {
  order: 0;  /* Valeur par défaut */
  order: 1;  /* Affiché après les items à order: 0 */
  order: -1; /* Affiché avant les items à order: 0 */
}
```

**Important :** Les valeurs peuvent être **négatives** et n'ont pas besoin d'être consécutives.



## Exemple de base

**HTML (ordre dans le code) :**
```html
<div class="conteneur">
  <div class="item item-1">Premier dans le HTML</div>
  <div class="item item-2">Deuxième dans le HTML</div>
  <div class="item item-3">Troisième dans le HTML</div>
</div>
```

**CSS (réorganisation visuelle) :**

```css
.conteneur {
  display: flex;
}

.item-1 {
  order: 3;  /* S'affiche en dernier */
}

.item-2 {
  order: 1;  /* S'affiche en premier */
}

.item-3 {
  order: 2;  /* S'affiche au milieu */
}
```

**Résultat visuel :**

```
[Deuxième] [Troisième] [Premier]
```



## Cas d'usage pratiques

### 1. Responsive : Réorganiser selon la taille d'écran

**Problème :** Sur mobile, vous voulez le menu en bas, mais sur desktop, vous le voulez en haut.
```css
/* Mobile : menu en bas */
.header {
  display: flex;
  flex-direction: column;
}

.logo {
  order: 1;  /* Logo en haut */
}

.menu {
  order: 2;  /* Menu en bas */
}

/* Desktop : menu en haut */
@media (min-width: 768px) {
  .header {
    flex-direction: row;
  }
  
  .logo {
    order: 2;  /* Logo à droite */
  }
  
  .menu {
    order: 1;  /* Menu à gauche */
  }
}
```

---

### 2. Mettre en avant un élément spécial

```css
.galerie {
  display: flex;
  flex-wrap: wrap;
}

.carte {
  order: 0;  /* Ordre normal */
}

.carte.featured {
  order: -1;  /* Toujours en premier */
  flex-basis: 100%;  /* Prend toute la largeur */
}
```

**Résultat :** La carte "featured" s'affiche toujours en premier, même si elle est au milieu du HTML.

---

### 3. Sidebar qui change de côté

```css
.layout {
  display: flex;
}

.sidebar {
  order: 1;  /* À gauche par défaut */
}

.contenu {
  order: 2;
}

/* Sidebar à droite sur certaines pages */
.layout.sidebar-right .sidebar {
  order: 3;  /* Déplace la sidebar après le contenu */
}
```

---

### ⚠️ Attention : Accessibilité

**IMPORTANT :** La propriété `order` change **uniquement l'ordre visuel**, pas l'ordre dans le DOM.

**Conséquences :**

- La navigation au clavier suit l'ordre du HTML (pas l'ordre visuel)
- Les lecteurs d'écran lisent dans l'ordre du HTML (pas l'ordre visuel)
- La sélection de texte suit l'ordre du HTML

**Bonne pratique :**

- Utilisez `order` pour des ajustements mineurs ou du responsive
- Pour des changements majeurs d'ordre, modifiez le HTML avec JavaScript si nécessaire
- Testez toujours la navigation au clavier



## Comparaison des valeurs

```css
/* Items avec différentes valeurs d'order */
.item-a { order: -2; }  /* 1er */
.item-b { order: -1; }  /* 2e */
.item-c { order: 0; }   /* 3e (défaut) */
.item-d { order: 0; }   /* 4e (même order = ordre HTML) */
.item-e { order: 1; }   /* 5e */
.item-f { order: 100; } /* 6e (dernier) */
```

**Ordre d'affichage :** A → B → C → D → E → F

**Règle :** Plus le nombre est petit, plus l'item apparaît tôt.


## Résumé

**Propriété `order` :**

- Change l'ordre visuel sans modifier le HTML
- Valeurs négatives possibles
- Attention à l'accessibilité