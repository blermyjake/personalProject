import React, { Component } from 'react';
import './Assets/css/default.min.css';
// import {Route} from 'react-router-dom';

import routes from './routes';
// import Heart from './components/pages/heart';
// import Have from './components/pages/have';

// components
import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';

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
