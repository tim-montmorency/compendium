# Flux (flow) en HTML/CSS  

*Le flux natif de la page HTML*

Le **flux** (ou **flot**, *flow* en anglais) décrit la façon **naturelle** dont le navigateur place les éléments HTML **sans règles de mise en page particulières**.  

Comprendre le flux permet de mieux prédire **où se place un élément**, et surtout de comprendre **ce qui se passe lorsqu’on modifie son comportement avec CSS**.


## 1. Le flux normal (*normal flow*)

Par défaut, tous les éléments HTML suivent le **flux normal**.  
Leur comportement dépend principalement de leur type d’affichage, que l’on peut simplifier en deux grandes catégories : **inline** et **block**.

---

### a) Éléments en ligne (*inline*)

- Exemples courants : `<span>`, `<a>`, `<strong>`, `<em>`
- Ils se placent **sur une même ligne**, les uns à la suite des autres
- Ils occupent **uniquement la largeur de leur contenu**
- Lorsqu’il n’y a plus assez d’espace horizontal, ils **reviennent automatiquement à la ligne**

**Exemple :**

```html
<p>Bonjour <strong>monde</strong> !</p>
```

Dans cet exemple, tous les éléments restent sur une même ligne tant que l’espace le permet.

--- 

### b) Éléments de bloc (block)

- Exemples courants : `<div>`, `<p>`, `<h1>`, `<ul>`, `<section>`
- Chaque élément commence sur une *nouvelle ligne*
- Les éléments s'empilent *verticalement*
- Ils occupent par défaut *toute la largeur disponible*

**Exemple :**

```html
<div>Bloc 1</div>
<div>Bloc 2</div>
```

**Résultat :**

`Bloc 2` se place automatiquement sous `Bloc 1`.

## 2. Le flux et le box model

Le flux est influencé par le box model, qui définit l’espace occupé par un élément :

- `content` : le contenu
- `padding` : espace intérieur
- `border` : la bordure
- `margin` : espace extérieur

Les marges sont particulièrement importantes, car elles créent des espacements entre les éléments dans le flux.

!!! warning À noter :
    Les marges verticales de certains éléments de bloc peuvent *fusionner* (margin collapsing).
    Cela explique pourquoi deux éléments peuvent parfois sembler avoir “moins d’espace que prévu” entre eux.

## 3. Modifier ou sortir du flux normal

Pour créer des mises en page plus complexes, CSS permet de modifier le comportement du flux, voire d’en sortir complètement.

### a) `float` (flottement)

- Un élément flottant se place à gauche ou à droite
- Le contenu qui le suit peut *s'enrouler autour*
- L'élément reste partiellement lié au flux, mais perturbe l'organisation normale

**Exemple typique :**

```html
<img src="image.jpg" style="float:left;">
<p>Du texte qui s’enroule autour de l’image.</p>
```

`float` est surtout utilisé historiquement (avant Flexbox et Grid).

On le rencontre encore, mais il est rarement utilisé pour de nouvelles mises en page complètes.

---


### b) position (positionnement)

La propriété position permet de placer un élément de manière plus précise.

- `relative` : L'élément reste *dans le flux*, mais peut être décalé visuellement.
- `absolute` : L'élément *sort du flux* et est positionné *par rapport à un ancêtre (parent) positionné*. Il est sur une sorte de calque supérieur au flux normal de la page.
- `fixed` : L'élément est fixé *par rapport à la fenêtre du navigateur* (ex. menu ou bouton fixe). Il *sort aussi du flux*.

> Indice visuel important :
> Si un élément *se superpose aux autres* et laisse un “trou” derrière lui, il est probablement *hors du flux*.

---

### c) Flexbox et Grid

Les modules modernes de mise en page permettent de contrôler le flux de manière structurée.

- **Flexbox** (`display: flex`)
  - Organisation en ligne ou en colonne
  - Alignement et distribution des éléments
  - Très utilisé pour les interfaces et composants

- **Grid** (`display: grid`)
  - Mise en page en lignes et colonnes
  - Parfait pour les gabarits complets (header, sidebar, contenu, footer)

Ces outils permettent de créer des mises en page complexes *sans casser la logique du flux* de manière imprévisible.

---

## 4. Quand rester dans le flux?

Le flux naturel est idéal pour :

- Des documents textuels
- Des articles
- De la documentation
- Des contenus linéaires

Dès qu’une mise en page devient plus structurée (colonnes, cartes, barres latérales, tableaux visuels), on utilise :

- **Flexbox** (`display: flex`)
- **Grid** (`display: grid`)
- Parfois `position` (pour des cas spécifiques)


## Être ou ne pas être dans le flux

Un élément est dit :

in-flow : il participe normalement à l’organisation de la page

out-of-flow : il ne réserve plus d’espace et peut se superposer aux autres éléments

Comprendre cette distinction est essentiel pour éviter des mises en page “qui cassent”.

[![](../assets/logo-mdn.svg) Être ou ne pas être dans le flux](https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)


## À retenir / Erreurs fréquentes

### À retenir

- Les éléments inline s'organisent horizontalement
- Les éléments block s'empilent verticalement
- Sortir du flux (absolute, fixed) signifie ne plus réserver d'espace
- Flexbox et Grid sont les outils modernes recommandés pour la mise en page

### Erreurs fréquentes

- Essayer d’aligner des blocs uniquement avec des marges
- Utiliser `position: absolute` pour faire une mise en page complète
- Oublier qu’un élément hors du flux peut recouvrir les autres
- Ne pas comprendre pourquoi un élément “remonte” quand un autre est retiré du flux



## Activité rapide d’observation (en classe)

À partir de la démonstration visuelle :

1. **Flux normal**
    - Quels éléments prennent de la place dans la page ?
    - Observe l’ordre vertical des blocs.

2. **Position absolute**
    - Quel élément ne réserve plus d’espace ?
    - Que devient l’élément qui suit dans le HTML ?

3. **Flex ou Grid**
    - Comment les éléments sont-ils redistribués ?
    - En quoi ce comportement est-il différent du flux normal ?

<p class="codepen" data-height="700" data-theme-id="44168" data-default-tab="result" data-slug-hash="jErvvOj" data-pen-title="DEMO Flot natif html et interruption du flot avec CSS" data-user="tim-momo" style="height: 700px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/tim-momo/pen/jErvvOj">
DEMO Flot natif html et interruption du flot avec CSS</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>
