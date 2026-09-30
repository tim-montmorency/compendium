#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.Splines;
#endif

using Unity.Splines.Examples;
using UnityEngine;
using UnityEngine.Splines;

// Ajoute un MeshCollider à une route générée par LoftRoadBehaviour
// et le garde synchronisé quand le spline est modifié.
[ExecuteInEditMode]
[RequireComponent(typeof(LoftRoadBehaviour), typeof(MeshCollider))]
public class SplineRoadBehaviour : MonoBehaviour
{
    MeshFilter meshFilter;
    MeshCollider meshCollider;
    SplineContainer container;
    bool refreshRequested;

    void OnEnable()
    {
        meshFilter = GetComponent<MeshFilter>();
        meshCollider = GetComponent<MeshCollider>();
        container = GetComponent<SplineContainer>();

        Spline.Changed += OnSplineChanged;
#if UNITY_EDITOR
        EditorSplineUtility.AfterSplineWasModified += OnSplineModified;
        EditorSplineUtility.RegisterSplineDataChanged<float>(OnWidthChanged);
        Undo.undoRedoPerformed += RequestRefresh;
#endif

        RequestRefresh();
    }

    void OnDisable()
    {
        Spline.Changed -= OnSplineChanged;
#if UNITY_EDITOR
        EditorSplineUtility.AfterSplineWasModified -= OnSplineModified;
        EditorSplineUtility.UnregisterSplineDataChanged<float>(OnWidthChanged);
        Undo.undoRedoPerformed -= RequestRefresh;
#endif
    }

    // LateUpdate s'exécute après l'Update de LoftRoadBehaviour,
    // donc le mesh est déjà régénéré quand on le donne au collider.
    void LateUpdate()
    {
        // Le mesh est recréé quand LoftRoadBehaviour est réactivé
        if (meshCollider.sharedMesh != meshFilter.sharedMesh)
            refreshRequested = true;

        if (refreshRequested)
        {
            // Le passage par null force Unity à recalculer la collision
            meshCollider.sharedMesh = null;
            meshCollider.sharedMesh = meshFilter.sharedMesh;
            refreshRequested = false;
        }
    }

    void RequestRefresh()
    {
        refreshRequested = true;
    }

    void OnSplineChanged(Spline spline, int knotIndex, SplineModification modification)
    {
        OnSplineModified(spline);
    }

    void OnSplineModified(Spline spline)
    {
        foreach (var s in container.Splines)
        {
            if (s == spline)
            {
                RequestRefresh();
                return;
            }
        }
    }

    void OnWidthChanged(SplineData<float> data)
    {
        RequestRefresh();
    }
}
