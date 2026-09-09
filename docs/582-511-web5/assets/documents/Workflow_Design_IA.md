# Workflow design assisté par IA : diverger, copier, raffiner

Figma Make et Google Stitch génèrent un premier jet en quelques minutes. Cette page explique où s'arrête l'IA et où commence votre travail : comment passer d'un jet généré à un fichier Figma Design que vous raffinez à la main, et comment distinguer l'inspiration de la copie intégrale.

!!! note "L'essentiel en 3 points"
    1. **Générer vite, raffiner à la main.** Le premier jet de Figma Make ou Google Stitch n'est jamais le livrable final.
    2. **La règle :** si tu ne peux pas justifier un choix visuel, tu ne le gardes pas tel quel.
    3. **Tout usage se documente** dans `JOURNAL.md`, même gabarit que pour le code.

## Pourquoi adapter, pas copier

C'est vous le designer. Un portfolio qui reprend tel quel ce que propose Figma Make ou Google Stitch risque de se fondre dans la masse, comme bien d'autres qui ont tapé un prompt semblable.

Le but du portfolio, c'est de montrer qui vous êtes et votre talent, pas d'être la personne avec le portfolio générique. L'IA peut poser une base ou vous inspirer pour la suite, mais la copie conforme n'est pas acceptée.

!!! warning "À la remise formative"
    Le groupe d'Enric le 14 septembre et le groupe de Lora le 17 septembre devront montrer leur processus complet : **toutes les versions initiales** générées par Figma Make ou Stitch, **puis** le fichier Figma retravaillé, en expliquant ce qui a été adapté.

## Inspiration ou copie intégrale : le test en 3 questions

Avant de garder un écran généré par l'IA, réponds à ces trois questions.

1. Est-ce que ce choix reflète **mon persona**, ou juste ce qui est sorti par défaut de l'outil?
2. Si je devais recréer cet écran de mémoire sans l'IA, saurais-je pourquoi chaque élément est là?
3. Ai-je changé au moins **3 choses substantielles** (palette, typographie, structure, hiérarchie), pas juste un détail cosmétique?

!!! warning "Sinon"
    Tu retravailles l'écran. Le test n'est pas là pour te ralentir, il est là pour que le résultat soit vraiment le tien.

## Documenter dans le journal de bord

Même réflexe que pour le code généré par IA, appliqué au design.

```markdown
- **Généré avec :** Figma Make (ou Google Stitch)
- **Prompt :** [le prompt exact]
- **Ce que j'ai modifié :** palette recentrée sur mon persona, hiérarchie
  typographique refaite, structure de navigation simplifiée
```

## Le workflow technique

### Depuis Figma Make

1. Dans l'aperçu du fichier Make, naviguer jusqu'à l'écran voulu.
2. Cliquer **« Copy design »** en haut de Figma Make.
3. Coller dans un fichier Figma Design.

!!! info "À retenir"
    Ce que ça copie est un **instantané statique** : pas connecté au fichier Make d'origine, pas rattaché à un design system, pas interactif. C'est un point de départ à retravailler à la main, pas un aller-retour synchronisé.

### Depuis Google Stitch

Stitch a un bouton **« Copy to Figma »** natif, mais il ne fonctionne pas avec tous les modèles : il n'est pas disponible avec l'agent le plus avancé (Gemini 3 Pro), seulement avec les agents plus simples.

Si le bouton ne fonctionne pas pour ton modèle, l'alternative est de **recréer l'écran à la main** en s'en inspirant visuellement. Pas la peine de chercher un outil tiers de conversion parfaite, la friction du raffinage manuel est justement la compétence qu'on vient chercher.

## Le vrai changement en agence

| Avant | Maintenant |
|---|---|
| Brief → premières maquettes en 3-4 jours | Brief → premier jet IA en quelques minutes |
| Révisions client sur une seule direction | 2-3 variantes vues le jour même |
| Handoff développeur | Raffinage manuel dans Figma Design, puis handoff |

!!! tip "Nuance professionnelle"
    Ce workflow accéléré brille pour du volume élevé et une complexité modérée : pages d'atterrissage, sites vitrines, gabarits marketing. Pour du design de produit complexe, l'IA reste un point de départ, le jugement humain fait le raffinage. L'IA accélère le brouillon, pas le jugement.

## En atelier aujourd'hui

- **Raffiner** les maquettes mobile et desktop, à partir des directions retenues.
- **Filtrer** selon persona, accessibilité, et maintenant : justifiable et distinctif.
- **S'assister** des outils gratuits de Figma (auto-layout, contenu, images, vectorisation).
- **Documenter** chaque changement substantiel dans `JOURNAL.md`.
