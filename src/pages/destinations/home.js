import React, { Component } from 'react'
import { getDestinations } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor(props){
       super(props)
       this.state = {
           destinations: []
       }
   }

    componentWillMount() {
       getDestinations()
       .then(APIdestinations => {
           this.setState({
               destinations: APIdestinations
           })
       })
    }

    render() {
        return (
            <div>
                <div id="backgroundHome"></div>
                <div className="container">
                    {this.state.destinations.map((destination, index) => {
                        return (
                          <Link to={`/destinations/${destination.id}`}>
                              <DestinationCard destination={this.state.destinations[index]} />
                          </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home
