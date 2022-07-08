import Hero from './Hero';
import Bio from './Bio';
import './styles/css/home.css';
import ContactForm from './ContactForm';
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
    </div>
  );
};
export default Home;
