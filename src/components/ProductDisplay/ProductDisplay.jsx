import React ,  {useState , useContext} from 'react'
import "./ProductDisplay.css"
import StarImage from "../../assets/StarImage.avif"
import halfStar from "../../assets/halfStar.webp"
import { ShopContext } from "../Context/ShopContext.jsx"

const ProductDisplay = (props) => {

    const {product} = props;

    const {addTocart} = useContext(ShopContext)

    const [size, setSize] = useState("");

  return (
    <div className='productDisplay'>
       <div className="productdisplay-left">
          
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" height="100px"/>
            <img src={product.image} alt="" height="100px"/>
            <img src={product.image} alt="" height="100px"/>
            <img src={product.image} alt="" height="100px"/>
          </div>

          <div className="productdisplay-mainimg">           
            <img src={product.image} alt="" />
          </div>

       </div>

       <div className="productdisplay-right">
          <h1>{product.name}</h1>
          
          <div className="productdisplay-right-star">
             <img src={StarImage} alt="" height="20px"/>
             <img src={StarImage} alt="" height="20px"/>
             <img src={StarImage} alt="" height="20px"/>
             <img src={StarImage} alt="" height="20px"/>
             <img src={halfStar} alt="" height="15px"/>
             <p>130 Reviews</p>
          </div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
               ${product.old_price}
            </div>

            <div className="productdisplay-right-price">
                ${product.new_price}
            </div>

            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                 officia rerum tempore debitis fugit doloribus, quisquam nam? Tene
                 tur, ipsum hic iusto mollitia saepe neque provident explicabo quae
                 est unde id!
            </div>

            <div className="productdisplay-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                   <span onClick={() => setSize("XS")}>XS</span>
                   <span onClick={() => setSize("S")}>S</span>
                   <span onClick={() => setSize("M")}>M</span>
                   <span onClick={() => setSize("L")}>L</span>
                   <span onClick={() => setSize("XL")}>XL</span>
                   <span onClick={() => setSize("XXL")}>XXL</span>
                </div>
            </div>

            <button onClick={() => {addTocart(product.id)}}>Add To Cart</button>

            <div className="productdisplay-right-category">
                <span>Category: {product.category}</span>
            </div>

          </div>
       </div>

    </div>
  )
}

export default ProductDisplay
