import Header from '../components/Header';
import img1 from '../components/images/people_at_table.jpg';
import '../components/styles/css/about.css';
export default function About() {
  return (
    <section id="about-page">
      <Header />
      <div id="about-container">
        <h1>1</h1>
        <img src={img1} />
        <h1>2</h1>
        <img src={img1} />
      </div>
    </section>
  );
}
