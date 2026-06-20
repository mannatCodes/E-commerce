import React , {useState} from 'react'
import "./Description.css"

const Description = () => {

    const [tab,setTab] = useState("description");

  return (
    <div>
      <div className="descriptionBox">
      <div className="descriptionBox-navigator">

         <div
          className={`descriptionBox-nav-box ${
            tab === "description" ? "" : "fade"
          }`}
          onClick={() => setTab("description")}
        >
          Description
        </div>

        <div className={`descriptionBox-nav-box ${
             tab === "reviews" ? "" : "fade"
        }`}
            onClick={() => setTab("reviews")}

        >
          Reviews (122)
        </div>

      </div>

      {tab === "description" ? (

      <div className="descriptionBox-description">
        <p>
          Elevate your everyday style with this premium striped shirt,
          crafted from soft, breathable fabric for all-day comfort.
          Designed with a modern fit and timeless pattern, this shirt
          effortlessly combines fashion and functionality, making it
          perfect for casual outings, office wear, or special occasions.
        </p>

        <p>
          Featuring a lightweight feel, durable stitching, and a
          versatile design, this shirt pairs seamlessly with jeans,
          chinos, or trousers. Whether you're dressing up or keeping
          it casual, this piece adds a sophisticated touch to your
          wardrobe while ensuring maximum comfort throughout the day.
        </p>
      </div>
      ) : (

      <div className="reviews-box">
         <div className="review">
            <h4>⭐⭐⭐⭐⭐ Rahul Sharma</h4>
            <p>
              Excellent quality and perfect fit. Worth every penny!
            </p>
          </div>

          <div className="review">
            <h4>⭐⭐⭐⭐ Priya Singh</h4>
            <p>
              The fabric feels premium and delivery was quick.
            </p>
          </div>

          <div className="review">
            <h4>⭐⭐⭐⭐⭐ Aman Verma</h4>
            <p>
              Stylish design and very comfortable to wear.
            </p>
          </div>
      </div>
  )}
  </div>
  </div>
  );
};

export default Description
