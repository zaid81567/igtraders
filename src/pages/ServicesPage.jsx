import React from 'react'
import SEO from '../components/SEO'
import './css/ServicePage.css'

//services images
import eWasteRecyclingImg from '../assets/eWasteRecyclingServiceImg.jpeg'
import plasticRecyclingImg from '../assets/plasticRecyclingImg.jpeg'
import officeDismantleImg from '../assets/officeDismantleImg.jpeg'
import laptopImg from '../assets/laptopImg.jpeg'
import ACImg from '../assets/ACImg.jpeg'
import batteryImg from '../assets/betteryImg.jpeg'
import officeFurnitureImg from '../assets/officeFurnitureImg.jpeg'
import DGGeneratorImg from '../assets/DGGeneratorImg.jpeg'


function ServicesPage() {
  return (
    <>
    <SEO
      title="IG Traders - The Best Scrap Buyer In Kolkata"
      description="I G Traders Company is the best scrap buyers in Kolkata. We collect second-hand office furniture, laptops and computers, DZ generators, different metals, etc."
      name="IG Traders"
      type="service" 
    />

    <div className="service-page-container">
      
      <div className="heading">
        <h1>Services we Offer</h1>
      </div>
      
    </div>

    <div className="all-service-list-container">
        <div className="service-box">
            <div className="service-img"> <img src={eWasteRecyclingImg} alt="E Waste Recycling" /> </div>
            <div className="service-name">E Waste Recycling</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={plasticRecyclingImg} alt="Plastic Recycling" /> </div>
            <div className="service-name">Plastic Recycling</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={officeDismantleImg} alt="Office Dismantle" /> </div>
            <div className="service-name">Office Dismantle</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={laptopImg} alt="Second Hand Laptop/Computer Buyer" /> </div>
            <div className="service-name">Second Hand Laptop/Computer Buyer</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={ACImg} alt="Second Hand AC Buyer" /> </div>
            <div className="service-name">Second Hand AC Buyer</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={batteryImg} alt="UPS/Battery Buyer" /> </div>
            <div className="service-name">UPS/Battery Buyer</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={officeFurnitureImg} alt="Office Furniture Buyer" /> </div>
            <div className="service-name">Office Furniture Buyer</div>
        </div>          
        <div className="service-box">
            <div className="service-img"> <img src={DGGeneratorImg} alt="Old DG Generator Buyer" /> </div>
            <div className="service-name">Old DG Generator Buyer</div>
        </div>          
     </div>        
    </>
  )
}

export default ServicesPage
