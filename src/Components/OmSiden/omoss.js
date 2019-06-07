import React from 'react'
import '../OmSiden/omoss.css'



class OmOss extends React.Component {


    constructor() {
        super()

        this.state = {

            clicked: false, 
            isHovered: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }

    handleClick(event) {

        this.setState(prevState => ({
            clicked: !prevState.clicked
          }))

    }

    handleHover() {


        this.setState(prevState => ({
            isHovered: !prevState.isHovered
          }))

          console.log(this.state.isHovered)
    }

    render() {
        return (
            <div>

            <h1 className="omOssText"  onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            {this.state.clicked ?  'Tilbake' : 'Om oss' }

            <div className={this.state.isHovered ? "omOssLine" : "omOssLineTom" }></div>
            </h1>
            <div className= {this.state.clicked ? "omOssContainerStor" : "omOssContainer"}>
                
                    <h1 className= {this.state.clicked ? "omOssH1" : "omOssH1Tom"}>Du må ikke tåle så inderlig vel den urett som ikke rammer deg selv</h1>
                    <p  className= {this.state.clicked ?  "omOssParagraph" : "omOssParagraphTom"} >Her kan vil du få en enkel oversikt over hvilke land som bryter visse rettigheter eller behandler sine innbyggere på en dårlig måte. Vi gir den en enkel oversikt
                slik at du lettere kan ta en gjennomtenkt besluttning neste gang du skal ut å reise eller om du har et ønsker om å være mer bevist om hvor dine penger havner ved kjøp av varer. Bruk også gjerne 
                denne informasjonen til å hjelpe mennesker som lever i en diskriminerende verden. Siden vil stadig oppdateres ved utviklinger</p>
                          
            </div>
            </div>
            
        )   
    }

}

export default OmOss