// Outside packages
import React, { useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

// Components
import Button from '../Button';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Styles
import './ContactUs.scss';

const ContactUsForm = () => {
  // ====================
  // State
  // ====================
  const [badSend, setBadSend] = useState(false);
  const [goodSend, setGoodSend] = useState(false);

  // ====================
  // Hooks
  // ====================
  const { width } = useWindowDimensions();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
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
  const handleBadSend = () => {
    setGoodSend(false);
    setBadSend(true);
    setTimeout(() => setBadSend(false), 5000);
  };

  const handleGoodSend = () => {
    setBadSend(false);
    setGoodSend(true);
    setTimeout(() => setGoodSend(false), 5000);
  };

  const handleClearForm = () => {
    reset();
    clearErrors();
  };

  const handleSendEmail = (data: any) => {
    emailjs
      .sendForm(
        'service_7sy4d2s',
        'template_blk0pv6',
        form.current,
        'i1Fhd5I0bpuTjDvUL'
      )
      .then(
        (result) => {
          reset();
          handleGoodSend();
        },
        (error) => {
          handleBadSend();
        }
      );
  };

  // ====================
  // Display Functions
  // ====================
  const displayFormMessage = () => {
    if (badSend) {
      return (
        <span className="contact-us__form-error-message">
          There was an error with submitting this form please try again.
        </span>
      );
    } else if (goodSend) {
      return (
        <span className="contact-us__form-good-message">
          Form successfully submitted!
        </span>
      );
    }
  };

  const formMessage = useMemo(() => displayFormMessage(), [badSend, goodSend]);
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

          {formMessage}

          <form ref={form} onSubmit={handleSubmit(handleSendEmail)}>
            <div className="contact-us__form">
              <div className="contact-us__form-item-wrapper">
                <div className="contact-us__form-item">
                  <label html-for="Name">Name</label>
                  <input
                    className="nameInput"
                    type="text"
                    id="Name"
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <span className="contact-us__form-error-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="contact-us__form-item">
                  <label html-for="Email">Email</label>
                  <input
                    type="text"
                    id="Email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="contact-us__form-error-message">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-us__form-item">
                <label html-for="Subject">Subject</label>
                <input
                  type="text"
                  id="Subject"
                  {...register('subject', { required: true })}
                />
                {errors.subject && (
                  <span className="contact-us__form-error-message">
                    This field is required
                  </span>
                )}
              </div>

              <div className="contact-us__form-item">
                <label html-for="Message">Message</label>
                <input
                  type="text"
                  id="Message"
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <span className="contact-us__form-error-message">
                    This field is required
                  </span>
                )}
              </div>

              <div className="contact-us__button-wrapper">
                <Button
                  classname="contact-us__button-submit"
                  text="Submit"
                  size="large"
                />
                <Button
                  classname="contact-us__button-clear"
                  text="Clear"
                  size="large"
                  type="tertiary"
                  onclick={() => handleClearForm()}
                />
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
          {formMessage}
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

          <form ref={form} onSubmit={handleSubmit(handleSendEmail)}>
            <div className="contact-us__form">
              <div className="contact-us__form-item-wrapper">
                <div className="contact-us__form-item">
                  <label html-for="Name">Name</label>
                  <input
                    className="nameInput"
                    type="text"
                    id="Name"
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <span className="contact-us__form-error-message">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="contact-us__form-item">
                  <label html-for="Email">Email</label>
                  <input
                    type="text"
                    id="Email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="contact-us__form-error-message">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-us__form-item">
                <label html-for="Subject">Subject</label>
                <input
                  type="text"
                  id="Subject"
                  {...register('subject', { required: true })}
                />
                {errors.subject && (
                  <span className="contact-us__form-error-message">
                    This field is required
                  </span>
                )}
              </div>

              <div className="contact-us__form-item">
                <label html-for="Message">Message</label>
                <input
                  type="text"
                  id="Message"
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <span className="contact-us__form-error-message">
                    This field is required
                  </span>
                )}
              </div>

              <div className="contact-us__button-wrapper">
                <Button
                  classname="contact-us__button-submit"
                  text="Submit"
                  size="large"
                />
                <Button
                  classname="contact-us__button-clear"
                  text="Clear"
                  size="large"
                  type="tertiary"
                  onclick={() => handleClearForm()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ContactUsForm;
