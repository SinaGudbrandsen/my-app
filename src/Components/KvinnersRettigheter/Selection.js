import React from 'react'
import Data from '../KvinnersRettigheter/data'
import LandItem from '../KvinnersRettigheter/landItem'


function Selection(props) {
  
    const Items = Data.map(item => <LandItem key={item.id} item={item} />)
      return (
         <div className= {props.kvinner ? "kvinnerSelection" : "kvinnerSelectionNone"}>
            {Items}
         </div>    
      )
    }
export default Selection