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

  // componentDidMount() {
  //     this.getUser()
  //     console.log("Component Did Mount Fired")
  // }

  // getUser(){
  //     axios.get("/api/getUser").then(res => {
  //         this.setState({
  //             userId: res.data.userid
  //         })
  //         this.getMyData(this.state.userId)
  //     }).catch(err => console.log(err))
  // }

  // getMyData = (id) => {
  //     axios.get(`/api/userData/${id}`).then(res => {
  //       this.setState({ myData: res.data });
  //     }).catch(err => console.log(err))
  //   }

  // deleteUserData = (id) => {
  //     axios.delete(`/api/userData/${id}`).then(() => {
  //         this.getMyData(this.state.userId)
  //     }).catch(err => console.log(err))
  //   }

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
    console.log('CHILD STATE: ', this.state);
    //   console.log(this.state);

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
                <td className="tdStyle2User">{e.services_offered}</td>
                <td className="tdStyle3User">{e.address}</td>
                <td className="tdStyle4User">{e.hours}</td>
                <td className="tdStyle5User">{e.phone}</td>
                <td className="tdStyle6User">{e.maplink}</td>
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
                <th className="tabHead7User">User Id</th>
              </tr>
            </thead>
          </table>
        </div>
        {thisUserData}
      </div>
    );
  }
}
