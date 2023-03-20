from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import joblib
import os

app = Flask(__name__, static_folder='../static', template_folder='../templetes')
CORS(app)

# Charger le modèle entraîné
model = joblib.load('logistic_regression_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Récupérer les valeurs des caractéristiques à partir de la requête POST
    data = request.get_json(force=True)
    age = data['age']
    sex = data['sex']
    pclass = data['pclass']
    embarked = data['embarked']

    # Préparer les données pour le modèle
    input_data = [[age, sex, pclass, embarked]]

    # Effectuer la prédiction avec le modèle
    prediction = model.predict(input_data)

    # Convertir la prédiction en une réponse JSON
    response = {'survived': int(prediction[0])}

    return jsonify(response)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict_page')
def predict_page():
    return render_template('predict.html')

@app.route('/visualisations')
def visualisations():
    return render_template('visualisation.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('../static', path)

if __name__ == '__main__':
    app.run(debug=True)
