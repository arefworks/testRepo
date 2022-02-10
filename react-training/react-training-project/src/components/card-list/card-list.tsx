import { Console } from 'console'
import React from 'react'
import { User } from '../../models/User'
import { Card } from '../card/card'
import './card-list.scss'

export type cardListProps = {
  items: User[]
}

export const CardList = ({ items }: cardListProps) => {
  return (
    <div className='card-list'>
      {items.map(item => {
        return <Card key={item.id} cardInfo={item}></Card>
      })}
    </div>
  )
}
