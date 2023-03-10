import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchGames } from '../redux/actions';
import Card from './Card';
import TopCard from './TopCard';
import Navbar from './Navbar';
import Loading from './Loading';

function Home({ itemsPerPage }) {
  const [search, setSearch] = useState('');

  const { games } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  useEffect(() => {
    if (games.length <= 0) {
      dispatch(fetchGames());
    }
  }, []);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = games.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(games.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };

  let topgames;

  if (games.length > 0) {
    const topgameone = games.filter((game) => game.id === 466);
    const topgametwo = games.filter((game) => game.id === 523);
    const topgamethree = games.filter((game) => game.id === 540);
    const topgameList = [topgameone[0], topgametwo[0], topgamethree[0]];
    topgames = topgameList.map((game) => <TopCard game={game} key={game.id} />);
  }
  let gameList;
  const filterArr = games.filter((game) => game.title.toLowerCase().includes(search));
  if (filterArr && search !== '') {
    gameList = filterArr.map((game) => <Card game={game} key={game.id} />);
  } else {
    gameList = currentItems.map((game) => <Card game={game} key={game.id} />);
  }

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <Navbar />
      {games ? (
        <div className="main">
          <div className="top">
            <h1>Top Three Games for PC and Browser In 2023!</h1>
            <div className="row-top">
              {topgames && topgames}
            </div>
          </div>
          <hr />
          <p className="game-title">
            <b style={{ marginRight: '5px' }}>371</b>
            free-to-play games found in our games list!
          </p>
          <div className="search">
            <input type="text" placeholder="Search Games" onChange={handleChange} value={search} className="search-input" />
          </div>
          <div className="row">
            {gameList}
            <div className="main-pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="&laquo;"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </div>
          </div>
        </div>
      )
        : <Loading />}

    </>

  );
}

Home.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};

export default Home;
