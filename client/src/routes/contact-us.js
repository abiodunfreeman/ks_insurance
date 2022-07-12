import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../components/styles/css/contact.css';
export default function ContactUs() {
  return (
    <div id="contact-route-container">
      <Header />
      <div className="pad-10"></div>
      <div id="contact-form-container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
