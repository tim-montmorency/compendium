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
code{
   background: #000000;
}

.inbrisable{
    white-space: nowrap;
}
table{
    border: 0;
    background-color: rgba(255,255,255,0.2);
}
thead th{
    font-size: 28px;
    text-align: left;  
}
th strong, table strong{
    color : #363154 ;
}
table td{
    font-size: 22px;
    color: #484171; 
}

</style>


# Architecture CSS Maintenable

*Écrire du code que vous comprendrez toujours si vous le réouvrez dans 6 mois*

---

# Le vrai problème du CSS

## Mythe :

> "Le CSS, c'est facile. Il suffit de donner du style aux éléments."

## Réalité :

> Le CSS devient un cauchemar quand :
> - Vous avez 50+ composants
> - 3 personnes travaillent sur le même projet
> - Vous revenez sur du code après 3 mois et vous ne vous retrouvez plus

---

# Ce qui différencie un débutant d'un pro :

❌ Débutant : 
 - Mon code fonctionne ✓

✅ Pro : 
- Mon code fonctionne   ✓
- ET 
- quelqu'un d'autre peut le maintenir ✓

---

# Les 3 piliers d'une bonne architecture CSS

1. **Organisation claire** → On sait où trouver quoi
2. **Nomenclature cohérente** → Les noms ont du sens
3. **Documentation intentionnelle** → On comprend le "pourquoi"

> --

### Sans ces 3 piliers :

- Vous **perdez du temps** à chercher
- Vous **dupliquez du code par peur** de casser quelque chose
- Vous créez des **conflits de styles**
- Votre projet devient **ingérable à 500+ lignes de CSS**

---

# EXPOSÉ
## POURQUOI L'ARCHITECTURE CSS EST IMPORTANTE

---


# Deux approches d'architecture CSS

Il existe deux philosophies principales :

## 1. Classes de COMPOSANTS
## 2. Classes UTILITAIRES

--- 

## Approche 1: Classes de COMPOSANTS

> "Je crée des blocs réutilisables avec leur propre style complet"

```
.card {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  background: white;
}
.card__title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.card__button {
  background: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
}
```

---

## Approche 2 - Classes UTILITAIRES

> "Je crée des classes à usage unique que je combine"

###### Exemple CSS :

```
.p-6 { padding: 1.5rem; }
.border { border: 1px solid #e0e0e0; }
.rounded { border-radius: 0.5rem; }
.bg-white { background: white; }
.text-xl { font-size: 1.5rem; }
.text-gray-800 { color: #2c3e50; }
.mb-2 { margin-bottom: 0.5rem; }
```

###### Ces classes sont ensuite appliquée dans le HTML comme par exemple: 

```
<div class="p-6 border rounded bg-white">
  <h2 class="text-xl text-gray-800 mb-2">Titre</h2>
  <button class="bg-blue text-white p-3 rounded">Action</button>
</div>
```

---

## Composants vs Utilitaires: Comparaison

| **Aspect** | **Composants** | **Utilitaires** |
|------------|----------------|-----------------|
| **Réutilisabilité** | Bloc entier réutilisable | Petites pièces combinables |
| **Lisibilité HTML** | Propre, sémantique | Beaucoup de classes |
| **Lisibilité CSS** | Tout regroupé | CSS minimal |
| **Flexibilité** | Moins flexible | Très flexible |
| **Courbe d'apprentissage** | Facile | Nécessite de connaître les classes |
| **Exemple** | BEM, SMACSS | Tailwind ou Bootstrap |

---

#  Quand utiliser les CSS par *composants* ?

<br>

Utilisez des classes de COMPOSANTS quand :

- Vous avez un élément qui se répète **identiquement** partout (navbar, card, modal)
- Vous voulez **encapsuler** toute la logique d'un composant
- Vous travaillez **en équipe** et voulez des conventions claires
- Vous voulez un HTML **lisible, propre et sémantique**

<br>

> **Exemple typique :** Cartes de produits, boutons avec icônes, en-têtes de sections

---

# Quand utiliser les les CSS *utilitaires* ?

<br>

Utilisez des classes UTILITAIRES quand :

