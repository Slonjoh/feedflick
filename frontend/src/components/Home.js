import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <header className="App-header">
        <h2 className="font-effect-3d-float logo" style={{ color: 'lightblue' }}>Feedflick</h2>
        <nav>
          <ul>
            <li><a href="/publishing">Publishing</a></li>
            <li><a href="/socials">Socials</a></li>
            <li><a href="/engagements">Engagements</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="intro">
          <h1>Expand your audience with our powerful management solutions</h1>
          <p>An all-in-one social media management platform, Feedflick, unlocks the full potential of social media, transforming your marketing strategy in every aspect of your organization, while helping you build an audience organically.</p>
          <input type="email" placeholder="enter your email" />
          <button onClick={handleGetStartedClick}>Get Started now</button>
        </section>
        <section className="features">
          <div>
            <h3>Grow your followers</h3>
            <p>Increasing your followers count is crucial for expanding your brand's reach and visibility. By growing your followers, you're effectively widening your audience base, which can lead to increased brand awareness and exposure. More followers mean more people are exposed to your products or services, thereby enhancing the likelihood of attracting potential customers.</p>
          </div>
          <div>
            <h3>Increase your engagements</h3>
            <p>Engagements on social media platforms, such as likes, comments, shares, and interactions, are essential indicators of audience interest and interaction with your brand. Increased engagements not only signify active interest in your content but also provide valuable insights into your audience's preferences and behaviors.</p>
          </div>
          <div>
            <h3>Analyze your performance</h3>
            <p>Evaluating and analyzing your social media performance is a pivotal step towards optimizing your marketing strategies and maximizing sales and profits. By carefully examining key metrics such as engagement rates, follower growth, content reach, and conversion rates, you gain valuable insights into what's working well and where improvements can be made.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

