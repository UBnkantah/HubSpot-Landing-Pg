import React from 'react'
import GirlImg from "../Images/girl-img.png"
import {motion} from "framer-motion"
import "./Profile.css"

const txtAnimate={
    offScreen:{y:-100, opacity:0},
    onscreen:{
        y:0,
        opacity:1,
        transition:{
           type: "string",
           bounce: 0.4,
           duration:1
        }
    }
}

const imgAnimate={
    offScreen:{x:100, opacity:0},
    onscreen:{
        x:0,
        opacity:1,
        transition:{
           type: "string",
           bounce: 0.4,
           duration:1
        }
    }
}

const btnAnimate={
    offScreen:{y:100, opacity:0},
    onscreen:{
        y:0,
        opacity:1,
        transition:{
           type: "string",
           bounce: 0.4,
           duration:1
        }
    }
}



function Profile() {
  return (
    <motion.div 
    initial={"offScreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:1}}
    transition={{staggerChildren: 0.5}}
    className='profile'>
        <motion.div className='profile-details'>
            <motion.h2
            variants={txtAnimate}
            >Start Growing with HubSpot Today</motion.h2>
            <motion.p
            variants={txtAnimate}
            >With tool to make every part of our process more human and a uppot team excited to help you, getting with inbound has never been easier</motion.p>
            <motion.div className="profile-btns">
                <motion.button 
                variants={btnAnimate}
                className='demo-btn'>
                    Get a demo
                </motion.button>
                <motion.button 
                variants={btnAnimate}
                className='free-btn'>
                    Get started free
                </motion.button>
            </motion.div>
        </motion.div>
        <motion.div 
        variants={imgAnimate}
        className="profile-img">
            <img src={GirlImg} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Profile
