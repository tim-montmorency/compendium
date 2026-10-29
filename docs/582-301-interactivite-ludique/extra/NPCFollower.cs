using UnityEngine;
using UnityEngine.AI;
using UnityEngine.Events;

/// <summary>
/// Le PNJ poursuit une cible (le joueur) sur le NavMesh, selon deux zones autour de lui :
/// - Zone de contact (cercle 1) : la cible est atteinte, le PNJ s'arrête (et attaque si Can Attack est coché).
/// - Zone de détection (cercle 2) : la cible est repérée, le PNJ court (ou marche) vers elle.
///   Si elle en sort, il abandonne : il reste sur place, ou erre si Wander When Lost est coché.
/// Le PNJ se tourne avant d'avancer et, au contact, se tourne vers la cible.
/// Hitbox (optionnelle) : allumée et éteinte par les événements HitboxOn / HitboxOff du clip d'attaque.
/// </summary>
[RequireComponent(typeof(NavMeshAgent))]
public class NPCFollower : MonoBehaviour
{
    [Header("Target")]
    [Tooltip("Vide = l'objet qui a le tag Player")]
    [SerializeField] private Transform target;

    [Header("Zones")]
    [Tooltip("Cercle 1 (magenta). Cible à l'intérieur = le PNJ s'arrête et attaque si \"Can Attack\" est coché")]
    [SerializeField] private float contactRadius = 1f;
    [Tooltip("Cercle 2 (rouge). Cible à l'intérieur = le PNJ court (ou marche) vers elle. Cible à l'extérieur = il abandonne")]
    [SerializeField] private float detectionRadius = 10f;

    [Header("Movement")]
    [Tooltip("Vitesse de marche (m/s), en errance et en poursuite si Run When Chasing est décoché. Idéalement la vitesse naturelle du clip de marche (Average Velocity Z), pour que les pieds ne glissent pas")]
    [SerializeField] private float walkSpeed = 1.3f;
    [Tooltip("Temps (en secondes) pour faire un demi-tour complet. Utilisé en poursuite, en errance et au contact")]
    [SerializeField] private float halfTurnDuration = 0.25f;
    [Tooltip("Au-delà de cet angle, le PNJ pivote sur place avant d'avancer")]
    [SerializeField] private float maxAngleToMove = 30f;
    [Tooltip("Coché = le PNJ court vers la cible. Décoché = il marche vers elle (ex. : zombie, PNJ curieux)")]
    [SerializeField] private bool runWhenChasing = false;
    [Tooltip("Vitesse de course (m/s). Idéalement la vitesse naturelle du clip de course (Average Velocity Z), pour que les pieds ne glissent pas")]
    [SerializeField] private float chaseSpeed = 3f;

    [Header("Animation")]
    [SerializeField] private Animator animator;
    [Tooltip("Nom exact du Bool de marche dans l'Animator Controller (vrai dès que le PNJ se déplace, qu'il marche ou court)")]
    [SerializeField] private string walkParameter = "walking";
    [Tooltip("Nom exact du Bool de course dans l'Animator Controller (vrai quand le PNJ court vers la cible)")]
    [SerializeField] private string chaseParameter = "run";

    [Header("Attack")]
    [Tooltip("Coché = le PNJ attaque la cible quand elle est dans la zone de contact")]
    [SerializeField] private bool canAttack = false;
    [Tooltip("Délai minimal (en secondes) entre le début de deux attaques. Avec une animation d'attaque, 0 = le PNJ enchaîne les coups tant que la cible est au contact. Sans animation, ne pas mettre 0 : le PNJ attaquerait à chaque image")]
    [SerializeField] private float attackCooldown = 1.5f;
    [Tooltip("Nom exact du Trigger d'attaque dans l'Animator Controller. Vide = aucune animation, l'événement est quand même déclenché")]
    [SerializeField] private string attackTrigger = "attack";
    [Tooltip("Coché = le PNJ n'attaque que s'il voit la cible (aucun obstacle entre ses yeux et elle)")]
    [SerializeField] private bool requireLineOfSight = true;
    [Tooltip("Cube trigger (CES) enfant de la main. Allumé par l'événement d'animation HitboxOn, éteint par HitboxOff (ou par le CES quand le coup touche). Vide = aucune hitbox")]
    [SerializeField] private GameObject hitbox;
    [Space(6)]
    [Tooltip("Actions déclenchées à chaque attaque (son, dégâts, particules…)")]
    [SerializeField] private UnityEvent onAttack;

