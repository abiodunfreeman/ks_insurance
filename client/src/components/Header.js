import './styles/css/header.css';
import logo from './images/logo/profile.png';
import { useState } from 'react';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    console.log('menu click');
    const menuBtn = document.querySelector('.menu-btn');
    const headerMobileNav = document.querySelector('#mobile-header-nav');
    if (!menuOpen) {
      menuBtn.classList.add('open');
      headerMobileNav.classList.add('active-nav');
      setMenuOpen(prevState => !prevState);
    } else if (menuOpen) {
      menuBtn.classList.remove('open');
      headerMobileNav.classList.remove('active-nav');
      setMenuOpen(prevState => !prevState);
    }
  };
  return (
    <header>
      <div id="header-nav">
        <a className="link link-primary">Services</a>
        <a className="link link-info">About</a>
        <a className="link link-info">Contact Us</a>
      </div>

      <img src={logo} alt="logo" id="header-logo" />
      <div onClick={() => handleMenuClick()} className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
      <a href="/quote" id="header-btn" className="btn btn-primary ">
        Get a Quote
      </a>
      <nav id="mobile-header-nav">
        <div className="link-list">
          <a className="link link-primary">Services</a>
          <a className="link link-info">About</a>
          <a className="link link-info">Contact Us</a>
        </div>

        <a className="btn btn-primary" href="/quote">
          Get a Quote
        </a>
      </nav>
    </header>
  );
};
export default Header;
