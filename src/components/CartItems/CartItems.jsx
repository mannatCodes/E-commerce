import React , {useContext , useState} from 'react'
import "./CartItems.css"
import { ShopContext } from "../Context/ShopContext.jsx";
import crossIcon from "../../assets/crossIcon.png"
import "./CartItems.css"

const CartItems = () => {

    const {getTotalcartAmount , all_product, cartItems, removeFromcart} = useContext(ShopContext); 
  return (
    <div className='cartitems'>
       <div className="cartitems-format-main">
         <p>Products</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
       </div>
       <hr/>

      {all_product.map((e) => {
  
        if(cartItems[e.id] > 0) {
          return (
          <div key={e.id}>
          <div className="cartitems-format">
          <img src={e.image} alt="" 
          className='carticon-product-icon' />
          <p>{e.name}</p>
          <p>{e.new_price}</p>
          <button className='cartitems-quantity'>
            {cartItems[e.id]}
           </button>
           

          <p>{Number(e.new_price)*cartItems[e.id]}</p>
          <img src={crossIcon} alt="" height="100px"
          onClick={() => removeFromcart(e.id)} />
        </div>
        <hr/>
            </div>
      )}
        return null;
      })}

       <div className="cartitems-down">
         <div className="cartitems-total">
           <h1>Cart Totals</h1>
           <div> 
              <div className="cartitems-total-item">
                 <p>Subtotal</p>
                 <p>${getTotalcartAmount()}</p>
              </div>
              <hr/>

              <div className="cartitems-total-item">
                 <p>Shipping Fee</p>
                 <p>Free</p>
              </div>
              <hr/>

              <div className="cartitems-total-item">
                 <p>Total</p>
                 <p>${getTotalcartAmount()}</p>
              </div>
           </div>

           <button>Proceed to Checkout</button>
         </div>

          <div className="cartitems-promocode">
             <p>If you have a promo code, Enter it here.</p>
             <div className="cartitems-promobox">
                <input type="text" placeholder="Promo Code"/>
                <button>Submit</button>
             </div>
          </div>
       </div>
        <hr/>
    </div>
  )
}

export default CartItems
