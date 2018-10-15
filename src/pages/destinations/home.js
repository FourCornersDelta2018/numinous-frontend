import React, { Component } from 'react'
import { getDestinations } from '../../api_backend/index.js'
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
             "Spas/Springs",
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

    updateFilterValues = (attribute, value) => {
      this.setState({[attribute]: value})
    }

    render() {
      let {arrayOfGeography, arrayOfExperience, arrayOfLanguage, destinations, geography, experience, language} = this.state
        return (
            <div>
              <div id="filter-section">
                <Filter attribute="Geography" array={arrayOfGeography} updateFilterValues={this.updateFilterValues}/>
                <Filter attribute="Experience" array={arrayOfExperience} updateFilterValues={this.updateFilterValues}/>
                <Filter attribute="Language" array={arrayOfLanguage} updateFilterValues={this.updateFilterValues}/>
              </div>
                <div className="container" style={{flex: "1"}}>
                    {destinations.map((destination, index) => {
                      if (geography===destination.geography && experience===destination.experience && language===destination.language) {
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
