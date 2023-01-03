import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <h3>GAMERY</h3>
        </li>
        <li className="navbar-item">
          <FontAwesomeIcon icon={faMicrophoneLines} className="icon" />
          <FontAwesomeIcon icon={faGears} className="icon" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
