# GitHub Education, Copilot, VS Code

## 🚀 GitHub Education

### 1️⃣ Si ce n'est pas encore fait, créer un compte GitHub

1. Aller sur 👉 https://github.com
2. Cliquer sur **Sign Up**
3. Créer votre compte
4. Vérifier votre courriel ✅

---

### 2️⃣ Rejoindre GitHub Education

!!! info ":material-cellphone-check: Preuve d'inscription"
    Faire d'abord une impression-écran de votre carte étudiante numérique disponible sur l'application mobile du collège Montmorency et la transférer sur votre ordinateur pour l'utiliser comme preuve d'inscription.

1. Aller sur 👉 https://education.github.com
2. Cliquer sur **Join GitHub Education**
3. Choisir **Student**
4. Remplir le formulaire
5. Téléverser une preuve d'inscription 📷
6. Soumettre la demande

⏳ Attendre l'approbation de GitHub.

!!! tip ":material-timetable: Délai"
    L'approbation peut prendre quelques heures à quelques jours. Vérifier votre courriel pour la confirmation de l'approbation.

---

### 3️⃣ Vérifier l'approbation

1. Aller sur 👉 https://github.com/settings/education/benefits
2. Vérifier que le statut est :
✅ **Verified Student**

!!! warning "Votre courriel scolaire doit être l'adresse primaire"
    Dans **Settings → Emails**, assurez-vous que le courriel scolaire vérifié est bien votre adresse **primaire** sur GitHub. C'est la cause la plus fréquente d'un bénéfice qui reste bloqué même après une vérification réussie.

---

## 🤖 Activer GitHub Copilot (plan Student)

!!! info "Ça s'appelle maintenant « Copilot Student », pas « Copilot Pro »"
    Depuis mars 2026, GitHub a séparé le bénéfice étudiant du plan Pro. Vous obtenez maintenant un plan distinct, **GitHub Copilot Student**, gratuit avec votre statut vérifié. C'est normal si vous voyez ce nom plutôt que « Pro » : ça reste le même niveau d'accès pour ce cours (complétions, chat).

⚠️ Faire cette étape seulement après l'approbation GitHub Education (étape 3 ci-dessus).

1. Retourner sur 👉 https://github.com/settings/education/benefits
2. Repérer **GitHub Copilot** dans la liste de vos bénéfices actifs
3. Cliquer sur le bouton d'activation associé, directement **depuis cette page**
4. Accepter les options proposées
5. Cliquer sur **Save and Complete**

✅ GitHub Copilot Student est maintenant activé.

!!! danger "Ne pas passer par Copilot settings → Upgrade plan"
    Ce chemin-là (photo de profil → **Copilot settings** → **Upgrade plan**) mène maintenant au vrai **Copilot Pro payant** (environ 10 $/mois), pas au bénéfice étudiant gratuit. L'activation gratuite se fait uniquement depuis la page des bénéfices Education à l'étape 1 ci-dessus.

### Si l'activation ne débloque pas

GitHub a mis en pause puis rouvert graduellement les nouvelles inscriptions à Copilot en 2026, donc un délai après la vérification est normal.

1. Vérifier que le courriel primaire est bien le courriel scolaire (voir plus haut)
2. Attendre jusqu'à une semaine après la vérification
3. Si toujours bloqué après une semaine : [contacter le support GitHub Education](https://support.github.com) pour une synchronisation manuelle du compte

---

## 🔌 Installer GitHub Copilot

1. Ouvrir Visual Studio Code
2. Ouvrir **Extensions** (`Ctrl + Shift + X`)
3. Rechercher :

    ```text
    GitHub Copilot
    ```

4. Cliquer sur **Install**

Vérifier que les extensions suivantes sont installées :

- [ ] GitHub Copilot
- [ ] GitHub Copilot Chat

---

## 🔑 Se connecter à GitHub dans Visual Studio Code

1. Cliquer sur l'icône **Compte** 👤
2. Choisir **Sign in with GitHub**
3. Autoriser l'accès dans le navigateur
4. Revenir dans Visual Studio Code

✅ Visual Studio Code est maintenant connecté à GitHub.

## ⭐ Vérifier que Copilot Student est actif dans Visual Studio Code

1. Repérer l'icône **GitHub Copilot** 🤖 (coin inférieur droit)
2. Cliquer sur l'icône
3. Vérifier que le compte GitHub affiché est le bon
4. Vérifier que Copilot est activé

✅ Copilot Student devrait être disponible automatiquement.

---

## ✅ Test rapide

Créer un fichier :

```js
script.js
```

Écrire :

```js
function addition(a, b) {
```

Si du code apparaît en gris 👻 :

✅ GitHub Copilot fonctionne !

Tu peux appuyer sur la touche `Tab ⭾` pour accepter la suggestion ou la touche `Esc` (`Échap`) pour la refuser.

---

## 💬 Test du Chat IA

1. Ouvrir **GitHub Copilot Chat** 🤖
2. Essayer les prompts suivants :

```text
Explique-moi cette fonction JavaScript.
```

✅ Vous êtes prêt à développer avec l'IA ! 🚀
