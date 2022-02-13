import React from 'react'
import './home-page.scss'
import { Category } from './../../models/Category'
import { Menu } from '../../components/menu/menu'

function HomePage () {
  const menuItems: Category[] = [
    { id: 1, name: 'Hats', link: '/hats' },
    { id: 2, name: 'Jackets', link: '' },
    { id: 3, name: 'Jeans', link: '' },
    { id: 4, name: 'Glasses', link: '' },
    { id: 5, name: 'Sports', link: '' },
    { id: 6, name: 'Shoes', link: '' }
  ]

  return (
    <div className='homepage'>
      <h1>Welcome to my Smart Shop</h1>
      <Menu items={menuItems}></Menu>
    </div>
  )
}

export default HomePage
