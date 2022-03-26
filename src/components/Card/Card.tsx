// Outside packages
import react from 'react';

// Components

// Styles
import './Card.scss';

interface ICardProps {
  children: any;
}
const Card = ({ children }: ICardProps) => {
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

  return <div className="card">{children}</div>;
};

export default Card;
