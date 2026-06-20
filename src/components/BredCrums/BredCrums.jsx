import React from 'react'
import "./BredCrums.css"

const BredCrums = (props) => {

    const {product} = props;
  return (
    <div className='bredcrums'>
        Home
        <span className="material-symbols-outlined">
           arrow_forward
        </span>

        SHOP 
        <span className="material-symbols-outlined">
           arrow_forward
        </span>

        {product.category}
         <span className="material-symbols-outlined">
           arrow_forward
         </span>

         {product.name}
         <span className="material-symbols-outlined">
           arrow_forward
         </span>

    </div>
  )
}

export default BredCrums
