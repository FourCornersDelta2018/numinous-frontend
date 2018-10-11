import React, { Component } from 'react'
import { getDestinations } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


class Home extends Component {
    constructor(props){
       super(props)
       this.state = {
           destinations: [],
           geographyOpen: false,
           experienceOpen: false,
           languageOpen: false,
           geography: "All",
           experience: "All",
           language: "All",
           arrayOfGeography: [
             "Mountains",
             "City",
             "Canyon",
             "Tropical",
             "Glacier",
             "Coast",
             "Beach",
             "Hot Springs",
             "Lake",
             "Island"
           ],
           arrayOfExperience: [
             "Art/Museums",
             "Fair/Festival",
             "History",
             "Landmark",
             "Nature",
             "Oddity",
             "Spas/Srings",
             "Wineries",
             "Ancient Ruins",
             "Urban Exploration"
           ],
           arrayOfLanguage: [
             "Spanish",
             "Japanese",
             "English",
             "German",
             "Marathi",
             "Mandarin",
             "Dzongkha",
             "Burmese",
             "Indonesian",
             "Portuguese",
             "Italian",
             "French",
             "Romansh"
           ]
       }
   }

    componentWillMount() {
       getDestinations()
       .then(APIdestinations => {
           this.setState({
               destinations: APIdestinations.destinations
           })
       })
    }

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleOpen = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
              <div id="filter-section">
                <form autoComplete="off">
                  <FormControl id="filter">
                    <InputLabel>Geography</InputLabel>
                    <Select
                      open={this.state.open}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      value={this.state.geography}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'geography'
                      }}
                    >
                      <MenuItem value="All">
                        <em>All</em>
                      </MenuItem>
                      {this.state.arrayOfGeography.map((geography) => {
                          return (
                              <MenuItem value={geography}>{geography}</MenuItem>
                          )
                      })}
                    </Select>
                    </FormControl>
                    </form>
                    <form autoComplete="off">
                    <FormControl id="filter">
                      <InputLabel>Experience</InputLabel>
                        <Select
                          open={this.state.open}
                          onClose={this.handleClose}
                          onOpen={this.handleOpen}
                          value={this.state.experience}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'experience'
                          }}
                        >
                          <MenuItem value="All">
                            <em>All</em>
                          </MenuItem>
                          {this.state.arrayOfExperience.map((experience) => {
                              return (
                                  <MenuItem value={experience}>{experience}</MenuItem>
                              )
                          })}
                        </Select>
                      </FormControl>
                      </form>
                    <form autoComplete="off">
                    <FormControl id="filter">
                      <InputLabel>Language</InputLabel>
                        <Select
                          open={this.state.open}
                          onClose={this.handleClose}
                          onOpen={this.handleOpen}
                          value={this.state.language}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'language'
                          }}
                        >
                          <MenuItem value="All">
                            <em>All</em>
                          </MenuItem>
                          {this.state.arrayOfLanguage.map((language) => {
                              return (
                                  <MenuItem value={language}>{language}</MenuItem>
                              )
                          })}
                        </Select>
                      </FormControl>
                    </form>
                  </div>
                <div className="container" style={{flex: "1"}}>
                    {this.state.destinations.map((destination, index) => {
                      if (this.state.geography===destination.geography && this.state.experience===destination.experience && this.state.language===destination.language) {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography===destination.geography && this.state.experience===destination.experience && this.state.language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography===destination.geography && this.state.experience==="All" && this.state.language===destination.language) {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography===destination.geography && this.state.experience===destination.experience && this.state.language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography===destination.geography && this.state.experience==="All" && this.state.language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography==="All" && this.state.experience===destination.experience && this.state.language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography==="All" && this.state.experience==="All" && this.state.language===destination.language) {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      } else if (this.state.geography==="All" && this.state.experience==="All" && this.state.language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={this.state.destinations[index].destination} />
                          </Link>
                        )
                      }
                    })}
                </div>
            </div>
        )
    }
}

export default Home
