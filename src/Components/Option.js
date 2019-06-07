
import React from 'react'
import Selection from '../Components/KvinnersRettigheter/Selection'
import LgbtqSelection from '../Components/LGBTQ/lgbtqSelection'
import YtringSelection from '../Components/Ytringsfrihet/ytringSelection'


class Options extends React.Component {
    constructor() {
        super() 

        this.state = {
            kvinner: false, 
            lgbtq: false, 
            ytring: false
        }

        /* bind event handlers*/ 
        this.handleClickKvinner = this.handleClickKvinner.bind(this)
        this.handleClickLGBTQ = this.handleClickLGBTQ.bind(this)
        this.handleClickYtring = this.handleClickYtring.bind(this)
    }

    handleClickKvinner(event) {
        /* Change state on click */
        /* Only change state if state is false to prevent removing the items on dobbleclick */
        if (this.state.kvinner === false) {

            this.setState(prevState => ({
                kvinner: !prevState.kvinner
              })) 
        }
        /* Toggle state of previous clicked item */
        if (this.state.lgbtq === true) {
            this.setState(prevState => ({
                lgbtq: !prevState.lgbtq
              }))  } else {}

        if (this.state.ytring === true) {
            this.setState(prevState => ({
                ytring: !prevState.ytring
              }))  } else {}   
    } 


    handleClickLGBTQ(event) {
        /* Change state on click */
        /* Only change state if state is false to prevent removing the items on dobbleclick */
        if(this.state.lgbtq === false) { 
        this.setState(prevState => ({
            lgbtq: !prevState.lgbtq
          }))  
        }
        /* Toggle state of previous clicked item */
        if (this.state.kvinner === true) {
            this.setState(prevState => ({
                kvinner: !prevState.kvinner
              }))  } else {}
              
        if (this.state.ytring === true) {
            this.setState(prevState => ({
                ytring: !prevState.ytring
              }))  } else {} 
    }

    handleClickYtring(event) {
        /* Change state on click */
        /* Only change state if state is false to prevent removing the items on dobbleclick */
        if (this.state.ytring === false ) {
            this.setState(prevState => ({
                ytring: !prevState.ytring
              }))
        }
        /* Toggle state of previous clicked item */ 
        if (this.state.kvinner === true) {
            this.setState(prevState => ({
                kvinner: !prevState.kvinner
              }))  } else {}

        if (this.state.lgbtq === true) {
            this.setState(prevState => ({
                lgbtq: !prevState.lgbtq
              }))  } else {} 
    }



    render() {

    
    return (
        <div>
        <div className="optionsComponent">
        
            <p  className= {this.state.kvinner ? "optionKvinner" : "optionGrey" }
            onClick={this.handleClickKvinner} 
            >Kvinner</p>

            <p  className= {this.state.lgbtq ? "optionLgbtq" : "optionGrey"} 
            onClick={this.handleClickLGBTQ} >Lgbtq</p>

            <p  className= {this.state.ytring ? "optionYtring" : "optionGrey"  }
            onClick={this.handleClickYtring}> Ytringsfrihet </p>
                    <div className={this.state.kvinner ? "optionsLine" : "optionsLineTom"}> </div>
                    <div className={this.state.lgbtq ? "optionsLineLGBTQ"  :  "optionsLineTom"}> </div>
                    <div className={this.state.ytring ? "optionsLineYtring"  : "optionsLineTom"}> </div>
           </div> 

    
           <p className={this.state.kvinner || this.state.lgbtq || this.state.ytring ? "frontPageMessageNone" : "frontPageMessage"  }>
           En guide til hvilke land som bryter visse rettigheter eller behandler sine innbyggere dårlig. Velg hvilken sak som er viktigst for deg, behandling av <span>kvinner</span>,  <span>Lgbtq´s</span> rettigheter eller respektering av <span>Ytringsfrihet</span></p>

            <div>
                 <Selection kvinner={this.state.kvinner} />
                 <LgbtqSelection  lgbtq={this.state.lgbtq}/>
                 <YtringSelection ytring={this.state.ytring} />
           </div>    
       </div>
        
        )
    }
}

export default Options

