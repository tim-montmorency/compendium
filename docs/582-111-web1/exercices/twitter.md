# Select - Twitter
Pour cet exercice, vous devrez compléter le formulaire de Twitter demandant la date de naissance de son nouveau membre.

Aperçu du résultat 👇


![type:video](https://github.com/user-attachments/assets/eeb2e2fc-f7b8-4825-9b92-77a06f382524)
<small>Exercice créé par : Simon Arnold</small>


## Matériel

!!! info

    [Pen de départ](https://codepen.io/pen?template=mdaqyOm)

### Action
```
https://tim-montmorency.com/timdoc/582-215MO/html/formulaire-intermediaire/exercices/twitter/submit/
```


## Requis fonctionnels

1. Premièrement, créer une forme avec la classe **"birthday"** ainsi que l'action écrite ci-dessus.
2. Ensuite, ajoutez un titre `<h1>` avec une classe : **title**.
3. Le texte du titre est : **Quelle est votre date d'anniversaire**.
4. Maintenant, ajoutez une `<div>`.
5. Dans cette `<div>`, créez un menu déroulant permettant de choisir sa date de naissance. Attribuez-y les attributs `name`= **"day"**, `id`=**"day"** et `class`=**"jour"** afin de permettre au back-end de récupérer sa valeur.<br><br>N'oubliez pas d'ajouter un libellé intitulé **"jour"** à votre menu déroulant.<br>
8. Puisqu'un mois peut contenir 31 jours, offrez 31 options dans ce menu déroulant. Chacune de ces options doit avoir comme valeur et comme texte affiché un nombre de 1 à 31.
9. Plutôt que d'écrire ces 31 options à la main, essayez la commande **Emmet** suivante: ```option[value="$"]{$}*31``` suivit de la touche **tab**.
10. De façon similaire au précédent menu déroulant, créez-en une nouvelle `<div>`, mais cette fois-ci pour le mois de naissance de l'usager et configurer ses attributs `name`=**"month"**, `id`=**"month"** et `class`=**"mois"**, afin de pouvoir y faire référence en back-end.<br><br>Attribuez cette fois à chaque option une valeur allant de 1 à 12, mais affichez les noms complets de chaque mois afin de simplifier la vie à l'utilisateur. **(Malheureusement, il n'y a pas de raccourcis Emmet cette fois)**<br>
13. Créez une dernière `<div>` avec un menu déroulant permettant à l'usager de choisir son année de naissance. Les attributs `name`=**"year"**, `id`=**"year"** et `class`=**"annee"** et les options doivent aller de 2007 jusqu'à 1980. (Les valeurs et les textes affichés sont les mêmes)**(il n'y a pas de raccourcis Emmet!)**<br>
14. Afin de soumettre le formulaire, ajoutez un champ de type submit affichant le texte **"Suivant"**.

!!! note

    Si votre formulaire fonctionne bien, vous devriez obtenir un message vous donnant l’âge de l’usager.


## Notes de cours

![icon (1)](https://github.com/user-attachments/assets/31abb701-aee0-4d99-a87b-a80292358920)<br> Formulaire  <br> [Formulaire ](../html/formulaire.md)

![icon (2)](https://github.com/user-attachments/assets/f7167ff2-c80e-4594-a297-7c394aeb7b0e)<br> Formulaire intermédiaire <br> [Formulaire intermédiaire](../html/formulaire-intermediaire.md)



