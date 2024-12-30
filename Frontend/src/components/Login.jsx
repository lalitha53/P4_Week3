import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import navigate to redirect

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      try {
        // Log the data sent to the backend for debugging
        console.log('Login Request Data:', { email, password });

        // Send login request to backend
        const response = await axios.post('http://localhost:2200/api/auth/login', {
          email,
          password,
        });

        // Log the response for debugging
        console.log('Login Response:', response.data);

        // If login successful, save token and navigate to dashboard or home page
        localStorage.setItem('token', response.data.token); // Store the token in localStorage
        navigate('/dashboard'); // Redirect to the dashboard (or home page)
      } catch (err) {
        console.error('Login Error:', err);  // Log the error for debugging
        setError(err.response?.data?.message || 'Login failed');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Sign In</button>
        {error && <p className="error-message">{error}</p>}

        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div className="signup-link">
          <p>Dont have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
