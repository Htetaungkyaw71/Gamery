import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGames } from '../redux/actions'
import ReactPaginate from 'react-paginate';
import Card from './Card'

function Home({itemsPerPage}) {
    const games = useSelector((state)=>state.games)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(games.length <= 0){
            dispatch(fetchGames())
        }
    },[])

    console.log(games)

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = games.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(games.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % games.length;
      setItemOffset(newOffset);
    };
  

    const gameList = currentItems.map(game=><Card game={game} key={game.id} />)

  return (
    <Fragment>
      <div className='top'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nihil, reiciendis repudiandae excepturi qui consectetur quod pariatur ducimus. Vel repellat reprehenderit excepturi voluptates magnam dignissimos, et minus obcaecati consectetur eos!
          </p>
      </div>
      <div className='row'>
      {gameList}
    <div className='main-pagination'>
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
    </Fragment>
    
 
  )
}

export default Home