// Outside packages
import React from 'react';

// Components

// Images
import languages from '../../images/ToolsofTheTrade/languages.png';
import platforms from '../../images/ToolsofTheTrade/platforms.png';
import toolsandframeworks from '../../images/ToolsofTheTrade/toolsandframeworks.png';

// Styles
import './ToolsOfTheTrade.scss';

const ToolsOfTheTrade = () => {
  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================

  // ====================
  // State
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
    <div className="tools-of-the-trade" id="toolsofthetrade">
      <div className="tools-of-the-trade__spacer"></div>
      <div className="tools-of-the-trade__wrapper">
        <div className="tools-of-the-trade__text-header-wrapper">
          <h2>Tools of the Trade</h2>

          <p>
            We know there's no such thing as "one size fits all." That's why we
            are always learning the newest technologies. We ensure that your
            custom solution not only solves your current challenges, but your
            future ones too.
          </p>
        </div>

        <div className="tools-of-the-trade__text-header-wrapper">
          <div className="tools-of-the-trade__text-image-wrapper">
            <img
              className="tools-of-the-trade__text-image"
              src={languages}
              alt="one"
            />

            <div
              className="tools-of-the-trade__text-image-main-wrapper 
          tools-of-the-trade__languages"
            >
              <h3>Languages</h3>
              <p>
                Whatever the project requires, we speak it's language. With
                expertise in XYZ, we ensure that every project is covered.
              </p>
            </div>
          </div>
        </div>
        <div className="tools-of-the-trade__text-header-wrapper tools-of-the-trade__neg-marg">
          <div className="tools-of-the-trade__text-image-wrapper">
            <div className="tools-of-the-trade__text-image-main-wrapper tools-of-the-trade__tools-frameworks">
              <h3>Tools & Frameworks</h3>
              <p>
                We've got a few tricks up our sleeves with expertise in a wide
                array of tools and frameworks. Whether it's managing a project
                more effectively or making sure that your business stands out by
                running efficiently and looking its best, we ensure that you are
                covered from A-Z.
              </p>
            </div>

            <img
              className="tools-of-the-trade__text-image"
              src={toolsandframeworks}
              alt="three"
            />
          </div>
        </div>
        <div className="tools-of-the-trade__text-header-wrapper tools-of-the-trade__neg-marg">
          <div className="tools-of-the-trade__text-image-wrapper">
            <img
              className="tools-of-the-trade__text-image"
              src={platforms}
              alt="two"
            />
            <div className="tools-of-the-trade__text-image-main-wrapper tools-of-the-trade__platforms">
              <h3>Platforms</h3>

              <p>
                A great business cannot thrive without a great foundation.
                That's why we use the best when it comes to how your code,
                applications, data, and everything else is supported. We want to
                ensure that as your business grows, the platforms it uses can
                scale with you.
              </p>
            </div>
          </div>
        </div>

        <div className="tools-of-the-trade__all-icon-wrapper"></div>
      </div>
    </div>
  );
};

export default ToolsOfTheTrade;
