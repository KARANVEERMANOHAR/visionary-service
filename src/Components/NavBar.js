import '../App.css';

import React from 'react'

function NavBar() {
  return (
    <div className='nav-bar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAKH6jsSjKpb3iSeE7EjYLwH5143tgGUmEmCF6Rk-1g&s" alt=""  className='nav-logo'/>
        
          <div className='nav-item'><a href="#features">Features</a></div>
          <div className='nav-item'><a href="#specs">Specs</a></div>
          <div className='nav-item'><a href="#reviews">Reviews</a></div>
        
    </div>
  )
}

export default NavBar