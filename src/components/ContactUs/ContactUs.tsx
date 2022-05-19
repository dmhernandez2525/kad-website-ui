// Outside packages
import react, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
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
          <p>
            Take our FREE technology health assessment now to see how you stack
            up against the biggest companies out there.
          </p>
          <div>
            <button className="contact-us__button">Quiz</button>
          </div>

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
