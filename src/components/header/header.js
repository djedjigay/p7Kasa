import React from 'react'
import Navbar from '../navbar/navbar'
import LOGO from '../../assets/images/LOGO.jpg'
import './header.css'

export default function Header() {
  return (
    <div className='container'>
        <img className='logo' src={LOGO} alt="logo"></img>
        <Navbar/>
    </div>
  )
}



