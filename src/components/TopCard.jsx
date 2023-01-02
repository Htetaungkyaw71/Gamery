import React from 'react'




function TopCard({game}) {
  return (
    <div className='col-top'>
        {/* <div className='card'> */}
            <img src={game.thumbnail} className="card-top-img"/>
        {/* </div> */}
    </div>

  )
}

export default TopCard