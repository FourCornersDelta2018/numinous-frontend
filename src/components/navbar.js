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
  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
        <div className="navbar">
            <div className="pullLeft">
                <h1 id="brand">Numinous</h1>
            </div>
            <div>I am a tag line </div>
            <div className="pullRight">
                {isLoggedIn ? (
                    <button>Log Out</button>
                ) : (
                    <button>Log In</button>
                )}
            </div>
        </div>
    );
  }
}

export default Navbar;