    [Header("Wander")]
    [Tooltip("Coché = quand la cible est hors de la zone de détection, le PNJ erre au hasard. Décoché = il reste sur place")]
    [SerializeField] private bool wanderWhenLost = false;
    [Tooltip("Distance minimale entre le PNJ et son prochain point d'errance")]
    [SerializeField] private float wanderMinDistance = 2f;
    [Tooltip("Distance maximale entre le PNJ et son prochain point d'errance")]
    [SerializeField] private float wanderMaxDistance = 6f;
    [Tooltip("Durée de la pause à chaque arrivée, entre deux valeurs (en secondes)")]
    [SerializeField] private Vector2 pauseMinMax = new Vector2(1f, 3f);

    // Temps entre deux calculs de chemin (en secondes)
    private const float RepathInterval = 0.2f;
    // Vitesse (m/s) sous laquelle le PNJ est considéré immobile
    private const float WalkThreshold = 0.1f;
    // Marges pour éviter les allers-retours quand la cible est pile sur un cercle (m) :
    // le PNJ quitte le contact à contactRadius + ContactMargin, et abandonne à detectionRadius + LoseMargin
    private const float ContactMargin = 0.5f;
    private const float LoseMargin = 1f;
    // Limites de la vitesse de lecture de l'animation (1 = vitesse normale du clip)
    private const float MinAnimSpeed = 0.5f;
    private const float MaxAnimSpeed = 2.5f;
    // Nombre d'essais pour trouver un point d'errance assez loin avant de se contenter du plus éloigné
    private const int MaxWanderAttempts = 10;
    // Le PNJ doit faire face à la cible (écart d'angle maximal, en degrés) pour attaquer
    private const float AttackMaxAngle = 30f;
    // Ligne de vue : des yeux du PNJ vers le centre du corps de la cible (hauteurs en m)
    private const float EyeHeight = 1.6f;
    private const float TargetAimHeight = 1f;
    // État d'attaque dans l'Animator : reconnu par son nom OU par son Tag (champ Tag de l'état)
    private const string AttackStateName = "Attack";
    // Délai laissé à l'Animator pour entrer dans l'état d'attaque après le Trigger (s)
    private const float AttackStartGrace = 0.2f;

    private NavMeshAgent agent;
    private bool lost = true;       // la cible est hors de la zone de détection
    private bool inContact;         // la cible est dans la zone de contact
    private bool paused;
    private float pauseEnd;
    private float nextRepath;
    private float desiredSpeed;
    private bool hasWalkParameter;
    private bool hasChaseParameter;
    private bool hasAttackTrigger;
    private float nextAttackTime;
    private float attackStartTime = -10f;

    private bool Chasing => !lost && !inContact;
    // Le PNJ court seulement en poursuite, et seulement si Run When Chasing est coché
    private bool Running => Chasing && runWhenChasing;

