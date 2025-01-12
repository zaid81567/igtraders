import React from 'react'
import Header from '.././components/Header/Header'
import HeroSection from '.././components/HeroSection/HeroSection'
import AboutUsSection from '.././components/AboutUsSection/AboutUsSection'
import CtaContactUs from '.././components/CtaContactUs/CtaContactUs'
import OurServices from '.././components/OurServices/OurServices'
import Testimonial from '.././components/Testimonial/Testimonial'
import ContactInfos from '../components/Footer/ContactInfos/ContactInfos'
import SEO from '../components/SEO'

function HomePage() {
  return (
    <>
    <SEO
      title="IG Traders - The Best Scrap Buyer In Kolkata"
      description="I G Traders Company is the best scrap buyers in Kolkata.  We collect second-hand office furniture, laptops and computers, DZ generators, different metals, etc."
      name="IG Traders"
      type="website"
    />
    
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