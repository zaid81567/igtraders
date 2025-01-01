import React from 'react'
import './OurServices.css'
import { EmblaCarousel } from './EmblaCarousel/EmblaCarousel'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { GiBottomRight3dArrow } from 'react-icons/gi'
import { FaArrowRight } from 'react-icons/fa'

function OurServices() {
  return (
    <div className='our-services-container'>
        <div>
          <h1>We Have Best Service For You</h1>
          <h2>Our Services</h2>
        </div>
        <EmblaCarousel/>
        <button className="view-all"><p>View All</p><FaArrowRight/></button>
    </div>
  )
}

export default OurServices