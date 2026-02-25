![](../assets/images/custom-theme.jpg){data-zoom-image}

## EXERCICE — Création d’un thème FSE personnalisé

## Matériel requis
[Screenshot](../assets/images/screenshot.png)

**À partir de la structure officielle minimale**

### Objectifs

* Comprendre la structure d’un thème bloc (FSE)
* Créer un thème minimal fonctionnel
* Utiliser theme.json
* Comprendre les commentaires <!-- wp: -->
* Intégrer header et footer via template parts
* Respecter la hiérarchie des modèles

### PARTIE 1 — Structure obligatoire 

**Créer le dossier :**
```
wp-content/themes/tim_momo/
```

**Puis créer la structure suivante :**

```
tim_momo/
├── parts/
│   ├── header.html
│   └── footer.html
├── templates/
│   ├── index.html
│   └── single.html
├── theme.json
├── style.css
```

### Vérification

* Le thème apparaît dans Apparence > Thèmes
* Il peut être activé sans erreur

### PARTIE 2 — Fichier style.css (10%)

**Créer un fichier avec un en-tête valide :**

```
/*
Theme Name: Tim Momo
Author: Votre nom
Description: Thème FSE personnalisé
Requires at least: 6.7
Version: 1.0
*/
```

⚠️ Aucun CSS obligatoire pour cet exercice.

### PARTIE 3 — Fichier theme.json


```json title="Exemple de theme.json"
{
  "$schema": "https://schemas.wp.org/wp/6.7/theme.json",
  "settings": {
    "appearanceTools": true,
    "useRootPaddingAwareAlignments": true,
    "layout": {
      "contentSize": "620px",
      "wideSize": "1000px"
    },
    "spacing": {
      "units": ["%", "px", "em", "rem", "vh", "vw"]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
          "name": "System Font",
          "slug": "system-font"
        }
      ]
    }
  },
  "templateParts": [
    {
      "area": "header",
      "name": "header"
    },
    {
      "area": "footer",
      "name": "footer"
    }
  ],
  "version": 3
}
```

### PARTIE 4 — Template Parts 
#### header.html


```html
<!-- wp:group {"layout":{"inherit":"true"}} -->
<div class="wp-block-group">
	<!-- wp:group {"align":"full","layout":{"type":"flex","justifyContent":"space-between"},"style":{"spacing":{"padding":{"bottom":"30px","top":"30px"}}}} -->
	<div class="wp-block-group alignfull" style="padding-bottom:30px;padding-top:30px">

		<!-- wp:group {"layout":{"type":"flex"}} -->
		<div class="wp-block-group">
			<!-- wp:site-logo {"width":64} /-->

			<!-- wp:group -->
			<div class="wp-block-group">
				<!-- wp:site-title /-->
				<!-- wp:site-tagline /-->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->

		<!-- wp:navigation {"layout":{"type":"flex","setCascadingProperties":true,"justifyContent":"right","orientation":"horizontal"},"style":{"spacing":{"margin":{"top":"0"}}}} /-->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":50} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
```

#### footer.html

```html
<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Proudly Powered by <a href="https://wordpress.org" rel="nofollow">WordPress</a></p>
<!-- /wp:paragraph -->
```

### PARTIE 5 — Modèles
#### index.html (obligatoire)

**Doit contenir :**

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

#### single.html

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">

    <!-- wp:post-featured-image /-->

    <!-- wp:post-title {"level":1} /-->

    <!-- wp:post-date /-->
    <!-- wp:post-author /-->

    <!-- wp:post-content /-->

</div>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```