- Vous avez besoin de **variations rapides** (espacements différents, couleurs contextuelles)
- Vous voulez **prototyper rapidement**
- Vous avez des **ajustements ponctuels** qui ne méritent pas un composant complet
- Vous voulez éviter de créer 50 variations d'un même composant

<br>

**Exemple typique :** Espacements, alignements, tailles de texte ponctuelles

---

# La meilleure approche? LES DEUX!

En réalité, les pros combinent les deux :

| **CSS** | **HTML** |
|---------|----------|
| <pre>/* COMPOSANTS pour la structure */<br>.card {<br>  padding: 1.5rem;<br>  border: 1px solid var(--color-border);<br>  border-radius: var(--radius-md);<br>  background: var(--color-bg);<br>}<br><br>/* UTILITAIRES pour les variations */<br>.mt-4 { margin-top: 1rem; }<br>.mb-6 { margin-bottom: 1.5rem; }<br>.text-center { text-align: center; }</pre> | <pre>&lt;article class="card mt-4"&gt;<br>  &lt;h2 class="card__title text-center"&gt;Titre&lt;/h2&gt;<br>  &lt;p class="card__description mb-6"&gt;Description&lt;/p&gt;<br>&lt;/article&gt;</pre> |

---

# L'architecture que l'IA ne peut PAS créer

## L'IA peut générer :

- ✅ Du CSS qui fonctionne
- ✅ Des styles individuels

## L'IA ne peut PAS :

- ❌ Décider si ce devrait être un composant ou des utilitaires
- ❌ Créer une nomenclature cohérente pour tout le projet
- ❌ Savoir quels composants seront réutilisés
- ❌ Documenter l'intention architecturale

---

> # *C'est VOTRE job d'architecte CSS !*

---

## Lisibilité = Maintenabilité

Code illisible :

```
.c { padding: 20px; }
.c h2 { color: #333; }
.c .p { font-size: 20px; }
```

Code lisible :

```
/* Composant : Carte de produit */
.product-card {
  padding: var(--spacing-lg);
}
.product-card__title {
  color: var(--color-text-primary);
}
.product-card__price {
  font-size: var(--font-size-xl);
}
```

---

> # Question : Lequel préférez-vous relire dans 6 mois?

---

# Démo Live - Le code spaghetti

> Vous vous souvenez de l'exercice du début?


### Problèmes identifiés :

- ❌ Noms de classes incompréhensibles (`.c`, `.c2`, `.c3`, `.p`, `.p2`)  
- ❌ Code dupliqué 3 fois (boutons, cartes)  
- ❌ Impossible de savoir ce que fait chaque classe  
- ❌ Aucun commentaire  
- ❌ Propriétés communes non factorisées

>  **Résultat :** Niveau de frustration moyenne de 4/5

---

## Et si on refactorisait le code de l'exercice spaghetti?

