import React from 'react';
import './ProfileIcon.css';

function ProfileIcon({ firstName, lastName, profilePictureUrl, onClick }) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return (
    <div className="profile-icon" onClick={onClick}>
      {profilePictureUrl ? (
        <img src={profilePictureUrl} alt="Profile" />
      ) : (
        <div className="profile-initials">{initials}</div>
      )}
    </div>
  );
}

export default ProfileIcon;

