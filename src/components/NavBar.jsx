import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
  <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className="navbar-logo">
          TRAVEL <i className="fa-solid fa-passport"></i>
        </Link>
      </div>
    </nav>
  </>
  )
}

export default NavBar