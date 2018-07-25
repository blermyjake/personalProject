import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        // console.log(process.env.REACT_APP_LOGIN)
        return (
            <header>
               <div className="logo">
                LOGO
               </div>

            <nav>
                <ul>
                    <li className='Home'>
                        <Link to="/">Home</Link>
                        {/* <a href="#">Home</a> */}
                    </li>
                    <li className='Need'>
                        <Link to="/need">I Need</Link>
                        {/* <a href="#">Products</a> */}
                    </li>
                    <li className='Have'>
                        <Link to="/have">I Have</Link>
                        {/* <a href="#">Contact</a> */}
                    </li>
                    <li className='About'>
                        <Link to="/about">About</Link>
                        {/* <a href="#">Contact</a> */}
                    </li>

                    <li className='User'>
                        <Link to="/user">Profile</Link>
                    </li>
                    <li className='Login'>
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