import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/navbar'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'


function App() {
  return <div className='App'>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route parth="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </div>
}

export default App
