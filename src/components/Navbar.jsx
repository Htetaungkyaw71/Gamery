import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
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

export default Navbar;
