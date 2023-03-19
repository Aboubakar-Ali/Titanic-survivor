from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib  

app = Flask(__name__)
CORS(app)

# Charger le modèle entraîné
model = joblib.load('logistic_regression_model.pkl')

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

if __name__ == '__main__':
    app.run(debug=True)
