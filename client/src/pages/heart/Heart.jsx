import './Heart.scss'

const Heart = () => {
  return (
    <div className='prediction'>

       <h1>Heart Disease Prediction</h1>
    <h5>Please enter the patient details</h5>
      <div className='container'>
        <form>
          <fieldset>
            <div className="Form-group">
              <label htmlFor="age">Age in Years</label>
              <input type="number" name="age" placeholder="eg. 34" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="trestbps">Trest Bps</label>
              <input type="number" name="trestbps" placeholder="trestbps" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="chol">Cholesterol</label>
              <input type="number" name="chol" placeholder="chol" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="thalach">Thalach</label>
              <input type="number" name="thalach" placeholder="thalach" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="oldpeak">Old Peak</label>
              <input type="number" name="oldpeak" placeholder="oldpeak" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="sex_0">Sex_0</label>
              <input type="number" name="sex_0" placeholder="sex_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="sex_1">Sex_1</label>
              <input type="number" name="sex_1" placeholder="sex_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CP_0">CP_0</label>
              <input type="number" name="CP_0" placeholder="CP_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CP_1">CP_1</label>
              <input type="number" name="CP_1" placeholder="CP_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CP_2">CP_2</label>
              <input type="number" name="CP_2" placeholder="CP_2" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CP_3">CP_3</label>
              <input type="number" name="CP_3" placeholder="CP_3" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="fbs_0">FBS_0</label>
              <input type="number" name="FBS_0" placeholder="FBS_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="restecg_0">RESTECG_0</label>
              <input type="number" name="restecg_0" placeholder="restecg_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="restecg_1">RESTECG_1</label>
              <input type="number" name="restecg_1" placeholder="restecg_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="restecg_2">RESTECG_2</label>
              <input type="number" name="restecg_2" placeholder="restecg_2" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="exang_0">EXANG_0</label>
              <input type="number" name="EXANG_0" placeholder="EXANG_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="exang_1">EXANG_1</label>
              <input type="number" name="EXANG_1" placeholder="EXANG_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="slope_0">SLOPE_0</label>
              <input type="number" name="SLOPE_0" placeholder="SLOPE_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="slope_1">SLOPE_1</label>
              <input type="number" name="SLOPE_1" placeholder="SLOPE_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="slope_2">SLOPE_2</label>
              <input type="number" name="SLOPE_2" placeholder="SLOPE_2" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CA_0">CA_0</label>
              <input type="number" name="CA_0" placeholder="CA_0" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CA_1">CA_1</label>
              <input type="number" name="CA_1" placeholder="CA_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="CA_2">CA_2</label>
              <input type="number" name="CA_2" placeholder="CA_2" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="THAL_1">THAL_1</label>
              <input type="number" name="THAL_1" placeholder="THAL_1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="THAL_2">THAL_2</label>
              <input type="number" name="THAL_2" placeholder="THAL_2" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="THAL_3">THAL_3</label>
              <input type="number" name="THAL_3" placeholder="THAL_3" required="required" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-primary btn-lg">Predict</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Heart