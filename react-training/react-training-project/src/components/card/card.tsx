import React from 'react'
import './card.scss'

export const Card = ({ cardInfo }) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${cardInfo.id}?set=set2&size=180x180`}
        alt='card img'
      />
      <h2>{cardInfo.name}</h2>
      <p>{cardInfo.email}</p>
    </div>
  )
}
