using UnityEngine;
using UnityEngine.Events;
using TMPro;
using ColliderEventSystem;

/// <summary>
/// A resource that accumulates (coins, ammo, fragments): the amount, its rules, its display and its events.
/// The CES calls Add(int), Remove(int) or Spend(int) with an Invoke Events action.
/// </summary>
public class Resource : MonoBehaviour
{
    [Header("Value")]
    [Tooltip("Amount at start")]
    public int startValue = 0;

    [Tooltip("Maximum amount. 0 = no limit.")]
    public int maximum = 0;

    [Tooltip("Amount to reach to trigger On Goal Reached. 0 = no goal.")]
    public int goal = 0;

    [Header("CES link (optional)")]
    [Tooltip("CES variable kept up to date by this script. Lets the amount be used in a CES condition.")]
    public IntVariable variable;

    [Tooltip("Checked: back to the start value each time the scene loads. Unchecked: takes the variable's value (the resource follows the player from one level to the next).")]
    public bool resetOnStart = true;

    [Header("Display")]
    [Tooltip("Canvas text")]
    public TMP_Text text;

    [Tooltip("{0} = amount, {1} = goal")]
    public string format = "× {0}";

    [Header("Events")]
    public UnityEvent onAdded;
    public UnityEvent onRemoved;
    public UnityEvent onGoalReached;
    public UnityEvent onInsufficientFunds;

    int amount;
    bool goalAlreadyReached;

    public int Amount => amount;

    void Start()
    {
        if (variable != null && !resetOnStart)
            amount = Clamp(variable.RuntimeValue);
        else
            amount = Clamp(startValue);

        if (variable != null) variable.RuntimeValue = amount;
        goalAlreadyReached = goal > 0 && amount >= goal;
        Display();
    }

    void Update()
    {
        // A CES Variable action changed the amount directly: apply the rules anyway
        if (variable != null && variable.RuntimeValue != amount)
            Set(variable.RuntimeValue);
    }

    // --- Public methods: visible in Invoke Events and On Click ---

    public void Add(int count) => Set(amount + count);

    /// <summary>Removes what it can, without going below 0.</summary>
    public void Remove(int count) => Set(amount - count);

    /// <summary>All or nothing: removes the price only if there is enough. Otherwise, On Insufficient Funds.</summary>
    public void Spend(int price)
    {
        if (amount >= price) Set(amount - price);
        else onInsufficientFunds.Invoke();
    }

    public void ResetValue()
    {
        goalAlreadyReached = false;
        Set(startValue);
    }

    // --- Rules ---

    int Clamp(int n)
    {
        n = Mathf.Max(0, n);
        if (maximum > 0) n = Mathf.Min(n, maximum);
        return n;
    }

    void Set(int newAmount)
    {
        newAmount = Clamp(newAmount);
        int oldAmount = amount;
        amount = newAmount;
        if (variable != null) variable.RuntimeValue = amount;
        Display();

        if (amount > oldAmount) onAdded.Invoke();
        if (amount < oldAmount) onRemoved.Invoke();

        if (goal > 0 && !goalAlreadyReached && amount >= goal)
        {
            goalAlreadyReached = true;
            onGoalReached.Invoke();
        }
    }

    // --- Display ---

    void Display()
    {
        if (text != null) text.text = string.Format(format, amount, goal);
    }
}
