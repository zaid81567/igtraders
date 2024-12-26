import React from 'react'
import Header from './components/Header/Header'
import Spacer from './components/Spacer'
import HeroSection from './components/HeroSection/HeroSection'
import AboutUsSection from './components/AboutUsSection/AboutUsSection'
import CtaContactUs from './components/CtaContactUs/CtaContactUs'
import OurServices from './components/OurServices/OurServices'
import Testimonial from './components/Testimonial/Testimonial'
import HomePageFooter from './components/Footer/HomePageFooter'

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUsSection/>
    <CtaContactUs/>
    <OurServices/>
    <Testimonial/>
    <HomePageFooter/>
    <Spacer/>
    </>
  )
}

export default App
