import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Heart from './heart';
// import Time from './time';
// import Donations from './donations';
// import Skills from './skills';
import "../../Assets/css/default.min.css";

class Have extends Component {
  render() {
    return (
      <div id="imgHave" className="container-fluid">
        <div className="haveTop">
          <h1 className="hHave">Get Involved</h1>
          <h3 className="hHave">Inspire change</h3>
        </div>
        <div className="buttonHave">
          <button className="button">
            <Link to="/have/heart">The Heart</Link>
          </button>

          <button className="button">
            <Link to="/have/skills">Skills</Link>
          </button>

          <button className="button">
            <Link to="/have/donations">Donations</Link>
          </button>

          <button className="button">
            <Link to="/have/time">Time</Link>
          </button>
          {/* </div> */}
        </div>
        <div className="testDiv">
          <p className="haveP">
            “If you want happiness for a day, go fishing. If you want happiness
            for a year, travel the world. If you want happiness for a lifetime,
            help somebody.”
          </p>
        </div>
      </div>
    );
  }
}

export default Have;
