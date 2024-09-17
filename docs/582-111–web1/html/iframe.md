iFrame
La balise `<iframe>` **(inline frame)** permet d'afficher une page HTML à l'intérieur d'une autre page. Bien que visible à l'écran, cette page imbriquée bénéficie de son propre contexte d'exécution. Ainsi, les styles et scripts de la page parent n'ont aucun effet sur la page enfant et vice versa.

## Src

Seul l'attribut src est obligatoire puisqu'il spécifie le chemin vers la page à afficher.

```
<iframe src="https://site.com"></iframe>
```

## Title

L'attribut title, bien que non obligatoire, est fortement recommandé puisqu'il permet de fournir une description du contenu du iFrame aux personnes utilisant une assistance vocale afin de naviguer sur la page.

```
<iframe src="https://site.com" title="Démo iFrame"></iframe>
```

## Width & Height

Les attributs width et height permettent de spécifier la dimension du iFrame. Par défaut si ces attributs ne sont pas spécifiés un iFrame aura une dimension de 300x150px. Ces attributs ne doivent pas spécifier d'unité de mesure. Le navigateur assumera automatiquement que ces valeurs sont exprimées en pixels (px).

```
<iframe src="https://site.com" width="600" height="450"></iframe>
```

## Classe & ID

Comme toute balise HTML, il est possible d'attribuer une classe ou un id à un iFrame afin de pouvoir le manipuler en CSS ou JavaScript par la suite.

```
<iframe src="https://site.com" class="demo"></iframe>
```

## Loading

L'attribut loading permet d'indiquer la priorité de chargement d'un iFrame. Par défaut, le navigateur tente de charger tous les iFrames en accordant une légère priorité à ceux visibles au chargement de la page dans la fenêtre. Cependant il est possible de lui spécifier différentes valeurs:

- **auto** comportement normal, soit l'équivalent de ne pas mettre l'attribut.
- **lazy** attendre que le iFrame soit sur le point d'être visible avant de le chargé. Donc si un usager ne fait jamais défiler la page jusqu'à celui-ci, le iFrame ne sera jamais chargé. Cette option permet d'accélérer le chargement de la page 🏁.
- **eager** indique de charger le iFrame le plus rapidement possible, peu importe sa position dans la page.
```
<iframe src="https://site.com" loading="lazy"></iframe>
```

## Utilisation

Les iFrames sont particulièrement utiles afin d'incorporer certains éléments appartenant à d'autres sites. Par exemple:

- Les cartes Google Map 📍
- Les vidéos Youtube et Viméo 🎬
- Les aperçus de page de plusieurs réseaux sociaux (Facebook, Twitter, etc.)

Par exemple, le code suivant imbrique une carte situant le collège Montmorency:

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5485899861956!2d-73.72064708431346!3d45.559405635106366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9223815890e79%3A0xe7408a77564697c4!2sColl%C3%A8ge%20Montmorency!5e0!3m2!1sfr!2sca!4v1617136763120!5m2!1sfr!2sca" width="600" height="450" loading="lazy">
</iframe>


## Exercices

<div class="grid grid-auto" markdown>
<img width="183" alt="Capture d’écran, le 2024-09-13 à 15 54 18" src="https://github.com/user-attachments/assets/b1313d6b-3bac-448d-a2ff-cfbb3a069e99">




  **Exercice sur iframe**<br>
  _iFrame - Turbo Kid_<br>
  [Pour cet exercice, vous devrez utiliser un iFrame afin de réaliser une page promotionnelle du film québécois Turbo Kid.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/div-span.html)
</div>
