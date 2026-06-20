import React, {useContext, useState} from 'react'
import "../CSS/ShopCategory.css"
import {ShopContext} from "../components/Context/ShopContext.jsx"
import dropdown_image from "../assets/dropdown_image.jpg"
import Item from "../components/Items/Items.jsx"

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
       <img className="shopCategory_banner" src={props.image} alt=""/>
       <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>

          <div className="shopCategory-shop">
             Sort by  <img src={dropdown_image} alt="" />
          </div>
       </div>

       <div className="shopCategory_products">
         {all_product.map((item) => {
           if(props.category === item.category) {
              return <Item key={item.id} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} name={item.name}/>
           }
           else return null;
         })}
       </div>

    </div>
  );
};

export default ShopCategory;
