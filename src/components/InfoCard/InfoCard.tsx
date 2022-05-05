// Outside packages
import react from 'react';

// Components

// Styles
import './InfoCard.scss';

interface IInfoCardProps {
  headerFirst: string;
  headerSecond: string;
  mainSection: string;
}
const InfoCard = ({
  headerFirst,
  headerSecond,
  mainSection,
}: IInfoCardProps) => {
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
    <div className="info-card">
      <div className="info-card__header-text">
        <span className="info-card__first-text">{`${headerFirst} `}</span>
        <span className="info-card__second-text">{headerSecond}</span>
      </div>
      <div className="info-card__main-section">
        <p>{mainSection}</p>
      </div>
    </div>
  );
};

export default InfoCard;
