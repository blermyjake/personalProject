import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import HelpMap from '../maps/HelpMap';

class Help extends Component {
    render() {
        return (
            <div className="container-fluid">
            <Need />
            <h1>Addiction Recovery</h1>
            <hr/>

                <h2>
                    I Need
                </h2>
                
                <div className="container-fluid">
                <HelpMap/>
                </div>

                

               <p>
               <Dashboard />
               </p>
            </div>
        );
    }
}

export default Help;