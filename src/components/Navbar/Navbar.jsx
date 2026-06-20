import React , { useContext} from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart from "../../assets/cart_icon.png"
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext.jsx"

const Navbar = () => {

    const location = useLocation();
    const {getTotalcartItems} = useContext(ShopContext)

  return (         
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px"/>
        <p>Shopify</p>
      </div>
      <ul className='nav-menu'>

       <li>
        <Link style={{textDecoration:"none" , color:"#626262"}} to="/">Home</Link>
        {location.pathname === "/" && <hr />}</li>

       <li>
        <Link style={{textDecoration:"none" , color:"#626262"}} to="/men">Men</Link>
        {location.pathname === "/men" && <hr />}</li>

       <li>
        <Link style={{textDecoration:"none" , color:"#626262"}} to="/womens">Women</Link>
        {location.pathname === "/women" && <hr />}</li>

       <li>
        <Link style={{textDecoration:"none" , color:"#626262"}} to="/Kids">Kids</Link>
        {location.pathname === "/kids" && <hr />}
        </li>

      </ul>
      
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalcartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
