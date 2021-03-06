// Outside packages
import React from 'react';

// Components
import ContactUsForm from './ContactUsForm';

// Images
import Logo from '../../images/kadLogoBlack.svg';

// Styles
import './ContactUs.scss';

const ContactUs = ({ hasFooter }: any) => {
  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================

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
    <div id="contact" className="contact-us">
      <ContactUsForm />
      {hasFooter && (
        <>
          {/* <p>
            Take our FREE technology health assessment now to see how you stack
            up against the biggest companies out there.
          </p>
          <div>
            <Button
              type="secondary"
              size="large"
              classname="contact-us__button"
              text="Quiz"
            />
          </div> */}

          <footer>
            <img className="contact-us__logo" src={Logo} alt="kad logo" />
            <p> &copy; 2022</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default ContactUs;
