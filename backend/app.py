from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("model.pkl")


@app.route("/")
def home():
    return "Backend Running Successfully!"


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    funding_amount = float(data["fundingAmount"])
    funding_rounds = float(data["fundingRounds"])

    funding_per_round = (
        funding_amount / funding_rounds
        if funding_rounds > 0
        else 0
    )

    input_data = pd.DataFrame([{
        "category_list": data["category"],
        "funding_total_usd": funding_amount,
        "country_code": data["country"],
        "state_code": data["stateCode"],
        "region": data["region"],
        "city": data["city"],
        "funding_rounds": funding_rounds,
        "company_age": float(data["companyAge"]),
        "funding_duration": float(data["fundingDuration"]),
        "funding_per_round": funding_per_round
    }])

    prediction = int(model.predict(input_data)[0])

    probability = model.predict_proba(input_data)[0]

    success_probability = round(float(probability[1]) * 100, 2)
    failure_probability = round(float(probability[0]) * 100, 2)

    result = "SUCCESS" if prediction == 1 else "FAILURE"

    confidence = (
        success_probability
        if prediction == 1
        else failure_probability
    )

    if success_probability >= 75:
        risk = "Low Risk"
    elif success_probability >= 50:
        risk = "Medium Risk"
    else:
        risk = "High Risk"

    return jsonify({
        "result": result,
        "confidence": float(confidence),
        "successProbability": float(success_probability),
        "failureProbability": float(failure_probability),
        "risk": risk
    })


if __name__ == "__main__":
    app.run(debug=True)