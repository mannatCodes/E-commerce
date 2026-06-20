import React from 'react'
import "./Offers.css"
import OfferImage1 from "../../assets/OfferImage1.webp"

const Offers = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
         <h1>Exclusive Offer</h1>
         <h1>50% OFF </h1>
         <p>Summer Collection </p>
         <div className="left-btn">
            <button>Shop Now </button>
            <span className="material-symbols-outlined">
            arrow_forward
            </span>
         </div>
      </div>

      <div className="offer-right">
        <img src={OfferImage1} />
      </div>
    </div>
  )
}

export default Offers
