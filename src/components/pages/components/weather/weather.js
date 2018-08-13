import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      weather: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/75201?apikey=${
        process.env.REACT_APP_ACCUWEATHER
      }`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          weather: json.DailyForecasts[0].Temperature
        });
      });
  }

  render() {
    const { isLoaded, weather } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="weather">
          <p className="weatherText">
            {" "}
            {/* Today's weather forecast in Dallas is a high of{" "} */}
            {weather.Maximum.Value} °F | {""}
            {weather.Minimum.Value}
            °F
          </p>
        </div>
      );
    }
  }
}

export default Weather;
