import React from 'react'
import '../../styles/Navbar/Navbar.css'
import '../../styles/Base/base.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-items'>
        <a className='logo'>NETFLIX</a>
        <a href='/'>Home</a>
        <a href='#'>Movies</a>
      </div>
    </div>
  )
}
