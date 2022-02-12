import React from 'react'
import { Product } from '../../models/product'
import './shop-item.scss'

interface ShopItemProps {
  item: Product
}

function ShopItem ({ item }: ShopItemProps) {
  return (
    <>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>{item.name}</div>
          <div className='tag'>{item.price}</div>
          <button className='subtitle'>SHOP NOW</button>
        </div>
      </div>
    </>
  )
}

export default ShopItem
