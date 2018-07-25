import React, { Component } from 'react';
import Have from './have';
import Dashboard from '../table/dashboard';

class Skills extends Component {
    render() {
        return (
            <div className="haveMain">
                
                <Have />

                <div className="container-fluid2">

                    <h1>I Have Skills</h1>
                    <hr/>

                    <h3>Search our database and find the right place for you to help.</h3>

                    {/* <p>Teach, lend a hand, build a house, lend medical expertise...</p> */}
                    
                </div>
                <div className="container-fluid3">
              
               <Dashboard />
               
               </div>
                
            </div>
        );
    }
}

export default Skills;