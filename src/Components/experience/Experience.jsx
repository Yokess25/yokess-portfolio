import React from 'react'
import './experience.css'
import { MdCheckCircle } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>HTML</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>CSS</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>JavaScript</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>React</h4>
              <small className="text-light">Basic</small></div>
            </article>
            </div>        
        </div>

        <div className="experience_frontend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>PHP</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>Laravel</h4>
              <small className="text-light">Basic</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>Java</h4>
              <small className="text-light">Basic</small></div>
            </article>
            <article className="experience_details">
              <MdCheckCircle/>
              <div><h4>SQL</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            </div>      
        </div>    
    </div>
    </section>
  )
}

export default Experience