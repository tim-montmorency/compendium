using UnityEngine;

public class MatchCameraYaw : MonoBehaviour
{
    public Transform playerCameraRoot;
    
    void LateUpdate()
    {
        Quaternion cameraRotation = playerCameraRoot.rotation;
        transform.rotation = Quaternion.Euler(0, cameraRotation.eulerAngles.y, 0);
        playerCameraRoot.rotation = cameraRotation;
    }
}
