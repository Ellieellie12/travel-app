// import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './NavBar.module.css'
import Button from '../button/Button'


function NavBar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }else {
      setButton(true)
    }
  } 

  window.addEventListener('resize' , showButton)

  return (
  <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className="navbar-logo">
          TRAVEL <i className="fa-solid fa-passport" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
      </div>
    </nav>
  </>
  )
}

export default NavBar