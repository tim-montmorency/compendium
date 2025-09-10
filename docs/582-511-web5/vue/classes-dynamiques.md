
# :class dynamique

## Classes CSS dynamiques :class

<p>Il est fréquent qu'une classe css doit-être ajoutée ou retirée à un élément HTML afin de changer son apparence pour refléter une action commise par un usager.<p>

<p> Pour ce faire, Vue permet de passer un <em>objet JavaScript</em> <code>{}</code> à un <em>l'attribut dynamique</em> <code>v-bind:class</code>  ou <code>:class</code> sur la balise. <br> Cet objet doit contenir une <em>propriété</em> correspondant au nom de la classe souhaitée et comme <em>valeur</em> une donnée ou encore une expression. Ainsi si la condition suivie des <code>:</code> retourne <code>true</code>, la classe est ajoutée.  Et à l'opposé, si elle est évaluée à <code>false</code> elle est retirée.</p>

<br><br>
<p>Voici un exemple où est ajoutée la classe <code>.majority</code> à une carte d'une personne lorsque la donnée <code>age</code> est plus grande ou égale à <code>18</code>: </p>

```
<img :class="{ majority : age >= 18 }" src="url-vers-image-del-a-personne.png">
```

```
img{
    border: 1px solid gray;
}
img.majority{
    border: 3px solid purple;
}
```



<br><br>
<p>Voici un exemple où est ajoutée la classe <code>.disabled</code> au bouton que lorsque la donnée <code>isDisabled</code> est équivalente à <code>true</code>: </p>

```
<button :class="{ disabled : isDisabled }"></button>
```

```
button {
    background-color: var(--primary-color);
}
button.disabled {
    background-color: gray;
    cursor: not-allowed;
}
```



<p>Autre exemple, pour ajouter la classe <code>.orange</code> lorsque la donnée <code>isOrange</code> est équivalente à <code>true</code>:</p>

```
<img :src="picture" :class="{orange: isOrange}">
```

<br>
<small>Veuillez inspecter à la fois le HMTL et le JS dans le CodePen pour mieux comprendre la dynamique.</small>

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="mdaNLbB" data-pen-title="DEMO VueJS | Classe (css) dynamique" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/mdaNLbB">
  DEMO VueJS | Classe (css) dynamique</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>



## Nom de classe contenant des caractères spéciaux

<p>Si un nom de classe CSS contient des caractères spéciaux, il sera nécessaire de l'entourer de guillemets.</p>

<p>Par exemple, une classe avec un trait d'union:</p>
```
<img :src="picture" :class="{'is-orange': isOrange}">
```

!!! info
    En cas de doute, il est possible de toujours utiliser des guillemets, même si aucun caractère spécial n’est&nbsp;présent.



## Multiple classes dynamiques

<p>Puisqu'un <em>objet JavaScript</em> <code>{}</code> est utilisé, il est possible d'ajouter plusieurs classes CSS dynamiques simplement en les séparant par une virgule.</p>
<p>Par exemple:</p>

```
<img :src="picture" :class="{orange: isOrange, big: isBig}">
```



## Combinaison avec des classes statiques

<p>Si certaines classes doivent être statiques <em>(ne jamais changer)</em>, alors que certaines doivent être dynamiques <em>(pouvoir changer)</em>, il est nécessaire d'utiliser deux attributs <code>class</code>. <br> Un 1<sup>er</sup> nommé simplement <code>class=""</code> pour les classes statiques et un 2<sup>e</sup> avec sans <code>v-bind:class=""</code> ou <code>:class=""</code> pour les classes dynamiques. Ces deux attributs seront ensuite combinés par Vue.</p>

<p>Par exemple:</p>
```
<img :src="picture" class="media" :class="{orange: isOrange}">
```

<p>produira le code suivant si la valeur de <em>isOrange</em> est <code>true</code>:</p>
```
<img src="willy-wonka-square.jpg" class="media orange">
```

<p>ou produira le code suivant si la valeur de <em>isOrange</em> est <code>false</code>:</p>
```
<img src="willy-wonka-square.jpg" class="media">
```


<br><br>
<a href="https://fr.vuejs.org/guide/essentials/class-and-style" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur <em>Liaison de classes et de styles - Class &amp; Style Bindings</em></a>
<br>

## Exercice

Lien à venir
<!-- 
[Collection de films: Classe dynamique](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-collection-films-1/){ .md-button } 
-->
