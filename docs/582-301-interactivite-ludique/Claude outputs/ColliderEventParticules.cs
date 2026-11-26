using System.Collections.Generic;
using System.Reflection;
using UnityEngine;
using ColliderEventSystem;

/// <summary>
/// Permet au Collider Event de réagir aux particules.
/// À placer sur l'objet racine du projectile (celui qui a le Rigidbody) ET sur l'objet qui a le collider.
/// Le script trouve le Collider Event sur lui-même, dans ses enfants ou dans ses parents.
/// Le système de particules doit avoir le module Collision avec « Send Collision Messages » coché.
/// </summary>
public class ColliderEventParticules : MonoBehaviour
{
    [Tooltip("Affiche un message dans la console à chaque particule reçue (pour déboguer).")]
    public bool afficherContacts = true;

    private ColliderEvent colliderEvent;

    private static readonly FieldInfo ChampObjetTouche =
        typeof(ColliderEventBase).GetField("collidingObject", BindingFlags.Instance | BindingFlags.NonPublic);
    private static readonly MethodInfo MethodeDemarrer =
        typeof(ColliderEventBase).GetMethod("BeginChecking", BindingFlags.Instance | BindingFlags.NonPublic);

    // Évite de déclencher deux fois le même Collider Event dans la même image
    // quand le script est présent sur le parent et sur l'enfant.
    private static readonly Dictionary<ColliderEvent, int> DerniereImage = new Dictionary<ColliderEvent, int>();

    private void Awake()
    {
        colliderEvent = GetComponentInChildren<ColliderEvent>();
        if (colliderEvent == null) colliderEvent = GetComponentInParent<ColliderEvent>();

        if (colliderEvent == null)
            Debug.LogWarning(name + " : aucun Collider Event trouvé sur cet objet, ses enfants ou ses parents.", this);
    }

    // Appelé par Unity quand une particule touche un collider de cet objet.
    // « other » est le GameObject du système de particules.
    private void OnParticleCollision(GameObject other)
    {
        if (afficherContacts) Debug.Log(name + " a reçu une particule de " + other.name, this);

        if (colliderEvent == null || !colliderEvent.enabled || !TagAccepte(other)) return;

        if (DerniereImage.TryGetValue(colliderEvent, out int image) && image == Time.frameCount) return;
        DerniereImage[colliderEvent] = Time.frameCount;

        ChampObjetTouche.SetValue(colliderEvent, other);
        MethodeDemarrer.Invoke(colliderEvent, null);
    }

    // Respecte le champ Required Tags du Collider Event.
    private bool TagAccepte(GameObject other)
    {
        string[] tags = colliderEvent.requiredTags;
        if (tags == null || tags.Length == 0) return true;

        foreach (string tag in tags)
        {
            if (other.CompareTag(tag)) return true;
        }

        return false;
    }
}
