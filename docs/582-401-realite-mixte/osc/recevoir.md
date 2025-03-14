# Réception d'OSC

Voici deux méthodes que vous pouvez utiliser pour recevoir des messages OSC. 

Cette première méthode fait en sorte que dès qu'on reçoit un message OSC, peu importe lequel c'est, la fonction TraiterMessageOSC() sera exécutée. 

``` csharp
   private void Start()
    {
        oscReceiver.Bind("*", TraiterMessageOSC);
    }
```

Si vous souhaitez appeler une fonction différente pour chaque message OSC reçu, vous pouvez utiliser la méthode suivante: 

``` csharp
   private void Start()
    {
        oscReceiver.Bind("/nomMessage", TraiterMessageOSC1);
        oscReceiver.Bind("/nomMessage2", TraiterMessageOSC2);
    }
```


Une fois qu'on a reçu le message OSC, on doit le traiter dans notre fonction, voici un code qui peut vous aider:     

``` csharp
  void TraiterMessageOSC(OSCMessage oscMessage)
    {
        // Récupérer une valeur numérique en tant que float
        // même si elle est de type float ou int :
        float value;
        if (oscMessage.Values[0].Type == OSCValueType.Int)
        {
            value = oscMessage.Values[0].IntValue;
        }
        else if (oscMessage.Values[0].Type == OSCValueType.Float)
        {
            value = oscMessage.Values[0].FloatValue;
        }
        else
        {
            // Si la valeur n'est ni un foat ou int, on quitte la méthode :
            return;
        }


    }
```

Pour traiter un message OSC en particulier, vous pouvez ensuite utiliser une condition dans votre fonction:     
``` csharp
  if(oscMessage.Address == "/nomMessage")  {
      //Exécuter un code ici.
    }
```



!!! quote "Inspiration"

    Inspiré des notes de Thomas O. Fredericks. 
