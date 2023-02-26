import './Recommendation.scss'

const Recommendation = () => {
  return (
    <div className='diet'>
      <div className="container">
        <h1>Diet Planner</h1>
        <form>
            <h4>Enter Your Information</h4>
          <div className="left">

            <label htmlFor="">
              Age
              <input type="number" name="age" />
            </label>
            <label htmlFor="">
              Height
              <input type="number" name="height" />
            </label>

          </div>
          <div className="right">
            <label htmlFor="">
              Weight
              <input type="number" name="weight" />
            </label>
            <label htmlFor="">
              BMI
              <input type="number" name="bodyfat" />
            </label>
          </div>
          <button>Recommend</button>
        </form>

      </div>

    </div>
  )
}

export default Recommendation