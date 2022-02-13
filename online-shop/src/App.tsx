import React from 'react'
import HomePage from './pages/home/home-page'
import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/login-page/login-page'
import { HatsPage } from './pages/hats/hats-page'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/hats' element={<HatsPage />}></Route>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
