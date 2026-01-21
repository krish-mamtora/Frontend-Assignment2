import { useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

function Navbar() {


  return (
    <>
    <nav className="bg-green-800 py-4 text-white fixed w-full top-0 left-0 z-50">
      <div className ="container mx-auto">
    <h5>Navbar Theme</h5>
      <ul className="ml-8 space-x-4">
        <li className="inline-block hover:text-gray-300"><a href="/Dashboard">Dashboard</a></li>
        <li className="inline-block hover:text-gray-300"><a href="/Products">Products</a></li>
        <li className="inline-block hover:text-gray-300"><a href="/Home">Home</a></li>
      </ul>
      <label className='switch'>
        <input type="checkbox" />
      </label>
      </div>
    </nav>
    </>
  )
}

export default Navbar
