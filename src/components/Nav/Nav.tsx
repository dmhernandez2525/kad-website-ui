// Outside packages
import react, { useState } from 'react';
import classnames from 'classnames';
// Components

// Images
import LogoWhite from '../../images/kadLogoWhite.svg';
import LogoBlack from '../../images/kadLogoBlack.svg';
// Styles
import './Nav.scss';

const Nav = () => {
  // ====================
  // State
  // ====================
  const [bellow, setBellow] = useState(true);
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
        navbar__main: !bellow,
        navbar__scroll: bellow,
      })}
    >
      <img
        className="navbar__logo"
        src={!bellow ? LogoWhite : LogoBlack}
        alt="kad logo"
      />
      <a href="#home">HOME</a>
      <a href="#news">WHO WE ARE</a>
      <a href="#contact">WHAT WE DO</a>
      <a href="#contact">OUR PROCESS</a>
      <button>CONTACT US</button>
    </div>
  );
};

export default Nav;
