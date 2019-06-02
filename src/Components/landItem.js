import React from 'react'
import Data from '../Components/data'

function LandItem(props) {

    return (
        <div className="countryContainer">
            <p>{props.item.id}</p>
            <div className="countryLine"></div>
            <p>{props.item.text}</p>
        </div>    
    )
}

export default LandItem 