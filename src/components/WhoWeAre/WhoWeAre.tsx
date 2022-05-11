// Outside packages
import react from 'react';

// Components
import InfoCard from '../InfoCard';

// Images
import Gear from '../../images/OurBusiness/Gear.svg';
import Graph from '../../images/OurBusiness/Graph.svg';
import Hierarchy from '../../images/OurBusiness/Hierarchy.svg';
import Laptop from '../../images/OurBusiness/Laptop.svg';
import Mobile from '../../images/OurBusiness/Mobile.svg';
import OfficeBag from '../../images/OurBusiness/OfficeBag.svg';

// Styles
import './WhoWeAre.scss';
import classNames from 'classnames';

const WhoWeAre = () => {
  // ====================
  // State
  // ====================
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
    return allCardInfo.map((cardInfo) => {
      return (
        <InfoCard
          headerFirst={cardInfo.headerFirst}
          headerSecond={cardInfo.headerSecond}
          mainSection={cardInfo.mainSection}
        />
      );
    });
  };

  // ====================
  // Return
  // ====================

  return (
    <div
      id="whoweare"
      className={classNames({
        'who-we-are': true,
      })}
    >
      <div>
        <div className="who-we-are__main-wrapper">
          <div className="who-we-are__main">
            <h1>Our Business</h1>

            <p className="who-we-are__text">
              KAD Consulting is a full-stack ERP development and strategy
              partner for growing brands. We aim to give them access to advanced
              technology and the expertise to implement it so they can compete
              with the largest companies out there without fear of having an
              ecosystem that can't keep up.
            </p>

            <div className="who-we-are__all-image-icon-wrapper">
              <div className="who-we-are__image-icon-wrapper">
                <div className="who-we-are__laptop-mobile-image-icon-wrapper">
                  <img
                    className="who-we-are__laptop-image-icon"
                    src={Laptop}
                    alt="Laptop"
                  />
                  <img
                    className="who-we-are__mobile-image-icon"
                    src={Mobile}
                    alt="Mobile"
                  />
                </div>

                <p> Full-stack web and mobile experiences</p>
              </div>
              <div className="who-we-are__image-icon-wrapper">
                <img
                  className="who-we-are__image-icon"
                  src={OfficeBag}
                  alt="OfficeBag"
                />
                <p> Business applications</p>
              </div>
              <div className="who-we-are__image-icon-wrapper">
                <img
                  className="who-we-are__image-icon"
                  src={Hierarchy}
                  alt="Hierarchy"
                />
                <p> Technical architecture implementation</p>
              </div>

              <div className="who-we-are__image-icon-wrapper">
                <img
                  className="who-we-are__image-icon"
                  src={Graph}
                  alt="Graph"
                />
                <p> Data collection and aggregation</p>
              </div>
              <div className="who-we-are__image-icon-wrapper">
                <img className="who-we-are__image-icon" src={Gear} alt="Gear" />
                <p> Automation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="who-we-are__values-wrapper">
          <h1>Our Values</h1>
          <div className="who-we-are__info-cards-wrapper">
            {displayInfoCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
