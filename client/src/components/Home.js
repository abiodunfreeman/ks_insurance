import Hero from './Hero';
import Main from './Main';
import ContactForm from './ContactForm';
const Home = props => {
  const { handleContactUsFormSubmit } = props;
  return (
    <div id="home-container">
      <Hero />
      <Main />
      <ContactForm handleContactUsFormSubmit={handleContactUsFormSubmit} />
    </div>
  );
};
export default Home;
