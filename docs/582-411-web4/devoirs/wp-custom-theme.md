---
tags:
  - Devoir
---

# One more time | Partie 1/2

![](../assets/images/daftpunk.gif){ .w-100 }

L'objectif de ce devoir est d'intégrer le framework [Bootstrap 5](https://getbootstrap.com/) dans un thème personnalisé.

Ce devoir est une sorte de pratique à la réalisation du TP du cours.

La thématique du devoir est la musique.

[Logo tim](timlogo.png)

```html title="header.html"
<!-- wp:group {"align":"full","className":"navbar bg-primary navbar-expand-lg"} -->
<div class="wp-block-group alignfull navbar text-bg-primary py-4 navbar-expand-lg">
  <!-- wp:group {"className":"container","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"wrap","verticalAlignment":"center"}} -->
  <div class="wp-block-group container">
    <!-- wp:site-logo {"height":32} /-->
    <!-- wp:group {"className":"menu-toggle-and-nav","layout":{"type":"flex","justifyContent":"flex-end","orientation":"horizontal","flexWrap":"nowrap"}} -->
    <div class="wp-block-group menu-toggle-and-nav">
      <!-- wp:navigation {"layout":{"type":"flex","orientation":"horizontal"},"className":"navbar-nav me-auto mb-0","menuSlug":"primary"} /-->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
<!-- wp:spacer {"height":50} -->
<div style="height: 50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
```

## Résultat attendu

Pour le moment, nous allons nous concentrer sur la page des articles.

Vous aurez à reproduire la mise en page d'article suivante : <https://web4.tim-momo.com/devoir2part1/2025/03/daft-punk/>.

## Consignes

- [ ] Créer un nouveau WordPress.
- [ ] Créer un thème personnalisé et l'activer.
- [ ] Intégrer le framework [Bootstrap 5.3](https://getbootstrap.com/) au thème créé via `functions.php`.

!!! warning "Ne sauvegardez pas tout de suite dans Wordpress"

    Dans l'interface de Wordpress, lorsqu'on enregistre une modification dans un modèle, cette modification supplante le modèle programmé dans le code.

    Si vous avez sauvegardé par inadvertance, au pire, renommez votre theme, puis activez le. Cela réinitialisera le tout.

- [ ] Sans avoir recours à l'interface de gestion de WordPress, ajoutez la structure d'entête comme celle présente dans le résultat attendu. Lorsque ce sera ok, vous pourrez alors sauvegarder.
- [ ] Ajoutez ensuite un nouveau modèle de page pour les articles. Elle devait s'appeller `single.html`.
- [ ] Préparer 5 articles de groupe de musique avec une bonne classification, des images, des descriptions bien travaillées.
- [ ] Ajuster le nom de l'auteur des articles.
- [ ] Exporter votre site et le mettre en ligne sur votre serveur HostPapa (via CPanel).

## Remise

Ce devoir est à réaliser en **équipe de 2**.

Il compte pour **25% de votre note finale**.

À remettre le 10 avril à 23h59 sur Teams.

[STOP]

WP Dummy Content Generator

https://github.com/lindelof/particles-bg

https://tim-momo.com/devoir01/
