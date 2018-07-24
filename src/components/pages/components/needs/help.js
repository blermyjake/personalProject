import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import HelpMap from '../maps/HelpMap';

class Help extends Component {
    render() {
        return (

            <div className="haveMain">
            
            <Need />

             <div className="container-fluid2">
            <h1>Addiction Recovery</h1>
            <hr/>

 
                <div>
                    <HelpMap/>
                </div>
            </div>
                  
               <div className="container-fluid3">
                  <Dashboard />
               </div>
            </div>
        );
    }
}

export default Help;