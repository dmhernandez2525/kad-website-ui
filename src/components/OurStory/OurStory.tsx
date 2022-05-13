// Outside packages
import react, { useState } from 'react';

// Components

// Images
import Daniel from '../../images/Daniel.jpeg';
import Keegan from '../../images/Keegan.jpeg';

// Styles
import './OurStory.scss';

// ====================
// Component
// ====================
const OurStory = () => {
  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================

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
    <div className="our-story">
      <div className="our-story__wrapper">
        <h1> Our Story</h1>
        <p>
          KAD Consulting is made up of brilliant minds that have worked with
          Fortune 500 & 100 technology companies. We all share a common thought:
          what if we brought enterprise technology experience to growing brands
          so they can bridge the gap between where they are and where they would
          like to do business?
        </p>
        <p>
          Whether you're a visionary who aims to create a better world, a
          company that provides vital good and services, or a creator that is
          just starting your journey, technology should never stand between you
          and your goals.
        </p>
        <p>
          Sure, you can find easy solutions to get started, but that doesn’t
          mean it solves all your needs. Nor does it mean that you’ll come close
          to utilizing all its features. With all the clutter, tech can feel
          cumbersome.
        </p>
        <p>
          Maybe you’re looking to scale your business but have no idea if the
          “enterprise” solutions are meant for your brand's future. If you're
          looking to invest in scaling your business, you have to ensure it's
          time and money well spent for the road ahead and not just a new
          problem. We aim to close the gap between your brand and enterprises by
          providing you the technological expertise they've had access to for
          far too long.
        </p>
        <p>Our mission is simple: It’s time to level the playing field.</p>
        <h1> Our founders</h1>
        <div className="our-story__our-founders-image-wrapper">
          <img src={Daniel} alt="" />
          <img src={Keegan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
