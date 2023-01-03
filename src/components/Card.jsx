import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faChrome } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ game }) {
  return (
    <div className="col">
      <Link to={`/${game.id}`}>
        <div className="card">
          <img src={game.thumbnail} className="card-img" alt="game_image" />
          <div className="card-item">
            <h1 className="card-title">{game.title.length > 17 ? `${game.title.slice(0, 17)}...` : game.title }</h1>
            <p>
              {game.short_description.length > 30 ? `${game.short_description.slice(0, 30)}...` : game.short_description }
            </p>
            <div className="card-extra">
              <span className="genre">{game.genre}</span>
              <span className="icon">
                {game.platform === 'PC (Windows)'
                  ? <FontAwesomeIcon icon={faWindows} />
                  : <FontAwesomeIcon icon={faChrome} />}
              </span>
            </div>

          </div>

        </div>
      </Link>

    </div>

  );
}

Card.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    thumbnail: PropTypes.string,
    platform: PropTypes.string,
    short_description: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};

export default Card;
