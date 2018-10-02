import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
            <div className="pullLeft">
                <h1 id="brand">Numinous</h1>
                
            </div>
            <div className="pullRight">
                Menu
            </div>
        </div>
    );
  }
}

export default Navbar;
