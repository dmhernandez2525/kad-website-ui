// Outside packages
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// Hooks
import useScrollToTop from '../../hooks/useScrollToTop';

// Helpers
import scrollById from '../../helpers/scrollById';

// Styles
import './MobileNav.scss';

// ====================
// Component
// ====================
const MobileNav = () => {
  // ====================
  // Custom Hooks
  // ====================
  useScrollToTop();

  const location = useLocation();

  // ====================
  // State
  // ====================
  const [open, setOpen] = useState(false);

  // ====================
  // Variables
  // ====================
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
    <div className="mobile-navbar">
      <div className="mobile-navbar__button-wrapper">
        <button
          onClick={() => setOpen(!open)}
          className={classnames({
            'mobile-navbar__button': true,
            'mobile-navbar__button-closed': !open,
            'mobile-navbar__button-open': open,
          })}
        >
          X
        </button>
      </div>

      <div
        className={classnames({
          'mobile-navbar__closed': !open,
          'mobile-navbar__open': open,
        })}
      >
        {!shouldNotShow && (
          <>
            <a onClick={() => scrollById('home')}>HOME</a>
            <a onClick={() => scrollById('ourbusiness')}>OUR BUSINESS</a>
            <a onClick={() => scrollById('whatwedo')}>WHAT WE DO</a>
            <a onClick={() => scrollById('process')}>OUR PROCESS</a>
            <Link to="/ourstory">OUR STORY</Link>
            <a onClick={() => scrollById('contact')}>CONTACT</a>
          </>
        )}
        {shouldNotShow && (
          <>
            <Link to="/#home">HOME</Link>
            <Link to="/#ourbusiness">OUR BUSINESS</Link>
            <Link to="/#whatwedo">WHAT WE DO</Link>
            <Link to="/#process">OUR PROCESS</Link>
            <Link to="/ourstory">OUR STORY</Link>
            <Link to="/#contact">CONTACT</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
