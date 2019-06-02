
import React from 'react'
import LandItem from '../Components/landItem'
import Selection from '../Components/Selection'
import LgbtqSelection from './lgbtqSelection';

class Options extends React.Component {

    constructor() {
        super() 

        this.state = {
            kvinner: false, 
            lgbtq: false, 
            ytring: false, 
            onKvinner: false,
            onLgbtq: false, 
            onYtring: false
        }
    
        this.handleClickKvinner = this.handleClickKvinner.bind(this)
        this.handleClickLGBTQ = this.handleClickLGBTQ.bind(this)
        this.handleClickYtring = this.handleClickYtring.bind(this)
    }

    handleClickKvinner(event) {

        this.setState(prevState => ({
            kvinner: !prevState.kvinner
          })) 
        this.setState(prevState => ({
            onKvinner: !prevState.onKvinner
          }))   

    } 
    handleClickLGBTQ(event) {

        this.setState(prevState => ({
            lgbtq: !prevState.lgbtq
          }))
          this.setState(prevState => ({
            onLgbtq: !prevState.onLgbtq
          }))   

    }
    handleClickYtring(event) {

        this.setState(prevState => ({
            ytring: !prevState.ytring
          }))
          this.setState(prevState => ({
            onYtring: !prevState.onYtring
          }))   

    }
    render() {

        if (this.state.kvinner === true && this.state.onKvinner === true) {
            return (
                <div>
                <div className="optionsLineLgbtq"></div>      
               <Selection />
                 </div>
            )            
        }
        else {
            return 
        }

        if (this.state.lgbtq === true && this.state.onLbgtq === true)  {
    
            return (
          
            <div>
                <div className="optionsLineLgbtq"></div>      
                <LgbtqSelection />
            </div>
       
            )   
        }
        else {
            return 
        }


        if (this.state.ytring === true  && this.state.onYtring === true) {
            return (
                <div>
                <Selection />
                </div>
            )           
        }
        else {
            return 
        }


         
    return (
        <div className="optionsComponent">
        
            <p  className="options"
            onClick={this.handleClickKvinner} 
            > Kvinners rettigheter </p>

            <p  className="options"
            onClick={this.handleClickLGBTQ} > LGBTQ </p>

            <p  className="options"
            onClick={this.handleClickYtring}> Ytringsfrihet </p>
            <div className="optionsLine"></div> 
        </div> 
        
    )

    }
}

export default Options

