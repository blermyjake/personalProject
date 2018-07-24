import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import ShelterMap from '../../components/maps/ShelterMap';

class Skills extends Component {
    render() {
        return (
            <div className="haveMain">
                
                <Need />
           
                <div className="container-fluid2">

                    <h1>Shelter</h1>
                    <hr/>

                    <div>
                        <ShelterMap/>
                    </div>

                </div>

                <div className="container-fluid3">
                  <Dashboard />
               </div>
               
            </div>
        );
    }
}

export default Skills;