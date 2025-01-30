import React, { useState } from 'react';
import '../cssfiles/nav.css';

const RadioInputs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#Home">Kaizenyou</a>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#About" onClick={() => setMenuOpen(false)}>About Us</a>
            </li>
            <li>
              <a href="#Category" onClick={() => setMenuOpen(false)}>Events</a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setMenuOpen(false)}>Internships</a>
            </li>
            <li>
              <button className="Btn">
                <div className="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                  </svg>
                </div>
                <div className="text">Login</div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="button">
        <a href="#Home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default RadioInputs;
