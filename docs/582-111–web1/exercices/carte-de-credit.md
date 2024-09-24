# Formulaire - Carte de crédit
Pour cet exercice vous devrez compléter un formulaire de carte de crédit déjà entamé.

Aperçu du résultat 👇


![type:video](https://github.com/user-attachments/assets/f624bb1c-fc62-46ed-b66c-6f551c48e7ff)


## Matériel

[Pen de départ](https://codepen.io/pen?template=XWozWyy)

## Champs
Lorsque le formulaire est soumis, ses informations doivent-être envoyés en utilisant la méthode `get` à l'adresse suivante:

```html
https://tim-montmorency.com/timdoc/582-215MO/html/formulaire/exercices/carte-de-credit/submit/
```


La page de résultat s'attend à recevoir les informations suivantes: `credit-card-number`, `expiry-date`, et `security-code`.


## Requis

- Premièrement, créer une forme <u>avec la classe</u> **"form"** ainsi que l'action écrite ci-dessus.
- À l'intérieur de la forme, ajouter 2 `<div>`.
- Dans la première `<div>` (numéro de carte de crédit), ajouter un champ texte avec
-   • **id** : credit-card-number
-   • **attribut** "name" : credit-card-number.
- Pour la deuxième `<div>`, donner lui la classe ; colonne.
- À l'intérieur de cette `<div>`, vous allez créer deux autres `<div>`.
- Une `<div>`, dois avoir la classe : colonne1 et l'autre la classe : colonne2.
* La première div (date d'expiration), est un champ texte avec
  * id : expiry-date
  * attribut "name" : expiry-date
- La deuxième (code de sécurité de la carte) est aussi un champ texte avec
    • id : security-code
    •attribut "name" : security-code .
- Chaque champ doit avoir un libellé cliquable attribuant le focus au champ qui lui est associé.
    • Numéro de carte
    • Expiration
    • Sécurité
- Les champs de numéro de carte de crédit, date d'expiration et de code de sécurité doivent afficher les textes indicatifs "4242 4242 4242 4242", "10/24" et "123".
- Le code de sécurité doit avoir une longueur de 3 caractères. Ni plus ni moins.
- Un bouton avec la classe : bouton, affichant la mention "Acheter maintenant" doit permettre de soumettre le formulaire lorsque cliqué.
- Assurez-vous que le numéro de carte de crédit est 19 caractères, ni plus ni moins.
- Assurez-vous qu'un minimum de 4 caractères soit entré dans le champ "date d'expiration" et qu'un maximum de 5 soit permis. Ainsi, les dates d'expiration avec ou sans le "/" seront acceptées.
Si votre formulaire est bien réalisé, vous devriez être en mesure de voir un message de confirmation s’afficher lorsque vous le soumettez.
