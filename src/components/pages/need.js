import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/default.min.css";

class Need extends Component {
  render() {
    return (
      <div id="imgNeedTop" className="container-fluid">
        <div className="needTop">
          <h1 className="nNeedd">I Need</h1>
          <h1 id="nNeed">I Need</h1>
        </div>
        <div className="buttonNeed">
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
        <div className="testNeedDiv">
          <p className="needP">
            There are many places to get help in the Dallas area. Whatever your
            needs are, there's a place ready to help. Click through to find the
            right place for you.
          </p>
        </div>
      </div>
    );
  }
}

export default Need;
