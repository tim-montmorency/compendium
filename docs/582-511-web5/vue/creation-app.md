# Création d'une app Vue

!!! abstract

    Il existe 2 styles d'API pour coder en VUE.js: *Options API* et *Composition API*. Donc si vous parcourez la documentation de VUE.js il est possible que vous tombiez sur l'un et l'autre, ne soyez pas intimidés.

    Les deux styles d'API sont tout à fait capables de couvrir les cas d'utilisation courants. Il s'agit d'interfaces différentes alimentées par le même système sous-jacent. En fait, l'*Options API* est mise en œuvre au-dessus de la *Composition API*&nbsp;! Les concepts fondamentaux sont partagés entre les deux styles et ils sont équivalents.
    
    Dans le cadre de ce cours, nous utiliserons le style *Options API*. [Plus d'info ici](https://vuejs.org/guide/introduction.html#api-stylesPlus).

## Création d'une App

<p>La première étape consiste à appeler la méthode <em>createApp</em> de l'objet global <em>Vue. </em>Celle-ci permet de créer une nouvelle instance d'une app Vue. Afin de pouvoir accéder à l'app ultérieurement, il est nécessaire de stocker le résultat dans une variable.</p>


**Par exemple:**

```
const app = Vue.createApp({});
```

!!! info
    Cette variable peut porter n’importe quel nom, mais par convention elle est généralement nommée&nbsp;<em>"app"</em>.

## Attacher l'App à un élément (mount)

<p>Il faut ensuite associer l'app à une balise HTML afin de lui indiquer sa portée. Bref, seules cette balise et ses enfants pourront être contrôlées par l'app. Le reste du document n'existera pas à ses yeux.<br><br>Pour ce faire, l'app contenue dans la variable doit appeler sa méthode <em>mount</em> et lui passer en paramètre une chaine de caractères correspondant au sélecteur de la balise désirée. </p>


<info>Cette méthode accepte les mêmes sélecteurs que&nbsp;<a href="https://smnarnold.com/cours/javascript/queryselector">querySelector</a>.</info>

<p>Par exemple, si la balise souhaitée a le <code>id</code> app:</p>

```
app.mount('#app');
```

<p>Si le résultat du <code>mount</code> est stocké dans une variable, il est possible d'y accéder afin de changer ses données ou encore d'appeler ses méthodes.</p>

**Par exemple:**
```
const vm = app.mount('#app');
```

.

[Plus d'info sur <code>createApp()</code>](https://v3.vuejs.org/guide/instance.html#creating-an-application-instance){ .md-button :target="_blank" }

