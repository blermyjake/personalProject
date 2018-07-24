import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import ShelterMap from '../../components/maps/ShelterMap';

class Skills extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Need />
            <h1>Shelter</h1>
            <hr/>

                <div className="container-fluid">
                <ShelterMap/>
                </div>

                

               <p>
               <Dashboard />
               </p>
            </div>
        );
    }
}

export default Skills;