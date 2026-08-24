---
tags:
  - Exercice
  - Médias
---

# 🪶 Cure minceur

Un site promotionnel superbe qui met douze secondes à charger est un site que personne ne verra. L'objectif de cet exercice est de **faire maigrir un lot de médias** sans que ça paraisse à l'œil, puis de les **ranger correctement**.

<!-- ![](../assets/images/medias-cure-minceur.png){.w-100 data-zoom-image} -->

!!! info "Vous travaillez sur un lot fourni"

    Pas besoin des médias de votre projet&nbsp;: à ce stade de la session, votre jeu est encore en **greybox** et votre œuvre culturelle n'est peut-être même pas choisie.

    Tout le monde part donc du **même dossier de médias**, volontairement mal optimisé et mal nommé. C'est la **méthode** que vous apprenez ici. Vous l'appliquerez à vos vrais médias au cours 12-13, quand vous en aurez.

## Résultat attendu

Un dossier `assets` propre, une page qui charge en moins de deux secondes, et un score Lighthouse de **90 ou plus** en Performance.

## Le dossier de départ

- [ ] Téléchargez le [lot de médias](../assets/documents/medias-cure-minceur.zip){ download }
- [ ] Notez le **poids total** du dossier avant de commencer&nbsp;: c'est votre point de comparaison
- [ ] Ouvrez `index.html` dans le navigateur et mesurez le temps de chargement dans les DevTools (onglet **Network**)

Le lot contient 8 images beaucoup trop lourdes, 1 vidéo non compressée, 2 pistes audio et une page `index.html` qui les affiche toutes — avec des noms de fichiers dignes d'un dossier `Téléchargements` un mardi soir.

## Instructions

### Les images

- [ ] Redimensionnez chaque image à sa **taille d'affichage réelle** (inutile de servir du 4000 px pour une vignette de 400 px)
- [ ] Convertissez-les en **WebP** avec [Squoosh](https://squoosh.app/), en visant une qualité autour de 75
- [ ] Produisez une version **AVIF** des trois plus grosses images
- [ ] Intégrez au moins une image avec `<picture>` et plusieurs `<source>`, du format le plus moderne au plus universel
- [ ] Ajoutez `loading="lazy"` à toutes les images situées sous la ligne de flottaison
- [ ] Renseignez `width`, `height` et un `alt` significatif sur chaque image

### La vidéo

- [ ] Encodez la vidéo en **WebM** et en **MP4** (ffmpeg ou un service en ligne)
- [ ] Intégrez-la avec deux `<source>` et un attribut `poster` pointant vers une image optimisée
- [ ] Ajoutez `preload="metadata"` pour éviter de télécharger la vidéo entière au chargement

### L'audio

- [ ] Convertissez les pistes en **MP3** et en **OGG**
- [ ] Coupez les silences en début et en fin de piste

### Le classement

- [ ] Réorganisez le tout selon une arborescence claire&nbsp;:

    ```
    assets/
      images/
      videos/
      audio/
      fonts/
    ```

- [ ] Renommez chaque fichier en **minuscules, sans accent ni espace**, avec des tirets (`hero-jeu-01.webp`, pas `Capture d'écran 1.PNG`)
- [ ] Mettez à jour tous les chemins dans `index.html`

    !!! danger "Le piège de la casse"

        Votre machine ne fait pas la différence entre `Logo.png` et `logo.png`. Le serveur, lui, la fait. C'est la cause n°1 des images manquantes une fois le site en ligne.

### La vérification

- [ ] Comparez le **poids total** avant et après&nbsp;: visez au moins **-70 %**
- [ ] Passez la page au [validateur W3C](https://validator.w3.org/) et corrigez les erreurs
- [ ] Lancez un audit **Lighthouse** dans les DevTools (onglet Lighthouse) et notez votre score Performance
- [ ] Rédigez un `CREDITS.md` listant chaque média, sa source et sa licence

## Plus tard dans la session

Aux cours 12 et 13, vous referez exactement ces gestes — mais sur **vos** médias cette fois&nbsp;: captures d'écran du jeu, bande-annonce, trame sonore, ou les visuels de l'œuvre culturelle que vous aurez choisie. Le `CREDITS.md` sera alors **obligatoire** dans votre projet final.

Gardez ce dossier&nbsp;: il vous servira d'aide-mémoire.

!!! success "Savoirs travaillés"

    Intégration de médias audiovisuels (**2**), classement des médias (**7**), optimisation des médias (**8**), validation du code (**12**).
