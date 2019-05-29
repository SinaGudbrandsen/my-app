import React from 'react'
import Data from '../Components/data'
import LandItem from '../Components/landItem'

function Selection () {


    const Items = Data.map(item => <LandItem key={item.id} item={item} />)


      return (
         <div>
            {Items}
         </div>    

      )
    }


export default Selection