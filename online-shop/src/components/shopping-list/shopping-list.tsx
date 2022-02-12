import React from 'react'
import ShopItem from '../shop-item/shop-item'
import './shopping-list.scss'
import { Product } from '../../models/product'

interface ShoppingListProps {
  itemslist: Product[]
}

function ShoppingList ({ itemslist }: ShoppingListProps) {
  return (
    <div className='directory-menu'>
      {itemslist.map(item => (
        <ShopItem key={item.id} item={item}></ShopItem>
      ))}
    </div>
  )
}

export default ShoppingList
