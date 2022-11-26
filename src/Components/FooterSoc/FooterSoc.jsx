import React from 'react'
import HubSLogo from "../Images/HubStBlg.png"
import SocIcons from "../Images/soc-icons.png"
import "./FooterSoc.css"

const FooterSoc = () => {
  return (
    <div className='footer-soc'>
        <div className="sub-footer-soc">
            <div className='hr-footer'>
                <hr />
            </div>
            <div className='img-footer'>
                <img src={SocIcons} alt="" />
            </div>
            <div className='hr-footer'>
                <hr />
            </div>
        </div>
        <div className='copy-rgt-com'>
            <div className='cpy-img'><img src={HubSLogo} alt="" /></div>
            <div className='cpy-txt'><p>copyright 2022 Hubspot, Inc</p></div>
        </div>
        <div className='last-section'>
            <p>Legal Stuff</p>
            <p>Privacy Policy</p>
            <p>Security</p>
        </div>
    </div>
  )
}

export default FooterSoc