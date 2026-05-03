$GIT_DIR = (git rev-parse --git-dir).Trim()
$GIT_ROOT = (git rev-parse --show-toplevel).Trim()

if (-not (Test-Path "$GIT_DIR/MERGE_HEAD")) {
    Write-Host "Erreur : Aucun merge en cours. Lance ce script pendant un conflit Git."
    exit 1
}

# Fichiers .unity et .prefab en conflit (chemins relatifs a la racine Git)
$UNITY_FILES = (git diff --name-only --diff-filter=U) | Where-Object { $_ -match '\.(unity|prefab)$' }

if (-not $UNITY_FILES) {
    Write-Host "Erreur : Aucun fichier .unity ou .prefab en conflit trouve."
    exit 1
}

Write-Host "Fichiers en conflit :"
$UNITY_FILES | ForEach-Object { Write-Host "   $_" }

$versionLine = Get-Content "ProjectSettings/ProjectVersion.txt" | Where-Object { $_ -match "m_EditorVersion:" }
$UNITY_VERSION = ($versionLine -replace ".*m_EditorVersion:\s*", "").Trim()
$UNITY_MERGE = "C:\Program Files\Unity\Hub\Editor\$UNITY_VERSION\Editor\Data\Tools\UnityYAMLMerge.exe"

if (-not (Test-Path $UNITY_MERGE)) {
    Write-Host "Erreur : UnityYAMLMerge introuvable : $UNITY_MERGE"
    Write-Host "Verifie que Unity $UNITY_VERSION est bien installe via Unity Hub."
    exit 1
}

$MINE   = (git rev-parse HEAD).Trim()
$THEIRS = (Get-Content "$GIT_DIR/MERGE_HEAD").Trim()
$BASE   = (git merge-base HEAD MERGE_HEAD).Trim()

$TMP = "$env:TEMP\unity-merge"
New-Item -ItemType Directory -Force -Path $TMP | Out-Null

$SUCCESS = 0
$FAIL = 0

foreach ($FILE in $UNITY_FILES) {
    $FILE = $FILE.Trim() -replace "\\", "/"
    Write-Host ""
    Write-Host "Resolution : $FILE"

    [System.IO.File]::WriteAllLines("$TMP\base.unity",   (git show "${BASE}:${FILE}"),   [System.Text.UTF8Encoding]::new($false))
    [System.IO.File]::WriteAllLines("$TMP\mine.unity",   (git show "${MINE}:${FILE}"),   [System.Text.UTF8Encoding]::new($false))
    [System.IO.File]::WriteAllLines("$TMP\theirs.unity", (git show "${THEIRS}:${FILE}"), [System.Text.UTF8Encoding]::new($false))

    & $UNITY_MERGE merge -p "$TMP\base.unity" "$TMP\mine.unity" "$TMP\theirs.unity" "$TMP\merged.unity"

    $CONFLICTS = (Select-String -Pattern "<<<<<<" -Path "$TMP\merged.unity" -ErrorAction SilentlyContinue).Count

    if ($CONFLICTS -gt 0) {
        Write-Host "ATTENTION : Il reste $CONFLICTS conflit(s) non resolus dans $FILE"
        $FAIL++
    } else {
        $WIN_FILE = "$GIT_ROOT\$($FILE -replace '/', '\')"
        Copy-Item "$TMP\merged.unity" $WIN_FILE -Force
        git -C $GIT_ROOT add $FILE
        Write-Host "OK : $FILE resolu."
        $SUCCESS++
    }
}

Write-Host ""
if ($FAIL -gt 0) {
    Write-Host "ATTENTION : $SUCCESS fichier(s) resolu(s), $FAIL fichier(s) en echec."
    exit 1
} else {
    Write-Host "OK : Tous les conflits resolus ($SUCCESS fichier(s)). Tu peux finaliser le merge dans GitHub Desktop."
}
