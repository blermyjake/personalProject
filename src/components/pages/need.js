import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

// import Shelter from './components/needs/shelter';
// import Food from './components/needs/food';
// import Clothing from './components/needs/clothing';
// import Help from './components/needs/help';
// import Dashboard from '../table/dashboard';

import "../../Assets/css/default.min.css";

class Need extends Component {
  render() {
    return (
      // component={Shelter}
      // component={Food}
      // component={Clothing}
      // component={Help}
      <div className="container-fluidNeed">
        <h1 className="needTop">I Need</h1>

        <div className="needDiv">
          <button className="button">
            <Link to="/need/shelter">Shelter</Link>
          </button>

          <button className="button">
            <Link to="/need/food">Food</Link>
          </button>

          <button className="button">
            <Link to="/need/clothing">Clothing</Link>
          </button>

          <button className="button">
            <Link to="/need/help">Help</Link>
          </button>
        </div>
        <hr />
        <p className="needP">
          There are many places to get help in the Dallas area. Whatever your
          needs are, there's a place ready to help. Click through to find the
          right place for you.
        </p>
      </div>
    );
  }
}

export default Need;
