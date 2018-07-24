import React, { Component } from 'react';
import Have from './have'

class Donations extends Component {
    render() {
        return (
            <div className="container-fluid">
            <Have />
            <h1>Clothes, food, money...</h1>
            <hr/>

                
                
            <h3>
            HELP FEED   
            </h3>

            <p>
            When donating food, you help fight starvation amongst the homeless who can’t afford to feed themselves.
            </p>

            <h3>HELP CLOTHE</h3>
            
            <p>    
            By donating clothing you’re helping to raise a homeless individual's quality of life and self perception.
            </p>
                
    </div>
        );
    }
}

export default Donations;