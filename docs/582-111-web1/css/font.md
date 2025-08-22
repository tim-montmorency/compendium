# Font

Plusieurs propriétés CSS permettent de contrôler l'apparence d'un texte. Voici quelques-unes des propriétés les plus courantes.</p>

## color

La propriété `color` permet de définir la couleur du texte. Cette propriété accepte toutes les <a href="./css/unites-de-couleur.html">unités de couleur</a>.

<iframe height="300" style="width: 100%;" scrolling="no" title="Color" src="https://codepen.io/tim-momo/embed/XWBBdGp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWBBdGp">
  Color</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## font-family

La propriété `font-family` permet de spécifier la police de caractères pour afficher du texte dans un élément.

**Cette propriété accepte le nom d'une police:**

`font-family: Helvetica;`

Ou encore une liste de polices:

`font-family: Helvetica, Arial, sans-serif;`

**Cette dernière possibilité présente deux avantages:**

<ol>
  <li>Fournir une police de substitution si une police est indisponible. Par exemple, les appareils Windows n'ayant pas la fonte Helvetica par défaut, ces appareils utiliseront la prochaine police dans la liste compatible, soit Arial.</li>
  <li>Si un caractère est manquant dans la police <b>("é", "ë", "ç", etc.)</b> le navigateur utilisera un caractère de la prochaine police afin de le remplacer.</li>
</ol>

<iframe height="300" style="width: 100%;" scrolling="no" title="Font-family" src="https://codepen.io/tim-momo/embed/QWBBNPW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBBNPW">
  Font-family</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## font-weight

La propriété `font-weight` permet de définir la graisse d'un texte.

Par exemple:

`font-weight: bold;`

Plusieurs graisses sont généralement disponibles. Ces graisses peuvent être spécifiées via leur valeur numérique ou encore leur nom.

<table>
  <tr>
    <th>NUMÉRIQUE</th>
    <th>NOM</th>
  </tr>
  <tr>
    <td>100</td>
    <td>thin</td>
  </tr>
  <tr>
    <td>200</td>
    <td>extra light</td>
  </tr>
  <tr>
    <td>300</td>
    <td>light</td>
  </tr>
  <tr>
    <td>400</td>
    <td>normal</td>
  </tr>
  <tr>
    <td>500</td>
    <td>medium</td>
  </tr>
  <tr>
    <td>600</td>
    <td>semi-bold</td>
  </tr>
  <tr>
    <td>700</td>
    <td>bold</td>
  </tr>
  <tr>
    <td>800</td>
    <td>extra bold</td>
  </tr>
  <tr>
    <td>900</td>
    <td>black</td>
  </tr>
</table>

Par défaut, si aucune graisse n'est spécifiée, le texte est en normal **(400)**. Il est aussi possible de spécifier au texte d'être légèrement plus fin que sont texte courant grâce au mot-clé `lighter` ou encore plus gras, grâce à `bolder`.

<iframe height="300" style="width: 100%;" scrolling="no" title="Font-weight" src="https://codepen.io/tim-momo/embed/LYBBNoQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/LYBBNoQ">
  Font-weight</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## font-size

La propriété `font-size` permet de définir la taille du texte. Bien que l'unité la plus courante soit les pixels, toutes les `unités de mesure` sont acceptées.

`font-size: 16px;`

Par défaut, si aucune taille n'est spécifiée, la majorité des navigateurs lui attribueront la taille de 16px. Il est aussi possible de spécifier à un texte d'être légèrement plus petite que sont texte courant grâce au mot-clé `smaller` ou encore plus gros, grâce à `larger`.

Bien que les px soient très répandus, il ne faut pas sous-estimer les avantages offerts par les `rem` et `em`.

<iframe height="300" style="width: 100%;" scrolling="no" title="Font-size" src="https://codepen.io/tim-momo/embed/xxJJVoX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/xxJJVoX">
  Font-size</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## font-style

La propriété `font-style` permet de définir si un texte devrait apparaitre en italique ou non, grâce aux valeurs:

<ul>
  <li>normal <b>(par défaut)</b></li>
  <li>italic</li>
</ul>

<iframe height="300" style="width: 100%;" scrolling="no" title="Font-style" src="https://codepen.io/tim-momo/embed/rNrreXj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrreXj">
  Font-style</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## line-height

La propriété `line-height` indique la hauteur de chacune des lignes de texte. Bien que cette propriété accepte les valeurs en pixel, la valeur la plus répandue et la plus polyvalente consiste en un ratio basé sur la taille du texte.

Par exemple:

`line-height: 1.5;`

Définit une hauteur de ligne de 24px si la taille de texte est de 16px, puisque: 16px * 1.5 = 24px.

Généralement, un `line-height` de base est définie sur la balise `<body>`. Ainsi il affecte tous les éléments de la page.

<iframe height="300" style="width: 100%;" scrolling="no" title="line-height" src="https://codepen.io/tim-momo/embed/ZEjjOzB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZEjjOzB">
  line-height</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## letter-spacing

La propriété `letter-spacing` permet de spécifier l'espacement entre chacune des lettres d'un texte. Cette propriété accepte toutes les unités de mesure CSS, mais est particulièrement efficace avec les `em`.

Par exemple:

`letter-spacing: 0.5em;`

Définis un espacement entre les lettres équivalent à une demi-largeur de lettre. Bref, si la taille de texte est de 16px, puisque: 16px * 0.5em = 8px, un espace de 8px sera ajouté entre chaque lettre.

<iframe height="300" style="width: 100%;" scrolling="no" title="letter-spacing" src="https://codepen.io/tim-momo/embed/yLqqJLJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLqqJLJ">
  letter-spacing</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!note

    Les valeurs négatives sont permises.</info>


