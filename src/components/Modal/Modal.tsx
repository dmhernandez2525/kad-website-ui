import React, { useState } from 'react';
import classnames from 'classnames';

// Styles
import './Modal.scss';

const Modal = ({ children, buttonText }: any) => {
  // Get the modal
  var modal: any = document.getElementById('myModal');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      handleClose();
    }
  };
  // ====================
  // State
  // ====================
  const [open, setOpen] = useState(false);

  // ====================
  // Variables
  // ====================

  // ====================
  // Handle Methods
  // ====================
  const handleClose = () => {
    setOpen(false);
    modal.style.display = 'none';
  };

  const handleOpen = () => {
    setOpen(true);
    modal.style.display = 'block';
  };

  // ====================
  // Display Functions
  // ====================

  // ====================
  // Return
  // ====================

  return (
    <div>
      <button className="modal__button" onClick={handleOpen} id="myBtn">
        {buttonText}
      </button>

      <div
        id="myModal"
        className={classnames({ modal: true, modal__open: open })}
      >
        <div className="modal-content">
          <span onClick={handleClose} className="close">
            &times;
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;