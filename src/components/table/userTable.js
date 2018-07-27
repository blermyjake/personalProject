import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import axios from "axios";
import "../../Assets/css/default.min.css";
// import Checkbox from 'rc-checkbox';
import "font-awesome/css/font-awesome.min.css";

// const ReactDOM = require('react-dom');

export default class UserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // myData: [],
      // userId: 0,
      input: "",
      text: ""
    };
    //   leave input in state

    //   this.getUser = this.getUser.bind(this);
    //   this.getMyData = this.getMyData.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  //   leave this method here
  handleInput(val) {
    this.setState({
      input: val
    });
  }

  handleEdit = (dataType, id) => {
    console.log(id);
    this.setState({ [dataType + id]: false, text: "" });
    axios
      .put(`/api/userData/${id}`, {
        data: { type: dataType, value: this.state.text }
      })
      .then(() => this.props.getMyData(this.props.userId));
  };

  render() {
    const { input } = this.state;
    console.log("CHILD STATE: ", this.state);

    //   console.log(allCenters);
    // console.log(allData);

    let thisUserData = this.props.myData.map((e, i) => (
      <div className="tableDiv" key={i}>
        <div className="styleTable">
          <table className="table">
            <tbody className="tbody">
              <tr className="trMain">
                <td className="tdStyleCheckBox">
                  <i
                    className="fa fa-trash"
                    onClick={() => this.props.deleteUserData(e.id)}
                  />
                </td>

                {this.state[`${e.organization}${e.id}`] ? (
                  <input
                    value={this.state.text || e.organization}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="organization"
                  />
                ) : (
                  <td
                    className="tdStyle1User"
                    onClick={() =>
                      this.setState({ [e.organization + e.id]: true })
                    }
                  >
                    {e.organization}
                  </td>
                )}

                {this.state[`${e.services}${e.id}`] ? (
                  <input
                    value={this.state.text || e.services}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="services"
                  />
                ) : (
                  <td
                    className="tdStyle2User"
                    onClick={() => this.setState({ [e.services + e.id]: true })}
                  >
                    {e.services}
                  </td>
                )}

                {this.state[`${e.address}${e.id}`] ? (
                  <input
                    value={this.state.text || e.address}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="address"
                  />
                ) : (
                  <td
                    className="tdStyle3User"
                    onClick={() => this.setState({ [e.address + e.id]: true })}
                  >
                    {e.address}
                  </td>
                )}

                {this.state[`${e.hours}${e.id}`] ? (
                  <input
                    value={this.state.text || e.hours}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="hours"
                  />
                ) : (
                  <td
                    className="tdStyle4User"
                    onClick={() => this.setState({ [e.hours + e.id]: true })}
                  >
                    {e.hours}
                  </td>
                )}

                {this.state[`${e.phone}${e.id}`] ? (
                  <input
                    value={this.state.text || e.phone}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="phone"
                  />
                ) : (
                  <td
                    className="tdStyle5User"
                    onClick={() => this.setState({ [e.phone + e.id]: true })}
                  >
                    {e.phone}
                  </td>
                )}

                {this.state[`${e.maplink}${e.id}`] ? (
                  <input
                    value={this.state.text || e.maplink}
                    onBlur={event => this.handleEdit(event.target.name, e.id)}
                    onChange={event =>
                      this.setState({ text: event.target.value })
                    }
                    name="maplink"
                  />
                ) : (
                  <td
                    className="tdStyle6User"
                    onClick={() => this.setState({ [e.maplink + e.id]: true })}
                  >
                    {e.maplink}
                  </td>
                )}

                <td className="tdStyle7User">{e.userid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ));

    return (
      <div>
        <h2>Help Center Information</h2>
        <hr />
        {/* <input className='inputSearch' placeholder="Search"
            onChange={(event) => this.handleInput(event.target.value)}/>
            <hr/> */}

        <div className="tabHeadTop">
          <table className="tableHead">
            <thead>
              {/* table headers */}
              <tr>
                <th className="tabHead0User" />
                <th className="tabHead1User">Organization</th>
                <th className="tabHead2User">Services Offered</th>
                <th className="tabHead3User">Website</th>
                <th className="tabHead4User">Hours</th>
                <th className="tabHead5User">Phone Number</th>
                <th className="tabHead6User">Maplink</th>
                <th className="tabHead7User">Join Data</th>
              </tr>
            </thead>
          </table>
        </div>
        {thisUserData}
      </div>
    );
  }
}
