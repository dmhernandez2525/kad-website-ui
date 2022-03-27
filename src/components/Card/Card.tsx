// Outside packages
import react from 'react';
import classnames from 'classnames';
// Components

// Styles
import './Card.scss';

interface ICardProps {
  children: any;
  className: string;
}
const Card = ({ children, className }: ICardProps) => {
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
    <div
      className={classnames({
        [className]: true,
        card: true,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
