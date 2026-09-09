using UnityEditor;
using UnityEngine;
using System.Collections.Generic;

/// <summary>
/// Outil d'éditeur pour reconvertir en masse des matériaux passés par erreur
/// au shader "Universal Render Pipeline/2D/Mesh2D-Lit-Default" vers le shader
/// 3D standard "Universal Render Pipeline/Lit".
///
/// UTILISATION :
/// 1. Place ce fichier dans un dossier "Editor" (ex: Assets/Editor/) dans ton projet Unity.
/// 2. Fais une SAUVEGARDE de ton projet avant de lancer ça (copie du dossier, ou commit Git).
/// 3. Dans Unity, va dans le menu "Tools > Convert 2D Materials To URP Lit".
/// 4. Regarde le résultat dans la Console (nombre de matériaux convertis / ignorés).
/// </summary>
public class Convert2DMaterialsToURPLit
{
    // Change cette valeur si le nom exact de ton shader 2D est différent
    private const string SourceShaderName = "Universal Render Pipeline/2D/Mesh2D-Lit-Default";
    private const string TargetShaderName = "Universal Render Pipeline/Lit";

    [MenuItem("Tools/Convert 2D Materials To URP Lit")]
    public static void ConvertMaterials()
    {
        Shader targetShader = Shader.Find(TargetShaderName);
        if (targetShader == null)
        {
            Debug.LogError($"Shader cible introuvable : {TargetShaderName}. Vérifie que URP est bien installé.");
            return;
        }

        string[] guids = AssetDatabase.FindAssets("t:Material");
        List<string> converted = new List<string>();
        List<string> skipped = new List<string>();

        int total = guids.Length;
        int index = 0;

        foreach (string guid in guids)
        {
            index++;
            string path = AssetDatabase.GUIDToAssetPath(guid);

            if (EditorUtility.DisplayCancelableProgressBar(
                    "Conversion des matériaux",
                    $"{path} ({index}/{total})",
                    (float)index / total))
            {
                break;
            }

            Material mat = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (mat == null || mat.shader == null) continue;

            if (mat.shader.name != SourceShaderName)
            {
                continue; // pas concerné, on saute
            }

            // Récupère la texture principale et la couleur avant de changer de shader
            Texture mainTex = null;
            Color? mainColor = null;

            if (mat.HasProperty("_MainTex")) mainTex = mat.GetTexture("_MainTex");
            else if (mat.HasProperty("_BaseMap")) mainTex = mat.GetTexture("_BaseMap");

            if (mat.HasProperty("_Color")) mainColor = mat.GetColor("_Color");
            else if (mat.HasProperty("_BaseColor")) mainColor = mat.GetColor("_BaseColor");

            Undo.RecordObject(mat, "Convert shader to URP/Lit");

            mat.shader = targetShader;

            // Réapplique la texture et la couleur sur les propriétés du shader Lit
            if (mainTex != null && mat.HasProperty("_BaseMap"))
                mat.SetTexture("_BaseMap", mainTex);

            if (mainColor.HasValue && mat.HasProperty("_BaseColor"))
                mat.SetColor("_BaseColor", mainColor.Value);

            EditorUtility.SetDirty(mat);
            converted.Add(path);
        }

        EditorUtility.ClearProgressBar();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();

        Debug.Log($"Conversion terminée. {converted.Count} matériau(x) converti(s) vers {TargetShaderName}.");
        if (converted.Count > 0)
        {
            Debug.Log("Liste des matériaux convertis :\n" + string.Join("\n", converted));
        }
    }
}
