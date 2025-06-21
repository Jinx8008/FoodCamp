import React from 'react'
import { CupSodaIcon} from 'lucide-react'

const CoreValue = () => {
    const values = [
        {icons:<CupSodaIcon size={45}/> , text:"Excellence" , content:"Unforgettable Culinary Experience"},
        {icons:<CupSodaIcon size={45}/> , text:"Innovation" , content:"Dynamic, Fresh, Exciting Flavors"},
        {icons:<CupSodaIcon size={45}/> , text:"Quality" , content:"Source to Plate Culinary Delights"},
        {icons:<CupSodaIcon size={45}/> ,  text:"Sustainability" , content:"Eco-friendly Dinning Practices"}
    ]

  return (
    <div className='coreValue'>
        <h2 className='font-bold playfair text-3xl' style={{color:"wheat"}}>OUR CORE VALUES</h2>
        <div className="value" >
            {values.map((value)=>{
               return(
                 <div className="valueItem">
                 <div style={{color:"#fefefe"}}>
                     {value.icons} 
                 </div>
                  <h4 style={{color:"goldenrod"}} >{value.text}</h4> 
                  <p style={{color:"wheat"}}>{value.content}</p>
                </div>
               )
            })}
        </div>
    </div>
  )
}

export default CoreValue