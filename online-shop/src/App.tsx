import React from 'react'
import HomePage from './pages/home/home-page'
import Header from './components/header/header'
import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/login-page/login-page'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <div> Footer</div>
    </div>
  )
}

export default App
