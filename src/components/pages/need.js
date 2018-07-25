import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";


// import Shelter from './components/needs/shelter';
// import Food from './components/needs/food';
// import Clothing from './components/needs/clothing';
// import Help from './components/needs/help';
// import Dashboard from '../table/dashboard';

import '../../Assets/css/default.min.css';

class Need extends Component {
    render() {
        return (
            // component={Shelter}
            // component={Food}
            // component={Clothing}
            // component={Help}
            <div className="container-fluid">
                
                <h1>
                    I Need
                   
                </h1>
   
                <div className="needDiv">
                        <button className="button">
                        <Link to="/need/shelter" >Shelter</Link>
                        </button>

                        <button className="button">
                        <Link to="/need/food" >Food</Link>
                        </button>

                        <button className="button">
                        <Link to="/need/clothing" >Clothing</Link>
                        </button> 

                        <button className="button">
                        <Link to="/need/help" >Help</Link>
                        </button>








                </div>    
                <hr/>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, totam consequatur ipsa accusantium praesentium error consequuntur, modi ipsam atque asperiores nesciunt deleniti eligendi? Nam culpa ab ipsum omnis temporibus dicta.
            </p>
        </div>
    );
}
}

export default Need;