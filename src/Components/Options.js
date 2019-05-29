import React from 'react'


class Options extends React.Component {
    constructor() {
        super() 
        this.state = {

            option: ""

        }

        this.handleChange = this.handleChange.bind(this)
    }

        handleChange(event) {


        }

        
    render() {
    return (

        <select value={this.state.option}

            onChange={this.handleChange}
            name="option">
            <option value="kvinner"> Kvinners rettigheter </option>
            <option value="lgbtq"> LGBTQ </option>
            <option value="ytring"> Ytringsfrihet </option>
        </select>    
    )

}
}

export default Options