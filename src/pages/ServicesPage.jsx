import React from 'react'
import SEO from '../components/SEO'
import './css/ServicePage.css'

//services images
import eWasteRecyclingImg from '../assets/eWasteRecyclingServiceImg.jpeg'

function ServicesPage() {
  return (
    <>
    <SEO
      title="IG Traders - The Best Scrap Buyer In Kolkata"
      description="I G Traders Company is the best scrap buyers in Kolkata. We collect second-hand office furniture, laptops and computers, DZ generators, different metals, etc."
      name="IG Traders"
      type="service" 
    />

    <div className="service-page-container>
      <div className="heading">
        <h1>Services we Offer</h1>
      </div>
    </div>

      <div className="all-service-list-container">
          <div className="service-box">
              <div className="service-img"> <img src={eWasteRecyclingImg} /> </div>
              <div className="service-name">E Waste Recycling</div>
          </div>          
      </div>
    
    </>
  )
}

export default ServicesPage
