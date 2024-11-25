!!! warning "Attention"

    Si vous configurez le saut, vous ne serez plus capable de grimper avec votre joueur. 
    
Voici le tutoriel qui vous montera comment créer le saut en VR:   

<iframe width="560" height="315" src="https://www.youtube.com/embed/vvfZbVfikJ8?si=OUAw6Xw-yF1c-dm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Voici le code pour sauter (si le code est nommé jump):   
``` csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class jump : MonoBehaviour
{
    [SerializeField] private InputActionProperty jumpButton;
    [SerializeField] private float jumpHeight = 3f;
    [SerializeField] private CharacterController joueur;
    [SerializeField] private LayerMask groundLayer;

    private float gravity = Physics.gravity.y;
    private Vector3 mouvement;

    private void Update()
    {
        bool _isGrounded = isGrounded(); 

        if(jumpButton.action.WasPressedThisFrame()&& _isGrounded)
        {
            Jump();
        }

        mouvement.y += gravity * Time.deltaTime;

        joueur.Move(mouvement * Time.deltaTime);
    }


    private void Jump()
    {
        mouvement.y = Mathf.Sqrt(jumpHeight * -3.0f * gravity); 
    }

    private bool isGrounded()
    {
        return Physics.CheckSphere(transform.position, 0.2f, groundLayer); 
    }
}
```





Voici un deuxième code pour sauter qui est le même, mais qui peut régler le problème du climb (si le code est nommé jump):   
``` csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
 
public class PlayerJump : MonoBehaviour
{
    [SerializeField] private InputActionProperty jumpButton;
    [SerializeField] private float jumpHeigt = 3f;
    [SerializeField] private CharacterController cc;
    [SerializeField] private LayerMask groundLayers;
 
    private bool timer;
 
    private float gravity = Physics.gravity.y;
 
    private Vector3 movement;
 
    private void Update()
    {
        bool _IsGrounded = IsGrounded();
 
        if (jumpButton.action.WasPressedThisFrame() && _IsGrounded)
        {
            Jump();
            StartCoroutine("sautTest"); 
        }
 
        
 
        if (timer == true)
        {
            movement.y += gravity * Time.deltaTime;
            cc.Move(movement * Time.deltaTime);
 
        }

 
    }
        private void Jump()
    {
        movement.y = Mathf.Sqrt(jumpHeigt * -3.0f * gravity);
    }
 
    private bool IsGrounded()
    {
        return Physics.CheckSphere(transform.position, 0.2f, groundLayers);
    }
 
    public IEnumerator sautTest()
    {
        timer = true;
        yield return new WaitForSeconds(2f);
        timer = false; 
        yield break; 
    }
}
```
