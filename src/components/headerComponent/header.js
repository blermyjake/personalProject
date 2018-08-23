import React, { Component } from "react";
import { Link } from "react-router-dom";
import hands from "../headerComponent/hands.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false
    };
  }
  render() {
    return (
      <div>
        <header>
          {/* <div className="logo">HELPING HANDS</div> */}
          <img src={hands} className="logo" />
          <nav>
            <label
              // for="toggle"
              onClick={() => this.setState({ isOpened: !this.state.isOpened })}
            >
              &#9776;
            </label>
            <input type="checkbox" id="toggle" />
            <section
              className={
                this.state.isOpened
                  ? "drop-down-menu opened"
                  : "drop-down-menu closed"
              }
            >
              <ul className="ulStyle">
                <li
                  className="Home"
                  onClick={() =>
                    this.setState({ isOpened: !this.state.isOpened })
                  }
                >
                  <Link to="/" className="header-links">
                    Home
                  </Link>
                  {/* <a href="#">Home</a> */}
                </li>

                <li
                  className="Need"
                  onClick={() =>
                    this.setState({ isOpened: !this.state.isOpened })
                  }
                >
                  <Link to="/need" className="header-links">
                    Get Help
                  </Link>
                  {/* <a href="#">Products</a> */}
                </li>

                <li
                  className="Have"
                  onClick={() =>
                    this.setState({ isOpened: !this.state.isOpened })
                  }
                >
                  <Link to="/have" className="header-links">
                    Give Help
                  </Link>
                  {/* <a href="#">Contact</a> */}
                </li>

                <li
                  className="About"
                  onClick={() =>
                    this.setState({ isOpened: !this.state.isOpened })
                  }
                >
                  <Link to="/about" className="header-links">
                    About
                  </Link>
                  {/* <a href="#">Contact</a> */}
                </li>

                <li
                  className="User"
                  onClick={() =>
                    this.setState({ isOpened: !this.state.isOpened })
                  }
                >
                  <Link to="/user" className="header-links">
                    Profile
                  </Link>
                </li>

                <li className="Login">
                  <a
                    className="header-links"
                    href={process.env.REACT_APP_LOGIN}
                  >
                    Login
                  </a>
                  {/* <a href="#">Contact</a> */}
                </li>
              </ul>
            </section>
          </nav>
        </header>
        {/* <section
          className={
            this.state.isOpened
              ? "drop-down-menu opened"
              : "drop-down-menu closed"
          }
        > */}
        {/* <a>link 1</a>
        </section> */}
      </div>
    );
  }
}

export default Header;
