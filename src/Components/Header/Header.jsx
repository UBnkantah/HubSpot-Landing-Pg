import React from 'react'
import {motion} from "framer-motion"
import HeaderImg from "../Images/SUIHomepageImg.png"
import "./Header.css"

const imgAnimate ={
  offScreen:{x: 100, opacity: 0},
  onscreen:{
    x:0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {type: "string",
    bounce: 0.5,
    duration: 1
  }
  }
}

const txtAnimate ={
  offScreen:{y:100, opacity: 0},
  onscreen:{
    y:0,
    opacity: 1,
    transition: {
      type: "string",
      bounce: 0.4,
      duration: 1
    }

  }
}

const Header = () => {
  return (
    <motion.div className='header'
    initial={"offScreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:1}}
    transition={{staggerChildren: 0.5}}
    >
      <motion.div className='header-details'>
        <motion.p
        variants={txtAnimate}
        >HUBSPOT CRM PLATFORM</motion.p>
        <motion.h2
        variants={txtAnimate}
        >Powerful, <br /> not Overpowering</motion.h2>
        <motion.p
        variants={txtAnimate}
        >finally, a CRM Platform is that's both powerful and easy to use, Create delightful <br /> customer's experiences, Have a delightful time doing this</motion.p>
        <motion.div className='button-btns'>
          <motion.button
          variants={txtAnimate}
          className='demo'>Get a Demo</motion.button>
          <motion.button 
          variants={txtAnimate}
          className='free'>Get Stared free</motion.button>
        </motion.div>
        <motion.p
        variants={txtAnimate}
        >Get started with free tools, or get <br /> more with premium software.</motion.p>
      </motion.div>
      <motion.div
      variants={imgAnimate}
      className='header-img'>
        <img src={HeaderImg} alt="header" />
      </motion.div>
    </motion.div>
  )
}

export default Header
