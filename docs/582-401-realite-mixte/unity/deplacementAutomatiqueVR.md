# Déplacement automatique et changement de voie

## Tutoriel 🎥
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/cxPbRNQYkOo?si=dOLrFs8csaoVKPmq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Code pour le déplacement

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class deplacementAutomatique : MonoBehaviour
{
    public float vitesseAvance = 3f;
    public float tailleVoie = 2f;
    public float vitesseChangementVoie = 5f;

    private int voieActive = 0; 
    
    private bool changementVoieActuel = false;



    void Update()
    {
        // 1. Avancer automatiquement
        transform.Translate(Vector3.forward * vitesseAvance * Time.deltaTime);

        // 2. Input joystick (horizontal)
        if (!changementVoieActuel)
        {
            float input = Input.GetAxis("Horizontal");

            if (input > 0.5f && voieActive < 1)
            {
                voieActive++;

                changementVoieActuel = true;


            }
            else if (input < -0.5f && voieActive > -1)
            {
                voieActive--;

                changementVoieActuel = true;

            }
        }

        // 3. Déplacement latéral seulement (X)
        Vector3 pos = transform.position;

        float targetX = voieActive * tailleVoie;

        float newX = Mathf.MoveTowards(
            pos.x,
            targetX,
            vitesseChangementVoie * Time.deltaTime
        );

        transform.position = new Vector3(newX, pos.y, pos.z);

        // 4. Fin du changement de voie
        if (Mathf.Abs(newX - targetX) < 0.01f)
        {
            changementVoieActuel = false;
        }
    }


    }

```
