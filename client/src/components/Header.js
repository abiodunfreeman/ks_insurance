import './styles/css/header.css';
import logo from './images/logo/profile.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function checkIfMobileMenuIsOpen() {
    // stops scrolling of page when menu is open
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu-btn');
    const headerMobileNav = document.querySelector('#mobile-header-nav');

    if (!menuOpen) {
      menuBtn.classList.add('open');
      headerMobileNav.classList.add('active-nav');
      html.classList.add('noScroll');
      body.classList.add('noScroll');
      setMenuOpen(prevState => !prevState);
    } else if (menuOpen) {
      menuBtn.classList.remove('open');
      headerMobileNav.classList.remove('active-nav');
      html.classList.remove('noScroll');
      body.classList.remove('noScroll');
      setMenuOpen(prevState => !prevState);
    }
  }
  const handleMenuClick = () => {
    console.log('menu click');

    checkIfMobileMenuIsOpen();
  };
  return (
    <header>
      <Link id="logo-link" to="/">
        <h1>KS Insurance Agency</h1>
      </Link>
      <div id="header-nav">
        <Link to="/about" className="link link-info">
          About
        </Link>
        <Link to="/contact-us" className="link link-info">
          Contact Us
        </Link>
        <Link className="btn btn-primary" to="/quote">
          Get a Quote
        </Link>
      </div>

      <div onClick={() => handleMenuClick()} className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>

      <nav id="mobile-header-nav">
        <div className="link-list">
          <Link to="/" onClick={() => checkIfMobileMenuIsOpen()}>
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => checkIfMobileMenuIsOpen()}
            className="link link-info"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            onClick={() => checkIfMobileMenuIsOpen()}
            className="link link-info"
          >
            Contact Us
          </Link>
        </div>

        <Link className="btn btn-primary" to="/quote">
          Get a Quote
        </Link>
      </nav>
    </header>
  );
};
export default Header;
