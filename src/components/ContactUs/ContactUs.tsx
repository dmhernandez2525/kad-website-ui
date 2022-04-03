// Outside packages
import react, { useState } from 'react';

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
          <span>Contact Us</span>
          <span>KAD Consulting, LLC</span>
          <a href="tel:217-508-9193" aria-label="call 217-508-9193">
            217-508-9193
          </a>
          <a
            href="mailto:danher2525@gmail.com"
            aria-label="send an email to danher2525@gmail.com"
          >
            danher2525@gmail.com
          </a>
        </div>

        <div className="contact-us__form-wrapper">
          <span>Get In Touch</span>
          <div className="contact-us__form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <p>
        Take our FREE technology health assessment now to see how you stack up
        against the biggest companies out there.
      </p>
      <button>Quiz</button>
      <p>2022</p>
    </div>
  );
};

export default ContactUs;
