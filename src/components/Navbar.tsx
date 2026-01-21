import { useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

function Navbar() {


  return (
    <>
    <nav class="bg-green-800 py-4 text-white fixed w-full top-0 left-0 z-50">
      <div class ="container mx-auto">
    <h5>Navbar Theme</h5>
      <ul class="ml-8 space-x-4">
        <li class="inline-block hover:text-gray-300"><a href="/Dashboard">Dashboard</a></li>
        <li class="inline-block hover:text-gray-300"><a href="/Products">Products</a></li>
        <li class="inline-block hover:text-gray-300"><a href="/Home">Home</a></li>
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
