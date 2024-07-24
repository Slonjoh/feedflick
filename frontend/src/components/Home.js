import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetStartedClick = () => {
    navigate('/signup', { state: { email } });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
          <div className="auth-buttons">
            <button>
              <a href="/login">Login <span className="arrow">→</span></a>
            </button>
          </div>
        </header>
        <main>
          <section className="intro">
            <div className="intro-content">
              <div className="intro-video">
                <video src={`${process.env.PUBLIC_URL}/images/homepage_video.mp4`} autoPlay loop muted />
              </div>
              <div className="intro-text">
                <h1>Up your social media game with Feedflick</h1>
                <p>
                  A solution for anyone aiming for internet fame,
                  an organization looking to amplify your reach,
                  Feedflick is the ultimate social media management platform
                  that transforms your marketing game
                  by tracking key metrics and expanding your influence online.
                </p>
                <input
                  type="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button onClick={handleGetStartedClick}>Get Started now</button>
              </div>
            </div>
          </section>

          <section className="features">
            <div>
              <h3>Publish your post</h3>
              <p>Effortlessly schedule and publish your posts with Feedflick! Our platform helps you to plan ahead, ensuring your content goes live exactly when you want. Stay consistent, save time, and enjoy consistent engagement without the hassle.</p>
            </div>
            <div>
              <h3>Analyze your online performance</h3>
              <p>Feedflick provides in-depth analysis of your online engagement. Monitor views, likes, comments and reposts to understand your audience and help you create contents that interest your audience.</p>
            </div>
            <div>
              <h3>Live Notifications</h3>
              <p>Feedflick ensures you're always connected. Receive live notifications from your various social media platform  DMs and quickly reply to important messages, keeping you engaged with your followers.</p>
            </div>
          </section>

          <section className="dashboard-feature">
            <div className="dashboard-feature-text">
              <h2>Post, New Notification, Feedflick</h2>
              <p>Too busy to post? Just schedule it.</p>
              <p>It's much hassle staying updated on trending updates on all your socials? All you need is feedflick to keep you updated.</p>
              <p>100's of unanswered messages? Let's organize them to one dashboard for you.</p>
              <p>Feedflick helps you track posts, set up schedules, and get pinged for new messages. Stay connected and make every post count.</p>
            </div>
            <div className="dashboard-feature-image">
              <img src={`${process.env.PUBLIC_URL}/images/publish-dashboard.webp`} alt="Publish Dashboard" />
            </div>
          </section>

          <section className="experience">
            <h2>The Experience</h2>
            <div className="experience-content">
              <div className="experience-item">
                <img src={`${process.env.PUBLIC_URL}/images/graph.svg`} alt="Icon 1" />
                <p>Insightful analytics to elevate your social game and drive business growth.</p>
              </div>
              <div className="experience-item">
                <img src={`${process.env.PUBLIC_URL}/images/global_community.svg`} alt="Icon 2" />
                <p>Discover your audience and amplify your reach globally.</p>
              </div>
              <div className="experience-item">
                <img src={`${process.env.PUBLIC_URL}/images/handshake.svg`} alt="Icon 3" />
                <p>Build a stronger online community.</p>
              </div>
            </div>
          </section>

          <footer className="footer">
            <p>&copy; Slonjoh 2024</p>
          </footer>

        </main>
      </div>
    </>
  );
}

export default Home;

