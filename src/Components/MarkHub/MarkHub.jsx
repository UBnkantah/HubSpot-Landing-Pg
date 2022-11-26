import React from 'react'
import {motion} from "framer-motion"
import { CRMData } from '../CRMData/CRMData'
import "./MarkHub.css"


const secTxtAnimate ={
    offScreen:{x:-100, opacity: 0},
    onscreen:{
        x:0,
        opacity: 1,
        transition: {
            type: "string",
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

const MarkHub = () => {
  return (
    <div className='markHub'>
        {CRMData.map((item) => {
            return(
                <motion.div className='sub-markHub' 
                initial={"offScreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:1}}
                transition={{staggerChildren: 0.5}}
                key={item.id}>
                    <motion.div className='head-markHub'>
                        <motion.div
                        variants={secTxtAnimate}
                        ><img src={item.image} alt="" /> </motion.div>
                        <motion.div><motion.h2
                        variants={txtAnimate}
                        >{item.header}</motion.h2></motion.div>
                    </motion.div>
                    <motion.p 
                    variants={txtAnimate}
                    className='txt-markHub'>{item.text}</motion.p>
                    <motion.hr
                    variants={txtAnimate}
                    />
                    <motion.h4
                    variants={txtAnimate}
                    >Popular features</motion.h4>
                    <motion.div className='sub-txt-lo'>
                        <motion.div
                        variants={txtAnimate}
                        className='sub-txt-img'><img src={item.subImg} alt="" /></motion.div>
                        <motion.div 
                        variants={txtAnimate}
                        className='sub-txt-p'><p>{item.subTextOne}</p></motion.div>
                    </motion.div>
                    <motion.div className='sub-txt-lo'>
                        <motion.div
                        variants={txtAnimate}
                        className='sub-txt-img'><img src={item.subImg} alt="" /></motion.div>
                        <motion.div
                        variants={txtAnimate}
                        className='sub-txt-p'><p>{item.subTextTwo}</p></motion.div>
                    </motion.div>
                    <motion.div className='sub-txt-lo'>
                        <motion.div 
                        variants={txtAnimate}
                        className='sub-txt-img'><img src={item.subImg} alt="" /></motion.div>
                        <motion.div 
                        variants={txtAnimate}
                        className='sub-txt-p'><p>{item.subTextThree}</p></motion.div>
                    </motion.div>
                    <motion.button 
                    variants={txtAnimate}
                    className='sub-button'>Get Started</motion.button>
                </motion.div>
            )
        })}
        
      
    </div>
  )
}

export default MarkHub
