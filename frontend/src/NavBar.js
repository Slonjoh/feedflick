import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-main">
      <div className="icon">
        <h2 className="font-effect-3d-float logo" style={{ color: 'blue' }}>Feedflick </h2>
        <i className="fa fa-pie-chart" aria-hidden="true"></i>
      </div>
      <ul className="nav-ul">
        <li className="list1"><a className="pub general" href="publishing.html">Publishing</a></li>
        <li className="list1"><a className="socs general" href="socials.html">Socials</a></li>
        <li className="list1"><a className="engage general" href="engagements.html">Engagements</a></li>
        <li className="list1"><a className="resource general" href="resources.html">Resources</a></li>
      </ul>
      <div className="register">
        <button className="login"><a className="general" href="./login.html">Login</a></button>
        <button className="signup"><a className="general" href="./signup.html">Get Started now</a></button>
      </div>
      <div className="bar"><i className="fa fa-align-left" aria-hidden="true"></i></div>
    </nav>
  );
}

export default NavBar;
