import React from 'react'
import Topheader from './Topheader'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <Topheader/>
      <Navbar/>
    </header>
  )
}

export default Header