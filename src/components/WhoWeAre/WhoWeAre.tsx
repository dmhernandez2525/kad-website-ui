// Outside packages
import react from 'react';

// Components
import InfoCard from '../InfoCard';

// Styles
import './WhoWeAre.scss';

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
  // State
  // ====================

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
    <div>
      <h1>Who We Are</h1>

      <p>
        KAD Consulting is a full-stack ERP development and strategy partner for
        growing brands. We aim to give them access to advanced technology and
        the expertise to implement it so they can compete with the largest
        companies out there without fear of having an ecosystem that can't keep
        up.
      </p>

      <span>KAD specializes in:</span>
      <ul>
        <li> Full-stack web and mobile experiences</li>
        <li> Business applications</li>
        <li> Technical architecture implementation</li>
        <li> Data collection and aggregation</li>
        <li> Automation</li>
      </ul>

      <h1>Our Values</h1>
      <div className="who-we-are__info-cards-wrapper">{displayInfoCards()}</div>
    </div>
  );
};

export default WhoWeAre;
