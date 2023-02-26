# from flask import Flask, request, render_template
# # import joblib
# import pickle
# import pandas as pd
# import numpy as np
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import train_test_split

# app = Flask(__name__)

# model1 = pickle.load(open('heart.pickle', 'rb'))


# @app.route("/diabetes-prediction")
# # @login_required
# def diabetes():
#     return render_template("diabetes.html")


# @app.route("/heart")
# # @login_required
# def heart():
#     return render_template("heart.html")


# df1 = pd.read_csv('diabetes.csv')

# # Renaming DiabetesPedigreeFunction as DPF
# df1 = df1.rename(columns={'DiabetesPedigreeFunction': 'DPF'})

# # Replacing the 0 values from ['Glucose','BloodPressure','SkinThickness','Insulin','BMI'] by NaN
# df_copy = df1.copy(deep=True)
# df_copy[['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']] = df_copy[['Glucose', 'BloodPressure',
#                                                                                     'SkinThickness', 'Insulin',
#                                                                                     'BMI']].replace(0, np.NaN)

# # Replacing NaN value by mean, median depending upon distribution
# df_copy['Glucose'].fillna(df_copy['Glucose'].mean(), inplace=True)
# df_copy['BloodPressure'].fillna(df_copy['BloodPressure'].mean(), inplace=True)
# df_copy['SkinThickness'].fillna(
#     df_copy['SkinThickness'].median(), inplace=True)
# df_copy['Insulin'].fillna(df_copy['Insulin'].median(), inplace=True)
# df_copy['BMI'].fillna(df_copy['BMI'].median(), inplace=True)

# # Model Building

# X = df1.drop(columns='Outcome')
# y = df1['Outcome']
# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.20, random_state=0)

# # Creating Random Forest Model

# classifier = RandomForestClassifier(n_estimators=20)
# classifier.fit(X_train, y_train)

# # Creating a pickle file for the classifier
# filename = 'diabetes-prediction-rfc-model.pkl'
# pickle.dump(classifier, open(filename, 'wb'))

# #####################################################################


# @app.route('/diabetes-prediction', methods=['POST'])
# def predictt():
#     if request.method == 'POST':
#         preg = request.form['pregnancies']
#         glucose = request.form['glucose']
#         bp = request.form['bloodpressure']
#         st = request.form['skinthickness']
#         insulin = request.form['insulin']
#         bmi = request.form['bmi']
#         dpf = request.form['dpf']
#         age = request.form['age']

#         data = np.array([[preg, glucose, bp, st, insulin, bmi, dpf, age]])
#         my_prediction = classifier.predict(data)

#         return (my_prediction)
#         # return render_template('diab_result.html', prediction=my_prediction)


# ############################################################################################################

# @app.route('/predictheart', methods=['POST'])
# def predictheart():
#     input_features = [float(x) for x in request.form.values()]
#     features_value = [np.array(input_features)]

#     features_name = ["age", "trestbps", "chol", "thalach", "oldpeak", "sex_0",
#                      "  sex_1", "cp_0", "cp_1", "cp_2", "cp_3", "  fbs_0",
#                      "restecg_0", "restecg_1", "restecg_2", "exang_0", "exang_1",
#                      "slope_0", "slope_1", "slope_2", "ca_0", "ca_1", "ca_2", "thal_1",
#                      "thal_2", "thal_3"]

#     df = pd.DataFrame(features_value, columns=features_name)
#     output = model1.predict(df)

#     if output == 1:
#         res_val = "a high risk of Heart Disease"
#     else:
#         res_val = "a low risk of Heart Disease"

#     return render_template('heart_result.html', prediction_text='Patient has {}'.format(res_val))


# ############################################################################################################

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)
cors = CORS(app, recources={r'/diabetes-prediction/*':{'origins':'http://localhost:5173'}})


df = pd.read_csv('diabetes.csv')
X = df.drop('Outcome', axis=1)
y = df['Outcome']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=0)

# Creating a random forest model
model = RandomForestClassifier(n_estimators=20)
model.fit(X_train, y_train)
# Creating a pickle file for the classifier
joblib.dump(model, 'diabetes_pred.joblib')

############################################################################################


@app.route('/diabetes-prediction', methods=['POST'])
def diabetes():
    features_values = request.json.values()
    features = np.array([[list(features_values)]])
    #make prediction
    prediction = model.predict(features[0])
    return jsonify({'result': int(prediction)})
    # get the input values from the request data
    # pregnancies = float(data['pregnancies'])
    # glucose = float(data['glucose'])
    # blood_pressure = float(data['blood_pressure'])
    # skin_thickness = float(data['skin_thickness'])
    # insulin = float(data['insulin'])
    # bmi = float(data['bmi'])
    # diabetes_pedigree_function = float(data['diabetes_pedigree_function'])
    # age = float(data['age'])

    # make prediction using pre trained model

    # prediction = model.predict([[pregnancies, glucose, blood_pressure,
    #                            skin_thickness, insulin, bmi, diabetes_pedigree_function, age]])

    # return prediction as a dictionary
    # return jsonify({'prediction': int(prediction[0])})


if __name__ == '__main__':
    app.run(debug=True)
