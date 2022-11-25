import React, { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Logo from "../Images/HubspotLogo.png"
import "./Navbar.css"


function Navbar() {

    const NavRef = useRef();

    const showNavbar = () => {
        NavRef.current.classList.toggle("responsive_navbar");
    }


  return (
    <div className='navbar'>
        <div className="nav-img">
            <img src={Logo} alt="logo" />
        </div>
        <nav ref={NavRef}>
            <div className="navLinks">
                <Link to="/">About</Link>
                <Link to="/">Contact Sales</Link>
                <Link to="/">Contact Support</Link>
                <Link to="/">Login</Link>
            </div>
            <div className="nav-btns">
                <button className='demo-btn'>
                    Get a demo
                </button>
                <button className='free-btn'>
                    Get Started Free
                </button>
            </div>
            
            <button className='nav-btn  nav-close' onClick={showNavbar}>
                    <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </div>
  )
}

export default Navbar