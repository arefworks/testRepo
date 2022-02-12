import React from 'react'
import HomePage from './pages/home/home-page'
import './App.scss'
import Header from './components/header/header'

function App () {
  return (
    <div>
      <Header></Header>
      <HomePage></HomePage>
      <div> Footer</div>
    </div>
  )
}

export default App
