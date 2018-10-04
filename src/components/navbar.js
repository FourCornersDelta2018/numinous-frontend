import React, { Component } from 'react';
import AuthService from '../services'

class Navbar extends Component {
    constructor(props){
        super(props)
        let auth = new AuthService()
        this.state = {
            isLoggedIn: auth.loggedIn()
        }
    }
    handleClick = (e) => {
        let auth = new AuthService()
        auth.logout()
    }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
        <div className="navbar">
            <div className="pullLeft">
                <h1 id="brand">Numinous</h1>
            </div>
            <div></div>
            <div className="pullRight">
                {isLoggedIn ? (
                    <div>
                        <a href="/myepic">My Epic</a>
                        <a href="/" onClick={this.handleClick}>Log Out</a>
                    </div>
                ) : (
                    <div>
                        <a href="/registration">Register</a>
                        <a href="/login">Log In</a>
                    </div>
                )}
                <a href="/about">About Us</a>
                <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    );
  }
}

export default Navbar;
