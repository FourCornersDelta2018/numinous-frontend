import React, { Component } from 'react'
import { getDestinations, getGeographies, getExperiences, getLanguages } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'
import Filter from '../../components/filter'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props){
       super(props)
       this.state = {
           destinations: [],
           geography: "All",
           experience: "All",
           language: "All",
           arrayOfGeography: [],
           arrayOfExperience: [],
           arrayOfLanguage: []
       }
   }

    componentWillMount() {
       getDestinations()
       .then(APIdestinations => {
           this.setState({
               destinations: APIdestinations.destinations
           })
       })
       getGeographies()
       .then(APIGeographies => {
           this.setState({
               arrayOfGeography: APIGeographies.geographies[0]
           })
       })
       getExperiences()
       .then(APIExperiences => {
           this.setState({
               arrayOfExperience: APIExperiences.experiences[0]
           })
       })
       getLanguages()
       .then(APILanguages => {
           this.setState({
               arrayOfLanguage: APILanguages.languages[0]
           })
       })
    }

    updateFilterValues = (attribute, value) => {
      this.setState({[attribute]: value})
    }

    render() {
      let {arrayOfGeography, arrayOfExperience, arrayOfLanguage, destinations, geography, experience, language} = this.state
        return (
            <div>
<<<<<<< HEAD
                <div id="backgroundHome"></div>
                <div className="container" style={{flex: "1"}}>
                    <h3>Click on locations below to explore the world. Start your own Epic journey by registering today.</h3>
                    {this.state.destinations.map((destination, index) => {
                      if (this.state.geography===destination.geography && this.state.experience===destination.experience && this.state.language===destination.language) {
=======
              <div id="filter-section">
                <Filter attribute="Geography" array={arrayOfGeography} updateFilterValues={this.updateFilterValues}/>
                <Filter attribute="Experience" array={arrayOfExperience} updateFilterValues={this.updateFilterValues}/>
                <Filter attribute="Language" array={arrayOfLanguage} updateFilterValues={this.updateFilterValues}/>
              </div>
                <div className="container" style={{flex: "1"}}>
                    {destinations.map((destination, index) => {
                      if (geography===destination.geography && experience===destination.experience && language===destination.language) {
>>>>>>> 7ca7a63a6abba982c6a460fcc746eb2c79052fd5
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography===destination.geography && experience===destination.experience && language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography===destination.geography && experience==="All" && language===destination.language) {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography===destination.geography && experience===destination.experience && language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography===destination.geography && experience==="All" && language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography==="All" && experience===destination.experience && language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography==="All" && experience==="All" && language===destination.language) {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
                          </Link>
                        )
                      } else if (geography==="All" && experience==="All" && language==="All") {
                        return (
                          <Link to={`/destinations/${destination.destination.id}`}>
                            <DestinationCard destination={destinations[index].destination} />
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
