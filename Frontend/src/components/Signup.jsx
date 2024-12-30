import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Please provide name, email, and password');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        setError('');
        console.log('Submitting Sign Up with data:', { name, email, password });  // Debugging log
        const response = await axios.post('http://localhost:2200/api/auth/signup', {
          name,
          email,
          password,
        });
        console.log('Sign Up Response:', response.data);  // Log the response data

        // Redirect to login page after successful signup
        navigate('/login');
      } catch (err) {
        console.error('Sign Up Error:', err);  // Log any errors for debugging
        setError(err.response?.data?.message || 'Error during sign up');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {/* Name Field */}
        <div className="form-group">
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>

        {error && <p className="error-message">{error}</p>}

        <div className="signup-link">
          <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
