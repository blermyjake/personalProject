import React, { Component } from "react";
// import Dashboard from '../../../table/dashboard';
import UserTable from "../../../table/userTable";
import UpdateUser from "./updateUser";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: [],
      userId: 0,
      name: ""
    };
    this.getUser = this.getUser.bind(this);
    this.getMyData = this.getMyData.bind(this);
  }
  componentDidMount() {
    this.getUser();
    // console.log("Component Did Mount Fired")
  }

  getUser() {
    axios
      .get("/api/getUser")
      .then(res => {
        // console.log("USER-INFO HERE=>>>", res.data);
        this.setState({
          userId: res.data.userid
        });
        this.getMyData(this.state.userId);
      })
      .then(() => this.getUniqueData(this.state.userId))
      .catch(err => console.log(err));
  }

  getMyData = id => {
    axios
      .get(`/api/userData/${id}`)
      .then(res => {
        this.setState({ myData: res.data });
      })
      .catch(err => console.log(err));
  };

  getUniqueData = id => {
    axios
      .get(`/api/userData/hello/${id}`)
      .then(res => {
        // console.log(res);
        this.setState({ name: res.data[0].name });
      })
      .catch(err => console.log(err));
  };

  deleteUserData = id => {
    axios
      .delete(`/api/userData/${id}`)
      .then(() => {
        this.getMyData(this.state.userId);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { input } = this.state;
    // console.log("PARENT STATE: ", this.state);
    // console.log(process.env);
    return (
      <div className="container-fluid4">
        <h1 className="userWelcome">Welcome {this.state.name}</h1>
        <a href={process.env.REACT_APP_LOGOUT} />
        <hr />

        <UpdateUser userId={this.state.userId} getMyData={this.getMyData} />
        <hr />
        <div className="userTable">
          <UserTable
            userId={this.state.userId}
            myData={this.state.myData}
            deleteUserData={this.deleteUserData}
            getMyData={this.getMyData}
          />
        </div>
      </div>
    );
  }
}

export default User;

// Bring all state and methods from userTable to this Component.
// Pass the methods to the apporiate components
// fire the methods the same way as before but just thru props
// fire getMyData with .then inside of post request
