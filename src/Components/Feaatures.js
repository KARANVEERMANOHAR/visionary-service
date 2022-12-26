import React from 'react'

function Feaatures({tiles}) {
  return (
    <div className='features-container' id='features'>
       <div className="container-heading">
        <h1>Superior photos and gaming experience</h1>
       </div>

       <div className='feature-tiles'>
        <ul className='tile-container'>
            {tiles.map((items, index) =>{
                return(
                    <>
                    <li key={index} className="tile">
                        <div ><img src={items.url} alt="" className='tile-image'/></div>
                        <div><p className='tile-text'>{items.data}</p></div>
                    </li>
                    </>
                )
            })}
        </ul>
       </div>
    </div>
  )
}

export default Feaatures