---
tags:
  - Exercice
  - Alpine
---

# 📮 Poste restante

L'objectif est de construire un **petit formulaire de messages** entièrement piloté par Alpine, sans écrire une seule ligne de `querySelector`.

Vous y pratiquerez les quatre directives que vous réutiliserez dans le formulaire de contact de votre projet final&nbsp;: `x-model`, `x-text`, `x-for` et `x-show`.

<!-- ![](../assets/images/alpine-poste-restante.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une zone de texte avec un compteur de caractères qui se met à jour **à chaque frappe**, et qui devient rouge au-delà de la limite. Sous le formulaire, la liste des messages envoyés s'allonge à chaque envoi, et chaque message peut être supprimé.

## Indices

`x-model` crée un lien **bidirectionnel** entre un champ et une propriété&nbsp;: pas besoin d'écouter l'événement `input` vous-même.

Pour le compteur, souvenez-vous qu'une chaîne de caractères connaît sa propre `.length`.

## Instructions

### Le compteur de caractères

- [ ] Créez un composant `x-data` avec une propriété `message` (chaîne vide) et une constante `max` à 140
- [ ] Ajoutez un `<textarea>` lié à `message` avec `x-model`
- [ ] Sous le champ, affichez `message.length` et `max` avec `x-text`
- [ ] Avec `:class`, appliquez la classe DaisyUI `text-error` au compteur **uniquement** quand la limite est dépassée
- [ ] Avec `:disabled`, désactivez le bouton d'envoi quand le message est vide ou trop long

### La liste des messages

- [ ] Ajoutez au `x-data` un tableau `messages` (vide au départ)
- [ ] Au clic du bouton d'envoi, ajoutez le message au tableau, puis videz le champ
- [ ] Affichez le tableau avec `x-for` dans une liste de `card` DaisyUI
- [ ] Ajoutez à chaque carte un bouton 🗑️ qui retire ce message du tableau
- [ ] Avec `x-show`, affichez un message « Aucun message » quand la liste est vide

### Pour aller plus loin (optionnel)

- [ ] Faites survivre la liste au rechargement avec `$persist` (voir l'exercice *Jour et nuit*)
- [ ] Ajoutez un champ « sujet » et affichez-le en titre de carte

!!! warning "Attention à `x-for`"

    `x-for` doit toujours être placé sur une balise `<template>`, jamais directement sur l'élément à répéter.

[STOP]

## Solution de référence

```html
<div x-data="{ message: '', max: 140, messages: [] }">

  <textarea class="textarea textarea-bordered w-full" x-model="message"></textarea>

  <p :class="message.length > max ? 'text-error' : 'text-base-content/60'">
    <span x-text="message.length"></span> / <span x-text="max"></span>
  </p>

  <button class="btn btn-primary"
          :disabled="message.length === 0 || message.length > max"
          @click="messages.push(message); message = ''">
    Envoyer
  </button>

  <p x-show="messages.length === 0" class="opacity-60">Aucun message</p>

  <template x-for="(m, i) in messages" :key="i">
    <div class="card bg-base-200 my-2">
      <div class="card-body flex-row justify-between items-center">
        <p x-text="m"></p>
        <button class="btn btn-ghost btn-sm" @click="messages.splice(i, 1)">🗑️</button>
      </div>
    </div>
  </template>

</div>
```
