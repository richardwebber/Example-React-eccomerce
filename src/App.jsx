import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/navbar'

function App() {
  return <div className='App'>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" />
        <Route parth="/cart"/>
      </Routes>
    </Router>
  </div>
}

export default App
