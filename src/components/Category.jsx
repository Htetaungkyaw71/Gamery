import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../redux/actions';
import Loading from './Loading';
import Navbar from './Navbar';
import Card from './Card';

function Category() {
  const { categories } = useSelector((state) => state.games);
  const { categoryName } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryData(categoryName));
  }, [categoryName]);

  const gameList = categories.map((game) => <Card game={game} key={game.id} />);

  return (
    <>
      <Navbar />
      {gameList ? (
        <div className="main">
          <div className="top">
            <h1>
              Top
              {categoryName}
              Games for PC and Browser In 2023!
            </h1>
          </div>
          <p className="game-title">
            <b style={{ marginRight: '5px' }}>{categories.length}</b>
            free-to-play
            {categoryName}
            games found in our games list!
          </p>
          <div className="row">
            {gameList}
          </div>
        </div>
      )
        : <Loading />}

    </>
  );
}

export default Category;
