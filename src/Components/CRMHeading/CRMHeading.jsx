import React from 'react'
import "./CRMHeading.css"

const CRMHeading = () => {
  return (
    <div className='Crm-body'>
        <div className='crmheading'>
            <h1>
                The CRM Platform Your Whole Business Will Love 
            </h1>
            <p>
                HubSport's CRM platform has all the tools and integrations you need for marketting, sales, content 
                management and customer service. Each product in the platform is powerful alone, but the real magic 
                happens when you use them together.
            </p>
            <div className="button-btns">
                <button className='crm-btn'>Get free CRM</button>
                <button className='demo-btn'>Demo premium CRM</button>
            </div>
        </div>
    </div>
    
  )
}

export default CRMHeading
