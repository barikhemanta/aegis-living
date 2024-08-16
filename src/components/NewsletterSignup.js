import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('PLEASE COMPLETE THIS REQUIRED FIELD.');
    } else if (!validateEmail(email)) {
      setError('EMAIL MUST BE FORMATTED CORRECTLY.');
    } else {
      setError('');
      // Handle form submission here
    }
  };

  const handleBlur = () => {
    if (!email) {
      setError('PLEASE COMPLETE THIS REQUIRED FIELD.');
    } else if (!validateEmail(email)) {
      setError('EMAIL MUST BE FORMATTED CORRECTLYy.');
    } else {
      setError('');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="main-div">
      <div className="newsletter-signup">
        <p className="title">Stay Up to Date with Aegis Living</p>
        <p className="instructions">
          Enter your email address to receive monthly updates from Aegis Living.
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="email" className="email-label">YOUR EMAIL ADDRESS*</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            className={`email-input ${error ? 'error' : ''}`}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="subscribe-button">SUBSCRIBE</button>
        </form>
        <p className="disclaimer">
          *<a href="https://www.aegisliving.com/privacy-policy/">Click Here</a> for Aegis Living’s Privacy Policy regarding information you may provide us.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
