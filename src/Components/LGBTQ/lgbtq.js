import React from 'react'

function LgbtqItem(props) {

    return (
        <div className="countryContainer">
            <h1>{props.item.id}</h1>
            <div className="countryLine"></div>
            <p>{props.item.text}</p>
        </div>    
    )
}

export default LgbtqItem 