import { useContext, useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import { ThemeContext } from './ThemeContext'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const {darkTheme} = useContext(ThemeContext)

  const headstyle = {
    color : darkTheme?"#000":"blue"
  }

  return (
    <>
    <nav className="bg-green-800 py-4 text-white fixed w-full top-0 left-0 z-50">
      <div className ="container mx-auto">
    <h5 style={headstyle}>Navbar Theme</h5>
      <ul className="ml-8 space-x-4">
        <li className="inline-block hover:text-gray-300"><a href="/Dashboard">Dashboard</a></li>
        <li className="inline-block hover:text-gray-300"><a href="/Products">Products</a></li>
        <li className="inline-block hover:text-gray-300"><a href="/Home">Home</a></li>
      </ul>
      <ThemeToggle></ThemeToggle>
      </div>
    </nav>
    </>
  )
}

export default Navbar
