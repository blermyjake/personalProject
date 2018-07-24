import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import ClothingMap from '../maps/ClothingMap'

class Clothing extends Component {
    render() {
        return (
            <div className="container-fluid">
            <Need />
            <h1>Clothing</h1>
            <hr/>

                <h2>
                    I Need
                </h2>
                
                <div className="container-fluid">
                <ClothingMap/>
                </div>

                

               <p>
               <Dashboard />
               </p>
            </div>
        );
    }
}

export default Clothing;