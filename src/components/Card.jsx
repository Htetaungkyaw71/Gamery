import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faChrome } from '@fortawesome/free-brands-svg-icons'



function Card({game}) {
  return (
    <div className='col'>
        <div className='card'>
            <img src={game.thumbnail} className="card-img"/>
            <div className='card-item'>
                <h1 className='card-title'>{game.title.length > 17 ? game.title.slice(0,17)+"..." : game.title }</h1>
                <p>
                    {game.short_description.length > 30 ? game.short_description.slice(0,30)+"..." : game.short_description }
                </p>
                <div className='card-extra'>
                    <span className='genre'>{game.genre}</span>
                    <span className='icon'>
                        {game.platform === "PC (Windows)"?
                       <FontAwesomeIcon icon={faWindows} />:
                       <FontAwesomeIcon icon={faChrome} />}
                    </span>
                </div>
           
            </div>
   
        </div>
    </div>

  )
}

export default Card