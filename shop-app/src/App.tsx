import './App.scss'
import HomePage from './pages/home-page/home-page'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login-page/login-page'
import ShopPage from './pages/shop-page/shop-page'

function App () {
  return (
    <div className='App'>
      <div>Welcome to shop app</div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='shop' element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App
