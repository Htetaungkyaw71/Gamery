import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
          <div className="dropdown">
            <button className="dropbtn" type="button">Browse games</button>
            <div className="dropdown-content">
              <Link to="/shooter">Shooter</Link>
              <Link to="/anime">Anime</Link>
              <Link to="/racing">Racing</Link>
              <Link to="/social">Social</Link>
              <Link to="/sports">Sports</Link>
              <Link to="/mmorpg">MMORPG</Link>
              <Link to="/sci-fi">Sci-fi</Link>
              <Link to="/fantasy">Fantasy</Link>
              <Link to="/strategy">Strategy</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DetailNavbar;
