import React from 'react'
import {motion} from "framer-motion"
import "./LeaAGrw.css"

const txtAnimate={
    offScreen:{y:-100, opacity:0},
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

function LeaAGrw() {
  return (
    <motion.div className='leagrw'
    initial={"offScreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:1}}
    transition={{staggerChildren: 0.5}}
    >
      <motion.div className='sub-leagrw'>
        <motion.h1
        variants={txtAnimate}
        >Learn and grow with award-winning suport and a thriving community behind you.</motion.h1>
        <motion.p
        variants={txtAnimate}
        >You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default LeaAGrw
