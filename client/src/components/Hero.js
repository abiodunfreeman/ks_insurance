import './styles/css/hero.css';

const Hero = props => {
  return (
    <div className="hero-container">
      <div className="bgimage">
        <div id="hero-text">
          <h3>
            It's not just <br />
            about Insurance <br />
          </h3>
          <span className="sec-text">
            Our Focus is on protecting what matters most: <br />
            You, your family, and your business. <br />
            <br />
            Locally owned and operated in Cleveland, Ohio
          </span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
