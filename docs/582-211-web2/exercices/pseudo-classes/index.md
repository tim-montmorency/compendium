# Exercice: Pseudo-classes & pseudo-éléments


- [< retour au *cours 11*](../../cours11.md)

---

<br>

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits poru cet exercice</span>
</div>



## Contexte

Maintenant que tu connais ces sélecteurs, mets-les en pratique.

Un composant HTML est déjà stylisé. **Tu ne peux pas modifier le HTML.** Ton travail : compléter le CSS aux endroits indiqués pour appliquer les pseudo-classes et pseudo-éléments vus en cours.

<!-- ## Aperçu du résultat -->



## Fichier de départ

<span class="important-label">IMPORTANT</span> : Connectez-vous à CodePen d'abord et ensuitefaites un *FORK* du Pen de départ pour l'enregistrer dans votre compte, archiver l'exercice et pouvoir avoir un lien unique vers votre exercice complété pour la remise. En haut à droite: *[Controls] > Fork*

[Pen de départ | FAIRE UN FORK](https://codepen.io/editor/tim-momo/pen/019da842-8741-7370-bd0f-7a9a2347a1f2){ .md-button }



## Consignes

- [ ] 1. `::before` 
  - [ ] La première carte doit afficher un badge "Nouveau" au-dessus d'elle, positionné en haut à gauche. Utilise le pseudo-élément `::before` sur `.cartes .carte:first-child` 
  - [ ] La propriété content doit valoir "Nouveau". 
  - [ ] Donne-lui un fond vert (`--couleur-accent-clair`), un texte vert foncé (`--couleur-accent`), un `padding` de `2px 8px`, un `border-radius` de `99px` et un `font-size` de `0.7rem`.
  - [ ] Pour le positionner : `position absolute`,`top: -10px`, `left: 12px`.
- [ ] 2. `::after`
  - [ ] Chaque carte doit afficher une flèche "→" en bas à droite.
  - [ ] Utilise `::after` sur `.carte`.
  - [ ] La flèche doit se déplacer de `4px` vers la droite au survol de la carte (combine `::after` avec `:hover`). Attention, pour générer une translation, le pseudo-élément doit être en mode `display: inline-block` ou `display: block`.
  - [ ] Ajoute une `transition` de `0.2s` sur `transform`.
- [ ] 3. `:hover`
  - [ ] Au survol d'une carte, change la couleur de sa bordure pour `--couleur-accent.`
- [ ] 4. `:focus-visible`
  - [ ] Les cartes sont focusables (`tabindex="0"` dans le HTML).
  - [ ] Quand elles reçoivent le focus clavier (touche ++Tab ↹++), elles doivent afficher un contour visible : `outline: 2px solid var(--couleur-accent);  outline-offset: 3px;`
  - [ ] Note : utilise `:focus-visible` et NON `:focus`, pour que le contour n'apparaisse pas au clic souris.
- [ ] 5. `:last-child`
  - [ ] Le dernier élément de la liste ne doit pas avoir de bordure inférieure (border-bottom: none).
- [ ] 6. `:nth-child()`
  - [ ] Les éléments pairs de la liste doivent avoir un fond blanc : background-color: #fff.
- [ ] 7. `:not()` + `::before`
  - [ ] Tous les éléments de la liste SAUF le premier doivent avoir un padding-left de 2rem (ils sont "en retrait").
  - [ ] Le premier élément doit avoir un petit cercle coloré devant lui via ::before : 8px × 8px, border-radius 50%, background var(--couleur-accent), display inline-block.
- [ ] 8. `:checked`
  Quand la case est cochée :
  - [ ] Le .toggle-fond doit devenir var(--couleur-accent)
  - [ ] Le .toggle-bouton doit se déplacer de 18px vers la droite (transform: translateX(18px))
    - [ ] Astuce : utilise le combinateur ~ (sibling) après input:checked pour cibler les éléments frères.
    - [ ] Exemple : .toggle-enveloppe input:checked ~ .toggle-fond { }
- [ ] 9. `:disabled`
  Le troisième toggle est désactivé (attribut disabled dans le HTML). 
  Quand un input est disabled :
  - [ ] Le curseur de .toggle-rangee doit devenir "not-allowed"
  - [ ] Le texte de la rangée doit devenir var(--couleur-texte-secondaire)
  - [ ] Le .toggle-fond doit avoir une opacité de 0.4
    - [ ] Astuce : utilise :has() pour remonter du input désactivé jusqu'à .toggle-rangee.
    - [ ] Exemple : .toggle-rangee:has(input:disabled) { }


## 📚 Notes de cours

[📚 Contenu de cours *pseudo-classes*](../../css/pseudo-classes.md){ .md-button .md-button--primary }

---

- [< retour au *cours 11*](../../cours11.md)
