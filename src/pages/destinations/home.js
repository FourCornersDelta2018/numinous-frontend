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
                <div id="backgroundHome"></div>
                <div className="container" style={{flex: "1"}}>
                    <h3>Click on locations below to explore the world. Start your own Epic journey by registering today.</h3>
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
