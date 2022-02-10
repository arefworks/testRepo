import './App.css'
import { User } from './models/User'
import React, { useState } from 'react'

function App () {
  const init = [
    {
      id: 1,
      name: 'Aref'
    },
    {
      id: 2,
      name: 'Ali'
    },
    {
      id: 1,
      name: 'Sami'
    }
  ]

  const [users, setUsers] = useState<User[]>(init)

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
