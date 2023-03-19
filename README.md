# Titanic survivor-Prédiction de survie des passagers

Ce projet vise à analyser les données du naufrage du Titanic et à construire un modèle de prédiction pour estimer les chances de survie des passagers. En utilisant les données historiques, nous avons développé des visualisations interactives et des modèles d'apprentissage automatique pour mieux comprendre les facteurs qui ont influencé la survie des passagers.

# Fonctionnalités

* Analyse exploratoire des données (EDA) et visualisations interactives.
* Modèle de prédiction de survie basé sur des algorithmes d'apprentissage automatique.
* Interface utilisateur simple pour tester les prédictions de survie.

# Installation

1. Clonez ce dépôt GitHub sur votre machine locale.
2. Installez les dépendances nécessaires en exécutant pip install -r requirements.txt dans le répertoire du projet.
3. Exécutez le fichier app.py avec la commande python app.py pour démarrer le serveur Flask.
4. Ouvrez un navigateur et accédez à http://localhost:5000 pour voir l'application en action ou bien utilisez Postman.

# Données

Les données utilisées pour ce projet proviennent du site web [Kaggle] et sont basées sur les informations recueillies sur les passagers du Titanic. Ces données comprennent des informations telles que l'âge, le sexe, la classe de billet, le tarif, le port d'embarquement et d'autres détails sur les passagers.

# Technologies utilisées

* Python
* Flask
* HTML, CSS, JavaScript
* Scikit-learn
* Pandas
* Plotly

# Structure du projet

├── Data
│   ├── analyse.ipynb #données servant pour la visualisation
│   ├── train.csv  #csv de base
│   └── view.ipynb #lecture du fichier "train.csv"
├── Files
│   ├── app.py                                       #API is en place
│   ├── entrainement.ipynb                           #entrainement du mode
│   ├── evoptimode.ipynb                             #evaluation du mode
│   ├── logistic_regression_model.pkl                #Modèle pré-entraîné
│   ├── pretraitement.ipynb                          #prétraitement de données
│   └── preprocessed.csv                             #sauvegarde des données prétraitées
├── Logo
│   └── logo.png                                     #logo
├── Static
│   ├── css
│   │   ├── about.css
│   │   ├── index.css                               
│   │   ├── prediction.css
│   │   └── visualisation.css
│   └── js
│       ├── about.js
│       ├── index.js
│       ├── predict.js
│       └── visualisation.js
├── Templates
│   ├── about.html
│   ├── index.html                                  #Page principale                    
│   ├── predict.html
│   └── visualisation.html
├── README.md                                       # Fichier README
└── requirements.txt                                # Fichier des dépendances Python


## Comment contribuer

Toutes les contributions sont les bienvenues ! Voici comment vous pouvez participer au développement du projet :

1. Faites un fork du dépôt sur GitHub.
2. Clonez votre fork sur votre machine locale.
3. Créez une nouvelle branche pour votre fonctionnalité ou correction.
4. Faites des commits de vos modifications dans cette branche.
5. Poussez les modifications sur GitHub.
6. Créez une pull request pour fusionner votre branche dans la branche principale du dépôt d'origine.

Avant de soumettre une pull request, assurez-vous que votre code est propre, documenté et testé si nécessaire. Veuillez également lire et respecter le code de conduite du projet.


# Auteurs

* ABOUBAKAR ALI Abdoulaziz-Djankado