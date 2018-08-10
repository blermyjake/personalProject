import React, { Component } from "react";
import "./Assets/css/default.min.css";

import routes from "./routes";

import Header from "./components/headerComponent/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {routes}

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
