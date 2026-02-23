# Figma Dev Mode

## D’abord : c’est quoi vraiment Dev Mode ?

![](../assets/devmode1-UI3-guide-to-dev-mode.png)
![](../assets/devmode2-UI3-inspect-panel.png)
![](../assets/devmode3-ui3-dev-mode.png)
![](../assets/devmode4-mceclip2.png)

Dev Mode n’est *pas* un générateur de code.
C’est un *outil d’inspection d’intention de design*.

Ça montre :

- Les espacements réels
- Les valeurs typographiques exactes
- Les tokens utilisés
- Les contraintes (constraints)
- Les règles d'auto-layout
- La hiérarchie des composants

Donc :

Dev Mode = outil pour comprendre la logique du designer
Pas outil pour remplacer ton cerveau CSS

## Votre posture d'intégrateur face au Dev Mode

> “Je lis l’intention, puis je décide comment l’implémenter proprement.”

Ça s’aligne parfaitement avec notre règle d’or du cours :

> Vous êtes RESPONSABLE de tout code remis. Vous devez pouvoir l’expliquer et le défendre.

## Les 5 usages intelligents de Dev Mode

### 1️⃣ Lire le Layout (et le traduire en Flexbox)

Quand on clique sur un Frame avec *Auto Layout* :

*Dev Mode* montre :

- direction (vertical / horizontal)
- gap
- padding
- distribution
- alignement


Ça correspond DIRECTEMENT à :

```css
display: flex;
flex-direction:
gap:
padding:
justify-content: /* sur l'axe principal */
align-items: /* sur l'axe secondaire */
```



### 2️⃣ Vérifier les espacements réels (anti-approximation)

Sans Dev Mode :

> “Je pense que c’est 20px…”

Avec Dev Mode :

> C’est 24px, cohérent avec le système de multiple de 4px du design system.

Donc :

- Respect du design system
- Cohérence des espacements
- Refus du “pixel guessing”

### 3️⃣ Comprendre les tokens (design system)

Si le designer utilise :

- Color styles
- Text styles
- Variables

Le Dev Mode expose les noms.

Exemple :

```css 
color: var(--primary-500);
```

### 4️⃣ Identifier les mauvaises décisions du designer

Exemples fréquents de mauvaise décision de design :

- Espacements incohérents
- Pas d’auto layout
- Marges fixes partout
- Tailles fixes non fluides

### 5️⃣ Documenter les décisions techniques

Dev Mode aide à :

- Nommer correctement les classes
- Comprendre la hiérarchie
- Identifier les composants répétables
  Exemple :
  - Si 5 cartes sont identiques → classe `.card`
  - Pas `.card1`, `.card2`, `.card3`

## Ce qu’il ne faut PAS faire

### ❌ Mauvaises pratiques Dev Mode

- Copier le CSS généré tel quel
- Reproduire du `position: absolute` inutile
- Garder les tailles fixes
- Utiliser les valeurs `px` sans vraiment réfléchir
- Briser son système de tokens (si présent dans le Figma) en utilisant des couleurs ou des polices directes
- Ne pas adapter pour mobile