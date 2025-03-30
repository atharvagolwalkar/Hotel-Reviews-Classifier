from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Import CORS
import pickle
import joblib
import re
from scipy.sparse import hstack  # For combining BoW and n-gram

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the voting classifier and vectorizers
with open('voting_classifier.pkl', 'rb') as model_file:
    voting_classifier = pickle.load(model_file)

with open('Bernoulli_Naive_Bayes.pkl', 'rb') as bernoulli_file:
    bernoulli_classifier = joblib.load(bernoulli_file)
with open('Complement_Naive_Bayes.pkl', 'rb') as complement_file:
    complement_classifier = joblib.load(complement_file)
with open('Gaussian_Naive_Bayes.pkl', 'rb') as gaussian_file:
    gaussian_classifier = joblib.load(gaussian_file)
with open('Multinomial_Naive_Bayes.pkl', 'rb') as multinomial_file:
    multinomial_classifier = joblib.load(multinomial_file)

with open('vectorizer.pkl', 'rb') as vectorizer_file:
    vectorizer = joblib.load(vectorizer_file)

with open('bow_transformer.pkl', 'rb') as bow_file:
    bow_transformer = pickle.load(bow_file)

with open('ngram_vectorizer.pkl', 'rb') as ngram_file:
    ngram_vectorizer = pickle.load(ngram_file)

# @app.route('/predict', methods=['POST'])
# def predict():
#     text = request.json['text']  # Receive JSON data

#     # Preprocess the text
#     cleaned_text = preprocess_new_text(text)

#     # Vectorize the input text using BoW and n-gram
#     X_new_bow = bow_transformer.transform([cleaned_text])  # BoW features
#     X_new_ngram = ngram_vectorizer.transform([cleaned_text])  # n-gram features
    
#     # Combine BoW and n-gram features
#     X_new_combined = hstack([X_new_bow, X_new_ngram])

#     # Predict sentiment using the voting classifier
#     prediction = voting_classifier.predict(X_new_combined)
#     X_vectorized = vectorizer.transform([text])
#     bernoulli_prediction = bernoulli_classifier.predict(X_vectorized.toarray().reshape(1, -1))
#     complement_prediction = complement_classifier.predict(X_vectorized.toarray().reshape(1, -1))
#     gaussian_prediction = gaussian_classifier.predict(X_vectorized.toarray().reshape(1, -1))
#     multinomial_prediction = multinomial_classifier.predict(X_vectorized.toarray().reshape(1, -1))
#     return jsonify({'prediction': prediction[0],
#                     'bernoulli': bernoulli_prediction[0],
#                     'complement': complement_prediction[0],
#                     'gaussian': gaussian_prediction[0],
#                     'multinomial': multinomial_prediction[0],

#                     })  # Return JSON response

@app.route('/predict', methods=['POST'])
def predict():
    text = request.json['text']  # Receive JSON data

    # Preprocess the text
    cleaned_text = preprocess_new_text(text)

    # Vectorize the input text using BoW and n-gram
    X_new_bow = bow_transformer.transform([cleaned_text])  # BoW features
    X_new_ngram = ngram_vectorizer.transform([cleaned_text])  # n-gram features
    
    # Combine BoW and n-gram features
    X_new_combined = hstack([X_new_bow, X_new_ngram])

    # Predict sentiment using the voting classifier
    prediction = voting_classifier.predict(X_new_combined)
    prediction_proba = voting_classifier.predict_proba(X_new_combined)

    # Get probabilities for each Naive Bayes model
    X_vectorized = vectorizer.transform([text])
    bernoulli_prediction = bernoulli_classifier.predict(X_vectorized.toarray().reshape(1, -1))
    bernoulli_proba = bernoulli_classifier.predict_proba(X_vectorized.toarray().reshape(1, -1))

    complement_prediction = complement_classifier.predict(X_vectorized.toarray().reshape(1, -1))
    complement_proba = complement_classifier.predict_proba(X_vectorized.toarray().reshape(1, -1))

    gaussian_prediction = gaussian_classifier.predict(X_vectorized.toarray().reshape(1, -1))
    gaussian_proba = gaussian_classifier.predict_proba(X_vectorized.toarray().reshape(1, -1))

    multinomial_prediction = multinomial_classifier.predict(X_vectorized.toarray().reshape(1, -1))
    multinomial_proba = multinomial_classifier.predict_proba(X_vectorized.toarray().reshape(1, -1))

    print("Voting Classifier Proba:", prediction_proba)
    print("Bernoulli Proba:", bernoulli_proba)
    print("Complement Proba:", complement_proba)
    print("Gaussian Proba:", gaussian_proba)
    print("Multinomial Proba:", multinomial_proba)


    return jsonify({
        'prediction': prediction[0],
        'confidence': prediction_proba.tolist(),  # Confidence of the voting classifier
        'bernoulli': bernoulli_prediction[0],
        'bernoulli_confidence': bernoulli_proba.tolist(),
        'complement': complement_prediction[0],
        'complement_confidence': complement_proba.tolist(),
        'gaussian': gaussian_prediction[0],
        'gaussian_confidence': gaussian_proba.tolist(),
        'multinomial': multinomial_prediction[0],
        'multinomial_confidence': multinomial_proba.tolist(),
    })

def preprocess_new_text(text):
    text = text.lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text)  # Remove URLs
    text = re.sub(r'\S+@\S+', '', text)  # Remove emails
    text = re.sub(r'[^a-zA-Z\s]', '', text)  # Remove non-alphabetic characters
    return text

if __name__ == '__main__':
    app.run(debug=True)