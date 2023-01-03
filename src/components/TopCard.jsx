import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function TopCard({ game }) {
  return (
    <div className="col-top">
      <Link to={`/game/${game.id}`}>
        <img src={game.thumbnail} className="card-top-img" alt="game_image1" />
      </Link>
    </div>
  );
}

TopCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default TopCard;
