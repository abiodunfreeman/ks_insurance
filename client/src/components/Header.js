import './styles/css/header.css';
import logo from './images/logo/profile.png';
const Header = () => {
  return (
    <header>
      <div>
        <a className="link link-primary">Services</a>
        <a className="link link-info">About</a>
        <a className="link link-info">Contact Us</a>
      </div>

      <img src={logo} alt="logo" />

      <a href="/quote" className="btn btn-primary">
        Get a Quote
      </a>
    </header>
  );
};
export default Header;
