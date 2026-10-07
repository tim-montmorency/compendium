using UnityEngine;
using UnityEngine.Events;
using TMPro;
using ColliderEventSystem;

/// <summary>
/// Health points: the value, its rules (between 0 and the maximum), its display and its events.
/// The CES calls Remove(int) or Add(int) with an Invoke Events action.
/// </summary>
public class Health : MonoBehaviour
{
    [Header("Value")]
    [Tooltip("Maximum health points")]
    public int maximum = 100;

    [Tooltip("Health points at start")]
    public int startValue = 100;

    [Header("CES link (optional)")]
    [Tooltip("CES variable kept up to date by this script. Lets HP be used in a CES condition.")]
    public IntVariable variable;

    [Tooltip("Checked: back to the start value each time the scene loads. Unchecked: takes the variable's value (health follows the player from one level to the next).")]
    public bool resetOnStart = true;

    [Header("Display (one, both or none)")]
    [Tooltip("Canvas text")]
    public TMP_Text text;

    [Tooltip("{0} = health, {1} = maximum")]
    public string format = "{0} / {1}";

    [Tooltip("Rectangle or 9-slice image whose width follows health. Set Pivot X to 0 so it shrinks to the left.")]
    public RectTransform bar;

    [Tooltip("Speed at which the bar slides to the new value (points per second). 0 = instant.")]
    public float barSpeed = 100f;

    [Header("Events")]
    public UnityEvent onDamaged;
    public UnityEvent onHealed;
    public UnityEvent onDeath;

    int value;
    float barValue;
    float fullWidth;

    public int Value => value;
    public bool IsDead => value <= 0;

    void Start()
    {
        if (variable != null && !resetOnStart)
            value = Mathf.Clamp(variable.RuntimeValue, 0, maximum);
        else
            value = Mathf.Clamp(startValue, 0, maximum);

        if (variable != null) variable.RuntimeValue = value;

        if (bar != null) fullWidth = bar.sizeDelta.x;
        barValue = value;
        Display();
    }

    void Update()
    {
        // A CES Variable action changed HP directly: apply the rules anyway
        if (variable != null && variable.RuntimeValue != value)
            Set(variable.RuntimeValue);

        // The bar slides to the value instead of jumping
        if (bar != null && !Mathf.Approximately(barValue, value))
        {
            barValue = barSpeed > 0
                ? Mathf.MoveTowards(barValue, value, barSpeed * Time.deltaTime)
                : value;
            DisplayBar();
        }
    }

    // --- Public methods: visible in Invoke Events and On Click ---

    public void Remove(int points) => Set(value - points);
    public void Add(int points) => Set(value + points);
    public void Fill() => Set(maximum);
    public void ResetValue() => Set(startValue);

    // --- Rules ---

    void Set(int newValue)
    {
        newValue = Mathf.Clamp(newValue, 0, maximum);
        int oldValue = value;
        value = newValue;
        if (variable != null) variable.RuntimeValue = value;
        Display();

        if (value < oldValue) onDamaged.Invoke();
        if (value > oldValue) onHealed.Invoke();
        if (value == 0 && oldValue > 0) onDeath.Invoke();
    }

    // --- Display ---

    void Display()
    {
        if (text != null) text.text = string.Format(format, value, maximum);
        if (bar != null && barSpeed <= 0) { barValue = value; DisplayBar(); }
    }

    void DisplayBar()
    {
        float ratio = maximum > 0 ? barValue / maximum : 0;
        bar.sizeDelta = new Vector2(fullWidth * ratio, bar.sizeDelta.y);
        // A 9-slice image narrower than its corners gets distorted: hide it at 0
        bar.gameObject.SetActive(barValue > 0.01f);
    }
}