    private void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
        agent.updateRotation = false;   // la rotation est gérée par ce script
        // L'agent commence à freiner en approchant du bord de la zone de contact
        agent.stoppingDistance = contactRadius;
        if (animator != null) animator.applyRootMotion = false;
    }

    private void Start()
    {
        // La hitbox est toujours éteinte au départ
        HitboxOff();

        // Paramètres de l'Animator : vérifiés une seule fois, au démarrage
        if (animator != null)
        {
            hasWalkParameter = CheckParameter(walkParameter, AnimatorControllerParameterType.Bool, "l'animation de marche ne jouera pas");
            if (runWhenChasing)
                hasChaseParameter = CheckParameter(chaseParameter, AnimatorControllerParameterType.Bool, "la course utilisera l'animation de marche");
            if (canAttack)
                hasAttackTrigger = CheckParameter(attackTrigger, AnimatorControllerParameterType.Trigger, "l'attaque n'aura pas d'animation");
        }

        if (target == null)
        {
            GameObject player = GameObject.FindGameObjectWithTag("Player");
            if (player != null) target = player.transform;
        }

        if (target == null)
        {
            Debug.LogWarning($"{name} n'a pas de cible : glisser le joueur dans le champ Target, ou lui donner le tag Player.", this);
            enabled = false;
            return;
        }

        if (!agent.isOnNavMesh)
        {
            Debug.LogWarning($"{name} n'est pas sur le NavMesh : vérifier le Bake et la position du personnage.", this);
            enabled = false;
        }
    }

    private void Update()
    {
        float distance = Vector3.Distance(transform.position, target.position);

        // Pendant l'animation d'attaque, le PNJ reste sur place : ni déplacement, ni rotation.
        // À la fin du coup, les zones sont réévaluées : si la cible est partie, il repart aussitôt.
        if (IsAttacking())
        {
            if (agent.hasPath) agent.ResetPath();
            agent.velocity = Vector3.zero;
            UpdateAnimation();
            return;
        }

        // Hors de l'animation d'attaque, la hitbox est toujours éteinte
        // (sécurité si le coup a été interrompu avant l'événement HitboxOff)
        HitboxOff();

        // Zone de détection : la cible entre = poursuite, la cible sort = abandon
        if (lost && distance <= detectionRadius)
        {
            lost = false;
            paused = false;
            agent.ResetPath();          // abandonne le point d'errance en cours
            nextRepath = 0f;            // calcul immédiat du chemin vers la cible
        }
        else if (!lost && distance > detectionRadius + LoseMargin)
        {
            lost = true;
            inContact = false;
            agent.ResetPath();
            // L'errance commence par une pause : le PNJ « cherche » avant de repartir
            paused = true;
            pauseEnd = Time.time + Random.Range(pauseMinMax.x, pauseMinMax.y);
        }

        // Zone de contact : la cible entre = arrêt, la cible sort = reprise de la poursuite
        if (!lost)
        {
            if (!inContact && distance <= contactRadius)
            {
                inContact = true;
                agent.ResetPath();
                // Arrêt net : sans ça, l'agent glisse sur son élan et finit collé à la cible
                agent.velocity = Vector3.zero;
            }
            else if (inContact && distance > contactRadius + ContactMargin)
            {
                inContact = false;
                nextRepath = 0f;
            }
        }

        if (Chasing)
        {
            desiredSpeed = runWhenChasing ? chaseSpeed : walkSpeed;
            if (Time.time >= nextRepath)
            {
                agent.SetDestination(target.position);
                nextRepath = Time.time + RepathInterval;
            }
            FaceTowards(agent.steeringTarget, true);
        }
        else if (inContact)
        {
            FaceTowards(target.position, false);   // au contact : face à la cible
            TryAttack(distance);
        }
        else if (wanderWhenLost)
        {
            Wander();
        }

        UpdateAnimation();
    }

    /// <summary>
    /// Attaque si la cible est au contact, que le PNJ lui fait face, qu'il la voit et que le délai est écoulé.
    /// </summary>
    private void TryAttack(float distance)
    {
        if (!canAttack || Time.time < nextAttackTime) return;

        // Faire face à la cible avant de frapper
        Vector3 toTarget = target.position - transform.position;
        toTarget.y = 0f;
        if (Vector3.Angle(transform.forward, toTarget) > AttackMaxAngle) return;

        // Ne pas attaquer à travers un mur
        if (requireLineOfSight && !HasLineOfSight()) return;

        nextAttackTime = Time.time + attackCooldown;
        attackStartTime = Time.time;
        if (hasAttackTrigger) animator.SetTrigger(attackTrigger);
        onAttack.Invoke();
    }

    /// <summary>
    /// Appelée par un événement d'animation du clip d'attaque, au début de l'impact.
    /// </summary>
    public void HitboxOn()
    {
        if (hitbox != null) hitbox.SetActive(true);
    }

    /// <summary>
    /// Appelée par un événement d'animation du clip d'attaque, à la fin de l'impact,
    /// et par le CES de la hitbox quand le coup touche (une seule touche par coup).
    /// </summary>
    public void HitboxOff()
    {
        if (hitbox != null && hitbox.activeSelf) hitbox.SetActive(false);
    }

    /// <summary>
    /// Vrai pendant l'animation d'attaque : de l'envoi du Trigger jusqu'au début de la transition de sortie.
    /// L'état d'attaque est reconnu par son nom (Attack) ou son Tag (Attack).
    /// </summary>
    private bool IsAttacking()
    {
        if (!hasAttackTrigger) return false;

        // Juste après le Trigger, l'Animator n'a pas encore commencé la transition
        if (Time.time < attackStartTime + AttackStartGrace) return true;

        // En transition : c'est l'état de destination qui compte (entrée = oui, sortie = non)
        AnimatorStateInfo state = animator.IsInTransition(0)
            ? animator.GetNextAnimatorStateInfo(0)
            : animator.GetCurrentAnimatorStateInfo(0);
        return state.IsName(AttackStateName) || state.IsTag(AttackStateName);
    }

    private Vector3 EyePosition => transform.position + Vector3.up * EyeHeight;
    private Vector3 AimPoint => target.position + Vector3.up * TargetAimHeight;

    /// <summary>
    /// Vrai si rien ne bloque la vue entre les yeux du PNJ et la cible.
    /// Toucher un collider de la cible elle-même compte comme « vue dégagée ».
    /// </summary>
    private bool HasLineOfSight()
    {
        if (!Physics.Linecast(EyePosition, AimPoint, out RaycastHit hit, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore))
            return true;
        return hit.transform.IsChildOf(target);
    }

    /// <summary>
    /// Errance : marcher vers un point au hasard autour du PNJ, faire une pause, recommencer.
    /// Même logique que NPCWander.
    /// </summary>
    private void Wander()
    {
        desiredSpeed = walkSpeed;
        if (agent.pathPending) return;

        bool arrived = !agent.hasPath || agent.remainingDistance <= agent.stoppingDistance;
        if (!arrived)
        {
            FaceTowards(agent.steeringTarget, true);
            return;
        }

        if (!paused)
        {
            paused = true;
            pauseEnd = Time.time + Random.Range(pauseMinMax.x, pauseMinMax.y);
        }
        else if (Time.time >= pauseEnd)
        {
            if (PickWanderDestination()) paused = false;
        }
    }

    /// <summary>
    /// Tire un point au hasard autour du PNJ, entre wanderMinDistance et wanderMaxDistance.
    /// Si aucun essai ne convient (bord du NavMesh, obstacles), le point le plus éloigné est retenu.
    /// Retourne false si aucun point n'a été trouvé.
    /// </summary>
    private bool PickWanderDestination()
    {
        bool found = false;
        Vector3 best = Vector3.zero;
        float bestDistance = -1f;

        for (int i = 0; i < MaxWanderAttempts; i++)
        {
            // Direction au hasard à plat, puis distance au hasard entre min et max
            Vector2 direction = Random.insideUnitCircle.normalized;
            float range = Random.Range(wanderMinDistance, wanderMaxDistance);
            Vector3 point = transform.position + new Vector3(direction.x, 0f, direction.y) * range;
            // Ramené sur le NavMesh, dans les zones permises à l'agent (ex. : pas dans la rue)
            if (!NavMesh.SamplePosition(point, out NavMeshHit hit, wanderMaxDistance, agent.areaMask))
                continue;

            // SamplePosition peut rapprocher le point : distance revérifiée, à plat
            Vector3 offset = hit.position - transform.position;
            offset.y = 0f;
            float distance = offset.magnitude;

            if (distance >= wanderMinDistance)
            {
                agent.SetDestination(hit.position);
                return true;
            }
            if (distance > bestDistance)
            {
                best = hit.position;
                bestDistance = distance;
                found = true;
            }
        }

        if (found) agent.SetDestination(best);
        return found;
    }

    /// <summary>
    /// Tourne le PNJ vers un point. En déplacement, l'agent est freiné tant que
    /// l'écart d'angle est grand : le PNJ se tourne d'abord, puis avance.
    /// </summary>
    private void FaceTowards(Vector3 point, bool moving)
    {
        Vector3 direction = point - transform.position;
        direction.y = 0f;
        if (direction.sqrMagnitude < 0.0001f) return;

        Quaternion desiredRotation = Quaternion.LookRotation(direction);
        transform.rotation = Quaternion.RotateTowards(transform.rotation, desiredRotation, (180f / halfTurnDuration) * Time.deltaTime);

        if (moving)
        {
            float angle = Quaternion.Angle(transform.rotation, desiredRotation);
            float factor = Mathf.Clamp01(1f - angle / maxAngleToMove);
            agent.speed = desiredSpeed * factor;
        }
    }

    private void UpdateAnimation()
    {
        if (animator == null) return;

        bool isMoving = agent.velocity.magnitude > WalkThreshold;
        if (hasWalkParameter) animator.SetBool(walkParameter, isMoving);
        if (hasChaseParameter) animator.SetBool(chaseParameter, isMoving && Running);

        // Vitesse de lecture : l'animation suit le déplacement réel (accélération, freinage, virages),
        // pour que les pieds ne glissent pas. À pleine vitesse, elle joue à sa vitesse normale (1).
        // Sans paramètre de course, la course joue l'animation de marche, accélérée.
        float fullSpeed = (Running && hasChaseParameter) ? chaseSpeed : walkSpeed;
        if (isMoving && fullSpeed > 0f)
            animator.speed = Mathf.Clamp(agent.velocity.magnitude / fullSpeed, MinAnimSpeed, MaxAnimSpeed);
        else
            animator.speed = 1f;   // à l'arrêt (idle, attaque), l'animation joue normalement
    }

    /// <summary>
    /// Vérifie qu'un paramètre existe dans l'Animator Controller, avec le bon type.
    /// Sinon, affiche un seul avertissement clair (au lieu de celui de Unity à chaque image).
    /// </summary>
    private bool CheckParameter(string parameterName, AnimatorControllerParameterType type, string consequence)
    {
        if (string.IsNullOrEmpty(parameterName)) return false;

        foreach (AnimatorControllerParameter parameter in animator.parameters)
            if (parameter.name == parameterName && parameter.type == type) return true;

        string controller = animator.runtimeAnimatorController != null
            ? animator.runtimeAnimatorController.name
            : "(aucun Animator Controller)";
        Debug.LogWarning($"{name} : pas de {type} \"{parameterName}\" dans {controller} : {consequence}.", this);
        return false;
    }

    // Affiche les deux zones au sol dans la vue Scene (sélectionner le PNJ)
    private void OnDrawGizmosSelected()
    {
#if UNITY_EDITOR
        DrawRing(contactRadius, Color.magenta, canAttack ? "Contact / attaque" : "Contact");
        DrawRing(detectionRadius, Color.red, "Détection");
#endif

        // Ligne de vue vers la cible (en Play) : verte = dégagée, rouge = bloquée
        if (canAttack && requireLineOfSight && Application.isPlaying && target != null)
        {
            Gizmos.color = HasLineOfSight() ? Color.green : Color.red;
            Gizmos.DrawLine(EyePosition, AimPoint);
        }
    }

#if UNITY_EDITOR
    /// <summary>
    /// Dessine un cercle à plat au sol, avec son nom et son rayon (vue Scene seulement).
    /// </summary>
    private void DrawRing(float radius, Color color, string label)
    {
        if (radius <= 0f) return;
        Vector3 center = transform.position + Vector3.up * 0.05f;   // juste au-dessus du sol
        UnityEditor.Handles.color = color;
        UnityEditor.Handles.DrawWireDisc(center, Vector3.up, radius, 2f);
        GUIStyle style = new GUIStyle(UnityEditor.EditorStyles.boldLabel);
        style.normal.textColor = color;
        UnityEditor.Handles.Label(center + Vector3.right * radius, $" {label} {radius:0.#} m", style);
    }
#endif
}
