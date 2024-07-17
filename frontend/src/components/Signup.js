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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
        <img src={`${process.env.PUBLIC_URL}/images/feedflick-logo.png`} alt="Feedflick Logo" className="signup-logo" />
        <nav>
          <ul>
            <li><a href="/publish">Publish</a></li>
            <li><a href="/engage">Engage</a></li>
            <li><a href="/socials">Socials</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
        <div className="signup-nav-buttons">
          <a href="/login" className="nav-button login-button">Login</a>
          <a href="/signup" className="nav-button get-started-button">Get Started</a>
        </div>
      </header>
      <main>
        <section className="signup-form-section">
          <form className="signup-form" onSubmit={handleSubmit}>
            <label>
              Firstname
              <input
                type="text"
                name="firstname"
                placeholder="Enter first name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Lastname
              <input
                type="text"
                name="lastname"
                placeholder="Enter last name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Username
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
            <div className="user-type-section">
              <p>Who are you?</p>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="business"
                  checked={formData.userType === 'business'}
                  onChange={handleChange}
                />
                A business to grow social presence
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="individual"
                  checked={formData.userType === 'individual'}
                  onChange={handleChange}
                />
                An individual looking to improve my engagement
              </label>
            </div>
            <button type="submit">Get Started</button>
          </form>
        </section>
        <section className="signup-image-section">
          <img src={`${process.env.PUBLIC_URL}/images/signup_img.jpg`} alt="Signup Illustration" />
        </section>
      </main>
    </div>
  );
}

export default Signup;

