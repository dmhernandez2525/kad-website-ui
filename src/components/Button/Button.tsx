// Outside packages
import React from 'react';
import classnames from 'classnames';

// Styles
import './Button.scss';

// Interface
interface IButtonProps {
  text: string;
  onclick?: () => void;
  size: 'small' | 'medium' | 'large';
  id?: string;
  classname?: string;
}

// ====================
// Component
// ====================
const Button = ({ text, id, onclick, classname, size }: IButtonProps) => {
  // ====================
  // Custom Hooks
  // ====================

  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================

  // ====================
  // Use Effect
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
    <button
      className={classnames({
        button: true,
        [`${classname}`]: true,
        button__small: size === 'small',
        button__medium: size === 'medium',
        button__large: size === 'large',
      })}
      onClick={onclick}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
