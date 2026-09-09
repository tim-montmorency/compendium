using System.Collections.Generic;
using System.Reflection;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

/// <summary>
/// Outil d'éditeur : reconvertit des matériaux tombés par erreur sur le shader
/// "Universal Render Pipeline/2D/Mesh2D-Lit-Default" vers "Universal Render Pipeline/Lit".
///
/// AVANT DE LANCER : commit Git ou copie du projet. L'annulation (Ctrl+Z) sur des
/// assets n'est pas fiable — le contrôle de version est le vrai filet de sécurité.
///
/// 1. Placer le fichier dans un dossier "Editor" (ex. Assets/Editor/).
/// 2. Menu "Tools > URP > 1. Analyser..." pour voir la liste sans rien modifier.
/// 3. Menu "Tools > URP > 2. Convertir (sélection)" ou "3. Convertir (tout le projet)".
///
/// LIMITE IMPORTANTE : ce script rebranche le bon shader et rétablit texture/couleur/
/// tiling/keywords. Il ne peut PAS deviner les valeurs de smoothness, metallic, normal
/// map ou emission perdues lors de la mauvaise conversion initiale.
/// </summary>
public static class Convert2DMaterialsToURPLit
{
    private const string SourceShaderName = "Universal Render Pipeline/2D/Mesh2D-Lit-Default";
    private const string TargetShaderName = "Universal Render Pipeline/Lit";

    [MenuItem("Tools/URP/1. Analyser les matériaux 2D (aucune modification)", priority = 1)]
    private static void DryRunAll() => Run(dryRun: true, selectionOnly: false);

    [MenuItem("Tools/URP/2. Convertir vers URP Lit (sélection)", priority = 2)]
    private static void ConvertSelection() => Run(dryRun: false, selectionOnly: true);

    [MenuItem("Tools/URP/3. Convertir vers URP Lit (tout le projet)", priority = 3)]
    private static void ConvertAll() => Run(dryRun: false, selectionOnly: false);

    private static void Run(bool dryRun, bool selectionOnly)
    {
        Shader targetShader = Shader.Find(TargetShaderName);
        if (targetShader == null)
        {
            Debug.LogError($"Shader cible introuvable : {TargetShaderName}. Vérifier que URP est installé et actif.");
            return;
        }

        string[] guids = selectionOnly
            ? Selection.assetGUIDs
            : AssetDatabase.FindAssets("t:Material", new[] { "Assets" });

        if (guids == null || guids.Length == 0)
        {
            Debug.LogWarning("Aucun matériau à examiner.");
            return;
        }

        if (!dryRun && !EditorUtility.DisplayDialog(
                "Conversion de matériaux",
                $"{guids.Length} asset(s) vont être examinés et les matériaux en shader 2D seront " +
                $"reconvertis vers {TargetShaderName}.\n\nLe projet est-il sauvegardé (Git / copie) ?",
                "Convertir", "Annuler"))
        {
            return;
        }

        var converted = new List<string>();
        var readOnly = new List<string>();
        int examined = 0;
        bool canceled = false;

        int undoGroup = Undo.GetCurrentGroup();
        Undo.SetCurrentGroupName("Convert 2D materials to URP/Lit");

        if (!dryRun) AssetDatabase.StartAssetEditing();
        try
        {
            for (int i = 0; i < guids.Length; i++)
            {
                string path = AssetDatabase.GUIDToAssetPath(guids[i]);
                if (string.IsNullOrEmpty(path)) continue;

                if (EditorUtility.DisplayCancelableProgressBar(
                        dryRun ? "Analyse des matériaux" : "Conversion des matériaux",
                        $"{path} ({i + 1}/{guids.Length})",
                        (i + 1) / (float)guids.Length))
                {
                    canceled = true;
                    break;
                }

                // On ne traite que les .mat éditables : pas les matériaux intégrés
                // à un .fbx, pas ceux qui viennent d'un package immuable.
                if (!path.EndsWith(".mat", System.StringComparison.OrdinalIgnoreCase)) continue;

                Material mat = AssetDatabase.LoadAssetAtPath<Material>(path);
                if (mat == null || mat.shader == null) continue;
                if (mat.shader.name != SourceShaderName) continue;

                examined++;

                if ((mat.hideFlags & HideFlags.NotEditable) != 0 || !AssetDatabase.IsOpenForEdit(mat))
                {
                    readOnly.Add(path);
                    continue;
                }

                if (dryRun) { converted.Add(path); continue; }

                // Sauvegarde des valeurs dont le NOM de propriété change entre les deux shaders.
                Texture mainTex = mat.HasProperty("_MainTex") ? mat.GetTexture("_MainTex") : null;
                Vector2 texScale = mat.HasProperty("_MainTex") ? mat.GetTextureScale("_MainTex") : Vector2.one;
                Vector2 texOffset = mat.HasProperty("_MainTex") ? mat.GetTextureOffset("_MainTex") : Vector2.zero;
                Color? mainColor = mat.HasProperty("_Color") ? mat.GetColor("_Color") : (Color?)null;

                Undo.RegisterCompleteObjectUndo(mat, "Convert shader to URP/Lit");

                mat.shader = targetShader;

                if (mainTex != null && mat.HasProperty("_BaseMap"))
                {
                    mat.SetTexture("_BaseMap", mainTex);
                    mat.SetTextureScale("_BaseMap", texScale);
                    mat.SetTextureOffset("_BaseMap", texOffset);
                }
                if (mainColor.HasValue && mat.HasProperty("_BaseColor"))
                    mat.SetColor("_BaseColor", mainColor.Value);

                // Indispensable : réaligne keywords, render queue et passes.
                ResetKeywords(mat);

                EditorUtility.SetDirty(mat);
                converted.Add(path);
            }
        }
        finally
        {
            if (!dryRun) AssetDatabase.StopAssetEditing();
            EditorUtility.ClearProgressBar();
        }

        if (!dryRun)
        {
            AssetDatabase.SaveAssets();
            Undo.CollapseUndoOperations(undoGroup);
        }

        string verbe = dryRun ? "détecté(s)" : "converti(s)";
        Debug.Log($"{(canceled ? "INTERROMPU — " : "")}{converted.Count} matériau(x) {verbe} " +
                  $"sur {examined} en shader 2D." + (dryRun ? " (aucune modification)" : ""));

        if (converted.Count > 0)
            Debug.Log("Matériaux :\n" + string.Join("\n", converted));
        if (readOnly.Count > 0)
            Debug.LogWarning("Non modifiables (package / lecture seule / non extraits) :\n" + string.Join("\n", readOnly));
        if (canceled)
            Debug.LogWarning("Conversion interrompue : le projet est dans un état partiellement converti.");
    }

