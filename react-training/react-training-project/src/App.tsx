import { User } from './models/User'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { CardList } from './components/card-list/card-list'
import './App.scss'
import { SearchBox } from './components/search-box/search-box'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [searchKey, setSearchKey] = useState<string>('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
  }, [])

  useEffect(() => {
    if (searchKey) {
      setUsers(users.filter(x => x.id === parseInt(searchKey)))
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey])

  return (
    <div className='App'>
      <h1>User list</h1>
      <SearchBox
        handleChange={event => setSearchKey(event.target.value)}
        placeholder=' Search users'
      ></SearchBox>
      <CardList items={users}></CardList>
    </div>
  )
}

export default App
