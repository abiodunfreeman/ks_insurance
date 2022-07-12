import './styles/css/footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <h3>KS Insurance Agency</h3>
      <div id="footer-info">
        <p>(440) 354-4664</p>
        <p>Monday - Friday 8:30am - 5:00pm</p>
        <p>78 Mentor Ave Painesville, OH 44077</p>
        <p>ks.insur.agency@gmail.com</p>
        <div>
          <Link to="/login">login</Link>
        </div>
      </div>
    </footer>
  );
}