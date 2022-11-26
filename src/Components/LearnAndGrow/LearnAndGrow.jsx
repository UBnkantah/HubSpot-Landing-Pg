import React from 'react'
import { LearnAndGrowDa } from '../LearnAndGrowDa/LearnAndGrowDa'
import {motion} from "framer-motion"
import "./LearnAndGrow.css"

const firstLayer ={
    offScreen:{y:-100, opacity: 0},
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
const secondLayer ={
    offScreen:{x:100, opacity: 0},
    onscreen:{
        x:0,
        opacity:1,
        transition:{
            type: "string",
            bounce: 0.4,
            duration: 1
        }
    }
}

const thirdLayer ={
    offScreen:{y:100, opacity: 0},
    onscreen:{
        y:0,
        opacity:1,
        transition:{
            type: "string",
            bounce: 0.4,
            duration: 1
        }
    }
}

function LearnAndGrow() {
  return (
    <div className='lea-a-grow'>
        {LearnAndGrowDa.map((items) => {
                return(
                    <motion.div
                    initial={"offScreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:1}}
                    transition={{staggerChildren: 0.5}} 
                    className='sub-grow' key={items.id}>
                        <motion.div 
                        variants={firstLayer}
                        className='fir-img'>
                            <img src={items.img} alt="" />
                        </motion.div>
                        <motion.div 
                        variants={secondLayer}
                        className='sec-img'>
                            <img src={items.image} alt="" />
                        </motion.div>
                        <motion.p
                        variants={thirdLayer}
                        >{items.text}</motion.p>
                    </motion.div>
                )
            } )
        }
      
    </div>
  )
}

export default LearnAndGrow
