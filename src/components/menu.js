import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AuthService from '../services'

class SimpleMenu extends React.Component {
  constructor(props){
      super(props)
      let auth = new AuthService()
      this.state = {
          anchorEl: null,
          isLoggedIn: auth.loggedIn()
      }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = (e) => {
      let auth = new AuthService()
      auth.logout()
  }

  render() {
    const { anchorEl, isLoggedIn } = this.state;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {isLoggedIn ? (
          <div>
            <a href="/myepic"><MenuItem onClick={this.handleClose}>My Epic</MenuItem></a>
            <a href="/"><MenuItem onClick={this.handleLogOut}>Log Out</MenuItem></a>
          </div>
          ) : (
          <div>
            <a href="/registration"><MenuItem onClick={this.handleClose}>Register</MenuItem></a>
            <a href="/login"><MenuItem onClick={this.handleClose}>Log In</MenuItem></a>
          </div>
          )}
          <a href="/about"><MenuItem onClick={this.handleClose}>About Us</MenuItem></a>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
