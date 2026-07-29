# Installation Tailwind

*[CDN]: Content Delivery Network

L'objectif est d'installer le CDN Tailwind en consultant la documentation officielle.

## Consignes

- [ ] Créez un nouveau dossier nommé `tailwind-cdn`
- [ ] Ouvrez le dossier dans VS Code
- [ ] Assurez-vous d'avoir installé [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) sur VS Code. C'est une extension d'autocomplétion.
- [ ] Créez un fichier `index.html` et ajoutez-y une structure html de base.
- [ ] Allez sur <https://tailwindcss.com/> et trouvez comment installer Tailwind 4 avec un CDN

  !!! warning "Attention à l'usage de l'IA pour ce genre de chose, car elle fait souvent référence à des versions antérieures. C'est plus professionnel de consulter la documentation officielle."

- [ ] Installez le CDN Tailwind sur votre `index.html`

  !!! question "Attends... pourquoi c'est un `<script>` et non un `<link>` ?"

      ![](./wait-what-wait-a-minute.gif){.w-33}
    
      Quelle belle observation 😍 !

      C'est à cause de la philosophie de Tailwind. En fait, Tailwind c'est pas un fichier CSS dans lequel il y a tout. Ce serait monstrueusement gros comme fichier.

      Le script ajouté se charge de lire votre HTML et de détecter toutes les classes Tailwind. Ensuite, il va construire le CSS autour des classes lues.

- [ ] Ajoutez ce code dans le `<body>` : 

  ```html
  <h2 class="m-4 text-4xl font-bold text-pink-500">Haïku du jour</h2>
  <p class="m-4 text-xl leading-relaxed text-slate-500">Longs couloirs bondés,<br />Café froid et fin de session,<br />L'avenir commence.</p>
  ```

Vous devriez voir : 

![](./haiku.png)