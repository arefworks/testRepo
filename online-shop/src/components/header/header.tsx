import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <div className='nav-bar'>
        <div className='nav-bar-left'>
          <a href='/'>
            <img
              src='logo192.png'
              width={20}
              height={20}
              className='nav-item'
              alt='shop icon'
            />
          </a>
        </div>
        <div className='nav-bar-right'>
          <Link to='/' className='nav-item'>
            Shop
          </Link>
          <Link to='/login' className='nav-item'>
            Sign in
          </Link>
          <button className='nav-item'>
            CART <b>5</b>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
