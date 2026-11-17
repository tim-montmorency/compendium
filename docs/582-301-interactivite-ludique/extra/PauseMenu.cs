using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class PauseMenu : MonoBehaviour
{
    public GameObject menuPanel;

    public UnityEvent onPause;
    public UnityEvent onResume;

    bool isPaused = false;

    // Basculer entre pause et reprise
    public void Toggle()
    {
        if (isPaused) Resume();
        else Pause();
    }

    // Met en pause le jeu et affiche le menu de pause
    public void Pause()
    {
        isPaused = true;
        menuPanel.SetActive(true);
        Time.timeScale = 0f;
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
        onPause.Invoke();
    }

    // Reprend le jeu et masque le menu de pause
    public void Resume()
    {
        isPaused = false;
        EventSystem.current.SetSelectedGameObject(null); // Sinon le bouton cliqué reste « Selected »
        menuPanel.SetActive(false);
        Time.timeScale = 1f;
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
        onResume.Invoke();
    }

    // Quitter la scène pendant la pause (ex. : bouton Accueil) : la suivante ne doit pas démarrer figée
    void OnDestroy()
    {
        Time.timeScale = 1f;
    }
}
