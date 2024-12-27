import React from 'react'
import aboutpg1 from '../assets/about-page-1.jpg'
import aboutpg2 from '../assets/about-page-2.jpg'
import './css/AboutPage.css'

function AboutPage() {
  return (
    <div className='about-page-container'>

      <div className="heading">
        <h1>About Us</h1>
        <h2>IG Traders Scrap Buyers</h2>
      </div>
      <div className="description">

        <div>
          <div className='img-container'><img src={aboutpg1} alt="" /></div>
          <p>At IG Traders Scrap Buyers, we take immense pride in our role as the premier scrap buyers in Kolkata. Our mission is to provide an eco-friendly solution to rid your premises of unwanted materials while ensuring you receive the right price for your unused goods. Our commitment to a greener, more sustainable environment is at the heart of everything we do. We leverage cutting-edge technology to streamline our operations, making the process of selling your scrap hassle-free and efficient. By doing so, we contribute to the creation of a cleaner, pollution-free environment, allowing you to breathe easy knowing that your unwanted materials are being handled responsibly. The range of scraps we collect includes old and second-hand office furniture, laptops, computers, and DZ generators, among other items. Our dedicated and skilled team of professionals is at your service 24/7, ready to assist you in every step of the process. We understand that dealing with unwanted materials can be a daunting task, but with Unique Scrap Buyers, you can trust that your concerns will be addressed with care and precision. One of our core principles is recycling, and we take this commitment seriously. Our team members are well-versed in separating recyclable materials, ensuring they find their way back into the environment through modern and eco-friendly methods. This not only benefits our customers but also contributes to a more sustainable future for our planet. <br></br><br></br>If you find yourself grappling with unwanted materials cluttering your office or home, turn to us. We specialize in carefully collecting all unwanted materials from your premises, leaving you with a clean and clutter-free space. Unique Scrap Buyers is more than just a business; we are your partner in creating a better, cleaner, and more sustainable world. Join us in our journey towards a greener future, where responsible scrap disposal is at the forefront of our mission.</p>
        </div>

        <div>
          <div className='img-container'><img src={aboutpg2} alt="" /></div>
          <div><p>We provide the door picking services through which you need not come to any desired place to dump your toxic wastes. Imagine if you get some good out of your Scrap it would be icing on the cake for your business. We encounter the huge amount of iron waste and develop sky scrapping materials out of it. You can schedule a pick up as per your convenience so that your products can be counted in the innovation. We believe in the recycling of waste products that can lead to a fresh and newfangled product.</p>
          <p>We are good at making new things out of waste products that can lead to the pollution free environment. We dump all the waste products in an environment-friendly manner. If you don’t find it worth working with us, you can regain your money on the immediate basis. We believe in fulfilling our customer needs and act accordingly.</p></div>
        </div>

      </div>

    </div>
  )
}

export default AboutPage