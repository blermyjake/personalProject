import React, { Component } from 'react';
// import Dashboard from '../../../table/dashboard';
import UserTable from '../../../table/userTable'
import UpdateUser from './updateUser';


class User extends Component {
    render() {
        return (
            <div className="container-fluid">
            
            <h1>My Profile</h1>
            <hr/>

                
                <h2>
                    My Center Information
                </h2>


                    <UpdateUser />
                <hr/>

                    <UserTable />

                
            </div>
        );
    }
}

export default User;