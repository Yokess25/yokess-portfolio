





import React from 'react'
import CV from '../../assets/Yokess_Re_docs.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primarys'>Let's Talk</a> 
    </div>
  )
}

export default CTA