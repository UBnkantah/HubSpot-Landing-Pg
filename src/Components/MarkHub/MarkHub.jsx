import React from 'react'
import { CRMData } from '../CRMData/CRMData'
import MatLogo from "../Images/mat_img.png"
import MarketHub from "../Images/MarketingHub_Icon.png"
import "./MarkHub.css"

function MarkHub() {
  return (
    <div className='markHub'>
        {CRMData.map((item) => {
            return(
                <div className='sub-markHub' key={item.id}>
                    <div className='head-markHub'>
                        <div><img src={item.image} alt="" /> </div>
                        <div><h2>{item.header}</h2></div>
                    </div>
                    <p className='txt-markHub'>{item.text}</p>
                    <hr />
                    <h4>Popular features</h4>
                    <div className='sub-txt-lo'>
                        <div className='sub-txt-img'><img src={item.subImg} alt="" /></div>
                        <div className='sub-txt-p'><p>{item.subTextOne}</p></div>
                    </div>
                    <div className='sub-txt-lo'>
                        <div className='sub-txt-img'><img src={item.subImg} alt="" /></div>
                        <div className='sub-txt-p'><p>{item.subTextTwo}</p></div>
                    </div>
                    <div className='sub-txt-lo'>
                        <div className='sub-txt-img'><img src={item.subImg} alt="" /></div>
                        <div className='sub-txt-p'><p>{item.subTextThree}</p></div>
                    </div>
                    <button className='sub-button'>Get Started</button>
                </div>
            )
        })}
        
      
    </div>
  )
}

export default MarkHub