| **❌ Avant (code spaghetti)** | **✅ Après (code organisé)** |
|--------------------------------|-------------------------------|
| <pre>.c { <br>&nbsp;&nbsp;width: 300px; border: 1px solid #b6b6be; <br>&nbsp;&nbsp;padding: 20px; ...<br>}<br>.c2 {  <br>&nbsp;&nbsp;pawidth: 300px; border: 1px solid #b6b6be;  <br>&nbsp;&nbsp;padding: 20px; ... <br> } <br>.c3 {  <br>&nbsp;&nbsp;pawidth: 300px; border: 1px solid #b6b6be;  <br>&nbsp;&nbsp;padding: 20px; ... <br>}<br>.c button { background: #3498db; ...  }<br>.c2 button { background: #3498db; ... }<br>.c3 button { background: #3498db; ... }</pre> | <pre>/ * Base commune * / <br>.product-card {<br>&nbsp;&nbsp;width: 300px;<br>&nbsp;&nbsp;border: 1px solid var(--color-border);<br>&nbsp;&nbsp;padding: var(--spacing-lg);<br>}<br><br>/ * Variations * /<br>.product-card--horizontal { display: flex; }<br>.product-card--featured { border-width: 2px; }<br><br>/ * Bouton (une seule fois!) * /<br>.product-card__button { <br>&nbsp;&nbsp; background: var(--color-primary); <br>}</pre> |

---

# Les bénéfices de la refactorisation

Avant :

- 🔴 150 lignes de CSS
- 🔴 Code répété 3 fois
- 🔴 Changement = modifier 3 endroits
- 🔴 Incompréhensible après 2 semaines

Après :

- 🟢 80 lignes de CSS (-47%)
- 🟢 Code factorisé, DRY (Don't Repeat Yourself)
- 🟢 Changement de style? = modifier à 1 endroit
- 🟢 Compréhensible immédiatement

---

> # Même résultat visuel. Code 2x meilleur.

---

## Spécificité CSS - Le défi caché

**Problème courant :**
```
/* Règle générale */
button {
  background: gray;
}

/* Plus spécifique */
.card button {
  background: blue;
}

/* Encore plus spécifique */
.card .card-footer button {
  background: red;
}
```

**Question :** Quelle couleur aura le bouton dans `.card .card-footer`?

**Réponse :** Rouge (règle la plus spécifique gagne)

--- 

#  Maîtriser la spécificité

## Hiérarchie de spécificité (du moins au plus spécifique) :

1. **Balise** (`button`) → Spécificité : 1
2. **Classe** (`.btn`) → Spécificité : 10
3. **ID** (`#submit`) → Spécificité : 100
4. **Inline style** (`< p style="">`) → Spécificité : 1000
5. **!important** (`!important`) → Spécificité : ∞ (à éviter!)

---

> # Bonne pratique
> ### Utiliser principalement des *classes* `.classs` pour un code prévisible

---

# Exemple de conflit de spécificité

```
/* Spécificité : 1 (balise) */
p { color: black; }

/* Spécificité : 10 (classe) */
.intro { color: blue; }

/* Spécificité : 11 (classe + balise) */
.article p { color: red; }
```

```
<article class="article">
  <p class="intro">Quel couleur sera ce texte?</p>
</article>
```

<br>

**Question :** Quel couleur sera le texte du paragraphe `p.intro`?

<br>

**Réponse :** Rouge (`.article p` = 11 > `.intro` = 10)

---

#  Comment éviter les guerres de spécificité?

## ✅ Bonnes pratiques :

1. **Utilisez des classes** plutôt que des IDs
2. **Évitez les sélecteurs trop profonds** (`.a .b .c .d` = danger)
3. **BEM aide** car classes plates (`.card__title` vs `.card .title`)
4. **Évitez `!important`** (sauf cas exceptionnels)
5. Utiliser les **variables CSS** pour valeurs partagées

---

> # Objectif : 
> ## Code prévisible où vous savez quelle règle s'applique

---

# Votre parcours d'apprentissage

## 📍 Vous êtes ici (cours 3) :

- Comprendre pourquoi l'architecture compte
- Composants vs Utilitaires
- Nomenclature cohérente (BEM - cours suivant)

## 🎯 Prochaines étapes :

- **Cours 3-4** : CSS fluide et variables
- **Cours 4-5** : Flexbox (système de mise en page)
- **Cours 8-10** : Responsive design
- **Projet 1** : Assembler une interface complète

---

> # Aujourd'hui : 
> ## Poser les fondations d'un code de qualité

---

# Récapitulatif

### Ce qu'on a appris :

✅ Architecture CSS = **organisation + nomenclature + documentation**  
✅ Deux approches : **Composants** (blocs réutilisables) vs **Utilitaires** (classes atomiques)  
✅ Les pros **combinent les deux** selon le besoin  
✅ Lisibilité = **code maintenable dans le temps**  
✅ L'IA génère du code, **vous créez des systèmes**  
✅ Spécificité CSS : comprendre quelle règle gagne  

---

# Message final

> ## L'architecture CSS n'est pas glamour.  
> On ne la voit pas visuellement.
>
> ## Mais c'est ce qui différencie :
> - Un site qui fonctionne
> - Un site qui fonctionne ET qu'on peut maintenir pendant 3 ans

<br>

**L'IA peut coder. Vous, vous architecturez.**  
**C'est là votre valeur.**
