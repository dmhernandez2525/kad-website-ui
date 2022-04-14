// Outside packages
import react, { useState } from 'react';

// Components
import InfoCard from '../InfoCard';

// Images
import placeholderImage from '../../images/whoWeAre.svg';

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
      icon: 'ww',
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Curious',
      mainSection: `From tried and true to cutting edge, we are always learning so we can serve your vision. We obsess over technology so you don't have to`,
      icon: 'ww',
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Confident',
      mainSection: `Take risks, learn, and grow. If we don't know something, we are connected to those who do`,
      icon: 'ww',
    },
    {
      headerFirst: `Trust Your`,
      headerSecond: 'Gut',
      mainSection: `Nothing beats your intuition for your business. We aim to foster that and support it through solutions that can bring it to life`,
      icon: 'ww',
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Passionate',
      mainSection: `Always find a win-win scenario for you, your customers, and the continued excellence of our practice`,
      icon: 'ww',
    },
    {
      headerFirst: `Be`,
      headerSecond: 'Visionaries',
      mainSection: `Our future is dictated by helping great people bring great ideas to life`,
      icon: 'ww',
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
          icon={cardInfo.icon}
        />
      );
    });
  };

  // ====================
  // Return
  // ====================

  return (
    <div id="whoweare" className="who-we-are">
      <div className="who-we-are__button-wrapper">
        <button
          className={classNames({
            'who-we-are__toggled': true,
            'who-we-are__not-toggled': toggleType !== 'whoweare',
          })}
          onClick={() => setToggleType('whoweare')}
        >
          Who We Are
        </button>
        <button
          className={classNames({
            'who-we-are__toggled': true,
            'who-we-are__not-toggled': toggleType !== 'ourstory',
          })}
          onClick={() => setToggleType('ourstory')}
        >
          Our Story
        </button>
      </div>

      {toggleType === 'whoweare' && (
        <>
          <div className="who-we-are__main-wrapper">
            <div className="who-we-are__main">
              <p>
                KAD Consulting is a full-stack ERP development and strategy
                partner for growing brands. We aim to give them access to
                advanced technology and the expertise to implement it so they
                can compete with the largest companies out there without fear of
                having an ecosystem that can't keep up.
              </p>

              <span>KAD specializes in:</span>
              <ul>
                <li> Full-stack web and mobile experiences</li>
                <li> Business applications</li>
                <li> Technical architecture implementation</li>
                <li> Data collection and aggregation</li>
                <li> Automation</li>
              </ul>
            </div>

            <img src={placeholderImage} alt="" />
          </div>
          <div className="who-we-are__values-wrapper">
            <h1>Our Values</h1>
            <div className="who-we-are__info-cards-wrapper">
              {displayInfoCards()}
            </div>
          </div>
        </>
      )}
      {toggleType === 'ourstory' && (
        <>
          <p>
            KAD Consulting is made up of brilliant minds that have worked with
            Fortune 500 & 100 technology companies. We all share a common
            thought: what if we brought enterprise technology experience to
            growing brands so they can bridge the gap between where they are and
            where they would like to do business? Whether you're a visionary who
            aims to create a better world, a company that provides vital good
            and services, or a creator that is just starting your journey,
            technology should never stand between you and your goals. Sure, you
            can find easy solutions to get started, but that doesn’t mean it
            solves all your needs. Nor does it mean that you’ll come close to
            utilizing all its features. With all the clutter, tech can feel
            cumbersome. Maybe you’re looking to scale your business but have no
            idea if the “enterprise” solutions are meant for your brand's
            future. If you're looking to invest in scaling your business, you
            have to ensure it's time and money well spent for the road ahead and
            not just a new problem. We aim to close the gap between your brand
            and enterprises by providing you the technological expertise they've
            had access to for far too long. Our mission is simple: It’s time to
            level the playing field.
          </p>
          <img src="" alt="" />
        </>
      )}
    </div>
  );
};

export default WhoWeAre;
