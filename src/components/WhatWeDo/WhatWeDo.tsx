// Outside packages
import react from 'react';

// Components

// Images
import Blocks from './images/blocks.svg';
import MagnifyingGlass from './images/magnifyingglass.svg';
import Computer from './images/computer.svg';

// Styles
import './WhatWeDo.scss';

const WhatWeDo = () => {
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
    return allContent.map((contentObj) => {
      const { icon, header, text } = contentObj;
      return (
        <div className="what-we-do__content-wrapper">
          <img src={icon} alt="" />
          <div>
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
      <h1>What We Do</h1>
      <div className="what-we-do__all-content-wrapper">
        <div>{displayContent()}</div>
        <div>
          <p className="what-we-do__text">
            We are focused on helping your business compete with the biggest
            brands out there by eliminating the technology advantage they've had
            for too long. Whether it's the front-end of your business that
            customers interact with every day or the critical systems that keep
            it all going, we aim to understand how your business can benefit
            from upgrading your technology and provide the expertise in making
            that happen at a fraction of the price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
