using UnityEngine;
using UnityEngine.InputSystem;
using StarterAssets;

[DefaultExecutionOrder(-100)]
public class CrouchFPS : MonoBehaviour
{
    [Header("Input")]
    public Key crouchKey = Key.LeftCtrl;

    [Tooltip("Checked: hold to crouch. Unchecked: each press toggles crouch / stand.")]
    public bool holdToCrouch = true;

    [Tooltip("Checked: jumping makes the player stand up (if there is enough headroom).")]
    public bool jumpCancelsCrouch = true;

    [Header("Settings")]
    [Tooltip("Capsule height while crouching.")]
    public float crouchHeight = 1.25f;

    [Tooltip("Player movement speed while crouching.")]
    public float crouchSpeed = 1f;

    [Tooltip("Speed at which the body and camera move down or up (units/second).")]
    public float crouchTransitionSpeed = 4f;

    [Header("Visuals")]
    [Tooltip("Optional: the first-person viewmodel (arms/weapon). It moves down with the camera when crouching.")]
    public Transform viewModel;

    CharacterController cc;
    FirstPersonController controller;
    StarterAssetsInputs input;
    Transform cameraTarget;

    float standHeight, standCenterY, standCameraY;
    float walkSpeed, sprintSpeed;
    float viewModelStandY;     // Viewmodel Y position while standing
    Transform cachedViewModel; // The viewmodel whose original values were cached
    bool wantsToCrouch;        // What the player is requesting
    bool isCrouching;          // Actual state (may stay crouched under a ceiling)

    void Start()
    {
        cc = GetComponent<CharacterController>();
        controller = GetComponent<FirstPersonController>();
        input = GetComponent<StarterAssetsInputs>();
        cameraTarget = controller.CinemachineCameraTarget.transform;

        standHeight = cc.height;
        standCenterY = cc.center.y;
        standCameraY = cameraTarget.localPosition.y;
        walkSpeed = controller.MoveSpeed;
        sprintSpeed = controller.SprintSpeed;
    }

    void Update()
    {
        bool grounded = controller.Grounded;

        // 1. Read player input based on the selected mode
        if (holdToCrouch)
            wantsToCrouch = Keyboard.current[crouchKey].isPressed;
        else if (Keyboard.current[crouchKey].wasPressedThisFrame)
        {
            // While airborne, a press can only stand up (not crouch)
            if (grounded || wantsToCrouch) wantsToCrouch = !wantsToCrouch;
        }

        // Jumping cancels crouch (optional)
        if (jumpCancelsCrouch && isCrouching && grounded && input.jump)
        {
            if (CanStandUp()) isCrouching = false; // Stand up, unless there is a ceiling
            if (!holdToCrouch) wantsToCrouch = false;
        }

        // 2. Apply the request
        if (wantsToCrouch && grounded && !(jumpCancelsCrouch && input.jump))
            isCrouching = true;          // Can only crouch while grounded
        else if (!wantsToCrouch && isCrouching && CanStandUp())
            isCrouching = false;         // Only stand up if there is enough headroom

        // 3. Smoothly transition the capsule height
        float targetHeight = isCrouching ? crouchHeight : standHeight;
        cc.height = Mathf.MoveTowards(cc.height, targetHeight, crouchTransitionSpeed * Time.deltaTime);

        // Keep feet on the ground: the center moves down by half the difference
        float diff = standHeight - cc.height;
        cc.center = new Vector3(cc.center.x, standCenterY - diff / 2f, cc.center.z);

        // The camera moves down by the full difference
        Vector3 p = cameraTarget.localPosition;
        cameraTarget.localPosition = new Vector3(p.x, standCameraY - diff, p.z);

        // The viewmodel moves down exactly like the camera
        if (viewModel != null)
        {
            // Cache its original position the first time (also works if assigned during Play mode)
            if (viewModel != cachedViewModel)
            {
                viewModelStandY = viewModel.localPosition.y + diff;
                cachedViewModel = viewModel;
            }

            Vector3 pos = viewModel.localPosition;
            viewModel.localPosition = new Vector3(pos.x, viewModelStandY - diff, pos.z);
        }

        // 4. Movement speed
        controller.MoveSpeed = isCrouching ? crouchSpeed : walkSpeed;
        controller.SprintSpeed = isCrouching ? crouchSpeed : sprintSpeed;
    }

    bool CanStandUp()
    {
        float radius = cc.radius * 0.9f;
        float top = transform.position.y + cc.center.y + cc.height / 2f;
        Vector3 origin = new Vector3(transform.position.x, top - radius, transform.position.z);
        float distance = standHeight - cc.height;

        RaycastHit[] hits = Physics.SphereCastAll(origin, radius, Vector3.up, distance, ~0, QueryTriggerInteraction.Ignore);
        foreach (RaycastHit hit in hits)
        {
            if (hit.distance == 0) continue;                  // Already overlapping at start (e.g. the ground): ignored
            if (hit.transform.IsChildOf(transform)) continue; // Part of the player (weapon, mesh...): ignored
            return false;                                     // A real obstacle overhead
        }
        return true;
    }
}
