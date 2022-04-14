// Outside packages
import react from 'react';

// Components

// Images
import ProcessCircle from '../../images/processCircle.svg';

// Styles
import './InfoCard.scss';

interface IInfoCardProps {
  headerFirst: string;
  headerSecond: string;
  mainSection: string;
  icon: string;
}
const InfoCard = ({
  headerFirst,
  headerSecond,
  mainSection,
  icon,
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
      <span className="info-card__first-text">{headerFirst}</span>
      <span className="info-card__second-text">{headerSecond}</span>

      <p>{mainSection}</p>

      <i className={icon}></i>

      {/* <img className="info-card__process-circle" src={ProcessCircle} alt="" /> */}
    </div>
  );
};

export default InfoCard;
