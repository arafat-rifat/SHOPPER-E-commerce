import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
     {/* Offers left */}
     <div className='offers-left'>

        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
     </div>


     {/* offers right */}

     <div className='offers-right'>
       <img src={exclucive_image} alt="exclusiveImage" />
     </div>

    </div>
  )
}

export default Offers