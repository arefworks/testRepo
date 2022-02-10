import './App.css'
import { User } from './models/User'
import React, { useState } from 'react'
import { useEffect } from 'react'

function App () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
  })

  const addUser = (): void => {
    setUsers([...users, { id: 1, name: 'whatever' }])
  }

  return (
    <div className='App'>
      <div>
        {users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
      <button onClick={addUser}> Add user</button>
    </div>
  )
}

export default App
