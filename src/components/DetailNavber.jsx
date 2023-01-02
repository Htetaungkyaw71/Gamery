import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faMicrophoneLines, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function DetailNavbar() {
  return (
    <div className="navbar-detail">
      <ul className="navbar-detail-list">
        <li className="navbar-item">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/">
            <h3>GAMERY</h3>
          </Link>
        </li>
        <li className="navbar-item">
          <FontAwesomeIcon icon={faMicrophoneLines} className="icon" />
          <FontAwesomeIcon icon={faGears} className="icon" />
        </li>
      </ul>
    </div>
  );
}

export default DetailNavbar;
