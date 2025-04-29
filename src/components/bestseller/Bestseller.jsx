import React from 'react'
import './bestseller.css'
import Card from '../commonfiles/Card'
import NewProducts from '../../assets/NewProducts'


const Bestseller = () => {
  return (
    <div className='new_collection bestseller'>
        <h1>Top Rated Pick</h1>
        <p>Curated by our shoppers. Trusted loved and re-ordered again and again</p>
        <hr />
        <div className="collections">
        {NewProducts.map((card, i) => {
                        return <Card key={i} 
                        id={card.id} 
                        name={card.name} 
                        img={card.img} 
                        new_price={card.new_price} 
                        old_price={card.old_price} />
                    })}
        </div>
    </div>
  )
}

export default Bestseller