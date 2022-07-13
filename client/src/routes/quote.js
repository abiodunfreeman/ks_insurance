import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/css/quote.css';
export default function Quote() {
  return (
    <section id="quote-homepage">
      <Header />
      <div className=" bg-blue-100">
        <div id="quote-form-container">
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="quote-form-name"
            />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              id="quote-form-email"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              id="quote-form-phone"
            />
            <textarea
              placeholder="Message"
              name="message"
              id="quote-form-message"
            />
            <button className="btn btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
}
