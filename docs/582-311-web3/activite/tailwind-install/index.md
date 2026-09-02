---
tags:
  - Exercice
---

# Installation Tailwind

*[CDN]: Content Delivery Network

L'objectif est d'installer le CDN Tailwind en consultant la documentation officielle.

## Consignes

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/tailwind-cdn/accept)
- [ ] Cloner le dépôt avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] (Optionnel) Installer l'extension [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) sur VS Code pour l'autocomplétion de code.

---

- [ ] Créer un fichier `index.html` et y ajouter une structure html de base.
- [ ] Aller sur <https://tailwindcss.com/> et trouver comment installer Tailwind 4 avec un CDN

  !!! warning "Attention à l'usage de l'IA pour ce genre de chose, car elle fait souvent référence à des versions antérieures. C'est une bonne pratique de consulter la documentation officielle."

- [ ] Attacher le CDN Tailwind dans `index.html`

  !!! question "Attends... pourquoi c'est un `<script>` et non un `<link>` comme Milligram ?"

      ![](./wait-what-wait-a-minute.gif){.w-33}
    
      Quelle belle observation 😍 !

      C'est à cause de la philosophie de Tailwind. En fait, Tailwind c'est pas un fichier CSS dans lequel il y a tout. Ce serait **monstrueusement** gros comme fichier.

      Le script ajouté se charge de lire votre HTML et de détecter toutes les classes Tailwind. Ensuite, il va construire le CSS autour des classes lues.

- [ ] Ajouter ce code dans le `<body>` : 

  ```html
  <h2 class="m-4 text-4xl font-bold text-pink-500">Haïku du jour</h2>
  <p class="m-4 text-xl leading-relaxed text-slate-500">Longs couloirs bondés,<br />Café froid et fin de session,<br />L'avenir commence.</p>
  ```

Vous devriez voir : ![](./haiku.png){data-zoom-image .w-10}