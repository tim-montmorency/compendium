# Formulaire - Carte de crédit
Pour cet exercice vous devrez compléter un formulaire de carte de crédit déjà entamé.

Aperçu du résultat 👇


![type:video](https://github.com/user-attachments/assets/f624bb1c-fc62-46ed-b66c-6f551c48e7ff)
<small>Exercice créé par : Simon Arnold</small>

## Matériel

!!! info

    [Pen de départ](https://codepen.io/pen?template=XWozWyy)

## Champs
Lorsque le formulaire est soumis, ses informations doivent-être envoyés en utilisant la méthode `get` à l'adresse suivante:

```html
./exercices/submit/carte-de-credit.html
```


La page de résultat s'attend à recevoir les informations suivantes: `credit-card-number`, `expiry-date`, et `security-code`.


## Requis

1. Premièrement, créer une forme <u>avec la classe</u> **"form"** ainsi que l'action écrite ci-dessus.
1. À l'intérieur de la forme, ajouter 2 `<div>`.
1. Dans la première `<div>` (numéro de carte de crédit), ajouter un champ texte avec
  * **id** : credit-card-number
  * **attribut** "name" : credit-card-number.
1. Pour la deuxième `<div>`, donner lui la classe ; colonne.
1. À l'intérieur de cette `<div>`, vous allez créer deux autres `<div>`.
1. Une `<div>`, dois avoir la classe : colonne1 et l'autre la classe : colonne2.
1. La première `<div>` (date d'expiration), est un champ texte avec
  * **id** : expiry-date
  * **attribut "name"** : expiry-date
1. La deuxième (code de sécurité de la carte) est aussi un champ texte avec
  * **id** : security-code
  * **attribut "name"** : security-code
1. Chaque champ doit avoir un libellé cliquable attribuant le focus au champ qui lui est associé.
  * **Numéro de carte**
  * **Expiration**
  * **Sécurité**
1. Les champs de numéro de carte de crédit, date d'expiration et de code de sécurité doivent afficher les textes indicatifs **"4242 4242 4242 4242", "10/24"** et **"123"**.
1. Le code de sécurité doit avoir une longueur de 3 caractères. Ni plus ni moins.
1. Un bouton avec la classe : **bouton**, affichant la mention **"Acheter maintenant"** doit permettre de soumettre le formulaire lorsque cliqué.
1. Assurez-vous que le numéro de carte de crédit est 19 caractères, ni plus ni moins.
1. Assurez-vous qu'un minimum de 4 caractères soit entré dans le champ **"date d'expiration"** et qu'un maximum de 5 soit permis. Ainsi, les dates d'expiration avec ou sans le **"/"** seront acceptées.

!!! note

    Si votre formulaire est bien réalisé, vous devriez être en mesure de voir un message de confirmation s’afficher lorsque vous le soumettez.



## Notes de cours

![icon (1)](https://github.com/user-attachments/assets/afe398fa-a062-42e6-89b1-f49e17412a5f)<br>Formulaire<br> [Formulaire](../html/formulaire.md)

