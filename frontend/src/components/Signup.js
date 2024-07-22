import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-logo">
            <img src={`${process.env.PUBLIC_URL}/images/feedflick-logo.svg`} alt="Feedflick Logo" />
            <span>feedflick</span>
          </div>
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
        <div className="auth-buttons">
          <button>
            <a href="/login">Login <span className="arrow">→</span></a>
          </button>
          <button>
            <a href="/signup">Get Started <span className="arrow">→</span></a>
          </button>
        </div>
      </header>
      <div className="signup-container">
        <img src={`${process.env.PUBLIC_URL}/images/signup_img.jpg`} alt="Signup" />
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="form-grid">
            <h4 className="form-title">Get Started Now</h4>
            <div className="form-group">
              <label>Firstname</label>
              <input type="text" name="firstname" placeholder="Enter first name" value={formData.firstname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input type="text" name="lastname" placeholder="Enter last name" value={formData.lastname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label><b>Who are you?</b></label>
              <div className="radio-group">
                <label htmlFor="business">
                  <input type="radio" id="business" name="userType" value="business" checked={formData.userType === 'business'} onChange={handleChange} />
                  A business to grow social presence
                </label>
              </div>
              <div className="radio-group">
                <label htmlFor="individual">
                  <input type="radio" id="individual" name="userType" value="individual" checked={formData.userType === 'individual'} onChange={handleChange} />
                  An individual looking to improve my engagement
                </label>
              </div>
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

