import { useState } from 'react';
import axios from 'axios';
import './Diabetes.scss'

const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState("")
  const [glucose, setGlucose] = useState("")
  const [bloodPressure, setBloodPressure] = useState("")
  const [skinThickness, setSkinThickness] = useState("")
  const [insulin, setInsulin] = useState("")
  const [bmi, setBmi] = useState("")
  const [diabetesPedigreeFunction, setdiabetesPedigreeFunction] = useState("")
  const [age, setAge] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/diabetes-prediction', {
      pregnancies: pregnancies,
      glucose: glucose,
      bloodPressure: bloodPressure,
      skinThickness: skinThickness,
      insulin: insulin,
      bmi: bmi,
      diabetesPedigreeFunction: diabetesPedigreeFunction,
      age: age
    })
      .then((res) => {
        setResult(res.data.result === 1 
          ?
           <span className='s' style={{ color: "red" }}>Patient has a risk of Diabetes 😢</span> 
          :
           <span className='s' style={{ color: "greenyellow" }}>Patient has a low risk of Diabetes 😀</span>);
      })
      .catch((error) => {
        console.log(error)
      })

  }
  // const [showContent, setShowContent] = useState(false)
  // const prediction = 0;
  // const toggleContent = () => {

  //   setShowContent(!showContent)

  //   e.preventDefault()
  // }
  return (
    <div className='diabetes-prediction'>
      <h1>Diabetes Prediction</h1>
      <h5>Please enter the patient details</h5>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Form-group">
              <label htmlFor="pregnancies">Number of Pregnancies</label>
              <input type="number" value={pregnancies} onChange={(event) => setPregnancies(event.target.value)} name="pregnancies" placeholder="eg. 0 male" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="glucose">Glucose Level (mg/dL)</label>
              <input type="number" value={glucose} onChange={(event) => setGlucose(event.target.value)} name="glucose" placeholder="eg. 80" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="bloodpressure">Blood Pressure (mmHg)</label>
              <input type="number" value={bloodPressure} onChange={(event) => setBloodPressure(event.target.value)} name="bloodpressure" placeholder="eg. 80" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="skinthickness">Skin Thickness (mm)</label>
              <input type="number" value={skinThickness} onChange={(event) => setSkinThickness(event.target.value)} name="skinthickness" placeholder="eg. 20" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="insulin">Insulin Level (IU/mL) </label>
              <input type="number" value={insulin} onChange={(event) => setInsulin(event.target.value)} name="insulin" placeholder="eg. 80" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="bmi">Body Mass Index (kg/m²)</label>
              <input type="number" value={bmi} onChange={(event) => setBmi(event.target.value)} name="bmi" placeholder="eg. 23.1" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="dpf">Diabetes Pedigree Function</label>
              <input type="text" value={diabetesPedigreeFunction} onChange={(event) => setdiabetesPedigreeFunction(event.target.value)} name="dpf" placeholder="eg. 0.52" required="required" />
            </div>
            <div className="Form-group">
              <label htmlFor="age">Patient Age in Years</label>
              <input type="number" value={age} onChange={(event) => setAge(event.target.value)} name="age" placeholder="eg. 34" required="required" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Predict</button>
          </fieldset>
        </form>

        <div className="container themed-container">
          {result && (
            <div>
              <h2 className='predic'>Prediction Result</h2>
              <p>{result}</p>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Diabetes