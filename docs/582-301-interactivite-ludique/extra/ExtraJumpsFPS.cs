using UnityEngine;
using StarterAssets;

[DefaultExecutionOrder(-100)] // S'exécute avant le FirstPersonController
public class ExtraJumpsFPS : MonoBehaviour
{
    public float[] hauteursSauts = { 4f, 3f };

    int prochainSaut;
    bool sautPrecedent;
    FirstPersonController controleur;
    StarterAssetsInputs input;

    void Start()
    {
        controleur = GetComponent<FirstPersonController>();
        input = GetComponent<StarterAssetsInputs>();
        controleur.JumpTimeout = 0;
    }

    void Update()
    {
        if (hauteursSauts.Length == 0) return;

        bool nouvelAppui = input.jump && !sautPrecedent;
        sautPrecedent = input.jump;

        if (controleur.Grounded)
        {
            prochainSaut = 1; // Index du prochain saut dans hauteursSauts (0 = saut du sol)
            controleur.JumpHeight = hauteursSauts[0];
        }
        else if (nouvelAppui && prochainSaut < hauteursSauts.Length)
        {
            controleur.JumpHeight = hauteursSauts[prochainSaut];
            prochainSaut++;
            controleur.Grounded = true;
        }
    }

    // Ajoute un saut de plus (à appeler par ex. depuis un Invoke Events du Collider Event System)
    public void AjouterSaut(float hauteur)
    {
        System.Array.Resize(ref hauteursSauts, hauteursSauts.Length + 1);
        hauteursSauts[hauteursSauts.Length - 1] = hauteur;
    }
}
