import React from 'react'
import { Link } from 'react-router-dom'




function TopCard({game}) {
  return (
    <div className='col-top'>
        <Link to={`/${game.id}`}>
            <img src={game.thumbnail} className="card-top-img"/>    
        </Link>
    </div>

  )
}

export default TopCard