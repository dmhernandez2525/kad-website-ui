// Outside packages
import react from 'react';

// Components
import Card from '../Card';

// Styles
import './ToolsOfTheTrade.scss';

const ToolsOfTheTrade = () => {
  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================
  const allSections = [
    {
      sectionTitles: `Platforms`,
      icons: [],
    },
    {
      sectionTitles: `Tools & Frameworks`,
      icons: [],
    },
    {
      sectionTitles: `Languages`,
      icons: [],
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
  const displayAllSections = () => {
    return allSections.map((sectionInfo) => {
      const { sectionTitles, icons } = sectionInfo;
      const allIcons = icons.map((icon) => <img src={icon} alt="" />);

      return (
        <div>
          <h3>{sectionTitles}</h3>
          <Card>
            <div>{allIcons}</div>
          </Card>
        </div>
      );
    });
  };
  // ====================
  // Return
  // ====================

  return (
    <div className="tools-of-the-trade">
      <h2>Tools of the Trade</h2>

      <p>
        We know there's no such thing as "one size fits all." That's why we are
        always learning the newest technologies. We ensure that your custom
        solution not only solves your current challenges, but your future ones
        too.
      </p>
      {displayAllSections()}
    </div>
  );
};

export default ToolsOfTheTrade;
