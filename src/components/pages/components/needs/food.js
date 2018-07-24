import React, { Component } from 'react';
import Need from '../../need';
import Dashboard from '../../../table/dashboard';
import FoodMap from '../maps/FoodMap';

class Food extends Component {
    render() {
        console.log(Dashboard);
        return (
            <div className="container-fluid">
            <Need />
            <h1>Food</h1>
            <hr/>

                <h2>
                    I Need
                </h2>

                <div className="container-fluid">
                    <FoodMap/>
                </div>
                
                <hr/>
                <Dashboard />
                
            </div>
        );
    }
}

export default Food;