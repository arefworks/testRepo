import './App.scss'
import HomePage from './pages/home-page/home-page'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login-page/login-page'

function App () {
  return (
    <div className='App'>
      <div>Welcome to shop app</div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
