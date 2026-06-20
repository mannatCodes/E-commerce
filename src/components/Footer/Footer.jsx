import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import fbLogo from "../../assets/fbLogo.webp"
import whtsappLogo from "../../assets/whtsapLogo.webp"
import instaLogo from "../../assets/InstagramLogo.webp"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
         <img src={logo} alt="" height="50px"/>
         <p>Shopify</p>
      </div>

      <ul className='footer-links'>
         <li>About</li>
         <li>Products</li>
         <li>Offices</li>
         <li>Company</li>
         <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <img src={fbLogo} alt="" height="50px"/>
        <img src={whtsappLogo} alt="" height="50px"/>
        <img src={instaLogo} alt="" height="50px"/>
      </div>

      <hr/>

      <p>Copyright@ 2026 - All Right Reserved</p>

    </div>
  )
}

export default Footer
