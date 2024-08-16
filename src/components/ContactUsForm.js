import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUsForm.css';

const ContactUsForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    Array.from(e.target.elements).forEach((element) => {
      if (element.required && !element.value) {
        errors[element.name] = 'Please complete this required field.';
      }
    });

    if (!captchaValue) {
      errors.captcha = 'Please complete the reCAPTCHA.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit the form
      alert('Form submitted successfully!');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="contact-us-form">
      <h2>Let's Talk</h2>
      <p>Please complete the Contact Us form, and we’ll have the right person reach out to you.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <select name="inquiry" required onBlur={handleBlur} defaultValue="">
            <option value="" disabled>What Can We Help You With?*</option>
            <option value="Future Resident Family Inquiry">Future Resident/Family Inquiry</option>
            <option value="Current Resident Family Member">Current Resident Family Member</option>
            <option value="Business Partner">Business Partner</option>
            <option value="Job Candidate">Job Candidate</option>
            <option value="Volunteer Opportunities">Volunteer Opportunities</option>
            <option value="Business Request">Business Request</option>
          </select>
          {formErrors.inquiry && touchedFields.inquiry && <span className="error-message">{formErrors.inquiry}</span>}
        </div>

        <div className="form-row half-width">
          <input type="text" name="firstName" placeholder="First Name" required onBlur={handleBlur} />
          <input type="text" name="lastName" placeholder="Last Name" required onBlur={handleBlur} />
        </div>
        {(formErrors.firstName && touchedFields.firstName) || (formErrors.lastName && touchedFields.lastName) ? (
          <span className="error-message">{formErrors.firstName || formErrors.lastName}</span>
        ) : null}

        <div className="form-row">
          <input type="email" name="email" placeholder="Email" required onBlur={handleBlur} />
          {formErrors.email && touchedFields.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="form-row">
          <input type="tel" name="mobile" placeholder="Phone Number" required onBlur={handleBlur} />
          {formErrors.mobile && touchedFields.mobile && <span className="error-message">{formErrors.mobile}</span>}
        </div>

        <div className="form-row">
          <textarea className="message" name="message" placeholder="Message" required onBlur={handleBlur}></textarea>
          {formErrors.message && touchedFields.message && <span className="error-message">{formErrors.message}</span>}
        </div>

        <div className="form-row recaptcha-container">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
            style={{ width: '256px', height: '60px' }}
          />
          {formErrors.captcha && <span className="error-message">{formErrors.captcha}</span>}
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
