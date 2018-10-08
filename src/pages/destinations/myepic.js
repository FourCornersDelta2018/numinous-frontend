import React, { Component } from 'react'
import AuthService from '../../services'
import { getSavedDestinations } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'
import { Link } from 'react-router-dom'

class MyEpic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destinations: []
        }
    }

    componentWillMount() {
        let auth = new AuthService()
        let current_user_id = auth.getUserId()
        console.log(current_user_id);
        getSavedDestinations(current_user_id)
        //// TODO: review this----------------------------------------------------
        .then(savedDestinationInfo => {
            console.log(savedDestinationInfo);
            this.setState({destinations: savedDestinationInfo})
        })
    }

  render() {
      return (
          <container>

                <div className="column1"><h2>Welcome, Fatface!</h2>
                </div>

                <div className="column2" style={{borderLeft: "2px solid black", borderRight: "2px solid black", height: "500px"}}><h2>This is where you would go if you were not broke!</h2>
                {this.state.destinations.map((destination, index) => {
                    return (
                        <Link to={`/destinations/${destination.destination_id}`}>
                            <DestinationCard destination={destination.destination} />
                        </Link>
                    )
                })}

                </div>

                <div className="column3"><h2>I am wee little icebox column</h2>
                </div>
          </container>
      )
  }
}
export default MyEpic
