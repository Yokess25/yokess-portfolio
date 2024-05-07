import React from 'react'
import './about.css'
import ME from '../../assets/023eebc4bcee84dda420da10d3fe1c91.jpg'
import { TbMilitaryAward } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbMilitaryAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3 months</small>
            </article>
          </div>
          <a href="#contact" style= {{marginTop: '20px'}} className="btn btn-primary">Let's</a>
        </div>
      </div>
    </section> 
  )
}

export default About
