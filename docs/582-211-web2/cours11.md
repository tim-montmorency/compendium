# Cours 11

## Accessibilité & robustesse d’interface 

- Contraste et lisibilité (WCAG) 
- Focus visible et navigation clavier 
- Tailles de clic/touch adaptées 
- États interactifs accessibles (hover, focus, active) 
- Textes alternatifs et structure sémantique 
- Tests d'accessibilité (outils : Lighthouse, axe DevTools)

<!--
Leur montrer Figma Make. Et voici pourquoi ça ne devrait pas les décourager si tu le présentes bien — mais d'abord, ses failles honnêtes.

Ce que Figma Make (Claude 3.7 en arrière) génère mal en CSS/intégration web :

Son take:
"- La structure sémantique HTML : je produis souvent des div là où un nav, main, article ou figure aurait été plus approprié. Je fais semblant de comprendre la sémantique, mais je la sacrifie souvent pour faire quelque chose qui "marche".

- L'accessibilité : c'est peut-être ma plus grande lacune. Focus visible, ordre de navigation clavier, attributs ARIA... je les oublie ou je les applique de façon superficielle. Un audit Lighthouse va souvent me démolir.

- La maintenabilité du CSS : je génère du CSS qui fonctionne, mais qui est souvent redondant, peu cohérent dans la nomenclature, sans système de design tokens réfléchi. C'est du code jetable, pas du code professionnel.

- Les décisions contextuelles : je ne sais pas si ce composant va vivre dans une sidebar étroite ou un layout pleine page. Je devine, et je me trompe souvent. C'est précisément là où les container queries changent tout — et je les utilise rarement spontanément.

-Le CSS fluide : je tombe par défaut dans des media queries brutes. Le clamp(), les unités fluides, les systèmes cohérents de typographie fluide, c'est rare que je les applique correctement sans qu'on me le demande explicitement.


Comment le montrer sans décourager :

L'erreur serait de montrer Figma Make en disant "regardez ce que ça produit" et de passer à autre chose. L'approche pédagogique forte, c'est de montrer Make et d'auditer ensemble le résultat en direct. Laisser les étudiants trouver les problèmes eux-mêmes. Ça devient une démonstration que leur regard critique vaut plus que ma vitesse de génération.
Ton plan de cours fait d'ailleurs exactement ça au cours 11 : auditer du code généré par IA pour l'accessibilité. C'est le bon moment pour introduire Make, pas au début.

Le vrai message à leur faire passer :

Figma Make peut produire un prototype en 30 secondes. Mais le mettre en production de façon accessible, maintenable et cohérente ? Ça, c'est encore un travail humain. Et le marché le sait.
-->