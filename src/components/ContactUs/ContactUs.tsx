// Outside packages
import react, { useState } from 'react';

// Images
import Logo from '../../images/kadLogoBlack.svg';

// Styles
import './ContactUs.scss';

const ContactUs = () => {
  // ====================
  // State
  // ====================
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [subject, setSubject] = useState<any>();
  const [message, setMessage] = useState<any>();
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
      <div className="contact-us__main-form-wrapper">
        <div className="contact-us__main-form-contact-us">
          <h2>Contact Us</h2>
          <span>KAD Consulting, LLC</span>
          <a href="tel:217-508-9193" aria-label="call 217-508-9193">
            Phone: 217-508-9193
          </a>
          <a
            href="mailto:danher2525@gmail.com"
            aria-label="send an email to danher2525@gmail.com"
          >
            Email: danher2525@gmail.com
          </a>
        </div>

        <div className="contact-us__form-wrapper">
          <h2>Get In Touch</h2>
          <div className="contact-us__form">
            <div className="contact-us__form-item-wrapper">
              <div className="contact-us__form-item">
                <label html-for="Name">Name</label>
                <input
                  className="nameInput"
                  type="text"
                  id="Name"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </div>
              <div className="contact-us__form-item">
                <label html-for="Email">Email</label>
                <input
                  type="text"
                  id="Email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="contact-us__form-item">
              <label html-for="Subject">Subject</label>
              <input
                type="text"
                id="Subject"
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSubject(e.target.value)
                }
              />
            </div>

            <div className="contact-us__form-item">
              <label html-for="Message">Message</label>
              <input
                type="text"
                id="Message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMessage(e.target.value)
                }
              />
            </div>

            <div className="contact-us__button-wrapper">
              <button className="contact-us__button">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <p>
        Take our FREE technology health assessment now to see how you stack up
        against the biggest companies out there.
      </p>
      <div>
        <button className="contact-us__button">Quiz</button>
      </div>

      <footer>
        <img className="contact-us__logo" src={Logo} alt="kad logo" />
        <p> &copy; 2022</p>
      </footer>
    </div>
  );
};

export default ContactUs;
