import React from 'react'
import './OurServices.css'
import { EmblaCarousel } from './EmblaCarousel/EmblaCarousel'

function OurServices() {
  return (
    <div className='our-services-container'>
        <div>
          <h2>Our Services</h2>
          <h1>We Have Best Service For You</h1>
        </div>
        <EmblaCarousel/>
    </div>
  )
}

export default OurServices