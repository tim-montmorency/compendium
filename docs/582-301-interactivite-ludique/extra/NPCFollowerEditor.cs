using System.Collections.Generic;
using UnityEditor;

/// <summary>
/// Inspector de NPCFollower : identique à l'Inspector par défaut,
/// sauf que les options d'une section sont cachées tant que sa case n'est pas cochée
/// (Run When Chasing, Can Attack, Wander When Lost).
/// Ce script est dans un dossier Editor : il n'est pas inclus dans le build.
/// </summary>
[CustomEditor(typeof(NPCFollower))]
public class NPCFollowerEditor : Editor
{
    // Champ caché → case qui doit être cochée pour l'afficher
    private static readonly Dictionary<string, string> ShownOnlyIf = new Dictionary<string, string>
    {
        { "chaseSpeed", "runWhenChasing" },
        { "chaseParameter", "runWhenChasing" },

        { "attackCooldown", "canAttack" },
        { "attackTrigger", "canAttack" },
        { "onAttack", "canAttack" },
        { "requireLineOfSight", "canAttack" },
        { "hitbox", "canAttack" },

        { "wanderMinDistance", "wanderWhenLost" },
        { "wanderMaxDistance", "wanderWhenLost" },
        { "pauseMinMax", "wanderWhenLost" },
    };

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        // Parcourt tous les champs visibles, dans l'ordre du script
        SerializedProperty property = serializedObject.GetIterator();
        bool enterChildren = true;
        while (property.NextVisible(enterChildren))
        {
            enterChildren = false;

            // Le champ « Script » reste grisé, comme dans l'Inspector par défaut
            if (property.name == "m_Script")
            {
                using (new EditorGUI.DisabledScope(true))
                    EditorGUILayout.PropertyField(property);
                continue;
            }

            if (ShownOnlyIf.TryGetValue(property.name, out string toggle) &&
                !serializedObject.FindProperty(toggle).boolValue)
                continue;

            EditorGUILayout.PropertyField(property, true);
        }

        serializedObject.ApplyModifiedProperties();
    }
}
