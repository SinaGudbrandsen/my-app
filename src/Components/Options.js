import React from 'react'
import LandItem from '../Components/landItem'
import Selection from '../Components/Selection'

class Options extends React.Component {

    constructor() {
        super() 
        this.state = {

            option: ""

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        const {name, value} = event.target

        this.setState({
            [name]: value
        })       
        
    } 

    render() {


    if (this.state.option === "kvinner") {
        
        console.log("hjkl")
        return (
            <Selection className="container" />
        )
     }
     if (this.state.option === "lgbtq") {
        
        console.log("hjkl")
        return (
            <Selection className="container" />
        )
     } 

         
    return (
        <div>
            <h1>{this.state.option}</h1>
            <select className="options" value={this.state.option}
            onChange={this.handleChange}
            name="option"
            placeholder="Hvilken sak er viktig for deg?"> 
            <option disabled >Hvilken sak er vikitg for deg?</option>
            <option value="kvinner"> Kvinners rettigheter </option>
            <option value="lgbtq"> LGBTQ </option>
            <option value="ytring"> Ytringsfrihet </option>
        </select>   
        </div> 
        
    )

}
}

export default Options