import { useState } from 'react'
import './App.css'
import './index.css'
import { useForm } from 'react-hook-form'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import R from './components/R'
import Products from './pages/Products'
import Home from './pages/Home'
import { ThemeContext } from './components/ThemeContext'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/R" element={<R/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>

        </Routes>
      
    </BrowserRouter>
   
    </>
  )
}

export default App
