import React from 'react'
import {motion} from "framer-motion"
import "./CRMHeading.css"

const textAnimate={
    offScreen: {y: 100, opacity:0},
    onscreen: {
        y:0,
        opacity: 1,
        transition: {
            type: "string",
            bounce: 0.5,
            duration: 1
        }
    }
}

const CRMHeading = () => {
  return (
    <motion.div
    initial={"offScreen"}
        whileInView={"onscreen"}
        viewport={{once: false, amount:1}}
        transition={{staggerChildren: 0.5}}
    className='Crm-body'>
        <motion.div
        
        className='crmheading'>
            <motion.h1
            variants={textAnimate}
            >
                The CRM Platform Your Whole Business Will Love 
            </motion.h1>
            <motion.p
            variants={textAnimate}
            >
                HubSport's CRM platform has all the tools and integrations you need for marketting, sales, content 
                management and customer service. Each product in the platform is powerful alone, but the real magic 
                happens when you use them together.
            </motion.p>
            <motion.div className="button-btns">
                <motion.button
                variants={textAnimate}
                className='crm-btn'>Get free CRM</motion.button>
                <motion.button
                variants={textAnimate}
                className='demo-btn'>Demo premium CRM</motion.button>
            </motion.div>
        </motion.div>
    </motion.div>
    
  )
}

export default CRMHeading
