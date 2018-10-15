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
                <a href="/"><h1 id="brand">Numinous</h1></a>
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

//from code to be in render on home page or its own component

              // <div id="filter-section">
              //   <form autoComplete="off">
              //     <FormControl id="filter">
              //       <InputLabel>Geography</InputLabel>
              //       <Select
              //         open={this.state.open}
              //         onClose={this.handleClose}
              //         onOpen={this.handleOpen}
              //         value={this.state.geography}
              //         onChange={this.handleChange}
              //         inputProps={{
              //           name: 'geography'
              //         }}
              //       >
              //         <MenuItem value="All">
              //           <em>All</em>
              //         </MenuItem>
              //         {this.state.arrayOfGeography.map((geography) => {
              //             return (
              //                 <MenuItem value={geography}>{geography}</MenuItem>
              //             )
              //         })}
              //       </Select>
              //       </FormControl>
              //       </form>
              //       <form autoComplete="off">
              //       <FormControl id="filter">
              //         <InputLabel>Experience</InputLabel>
              //           <Select
              //             open={this.state.open}
              //             onClose={this.handleClose}
              //             onOpen={this.handleOpen}
              //             value={this.state.experience}
              //             onChange={this.handleChange}
              //             inputProps={{
              //               name: 'experience'
              //             }}
              //           >
              //             <MenuItem value="All">
              //               <em>All</em>
              //             </MenuItem>
              //             {this.state.arrayOfExperience.map((experience) => {
              //                 return (
              //                     <MenuItem value={experience}>{experience}</MenuItem>
              //                 )
              //             })}
              //           </Select>
              //         </FormControl>
              //         </form>
              //       <form autoComplete="off">
              //       <FormControl id="filter">
              //         <InputLabel>Language</InputLabel>
              //           <Select
              //             open={this.state.open}
              //             onClose={this.handleClose}
              //             onOpen={this.handleOpen}
              //             value={this.state.language}
              //             onChange={this.handleChange}
              //             inputProps={{
              //               name: 'language'
              //             }}
              //           >
              //             <MenuItem value="All">
              //               <em>All</em>
              //             </MenuItem>
              //             {this.state.arrayOfLanguage.map((language) => {
              //                 return (
              //                     <MenuItem value={language}>{language}</MenuItem>
              //                 )
              //             })}
              //           </Select>
              //         </FormControl>
              //       </form>
              //     </div>
