import react from 'react';
import './styles/css/hero.css';
import logo from './images/logo/cleve-bg.jpg';
const Hero = props => {
  return (
    <div className="hero-container">
      <div className="bgimage">
        <h2>“Price is what you pay. Value is what you get.”</h2>
        <h2>- Warren Buffet</h2>
        {/* <img id="hero-img" src={logo} alt="background of cleveland, ohio" /> */}
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};
export default Hero;
