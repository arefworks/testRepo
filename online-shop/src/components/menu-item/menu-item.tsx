import React from 'react'
import './menu-item.scss'
import { useNavigate } from 'react-router-dom'
function MenuItem ({ item }) {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(item.link)
  }

  return (
    <>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>{item.name}</div>
          <button className='subtitle' onClick={handleOnClick}>
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  )
}

export default MenuItem
