/*import React from 'react'
import '../backButton/backButton'


class BackButton extends React.Component {

    constructor() {
        super()
    
        this.state = {
            intervalId: 0
        }

        this.scrollToTop = this.scrollToTop.bind(this)
        this.scrollStep = this.scrollStep.bind(this)
      }
      
      scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
      }
      
      scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
      }

    render() {
       
            return (

                <div className="backToTop" onClick={ () => { this.scrollToTop(); }}>
                    
                </div>    

            )
     }
} 
    
export default BackButton*/