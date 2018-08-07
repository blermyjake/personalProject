// import axios from "axios";
// const base = `api.openweathermap.org/data/2.5/weather?q=Dallas,us&appid=${
//   process.env.REACT_APP_WEATHER_API_KEY
// }`;
// const geoLookup = `${base}/geolookup/q/autoip.json`;

// const getWeatherUrl = (lat, long) =>
//   `${base}/forecast/geolookup/conditions/q/${lat},${long}.json`;

// const getLocation = () =>
//   axios
//     .get(geoLookup)
//     .then((rsp = rsp.data.location))
//     .then(location => ({ lat: location.lat, lon: location.lon }));

// const getWeather = () =>
//   getLocation().then(location =>
//     axios
//       .get(getWeatherUrl(location.lat, location.lon))
//       .then(rsp => rsp.data.current_observation)
//   );

// export default getWeather;
