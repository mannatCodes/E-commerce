import React from 'react'
import Hero from "../components/hero/Hero.jsx"
import Popular from "../components/Popular/Popular.jsx"
import Offers from "../components/Offers/Offers.jsx"
import NewCollection from "../components/NewCollection/NewCollection.jsx"
import NewsLetter from "../components/NewsLetter/NewsLetter.jsx"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop
