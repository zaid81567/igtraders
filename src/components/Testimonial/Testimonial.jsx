import React from 'react'
import './Testimonial.css'
import p1 from '../../assets/testimonial/p1.png'
import p2 from '../../assets/testimonial/p2.png'
import p3 from '../../assets/testimonial/p3.png'
import qouteMark from '../../assets/testimonial/qoute-mark.png'

function Testimonial() {
  return (
    <div className='testimonial-container'>
      <div className='heading'>
          <h2>What People Say</h2>
          <h4>Our Testimonial</h4>
      </div>
      <div className="testimonials">

        <div className='testimonial-card'>
          <span className='qoute-mark-span'><img src={qouteMark} alt="" /></span>
          <div>
            <img src={p1} alt="Vijay Sharma" />
            <div className="name">Vijay Sharma</div>
          </div>
          <div>
            <p>I think the service is great. The scrap truck arrived as scheduled and the payment that I received for the scrap was very generous.</p>
          </div>
        </div>

        <div className='testimonial-card'>
        <span className='qoute-mark-span'><img src={qouteMark} alt="" /></span>
          <div>
            <img src={p2} alt="Vijay Sharma" />
            <div className="name">Rajesh Kumar</div>
          </div>
          <div>
            <p>I think the service is great. The scrap truck arrived as scheduled and the payment that I received for the scrap was very generous.</p>
          </div>
        </div>

        <div className='testimonial-card'>
        <span className='qoute-mark-span'><img src={qouteMark} alt="" /></span>
          <div>
            <img src={p3} alt="Vijay Sharma" />
            <div className="name">Shad Alam Ansari</div>
          </div>
          <div>
            <p>I think the service is great. The scrap truck arrived as scheduled and the payment that I received for the scrap was very generous.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial