# Instructions pour documenter le `README.md`

!!! warning
    Avant toute modification du `READMD.md`, vérifiez si le `README.md` actuel contient d'autres informations (comme des notes de brainstorm). Si c'est le cas, déplacez ces informations dans un fichier markdown distinct avec un nom approprié (par exemple `brainstorm.md`). Cela permet de conserver ces informations tout en respectant la structure de documentation du `README.md` décrite ci-dessous.

Utiliser le format markdown pour formattter votre texte dans le fichier `README.md`.

- Titre de niveau 1 : Le titre de votre projet

- Titre de niveau 2 : *À propos du projet*
  - Paragraphes:
    - "Projet scolaire réalisé dans le cadre du cours *Web 5 (582-511MO)* au *Cégep de Montmorency*, programme *Techniques d'intégration multimédia*."
    - et
      - Mémoires (ajuster au besoin) : "Ce musée interactif permet aux utilisateurs de créer, organiser et explorer des souvenirs personnels à travers différentes salles thématiques."
      - ou
      - Trace ton chemin : "Cette histoire interactive propose une expérience narrative immersive où chaque choix du lecteur influence le déroulement et la conclusion de l'aventure."

- Titre de niveau 2 : *Équipe*
  - Liste à puces de vos noms et votre rôle principal

- Titre de niveau 2 : *Description*
  - Brève description du concept de votre histoire en 2-3 phrases.

- Titre de niveau 3 : *Fonctionnalités principales*
  - Liste à puces des fonctionnalités implémentées dans votre projet (vous pouvez retourner voir votre cahier de charges pour vous le rappeler)


- Titre de niveau 2 : *Technologies utilisées*
  - Liste à puces des technologies utilisées dans votre projet (vous pouvez retourner voir votre cahier de charges pour vous le rappeler)

- Titre de niveau 2: *Démo en ligne*
  - Lien vers le site déployé (faites-en un lien en markdown et non pas juste le url textuel)

- Titre de niveau 2: *Comment jouer* ou *Comment utiliser*
  - Liste à numéros des étapes pour expliquer à l'utilisateur comment jouer ou utiliser votre appli qui est déployée live.

- Titre de niveau 2 : *Installation en local pour développement*

  - Ajoutez le code-ci bas et faites-en un [*Code Block* en markdown](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks):

  ```bash
  # Cloner le projet
  git clone [URL_DU_REPO]

  # Installer les dépendances
  npm install

  # Lancer le serveur de développement
  npm run dev

  # Builder pour la production
  npm run build
  ```

- Titre de niveau 2 : *Documentation additionnelle*
  (faites-en des liens en markdown et non pas juste le url textuel)

  - Lien vers le cahier de charges
  - Lien vers les maquettes Figma
  - Lien vers le Trello/board de projet

- Titre de niveau 2 : *Remerciements et autres crédits*

  - Crédits pour ressources utilisées (images, sons, polices, IAG (nommer le nom de l'outil, la version ce qui a été généré dans le projet))

- Titre de niveau 2 : *Licence*

  - "Projet éducatif - Cégep de Montmorency © 2024-2025"

- Ajoutez `---` (ce qui permettra de faire une ligne de séparation lors du rendu du markdown)

- Finir avec :

  ```
  **Session**: Automne 2025
  **Enseignante**: Marie-Michelle Ouellet
  **Programme**: Techniques d'intégration multimédia (TIM)
  ```
