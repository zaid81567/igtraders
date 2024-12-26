import React from 'react'
import Header from '.././components/Header/Header'
import HeroSection from '.././components/HeroSection/HeroSection'
import AboutUsSection from '.././components/AboutUsSection/AboutUsSection'
import CtaContactUs from '.././components/CtaContactUs/CtaContactUs'
import OurServices from '.././components/OurServices/OurServices'
import Testimonial from '.././components/Testimonial/Testimonial'
import ContactInfos from '../components/Footer/ContactInfos/ContactInfos'

function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <CtaContactUs/>
    <OurServices/>
    <Testimonial/>
    <ContactInfos/>
    </>
  )
}

export default HomePage