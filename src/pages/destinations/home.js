import React, { Component } from 'react'
import { getDestinations } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'

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

        let destinationItems = this.state.destinations.map((destination, index) => {
            return(
                <DestinationCard destination={this.state.destinations[index]} />
            )
        }
    )

        return (
            <div className="card">
                {destinationItems}
            </div>
        )
    }
}

export default Home
