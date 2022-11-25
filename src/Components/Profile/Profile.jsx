import React from 'react'
import GirlImg from "../Images/girl-img.png"
import "./Profile.css"

function Profile() {
  return (
    <div className='profile'>
        <div className='profile-details'>
            <h2>Start Growing with HubSpot Today</h2>
            <p>With tool to make every part of our process more human and a uppot team excited to help you, getting with inbound has never been easier</p>
            <div className="profile-btns">
                <button className='demo-btn'>
                    Get a demo
                </button>
                <button className='free-btn'>
                    Get started free
                </button>
            </div>
        </div>
        <div className="profile-img">
            <img src={GirlImg} alt="" />
        </div>
    </div>
  )
}

export default Profile
