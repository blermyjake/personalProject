import React, { Component } from 'react';
import Have from './have';
import Dashboard from '../table/dashboard';

class Donations extends Component {
    render() {
        return (
            <div className="haveMain">
            <Have />
            <div className="container-fluid2">
            <h1>Clothes, food, money...</h1>
            <hr/>

                
                
            <h3>
            Donations
            </h3>

            <p>
            When donating food and clothing, you help fight starvation amongst the homeless who can’t afford to feed themselves.
            </p>

            {/* <h3>HELP CLOTHE</h3>
            
            <p>    
            By donating clothing you’re helping to raise a homeless individual's quality of life and self perception.
            </p> */}
        </div>

        <div className="container-fluid3">
              
              <Dashboard />
              
              </div>
    </div>
        );
    }
}

export default Donations;