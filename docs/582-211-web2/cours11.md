# Cours 11

Lundi 20 avril / mercredi 22 avril

<!--
Annonce de la Phase 3 de la politique IA : L'IA est maintenant encouragée
Workflow professionnel avec IA : générer → analyser → critiquer → améliorer

Composants adaptatifs intelligents (suite) 
Pratique et exercices 

Refactorisation, qualité CSS et collaboration avec l'IA 
· Refactorisation : lisibilité, cohérence, simplification 
· Code smell en CSS (redondance, spécificité excessive, etc.) 
· Techniques de prompting pour du CSS maintenable 
· Workflow : IA → audit → amélioration 
· Comparer plusieurs solutions générées par IA 
· Identifier les hallucinations et erreurs courantes de l'IA
-->

## Annonce

### Présentations finales du projet de synthèse

Les présentations seront individuelles entre l'étudiant et l'enseignante. Elles se déroulent lors du cours 14 (11 ou 14 mai) et dureront environ 10 minutes par étudiant. Vous aurez un créneau horaire précis qui vous sera communiqué à l'avance.

[Présentation orales](./exercices/projet-final/index.html#presentation-orale-cours-15){ .md-button }

### Sondage pour la remise

Sondage sur votre horaire du 15 mai (enseigné comme un mercredi).

Je considère le 15 mai comme une journée de rencontres pour vos présentations finales du projet de sythèse. C'est enseigné comme un mercredi (journée de rattrapage du verglas). Donc tout dépend de votre horaire ce jour là et si vos profs prévoient reprendre un cours ce jour-là ou pas. 

*L'idée c'est de vous accorder un cours complet supplémentaires pour avancer sur votre projet de synthèse.* Il était prévu que vous remettiez et présentiez votre projet de synthèse au dernier cours de la session le 11 mai (groupes du lundi) ou le 14 mai (groupe du mercredi). Si on considère le 15 mai comme une journée de rencontre pour les présentations individuelles, ça vous laisse un cours de plus pour avancer sur votre projet de synthèse.


## Objectif du cours d'aujourd'hui

À la fin du cours d'aujourd'hui, vous serez en mesure d'intégrer l'IA dans votre "workflow" de façon professionnelle et critique:

- générer du code avec un prompt structuré, 
- lire ce que l'IA vous propose avec un œil averti, 
- identifier ses faiblesses, 
- le refactoriser pour en améliorer la qualité, 
- et justifier vos décisions techniques dans vos propres mots. 

En d'autres termes, vous ne serez plus seulement capables de faire du CSS: vous serez capables de juger du CSS, peu importe qui l'a écrit.


## Intro

> « Selon toi, qu'est-ce qui différencie un intégrateur junior qui utilise l'IA d'un intégrateur senior qui l'utilise ? »

## Démonstration de code généré et analyse

- Démonstration
- Discussion

## Atelier: Le protocole IA

## Refactorisation CSS

- Lisibilité
- Cohérence
- Simplification

[📚 IA: Refactorisation CSS](./ia/04_refactorisation.md){ .md-button .md-button--primary }


## Code Smells 🫢🤢

> Un "code smell" n'est pas une erreur. C'est un signe que quelque chose pourrait poser problème plus tard.

[📚 IA: Code Smells - CSS](./ia/05_code-smells.md){ .md-button .md-button--primary }

## Techniques de prompting pour du CSS maintenable

> Un bon prompt ne vient pas d'une connaissance de l'IA. Il vient d'une bonne compréhension du CSS.

[📚 IA: Prompting pour du CSS maintenable](./ia/06_prompting.md){ .md-button .md-button--primary }

## Workflow professionnel

> Workflow professionnel: IA → Audit → Amélioration

[📚 IA: Workflow professionnel](./ia/07_workflow-complet.md){ .md-button .md-button--primary }


## Travail sur le projet intégrateur: Solarix

Reste du cours: 

- Avancer le projet intégrateur: Solarix
- Réponse aux questions du *journal de bord - Semaine 2* d'ici la semaine prochaine.

[CONSIGNES Projet intégrateur: Solarix](./exercices/projet-final/){ .md-button }

## Devoir

- Avancer le projet intégrateur: Solarix
- Réponse aux questions du *journal de bord - Semaine 2* d'ici la semaine prochaine.

[CONSIGNES Projet intégrateur: Solarix](./exercices/projet-final/){ .md-button }

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
