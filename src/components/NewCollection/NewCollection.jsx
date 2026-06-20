import React from 'react'
import "./NewCollection.css"
import new_collection from "../../assets/NewCollection"
import Items from "../Items/Items.jsx"

const NewCollection = () => {
  return (
    <div className='newcollection'>
       <h1>NEW COLLECTIONS</h1>
       <hr/>
       <div className="collections">
            {new_collection.map((item,i) => {
                return <Items key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
       </div>
    </div>
  )
}

export default NewCollection
