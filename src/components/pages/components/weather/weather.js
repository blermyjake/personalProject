import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
          <h4>Hi {weather.Maximum.Value} F</h4>
          <h4>Lo {weather.Minimum.Value} F</h4>
        </div>
      );
    }
  }
}

export default Weather;
