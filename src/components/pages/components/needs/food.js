import React, { Component } from "react";
import Need from "../../need";
import Dashboard from "../../../table/dashboard";
import FoodMap from "../maps/FoodMap";

class Food extends Component {
  render() {
    return (
      <div className="haveMain">
        <Need />

        <div className="container-fluid2">
          <h1>Food</h1>
          <hr />

          <div>
            <FoodMap />
          </div>
        </div>

        <div className="container-fluid3">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Food;
