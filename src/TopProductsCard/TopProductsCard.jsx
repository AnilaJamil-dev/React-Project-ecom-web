import React from 'react'

export default function TopProductsCard() {
  return (
    <div className='box'>
    <div className='product mtop'>
      <div className='img'>
        <span className='discount'>50% Off</span>
        <img src="https://648e99873722947deac636f5--sage-dusk-64ff08.netlify.app/images/flash/flash-2.png" alt='' />
        <div className='product-like'>
          <label>9</label> <br />
          <i className='fa-regular fa-heart' ></i>
        </div>
      </div>
      <div className='product-details'>
        <h3>afds</h3>
        <div className='rate'>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
        </div>
        <div className='price'>
          <h4>$77.00 </h4>
          {/* step : 3  
             if hami le button ma click garryo bahne 
            */}
          <button >
            <i className='fa fa-plus'></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
