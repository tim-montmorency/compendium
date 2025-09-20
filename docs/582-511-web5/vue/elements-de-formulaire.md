# Éléments de formulaire v-model

La grande force de *Vue* réside dans sa fonctionnalité de relation bidirectionnelle *two-way binding* permettant de mettre à jour automatiquement différentes informations dans une interface (*View*) en fonction de la valeur de certaines propriétés du modèle (*Model*) et vice-versa.

<a href="https://www.geeksforgeeks.org/vue-js-two-way-binding-model/" target="_blank" rel="noopener noreferrer">🔁 Voici un exemple concret du <em>"two-way binding"</em></a>.

<img src="./assets/vue-two-way-data-binding.jpg" alt="">
<small>[Crédit de l'image](https://www.spaceo.ca/)</small>

La directive `v-model` permet de créer une relation bidirectionnelle (*two-way binding*) entre une donnée et un élément de formulaire (`<input>`, `<select>`, `<textarea>`, etc.).

`v-model` se base sur différentes propriétés afin d’attribuer une valeur à une donnée.

- **Champ texte `<input type='text'>`**: l’attribut `value` du champs
- **Boîtes à cocher `<input type="checkbox">` et boutons radio `<input type="radio">`**: l’attribut `checked`
- **Liste déroulante `<select>`**: l’attribut `value` de l’option sélectionnée

!!! warning "v-model est vide au chargement de la page"
    `v-model` ignore la valeur initiale attribuée à un élément de formulaire. La synchronisation entre l’élément et la donnée ne débute que lors de la première modification de l’élément.


## Champ texte `<input type='text'>`

Les champs textes `<input type='text'>` synchronisent la valeur contenue dans l'attribut `value` avec la donnée qui lui est associée dans l'app.

Par exemple, la donnée `msg` change de valeur en fonction du changement de value dans le champ suivant.

```html
<input type="text" v-model="msg" />

<h1>{{ msg }}</h1>
```

<br><br>
Dans l'exemple ci-dessous, modifier la valeur du le champ texte mettra à jour le titre automatiquement. Il n’est pas nécessaire d’utiliser une méthode ou une fonction.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="vYbpNBN" data-pen-title="Vue | v-model champ texte" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/vYbpNBN">
  Vue | v-model champ texte</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>



<br>
<a href="https://fr.vuejs.org/guide/essentials/forms#text" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;Liaisons des entrées utilisateur d'un formulaire: <em>champs texte</em></a>
<br>


## Case à cocher `<input type="checkbox">`

Les cases à cocher `<input type="checkbox">` synchronisent l’attribut `checked` avec la donnée qui leur est associée.

```html
<input type="checkbox" v-model="msg" />

<h1>Afficher le meme: {{ msg }}</h1>
```

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="GRzyOaO" data-pen-title="Vue | v-model boite à cocher" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/GRzyOaO">
  Vue | v-model boite à cocher</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Leur usage est tout indiqué entre autres pour déterminer si un élément devrait être affiché ou masqué à l'aide d'un `v-if`.


<br>
<a href="https://fr.vuejs.org/guide/essentials/forms#checkbox" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;Liaisons des entrées utilisateur d'un formulaire: <em>case à cocher</em></a>
<br>



## Boutons radio `<input type="radio">`

Les boutons radio `<input type="radio">` synchronisent l’attribut `value` du bouton qui est coché avec la donnée qui leur est associée.

```html
<input type="radio" id="option1" v-model="msg" value="Option 1" />
<input type="radio" id="option2" v-model="msg" value="Option 2" />

<h1>{{ msg }}</h1>
```

<br><br>
<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="JjxZJor" data-pen-title="Vue | v-model boutons radio" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/JjxZJor">
  Vue | v-model boutons radio</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<br>
<a href="https://fr.vuejs.org/guide/essentials/forms#radio" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;Liaisons des entrées utilisateur d'un formulaire: <em>bouton radio</em></a>
<br>


## Liste déroulante `<select>` 

Les listes déroulantes `<select>` synchronisent l’attribut `value` de l'option sélectionnée avec la donnée qui leur est associée.

```html
<select v-model="msg">
  <option value="Texte 1">Écouteurs</option>
  <option value="Texte 2">Squid Game</option>
</select>

<h1>{{ msg }}</h1>
```

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="OJdEgmK" data-pen-title="Vue | v-model select" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/OJdEgmK">
  Vue | v-model select</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<br>
<a href="https://fr.vuejs.org/guide/essentials/forms#select" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;Liaisons des entrées utilisateur d'un formulaire: <em>Liste déroulante</em></a>


<script async src="https://public.codepenassets.com/embed/index.js"></script>
