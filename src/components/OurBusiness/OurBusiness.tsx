// Outside packages
import React from 'react';

// Components
import InfoCard from '../InfoCard';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Images
import Gear from '../../images/OurBusiness/Gear.svg';
import Graph from '../../images/OurBusiness/Graph.svg';
import Hierarchy from '../../images/OurBusiness/Hierarchy.svg';
import Laptop from '../../images/OurBusiness/Laptop.svg';
import OfficeBag from '../../images/OurBusiness/OfficeBag.svg';

// Styles
import './OurBusiness.scss';
import classNames from 'classnames';

const OurBusiness = () => {
  // ====================
  // State
  // ====================

  // ====================
  // Hooks
  // ====================
  const { width } = useWindowDimensions();

  // ====================
  // Variables
  // ====================
  const allCardInfo = [
    {
      headerFirst: `Take "quick and easy"`,
      headerSecond: 'Personally',
      mainSection: `Develop full-stack
      solutions that tailor
      to specific brands
      while maintaining
      an ease-of-use
      mindset`,
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Curious',
      mainSection: `From tried and true to cutting edge, we are always learning so we can serve your vision. We obsess over technology so you don't have to`,
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Confident',
      mainSection: `Take risks, learn, and grow. If we don't know something, we are connected to those who do`,
    },
    {
      headerFirst: `Trust Your`,
      headerSecond: 'Gut',
      mainSection: `Nothing beats your intuition for your business. We aim to foster that and support it through solutions that can bring it to life`,
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Passionate',
      mainSection: `Always find a win-win scenario for you, your customers, and the continued excellence of our practice`,
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Visionaries',
      mainSection: `Our future is dictated by helping great people bring great ideas to life`,
    },
  ];
  // ====================
  // Handle Methods
  // ====================

  // ====================
  // Display Functions
  // ====================
  const displayInfoCards = () => {
    const allCardInfoElements = allCardInfo.map((cardInfo, i) => {
      if (width > 1000) {
        return (
          <InfoCard
            key={`${cardInfo.headerFirst} ${i} ${cardInfo.headerSecond}`}
            headerFirst={cardInfo.headerFirst}
            headerSecond={cardInfo.headerSecond}
            mainSection={cardInfo.mainSection}
          />
        );
      } else {
        return (
          <span
            key={`${cardInfo.headerFirst} ${i} ${cardInfo.headerSecond}`}
            className="our-business__info-text-wrapper"
          >
            <p className="our-business__info-header">
              {`${cardInfo.headerFirst} ${cardInfo.headerSecond}`}
            </p>
            <p className="our-business__info-text">{cardInfo.mainSection}</p>
          </span>
        );
      }
    });

    if (width > 1000) {
      return (
        <div className="our-business__info-cards-wrapper">
          {allCardInfoElements}
        </div>
      );
    } else {
      return allCardInfoElements;
    }
  };

  // ====================
  // Return
  // ====================

  return (
    <div
      id="ourbusiness"
      className={classNames({
        'our-business': true,
      })}
    >
      <div>
        <div
          className={classNames({
            'our-business__main-wrapper': width > 1000,
          })}
        >
          <div className="our-business__main">
            <h1>OUR BUSINESS</h1>

            <p className="our-business__text">
              KAD Consulting is a full-stack ERP development and strategy
              partner for growing brands. We aim to give them access to advanced
              technology and the expertise to implement it so they can compete
              with the largest companies out there without fear of having an
              ecosystem that can't keep up.
            </p>

            <div className="our-business__all-image-icon-wrapper">
              <div className="our-business__image-icon-wrapper">
                <img
                  className="our-business__image-icon"
                  src={Laptop}
                  alt="Laptop"
                />

                <p> Full-stack web and mobile experiences</p>
              </div>
              <div className="our-business__image-icon-wrapper">
                <img
                  className="our-business__image-icon"
                  src={OfficeBag}
                  alt="OfficeBag"
                />
                <p> Business applications</p>
              </div>
              <div className="our-business__image-icon-wrapper">
                <img
                  className="our-business__image-icon"
                  src={Hierarchy}
                  alt="Hierarchy"
                />
                <p> Technical architecture implementation</p>
              </div>

              <div className="our-business__image-icon-wrapper">
                <img
                  className="our-business__image-icon"
                  src={Graph}
                  alt="Graph"
                />
                <p> Data collection and aggregation</p>
              </div>
              <div className="our-business__image-icon-wrapper">
                <img
                  className="our-business__image-icon"
                  src={Gear}
                  alt="Gear"
                />
                <p> Automation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="our-business__values-wrapper">
          <h1>OUR VALUES</h1>

          {displayInfoCards()}
        </div>
      </div>
    </div>
  );
};

export default OurBusiness;
