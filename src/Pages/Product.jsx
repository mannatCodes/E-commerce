import React , {useContext} from 'react'
import {ShopContext} from "../components/Context/ShopContext.jsx"
import {useParams} from 'react-router-dom'
import BredCrums from "../components/BredCrums/BredCrums.jsx"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay.jsx"
import Description from "../components/Description/Description.jsx"

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description />
    </div>
  )
}

export default Product
