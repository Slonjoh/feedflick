import React from 'react';
import './Section.css';

function Section({ className, title, text }) {
  return (
    <div className={`moving-div ${className}`}>
      <p><span className="head1">{title}</span></p>
      <p>{text}</p>
    </div>
  );
}

export default Section;

