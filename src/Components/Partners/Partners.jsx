import React from 'react'
import PartnerImg from "../Images/Partner-img.png"
import "./Partners.css"

function Partners() {
  return (
    <div className='partners'>
        <div className='partners-details'>
            <h2>150,000+</h2>
            <p>countries in over 120 countries growing their business with HubSpot</p>
        </div>
        <div className='partners-img'>
            <img src={PartnerImg} alt="Partner" />
        </div>
    </div>
  )
}

export default Partners
