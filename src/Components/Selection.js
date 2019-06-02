import React from 'react'
import Data from '../Components/data'
import LandItem from '../Components/landItem'
import Options from '../Components/Option'


function Selection () {
    const Items = Data.map(item => <LandItem key={item.id} item={item} />)


      return (

        <div>
         <Options />   
         <div className="gridContainer">
            {Items}
         </div>    
         </div>

      )
    }


export default Selection