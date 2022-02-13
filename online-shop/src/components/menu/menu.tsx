import React from 'react'
import './menu.scss'
import MenuItem from '../menu-item/menu-item'

export function Menu ({ items }) {
  return (
    <div className='directory-menu'>
      {items.map(item => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </div>
  )
}
