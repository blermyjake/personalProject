import React, { Component } from 'react';
import {Link} from 'react-router-dom';



// import Heart from './heart';
// import Time from './time';
// import Donations from './donations';
// import Skills from './skills';
import '../../Assets/css/default.min.css';

class Have extends Component {
    render() {
        return (
            <div className="container-fluid">
                
                <h1>
                Get Involved
                </h1>
                <h3>Inspire change in your community.</h3>
                
                <div className="haveDiv">

                        <button className="button">
                            <Link to="/have/heart" >The Heart</Link>
                        </button>
                        
                        
                        <button className="button">
                            <Link to="/have/skills" >Skills</Link>
                        </button>
                       

                        <button className="button">
                            <Link to="/have/donations" >Dontations</Link>
                        </button>
                        

                        <button className="button">
                            <Link to="/have/time" >Time</Link>
                        </button>
                        

                        
                        
                 
                </div>
               
                
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, totam consequatur ipsa accusantium praesentium error consequuntur, modi ipsam atque asperiores nesciunt deleniti eligendi? Nam culpa ab ipsum omnis temporibus dicta.
                </p>

            </div>
        );
    }
}

export default Have;