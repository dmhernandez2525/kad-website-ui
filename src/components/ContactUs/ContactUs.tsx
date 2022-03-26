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
    <div className="contact-us">
      <div>
        <div>
          <span>Contact Us</span>
          <span>KAD Consulting, LLC</span>
          <input type="email" name="" id="" />
          <input type="tel" name="" id="" />
        </div>

        <div>
          <span>Get In Touch</span>
          <div>
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
