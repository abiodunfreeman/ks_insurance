import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../components/styles/css/contact.css';
export default function ContactUs() {
  return (
    <div id="contact-route-container">
      <Header />
      <div className="pad-10"></div>
      <div id="contact-form-container" className="gap-8">
        <div className="contact-info-container">
          <h1>Contact KS Insurance Agency</h1>
          <section className="flex flex-wrap justify-between  ">
            <p>
              <span className="font-bold text-red-500">Phone: </span>(440)
              354-4664
            </p>
            <p>
              <span className="font-bold text-red-500">Adress: </span>78 Mentor
              Ave Painesville, OH 44077
            </p>
            <p>
              <span className="font-bold text-red-500">Fax: </span>(440)
              354-4664
            </p>
            <p>
              <span className="font-bold text-red-500">Email: </span>
              ks.insur.agency@gmail.com
            </p>
          </section>
          <h5>
            Our team of experienced professionals are eager to lend a hand.{' '}
            <br /> Get in touch today.
          </h5>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
