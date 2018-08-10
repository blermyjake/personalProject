import React, { Component } from "react";
// import Dashboard from '../../../table/dashboard';

class About extends Component {
  render() {
    return (
      <div>
        <div id="imgAbout" className="container-fluid5">
          {/* <h1>About us</h1> */}
          <h1 className="aboutH1">Purpose</h1>
        </div>

        <div className="aboutContainer">
          <div className="pAboutDiv">
            <p className="pAbout">
              Our purpose is to gather together exisiting resources to help the
              homeless. Many have a desire to help but don't know where to
              start. And many others have a need but don't know where to go for
              help. Here you can find all the area resources for helping the
              underprivelaged in one place.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
