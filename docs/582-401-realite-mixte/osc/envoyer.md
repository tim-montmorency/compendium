# Envoi d'OSC

Pour envoyer l'OSC, vous devrez ajouter certains éléments à votre script OSC. 

``` csharp
// On ne veut pas envoyer un message OSC à chaque frame pour éviter de surcharger notre jeu. On doit ainsi créer une variable pour ralentir l'envoi: 
private float myChrono;

// On utilise la méthode LateUpdate puisque c'est la fonction qui sera appelée en dernier pendant notre frame. 
private void LateUpdate()
    {
        // Si 100 millisecondes se sont écoulées depuis le dernier envoi :
        if(Time.realtimeSinceStartup - myChrono >= 0.1f)
        {
            myChrono = Time.realtimeSinceStartup;

            // Créer le message
            var myOscMessage = new OSCMessage("/adresse");

            // Ajouter une valeur au message, maValeur doit être remplacé par le int de votre jeu que vous souhaitez envoyer.
            myOscMessage.AddValue(OSCValue.Int( (int) maValeur) ); // Le (int) entre parenthèses convertit le type.

            // Envoyer le message
            oscTransmitter.Send(myOscMessage);

           
        }
    }


```


Si vous préférez envoyer un float, voici la syntaxe à utiliser:     

``` csharp
myOscMessage.AddValue(OSCValue.Float( (float) maValeur) ); // Le (float) entre parenthèses convertit le type.

```


Vous aimeriez envoyer plusieurs messages? Voici un exemple pour vous aider:    

``` csharp
 private void LateUpdate()
    {
        if(Time.realtimeSinceStartup - myChrono >= 0.1f)
        {
            myChrono = Time.realtimeSinceStartup;

            // Créer un bundle, celui-ci contiendra les différents messages OSC afin qu'on puisse les envoyer en une seule fois.
            var bundle = new OSCBundle();

            var myOscMessage1 = new OSCMessage("/nomMessage1");
            myOscMessage1.AddValue(OSCValue.Float( (float) maValeur));

            var myOscMessage2 = new OSCMessage("/fantome2x");
            myOscMessage2.AddValue(OSCValue.Float( (float) maValeur));
       
            // Ajouter les messages au bundle
            bundle.AddPacket(myOscMessage1);
            bundle.AddPacket(myOscMessage2);

            //Envoyer les messages: 
            oscTransmit.Send(bundle);
        }
    }
```


!!! quote "Inspiration"

    Inspiré des notes de Thomas O. Fredericks.  
