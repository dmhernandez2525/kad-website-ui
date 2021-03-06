// Outside packages
import React from 'react';
import classnames from 'classnames';

// Components

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Images
import Blocks from './images/blocks.svg';
import MagnifyingGlass from './images/magnifyingglass.svg';
import Computer from './images/computer.svg';

// Styles
import './WhatWeDo.scss';

const WhatWeDo = () => {
  // ====================
  // Hooks
  // ====================
  const { width } = useWindowDimensions();

  // ====================
  // Variables
  // ====================
  const allContent = [
    {
      icon: MagnifyingGlass,
      header: 'Discovery',
      text: 'Understand your business, its needs and the path to excellence.',
    },
    {
      icon: Blocks,
      header: 'Design and Build',
      text: 'Create a unique, one-of-a-kind solution that solves all your current tech challenges and future-proofs your business for years to come.',
    },
    {
      icon: Computer,
      header: 'Ongoing Support',
      text: 'We ensure that everything we deliver hits the ball out of the park and can be easily developed on by us or others.',
    },
  ];
  // ====================
  // State
  // ====================

  // ====================
  // Handle Methods
  // ====================

  // ====================
  // Display Functions
  // ====================
  const displayContent = () => {
    return allContent.map((contentObj, i) => {
      const { icon, header, text } = contentObj;

      return (
        <div
          key={`${header} ${i} ${icon}`}
          className={classnames({
            'what-we-do__content-wrapper': width > 1000,
            'what-we-do__content-mobile-wrapper': width < 1000,
            'what-we-do__content-wrapper-right': width < 1000 && i % 2 === 1,
            'what-we-do__content-wrapper-left': width < 1000 && i % 2 === 0,
          })}
        >
          <img src={icon} alt="" />
          <div
            className={classnames({
              'what-we-do__content-text-wrapper-right':
                width < 1000 && i % 2 === 1,
              'what-we-do__content-text-wrapper-left':
                width < 1000 && i % 2 === 0,
            })}
          >
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
      );
    });
  };
  // ====================
  // Return
  // ====================

  return (
    <div id="whatwedo" className="what-we-do">
      <div className="what-we-do__spacer"></div>
      <div className="what-we-do__wrapper">
        <h1>WHAT WE DO</h1>

        <div className="what-we-do__all-content-wrapper">
          <div className="what-we-do__all-items-content-wrapper">
            {displayContent()}
          </div>
          <div className="what-we-do__text-wrapper">
            <p className="what-we-do__text">
              We are focused on helping your business compete with the biggest
              brands out there by eliminating the technology advantage they've
              had for too long. Whether it's the front-end of your business that
              customers interact with every day or the critical systems that
              keep it all going, we aim to understand how your business can
              benefit from upgrading your technology and provide the expertise
              in making that happen at a fraction of the price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
