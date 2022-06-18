import React from 'react'
import {Link} from 'react-router-dom'

const DetailsNavbar = () => {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-gradient-to-b from-blue-500 to-blue-100 text-white'>
        <Link to="/" className='bg-blue-500 rounded p-2 py-1'>back</Link>
    </header>
  )
}

export default DetailsNavbar