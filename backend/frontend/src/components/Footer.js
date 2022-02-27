import React from 'react'
import engine from '../assets/engine.png'
import chart from '../assets/chart.png'
import notif from '../assets/notif.png'
import setting from '../assets/setting.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-menu'>
      <Link to='/home'>
        <img className='logo-menu' src={engine} alt='logo1' />
      </Link>
      <Link to='/home'>
        <img className='logo-menu' src={chart} alt='logo2' />
      </Link>

      <Link to='/home'>
        <img className='logo-menu' src={notif} alt='logo3' />
      </Link>

      <Link to='/home'>
        <img className='logo-menu' src={setting} alt='logo4' />
      </Link>
    </div>
  )
}

export default Footer
