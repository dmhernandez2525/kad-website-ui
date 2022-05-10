// Outside packages
import react, { useState } from 'react';

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
  const [toggleType, setToggleType] = useState('whoweare');
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
  const displayNavButtons = () => {
    return (
      <div className="who-we-are__button-wrapper">
        <button
          className={classNames({
            'who-we-are__toggled': true,
            'who-we-are__not-toggled': toggleType === 'whoweare',
          })}
          onClick={() => setToggleType('whoweare')}
        >
          {'>'}
        </button>
        <button
          className={classNames({
            'who-we-are__toggled': true,
            'who-we-are__not-toggled': toggleType === 'ourstory',
          })}
          onClick={() => setToggleType('ourstory')}
        >
          {'<'}
        </button>
      </div>
    );
  };
  // ====================
  // Return
  // ====================

  return (
    <div
      id="whoweare"
      className={classNames({
        'who-we-are': true,
        'who-we-are__reversed': toggleType !== 'whoweare',
      })}
    >
      {toggleType === 'whoweare' && (
        <>
          <div>
            <div className="who-we-are__main-wrapper">
              <div className="who-we-are__main">
                <h1>Our Business</h1>

                <p className="who-we-are__text">
                  KAD Consulting is a full-stack ERP development and strategy
                  partner for growing brands. We aim to give them access to
                  advanced technology and the expertise to implement it so they
                  can compete with the largest companies out there without fear
                  of having an ecosystem that can't keep up.
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
                    <img
                      className="who-we-are__image-icon"
                      src={Gear}
                      alt="Gear"
                    />
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
          {/* {displayNavButtons()} */}
        </>
      )}
      {toggleType === 'ourstory' && (
        <>
          {/* {displayNavButtons()} */}
          <div className="who-we-are__ourStoryWrapper">
            <h1> Our Story</h1>
            <p>
              KAD Consulting is made up of brilliant minds that have worked with
              Fortune 500 & 100 technology companies. We all share a common
              thought: what if we brought enterprise technology experience to
              growing brands so they can bridge the gap between where they are
              and where they would like to do business?
            </p>
            <p>
              Whether you're a visionary who aims to create a better world, a
              company that provides vital good and services, or a creator that
              is just starting your journey, technology should never stand
              between you and your goals.
            </p>
            <p>
              Sure, you can find easy solutions to get started, but that doesn’t
              mean it solves all your needs. Nor does it mean that you’ll come
              close to utilizing all its features. With all the clutter, tech
              can feel cumbersome.
            </p>
            <p>
              Maybe you’re looking to scale your business but have no idea if
              the “enterprise” solutions are meant for your brand's future. If
              you're looking to invest in scaling your business, you have to
              ensure it's time and money well spent for the road ahead and not
              just a new problem. We aim to close the gap between your brand and
              enterprises by providing you the technological expertise they've
              had access to for far too long.
            </p>
            <p>Our mission is simple: It’s time to level the playing field.</p>
            <h1> Our founders</h1>
            <div className="who-we-are__our-founders-image-wrapper">
              <img src={Gear} alt="" />
              <img src={Gear} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WhoWeAre;
