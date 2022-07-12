import './styles/css/hero.css';

const Hero = props => {
  return (
    <div className="hero-container">
      <div className="bgimage">
        <h3>
          It's not just <br />
          About Insurance <br />
          <span id="sec-text">
            Our Focus is on protecting what matters most: <br />
            You, your family, and your business.
          </span>
        </h3>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};
export default Hero;
