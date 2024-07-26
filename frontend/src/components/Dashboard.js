import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../apiService';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('post');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Fetch user data from the backend api
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        setFirstName(userData.first_name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'post':
        return <Post />;
      case 'notifications':
        return <Notifications />;
      case 'analysis':
        return <Analysis />;
      default:
        return <Post />;
    }
  };

  return (
    <>
      <header>
        <div className="header-content">
	  <div className="header-user">
	    <span>Hi {firstName},</span>
	  </div>

          <a href="/" className="header-logo">
            <img src={`${process.env.PUBLIC_URL}/images/feedflick-logo.svg`} alt="Feedflick Logo" />
            <span>feedflick</span>
          </a>
        </div>
        <nav className="top-nav">
          <ul>
            <li onClick={() => setActiveTab('post')} className={activeTab === 'post' ? 'active' : ''}>Post</li>
            <li onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>New</li>
            <li onClick={() => setActiveTab('analysis')} className={activeTab === 'analysis' ? 'active' : ''}>Feedflick</li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </>
  );
}

function Post() {
  return (
    <div>
      <h1>Publish through each social media</h1>
      <p>This is where you can publish posts to Facebook, Instagram, Twitter, and LinkedIn.</p>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h1>All Notifications</h1>
      <p>Displays all notifications like comments, messages, likes on each social media platform.</p>
    </div>
  );
}

function Analysis() {
  return (
    <div>
      <h1>Feedflick Analysis</h1>
      <p>Line graph of all social media views, likes, and reposts. Users can select the platform to view analysis for Facebook, Twitter, Instagram, and LinkedIn.</p>
    </div>
  );
}

export default Dashboard;

