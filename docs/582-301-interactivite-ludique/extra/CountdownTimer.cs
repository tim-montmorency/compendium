using UnityEngine;
using UnityEngine.Events;
using TMPro;

/// <summary>
/// Countdown: the remaining time, its rules, its display and its events.
/// The CES calls StartTimer(), StopTimer() or AddTime(float) with an Invoke Events action.
/// Time freezes on its own when the pause menu sets Time.timeScale to 0.
/// </summary>
public class CountdownTimer : MonoBehaviour
{
    [Header("Value")]
    [Tooltip("Duration in seconds")]
    public float duration = 60f;

    [Tooltip("Checked: starts when the scene loads. Unchecked: waits for a call to StartTimer().")]
    public bool startOnLoad = true;

    [Tooltip("Below this number of seconds, On Warning fires once (e.g. red text, faster music). 0 = no warning.")]
    public float warningThreshold = 10f;

    [Header("Display")]
    [Tooltip("Canvas text")]
    public TMP_Text text;

    [Tooltip("{0} = minutes, {1} = seconds, {2} = hundredths (optional). E.g. {0:00}:{1:00}.{2:00}")]
    public string format = "{0:00}:{1:00}";

    [Header("Events")]
    public UnityEvent onStarted;
    public UnityEvent onWarning;
    public UnityEvent onFinished;

    float remaining;
    bool running;
    bool warningGiven;

    public float Remaining => remaining;
    public bool IsRunning => running;

    void Start()
    {
        remaining = duration;
        Display();
        if (startOnLoad) StartTimer();
    }

    void Update()
    {
        if (!running) return;

        remaining -= Time.deltaTime;

        if (!warningGiven && warningThreshold > 0 && remaining <= warningThreshold)
        {
            warningGiven = true;
            onWarning.Invoke();
        }

        if (remaining <= 0)
        {
            remaining = 0;
            running = false;
            Display();
            onFinished.Invoke();
            return;
        }

        Display();
    }

    // --- Public methods: visible in Invoke Events and On Click ---

    /// <summary>Starts over from the full duration.</summary>
    public void StartTimer()
    {
        remaining = duration;
        warningGiven = false;
        running = true;
        Display();
        onStarted.Invoke();
    }

    public void StopTimer() => running = false;

    /// <summary>Resumes where it stopped.</summary>
    public void ResumeTimer()
    {
        if (remaining > 0) running = true;
    }

    /// <summary>Time bonus (positive) or penalty (negative).</summary>
    public void AddTime(float seconds)
    {
        remaining = Mathf.Max(0, remaining + seconds);
        if (remaining > warningThreshold) warningGiven = false;
        Display();
    }

    // --- Display ---

    void Display()
    {
        if (text == null) return;

        if (format.Contains("{2"))
        {
            // With hundredths: round down, so the display reaches 00:00.00 exactly at the end
            int hundredths = Mathf.FloorToInt(remaining * 100f);
            int totalSeconds = hundredths / 100;
            text.text = string.Format(format, totalSeconds / 60, totalSeconds % 60, hundredths % 100);
        }
        else
        {
            // Without hundredths: round up, so 00:00 only shows when time is up
            int totalSeconds = Mathf.CeilToInt(remaining);
            text.text = string.Format(format, totalSeconds / 60, totalSeconds % 60);
        }
    }
}
