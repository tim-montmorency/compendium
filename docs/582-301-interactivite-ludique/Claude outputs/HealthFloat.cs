using UnityEngine;
using UnityEngine.Events;
using TMPro;
using ColliderEventSystem;

/// <summary>
/// Health points with decimals: the value, its rules (between 0 and the maximum), its display and its events.
/// The CES calls Remove(float) or Add(float) with an Invoke Events action.
/// Useful for small or continuous damage (ex.: 0.5 per hit, lava that burns 10 per second).
/// </summary>
public class HealthFloat : MonoBehaviour
{
    [Header("Value")]
    [Tooltip("Maximum health points")]
    public float maximum = 100f;

    [Tooltip("Health points at start")]
    public float startValue = 100f;

    [Header("CES link (optional)")]
    [Tooltip("CES variable kept up to date by this script, rounded up to an int (0.2 HP left still counts as 1). Lets HP be used in a CES condition.")]
    public IntVariable variable;

    [Tooltip("Checked: back to the start value each time the scene loads. Unchecked: takes the variable's value (health follows the player from one level to the next).")]
    public bool resetOnStart = true;

    [Header("Display (one, both or none)")]
    [Tooltip("Canvas text")]
    public TMP_Text text;

    [Tooltip("{0} = health, {1} = maximum. {0:0} = no decimals, {0:0.0} = one decimal")]
    public string format = "{0:0} / {1:0}";

    [Tooltip("Rectangle or 9-slice image whose width follows health. Set Pivot X to 0 so it shrinks to the left.")]
    public RectTransform bar;

    [Tooltip("Speed at which the bar slides to the new value (points per second). 0 = instant.")]
    public float barSpeed = 100f;

    [Header("Events")]
    public UnityEvent onDamaged;
    public UnityEvent onHealed;
    public UnityEvent onDeath;

    float value;
    float barValue;
    float fullWidth;

    public float Value => value;
    public bool IsDead => value <= 0f;

    // Value sent to the CES variable: rounded up, so the player is not "dead" for the CES while HP > 0
    int VariableValue => Mathf.CeilToInt(value);

    void Start()
    {
        if (variable != null && !resetOnStart)
            value = Mathf.Clamp(variable.RuntimeValue, 0f, maximum);
        else
            value = Mathf.Clamp(startValue, 0f, maximum);

        if (variable != null) variable.RuntimeValue = VariableValue;

        if (bar != null) fullWidth = bar.sizeDelta.x;
        barValue = value;
        Display();
    }

    void Update()
    {
        // A CES Variable action changed HP directly: apply the rules anyway
        if (variable != null && variable.RuntimeValue != VariableValue)
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

    public void Remove(float points) => Set(value - points);
    public void Add(float points) => Set(value + points);
    public void Fill() => Set(maximum);
    public void ResetValue() => Set(startValue);

    // Continuous damage or healing: call every frame (ex.: from OnTriggerStay) with points per second
    public void RemovePerSecond(float pointsPerSecond) => Set(value - pointsPerSecond * Time.deltaTime);
    public void AddPerSecond(float pointsPerSecond) => Set(value + pointsPerSecond * Time.deltaTime);

    // --- Rules ---

    void Set(float newValue)
    {
        newValue = Mathf.Clamp(newValue, 0f, maximum);
        float oldValue = value;
        value = newValue;
        if (variable != null) variable.RuntimeValue = VariableValue;
        Display();

        if (value < oldValue) onDamaged.Invoke();
        if (value > oldValue) onHealed.Invoke();
        if (value <= 0f && oldValue > 0f) onDeath.Invoke();
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
