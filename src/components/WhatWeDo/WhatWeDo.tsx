// Outside packages
import react from 'react';

// Components

// Styles
import './WhatWeDo.scss';

const WhatWeDo = () => {
  // ====================
  // Variables
  // ====================
  const allContent = [
    {
      icon: 'ww',
      header: 'Discovery',
      text: 'Understand your business, its needs and the path to excellence.',
    },
    {
      icon: 'ww',
      header: 'Design and Build',
      text: 'Create a unique, one-of-a-kind solution that solves all your current tech challenges and future-proofs your business for years to come.',
    },
    {
      icon: 'ww',
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
        <div>
          <img src={icon} alt="" />
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      );
    });
  };
  // ====================
  // Return
  // ====================

  return (
    <div>
      <h2>What We Do</h2>

      <div>
        <div>
          {displayContent()}
          <p>
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
