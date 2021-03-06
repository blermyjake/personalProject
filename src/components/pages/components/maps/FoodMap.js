import React, { Component } from "react";
// import { withGoogleMap, GoogleMap } from 'react-google-maps';

class FoodMap extends Component {
  render() {
    const url = `https://www.google.com/maps/embed/v1/search?key=${
      process.env.REACT_APP_API_KEY
    }&zoom=12&q=homeless+food+dallas`;

    return (
      <div className="mapMainDiv">
        <div className="map-responsive">
          {/* <iframe className="shelterMap embed-responsive-item" src={url}></iframe> */}
          <iframe
            width="750"
            height="550"
            frameborder="0"
            src={url}
            ref={ref => (this.frame = ref)}
            allowfullscreen
            mozallowfullscreen
            webkitallowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default FoodMap;
