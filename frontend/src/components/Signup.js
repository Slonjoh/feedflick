import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signup } from '../apiService';
import './Signup.css';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    if (location.state && location.state.email) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: location.state.email
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      console.log('Signup successful:', response);
      navigate('/login');  // Redirect to login page after successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <a href="/" className="header-logo">
            <img src={`${process.env.PUBLIC_URL}/images/feedflick-logo.svg`} alt="Feedflick Logo" />
            <span>feedflick</span>
          </a>
          <nav>
            <ul>
              <li><a href="/publish">Publish</a></li>
              <li><a href="/engage">Engage</a></li>
              <li><a href="/socials">Socials</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </nav>
        </div>
        <div className="auth-buttons">
          <button>
            <a href="/login">Login <span className="arrow">→</span></a>
          </button>
        </div>
      </header>
      <div className="signup-container">
        <img src={`${process.env.PUBLIC_URL}/images/signup_img.jpg`} alt="Signup" />
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="form-grid">
            <h4 className="form-title">Get Started Now</h4>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="first_name" placeholder="Enter first name" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="last_name" placeholder="Enter last name" value={formData.last_name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group full-width">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

