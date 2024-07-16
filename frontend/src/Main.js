import React from 'react';
import './Main.css';
import Section from './Section';

function Main() {
  return (
    <main>
      <div className="container1">
        <div className="c1-child1">
          <p className="audience">Expand your audience <br className="noshow"/>with our powerful <br className="noshow"/>management solutions</p>
          <p className="potential">
            An all-in-one social media management platform, Feedflick, unlocks the full potential of social media, transforming your marketing strategy in every aspect of your organization, while helping you build an audience organically.
          </p>
          <input type="email" placeholder="enter your email" id="new-email"/>
          <button className="signup page-signup"><a className="general" href="./signup.html">Get Started now</a></button>
        </div>
        <div className="c1-child2">
          <img className="img1" src="./public/images/Cyfe-social-media-dashboard.jpg" alt="Dashboard"/>
        </div>
      </div>

      <Section
        className="container2"
        title="Grow your followers"
        text="Increasing your followers count is crucial for expanding your brand's reach and visibility. By growing your followers, you're effectively widening your audience base, which can lead to increased brand awareness and exposure. More followers mean more people are exposed to your products or services, thereby enhancing the likelihood of attracting potential customers."
      />
      <Section
        className="container2"
        title="Increase your engagements"
        text="Engagements on social media platforms, such as likes, comments, shares, and interactions, are essential indicators of audience interest and interaction with your brand. Increased engagements not only signify active interest in your content but also provide valuable insights into your audience's preferences and behaviors."
      />
      <Section
        className="container2"
        title="Analyze your performance"
        text="Evaluating and analyzing your social media performance is a pivotal step towards optimizing your marketing strategies and maximizing sales and profits. By carefully examining key metrics such as engagement rates, follower growth, content reach, and conversion rates, you gain valuable insights into what's working well and where improvements can be made."
      />

      <div className="container1 container3">
        <div className="c1-child1">
          <p className="audience">Publish your post</p>
          <p className="potential">
            Effortlessly plan, create, collaborate, manage and deliver your social media content and campaigns.
          </p>
        </div>
        <div className="c1-child2">
          <img className="img2" src="./images/socials-1.webp" alt="Socials"/>
        </div>
      </div>

      <div className="container1 container4">
        <div className="c1-child2">
          <img className="img2" src="./images/engagement1.png" alt="Engagement"/>
        </div>
        <div className="c1-child1">
          <p className="audience">Increase your Engagements</p>
          <p className="potential">
            Understanding and responding to your audience's interactions, you can tailor your marketing strategies more effectively, resulting in higher conversion rates and increased sales.
          </p>
        </div>
      </div>

      <div className="container5">
        <img className="img5" src="./images/engagement2.png" alt="Engagement"/>
        <img className="img6" src="./images/Social-Media-Icons-1024x675.jpg" alt="Icons"/>
        <img className="img5" src="./images/images.jpeg" alt="Social Media"/>
      </div>

      <div className="container1 container6">
        <div className="c1-child1">
          <p className="audience">Analyze your performance</p>
          <p className="potential">
            A data-driven approach to analyzing your social media performance empowers you to make informed decisions that lead to increased sales, improved profitability, and sustainable business growth.
          </p>
        </div>
        <div className="c1-child2">
          <img className="img2" src="./images/Social-media-overview-dashboard-followers.png" alt="Dashboard"/>
        </div>
      </div>
    </main>
  );
}

export default Main;

