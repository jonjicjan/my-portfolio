// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactTyped } from 'react-typed'; // Correct import
import '../App.css';  // Ensure this path is correct

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    // Mark the path as active if it matches the current location or is the home path by default
    return location.pathname === path || (path === '/' && location.pathname === '/');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light dark_bg_menu fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
           
              <ReactTyped   
                strings={[
                  "Welcome to My Site",
                  "Codebykhan99@....",
                  "My Portfolio"
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={2000}
                loop
              />
           
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={`nav-item ${isActive('/services') ? 'active' : ''}`}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              {/* Temp block this page >>>>>>> */}
              {/* <li className={`nav-item ${isActive('/portfolio') ? 'active' : ''}`}>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li> */}
             
              <li className={`nav-item ${isActive('/myprojects') ? 'active' : ''}`}>
                <Link className="nav-link" to="/myprojects">Projects</Link>
              </li>
            
              <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
