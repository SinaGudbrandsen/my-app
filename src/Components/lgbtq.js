import React from 'react'
import lgbtqData from '../Components/lgbtqData'

function LgbtqItem(props) {

    return (
        <div className="countryContainer">
            <p>{props.item.id}</p>
            <div className="countryLine"></div>
            <p>{props.item.text}</p>
        </div>    
    )
}

export default LgbtqItem 