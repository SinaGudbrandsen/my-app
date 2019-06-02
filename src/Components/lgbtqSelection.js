import React from 'react'
import lgbtqData from '../Components/lgbtqData'
import LgbtqItem from '../Components/lgbtq'
import Options from '../Components/Option'


function LgbtqSelection () {
    const Items = lgbtqData.map(item => <LgbtqItem key={item.id} item={item} />)


      return (

        <div>
         <Options />   
         <div className="gridContainer">
            {Items}
         </div>    
         </div>

      )
    }


export default LgbtqSelection