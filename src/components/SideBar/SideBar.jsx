import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Create this file for styling

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-name'>
          Zachary Pelham
        </div>
        <div className='sidebar-pages'>
          <div className='sidebar-section-title'>
            MY JOURNEY
          </div>
          <div className='sidebar-pages-about'>
            <Link to="/about">About</Link>
          </div>
          <div className='sidebar-pages-career-timeline'>
            <Link to="/career-timeline">Career Timeline</Link>
          </div>
          <div className='sidebar-pages-projects'>
            <Link to="/projects">Projects</Link>
          </div>
          <div className='sidebar-pages-cv'>
            <Link to="/cv">CV</Link>
          </div>
        </div>
        <div className='sidebar-contacts'>
          <div className='sidebar-section-title'>
            CONNECT WITH ME
          </div>
          <div className='sidebar-contacts-email'>
            <a href="mailto:zdpelham@gmail.com">Email</a>
          </div>
          <div className='sidebar-contacts-email'>
          <a href="https://www.linkedin.com/in/zachary-pelham-200a06252" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className='sidebar-contacts-email'>
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;