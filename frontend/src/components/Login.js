import React, { useState } from 'react';
import { login } from '../apiService';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement your login logic here
    try {
      const response = await login(formData);
      localStorage.setItem('token', response.token);
      window.location.href = '/dashboard';  // Redirect to dashboard
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <a href="/" className="header-logo">
            <img src={`${process.env.PUBLIC_URL}/images/feedflick-logo.svg`} alt="Feedflick Logo" />
            <span>feedflick</span>
          </a>
          <nav className={menuOpen ? 'active' : ''}>
            <ul>
              <li><a href="/publish">Publish</a></li>
              <li><a href="/engage">Engage</a></li>
              <li><a href="/socials">Socials</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
	<h5 className="text">Don’t have an account?</h5>
        <div className="auth-buttons">
          <button>
            <a href="/signup">Get Started <span className="arrow">→</span></a>
          </button>
        </div>
      </header>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form-grid">
          <h4 className="login-form-title">Login Here </h4>
          <div className="login-form">
            <label>Email:</label>
            <input
              type="email"
              name="email"
	      placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
	      required
            />
          </div>
          <div className="login-form">
            <label>Password:</label>
	    <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
	      placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
	      required
            />
	    <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
	      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
	    </span>
	    </div>
	  </div>
	  {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="button-group">
            <button type="submit">Login </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

