import React from 'react'
import ShoppingList from '../../components/shopping-list/shopping-list'
import './home-page.scss'
import { Product } from '../../models/product'

function HomePage (props: any) {
  const products: Product[] = [
    { id: 1, name: 'hat', price: 55.3 },
    { id: 2, name: 'hat', price: 55.3 },
    { id: 3, name: 'hat', price: 55.3 },
    { id: 4, name: 'hat', price: 55.3 },
    { id: 5, name: 'hat', price: 55.3 },
    { id: 6, name: 'hat', price: 55.3 }
  ]

  return (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <ShoppingList itemslist={products}></ShoppingList>
    </div>
  )
}

export default HomePage
