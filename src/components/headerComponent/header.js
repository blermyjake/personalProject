import React, { Component } from "react";
import { Link } from "react-router-dom";
import hands from "../headerComponent/hands.png";

class Header extends Component {
  render() {
    // console.log(process.env.REACT_APP_LOGIN)
    return (
      <header>
        {/* <div className="logo">HELPING HANDS</div> */}
        <img src={hands} className="logo" />
        <nav>
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <ul className="ulStyle">
            <li className="Home">
              <Link to="/">Home</Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li className="Need">
              <Link to="/need">Get Help</Link>
              {/* <a href="#">Products</a> */}
            </li>
            <li className="Have">
              <Link to="/have">Give Help</Link>
              {/* <a href="#">Contact</a> */}
            </li>
            <li className="About">
              <Link to="/about">About</Link>
              {/* <a href="#">Contact</a> */}
            </li>

            <li className="User">
              <Link to="/user">Profile</Link>
            </li>
            <li className="Login">
              <a href={process.env.REACT_APP_LOGIN}>Login</a>
              {/* <a href="#">Contact</a> */}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
