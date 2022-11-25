import React from 'react'
import HeaderImg from "../Images/SUIHomepageImg.png"
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='header-details'>
        <p>HUBSPOT CRM PLATFORM</p>
        <h2>Powerful, <br /> not Overpowering</h2>
        <p>finally, a CRM Platform is that's both powerful and easy to use, Create delightful <br /> customer's experiences, Have a delightful time doing this</p>
        <div className='button-btns'>
          <button className='demo'>Get a Demo</button>
          <button className='free'>Get Stared free</button>
        </div>
        <p>Get started with free tools, or get <br /> more with premium software.</p>
      </div>
      <div className='header-img'>
        <img src={HeaderImg} alt="header" />
      </div>
    </div>
  )
}

export default Header
