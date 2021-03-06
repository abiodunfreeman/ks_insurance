import './styles/css/header.css';

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
  function logoClick() {
    // stops scrolling of page when menu is open
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu-btn');
    const headerMobileNav = document.querySelector('#mobile-header-nav');
    menuBtn.classList.remove('open');
    headerMobileNav.classList.remove('active-nav');
    html.classList.remove('noScroll');
    body.classList.remove('noScroll');
  }
  const handleMenuClick = () => {
    console.log('menu click');

    checkIfMobileMenuIsOpen();
  };
  return (
    <header className="">
      <Link id="logo-link" to="/" onClick={() => logoClick()}>
        <h1>KS Insurance Agency</h1>
      </Link>
      <div id="header-nav">
        <div className="header-text" style={{ color: 'black' }}>
          (440) 354-4664
        </div>
        <Link to="/about" className="link header-text">
          About
        </Link>
        <Link to="/contact-us" className="link header-text">
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
          <div className="mobile-header-text text-white text-center">
            (440) 354-4664
          </div>
          <Link
            className="link mobile-header-text"
            to="/"
            onClick={() => checkIfMobileMenuIsOpen()}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => checkIfMobileMenuIsOpen()}
            className="link mobile-header-text"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            onClick={() => checkIfMobileMenuIsOpen()}
            className="link mobile-header-text"
          >
            Contact Us
          </Link>
          <Link
            className="btn btn-primary"
            to="/quote"
            onClick={() => checkIfMobileMenuIsOpen()}
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