    // ------------------------------------------------------------------
    // Remise à niveau des keywords / render state du matériau.
    //
    // URP fournit UnityEditor.Rendering.Universal.ShaderUtils.ResetMaterialKeywords,
    // mais cette classe n'est publique qu'à partir de URP 12 (Unity 2021.2) et exige
    // une référence à l'assembly Unity.RenderPipelines.Universal.Editor. On y accède
    // par réflexion pour que le script compile sur toutes les versions, avec un repli
    // manuel (état opaque standard) si la méthode est absente.
    // ------------------------------------------------------------------
    private static MethodInfo _resetMethod;
    private static bool _resetMethodResolved;

    private static void ResetKeywords(Material mat)
    {
        if (!_resetMethodResolved)
        {
            _resetMethodResolved = true;
            _resetMethod = FindResetMaterialKeywords();
            if (_resetMethod == null)
                Debug.LogWarning("ShaderUtils.ResetMaterialKeywords introuvable (URP < 12 ?). " +
                                 "Repli sur une configuration opaque standard : vérifier les matériaux transparents à la main.");
        }

        if (_resetMethod != null)
        {
            var ps = _resetMethod.GetParameters();
            var args = new object[ps.Length];
            args[0] = mat;
            for (int i = 1; i < ps.Length; i++)
            {
                var t = ps[i].ParameterType;
                object def = ps[i].HasDefaultValue ? ps[i].DefaultValue : null;
                if (t.IsEnum) def = System.Enum.ToObject(t, def ?? 0);
                else if (def == null && t.IsValueType) def = System.Activator.CreateInstance(t);
                args[i] = def;
            }
            _resetMethod.Invoke(null, args);
            return;
        }

        ResetKeywordsFallback(mat);
    }

    private static MethodInfo FindResetMaterialKeywords()
    {
        foreach (var asm in System.AppDomain.CurrentDomain.GetAssemblies())
        {
            var type = asm.GetType("UnityEditor.Rendering.Universal.ShaderUtils", false);
            if (type == null) continue;

            foreach (var m in type.GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static))
            {
                if (m.Name != "ResetMaterialKeywords") continue;
                var ps = m.GetParameters();
                if (ps.Length >= 1 && ps[0].ParameterType == typeof(Material)) return m;
            }
        }
        return null;
    }

    /// <summary>Configuration opaque standard de URP/Lit, appliquée si l'API de URP est indisponible.</summary>
    private static void ResetKeywordsFallback(Material mat)
    {
        mat.SetFloat("_Surface", 0f);          // Opaque
        mat.SetFloat("_Blend", 0f);
        mat.SetFloat("_AlphaClip", 0f);
        mat.SetFloat("_SrcBlend", (float)BlendMode.One);
        mat.SetFloat("_DstBlend", (float)BlendMode.Zero);
        mat.SetFloat("_ZWrite", 1f);
        mat.SetFloat("_WorkflowMode", 1f);     // Metallic
        mat.SetOverrideTag("RenderType", "Opaque");
        mat.renderQueue = (int)RenderQueue.Geometry;
        mat.SetShaderPassEnabled("ShadowCaster", true);

        mat.DisableKeyword("_SURFACE_TYPE_TRANSPARENT");
        mat.DisableKeyword("_ALPHAPREMULTIPLY_ON");
        mat.DisableKeyword("_ALPHATEST_ON");

        SetKeyword(mat, "_NORMALMAP", HasTex(mat, "_BumpMap"));
        SetKeyword(mat, "_METALLICSPECGLOSSMAP", HasTex(mat, "_MetallicGlossMap"));
        SetKeyword(mat, "_OCCLUSIONMAP", HasTex(mat, "_OcclusionMap"));

        bool emission = HasTex(mat, "_EmissionMap") ||
                        (mat.HasProperty("_EmissionColor") && mat.GetColor("_EmissionColor").maxColorComponent > 0f);
        SetKeyword(mat, "_EMISSION", emission);
        mat.globalIlluminationFlags = emission
            ? MaterialGlobalIlluminationFlags.RealtimeEmissive
            : MaterialGlobalIlluminationFlags.EmissiveIsBlack;
    }

    private static bool HasTex(Material m, string prop) => m.HasProperty(prop) && m.GetTexture(prop) != null;

    private static void SetKeyword(Material m, string keyword, bool on)
    {
        if (on) m.EnableKeyword(keyword);
        else m.DisableKeyword(keyword);
    }
}