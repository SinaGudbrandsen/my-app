import React from 'react'
import lgbtqData from '../LGBTQ/lgbtqData'
import LgbtqItem from '../LGBTQ/lgbtq'



function LgbtqSelection(props) {
    
    const Items = lgbtqData.map(item => <LgbtqItem key={item.id} item={item} />)


      return (         
         <div className= {props.lgbtq ? "lgbtqSelection" : "lgbtqSelectionNone"}>
            {Items}
         </div>    

      )
    }


export default LgbtqSelection