import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="newsletter-box">
      <h3 className="newsletter-box__heading">A little luxury in your inbox.</h3>
      <p className="newsletter-box__subtext">
        Receive early access to limited-edition botanical harvests, private events, and 10% off your first fragrance.
      </p>

      {submitted ? (
        <div className="newsletter-box__success" role="status">
          <CheckCircle2 size={18} strokeWidth={1.6} />
          <span>Thank you for subscribing. Welcome to the world of LUNÉA.</span>
        </div>
      ) : (
        <form className="newsletter-box__form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter-box__input-group">
            <input
              type="email"
              className={`newsletter-box__input ${error ? 'newsletter-box__input--error' : ''}`}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              aria-label="Enter your email address"
            />
            <button type="submit" className="newsletter-box__btn">
              SUBSCRIBE
            </button>
          </div>
          {error && <p className="newsletter-box__error">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Newsletter;

