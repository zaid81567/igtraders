import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './EmblaCarousel.css'
// import './other.css'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="carousel-container-main">
      <div className="embla carousel-container" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="img img1"></div>
              <div className="img-description">Second-Hand Computer Buyer</div>
            </div>
            <div className="embla__slide slide">
              <div className="img img2"></div>
              <div className="img-description">Second-Hand Office Furniture Buyer</div>
            </div>
            <div className="embla__slide">
              <div className="img img3"></div>
              <div className="img-description">Battery Scrap Buyer</div>
            </div>
            <div className="embla__slide">
              <div className="img img4 last-slide"></div>
              <div className="img-description">Laptop Scrap Buyer</div>
            </div>
          </div>
          <img src="../../assets/carousel/scnd_off_furniture.jpg" alt="" />
        </div>
    </div>
  )
}
