// Outside packages
import react, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// Components
import Modal from '../Modal';
import ContactUsForm from '../ContactUs/ContactUsForm';

// Hooks
import useScrollToTop from '../../hooks/useScrollToTop';

// Helpers
import scrollById from '../../helpers/scrollById';

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
  // Use Effect
  // ====================
  useEffect(() => {
    if (location.pathname !== '/ourstory') {
      scrollById(location.hash.slice(1));
    }
  }, [location]);

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
        onClick={() => scrollById('home')}
      />

      {!shouldNotShow && (
        <>
          <a onClick={() => scrollById('home')}>HOME</a>
          <a onClick={() => scrollById('whoweare')}>OUR BUSINESS</a>
          <a onClick={() => scrollById('whatwedo')}>WHAT WE DO</a>
          <a onClick={() => scrollById('process')}>OUR PROCESS</a>
          <Link to="/ourstory">OUR STORY</Link>
          <Modal buttonText="CONTACT" children={<ContactUsForm />}></Modal>
        </>
      )}
      {shouldNotShow && (
        <>
          <Link to="/#home">HOME</Link>
          <Link to="/#whoweare">OUR BUSINESS</Link>
          <Link to="/#whatwedo">WHAT WE DO</Link>
          <Link to="/#process">OUR PROCESS</Link>
          <Link to="/ourstory">OUR STORY</Link>

          <Modal buttonText="CONTACT" children={<ContactUsForm />}></Modal>
        </>
      )}
    </div>
  );
};

export default Nav;
