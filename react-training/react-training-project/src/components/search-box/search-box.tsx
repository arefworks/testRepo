import React from 'react'
import './search-box.scss'

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      type='search'
      className='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
