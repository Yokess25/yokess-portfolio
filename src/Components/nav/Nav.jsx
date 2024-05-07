import React from 'react'
import './nav.css'
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { FaMessage } from "react-icons/fa6";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className="{activeNav === '#' ? 'active' : ''}"><BiSolidHomeHeart/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserSecret/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookmarklet/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaMessage/></a>
    </nav>
  )
}

export default Nav