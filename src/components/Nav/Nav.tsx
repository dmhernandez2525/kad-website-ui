// Outside packages
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// Components
import Modal from '../Modal';
import ContactUsForm from '../ContactUs/ContactUsForm';

// Hooks
import useScrollToTop from '../../hooks/useScrollToTop';
import useWindowDimensions from '../../hooks/useWindowDimensions';

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
  const { width } = useWindowDimensions();

  // ====================
  // State
  // ====================
  const [bellow, setBellow] = useState(false);
  const [currentNavItem, setCurrentNavItem] = useState('');

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
      const idToScroll = location.hash.slice(1);
      scrollById(idToScroll);
      const indexing: any = {
        home: 0,
        ourbusiness: 1,
        whatwedo: 2,
        process: 3,
      };
      handleUnderlineMove(indexing[idToScroll]);
      setCurrentNavItem(idToScroll);
    } else {
      handleUnderlineMove(4);
    }
  }, [location, width]);

  // ====================
  // Handle Methods
  // ====================
  const handleUnderlineMove = (index: number) => {
    // TODO refactor to use useRef
    let underlines: NodeListOf<HTMLElement> =
      document.querySelectorAll('.navbar__link');
    let currentNavItem: HTMLElement = underlines[index];
    let navUnderline: HTMLElement | null =
      document.getElementById('navbarIndicator');

    if (navUnderline) {
      let width = 0;
      for (let i = 0; i < index; i++) {
        width += underlines[i].offsetWidth;
      }

      navUnderline.style.width = `${currentNavItem.offsetWidth}px`;
      navUnderline.style.transform = 'translate3d(' + width + 'px,0,0)';
    }
  };

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

      {width > 1000 && !shouldNotShow && (
        <div className="navbar__link-wrapper">
          <a
            className={classnames({
              navbar__link: true,
              'navbar__link--active': currentNavItem === 'home',
            })}
            onClick={() => {
              handleUnderlineMove(0);
              scrollById('home');
              setCurrentNavItem('home');
            }}
          >
            HOME
          </a>
          <a
            className={classnames({
              navbar__link: true,
              'navbar__link--active': currentNavItem === 'ourbusiness',
            })}
            onClick={() => {
              handleUnderlineMove(1);
              scrollById('ourbusiness');
              setCurrentNavItem('ourbusiness');
            }}
          >
            OUR BUSINESS
          </a>
          <a
            className={classnames({
              navbar__link: true,
              'navbar__link--active': currentNavItem === 'whatwedo',
            })}
            onClick={() => {
              handleUnderlineMove(2);
              scrollById('whatwedo');
              setCurrentNavItem('whatwedo');
            }}
          >
            WHAT WE DO
          </a>
          <a
            className={classnames({
              navbar__link: true,
              'navbar__link--active': currentNavItem === 'process',
            })}
            onClick={() => {
              handleUnderlineMove(3);
              scrollById('process');
              setCurrentNavItem('process');
            }}
          >
            OUR PROCESS
          </a>
          <Link
            onClick={() => handleUnderlineMove(4)}
            className={classnames({
              navbar__link: true,
              'navbar__link--active': currentNavItem === '',
            })}
            to="/ourstory"
          >
            OUR STORY
          </Link>
          <div id="navbarIndicator" className="navbar__indicator"></div>
          <Modal
            bellow={bellow}
            buttonText="CONTACT"
            children={<ContactUsForm />}
          ></Modal>
        </div>
      )}
      {width > 1000 && shouldNotShow && (
        <div className="navbar__link-wrapper">
          <Link
            className={classnames({
              navbar__link: true,
            })}
            to="/#home"
          >
            HOME
          </Link>
          <Link
            className={classnames({
              navbar__link: true,
            })}
            to="/#ourbusiness"
          >
            OUR BUSINESS
          </Link>
          <Link
            className={classnames({
              navbar__link: true,
            })}
            to="/#whatwedo"
          >
            WHAT WE DO
          </Link>
          <Link
            className={classnames({
              navbar__link: true,
            })}
            to="/#process"
          >
            OUR PROCESS
          </Link>
          <Link
            className={classnames({
              navbar__link: true,
              'navbar__link--active': shouldNotShow,
            })}
            onClick={() => handleUnderlineMove(4)}
            to="/ourstory"
          >
            OUR STORY
          </Link>
          <span id="navbarIndicator" className="navbar__indicator"></span>

          <Modal buttonText="CONTACT" children={<ContactUsForm />}></Modal>
        </div>
      )}
    </div>
  );
};

export default Nav;
