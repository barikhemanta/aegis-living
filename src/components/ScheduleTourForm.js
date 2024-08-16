import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ScheduleTourForm.css';

const ScheduleTourForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    if (!value) {
      setFormErrors({
        ...formErrors,
        [name]: 'Please complete this required field.',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    Array.from(e.target.elements).forEach((element) => {
      if (element.required && !element.value) {
        errors[element.name] = 'Please complete this required field.';
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0 && recaptchaValue) {
      // Submit the form
      alert('Form submitted successfully!');
    } else {
      if (!recaptchaValue) {
        errors.recaptcha = 'Please complete the reCAPTCHA.';
        setFormErrors(errors);
      }
    }
  };

  return (
    <div className="schedule-tour-form">
      <h2>Come Meet Us</h2>
      <p>We would love to show you around our community! Please submit the form below, and a marketing director will be in touch to confirm your appointment. If you have any questions in the meantime, don’t hesitate to call us.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <select name="community" required onBlur={handleBlur} defaultValue="">
            <option value="" disabled>Community</option>
            {/* Add your options here */}
          </select>
          {formErrors.community && touchedFields.community && <span className="error-message">{formErrors.community}</span>}
        </div>

        <div className="form-row half-width">
          <input type="date" name="tourDate" placeholder="Tour Date" required onBlur={handleBlur} className="custom-placeholder" />
          <input type="time" name="tourTime" placeholder="Tour Time" required onBlur={handleBlur} className="custom-placeholder" />
        </div>
        {(formErrors.tourDate && touchedFields.tourDate) || (formErrors.tourTime && touchedFields.tourTime) ? (
          <span className="error-message">{formErrors.tourDate || formErrors.tourTime}</span>
        ) : null}

        <div className="form-row half-width">
          <input type="text" name="firstName" placeholder="First Name" required onBlur={handleBlur} />
          <input type="text" name="lastName" placeholder="Last Name" required onBlur={handleBlur} />
        </div>
        {(formErrors.firstName && touchedFields.firstName) || (formErrors.lastName && touchedFields.lastName) ? (
          <span className="error-message">{formErrors.firstName || formErrors.lastName}</span>
        ) : null}

        <div className="form-row">
          <input type="text" name="relationship" placeholder="Relationship to Resident" required onBlur={handleBlur} />
          {formErrors.relationship && touchedFields.relationship && <span className="error-message">{formErrors.relationship}</span>}
        </div>

        <div className="form-row">
          <input type="email" name="email" placeholder="Email" required onBlur={handleBlur} />
          {formErrors.email && touchedFields.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="form-row">
          <input type="tel" name="mobile" placeholder="Mobile" required onBlur={handleBlur} />
          {formErrors.mobile && touchedFields.mobile && <span className="error-message">{formErrors.mobile}</span>}
        </div>

        <div className="form-row">
          <textarea className="message" name="message" placeholder="Message" required onBlur={handleBlur}></textarea>
          {formErrors.message && touchedFields.message && <span className="error-message">{formErrors.message}</span>}
        </div>

        <div className="form-row recaptcha-container">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your site key
            onChange={handleRecaptchaChange}
          />
          {formErrors.recaptcha && <span className="error-message">{formErrors.recaptcha}</span>}
        </div>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ScheduleTourForm;
