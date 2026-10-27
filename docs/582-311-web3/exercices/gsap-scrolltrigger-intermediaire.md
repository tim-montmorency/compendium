# Création d'une scène animée réactive

Nous allons animer une scène où, au fil du défilement&nbsp;:

- [ ] Une boîte se déplace de gauche à droite.
- [ ] **En même temps**, un cercle grossit progressivement.
- [ ] **Ensuite**, un triangle fait un tour complet.

## Contraintes

- [ ] Les trois animations font partie d'**une seule timeline** (`gsap.timeline()`)
- [ ] La timeline est pilotée par un `scrollTrigger` avec `scrub`
- [ ] Le paramètre de position `"<"` est utilisé pour synchroniser la boîte et le cercle
- [ ] En remontant la page, la scène se rembobine

!!! warning "N'oubliez pas le fork"

    Connectez-vous à CodePen, faites un **Fork**, puis **Save**. Copiez ensuite le lien `.../live/...` dans le `README.md` de votre dépôt `web3-exercices` — c'est lui qui sert de preuve à la remise.

<!--

https://codepen.io/tim-momo/pen/OJevXZa/38ac1085ba704e7f931620985877c21b?editors=1111

-->
