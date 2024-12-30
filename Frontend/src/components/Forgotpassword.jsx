import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    
    // Simple validation to check if email is filled
    if (email === '') {
      setError('Please enter your email address');
      setSuccessMessage('');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setSuccessMessage('');
    } else {
      // Call API to send password reset email (simulation here)
      console.log('Password reset link sent to:', email);
      setSuccessMessage('A password reset link has been sent to your email.');
      setError('');
    }
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handlePasswordReset} className="forgot-password-form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </>
  );
}

export default ForgotPassword;
