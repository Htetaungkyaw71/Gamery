import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGames } from '../redux/actions'
import ReactPaginate from 'react-paginate';
import Card from './Card'
import TopCard from './TopCard';

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

    let topgames;

    if(games.length > 0){
      const topgameone = games.filter(game=>game.id === 452)
      const topgametwo = games.filter(game=>game.id === 523)
      const topgamethree = games.filter(game=>game.id === 540)
      let topgameList = [topgameone[0],topgametwo[0],topgamethree[0]]
      console.log(topgameList)
      topgames= topgameList.map(game=><TopCard game={game} key={game.id} />)
    }

    


    

    const gameList = currentItems.map(game=><Card game={game} key={game.id} />)





  return (
    <Fragment>
      {games ? <div className='main'>
        <div className='top'>
        <h1>Top Free Shooter Games for PC and Browser In 2023!</h1>
         <div className='row-top'>
          {topgames && topgames}
         </div>
      </div>
      <hr />
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
      </div>
    :<Loading/>  
    }
    
    </Fragment>
    
 
  )
}

export default Home