# L'accessibilité : les 4 points de la grille (WCAG AA)

!!! abstract "L'essentiel en 3 points"
    1. Un site accessible s'utilise **sans souris**, **sans voir les images** et **sans une vue parfaite**. La norme de référence s'appelle WCAG; votre grille exige le **niveau AA**.
    2. La grille nomme **4 points** : la **sémantique** HTML5, les attributs **`alt`**, le **contraste** et la **navigation au clavier**. Chacun se teste en quelques minutes.
    3. Les outils (WAVE, Lighthouse) trouvent une partie des problèmes. Le **test au clavier**, fait par un humain, trouve le reste.

Pour qui? Une personne aveugle qui utilise un lecteur d'écran, une personne qui ne peut pas utiliser de souris, une personne âgée qui voit moins bien les contrastes, quelqu'un qui consulte votre site en plein soleil sur son téléphone... et le recruteur pressé qui navigue avec Tab. L'accessibilité améliore le site pour **tout le monde**.

[:material-clipboard-check-multiple: Retour aux consignes QA du portfolio](../projets/portfolio/qa-portfolio.md){ .md-button }

## Installer WAVE (2 minutes)

[Extension WAVE](https://wave.webaim.org/extension/){ :target="_blank" }, pour Chrome, Firefox ou Edge. Sur votre site en ligne : cliquez sur l'icône WAVE. Un panneau s'ouvre à gauche :

- **Errors** (rouge) : à corriger, sans exception;
- **Contrast Errors** : textes au contraste insuffisant;
- **Alerts** (jaune) : à vérifier, pas toujours un problème;
- l'onglet **Structure** : vos titres (`h1`, `h2`...) et vos régions (`header`, `nav`, `main`...).

## 1. La sémantique HTML5

Le bon élément pour le bon rôle. Un lecteur d'écran s'en sert pour annoncer la page et permettre de sauter d'une région ou d'un titre à l'autre.

| À vérifier | Correct | À éviter |
|---|---|---|
| Les régions de la page | `<header>`, `<nav>`, `<main>` (un seul), `<footer>` | Que des `<div>` |
| Les titres | **Un seul `<h1>`** par page, puis `<h2>`, `<h3>` dans l'ordre | Choisir `<h4>` parce qu'il est plus petit : c'est le CSS qui gère la taille |
| Ce qui se clique pour **aller ailleurs** | `<a href="...">` | `<div onclick>` |
| Ce qui se clique pour **faire une action** (ouvrir le menu, la modale) | `<button>` | `<div>` ou `<span>` cliquable : impossible à atteindre au clavier |
| La langue de la page | `<html lang="fr">` | `lang="en"` laissé par le gabarit de VS Code |

!!! danger "Le bouton du menu mobile (hamburger)"
    Un bouton qui ne contient qu'une icône n'a **pas de nom** pour un lecteur d'écran. Donnez-lui-en un :

    ```html
    <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
      <svg aria-hidden="true">...</svg>
    </button>
    ```

    `aria-expanded` passe à `"true"` quand le menu est ouvert : c'est une ligne de plus dans votre JS.

**Tester** : WAVE, onglet *Structure*. Vos titres doivent former un plan logique, sans trou.

## 2. Les attributs `alt`

Le `alt` remplace l'image pour ceux qui ne la voient pas (et quand elle ne charge pas). La question à se poser : **qu'est-ce que l'image apporte?**

| Type d'image | `alt` | Exemple |
|---|---|---|
| **Informative** : elle montre quelque chose d'utile | Ce qu'elle montre, en une phrase | `alt="Interface mobile de l'application Biome : carte des sentiers"` |
| **Décorative** : elle ne fait qu'embellir | **Vide**, mais présent | `alt=""` |
| **Dans un lien** : elle est le seul contenu du lien | Où mène le lien | `alt="Voir le projet Biome"` |

!!! tip "Pas de « image de... »"
    Le lecteur d'écran annonce déjà « image ». `alt="Image de mon projet"` ne dit rien d'utile; `alt="Affiche du festival Écho, typographie rouge sur fond noir"` dit tout.

**Vos cartes générées en JavaScript** : le `alt` vient de vos données. Utilisez le titre du projet, ou ajoutez une propriété `alt` à votre source de données.

```js
`<img src="${project.image}" alt="${project.title}">`
```

**Tester** : WAVE signale les `alt` manquants (Error). Un `alt` **présent mais inutile** (`alt="img1"`, `alt="photo"`), seul un humain peut le voir : survolez les icônes `alt` dans WAVE pour les lire.

## 3. Le contraste

| Texte | Ratio minimum (AA) |
|---|---|
| Texte courant | **4,5:1** |
| Gros texte : 24 px et plus, ou 18,5 px et plus en gras | **3:1** |
| Bordures de champs, icônes utiles, indicateur de focus | **3:1** |

Les pièges fréquents dans les portfolios : le texte gris pâle « élégant », le texte blanc **sur une image**, la couleur d'accent utilisée pour du texte, le texte des boutons au survol.

**Tester** dans Chrome :

1. Inspecteur → sélectionnez le texte → onglet **Styles**.
2. Cliquez sur le petit carré de couleur à côté de `color`.
3. La fenêtre affiche le **Contrast ratio**, avec un crochet ✔️ ou un ✖️ pour AA. Elle propose même une couleur corrigée (les deux lignes dans le dégradé).

WAVE liste aussi les erreurs de contraste, mais il ne peut pas mesurer un texte posé sur une image : celui-là, vérifiez-le à l'œil et à l'inspecteur.

## 4. La navigation au clavier

Débranchez la souris (pour vrai). Sur votre site :

| Touche | Ce qu'elle doit faire |
|---|---|
| **Tab** / **Maj + Tab** | Passer à l'élément interactif suivant / précédent, dans un ordre logique |
| **Entrée** | Suivre un lien, activer un bouton |
| **Espace** | Activer un bouton |
| **Échap** | Fermer une modale ou un menu ouvert |

Ce qu'on vérifie :

- [ ] **Tout** ce qui se clique est atteignable avec Tab (liens, boutons, cartes, menu).
- [ ] On voit **toujours** où est le focus.
- [ ] L'ordre suit la lecture de la page.
- [ ] Une modale ouverte garde le focus à l'intérieur, et Échap la ferme.

### Le focus visible

Le contour du focus est souvent retiré parce qu'on le trouve laid. C'est l'erreur la plus fréquente :

```css
/* ✖️ À ne jamais faire seul : le focus devient invisible */
button:focus { outline: none; }

/* ✔️ Un focus visible, à vos couleurs, seulement pour la navigation au clavier */
:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
}
```

`:focus-visible` s'affiche au clavier, mais pas au clic de la souris : le meilleur des deux mondes.

### La modale : utilisez `<dialog>`

Si votre détail de projet est une modale, l'élément `<dialog>` ouvert avec `showModal()` fait le travail difficile à votre place : le focus entre dans la modale, le reste de la page devient inactif, **Échap la ferme**, et les navigateurs récents redonnent le focus au bouton qui l'a ouverte.

```js
const dialog = document.querySelector('.project-dialog');
dialog.showModal(); // et non dialog.show(), qui n'est pas modal
```

Prévoyez quand même un `<button>` de fermeture visible.

!!! info "Tester au clavier sur Mac (Safari)"
    Par défaut, Safari ne fait pas passer Tab sur les liens. Activez **Safari → Réglages → Avancés → « Appuyer sur Tab pour mettre en évidence chaque élément »**, ou utilisez **Option + Tab**.

!!! tip "Firefox : voir l'ordre de tabulation"
    Inspecteur de Firefox → onglet **Accessibilité** → cochez **Afficher l'ordre de tabulation** : chaque élément atteignable reçoit un numéro, directement sur la page.

## Bonus : le mouvement

<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=67cf1a3d-0060-44c0-b289-a5f91aa47e9a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="parametres-accessibilité-preferred-reduced-motion.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

Vos animations au défilement respectent-elles `prefers-reduced-motion`? C'est vu dans la page [Animations pilotées par le défilement](../css/animations-scroll.md).

## Lighthouse : un point de départ

Inspecteur Chrome → onglet **Lighthouse** → cochez **Accessibility** → *Analyze page load*. Utile pour un premier ménage, mais rappelez-vous : un score de 100 ne veut pas dire que votre site est accessible. Le test au clavier et la lecture des `alt` restent indispensables.

## Références

- [WCAG 2.2 en bref (W3C, en anglais)](https://www.w3.org/WAI/standards-guidelines/wcag/){ :target="_blank" }
- [Accessibilité (MDN, en français)](https://developer.mozilla.org/fr/docs/Web/Accessibility){ :target="_blank" }
- [WebAIM : vérificateur de contraste](https://webaim.org/resources/contrastchecker/){ :target="_blank" }
