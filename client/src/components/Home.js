import Hero from './Hero';
import Bio from './Bio';
import './styles/css/home.css';
import ContactForm from './ContactForm';
import Footer from './Footer';
const Home = props => {
  const { handleContactUsFormSubmit } = props;
  return (
    <div id="home-container">
      <Hero />
      <Bio />
      <div id="home-quote">
        <h1>“Price is what you pay. Value is what you get.”</h1>
        <h2 className="author">— Warren Buffet</h2>
      </div>
      <ContactForm handleContactUsFormSubmit={handleContactUsFormSubmit} />
      <div id="hero2">
        <h3>
          It's not just <br />
          About Insurance <br />
          <span id="sec-text">
            Our Focus is on protecting what matters most: <br />
            You, your family, and your business.
          </span>
        </h3>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
