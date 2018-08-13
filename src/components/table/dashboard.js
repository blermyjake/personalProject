import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import axios from "axios";
import "../../Assets/css/default.min.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCenters: [],
      input: ""
    };

    this.getRequest = this.getRequest.bind(this);
    this.handleInput = this.handleInput.bind(this);
    //   this.deleteHome = this.deleteHome.bind(this);
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    console.log(process.env);
    axios.get(process.env.REACT_APP_CENTERS).then(res => {
      console.log(res);
      this.setState({ allCenters: res.data });
    });
  }

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  render() {
    const { input } = this.state;
    //   console.log(this.state);

    //   console.log(allCenters);
    // console.log(allData);

    let allData = this.state.allCenters
      .filter(e => e.services.toLowerCase().includes(input.toLowerCase()))
      .map((e, i) => (
        // BORDER="5"    WIDTH="50%"   CELLPADDING="4" CELLSPACING="3"
        <div className="tableDiv" key={i}>
          <div className="styleTable">
            <table className="table">
              <tbody className="tbody">
                <tr className="trMain">
                  <td data-label="Organization" className="tdStyle1">
                    {e.organization}
                  </td>
                  <td data-label="Services" className="tdStyle2">
                    {e.services}
                  </td>
                  <td data-label="Website" className="tdStyle3">
                    {e.address}
                  </td>
                  <td data-label="Hours" className="tdStyle4">
                    {e.hours}
                  </td>
                  <td data-label="Phone" className="tdStyle5">
                    {e.phone}
                  </td>
                  <td data-label="Maplink" className="tdStyle6">
                    {e.maplink}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ));

    return (
      <div>
        {/* <h2>Help Center Information</h2> */}
        <hr />
        <input
          className="inputSearch"
          placeholder="Search"
          onChange={event => this.handleInput(event.target.value)}
        />
        <hr />

        <div className="tabHeadTop">
          <table className="tableHead">
            <thead>
              {/* table headers */}
              <tr>
                <th data-label="Organization" className="tabHead1">
                  Organization
                </th>
                <th data-label="Services" className="tabHead2">
                  Services
                </th>
                <th data-label="Website" className="tabHead3">
                  Website
                </th>
                <th data-label="Hours" className="tabHead4">
                  Hours
                </th>
                <th data-label="Phone Number" className="tabHead5">
                  Phone
                </th>
                <th data-label="Maplink" className="tabHead6">
                  Maplink
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {allData}
      </div>
    );
  }
}
// }
