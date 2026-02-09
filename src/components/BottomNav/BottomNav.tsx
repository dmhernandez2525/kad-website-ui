// Outside packages
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// Helpers
import scrollById from '../../helpers/scrollById';

// Styles
import './BottomNav.scss';

// ====================
// Nav Items
// ====================
interface NavItem {
  id: string;
  label: string;
  icon: string;
  scrollTarget?: string;
  linkTo?: string;
}

const mainPageItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: '\u2302', scrollTarget: 'home' },
  { id: 'ourbusiness', label: 'Business', icon: '\u2616', scrollTarget: 'ourbusiness' },
  { id: 'whatwedo', label: 'Services', icon: '\u2699', scrollTarget: 'whatwedo' },
  { id: 'process', label: 'Process', icon: '\u21BB', scrollTarget: 'process' },
  { id: 'ourstory', label: 'Story', icon: '\u2605', linkTo: '/ourstory' },
  { id: 'contact', label: 'Contact', icon: '\u2709', scrollTarget: 'contact' },
];

const storyPageItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: '\u2302', linkTo: '/#home' },
  { id: 'ourbusiness', label: 'Business', icon: '\u2616', linkTo: '/#ourbusiness' },
  { id: 'whatwedo', label: 'Services', icon: '\u2699', linkTo: '/#whatwedo' },
  { id: 'process', label: 'Process', icon: '\u21BB', linkTo: '/#process' },
  { id: 'ourstory', label: 'Story', icon: '\u2605', linkTo: '/ourstory' },
  { id: 'contact', label: 'Contact', icon: '\u2709', linkTo: '/#contact' },
];

// ====================
// Component
// ====================
const BottomNav = () => {
  const location = useLocation();
  const isStoryPage = location.pathname === '/ourstory';
  const [activeItem, setActiveItem] = useState(isStoryPage ? 'ourstory' : 'home');

  const items = isStoryPage ? storyPageItems : mainPageItems;

  useEffect(() => {
    if (isStoryPage) {
      setActiveItem('ourstory');
      return;
    }

    const hash = location.hash.slice(1);
    if (hash) {
      setActiveItem(hash);
    } else {
      setActiveItem('home');
    }
  }, [location, isStoryPage]);

  // Track scroll position to highlight active section on main page
  useEffect(() => {
    if (isStoryPage) return;

    const sectionIds = ['contact', 'process', 'whatwedo', 'ourbusiness', 'home'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveItem(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStoryPage]);

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item.id);
    if (item.scrollTarget) {
      scrollById(item.scrollTarget);
    }
  };

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => {
        const isActive = activeItem === item.id;

        if (item.linkTo) {
          return (
            <Link
              key={item.id}
              to={item.linkTo}
              className={classnames('bottom-nav__item', {
                'bottom-nav__item--active': isActive,
              })}
              onClick={() => handleNavClick(item)}
            >
              <span className="bottom-nav__icon">{item.icon}</span>
              <span className="bottom-nav__label">{item.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            className={classnames('bottom-nav__item', {
              'bottom-nav__item--active': isActive,
            })}
            onClick={() => handleNavClick(item)}
            type="button"
          >
            <span className="bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
