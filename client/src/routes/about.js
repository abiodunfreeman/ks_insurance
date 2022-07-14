import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/css/about.css';
import Welcome from '../components/Welcome';
export default function About() {
  return (
    <section id="about-page-container">
      <Header />
      <div className="padtop10" />
      <Welcome />
      <Footer />
    </section>
  );
}
