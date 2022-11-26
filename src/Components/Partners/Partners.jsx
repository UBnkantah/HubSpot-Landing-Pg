import React from 'react'
import {motion} from "framer-motion"
import PartnerImg from "../Images/Partner-img.png"
import "./Partners.css"

const animate={
    offScreen:{y:100, opacity:0},
    onscreen:{
        y:0,
        opacity:1,
        transition: {
            type: "string",
            bounce: 0.4,
            duration: 1
        }
    }
}
function Partners() {
  return (
    <motion.div 
    initial={"offScreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:1}}
    transition={{staggerChildren: 0.5}}
    className='partners'>
        <motion.div className='partners-details'>
            <motion.h2
            variants={animate}
            >150,000+</motion.h2>
            <motion.p
            variants={animate}
            >countries in over 120 countries growing their business with HubSpot</motion.p>
        </motion.div>
        <motion.div
        variants={animate}
        className='partners-img'>
            <img src={PartnerImg} alt="Partner" />
        </motion.div>
    </motion.div>
  )
}

export default Partners
