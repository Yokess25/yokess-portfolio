import React from 'react'
import '../../../src/index.css'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/023eebc4bcee84dda420da10d3fe1c91.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yokess S</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="CR7"/>
        </div>
      </div>
    </header>
  )
}

export default Header