// Outside packages
import react, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// Components

// Hooks
import useScrollToTop from '../../hooks/useScrollToTop';

// Images
import LogoWhite from '../../images/kadLogoWhite.svg';
import LogoBlack from '../../images/kadLogoBlack.svg';

// Styles
import './Nav.scss';

// ====================
// Component
// ====================
const Nav = () => {
  // ====================
  // Custom Hooks
  // ====================
  useScrollToTop();

  const location = useLocation();
  // ====================
  // State
  // ====================
  const [bellow, setBellow] = useState(false);

  // ====================
  // Variables
  // ====================

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setBellow(true);
    } else {
      setBellow(false);
    }
  }

  const shouldNotShow = location.pathname === '/ourstory';
  // ====================
  // Handle Methods
  // ====================
  // ====================
  // Display Functions
  // ====================

  // ====================
  // Return
  // ====================

  return (
    <div
      className={classnames({
        navbar: true,
        navbar__scroll: bellow || shouldNotShow,
      })}
    >
      <img
        className="navbar__logo"
        src={!bellow && !shouldNotShow ? LogoWhite : LogoBlack}
        alt="kad logo"
      />

      {!shouldNotShow && (
        <>
          <a href="#home">HOME</a>
          <a href="#whoweare">OUR BUSINESS</a>
          <a href="#whatwedo">WHAT WE DO</a>
          <a href="#process">OUR PROCESS</a>
          <Link to="/ourstory">OUR STORY</Link>
          <button className="navbar__button">CONTACT</button>
        </>
      )}
      {shouldNotShow && (
        <>
          <Link to="/#home">HOME</Link>
          <Link to="/#whoweare">OUR BUSINESS</Link>
          <Link to="/#whatwedo">WHAT WE DO</Link>
          <Link to="/#process">OUR PROCESS</Link>
          <Link to="/ourstory">OUR STORY</Link>
          <button className="navbar__button">CONTACT</button>
        </>
      )}
    </div>
  );
};

export default Nav;
