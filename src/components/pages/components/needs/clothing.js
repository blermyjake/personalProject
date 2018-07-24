import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import ClothingMap from '../maps/ClothingMap'

class Clothing extends Component {
    render() {
        return (
            <div className="haveMain">

            <Need />

            <div className="container-fluid2">

            <h1>Clothing</h1>
            <hr/>

                
                <div >      
                <ClothingMap/>
                </div>
            </div>
                
            <div className="container-fluid3">
              
               <Dashboard />
               
               </div>
            </div>
        );
    }
}

export default Clothing;