import React from 'react'
import './header.scss'

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
          <button className='nav-item'>Shop</button>
          <button className='nav-item'>Sign in</button>
          <button className='nav-item'>
            CART <b>5</b>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
