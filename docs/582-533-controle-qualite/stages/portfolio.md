# Portfolio


<h2>Contenu de votre portfolio</h2>
Les éléments suivants doivent être présents dans votre portfolio :
<li>Identification (Nom et coordonnées - Minimum un courriel)</li>
<li>Objectif de carrière (Dans quel domaine souhaitez-vous travailler?)</li>
<li>Description de vos compétences (Une liste des logiciels ou tâches que vous savez utiliser/faire)</li>
<li>Minimum de 4 projets avec pour chaque projet :<ul><li>Une courte description qui explique ce qu’est le projet</li><li>Des photos, extraits sonores ou vidéo du projet</li><li>Votre rôle</li><li>Les logiciels ou techniques utilisées.</li><li>Pour un des projets, mettre des photos du processus de création (Captures d’écran, photo du montage ou tournage, …)</li></ul></li>



<h2>Création du portfolio</h2>
<p>Nous allons créer les portfolios dans GitHub pages. Création du portfolio et Modification du thème sont les sections à suivre si vous voulez créer votre portfolio de zéro. Sinon suivez la section Partir d'un thème.</p>

<h2>Création du portfolio</h2>
<p>Pour commencer, vous devrez créer un repository et le configurer.</p>
!!! warning "Attention"

    Il est important de cocher Créer un fichier README.md lors de la création de votre repo.</p>
    
<p>Suivez les étapes 1 à 8 de la procédure suivante pour créer votre repo:</p>
<a href="https://docs.github.com/fr/pages/quickstart">Procédure</a>

<h2>Modification du thème</h2>
<p>Pour pouvoir modifier le thème de votre site, vous devrez créer un fichier se nommant _config.yml </p>
<p>Dans le fichier, inscrivez les trois lignes suivantes:</p>
``` markdown
theme: jekyll-theme-minimal
title: Portfolio de Lora
description: Voici mon portfolio!
```

<p>Vous comprendrez ici que vous pouvez modifier la ligne Title pour changer le titre de votre site et description sa description.</p>
<p>Pour ce qui est du thème, Github offre quelques thèmes par défaut. Je vous suggère fortement de choisir un de ces thèmes:</p>
<a href="https://pages.github.com/themes/">Liste des thèmes</a>
<p>Une fois votre thème choisi, inscrivez son nom dans la ligne theme de votre fichier _config.yml</p>

    

<h2>Partir d'un thème</h2>
<p>Si vous n'aimez pas les thèmes par défaut de Github, il est possible d'utiliser d'autres thèmes Jekyll. Vous trouverez sur le site suivant plusieurs modèles existants:</p>
<a href="https://jekyllrb.com/resources/">Visitez les pages sous le titre Themes</a>
<p>Une fois que vous avez trouvé un thème intéressant, suivez les étapes suivantes:</p>

* [ ] Ouvrez le thème sélectionné dans Github
* [ ] Assurez-vous d'être connecté à votre compte
* [ ] Appuyez sur le bouton Fork en haut à droite du projet contenant le thème voulu
* [ ] Nommez votre projet username.github.io. Remplacez username par votre nom d’utilisateur GitHub. Par exemple, si votre nom d’utilisateur est octocat, le nom du dépôt doit être octocat.github.io
* [ ] Créez le projet
* [ ] Une fois le projet créé, personnalisez les différentes pages en modifiant les pages existantes


 <h2>Aide pour le markdown</h2>
 <a href="https://www.markdownguide.org/cheat-sheet/">Cheatsheet Markdown</a>
    
<h2>Insérer une vidéo Youtube</h2>
<p>Insérer une vidéo de vos projets est possible. Pour cela, deux options s'offrent à vous.</p>
<p>Pour la première option, vous allez intégrer votre vidéo directement dans votre page Github. Pour ce faire, allez sur la page Youtube de la vidéo à partager. Cliquez ensuite sur le bouton Partager. Choisissez Intégrer dans les options, puis cliquez sur copier. Collez ensuite le texte dans votre README.md.</p>
<p>La seconde méthode vous permettra de rediriger les gens vers Youtube lorsqu'ils cliqueront sur l'image de votre vidéo.</p>
``` markdown
[![NOM DE VOTRE IMAGE](https://img.youtube.com/vi/ID DE VOTRE VIDEO/0.jpg)](https://www.youtube.com/watch?v=ID DE VOTRE VIDEO)
```

<p>Pour cette méthode, vous devrez écrire les lignes ci-haut et changer NOM DE VOTRE IMAGE par le nom souhaité. Puis ID DE VOTRE VIDEO par l'identification que vous pouvez trouver sur Youtube.</p>


<h2>Exemples de portfolios</h2>
[💼 Portfolio de Antoine Haddad](https://yourantidote.github.io/Antoine-Portfolio){ .md-button }   <br>      
[💼 Portfolio de Jasmine Lapierre](https://jasmine-lapierre.github.io/portfolio_gameweb){ .md-button }   <br>      
[💼 Portfolio de Camélie Laprise](https://m-lie.github.io/portfolio){ .md-button }   <br>     
[💼 Portfolio de Félix Testa Radovanovic](https://im-boyo.github.io/testa_radovanovic_felix_portfolio){ .md-button }   <br>      
[💼 Portfolio de Nicolas St-Martin](https://vanounais.github.io/){ .md-button }   <br>     






