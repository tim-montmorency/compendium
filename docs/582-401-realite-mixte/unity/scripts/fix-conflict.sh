#!/bin/bash
set -e

GIT_DIR=$(git rev-parse --git-dir)
GIT_ROOT=$(git rev-parse --show-toplevel)

if [ ! -f "$GIT_DIR/MERGE_HEAD" ]; then
  echo "❌ Aucun merge en cours. Lance ce script pendant un conflit Git."
  exit 1
fi

# Fichiers .unity et .prefab en conflit (chemins relatifs à la racine Git)
UNITY_FILES=$(git diff --name-only --diff-filter=U | grep -E '\.(unity|prefab)$' || true)

if [ -z "$UNITY_FILES" ]; then
  echo "❌ Aucun fichier .unity ou .prefab en conflit trouvé."
  exit 1
fi

echo "📋 Fichiers en conflit :"
echo "$UNITY_FILES" | sed 's/^/   /'

UNITY_VERSION=$(grep "m_EditorVersion:" ProjectSettings/ProjectVersion.txt | awk '{print $2}')
UNITY_MERGE="/Applications/Unity/Hub/Editor/$UNITY_VERSION/Unity.app/Contents/Tools/UnityYAMLMerge"

if [ ! -f "$UNITY_MERGE" ]; then
  echo "❌ UnityYAMLMerge introuvable : $UNITY_MERGE"
  echo "   Vérifie que Unity $UNITY_VERSION est bien installé via Unity Hub."
  exit 1
fi

MINE=$(git rev-parse HEAD)
THEIRS=$(cat "$GIT_DIR/MERGE_HEAD")
BASE=$(git merge-base HEAD MERGE_HEAD)

mkdir -p /tmp/unity-merge
SUCCESS=0
FAIL=0

while IFS= read -r FILE; do
  echo ""
  echo "⚙️  Résolution : $FILE"

  git show "$BASE":"$FILE"   > /tmp/unity-merge/base.unity
  git show "$MINE":"$FILE"   > /tmp/unity-merge/mine.unity
  git show "$THEIRS":"$FILE" > /tmp/unity-merge/theirs.unity

  "$UNITY_MERGE" merge -p \
    /tmp/unity-merge/base.unity \
    /tmp/unity-merge/mine.unity \
    /tmp/unity-merge/theirs.unity \
    /tmp/unity-merge/merged.unity

  CONFLICTS=$(grep -c "<<<<<<" /tmp/unity-merge/merged.unity || true)

  if [ "$CONFLICTS" -gt 0 ]; then
    echo "⚠️  Il reste $CONFLICTS conflit(s) non résolus dans $FILE"
    FAIL=$((FAIL + 1))
  else
    cp /tmp/unity-merge/merged.unity "$GIT_ROOT/$FILE"
    git -C "$GIT_ROOT" add "$FILE"
    echo "✅ $FILE résolu."
    SUCCESS=$((SUCCESS + 1))
  fi
done <<< "$UNITY_FILES"

echo ""
if [ "$FAIL" -gt 0 ]; then
  echo "⚠️  $SUCCESS fichier(s) résolu(s), $FAIL fichier(s) en échec."
  exit 1
else
  echo "✅ Tous les conflits résolus ($SUCCESS fichier(s)). Tu peux finaliser le merge dans GitHub Desktop."
fi
