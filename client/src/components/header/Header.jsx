import './Header.scss'
import { Link } from 'react-router-dom'
// Import Hero Image
import hero from '../../assets/hero.png'
const Header = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="left">
            <h1 className='heading'>Virtual HealthCare For You.</h1>
            <p>SMHEALTHCARE try to give you the best Healthcare options. </p>
            <Link to='/login'>
            <button>
                Get Started
            </button>
            </Link>
        </div>
        <div className="right">
            <img src={hero} alt="Hero_image" />
        </div>
        </div>  

    </section>
  )
}

export default Header