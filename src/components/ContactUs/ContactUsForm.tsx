// Outside packages
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Styles
import './ContactUs.scss';

const ContactUsForm = () => {
  // ====================
  // State
  // ====================
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();

  // ====================
  // Hooks
  // ====================
  const { width } = useWindowDimensions();

  // ====================
  // Variables
  // ====================
  const form: any = useRef();

  // ====================
  // State
  // ====================

  // ====================
  // Handle Methods
  // ====================
  const handleSendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7sy4d2s',
        'template_blk0pv6',
        form.current,
        'i1Fhd5I0bpuTjDvUL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  // ====================
  // Display Functions
  // ====================

  // ====================
  // Return
  // ====================
  // TODO: this needs to be cleaned up, make smaller reusable components
  if (width > 1000) {
    return (
      <div className="contact-us__main-form-wrapper">
        <div className="contact-us__main-form-contact-us">
          <h2>Contact Us</h2>
          <span>KAD Consulting, LLC</span>
          <a href="tel:‭303-819-1448" aria-label="call ‭303-819-1448">
            Phone: ‭303-819-1448‬
          </a>
          <a
            href="support@kadconsulting.it"
            aria-label="send an email to support@kadconsulting.it"
          >
            Email: support@kadconsulting.it
          </a>
        </div>

        <div className="contact-us__form-wrapper">
          <h2>Get In Touch</h2>
          <form ref={form} onSubmit={handleSendEmail}>
            <div className="contact-us__form">
              <div className="contact-us__form-item-wrapper">
                <div className="contact-us__form-item">
                  <label html-for="Name">Name</label>
                  <input
                    className="nameInput"
                    type="text"
                    id="Name"
                    name="name"
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
                    name="email"
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
                  name="subject"
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
                  name="message"
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
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contact-us__main-form-wrapper">
        <div className="contact-us__form-wrapper">
          <h2>Contact Us</h2>

          <div className="contact-us__header-info-wrapper">
            <span>KAD Consulting, LLC</span>

            <div className="contact-us__header-info-a-wrapper">
              <a href="tel:‭303-819-1448" aria-label="call ‭303-819-1448">
                Phone: ‭303-819-1448‬
              </a>
              <a
                href="support@kadconsulting.it"
                aria-label="send an email to support@kadconsulting.it"
              >
                Email: support@kadconsulting.it
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={handleSendEmail}>
            <div className="contact-us__form">
              <div className="contact-us__form-item-wrapper">
                <div className="contact-us__form-item">
                  <label html-for="Name">Name</label>
                  <input
                    className="nameInput"
                    type="text"
                    id="Name"
                    name="name"
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
                    name="email"
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
                  name="subject"
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
                  name="message"
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
          </form>
        </div>
      </div>
    );
  }
};

export default ContactUsForm;
