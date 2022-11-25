import React from 'react'
import { LearnAndGrowDa } from '../LearnAndGrowDa/LearnAndGrowDa'
import "./LearnAndGrow.css"

function LearnAndGrow() {
  return (
    <div className='lea-a-grow'>
        {LearnAndGrowDa.map((items) => {
                return(
                    <div className='sub-grow' key={items.id}>
                        <div className='fir-img'>
                            <img src={items.img} alt="" />
                        </div>
                        <div className='sec-img'>
                            <img src={items.image} alt="" />
                        </div>
                        <p>{items.text}</p>
                    </div>
                )
            } )
        }
      
    </div>
  )
}

export default LearnAndGrow
