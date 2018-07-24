import React, { Component } from 'react';
import Dashboard from '../../../table/dashboard';

class User extends Component {
    render() {
        return (
            <div className="container-fluid">
            
            <h1>Profile</h1>
            <hr/>

                <h2>
                    Profile
                </h2>

    <div className="container-fluid3">
                  <Dashboard />
               </div>
                
            </div>
        );
    }
}

export default User;