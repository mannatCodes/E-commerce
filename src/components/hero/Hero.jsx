import React, {useState} from 'react'
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
   const [state,setState] = useState("Home");

  return (
    <div className='hero'>
        <div className="hero-left">
           <h2>Best Deals !  Best Prices</h2> 
           <p>new</p> 
           <p>collection</p>
          <p>for everyone</p>
          <Link to="/men" className="hero-latest-btn">
            <div>Latest Collection</div>
            <span className="material-symbols-outlined">
            arrow_forward
            </span>
          </Link>
          </div>
          
    </div>
  )
}

export default Hero
