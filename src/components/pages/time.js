import React, { Component } from 'react';
import Have from './have';
import Dashboard from '../table/dashboard';

class Time extends Component {
    render() {
        return (
            <div className="haveMain">
            <Have />
            <div className="container-fluid2">

            <h1>Volunteer your Time</h1>
            <hr/>

                {/* <h3>
                HELP EDUCATE
                </h3> */}

    <h3>

Donate your time through mentorship and volunteering
 opportunities. Search to find the right place for you.
    </h3>
                </div>

                <div className="container-fluid3">
              
              <Dashboard />
              
              </div>
            </div>
        );
    }
}

export default Time;